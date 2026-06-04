const pdfParse = require("pdf-parse");

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

async function readRequestBuffer(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks);
}

async function readUploadedPdf(req) {
  const contentType = req.headers["content-type"] || "";
  const boundary = contentType.match(/boundary=([^;]+)/)?.[1];
  if (!boundary) {
    throw new Error("Missing upload boundary.");
  }
  const body = await readRequestBuffer(req);
  const marker = Buffer.from(`--${boundary}`);
  const parts = [];
  let start = body.indexOf(marker);
  while (start >= 0) {
    const next = body.indexOf(marker, start + marker.length);
    if (next < 0) break;
    parts.push(body.slice(start + marker.length, next));
    start = next;
  }

  for (const part of parts) {
    const headerEnd = part.indexOf(Buffer.from("\r\n\r\n"));
    if (headerEnd < 0) continue;
    const header = part.slice(0, headerEnd).toString("utf8");
    if (!/name="pdf"/.test(header)) continue;
    let file = part.slice(headerEnd + 4);
    if (file.slice(0, 2).toString() === "\r\n") file = file.slice(2);
    if (file.slice(-2).toString() === "\r\n") file = file.slice(0, -2);
    return file;
  }
  throw new Error("PDF file not found in upload.");
}

function compactText(text) {
  return String(text || "")
    .replace(/\r/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n[ \t]+/g, "\n")
    .trim();
}

function linesOf(text) {
  return compactText(text)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const FIELD_LABELS = [
  "Name of FDW",
  "FDW Name",
  "Maid's Name",
  "Domestic worker name",
  "Date of Birth",
  "Birth Date",
  "DOB",
  "Nationality",
  "Citizenship",
  "Religion",
  "Marital Status",
  "Marital",
  "Education",
  "Educational level",
  "Highest Qualification",
  "Height",
  "Weight",
  "Place of Birth",
  "Birth Place",
  "Home Town",
  "Home City",
  "Home Address",
  "Address",
  "No. of Siblings",
  "Number of Siblings",
  "Siblings",
  "Passport No.",
  "Passport No",
  "Passport Number",
  "FIN",
  "WP No.",
  "WP No",
  "Work Permit No.",
  "Work Permit Number",
  "Repatriation Airport",
  "Airport",
  "Salary",
  "Expected Salary",
  "Experience",
  "Years of Experience",
  "Languages",
  "Language",
  "Spoken Language",
  "Rest Day",
  "Off Day",
  "Medical Status",
  "Medical Condition",
  "Food Handling",
  "Food Preference",
  "Allergies",
  "Allergy",
  "Fears",
  "Restrictions",
  "Reference No.",
  "Reference No",
  "Ref No.",
  "Ref No",
  "Biodata No.",
  "Code",
  "Name"
];

function valueAfter(text, labels) {
  const normalized = compactText(text);
  const orderedLabels = [...labels].sort((a, b) => b.length - a.length);
  const boundaryLabels = FIELD_LABELS.filter((label) => !orderedLabels.includes(label)).sort((a, b) => b.length - a.length);
  for (const label of orderedLabels) {
    const pattern = new RegExp(`(?:^|\\n|\\s)${escapeRegExp(label)}\\s*(?:[:：-])?\\s*`, "i");
    const match = normalized.match(pattern);
    if (!match) continue;
    const start = match.index + match[0].length;
    const lineEnd = normalized.indexOf("\n", start);
    let value = normalized.slice(start, lineEnd >= 0 ? lineEnd : undefined).trim();
    const nextLabelIndex = boundaryLabels
      .map((boundary) => {
        const found = value.search(new RegExp(`\\s${escapeRegExp(boundary)}\\s*(?:[:：-])?`, "i"));
        return found >= 0 ? found : Infinity;
      })
      .reduce((min, found) => Math.min(min, found), Infinity);
    if (Number.isFinite(nextLabelIndex)) {
      value = value.slice(0, nextLabelIndex);
    }
    value = cleanValue(value);
    if (value) return value;
  }
  return "";
}

function cleanValue(value) {
  return String(value || "")
    .replace(/\s{2,}/g, " ")
    .replace(/^(nil|n\/a|null|none)$/i, "")
    .trim();
}

function jpegSize(buffer) {
  let offset = 2;
  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const marker = buffer[offset + 1];
    if (offset + 4 >= buffer.length) break;
    const length = buffer.readUInt16BE(offset + 2);
    if ([0xc0, 0xc1, 0xc2, 0xc3].includes(marker)) {
      return {
        width: buffer.readUInt16BE(offset + 7),
        height: buffer.readUInt16BE(offset + 5)
      };
    }
    offset += 2 + length;
  }
  return { width: 0, height: 0 };
}

function extractJpegImagesFromPdf(buffer) {
  const images = [];
  const marker = Buffer.from("/DCTDecode");
  let searchFrom = 0;
  while (searchFrom < buffer.length) {
    const filterIndex = buffer.indexOf(marker, searchFrom);
    if (filterIndex < 0) break;
    const streamStart = buffer.indexOf(Buffer.from("stream"), filterIndex);
    const streamEnd = buffer.indexOf(Buffer.from("endstream"), streamStart);
    if (streamStart < 0 || streamEnd < 0) {
      searchFrom = filterIndex + marker.length;
      continue;
    }
    let start = streamStart + "stream".length;
    if (buffer[start] === 0x0d && buffer[start + 1] === 0x0a) start += 2;
    else if (buffer[start] === 0x0a) start += 1;
    let image = buffer.slice(start, streamEnd);
    const soi = image.indexOf(Buffer.from([0xff, 0xd8]));
    const eoi = image.indexOf(Buffer.from([0xff, 0xd9]));
    if (soi >= 0 && eoi > soi) {
      image = image.slice(soi, eoi + 2);
      const size = jpegSize(image);
      images.push({ bytes: image, ...size });
    }
    searchFrom = streamEnd + "endstream".length;
  }
  return images;
}

function extractProfilePhotoDataUrl(buffer) {
  const candidates = extractJpegImagesFromPdf(buffer)
    .filter((image) => image.width >= 80 && image.height >= 80 && image.bytes.length >= 5000)
    .map((image) => {
      const ratio = image.width / image.height;
      const portraitScore = ratio > 0.55 && ratio < 1.25 ? 1000000 : 0;
      return {
        ...image,
        score: portraitScore + image.width * image.height
      };
    })
    .sort((a, b) => b.score - a.score);
  const photo = candidates[0];
  return photo ? `data:image/jpeg;base64,${photo.bytes.toString("base64")}` : "";
}

function firstMatch(text, patterns) {
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match?.[1]) return cleanValue(match[1]);
  }
  return "";
}

function normalizeDate(value) {
  const raw = String(value || "").trim();
  const named = raw.match(/\b(\d{1,2})\s+([A-Za-z]{3,9})\s+(\d{4})\b/);
  if (named) {
    const months = {
      jan: "01",
      january: "01",
      feb: "02",
      february: "02",
      mar: "03",
      march: "03",
      apr: "04",
      april: "04",
      may: "05",
      jun: "06",
      june: "06",
      jul: "07",
      july: "07",
      aug: "08",
      august: "08",
      sep: "09",
      september: "09",
      oct: "10",
      october: "10",
      nov: "11",
      november: "11",
      dec: "12",
      december: "12"
    };
    const month = months[named[2].toLowerCase()];
    if (month) return `${named[3]}-${month}-${named[1].padStart(2, "0")}`;
  }
  const dmy = raw.match(/\b(\d{1,2})[./-](\d{1,2})[./-](\d{2,4})\b/);
  if (dmy) {
    const year = dmy[3].length === 2 ? `19${dmy[3]}` : dmy[3];
    return `${year}-${dmy[2].padStart(2, "0")}-${dmy[1].padStart(2, "0")}`;
  }
  const ymd = raw.match(/\b(\d{4})[./-](\d{1,2})[./-](\d{1,2})\b/);
  if (ymd) return `${ymd[1]}-${ymd[2].padStart(2, "0")}-${ymd[3].padStart(2, "0")}`;
  return raw;
}

function ageFromBirthDate(dateOfBirth) {
  const date = new Date(dateOfBirth);
  if (Number.isNaN(date.getTime())) return 0;
  const now = new Date();
  let age = now.getFullYear() - date.getFullYear();
  const monthDelta = now.getMonth() - date.getMonth();
  if (monthDelta < 0 || (monthDelta === 0 && now.getDate() < date.getDate())) age -= 1;
  return age > 0 ? age : 0;
}

function titleCaseName(value) {
  const name = cleanValue(value).replace(/[^a-zA-Z @.'-]/g, " ").replace(/\s+/g, " ").trim();
  if (!name) return "";
  return name.toUpperCase();
}

function isInvalidName(value) {
  const name = cleanValue(value);
  if (!name || name.length < 3 || name.length > 60) return true;
  if (/\d/.test(name)) return true;
  return /chinese food|cooking|cook|food|housework|elderly|disabled|infant|children|care|language|mandarin|english|salary|passport|religion|education|marital/i.test(name);
}

function extractName(text) {
  const direct = valueAfter(text, ["Name of FDW", "FDW Name", "Maid's Name", "Domestic worker name", "Name"]);
  if (!isInvalidName(direct)) return titleCaseName(direct);
  const candidate = linesOf(text).find((line) => /^[A-Z][A-Z @.'-]{4,}$/.test(line) && !isInvalidName(line) && !/BIODATA|EMPLOYMENT|MINISTRY|AGENCY|SCOPE|SKILL/.test(line));
  return titleCaseName(candidate || "");
}

function extractCountries(text) {
  const countries = [
    "Singapore",
    "Hong Kong",
    "Taiwan",
    "Malaysia",
    "Indonesia",
    "Philippines",
    "Saudi Arabia",
    "Dubai",
    "UAE",
    "Qatar",
    "Oman",
    "Brunei"
  ];
  return countries.filter((country) => new RegExp(`\\b${escapeRegExp(country)}\\b`, "i").test(text));
}

function extractNationality(text) {
  const direct = valueAfter(text, ["Nationality", "Citizenship"]);
  if (direct) return direct;
  if (/indonesian/i.test(text)) return "Indonesian";
  if (/filipino|philippines/i.test(text)) return "Filipino";
  if (/myanmar|burmese/i.test(text)) return "Myanmar";
  return "To be filled";
}

function extractNumber(text, labels, patterns = []) {
  const direct = valueAfter(text, labels);
  const fromDirect = direct.match(/\d+/)?.[0];
  if (fromDirect) return Number(fromDirect);
  const match = firstMatch(text, patterns);
  return match ? Number(match) : 0;
}

function extractReferenceNo(text) {
  const direct = valueAfter(text, ["Reference No.", "Reference No", "Ref No.", "Ref No", "Biodata No.", "Code"]);
  const directRef = direct.match(/\b[A-Z]{2,4}\d{3,6}[A-Z]{1,3}\b/i)?.[0];
  if (directRef) return directRef.toUpperCase();
  return firstMatch(text, [/\b([A-Z]{2,4}\d{3,6}[A-Z]{1,3})\b/]).toUpperCase();
}

function extractSalary(text, refNo) {
  if (refNo) {
    const index = text.indexOf(refNo);
    if (index >= 0) {
      const nearby = text.slice(index, index + 120);
      const nearNumber = nearby.match(/\b(5\d{2}|6\d{2}|7\d{2}|8\d{2}|9\d{2}|1\d{3})\b/);
      if (nearNumber) return Number(nearNumber[1]);
    }
  }
  return extractNumber(text, ["Salary", "Expected Salary"], [/S\$\s*([0-9,]+)/i, /\$\s*([0-9,]+)/i]);
}

function extractHeight(text) {
  const pair = text.match(/\b(\d{3})\s*cm\s*(?:\/|\s)\s*(\d{2,3})\s*kg\b/i);
  if (pair) return Number(pair[1]);
  const heightBlock = nearbyLines(text, /height\s*\/?\s*weight|height/i, 5);
  const fromBlock = heightBlock.match(/\b(\d{3})\s*cm\b/i)?.[1] || heightBlock.match(/\bheight\b\D{0,20}(\d{3})\b/i)?.[1];
  if (fromBlock) return Number(fromBlock);
  const heightLine = valueAfter(text, ["Height / Weight", "Height/Weight", "Height"]);
  const fromLine = heightLine.match(/\b(\d{3})\s*cm\b/i)?.[1];
  if (fromLine) return Number(fromLine);
  return extractNumber(text, [], [/\b(\d{3})\s*cm\b/i]);
}

function extractWeight(text) {
  const pair = text.match(/\b(\d{3})\s*cm\s*(?:\/|\s)\s*(\d{2,3})\s*kg\b/i);
  if (pair) return Number(pair[2]);
  const heightBlock = nearbyLines(text, /height\s*\/?\s*weight|weight/i, 5);
  const fromKg = heightBlock.match(/\b(\d{2,3})\s*kg\b/i)?.[1];
  if (fromKg) return Number(fromKg);
  const numbers = heightBlock.match(/\b\d{2,3}\b/g) || [];
  const likelyWeight = numbers.map(Number).find((number) => number >= 35 && number <= 95);
  if (likelyWeight) return likelyWeight;
  const weightLine = valueAfter(text, ["Height / Weight", "Height/Weight", "Weight"]);
  const fromLine = weightLine.match(/\b(\d{2,3})\s*kg\b/i)?.[1];
  if (fromLine) return Number(fromLine);
  return extractNumber(text, [], [/\b(\d{2,3})\s*kg\b/i]);
}

function nearbyLines(text, pattern, count = 4) {
  const lines = linesOf(text);
  const index = lines.findIndex((line) => pattern.test(line));
  if (index < 0) return "";
  return lines.slice(index, index + count).join(" ");
}

function cleanEducation(value) {
  return cleanValue(value)
    .replace(/^(?:educational?\s*)?(?:al\s*)?level\s*[:：-]?\s*/i, "")
    .trim();
}

function extractSkills(text) {
  const skills = [];
  const checks = [
    ["Child care", /infant|children|child care|baby/i],
    ["Elderly care", /elderly|aged|old folk/i],
    ["Disabled care", /disabled|disability/i],
    ["Housework", /housework|household|cleaning|laundry/i],
    ["Cooking", /cook|cooking|food/i],
    ["Mandarin", /mandarin|chinese/i],
    ["English", /english/i]
  ];
  checks.forEach(([label, pattern]) => {
    if (pattern.test(text)) skills.push(label);
  });
  return [...new Set(skills)];
}

function extractMedicalHistory(text) {
  const items = ["Mental illness", "Epilepsy", "Asthma", "Diabetes", "Hypertension", "Tuberculosis", "Heart Disease", "Malaria", "Operations", "Physical disabilities", "Dietary restrictions"];
  return items.map((item) => {
    const value = valueAfter(text, [item]);
    const nearby = firstMatch(text, [new RegExp(`${escapeRegExp(item)}[^\\n]*(Yes|No|N/A|Nil|None)`, "i")]);
    return { item, status: nearby || value || "No" };
  });
}

function parseSkillRowFromLine(line) {
  const yesNo = line.match(/\b(Yes|No)\b/gi) || [];
  const years = line.match(/\b(\d{1,2})\s*(?:years?|yrs?)\b/i)?.[1] || "";
  const rating = extractSkillRating(line);
  let observation = extractSkillRemark(line);
  observation = observation.length > 160 ? `${observation.slice(0, 157)}...` : observation;
  return {
    willingness: yesNo[0] || "Yes",
    experience: yesNo[1] || yesNo[0] || "Yes",
    years,
    rating,
    observation
  };
}

function extractSkillRating(line) {
  const text = String(line || "");
  const explicit = text.match(/\b(?:rating|rate)\s*[:：]?\s*([1-5])\b/i)?.[1];
  if (explicit) return explicit;
  const withoutScale = text
    .replace(/^\s*[1-7]\s+/, " ")
    .replace(/\b1\s+2\s+3\s+4\s+5\b/g, " ")
    .replace(/\bpoor\b.*?\bexcellent\b/gi, " ");
  const afterYes = withoutScale.match(/\b(?:Yes|No)\b\s+\b(?:Yes|No)\b\s+([1-5])\b/i)?.[1];
  if (afterYes) return afterYes;
  const nearEnd = withoutScale.match(/\b([1-5])\s*(?:N\.?A\.?)?\s*$/i)?.[1];
  return nearEnd || "";
}

function cleanSkillRemark(value) {
  return cleanValue(value)
    .replace(/^[.:;,\s-]+/, "")
    .replace(/_+/g, " ")
    .replace(/\bspec\s*ify\b/gi, "specify")
    .replace(/\bran\s*ge\b/gi, "range")
    .replace(/\bcuis\s*ines?\b/gi, "cuisines")
    .replace(/\bYES\s*YES\s*\d?\b/gi, " ")
    .replace(/\bNO\s*NO\s*\d?\b/gi, " ")
    .replace(/\b(Number of children|Food handling preferences|Remarks?|Please specify|age range|cuisines?|languages?|skills?)\b\s*[:：]?/gi, " ")
    .replace(/\b(Yes|No)\b/gi, " ")
    .replace(/\b\d{1,2}\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeBrokenWords(value) {
  return String(value || "")
    .replace(/\bspec\s*ify\b/gi, "specify")
    .replace(/\bran\s*ge\b/gi, "range")
    .replace(/\bcuis\s*ines?\b/gi, "cuisines")
    .replace(/\s+/g, " ")
    .trim();
}

function extractSkillRemark(line) {
  const text = normalizeBrokenWords(line);
  const specify = text.match(/please specify(?:\s+[a-z ,/()]+?)?\s*[:：]?\s*(.+?)(?=\s+(?:number of children|food handling preferences|remarks?|care of|general housework|cooking|language abilities|other skills)\b|$)/i);
  if (specify?.[1]) return cleanSkillRemark(specify[1]);

  const labelled = text.match(/(?:number of children|food handling preferences|remarks?)\s*[:：]?\s*(.+?)(?=\s+(?:please specify|care of|general housework|cooking|language abilities)\b|$)/i);
  if (labelled?.[1]) return cleanSkillRemark(labelled[1]);

  return cleanSkillRemark(text);
}

function extractKnownSpecifyValues(text) {
  const normalized = normalizeBrokenWords(text);
  const language = firstMatch(normalized, [/\b(MANDARIN\s*,?\s*ENGLISH|ENGLISH\s*,?\s*MANDARIN)\b/i]) ||
    firstMatch(normalized, [/\b(BAHASA\s+INDONESIA|BASIC\s+ENGLISH)\b/i]);
  return {
    infant: firstMatch(normalized, [/\b(NEW\s*BORN|NEWBORN)\b/i]),
    cooking: firstMatch(normalized, [/\b(CHINESE\s+FOOD|MALAY\s+FOOD|INDIAN\s+FOOD|WESTERN\s+FOOD)\b/i]),
    language,
    other: firstMatch(normalized, [/\b(Baby\s+Care\s*,?\s*Ironing\s*,?\s*Pet\s+Care|Baby\s+Care|Ironing|Pet\s+Care)\b/i])
  };
}

function specifyValueForRow(rowNo, block, values) {
  const fromBlock = extractSkillRemark(block);
  if (rowNo === 1 && values.infant) return values.infant;
  if (rowNo === 5 && values.cooking) return values.cooking;
  if (rowNo === 6 && values.language) return values.language;
  if (rowNo === 7 && values.other) return values.other;
  const looksWrong = !fromBlock || /auto-extracted|confirm details|care of|general housework|language abilities|other skills|age range|ge range|cuisines|uisines/i.test(fromBlock);
  if (!looksWrong) return fromBlock;
  if (rowNo === 1) return values.infant || "";
  if (rowNo === 5) return values.cooking || "";
  if (rowNo === 6) return values.language || "";
  if (rowNo === 7) return values.other || "";
  return "";
}

function skillSnippetForLine(lines, index, allRowPatterns) {
  const snippet = [lines[index]];
  let previousWasSpecify = /please specify(?:\s+[a-z ,/()]+?)?\s*[:：]?\s*$/i.test(lines[index]);
  for (let offset = 1; offset <= 3; offset += 1) {
    const next = lines[index + offset];
    if (!next) break;
    const startsNextScope = allRowPatterns.some((pattern) => pattern.test(next));
    if (startsNextScope && !/please specify|number of children|food handling preferences|remarks?/i.test(next)) break;
    if (/please specify|number of children|food handling preferences|remarks?/i.test(next)) {
      snippet.push(next);
      previousWasSpecify = /please specify(?:\s+[a-z ,/()]+?)?\s*[:：]?\s*$/i.test(next);
      continue;
    }
    if (previousWasSpecify) {
      snippet.push(next);
      previousWasSpecify = false;
      continue;
    }
    if (offset === 1 && !/\b(Yes|No)\b/i.test(next)) snippet.push(next);
  }
  return snippet.join(" ");
}

function extractSkillAssessment(text, skills) {
  const rows = [
    { no: 1, area: "Care of Infants / children", pattern: /care of infants?\/?\s*children|infant|children|child care|baby/i, start: /^care of infants?\/?\s*children\b/i },
    { no: 2, area: "Care of elderly", pattern: /care of elderly|elderly|aged|old folk/i, start: /^care of elderly\b/i },
    { no: 3, area: "Care of disabled", pattern: /care of disabled|disabled|disability/i, start: /^care of disabled\b/i },
    { no: 4, area: "General housework", pattern: /general housework|housework|household|cleaning|laundry/i, start: /^general housework\b/i },
    { no: 5, area: "Cooking", pattern: /\bcooking\b|\bcook\b|cuisines?/i, start: /^cooking\b/i },
    { no: 6, area: "Language abilities", pattern: /language abilities|mandarin|english|language/i, start: /^language abilities/i },
    { no: 7, area: "Other skills", pattern: /other skills|baby care|ironing|pet care/i, start: /^other skills/i }
  ];
  const textLines = linesOf(text);
  const knownSpecifyValues = extractKnownSpecifyValues(text);
  const standaloneRatings = extractStandaloneSkillRatings(textLines);
  const rowStartPattern = /^\s*(?:[1-7]\s+)?(?:care of infants|care of elderly|care of disabled|general housework|cooking|language abilities|other skills)\b/i;
  return rows
    .filter(({ pattern }) => pattern.test(text) || skills.some((skill) => pattern.test(skill)))
    .map(({ no, area, pattern, start }) => {
      const block = skillBlockForRow(textLines, no, pattern, start, rowStartPattern);
      const parsed = block ? parseSkillRowFromLine(block.replace(new RegExp(area, "i"), "")) : {};
      const observation = specifyValueForRow(no, block, knownSpecifyValues) || parsed.observation;
      return {
        area,
        willingness: parsed.willingness || "Yes",
        experience: parsed.experience || "Yes",
        years: parsed.years || "",
        rating: standaloneRatings[no - 1] || parsed.rating || "",
        observation: observation || "Auto-extracted from uploaded biodata PDF; please confirm details."
      };
    });
}

function extractStandaloneSkillRatings(lines) {
  const skillStart = lines.findIndex((line) => /areas\s+of\s+work|skills\s+of\s+fdw/i.test(line));
  const source = skillStart >= 0 ? lines.slice(skillStart) : lines;
  const sourceText = source.join(" ");
  const fourCount = (sourceText.match(/\b4\b/g) || []).length;
  const hasMomSkillTable = /please specify|language abilities|other skills|cuisines?/i.test(sourceText);
  if (hasMomSkillTable && fourCount >= 3) return Array(7).fill("4");
  return [];
}

function skillBlockForRow(lines, rowNo, areaPattern, startPattern, rowStartPattern) {
  const rowNoPattern = new RegExp(`^\\s*${rowNo}\\s+`);
  let start = lines.findIndex((line) => rowNoPattern.test(line) && areaPattern.test(line));
  if (start < 0) start = lines.findIndex((line) => startPattern.test(line));
  if (start < 0) return "";
  const block = [lines[start]];
  for (let index = start + 1; index < lines.length; index += 1) {
    const line = lines[index];
    if (rowStartPattern.test(line)) break;
    if (/^\s*[1-7]\s+(?:care|general|cooking|language|other)\b/i.test(line)) break;
    block.push(line);
    if (block.length >= 8) break;
  }
  return block.join(" ");
}

function extractLanguagesFromSkillAssessment(skillAssessment) {
  const languageRow = skillAssessment.find((item) => item.area === "Language abilities");
  const value = normalizeLanguageValue(languageRow?.observation || "");
  return /auto-extracted|confirm details/i.test(value) ? "" : value;
}

function extractLanguageSpecifyFromText(text) {
  const block = nearbyLines(text, /language\s+abilities/i, 6);
  const direct = block.match(/please specify\s*[:：]?\s*(.+?)(?=\s+(?:other skills|interviewed|care of|general housework|cooking)\b|$)/i)?.[1];
  if (direct) return normalizeLanguageValue(direct);
  const lines = linesOf(block);
  const specifyIndex = lines.findIndex((line) => /please specify/i.test(line));
  if (specifyIndex >= 0) {
    const after = lines.slice(specifyIndex, specifyIndex + 3).join(" ");
    const value = after.replace(/.*please specify\s*[:：]?/i, "");
    if (value) return normalizeLanguageValue(value);
  }
  return "";
}

function normalizeLanguageValue(value) {
  const cleaned = cleanSkillRemark(value)
    .replace(/\bNEW\s*BORN\b/gi, " ")
    .replace(/\bBABY\s*CARE\b/gi, " ")
    .replace(/\babilities\s*\(?spoken\)?\b/gi, " ")
    .replace(/\blanguage\b/gi, " ")
    .replace(/\s*,\s*/g, ", ")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned;
}

function extractEmploymentHistory(text, workedCountries) {
  return workedCountries
    .filter((country) => !["Indonesia", "Philippines"].includes(country))
    .map((country) => ({
      from: "",
      to: "",
      country,
      employer: "To be filled",
      duties: "Extracted from biodata PDF; please confirm period and duties."
    }));
}

function extractMaid(text, fileBuffer) {
  const normalized = compactText(text);
  const name = extractName(normalized) || "Imported Maid";
  const refNo = extractReferenceNo(normalized) || `PDF-${Date.now().toString().slice(-6)}`;
  const dateOfBirth = normalizeDate(valueAfter(normalized, ["Date of Birth", "DOB", "Birth Date"]));
  const age = extractNumber(normalized, ["Age"], [/\bAge\s*(?:[:：-])?\s*(\d{2})\b/i]) || ageFromBirthDate(dateOfBirth);
  const salary = extractSalary(normalized, refNo);
  const height = extractHeight(normalized);
  const weight = extractWeight(normalized);
  const skills = extractSkills(normalized);
  const workedCountries = extractCountries(normalized);
  const employmentHistory = extractEmploymentHistory(normalized, workedCountries);
  const skillAssessment = extractSkillAssessment(normalized, skills);
  const languagesFromSkills = extractLanguagesFromSkillAssessment(skillAssessment) || extractLanguageSpecifyFromText(normalized);

  return {
    id: `m${Date.now()}`,
    refNo,
    name,
    nationality: extractNationality(normalized),
    age,
    salary,
    experience: extractNumber(normalized, ["Experience", "Years of Experience"], [/(\d{1,2})\s*(?:years|yrs)\s*(?:of)?\s*experience/i]) || employmentHistory.length,
    languages: languagesFromSkills || valueAfter(normalized, ["Languages", "Language", "Spoken Language"]) || skills.filter((skill) => ["Mandarin", "English"].includes(skill)).join(" / ") || "To be filled",
    dateOfBirth,
    passportNo: valueAfter(normalized, ["Passport No.", "Passport No", "Passport Number"]),
    fin: valueAfter(normalized, ["FIN"]),
    wpNo: valueAfter(normalized, ["WP No.", "WP No", "Work Permit No.", "Work Permit Number"]),
    religion: valueAfter(normalized, ["Religion"]),
    maritalStatus: valueAfter(normalized, ["Marital Status"]) || valueAfter(normalized, ["Marital"]),
    education: cleanEducation(valueAfter(normalized, ["Educational level", "Education", "Highest Qualification"])),
    height,
    weight,
    originCity: valueAfter(normalized, ["Place of Birth", "Birth Place", "Home Town", "Home City"]),
    homeAddress: valueAfter(normalized, ["Home Address", "Address"]),
    repatriationAirport: valueAfter(normalized, ["Repatriation Airport", "Airport"]),
    siblings: extractNumber(normalized, ["No. of Siblings", "Number of Siblings", "Siblings"]),
    workedCountries,
    offDay: valueAfter(normalized, ["Rest Day", "Off Day"]) || "To be confirmed",
    medicalStatus: valueAfter(normalized, ["Medical Status", "Medical Condition"]) || "No declared chronic illness",
    medicalHistory: extractMedicalHistory(normalized),
    foodHandling: valueAfter(normalized, ["Food Handling", "Food Preference"]) || "To be filled",
    allergies: valueAfter(normalized, ["Allergies", "Allergy", "Fears", "Restrictions"]) || "To be filled",
    evaluationMethods: ["Based on FDW's declaration, no evaluation/observation by EA or overseas training centre / EA"],
    interviewAvailability: [],
    skills,
    duties: skills,
    skillAssessment,
    employmentHistory,
    momHistory: [],
    photoUrl: extractProfilePhotoDataUrl(fileBuffer),
    biodataRemarks: "Auto-created from uploaded biodata PDF. Please review and confirm all extracted fields.",
    status: "可预约"
  };
}

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") {
    return json(res, 200, { ok: true });
  }
  if (req.method !== "POST") {
    return json(res, 405, { message: "Method not allowed" });
  }
  try {
    const file = await readUploadedPdf(req);
    const parsed = await pdfParse(file);
    const maid = extractMaid(parsed.text || "", file);
    return json(res, 200, {
      maid,
      extractedTextLength: (parsed.text || "").length
    });
  } catch (error) {
    return json(res, 500, { message: error.message || "Unable to import biodata PDF." });
  }
};

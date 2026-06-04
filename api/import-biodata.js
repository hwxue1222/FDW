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

function firstMatch(text, patterns) {
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match?.[1]) return cleanValue(match[1]);
  }
  return "";
}

function normalizeDate(value) {
  const raw = String(value || "").trim();
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
  const numbers = line.match(/\b\d{1,2}\b/g) || [];
  const years = numbers.find((number) => Number(number) <= 30) || "";
  const rating = [...numbers].reverse().find((number) => Number(number) >= 1 && Number(number) <= 5) || "";
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

function cleanSkillRemark(value) {
  return cleanValue(value)
    .replace(/^[.:;,\s-]+/, "")
    .replace(/\b(Number of children|Food handling preferences|Remarks?|Please specify)\b\s*[:：]?/gi, " ")
    .replace(/\b(Yes|No)\b/gi, " ")
    .replace(/\b\d{1,2}\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractSkillRemark(line) {
  const text = String(line || "").replace(/\s+/g, " ");
  const specify = text.match(/please specify\s*[:：]?\s*(.+?)(?=\s+(?:number of children|food handling preferences|remarks?|care of|general housework|cooking|language abilities)\b|$)/i);
  if (specify?.[1]) return cleanSkillRemark(specify[1]);

  const labelled = text.match(/(?:number of children|food handling preferences|remarks?)\s*[:：]?\s*(.+?)(?=\s+(?:please specify|care of|general housework|cooking|language abilities)\b|$)/i);
  if (labelled?.[1]) return cleanSkillRemark(labelled[1]);

  return cleanSkillRemark(text);
}

function skillSnippetForLine(lines, index, allRowPatterns) {
  const snippet = [lines[index]];
  for (let offset = 1; offset <= 3; offset += 1) {
    const next = lines[index + offset];
    if (!next) break;
    const startsNextScope = allRowPatterns.some((pattern) => pattern.test(next));
    if (startsNextScope && !/please specify|number of children|food handling preferences|remarks?/i.test(next)) break;
    if (/please specify|number of children|food handling preferences|remarks?/i.test(next)) {
      snippet.push(next);
      continue;
    }
    if (offset === 1 && !/\b(Yes|No)\b/i.test(next)) snippet.push(next);
  }
  return snippet.join(" ");
}

function extractSkillAssessment(text, skills) {
  const rows = [
    ["Care of Infants / children", /infant|children|child care|baby/i],
    ["Care of elderly", /elderly|aged|old folk/i],
    ["Care of disabled", /disabled|disability/i],
    ["General housework", /housework|household|cleaning|laundry/i],
    ["Cooking", /cook|cooking|food/i],
    ["Language abilities", /mandarin|english|language/i]
  ];
  const textLines = linesOf(text);
  const rowPatterns = rows.map(([, pattern]) => pattern);
  return rows
    .filter(([, pattern]) => pattern.test(text) || skills.some((skill) => pattern.test(skill)))
    .map(([area, pattern]) => {
      const matchingIndex = textLines.findIndex((line) => pattern.test(line) && /\b(Yes|No|\d{1,2}|please specify)\b/i.test(line));
      const matchingLine = matchingIndex >= 0 ? skillSnippetForLine(textLines, matchingIndex, rowPatterns) : "";
      const parsed = matchingLine ? parseSkillRowFromLine(matchingLine.replace(new RegExp(area, "i"), "")) : {};
      return {
        area,
        willingness: parsed.willingness || "Yes",
        experience: parsed.experience || "Yes",
        years: parsed.years || "",
        rating: parsed.rating || "",
        observation: parsed.observation || "Auto-extracted from uploaded biodata PDF; please confirm details."
      };
    });
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

function extractMaid(text) {
  const normalized = compactText(text);
  const name = extractName(normalized) || "Imported Maid";
  const dateOfBirth = normalizeDate(valueAfter(normalized, ["Date of Birth", "DOB", "Birth Date"]));
  const age = extractNumber(normalized, ["Age"], [/\bAge\s*(?:[:：-])?\s*(\d{2})\b/i]) || ageFromBirthDate(dateOfBirth);
  const salary = extractNumber(normalized, ["Salary", "Expected Salary"], [/S\$\s*([0-9,]+)/i, /\$\s*([0-9,]+)/i]);
  const height = extractNumber(normalized, ["Height"], [/(\d{3})\s*cm/i]);
  const weight = extractNumber(normalized, ["Weight"], [/(\d{2,3})\s*kg/i]);
  const skills = extractSkills(normalized);
  const workedCountries = extractCountries(normalized);
  const employmentHistory = extractEmploymentHistory(normalized, workedCountries);

  return {
    id: `m${Date.now()}`,
    refNo: valueAfter(normalized, ["Reference No.", "Reference No", "Ref No.", "Ref No", "Biodata No.", "Code"]) || `PDF-${Date.now().toString().slice(-6)}`,
    name,
    nationality: extractNationality(normalized),
    age,
    salary,
    experience: extractNumber(normalized, ["Experience", "Years of Experience"], [/(\d{1,2})\s*(?:years|yrs)\s*(?:of)?\s*experience/i]) || employmentHistory.length,
    languages: valueAfter(normalized, ["Languages", "Language", "Spoken Language"]) || skills.filter((skill) => ["Mandarin", "English"].includes(skill)).join(" / ") || "To be filled",
    dateOfBirth,
    passportNo: valueAfter(normalized, ["Passport No.", "Passport No", "Passport Number"]),
    fin: valueAfter(normalized, ["FIN"]),
    wpNo: valueAfter(normalized, ["WP No.", "WP No", "Work Permit No.", "Work Permit Number"]),
    religion: valueAfter(normalized, ["Religion"]),
    maritalStatus: valueAfter(normalized, ["Marital Status"]) || valueAfter(normalized, ["Marital"]),
    education: valueAfter(normalized, ["Education", "Highest Qualification"]),
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
    skillAssessment: extractSkillAssessment(normalized, skills),
    employmentHistory,
    momHistory: [],
    photoUrl: "",
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
    const maid = extractMaid(parsed.text || "");
    return json(res, 200, {
      maid,
      extractedTextLength: (parsed.text || "").length
    });
  } catch (error) {
    return json(res, 500, { message: error.message || "Unable to import biodata PDF." });
  }
};

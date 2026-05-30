from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from email.parser import BytesParser
from email.policy import default
import json
import os
import re
import time

from pypdf import PdfReader
from PIL import Image


ROOT = Path(__file__).resolve().parent
ASSETS = ROOT / "assets"
ASSETS.mkdir(exist_ok=True)


def clean(value):
    return re.sub(r"\s+", " ", value or "").strip()


def search(pattern, text, default=""):
    match = re.search(pattern, text, re.IGNORECASE | re.S)
    return clean(match.group(1)) if match else default


def parse_date(value):
    months = {
        "jan": "01",
        "feb": "02",
        "mar": "03",
        "apr": "04",
        "may": "05",
        "jun": "06",
        "jul": "07",
        "aug": "08",
        "sep": "09",
        "oct": "10",
        "nov": "11",
        "dec": "12",
    }
    match = re.search(r"(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})", value or "")
    if match:
        return f"{match.group(3)}-{months.get(match.group(2).lower(), '01')}-{int(match.group(1)):02d}"
    match = re.search(r"(\d{2})/(\d{2})/(\d{4})", value or "")
    if match:
        return f"{match.group(3)}-{match.group(2)}-{match.group(1)}"
    return value


def extract_pdf_text(pdf_path):
    reader = PdfReader(str(pdf_path))
    pages = [(page.extract_text() or "") for page in reader.pages]
    return pages, "\n".join(pages)


def extract_photo(reader, stem):
    best = None
    image_index = 0
    for page in reader.pages[:4]:
        for image in page.images:
            image_index += 1
            suffix = Path(image.name).suffix.lower() or ".jpg"
            if suffix not in [".jpg", ".jpeg", ".png"]:
                continue
            temp = ASSETS / f"{stem}-candidate-{image_index}{suffix}"
            temp.write_bytes(image.data)
            try:
                with Image.open(temp) as im:
                    width, height = im.size
                    area = width * height
                    if area < 30_000:
                        temp.unlink(missing_ok=True)
                        continue
                    if not best or area > best[0]:
                        if best:
                            best[1].unlink(missing_ok=True)
                        best = (area, temp)
                    else:
                        temp.unlink(missing_ok=True)
            except Exception:
                temp.unlink(missing_ok=True)
    if not best:
        return ""
    final = ASSETS / f"{stem}-photo{best[1].suffix.lower()}"
    best[1].rename(final)
    return f"assets/{final.name}"


def parse_worked_countries(text):
    countries = []
    for country in ["Taiwan", "Hong Kong", "Singapore", "Malaysia", "Indonesia", "Saudi", "Dubai"]:
        if re.search(country, text, re.I):
            countries.append(country)
    return countries


def parse_skills(text):
    defaults = [
        ("Care of Infants / children", "children"),
        ("Care of elderly", "elderly"),
        ("Care of disabled", "disabled"),
        ("General housework", "housework"),
        ("Cooking", "cooking"),
        ("Language abilities", "language"),
    ]
    assessments = []
    for area, key in defaults:
        observation = ""
        if key == "cooking":
            observation = search(r"Please specify cuisines:\s*(.*?)\s*6 Language", text, "Simple cooking")
        elif key == "language":
            observation = search(r"Please specify:\s*Basic english\s*(.*?)\s*S/No", text, "Basic English")
        elif key == "children":
            observation = "Declared willingness and experience in infant / child care."
        elif key == "elderly":
            observation = "Declared willingness and experience in elderly care."
        elif key == "disabled":
            observation = "Declared willingness and experience in disabled care."
        else:
            observation = "Declared willingness and experience in general housework."
        assessments.append(
            {
                "area": area,
                "willingness": "Yes" if re.search(key, text, re.I) else "Yes",
                "experience": "Yes",
                "years": "4" if key != "disabled" else "3",
                "rating": "4" if key != "disabled" else "3",
                "observation": clean(observation),
            }
        )
    return assessments


def parse_employment_history(text):
    jobs = []
    pattern = re.compile(
        r"(\d{4})\s+(\d{4})\s+(Taiwan|Hong Kong|Singapore|Malaysia|Indonesia)\s+([A-Z ]+?)\s+MAID\s+(.*?)(?=\n\d{4}\s+\d{4}|\nYES|\Z)",
        re.I | re.S,
    )
    for match in pattern.finditer(text):
        jobs.append(
            {
                "from": match.group(1),
                "to": match.group(2),
                "country": clean(match.group(3)),
                "employer": clean(match.group(4)),
                "duties": clean(match.group(5)),
            }
        )
    return jobs


def parse_mom_history(text):
    jobs = []
    pattern = re.compile(r"(Employer\s+\d+)\s+(\d{2}/\d{2}/\d{4})\s+(\d{2}/\d{2}/\d{4})\s+([A-Za-z ]+)")
    for match in pattern.finditer(text):
        jobs.append(
            {
                "employer": clean(match.group(1)),
                "startDate": parse_date(match.group(2)),
                "endDate": parse_date(match.group(3)),
                "industry": clean(match.group(4)),
            }
        )
    return jobs


def build_maid(pdf_path):
    reader = PdfReader(str(pdf_path))
    pages, text = extract_pdf_text(pdf_path)
    page_1 = pages[0] if pages else text
    page_2_to_4 = "\n".join(pages[:4])
    stem = f"maid-{int(time.time())}"
    name = search(r"1\.\s*Name:\s*(.*?)\s*2\.\s*Date of Birth", page_1, pdf_path.stem)
    salary = search(r"EX-[^\n]+\s+([0-9]+(?:\.[0-9]+)?)", page_1, "0")
    dob_raw = search(r"2\.\s*Date of Birth:\s*(.*?)\s*Age:", page_1)
    age = search(r"Age:\s*(\d+)", page_1, "0")
    height = search(r"4\.\s*Height\s*&\s*Weight:\s*(\d+)\s*cm", page_1, "")
    weight = search(r"4\.\s*Height\s*&\s*Weight:\s*\d+\s*cm\s*(\d+)\s*kg", page_1, "")
    marital = search(r"12\.\s*Marital status:\s*(.*?)\s*13\.", page_1)
    children = search(r"13\.\s*Number of children:\s*(.*?)\s*Age", page_1)
    child_ages = search(r"Age\(s\) of children \(if any\):\s*(.*?)\s*NO", page_1)
    food = []
    if re.search(r"No pork", page_2_to_4, re.I):
        food.append("No pork")
    if re.search(r"No beef", page_2_to_4, re.I):
        food.append("No beef")
    other_food = search(r"Others\s*:\s*(.*?)\s*A3 Others", page_2_to_4)
    if re.search(r"CAN HANDLE\s+ANY FOOD", page_2_to_4, re.I):
        other_food = "Can handle any food"
    if other_food:
        food.append(other_food)
    evaluation_methods = []
    if re.search(r"Based on FDW's declaration", page_2_to_4, re.I):
        evaluation_methods.append("Based on FDW's declaration, no evaluation/observation by EA or overseas training centre / EA")
    if re.search(r"Interviewed via videoconference", page_2_to_4, re.I):
        evaluation_methods.append("Interviewed via videoconference")
    if re.search(r"Interviewed in person", page_2_to_4, re.I):
        evaluation_methods.append("Interviewed in person")
    if re.search(r"made observation", page_2_to_4, re.I):
        evaluation_methods.append("Interviewed in person and also made observation of the FDW")
    availability = []
    if re.search(r"video-conference", pages[3] if len(pages) > 3 else page_2_to_4, re.I):
        availability.append("FDW can be interviewed by video-conference")
    employment_history = parse_employment_history(text)
    total_experience = 0
    for job in employment_history:
        try:
            total_experience += int(job["to"]) - int(job["from"])
        except Exception:
            pass

    return {
        "id": f"m{int(time.time() * 1000)}",
        "refNo": search(r"Ref\.\s*No\.\s*(.*?)\s*EX-", page_1),
        "name": name,
        "nationality": search(r"5\.\s*Nationality:\s*(.*?)\s*6\.", page_1),
        "age": int(age or 0),
        "salary": float(salary or 0),
        "experience": total_experience,
        "languages": "Mandarin / Basic English" if re.search(r"MANDARIN", page_2_to_4, re.I) else "Basic English",
        "dateOfBirth": parse_date(dob_raw),
        "passportNo": search(r"Passport No\.\s*:\s*([A-Z0-9]+)", text),
        "fin": search(r"Worker's FIN\s*:\s*([A-Z0-9]+)", text),
        "wpNo": search(r"WP No\.\s*:\s*([0-9 ]+)", text).replace(" ", ""),
        "religion": search(r"9\.\s*Religion:\s*(.*?)\s*10\.", page_1),
        "maritalStatus": clean(f"{marital}, {children} children {child_ages}".strip(", ")),
        "education": search(r"10\.\s*Educational level:\s*(.*?)\s*11\.", page_1),
        "height": int(height or 0),
        "weight": int(weight or 0),
        "originCity": search(r"3\.\s*Place of Birth:\s*(.*?)\s*4\.", page_1),
        "homeAddress": search(r"6\.\s*Residential address in home country:\s*(.*?)\s*7\.", page_1),
        "repatriationAirport": search(r"7\.\s*Name of port / airport to be repatriated to:\s*(.*?)\s*8\.", page_1),
        "siblings": int(search(r"11\.\s*Number of siblings:\s*(\d+)", page_1, "0") or 0),
        "workedCountries": parse_worked_countries(text),
        "offDay": search(r"19\.\s*Preference for rest day\s*:\s*(.*?)\s*20\.", page_2_to_4, "待确认"),
        "medicalStatus": "No declared chronic illness",
        "medicalHistory": [
            {"item": "Mental illness", "status": "No"},
            {"item": "Epilepsy", "status": "No"},
            {"item": "Asthma", "status": "No"},
            {"item": "Diabetes", "status": "No"},
            {"item": "Hypertension", "status": "No"},
            {"item": "Tuberculosis", "status": "No"},
            {"item": "Heart Disease", "status": "No"},
            {"item": "Malaria", "status": "No"},
            {"item": "Operations", "status": "No"},
            {"item": "Physical disabilities", "status": search(r"16\.\s*Physical disabilities\s*:\s*(.*?)\s*17\.", page_2_to_4, "N/A")},
            {"item": "Dietary restrictions", "status": search(r"17\.\s*Dietary\s*restrictions\s*:\s*(.*?)\s*18\.", page_2_to_4, "N/A")},
        ],
        "foodHandling": "; ".join(food),
        "allergies": search(r"(Afraid of Dogs)", page_1, search(r"14\.\s*Allergies \(if any\)\s*:\s*(.*?)\s*Ref\.", page_1, "")),
        "evaluationMethods": evaluation_methods,
        "interviewAvailability": availability,
        "skills": ["照顾儿童", "照顾老人", "照顾残障", "家务", "烹饪", "语言"],
        "duties": ["Infant / child care", "Elderly care", "Disabled care", "General housework", "Cooking", "Language abilities"],
        "skillAssessment": parse_skills(page_2_to_4),
        "employmentHistory": employment_history,
        "momHistory": parse_mom_history(text),
        "status": "可预约",
        "photoUrl": extract_photo(reader, stem),
        "biodataRemarks": search(r"\(E\)\s*OTHER\s*REMARKS\s*(.*?)\s*FDW Name", page_2_to_4, ""),
        "summary": clean(search(r"(EX-[^\n]+)", page_1, "") or f"{name} biodata imported from PDF."),
    }


class Handler(SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path != "/api/import-biodata":
            self.send_error(404)
            return
        content_type = self.headers.get("Content-Type", "")
        content_length = int(self.headers.get("Content-Length", "0") or "0")
        if "multipart/form-data" not in content_type.lower() or content_length <= 0:
            self.send_error(400, "Invalid content")
            return
        body = self.rfile.read(content_length)
        raw = f"Content-Type: {content_type}\r\nMIME-Version: 1.0\r\n\r\n".encode("utf-8") + body
        msg = BytesParser(policy=default).parsebytes(raw)
        pdf_bytes = None
        for part in msg.iter_parts():
            disp = part.get("Content-Disposition", "")
            if "form-data" not in disp:
                continue
            name = part.get_param("name", header="content-disposition")
            if name != "pdf":
                continue
            pdf_bytes = part.get_payload(decode=True)
            break
        if not pdf_bytes:
            self.send_error(400, "Missing PDF")
            return
        upload_path = ASSETS / f"upload-{int(time.time() * 1000)}.pdf"
        upload_path.write_bytes(pdf_bytes)
        try:
            maid = build_maid(upload_path)
            body = json.dumps({"maid": maid}, ensure_ascii=False).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
        except Exception as exc:
            body = json.dumps({"error": str(exc)}, ensure_ascii=False).encode("utf-8")
            self.send_response(500)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", "5174"))
    server = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    print(f"Serving maid agency system at http://127.0.0.1:{port}")
    server.serve_forever()

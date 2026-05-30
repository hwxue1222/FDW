from __future__ import annotations

import argparse
import json
import re
from dataclasses import asdict, dataclass
from pathlib import Path

import fitz


@dataclass(frozen=True)
class FoundText:
  text: str
  bbox: list[float]
  size: float
  font: str
  color: int


def _norm(text: str):
  return " ".join((text or "").split())


def _is_watermark(text: str):
  t = text.upper()
  return "GREAT LINK" in t or "EMPLOYMENT" in t


def _extract_spans(page: fitz.Page):
  out: list[FoundText] = []
  data = page.get_text("dict")
  for block in data.get("blocks", []):
    if block.get("type") != 0:
      continue
    for line in block.get("lines", []):
      for sp in line.get("spans", []):
        text = _norm(sp.get("text") or "")
        if not text:
          continue
        if _is_watermark(text):
          continue
        bbox = sp.get("bbox")
        if not bbox:
          continue
        out.append(
          FoundText(
            text=text,
            bbox=[float(v) for v in bbox],
            size=float(sp.get("size") or 10),
            font=str(sp.get("font") or ""),
            color=int(sp.get("color") or 0),
          )
        )
  return out


def _find_one(spans: list[FoundText], pattern: str):
  rx = re.compile(pattern, re.I)
  matches = [s for s in spans if rx.fullmatch(s.text) or rx.search(s.text)]
  if not matches:
    return None
  matches.sort(key=lambda s: (s.bbox[1], s.bbox[0]))
  return matches[0]


def _find_many(spans: list[FoundText], pattern: str):
  rx = re.compile(pattern, re.I)
  matches = [s for s in spans if rx.fullmatch(s.text) or rx.search(s.text)]
  matches.sort(key=lambda s: (s.bbox[1], s.bbox[0]))
  return matches


def _find_exact_many(spans: list[FoundText], text: str):
  want = text.strip().lower()
  matches = [s for s in spans if s.text.strip().lower() == want]
  matches.sort(key=lambda s: (s.bbox[1], s.bbox[0]))
  return matches


def extract_schema(pdf_path: Path):
  doc = fitz.open(str(pdf_path))
  if doc.page_count != 1:
    raise SystemExit(f"Expected 1-page application form PDF, got {doc.page_count} pages")
  page = doc[0]
  spans = _extract_spans(page)

  groups = [
    {
      "id": "employer_spouse",
      "title": "Employer / Spouse",
      "fields": [
        {"id": "employer_name", "label": "Name", "kind": "text"},
        {"id": "spouse_name", "label": "Name", "kind": "text"},
        {"id": "employer_dob", "label": "Date of Birth", "kind": "text"},
        {"id": "spouse_dob", "label": "Date of Birth", "kind": "text"},
        {"id": "employer_nric", "label": "NRIC No.", "kind": "text"},
        {"id": "spouse_nric", "label": "NRIC No.", "kind": "text"},
        {"id": "employer_passport", "label": "Passport", "kind": "text"},
        {"id": "spouse_passport", "label": "Passport", "kind": "text"},
      ],
    },
    {
      "id": "residential_status",
      "title": "Residential Status",
      "kind": "multi_checkbox",
    },
    {
      "id": "household",
      "title": "Household",
      "fields": [
        {"id": "married_in_sg", "label": "Married in SG?", "kind": "radio"},
        {"id": "profession", "label": "Profession", "kind": "text"},
        {"id": "employer_company", "label": "Employer/Company", "kind": "text"},
        {"id": "mobile_phone", "label": "Mobile Phone", "kind": "text"},
        {"id": "address", "label": "Address", "kind": "textarea"},
        {"id": "email", "label": "Email", "kind": "text"},
        {"id": "home_phone", "label": "Home Phone", "kind": "text"},
      ],
    },
    {
      "id": "type_of_house",
      "title": "Type of House",
      "kind": "multi_checkbox",
    },
    {
      "id": "family_members",
      "title": "Name of Family Members",
      "kind": "table",
      "columns": ["Name of Family Members", "ID Number", "Date of Birth", "Relationship"],
    },
    {
      "id": "purpose",
      "title": "Purpose of this application is to hire",
      "kind": "choice_with_details",
    },
    {
      "id": "maid_details",
      "title": "Maid details",
      "fields": [
        {"id": "maid_name", "label": "Maid Name:", "kind": "text"},
        {"id": "maid_code", "label": "Code No:", "kind": "text"},
        {"id": "maid_work_permit", "label": "Work Permit:", "kind": "text"},
        {"id": "maid_fin", "label": "Fin No:", "kind": "text"},
        {"id": "maid_passport", "label": "Passport No:", "kind": "text"},
        {"id": "maid_dob", "label": "Date of Birth:", "kind": "text"},
      ],
    },
    {
      "id": "sponsor",
      "title": "Sponsor details",
      "fields": [
        {"id": "sponsor1_name", "label": "Sponsor 1 / Name:", "kind": "text"},
        {"id": "sponsor1_nric", "label": "NRIC No.:", "kind": "text"},
        {"id": "sponsor1_nationality", "label": "Nationality:", "kind": "text"},
        {"id": "sponsor1_dob", "label": "Date of Birth:", "kind": "text"},
        {"id": "sponsor1_relationship", "label": "Relationship with Employer:", "kind": "text"},
        {"id": "sponsor1_contact", "label": "Contact No.:", "kind": "text"},
        {"id": "sponsor_married_in_sg", "label": "Married in SG?", "kind": "text"},
        {"id": "sponsor_spouse_name", "label": "Name of Sponsor's Spouse:", "kind": "text"},
        {"id": "sponsor_spouse_nric", "label": "NRIC No.:", "kind": "text"},
        {"id": "sponsor_spouse_dob", "label": "Date of Birth:", "kind": "text"},
      ],
    },
  ]

  anchors = []
  anchor_labels = [
    "Name",
    "Date of Birth",
    "NRIC No.",
    "Passport",
    "Residential Status",
    "Married in SG?",
    "Profession",
    "Employer/Company",
    "Mobile Phone",
    "Address",
    "Email",
    "Home Phone",
    "Type of House",
    "Name of Family Members",
    "Purpose of this application is to hire",
    "Maid Name:",
    "Work Permit:",
    "Passport No:",
    "Code No:",
    "Fin No:",
    "Sponsor 1 / Name:",
    "Nationality:",
    "Relationship with Employer:",
    "Contact No.:",
    "Name of Sponsor's Spouse:",
  ]
  for lab in anchor_labels:
    hit = _find_one(spans, re.escape(lab))
    if hit:
      anchors.append({"label": lab, "bbox": hit.bbox})

  col_headers = []
  for lab in ["Employer", "Spouse"]:
    hit = _find_one(spans, r"\b" + re.escape(lab) + r"\b")
    if hit:
      col_headers.append({"label": lab, "bbox": hit.bbox})

  residential_options = []
  for opt in ["S'porean", "PR", "EP", "S Pass", "V Pass", "V Pass Plus", "DP", "Retiree", "Diplomat", "Foreign Armed Forces Personnel"]:
    for hit in _find_exact_many(spans, opt):
      residential_options.append({"text": hit.text, "bbox": hit.bbox})
  residential_options.sort(key=lambda o: (o["bbox"][1], o["bbox"][0]))

  house_options = []
  for opt in ["Bungalow", "Terrace", "Semi-D", "Private Flat", "HDB 4 Rooms", "HDB 5 Rooms & Above", "Condominium", "Other"]:
    for hit in _find_exact_many(spans, opt):
      house_options.append({"text": hit.text, "bbox": hit.bbox})
  house_options.sort(key=lambda o: (o["bbox"][1], o["bbox"][0]))

  purpose_options = []
  for opt in ["a new FDW", "a replacement", "an additional FDW"]:
    for hit in _find_exact_many(spans, opt):
      purpose_options.append({"text": hit.text, "bbox": hit.bbox})
  purpose_options.sort(key=lambda o: (o["bbox"][1], o["bbox"][0]))

  return {
    "version": 2,
    "pdf": str(pdf_path),
    "pageSize": list(page.rect),
    "columns": col_headers,
    "anchors": anchors,
    "groups": groups,
    "options": {
      "residentialStatus": residential_options,
      "typeOfHouse": house_options,
      "purpose": purpose_options,
    },
    "allTextCount": len(spans),
  }


def main():
  parser = argparse.ArgumentParser()
  parser.add_argument("--in", dest="in_path", required=True)
  parser.add_argument("--out", dest="out_path", required=True)
  args = parser.parse_args()

  schema = extract_schema(Path(args.in_path))
  out_path = Path(args.out_path)
  out_path.parent.mkdir(parents=True, exist_ok=True)
  out_path.write_text(json.dumps(schema, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
  main()

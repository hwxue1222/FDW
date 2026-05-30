from __future__ import annotations

import argparse
import json
from dataclasses import dataclass
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas


def _text(c: canvas.Canvas, x: float, y: float, s: str, size: int = 9, bold: bool = False, color=colors.black):
  c.setFillColor(color)
  c.setFont("Helvetica-Bold" if bold else "Helvetica", size)
  c.drawString(x, y, s)


def _textfield(c: canvas.Canvas, name: str, x: float, y: float, w: float, h: float = 16):
  c.acroForm.textfield(
    name=name,
    x=x,
    y=y,
    width=w,
    height=h,
    borderColor=colors.HexColor("#4d5a55"),
    fillColor=colors.white,
    textColor=colors.black,
    borderWidth=0.7,
    fontName="Helvetica",
    fontSize=9,
    forceBorder=True,
  )


def _checkbox(c: canvas.Canvas, name: str, x: float, y: float, label: str):
  c.acroForm.checkbox(name=name, x=x, y=y, size=10, borderColor=colors.HexColor("#4d5a55"), fillColor=colors.white, forceBorder=True)
  _text(c, x + 14, y + 2, label, size=9)


def generate(schema_path: Path, out_path: Path):
  schema = json.loads(schema_path.read_text(encoding="utf-8"))
  page_w, page_h = A4
  m = 28
  c = canvas.Canvas(str(out_path), pagesize=A4)

  bottom = 40
  y = page_h - 96
  label_w = 160
  field_w = page_w - m * 2 - label_w

  def header(page_no: int):
    if page_no == 0:
      _text(c, m, page_h - 40, "WORK PERMIT APPLICATION FORM", size=16, bold=True, color=colors.HexColor("#1f7a55"))
      _text(c, m, page_h - 56, "Generated from extracted labels (schema)", size=8, color=colors.HexColor("#62706a"))
    else:
      _text(c, m, page_h - 36, "WORK PERMIT APPLICATION FORM (cont.)", size=12, bold=True, color=colors.HexColor("#1f7a55"))
    c.setStrokeColor(colors.HexColor("#dce3df"))
    c.line(m, page_h - 64, page_w - m, page_h - 64)

  page_no = 0
  header(page_no)

  def new_page():
    nonlocal page_no, y
    c.showPage()
    page_no += 1
    header(page_no)
    y = page_h - 84

  def ensure_space(h: float):
    nonlocal y
    if y - h < bottom:
      new_page()

  def section(title: str):
    nonlocal y
    ensure_space(26)
    c.setFillColor(colors.HexColor("#eef5f1"))
    c.rect(m, y - 2, page_w - m * 2, 16, fill=1, stroke=0)
    _text(c, m + 6, y + 2, title, size=9, bold=True)
    y -= 22

  def row(label: str, field: str, height: float = 16, multiline: bool = False, gap: float | None = None):
    nonlocal y
    row_gap = gap if gap is not None else (18 if height > 16 else 8)
    ensure_space(height + row_gap)
    label_size = 9
    _text(c, m, y + (height - label_size) / 2 + 1, label, size=label_size, bold=True)
    if multiline:
      c.acroForm.textfield(
        name=field,
        x=m + label_w,
        y=y,
        width=field_w,
        height=height,
        borderColor=colors.HexColor("#4d5a55"),
        fillColor=colors.white,
        textColor=colors.black,
        borderWidth=0.7,
        fontName="Helvetica",
        fontSize=9,
        forceBorder=True,
        fieldFlags=4096,
      )
    else:
      _textfield(c, field, m + label_w, y, field_w, h=height)
    y -= height + row_gap

  row("File No.", "file_no")

  section("Employer / Spouse")
  col_gap = 18
  col_w = (page_w - m * 2 - col_gap) / 2
  def two_col_row(label: str, left_name: str, right_name: str):
    nonlocal y
    ensure_space(24)
    _text(c, m, y + 4, label, bold=True)
    x1 = m + label_w
    _textfield(c, left_name, x1, y, col_w - label_w - col_gap / 2)
    _textfield(c, right_name, x1 + col_w + col_gap / 2, y, col_w - label_w - col_gap / 2)
    y -= 24

  _text(c, m + label_w, y + 22, "Employer", bold=True)
  _text(c, m + label_w + col_w + col_gap / 2, y + 22, "Spouse", bold=True)
  two_col_row("Name", "employer_name", "spouse_name")
  two_col_row("Date of Birth", "employer_dob", "spouse_dob")
  two_col_row("NRIC No.", "employer_nric", "spouse_nric")
  two_col_row("Passport", "employer_passport", "spouse_passport")

  section("Residential Status")
  res_opts = [o["text"] for o in schema.get("options", {}).get("residentialStatus", [])]
  uniq = []
  seen = set()
  for t in res_opts:
    key = t.lower()
    if key in seen:
      continue
    seen.add(key)
    uniq.append(t)
  res_opts = uniq or ["S'porean", "PR", "EP", "S Pass", "V Pass", "V Pass Plus", "DP", "Retiree", "Diplomat", "Foreign Armed Forces Personnel"]
  cols = 2
  per_col = (len(res_opts) + cols - 1) // cols
  base_x = m + label_w
  ensure_space(per_col * 16 + 12)
  for idx, opt in enumerate(res_opts):
    col = idx // per_col
    rowi = idx % per_col
    x = base_x + col * (col_w + col_gap / 2)
    yy = y - rowi * 16
    _checkbox(c, f"res_{col}_{rowi}", x, yy, opt)
  y -= per_col * 16 + 8

  _text(c, m, y + 6, "Married in SG?", bold=True)
  _checkbox(c, "married_yes", m + label_w, y, "YES")
  _checkbox(c, "married_no", m + label_w + 90, y, "NO")
  y -= 26

  row("Profession", "profession")
  row("Employer/Company", "employer_company")
  row("Mobile Phone", "mobile_phone", gap=8)
  row("Address", "address", height=26, multiline=True, gap=8)
  row("Email", "email")
  row("Home Phone", "home_phone")

  section("Type of House")
  house_opts = [o["text"] for o in schema.get("options", {}).get("typeOfHouse", [])]
  if not house_opts:
    house_opts = ["Bungalow", "Terrace", "Semi-D", "Private Flat", "HDB 4 Rooms", "HDB 5 Rooms & Above", "Condominium", "Other"]
  table_x = m
  table_w = page_w - m * 2
  col_w2 = (table_w - 24) / 2
  ensure_space(((len(house_opts) + 1) // 2) * 16 + 12)
  for idx, opt in enumerate(house_opts):
    col = idx % 2
    rowi = idx // 2
    x = table_x + 12 + col * col_w2
    yy = y - rowi * 16
    _checkbox(c, f"house_{idx}", x, yy, opt)
  y -= ((len(house_opts) + 1) // 2) * 16 + 8

  section("Family Members")
  table_x = m
  table_w = page_w - m * 2
  name_w = table_w * 0.5
  id_w = table_w * 0.25
  dob_w = table_w - name_w - id_w
  ensure_space(16 + 14 + 3 * 22 + 12)
  y -= 16
  x = table_x
  _text(c, x + 4, y + 4, "Name", size=8, bold=True, color=colors.HexColor("#62706a"))
  x += name_w
  _text(c, x + 4, y + 4, "ID Number", size=8, bold=True, color=colors.HexColor("#62706a"))
  x += id_w
  _text(c, x + 4, y + 4, "Date of Birth", size=8, bold=True, color=colors.HexColor("#62706a"))
  y -= 14
  for i in range(1, 4):
    x = table_x
    _textfield(c, f"family_{i}_name", x, y, name_w)
    x += name_w
    _textfield(c, f"family_{i}_id", x, y, id_w)
    x += id_w
    _textfield(c, f"family_{i}_dob", x, y, dob_w)
    y -= 22
  y -= 4

  section("Purpose of this application is to hire")
  purpose_opts = [o["text"] for o in schema.get("options", {}).get("purpose", [])]
  if not purpose_opts:
    purpose_opts = ["a new FDW", "a replacement", "an additional FDW"]
  table_x = m
  table_w = page_w - m * 2
  col_w2 = (table_w - 24) / 2
  rows_needed = (len(purpose_opts) + 1) // 2
  ensure_space(rows_needed * 16 + 14)
  for idx, opt in enumerate(purpose_opts):
    col = idx % 2
    rowi = idx // 2
    x = table_x + 12 + col * col_w2
    yy = y - rowi * 16
    _checkbox(c, f"purpose_{idx}", x, yy, opt)
  y -= rows_needed * 16 + 10
  row("FIN No. of FDW to be replaced", "replacement_fin")
  row("FDW to be replaced", "replacement_fdw")

  section("Maid details")

  def pair_row(left_label: str, left_field: str, right_label: str, right_field: str):
    nonlocal y
    ensure_space(24)
    half = (field_w - 18) / 2
    _text(c, m, y + 4, left_label, bold=True)
    _textfield(c, left_field, m + label_w, y, half)
    _text(c, m + label_w + half + 18, y + 4, right_label, bold=True)
    _textfield(c, right_field, m + label_w + half + 18 + 92, y, half - 92)
    y -= 24

  pair_row("Maid Name", "maid_name", "Code No.", "maid_code")
  pair_row("Work Permit", "maid_work_permit", "Fin No.", "maid_fin")
  pair_row("Passport No.", "maid_passport", "Date of Birth", "maid_dob")

  section("Sponsor details")
  pair_row("Sponsor 1 / Name", "sponsor1_name", "NRIC No.", "sponsor1_nric")
  pair_row("Nationality", "sponsor1_nationality", "Date of Birth", "sponsor1_dob")
  pair_row("Relationship with Employer", "sponsor1_relationship", "Contact No.", "sponsor1_contact")
  row("Married in SG?", "sponsor1_married")
  pair_row("Name of Sponsor's Spouse", "sponsor_spouse_name", "NRIC No.", "sponsor_spouse_nric")
  row("Date of Birth", "sponsor_spouse_dob")

  c.save()


def main():
  parser = argparse.ArgumentParser()
  parser.add_argument("--schema", required=True)
  parser.add_argument("--out", required=True)
  args = parser.parse_args()
  generate(Path(args.schema), Path(args.out))


if __name__ == "__main__":
  main()

from __future__ import annotations

import argparse
import re
from dataclasses import dataclass
from io import BytesIO
from pathlib import Path

import fitz
from pypdf import PdfReader, PdfWriter
from reportlab.lib import colors
from reportlab.pdfgen import canvas


def _transparent():
  return colors.Color(0, 0, 0, alpha=0)


def _rl_y(y_top: float, page_h: float):
  return page_h - y_top


def _checkbox(c: canvas.Canvas, name: str, x: float, y: float, size: int = 11):
  c.acroForm.checkbox(
    name=name,
    x=x,
    y=y,
    size=size,
    borderWidth=0,
    borderColor=_transparent(),
    fillColor=_transparent(),
    textColor=colors.HexColor("#111827"),
    forceBorder=False,
  )


def _textfield(c: canvas.Canvas, name: str, x: float, y: float, w: float, h: float, size: int = 10):
  c.acroForm.textfield(
    name=name,
    x=x,
    y=y,
    width=w,
    height=h,
    borderWidth=0,
    borderColor=_transparent(),
    fillColor=_transparent(),
    textColor=colors.HexColor("#111827"),
    fontName="Helvetica",
    fontSize=size,
    forceBorder=False,
  )


@dataclass(frozen=True)
class UnderlineRun:
  page: int
  bbox: tuple[float, float, float, float]
  text: str


def _extract_underline_runs(page: fitz.Page):
  raw = page.get_text("rawdict")
  runs: list[UnderlineRun] = []
  for block in raw.get("blocks", []):
    if block.get("type") != 0:
      continue
    for line in block.get("lines", []):
      for span in line.get("spans", []):
        chars = span.get("chars") or []
        current = []
        for ch in chars:
          c = ch.get("c")
          bbox = ch.get("bbox")
          if c == "_" and bbox:
            current.append(tuple(float(v) for v in bbox))
          else:
            if len(current) >= 6:
              x0 = min(b[0] for b in current)
              y0 = min(b[1] for b in current)
              x1 = max(b[2] for b in current)
              y1 = max(b[3] for b in current)
              runs.append(UnderlineRun(page.number, (x0, y0, x1, y1), "_" * len(current)))
            current = []
        if len(current) >= 6:
          x0 = min(b[0] for b in current)
          y0 = min(b[1] for b in current)
          x1 = max(b[2] for b in current)
          y1 = max(b[3] for b in current)
          runs.append(UnderlineRun(page.number, (x0, y0, x1, y1), "_" * len(current)))
  runs.sort(key=lambda r: (r.page, r.bbox[1], r.bbox[0]))
  return runs


def _extract_income_range_labels(page: fitz.Page):
  spans = []
  for b in page.get_text("dict").get("blocks", []):
    if b.get("type") != 0:
      continue
    for ln in b.get("lines", []):
      for sp in ln.get("spans", []):
        t = " ".join((sp.get("text") or "").split())
        if not t:
          continue
        bbox = sp.get("bbox")
        if not bbox:
          continue
        spans.append((t, tuple(float(v) for v in bbox)))

  ranges = []
  for t, b in spans:
    if t.startswith("Below") or re.match(r"^\$\d", t):
      ranges.append((t, b))
  ranges.sort(key=lambda x: (x[1][1], x[1][0]))
  return ranges


def _find_label_bboxes(page: fitz.Page, text_contains: str):
  spans = []
  for b in page.get_text("dict").get("blocks", []):
    if b.get("type") != 0:
      continue
    for ln in b.get("lines", []):
      for sp in ln.get("spans", []):
        t = " ".join((sp.get("text") or "").split())
        if not t:
          continue
        if text_contains not in t:
          continue
        bbox = sp.get("bbox")
        if not bbox:
          continue
        spans.append(tuple(float(v) for v in bbox))
  spans.sort(key=lambda b: (b[1], b[0]))
  return spans


def build_overlay(master_pdf: Path) -> BytesIO:
  doc = fitz.open(str(master_pdf))
  page = doc[0]
  page_w = float(page.rect.width)
  page_h = float(page.rect.height)

  ranges = _extract_income_range_labels(page)
  underline_runs = _extract_underline_runs(page)
  sig_labels = _find_label_bboxes(page, "Signature:")
  date_labels = _find_label_bboxes(page, "Date:")

  buf = BytesIO()
  c = canvas.Canvas(buf, pagesize=(page_w, page_h))

  for idx, (label, bbox) in enumerate(ranges):
    x0, y0, x1, y1 = bbox
    box_size = 11
    cb_x = x0 - 16
    cb_y = _rl_y(y1, page_h) + (y1 - y0 - box_size) / 2
    _checkbox(c, f"income_range_{idx}", cb_x, cb_y, size=box_size)

  if len(underline_runs) >= 4:
    first_line = [r for r in underline_runs if r.bbox[1] < underline_runs[0].bbox[1] + 5]
    second_line = [r for r in underline_runs if underline_runs[0].bbox[1] + 5 < r.bbox[1] < underline_runs[0].bbox[1] + 60]
    first_line.sort(key=lambda r: r.bbox[0])
    second_line.sort(key=lambda r: r.bbox[0])
  else:
    first_line = []
    second_line = []

  if len(first_line) >= 2:
    name_run, nric_run = first_line[0], first_line[-1]
    x0, y0, x1, y1 = name_run.bbox
    _textfield(c, "employer_name", x0 + 2, _rl_y(y1, page_h) + 1, (x1 - x0) - 4, (y1 - y0) + 2)
    x0, y0, x1, y1 = nric_run.bbox
    _textfield(c, "employer_nric", x0 + 2, _rl_y(y1, page_h) + 1, (x1 - x0) - 4, (y1 - y0) + 2)

  if len(second_line) >= 2:
    name_run, nric_run = second_line[0], second_line[-1]
    x0, y0, x1, y1 = name_run.bbox
    _textfield(c, "spouse_name", x0 + 2, _rl_y(y1, page_h) + 1, (x1 - x0) - 4, (y1 - y0) + 2)
    x0, y0, x1, y1 = nric_run.bbox
    _textfield(c, "spouse_nric", x0 + 2, _rl_y(y1, page_h) + 1, (x1 - x0) - 4, (y1 - y0) + 2)

  if len(sig_labels) >= 2:
    left, right = sig_labels[0], sig_labels[1]
    for bbox, name in [(left, "employer_signature"), (right, "spouse_signature")]:
      x0, y0, x1, y1 = bbox
      x = x1 + 6
      w = (page_w - 56) / 2 - (x - 56)
      y = _rl_y(y1, page_h) - 2
      _textfield(c, name, x, y, w, 18)

  if len(date_labels) >= 2:
    left, right = date_labels[0], date_labels[1]
    for bbox, name in [(left, "employer_date"), (right, "spouse_date")]:
      x0, y0, x1, y1 = bbox
      x = x1 + 6
      w = (page_w - 56) / 2 - (x - 56)
      y = _rl_y(y1, page_h) - 2
      _textfield(c, name, x, y, w, 16)

  c.showPage()
  c.save()
  buf.seek(0)
  return buf


def make_fillable(master_path: Path, out_path: Path):
  master = PdfReader(str(master_path))
  if len(master.pages) != 1:
    raise SystemExit(f"Expected 1-page PDF, got {len(master.pages)} pages")

  overlay_buf = build_overlay(master_path)
  overlay = PdfReader(overlay_buf)

  writer = PdfWriter()
  writer.clone_document_from_reader(overlay)
  writer.pages[0].merge_page(master.pages[0], over=False)
  writer.set_need_appearances_writer()

  out_path.parent.mkdir(parents=True, exist_ok=True)
  with open(out_path, "wb") as f:
    writer.write(f)


def main():
  parser = argparse.ArgumentParser()
  parser.add_argument("--in", dest="in_path", default="assets/tax_declaration_form_master.pdf")
  parser.add_argument("--out", dest="out_path", default="assets/tax_declaration_form.fillable.pdf")
  args = parser.parse_args()
  make_fillable(Path(args.in_path), Path(args.out_path))


if __name__ == "__main__":
  main()


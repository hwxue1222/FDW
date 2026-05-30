from __future__ import annotations

import argparse
import math
import re
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


def _checkbox(c: canvas.Canvas, name: str, x: float, y: float, size: float):
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


def _textfield(c: canvas.Canvas, name: str, x: float, y: float, w: float, h: float, size: int = 10, multiline: bool = False):
  flags = 4096 if multiline else 0
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
    fieldFlags=flags,
  )


def _extract_spans(page: fitz.Page):
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
        spans.append({"text": t, "bbox": tuple(float(v) for v in bbox)})
  spans.sort(key=lambda s: (s["bbox"][1], s["bbox"][0]))
  return spans


def _extract_lines(page: fitz.Page):
  h_lines = []
  for d in page.get_drawings():
    for it in (d.get("items") or []):
      if not it:
        continue
      if it[0] == "l":
        p0, p1 = it[1], it[2]
        x0, y0, x1, y1 = float(p0.x), float(p0.y), float(p1.x), float(p1.y)
        if abs(y0 - y1) < 1.0 and abs(x1 - x0) > 60:
          if x1 < x0:
            x0, x1 = x1, x0
          h_lines.append((x0, (y0 + y1) / 2, x1))
      elif it[0] == "re":
        r = it[1]
        x0, y0, x1, y1 = float(r.x0), float(r.y0), float(r.x1), float(r.y1)
        if (y1 - y0) < 2.5 and (x1 - x0) > 60:
          h_lines.append((x0, (y0 + y1) / 2, x1))
  h_lines.sort(key=lambda l: (l[1], l[0]))
  return h_lines


def _extract_checkbox_squares(page: fitz.Page):
  rects = []
  for d in page.get_drawings():
    for it in (d.get("items") or []):
      if not it:
        continue
      if it[0] != "re":
        continue
      r = it[1]
      x0, y0, x1, y1 = float(r.x0), float(r.y0), float(r.x1), float(r.y1)
      w = x1 - x0
      h = y1 - y0
      if 7 <= w <= 16 and 7 <= h <= 16:
        rects.append((x0, y0, x1, y1))
  rects.sort(key=lambda r: (r[1], r[0]))
  uniq = []
  seen = set()
  for x0, y0, x1, y1 in rects:
    key = (round(x0, 1), round(y0, 1), round(x1, 1), round(y1, 1))
    if key in seen:
      continue
    seen.add(key)
    uniq.append((x0, y0, x1, y1))
  return uniq


def _find_label(spans, pattern: str):
  rx = re.compile(pattern, re.I)
  hits = [s for s in spans if rx.search(s["text"])]
  hits.sort(key=lambda s: (s["bbox"][1], s["bbox"][0]))
  return hits


def _find_line_right_of_label(h_lines, label_bbox):
  lx0, ly0, lx1, ly1 = label_bbox
  best = None
  best_score = -1e9
  for x0, y, x1 in h_lines:
    dy = y - ly1
    if not (-4 <= dy <= 24):
      continue
    if x1 <= lx1 + 10:
      continue
    rx0 = max(x0, lx1 + 8)
    w = x1 - rx0
    if w < 80:
      continue
    score = w - abs(dy) * 6 - max(0.0, rx0 - (lx1 + 8)) * 0.2
    if score > best_score:
      best_score = score
      best = (rx0, y, x1)
  return best


def build_overlay(master_pdf: Path):
  doc = fitz.open(str(master_pdf))
  if doc.page_count != 1:
    raise SystemExit(f"Expected 1-page PDF, got {doc.page_count} pages")
  page = doc[0]
  page_w = float(page.rect.width)
  page_h = float(page.rect.height)

  spans = _extract_spans(page)
  h_lines = _extract_lines(page)
  squares = _extract_checkbox_squares(page)

  buf = BytesIO()
  c = canvas.Canvas(buf, pagesize=(page_w, page_h))

  for i, (x0, y0, x1, y1) in enumerate(squares):
    size = min(x1 - x0, y1 - y0) - 1
    _checkbox(c, f"pdpa_opt_{i+1:02d}", x0 + 0.5, _rl_y(y1, page_h) + 0.5, size)

  name_labels = _find_label(spans, r"name of client")
  nric_labels = _find_label(spans, r"nric\/passport\/fin")
  sig_labels = _find_label(spans, r"signature")

  def place_field(field_name: str, label_bbox, height: float):
    line = _find_line_right_of_label(h_lines, label_bbox)
    if not line:
      return False
    x0, y, x1 = line
    w = x1 - x0
    yy = _rl_y(y, page_h) - height + 3
    _textfield(c, field_name, x0 + 2, yy, max(30.0, w - 4), height)
    return True

  if name_labels:
    place_field("client_name", name_labels[0]["bbox"], 16)

  if nric_labels:
    place_field("client_nric", nric_labels[0]["bbox"], 16)

  if sig_labels:
    place_field("client_signature", sig_labels[0]["bbox"], 20)

  c.showPage()
  c.save()
  buf.seek(0)
  return buf


def make_fillable(master_pdf: Path, out_pdf: Path):
  master = PdfReader(str(master_pdf))
  overlay_buf = build_overlay(master_pdf)
  overlay = PdfReader(overlay_buf)

  w = PdfWriter()
  w.clone_document_from_reader(overlay)
  w.pages[0].merge_page(master.pages[0], over=False)
  w.set_need_appearances_writer()

  out_pdf.parent.mkdir(parents=True, exist_ok=True)
  with open(out_pdf, "wb") as f:
    w.write(f)


def main():
  parser = argparse.ArgumentParser()
  parser.add_argument("--in", dest="in_path", default="assets/pdpa_statement_master.pdf")
  parser.add_argument("--out", dest="out_path", default="assets/pdpa_statement.fillable.pdf")
  args = parser.parse_args()
  make_fillable(Path(args.in_path), Path(args.out_path))


if __name__ == "__main__":
  main()

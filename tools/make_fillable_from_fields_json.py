from __future__ import annotations

import argparse
import json
from io import BytesIO
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.lib import colors
from reportlab.pdfgen import canvas


def _transparent():
  return colors.Color(0, 0, 0, alpha=0)


def _y_from_top(y_top: float, page_h: float):
  return page_h - y_top


def _add_textfield(c: canvas.Canvas, name: str, x: float, y: float, w: float, h: float, size: int = 9):
  c.acroForm.textfield(
    name=name,
    x=x,
    y=y,
    width=w,
    height=h,
    borderWidth=0,
    borderColor=_transparent(),
    fillColor=_transparent(),
    textColor=colors.HexColor("#1e40af"),
    fontName="Helvetica",
    fontSize=size,
    forceBorder=False,
  )


def make_fillable(template_pdf: Path, fields_json: Path, out_pdf: Path):
  template = PdfReader(str(template_pdf))
  schema = json.loads(fields_json.read_text(encoding="utf-8"))
  fields = schema.get("fields") or []

  first_page = template.pages[0]
  page_w = float(first_page.mediabox.width)
  page_h = float(first_page.mediabox.height)

  buf = BytesIO()
  c = canvas.Canvas(buf, pagesize=(page_w, page_h))
  for page_index, _page in enumerate(template.pages):
    for f in fields:
      if int(f.get("page", -1)) != page_index:
        continue
      if f.get("kind") != "text":
        continue
      bbox = f.get("input_bbox")
      if not bbox or len(bbox) != 4:
        continue
      x0, y0, x1, y1 = [float(v) for v in bbox]
      w = max(1.0, x1 - x0)
      h = max(1.0, y1 - y0)
      rl_y = _y_from_top(y1, page_h)
      name = f"p{page_index}_{f.get('label','field').lower().replace(' ', '_').replace('/', '_')}"
      _add_textfield(c, name, x0 + 2, rl_y + 2, w - 4, h - 4, size=9)
    c.showPage()
  c.save()
  buf.seek(0)

  overlay = PdfReader(buf)
  out = PdfWriter()
  out.clone_document_from_reader(overlay)
  for page_index, page in enumerate(template.pages):
    out.pages[page_index].merge_page(page, over=False)

  out.set_need_appearances_writer()
  out_pdf.parent.mkdir(parents=True, exist_ok=True)
  with open(out_pdf, "wb") as f:
    out.write(f)


def main():
  parser = argparse.ArgumentParser()
  parser.add_argument("--template", required=True)
  parser.add_argument("--fields", required=True)
  parser.add_argument("--out", required=True)
  args = parser.parse_args()
  make_fillable(Path(args.template), Path(args.fields), Path(args.out))


if __name__ == "__main__":
  main()

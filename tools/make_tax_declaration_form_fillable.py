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


def _extract_line_segments(page: fitz.Page):
  segs: list[tuple[float, float, float, float]] = []
  for d in page.get_drawings():
    for it in (d.get("items") or []):
      if not it:
        continue
      if it[0] == "l":
        p0 = it[1]
        p1 = it[2]
        x0, y0 = float(p0.x), float(p0.y)
        x1, y1 = float(p1.x), float(p1.y)
        segs.append((x0, y0, x1, y1))
      elif it[0] == "re":
        r = it[1]
        x0, y0, x1, y1 = float(r.x0), float(r.y0), float(r.x1), float(r.y1)
        segs.append((x0, y0, x1, y0))
        segs.append((x1, y0, x1, y1))
        segs.append((x1, y1, x0, y1))
        segs.append((x0, y1, x0, y0))
  return segs


def _detect_squares_from_lines(segs: list[tuple[float, float, float, float]], y_min: float, y_max: float):
  tol = 0.9
  horizontals = []
  verticals = []
  for x0, y0, x1, y1 in segs:
    if max(y0, y1) < y_min or min(y0, y1) > y_max:
      continue
    if abs(y0 - y1) <= tol:
      if x1 < x0:
        x0, x1 = x1, x0
      w = x1 - x0
      if 7 <= w <= 16:
        horizontals.append((x0, (y0 + y1) / 2, x1))
    elif abs(x0 - x1) <= tol:
      if y1 < y0:
        y0, y1 = y1, y0
      h = y1 - y0
      if 7 <= h <= 16:
        verticals.append(((x0 + x1) / 2, y0, y1))

  def has_vertical(x: float, y0: float, y1: float):
    for vx, vy0, vy1 in verticals:
      if abs(vx - x) <= 1.2 and abs(vy0 - y0) <= 1.5 and abs(vy1 - y1) <= 1.5:
        return True
    return False

  squares = []
  for x0, y_top, x1 in horizontals:
    for x0b, y_bot, x1b in horizontals:
      if y_bot <= y_top + 5:
        continue
      if abs(x0b - x0) > 1.2 or abs(x1b - x1) > 1.2:
        continue
      size = y_bot - y_top
      if not (7 <= size <= 16):
        continue
      if has_vertical(x0, y_top, y_bot) and has_vertical(x1, y_top, y_bot):
        squares.append((x0, y_top, x1, y_bot))

  uniq = []
  seen = set()
  for x0, y0, x1, y1 in sorted(squares, key=lambda r: (r[1], r[0])):
    key = (round(x0, 1), round(y0, 1), round(x1, 1), round(y1, 1))
    if key in seen:
      continue
    seen.add(key)
    uniq.append((x0, y0, x1, y1))
  return uniq


def _find_table_grid(page: fitz.Page):
  rects = []
  for d in page.get_drawings():
    for it in (d.get("items") or []):
      if not it:
        continue
      if it[0] != "re":
        continue
      r = it[1]
      x0, y0, x1, y1 = float(r.x0), float(r.y0), float(r.x1), float(r.y1)
      if y1 < 520 or y0 > 720:
        continue
      rects.append((x0, y0, x1, y1))

  if not rects:
    return None

  vertical_x = []
  horizontal = []
  for x0, y0, x1, y1 in rects:
    w = x1 - x0
    h = y1 - y0
    if w <= 2 and h >= 8:
      vertical_x.append((x0 + x1) / 2)
    if h <= 2 and w >= 100:
      horizontal.append(((y0 + y1) / 2, x0, x1))

  if not horizontal or not vertical_x:
    return None

  x_left = min(min(x0 for _y, x0, _x1 in horizontal), min(vertical_x))
  x_right = max(max(x1 for _y, _x0, x1 in horizontal), max(vertical_x))
  x_mid_candidates = [x for x in vertical_x if x_left + 80 < x < x_right - 80]
  x_mid = min(x_mid_candidates, key=lambda x: abs((x_left + x_right) / 2 - x)) if x_mid_candidates else (x_left + x_right) / 2

  by_y: dict[float, tuple[float, float]] = {}
  for y, x0, x1 in horizontal:
    key = round(y, 1)
    if key not in by_y:
      by_y[key] = (x0, x1)
    else:
      mn, mx = by_y[key]
      by_y[key] = (min(mn, x0), max(mx, x1))

  span_needed = (x_right - x_left) * 0.9
  ys = []
  for y, (mn, mx) in sorted(by_y.items()):
    if mx - mn >= span_needed:
      ys.append(float(y))

  if len(ys) < 4:
    return None

  return {"x_left": float(x_left), "x_mid": float(x_mid), "x_right": float(x_right), "ys": ys}


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
  segs = _extract_line_segments(page)
  range_squares = _detect_squares_from_lines(segs, 260, 350)
  grid = _find_table_grid(page)
  underline_runs = _extract_underline_runs(page)
  sig_labels = _find_label_bboxes(page, "Signature:")
  date_labels = _find_label_bboxes(page, "Date:")
  assess_labels = _find_label_bboxes(page, "Income Tax Notice of Assessment No:")

  buf = BytesIO()
  c = canvas.Canvas(buf, pagesize=(page_w, page_h))

  def place_range_checkbox(idx: int, bbox: tuple[float, float, float, float]):
    x0, y0, x1, y1 = bbox
    label_yc = (y0 + y1) / 2
    best = None
    best_dx = 1e9
    for sx0, sy0, sx1, sy1 in range_squares:
      yc = (sy0 + sy1) / 2
      if abs(yc - label_yc) > 6:
        continue
      if sx1 > x0 + 6:
        continue
      dx = x0 - sx1
      if dx < best_dx:
        best_dx = dx
        best = (sx0, sy0, sx1, sy1)

    if best:
      sx0, sy0, sx1, sy1 = best
      size = min(sx1 - sx0, sy1 - sy0) - 2
      cb_x = sx0 + 1
      cb_y = _rl_y(sy1, page_h) + 1
      _checkbox(c, f"income_range_{idx}", cb_x, cb_y, size=int(max(8, size)))
    else:
      box_size = 11
      cb_x = x0 - 6
      cb_y = _rl_y(y1, page_h) + (y1 - y0 - box_size) / 2
      _checkbox(c, f"income_range_{idx}", cb_x, cb_y, size=box_size)

  for idx, (_label, bbox) in enumerate(ranges):
    place_range_checkbox(idx, bbox)

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

  if grid:
    xs = (grid["x_left"], grid["x_mid"], grid["x_right"])
    ys = grid["ys"]

    def row_band(y_start: float, y_end: float):
      top = min(y_start, y_end)
      bot = max(y_start, y_end)
      y = _rl_y(bot, page_h) + 4
      h = (bot - top) - 8
      return top, bot, y, max(10.0, h)

    def cell_bounds(col: str):
      if col == "left":
        return xs[0], xs[1]
      return xs[1], xs[2]

    def add_cell_field(name: str, col: str, row_top: float, row_bot: float, label_bbox: tuple[float, float, float, float] | None, height_override: float | None = None):
      x0, x1 = cell_bounds(col)
      pad = 6
      if label_bbox:
        lx0, ly0, lx1, ly1 = label_bbox
        fx0 = max(x0 + pad, lx1 + 6)
      else:
        fx0 = x0 + pad
      fx1 = x1 - pad
      _rt, _rb, fy, fh = row_band(row_top, row_bot)
      if height_override is not None:
        fh = min(fh, height_override)
      _textfield(c, name, fx0, fy, max(20.0, fx1 - fx0), fh)

    if len(ys) >= 5:
      y_top, y1, y2, y3, y4 = ys[0], ys[1], ys[2], ys[3], ys[4]
    else:
      y_top, y1, y2, y3, y4 = ys[0], ys[1], ys[2], ys[-2], ys[-1]

    if len(assess_labels) >= 2:
      left_lbl, right_lbl = assess_labels[0], assess_labels[1]
      add_cell_field("employer_assessment_no", "left", y1, y2, left_lbl)
      add_cell_field("spouse_assessment_no", "right", y1, y2, right_lbl)

    if len(sig_labels) >= 2:
      left_lbl, right_lbl = sig_labels[0], sig_labels[1]
      add_cell_field("employer_signature", "left", y2, y3, left_lbl, height_override=20)
      add_cell_field("spouse_signature", "right", y2, y3, right_lbl, height_override=20)

    if len(date_labels) >= 2:
      left_lbl, right_lbl = date_labels[0], date_labels[1]
      add_cell_field("employer_date", "left", y3, y4, left_lbl)
      add_cell_field("spouse_date", "right", y3, y4, right_lbl)
  else:
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

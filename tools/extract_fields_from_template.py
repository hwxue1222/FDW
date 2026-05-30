from __future__ import annotations

import argparse
import json
from dataclasses import asdict, dataclass
from pathlib import Path

import fitz


@dataclass(frozen=True)
class FieldRow:
  page: int
  label: str
  label_bbox: list[float]
  input_bbox: list[float] | None
  kind: str


def _norm(text: str):
  return " ".join((text or "").split())


def _extract_spans(page: fitz.Page):
  data = page.get_text("dict")
  spans = []
  for block in data.get("blocks", []):
    if block.get("type") != 0:
      continue
    for line in block.get("lines", []):
      for sp in line.get("spans", []):
        text = _norm(sp.get("text") or "")
        if not text:
          continue
        bbox = sp.get("bbox")
        if not bbox:
          continue
        spans.append({
          "text": text,
          "bbox": [float(v) for v in bbox],
          "size": float(sp.get("size") or 10),
          "font": str(sp.get("font") or ""),
          "color": int(sp.get("color") or 0),
        })
  return spans


def _extract_rects(page: fitz.Page):
  rects: list[list[float]] = []
  for d in page.get_drawings():
    for item in d.get("items") or []:
      if not item:
        continue
      if item[0] != "re":
        continue
      r = item[1]
      rects.append([float(r.x0), float(r.y0), float(r.x1), float(r.y1)])
  unique = []
  seen = set()
  for r in rects:
    key = tuple(round(v, 2) for v in r)
    if key in seen:
      continue
    seen.add(key)
    unique.append(r)
  return unique


def _overlap_y(a: list[float], b: list[float]):
  y0 = max(a[1], b[1])
  y1 = min(a[3], b[3])
  return max(0.0, y1 - y0)


def _choose_input_rect(label_bbox: list[float], rects: list[list[float]]):
  lx0, ly0, lx1, ly1 = label_bbox
  best = None
  best_score = -1.0
  for r in rects:
    rx0, ry0, rx1, ry1 = r
    if rx0 <= lx1 + 8:
      continue
    if rx1 - rx0 < 80:
      continue
    if ry1 - ry0 < 10:
      continue
    oy = _overlap_y(label_bbox, r)
    if oy <= 0:
      continue
    score = oy - (rx0 - lx1) * 0.01
    if score > best_score:
      best_score = score
      best = r
  return best


def _choose_input_rect_below(label_bbox: list[float], rects: list[list[float]]):
  lx0, ly0, lx1, ly1 = label_bbox
  best = None
  best_score = -1.0
  for r in rects:
    rx0, ry0, rx1, ry1 = r
    if ry0 < ly1 - 2:
      continue
    dy = ry0 - ly1
    if dy > 140:
      continue
    if rx1 - rx0 < 180:
      continue
    score = 1000.0 - dy - abs(rx0 - lx0) * 0.1
    if score > best_score:
      best_score = score
      best = r
  return best


def _is_section(text: str):
  t = text.lower()
  return t in {"fees payment"} or (len(text) <= 32 and "agreement" not in t and text.istitle())


def extract_fields(pdf_path: Path):
  doc = fitz.open(str(pdf_path))
  out_rows: list[FieldRow] = []
  for page in doc:
    spans = _extract_spans(page)
    rects = _extract_rects(page)

    labels = []
    sections = []
    for sp in spans:
      text = sp["text"]
      if text.startswith("Between "):
        continue

      if text == "Fees Payment":
        sections.append(
          FieldRow(
            page=page.number,
            label=text,
            label_bbox=sp["bbox"],
            input_bbox=None,
            kind="section",
          )
        )
        continue

      if text.isupper() and len(text) > 20:
        continue

      if sp["bbox"][0] < 220 and 7.0 <= sp["size"] <= 10.5 and len(text) <= 60:
        labels.append(sp)

    out_rows.extend(sections)

    for lab in labels:
      input_rect = _choose_input_rect(lab["bbox"], rects) or _choose_input_rect_below(lab["bbox"], rects)
      out_rows.append(
        FieldRow(
          page=page.number,
          label=lab["text"],
          label_bbox=lab["bbox"],
          input_bbox=input_rect,
          kind="text" if input_rect else "label_only",
        )
      )

  out_rows.sort(key=lambda r: (r.page, r.label_bbox[1], r.label_bbox[0]))

  return {
    "pdf": str(pdf_path),
    "pageCount": doc.page_count,
    "fields": [asdict(r) for r in out_rows],
  }


def main():
  parser = argparse.ArgumentParser()
  parser.add_argument("--in", dest="in_path", required=True)
  parser.add_argument("--out", dest="out_path", required=True)
  args = parser.parse_args()

  result = extract_fields(Path(args.in_path))
  out_path = Path(args.out_path)
  out_path.parent.mkdir(parents=True, exist_ok=True)
  out_path.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
  main()

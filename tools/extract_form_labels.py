from __future__ import annotations

import argparse
import json
import math
from dataclasses import asdict, dataclass
from pathlib import Path

import fitz


@dataclass(frozen=True)
class Label:
  page: int
  text: str
  x0: float
  y0: float
  x1: float
  y1: float
  size: float
  color: int
  font: str


def _is_watermark(text: str):
  t = text.upper()
  return "GREAT LINK" in t or "EMPLOYMENT" in t


def _norm_text(text: str):
  return " ".join((text or "").split())


def _extract_labels(page: fitz.Page):
  data = page.get_text("dict")
  labels: list[Label] = []
  for block in data.get("blocks", []):
    if block.get("type") != 0:
      continue
    for line in block.get("lines", []):
      for sp in line.get("spans", []):
        raw = sp.get("text") or ""
        text = _norm_text(raw)
        if not text:
          continue
        if _is_watermark(text):
          continue
        bbox = sp.get("bbox")
        if not bbox:
          continue
        x0, y0, x1, y1 = [float(v) for v in bbox]
        labels.append(
          Label(
            page=page.number,
            text=text,
            x0=x0,
            y0=y0,
            x1=x1,
            y1=y1,
            size=float(sp.get("size") or 10),
            color=int(sp.get("color") or 0),
            font=str(sp.get("font") or ""),
          )
        )
  return labels


def _cluster_by_y(labels: list[Label], tol: float = 2.0):
  rows: list[list[Label]] = []
  for lab in sorted(labels, key=lambda l: (l.page, l.y0, l.x0)):
    if not rows:
      rows.append([lab])
      continue
    last = rows[-1][-1]
    if lab.page == last.page and abs(lab.y0 - last.y0) <= tol:
      rows[-1].append(lab)
    else:
      rows.append([lab])
  for r in rows:
    r.sort(key=lambda l: l.x0)
  return rows


def _looks_like_title(text: str):
  t = text.lower()
  if t in {"employer", "spouse"}:
    return True
  if any(k in t for k in ["name", "date", "nric", "passport", "residential status", "type of house", "purpose"]):
    return True
  return False


def _to_output(doc: fitz.Document):
  all_labels: list[Label] = []
  for p in doc:
    all_labels.extend(_extract_labels(p))

  rows = _cluster_by_y(all_labels)
  lines = []
  for row in rows:
    text = " ".join([l.text for l in row])
    if not text:
      continue
    x0 = min(l.x0 for l in row)
    y0 = min(l.y0 for l in row)
    x1 = max(l.x1 for l in row)
    y1 = max(l.y1 for l in row)
    avg_size = sum(l.size for l in row) / max(1, len(row))
    lines.append(
      {
        "page": row[0].page,
        "text": text,
        "bbox": [x0, y0, x1, y1],
        "avgSize": round(avg_size, 2),
        "isLikelyFieldLabel": _looks_like_title(text),
      }
    )

  candidates = []
  for l in all_labels:
    if _looks_like_title(l.text):
      candidates.append(asdict(l))

  return {
    "pageCount": doc.page_count,
    "pageSize": list(doc[0].rect),
    "rawCandidates": candidates,
    "lines": lines,
  }


def main():
  parser = argparse.ArgumentParser()
  parser.add_argument("--in", dest="in_path", required=True)
  parser.add_argument("--out", dest="out_path", required=True)
  args = parser.parse_args()

  doc = fitz.open(args.in_path)
  out = _to_output(doc)
  Path(args.out_path).parent.mkdir(parents=True, exist_ok=True)
  Path(args.out_path).write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
  main()


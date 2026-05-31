from __future__ import annotations

import re
from pathlib import Path

import fitz


def main():
  pdf_path = Path("/Users/apple/Downloads/tax_declaration_form.pdf")
  doc = fitz.open(str(pdf_path))
  page = doc[0]
  w, h = page.rect.width, page.rect.height
  print("page_size", w, h)

  spans: list[tuple[str, tuple[float, float, float, float]]] = []
  for b in page.get_text("dict").get("blocks", []):
    if b.get("type") != 0:
      continue
    for ln in b.get("lines", []):
      for sp in ln.get("spans", []):
        t = " ".join((sp.get("text") or "").split())
        if not t:
          continue
        spans.append((t, tuple(float(v) for v in sp["bbox"])))

  underscore = [(t, b) for t, b in spans if re.search(r"_{6,}", t)]
  print("underscore_spans", len(underscore))
  for t, b in underscore[:20]:
    print("UND", t[:60], [round(x, 1) for x in b])

  keys = [
    "Please tick",
    "Below $2,000",
    "I,",
    "NRIC/WP No/FIN:",
    "Signature:",
    "Date:",
    "(Name of employer)",
    "( Name of the employer’s spouse)",
    "Employer",
    "Employer’s Spouse",
  ]
  for k in keys:
    hits = [(t, b) for t, b in spans if k in t]
    print("\nKEY", k, "hits", len(hits))
    for t, b in hits[:8]:
      print(" ", t, [round(x, 1) for x in b])

  rects = []
  for d in page.get_drawings():
    for it in (d.get("items") or []):
      if not it:
        continue
      if it[0] != "re":
        continue
      r = it[1]
      rw = float(r.x1 - r.x0)
      rh = float(r.y1 - r.y0)
      if 7 <= rw <= 14 and 7 <= rh <= 14:
        rects.append((float(r.x0), float(r.y0), float(r.x1), float(r.y1)))
  rects.sort(key=lambda t: (t[1], t[0]))
  print("\ncheckbox_rects", len(rects))
  for r in rects[:30]:
    print("CB", [round(x, 1) for x in r])

  ranges = [(t, b) for t, b in spans if t.startswith("Below") or re.match(r"^\$\d", t)]
  print("\nrange_labels", len(ranges))
  for t, b in ranges:
    print("R", t, [round(x, 1) for x in b])


if __name__ == "__main__":
  main()


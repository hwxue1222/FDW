from __future__ import annotations

import fitz


def main():
  p = "assets/pdpa_statement_master.pdf"
  doc = fitz.open(p)
  page = doc[0]
  print("page_size", page.rect)
  print("text_head", " ".join(page.get_text("text").split())[:400])

  spans = []
  for b in page.get_text("dict").get("blocks", []):
    if b.get("type") != 0:
      continue
    for ln in b.get("lines", []):
      for sp in ln.get("spans", []):
        t = " ".join((sp.get("text") or "").split())
        if not t:
          continue
        spans.append((t, sp.get("bbox")))
  print("span_count", len(spans))

  keys = ["Name", "NRIC", "FIN", "Signature", "Date", "tick", "consent", "personal"]
  for k in keys:
    hits = [(t, b) for t, b in spans if k.lower() in t.lower()]
    print("\n", k, "hits", len(hits))
    for t, b in hits[:20]:
      x0, y0, x1, y1 = b
      print(" ", t, [round(x0, 1), round(y0, 1), round(x1, 1), round(y1, 1)])

  drawings = page.get_drawings()
  kinds = {}
  rects = 0
  lines = 0
  for d in drawings:
    for it in (d.get("items") or []):
      kinds[it[0]] = kinds.get(it[0], 0) + 1
      if it[0] == "re":
        rects += 1
      if it[0] == "l":
        lines += 1
  print("\ndrawing_kinds", kinds)
  print("rects", rects, "lines", lines)

  small_rects = []
  thin_rects = []
  for d in drawings:
    for it in (d.get("items") or []):
      if not it:
        continue
      if it[0] != "re":
        continue
      r = it[1]
      x0, y0, x1, y1 = float(r.x0), float(r.y0), float(r.x1), float(r.y1)
      w = x1 - x0
      h = y1 - y0
      if 6 <= w <= 18 and 6 <= h <= 18:
        small_rects.append((x0, y0, x1, y1))
      if h < 2.5 and w > 60:
        thin_rects.append((x0, y0, x1, y1))
  small_rects.sort(key=lambda r: (r[1], r[0]))
  thin_rects.sort(key=lambda r: (r[1], r[0]))
  print("\nsmall_rects", len(small_rects))
  print("sample_small", [[round(x, 1) for x in r] for r in small_rects[:15]])
  print("\nthin_rects", len(thin_rects))
  print("sample_thin", [[round(x, 1) for x in r] for r in thin_rects[:15]])

  glyph_boxes = []
  raw = page.get_text("rawdict")
  for block in raw.get("blocks", []):
    if block.get("type") != 0:
      continue
    for line in block.get("lines", []):
      for span in line.get("spans", []):
        for ch in span.get("chars") or []:
          c = ch.get("c")
          if c in {"☐", "☑", "□", "■"}:
            bbox = ch.get("bbox")
            if bbox:
              glyph_boxes.append((c, tuple(float(v) for v in bbox)))
  print("\nglyph_checkbox_chars", len(glyph_boxes))
  for c, b in glyph_boxes[:20]:
    x0, y0, x1, y1 = b
    print(" ", c, [round(x0, 1), round(y0, 1), round(x1, 1), round(y1, 1)])


if __name__ == "__main__":
  main()


from __future__ import annotations

import argparse
from dataclasses import dataclass
from io import BytesIO
from pathlib import Path
from typing import Iterable

import fitz
from pypdf import PdfReader, PdfWriter
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas


@dataclass(frozen=True)
class TextSpan:
    text: str
    x: float
    y: float
    size: float
    color: int


def _transparent():
    return colors.Color(0, 0, 0, alpha=0)


def _rl_y(y_top_left: float, page_h: float):
    return page_h - y_top_left


def _draw_strokes(c: canvas.Canvas, drawings: list[dict], page_h: float):
    c.setStrokeColor(colors.black)
    c.setLineWidth(0.7)

    for d in drawings:
        items = d.get("items") or []
        width = d.get("width")
        if isinstance(width, (int, float)):
            c.setLineWidth(max(0.2, float(width)))

        for item in items:
            if not item:
                continue
            kind = item[0]
            if kind == "l":
                if len(item) < 3:
                    continue
                p0 = item[1]
                p1 = item[2]
                x0, y0 = float(getattr(p0, "x", p0[0])), float(getattr(p0, "y", p0[1]))
                x1, y1 = float(getattr(p1, "x", p1[0])), float(getattr(p1, "y", p1[1]))
                c.line(x0, _rl_y(y0, page_h), x1, _rl_y(y1, page_h))
            elif kind == "re":
                if len(item) < 2:
                    continue
                r = item[1]
                x0 = float(getattr(r, "x0", 0.0))
                y0 = float(getattr(r, "y0", 0.0))
                x1 = float(getattr(r, "x1", 0.0))
                y1 = float(getattr(r, "y1", 0.0))
                c.rect(x0, _rl_y(y1, page_h), x1 - x0, y1 - y0, stroke=1, fill=0)
            elif kind == "qu":
                if len(item) < 2:
                    continue
                pts = item[1]
                (x0, y0), (x1, y1), (x2, y2), (x3, y3) = pts
                p = c.beginPath()
                p.moveTo(x0, _rl_y(y0, page_h))
                p.lineTo(x1, _rl_y(y1, page_h))
                p.lineTo(x2, _rl_y(y2, page_h))
                p.lineTo(x3, _rl_y(y3, page_h))
                p.close()
                c.drawPath(p, stroke=1, fill=0)


def _extract_text_spans(page: fitz.Page) -> list[TextSpan]:
    data = page.get_text("dict")
    spans: list[TextSpan] = []
    for block in data.get("blocks", []):
        if block.get("type") != 0:
            continue
        for line in block.get("lines", []):
            for sp in line.get("spans", []):
                text = (sp.get("text") or "").strip()
                if not text:
                    continue
                bbox = sp.get("bbox")
                if not bbox:
                    continue
                x0, y0, x1, y1 = bbox
                size = float(sp.get("size") or 10)
                color = int(sp.get("color") or 0)

                if "GREAT LINK" in text.upper() or "EMPLOYMENT" in text.upper():
                    continue

                spans.append(TextSpan(text=text, x=float(x0), y=float(y1), size=size, color=color))
    return spans


def _draw_text(c: canvas.Canvas, spans: Iterable[TextSpan], page_h: float):
    for sp in spans:
        r = (sp.color >> 16) & 0xFF
        g = (sp.color >> 8) & 0xFF
        b = sp.color & 0xFF
        c.setFillColor(colors.Color(r / 255, g / 255, b / 255))
        c.setFont("Helvetica", max(6, min(18, sp.size)))
        c.drawString(sp.x, _rl_y(sp.y, page_h), sp.text)


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
        textColor=colors.HexColor("#1e40af"),
        fontName="Helvetica",
        fontSize=size,
        forceBorder=False,
    )


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


def _build_fields_overlay() -> BytesIO:
    buf = BytesIO()
    c = canvas.Canvas(buf, pagesize=A4)

    w, h = A4
    x_left = 18
    x_mid = 297
    x_right = 577
    y_top = h - 18

    _textfield(c, "file_no", x_right - 120, y_top - 62, 118, 16)

    y_row1 = y_top - 132
    row_h = 22

    _textfield(c, "employer_name", x_left + 124, y_row1, 170, 16)
    _textfield(c, "spouse_name", x_mid + 22, y_row1, x_right - (x_mid + 26), 16)

    y_row2 = y_row1 - row_h
    _textfield(c, "employer_dob", x_left + 124, y_row2, 170, 16)
    _textfield(c, "spouse_dob", x_mid + 22, y_row2, x_right - (x_mid + 26), 16)

    y_row3 = y_row2 - row_h
    _textfield(c, "employer_nric", x_left + 124, y_row3, 170, 16)
    _textfield(c, "spouse_nric", x_mid + 22, y_row3, x_right - (x_mid + 26), 16)

    y_row4 = y_row3 - row_h
    _textfield(c, "employer_passport", x_left + 124, y_row4, 170, 16)
    _textfield(c, "spouse_passport", x_mid + 22, y_row4, x_right - (x_mid + 26), 16)

    y_res = y_row4 - 118
    employer_left = x_left + 124
    spouse_left = x_mid + 22
    for i in range(10):
        dy = (i % 5) * 18
        col = 0 if i < 5 else 1
        _checkbox(c, f"employer_res_{i}", employer_left + col * 120, y_res - dy)
        _checkbox(c, f"spouse_res_{i}", spouse_left + col * 120, y_res - dy)

    y_married = y_res - 112
    _checkbox(c, "married_in_sg_yes", x_mid - 20, y_married + 2)
    _checkbox(c, "married_in_sg_no", x_mid + 85, y_married + 2)

    y_prof = y_married - 26
    _textfield(c, "profession", x_left + 124, y_prof, x_right - (x_left + 128), 16)
    y_company = y_prof - 22
    _textfield(c, "employer_company", x_left + 124, y_company, x_right - (x_left + 128), 16)
    y_mobile = y_company - 22
    _textfield(c, "mobile_phone", x_left + 124, y_mobile, x_right - (x_left + 128), 16)
    y_addr = y_mobile - 44
    _textfield(c, "address", x_left + 124, y_addr, x_right - (x_left + 128), 40)
    y_email = y_addr - 22
    _textfield(c, "email", x_left + 124, y_email, 260, 16)
    _textfield(c, "home_phone", x_left + 398, y_email, x_right - (x_left + 402), 16)

    y_house = y_email - 48
    house_x = x_left + 124
    house_y = y_house
    for i in range(8):
        dx = (i % 4) * 120
        dy = (i // 4) * 18
        _checkbox(c, f"house_{i}", house_x + dx, house_y - dy)

    y_family = y_house - 110
    col1 = x_left + 18
    col2 = x_left + 260
    col3 = x_left + 360
    col4 = x_left + 462
    for i in range(1, 5):
        y = y_family - (i - 1) * 20
        _textfield(c, f"family_{i}_name", col1 + 6, y, 230, 14, size=9)
        _textfield(c, f"family_{i}_id", col2 + 6, y, 92, 14, size=9)
        _textfield(c, f"family_{i}_dob", col3 + 6, y, 92, 14, size=9)
        _textfield(c, f"family_{i}_relationship", col4 + 6, y, x_right - (col4 + 10), 14, size=9)

    y_purpose = y_family - 142
    _checkbox(c, "purpose_new_fdw", x_left + 20, y_purpose)
    _checkbox(c, "purpose_replacement", x_left + 205, y_purpose)
    _checkbox(c, "purpose_additional", x_left + 420, y_purpose)
    _textfield(c, "replacement_fin", x_left + 240, y_purpose - 18, 120, 14, size=9)
    _textfield(c, "replacement_fdw", x_left + 240, y_purpose - 36, 220, 14, size=9)

    y_maid = y_purpose - 78
    _textfield(c, "maid_name", x_left + 88, y_maid, 290, 14, size=9)
    _textfield(c, "maid_code_no", x_left + 470, y_maid, 105, 14, size=9)
    y_maid2 = y_maid - 20
    _textfield(c, "maid_work_permit", x_left + 88, y_maid2, 160, 14, size=9)
    _textfield(c, "maid_fin_no", x_left + 330, y_maid2, 160, 14, size=9)
    y_maid3 = y_maid2 - 20
    _textfield(c, "maid_passport", x_left + 88, y_maid3, 160, 14, size=9)
    _textfield(c, "maid_dob", x_left + 330, y_maid3, 160, 14, size=9)

    y_sponsor = y_maid3 - 74
    _textfield(c, "sponsor1_name", x_left + 98, y_sponsor, 290, 14, size=9)
    _textfield(c, "sponsor1_nric", x_left + 420, y_sponsor, 155, 14, size=9)
    y_sponsor2 = y_sponsor - 18
    _textfield(c, "sponsor1_nationality", x_left + 98, y_sponsor2, 165, 14, size=9)
    _textfield(c, "sponsor1_dob", x_left + 330, y_sponsor2, 245, 14, size=9)
    y_sponsor3 = y_sponsor2 - 18
    _textfield(c, "sponsor1_relationship", x_left + 150, y_sponsor3, 230, 14, size=9)
    _textfield(c, "sponsor1_contact", x_left + 450, y_sponsor3, 125, 14, size=9)
    y_sponsor4 = y_sponsor3 - 18
    _textfield(c, "sponsor1_married_in_sg", x_left + 120, y_sponsor4, 455, 14, size=9)

    y_sponsor5 = y_sponsor4 - 22
    _textfield(c, "sponsor_spouse_name", x_left + 160, y_sponsor5, 228, 14, size=9)
    _textfield(c, "sponsor_spouse_nric", x_left + 420, y_sponsor5, 155, 14, size=9)
    y_sponsor6 = y_sponsor5 - 18
    _textfield(c, "sponsor_spouse_dob", x_left + 98, y_sponsor6, 240, 14, size=9)

    c.showPage()
    c.save()
    buf.seek(0)
    return buf


def make_redrawn_fillable(master_path: Path, out_path: Path):
    doc = fitz.open(str(master_path))
    page = doc[0]

    drawings = page.get_drawings()
    spans = _extract_text_spans(page)

    buf = BytesIO()
    c = canvas.Canvas(buf, pagesize=A4)
    _, page_h = A4
    _draw_strokes(c, drawings, page_h)
    _draw_text(c, spans, page_h)
    c.showPage()
    c.save()
    buf.seek(0)

    base_reader = PdfReader(buf)
    fields_reader = PdfReader(_build_fields_overlay())

    writer = PdfWriter()
    writer.clone_document_from_reader(fields_reader)
    writer.pages[0].merge_page(base_reader.pages[0], over=False)
    writer.set_need_appearances_writer()

    out_path.parent.mkdir(parents=True, exist_ok=True)
    with open(out_path, "wb") as f:
        writer.write(f)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--in", dest="in_path", required=True)
    parser.add_argument("--out", dest="out_path", required=True)
    args = parser.parse_args()
    make_redrawn_fillable(Path(args.in_path), Path(args.out_path))


if __name__ == "__main__":
    main()

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from pypdf import PdfReader, PdfWriter
from pypdf.generic import ArrayObject, DictionaryObject, NameObject, TextStringObject


OUT = Path("assets/blank_quotation_template.pdf")
PAGE_W, PAGE_H = A4
MARGIN = 34
LINE = colors.HexColor("#4d5a55")
GREEN = colors.HexColor("#1f7a55")
INK = colors.HexColor("#17211d")
MUTED = colors.HexColor("#62706a")


def title(c, text, subtitle=""):
    c.setFillColor(GREEN)
    c.setFont("Helvetica-Bold", 16)
    c.drawString(MARGIN, PAGE_H - 36, text)
    if subtitle:
        c.setFillColor(MUTED)
        c.setFont("Helvetica", 8)
        c.drawString(MARGIN, PAGE_H - 50, subtitle)
    c.setStrokeColor(colors.HexColor("#dce3df"))
    c.line(MARGIN, PAGE_H - 60, PAGE_W - MARGIN, PAGE_H - 60)


def label(c, text, x, y, size=8, bold=False):
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold" if bold else "Helvetica", size)
    c.drawString(x, y, text)


def small(c, text, x, y):
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 7)
    c.drawString(x, y, text)


def text_field(c, name, x, y, w, h=15, font_size=8):
    c.acroForm.textfield(
        name=name,
        x=x,
        y=y,
        width=w,
        height=h,
        value="",
        borderColor=LINE,
        fillColor=colors.white,
        textColor=colors.black,
        borderWidth=0.7,
        fontName="Helvetica",
        fontSize=font_size,
        forceBorder=True,
    )


def area_field(c, name, x, y, w, h=38):
    c.acroForm.textfield(
        name=name,
        x=x,
        y=y,
        width=w,
        height=h,
        value="",
        borderColor=LINE,
        fillColor=colors.white,
        textColor=colors.black,
        borderWidth=0.7,
        fontName="Helvetica",
        fontSize=8,
        forceBorder=True,
        fieldFlags="multiline",
    )


def checkbox(c, name, x, y, text):
    c.acroForm.checkbox(
        name=name,
        x=x,
        y=y,
        size=10,
        borderColor=LINE,
        fillColor=colors.white,
        textColor=colors.black,
        borderWidth=0.7,
        forceBorder=True,
    )
    label(c, text, x + 15, y + 2, 7)


def item_row(c, y, code, desc, standard_price="", note="", amount_w=76):
    checkbox(c, f"{code}_selected", MARGIN + 4, y + 2, "")
    label(c, desc, MARGIN + 24, y + 5, 8)
    if note:
        small(c, note, MARGIN + 210, y + 5)
    label(c, standard_price, PAGE_W - MARGIN - 180, y + 5, 8, True)
    label(c, "$", PAGE_W - MARGIN - amount_w - 14, y + 5, 8, True)
    text_field(c, f"{code}_amount", PAGE_W - MARGIN - amount_w, y + 1, amount_w, 15)
    return y - 22


def total_row(c, y, code, desc, amount_w=90):
    label(c, desc, PAGE_W - MARGIN - amount_w - 170, y + 5, 8, True)
    label(c, "$", PAGE_W - MARGIN - amount_w - 14, y + 5, 8, True)
    text_field(c, f"{code}_amount", PAGE_W - MARGIN - amount_w, y + 1, amount_w, 15)
    return y - 24


def section_header(c, y, text):
    c.setFillColor(colors.HexColor("#eef5f1"))
    c.rect(MARGIN, y - 4, PAGE_W - MARGIN * 2, 18, fill=1, stroke=0)
    label(c, text, MARGIN + 8, y, 9, True)
    return y - 24


def make_page_1(c):
    title(c, "QUOTATION / PACKAGE FEE", "Blank editable template for maid agency package quotation")
    y = PAGE_H - 84

    label(c, "Customer / Employer Name", MARGIN, y, 8, True)
    text_field(c, "customer_name", MARGIN + 130, y - 4, 180)
    label(c, "Date of Quotation", MARGIN + 330, y, 8, True)
    text_field(c, "quotation_date", MARGIN + 430, y - 4, 95)
    y -= 28
    label(c, "MDW Name / Ref No.", MARGIN, y, 8, True)
    text_field(c, "mdw_name_ref", MARGIN + 130, y - 4, 180)
    label(c, "Consultant", MARGIN + 330, y, 8, True)
    text_field(c, "consultant", MARGIN + 430, y - 4, 95)
    y -= 34

    label(c, "LODGING NOTE:", MARGIN, y, 8, True)
    area_field(c, "lodging_note", MARGIN + 88, y - 18, PAGE_W - MARGIN * 2 - 88, 28)
    y -= 46
    small(c, "Replacement Policy - Unlimited within 12 months. Waive off POEA / EC fee where applicable.", MARGIN, y)
    y -= 24

    y = section_header(c, y, "PART A: BASIC AGENCY FEE")
    small(c, "Select", MARGIN + 4, y + 4)
    small(c, "Item", MARGIN + 24, y + 4)
    small(c, "Standard Price", PAGE_W - MARGIN - 180, y + 4)
    small(c, "Quoted Price", PAGE_W - MARGIN - 82, y + 4)
    y -= 18
    y = item_row(c, y, "agency_new_arrival", "Agency Fee (New Arrival)", "$738")
    y = item_row(c, y, "agency_transfer", "Agency Fee (Transfer MDW)", "$1,738")
    y = total_row(c, y, "part_a_total", "Total Fee for Part A")

    y -= 6
    y = section_header(c, y, "PART B: ADDITIONAL FEES")
    y = item_row(c, y, "ex_sg_tw_hk", "Ex-Singapore / Taiwan / Hong Kong", "$200")
    y = item_row(c, y, "ex_my_me", "Ex-Malaysia / Middle East", "$100")
    y = item_row(c, y, "chinese_speaking", "Chinese Speaking", "$200")
    y = total_row(c, y, "part_b_total", "Total Fee for Part B")

    y -= 6
    y = section_header(c, y, "PART C: OTHERS")
    y = item_row(c, y, "wp_application", "Work Permit Application", "$35")
    y = item_row(c, y, "wp_issuance", "Work Permit Issuance", "$35")
    y = item_row(c, y, "doc_fee", "Doc Fee / SIP", "$55 / $75")
    y = item_row(c, y, "medical_fee", "Medical Fee incl. 3 days accommodation", "$290")
    y = item_row(c, y, "transport_airport", "Transportation / Airport pick up / Others per trip", "$80 / $50")
    y = item_row(c, y, "air_ticket", "Air Ticket / Ferry Charges etc.", "$250")
    y = item_row(c, y, "poea", "Overseas Employment Certificate (POEA)", "$350")
    y = item_row(c, y, "embassy_contract", "Indonesian Embassy Contract (EC)", "$350")
    y = item_row(c, y, "replacement_transfer", "Replacement Transfer Maid", "$400")
    y = total_row(c, y, "part_c_total", "Total Fee for Part C")

    y -= 6
    y = section_header(c, y, "PART D: INSURANCE")
    y = item_row(c, y, "insurance_without_waiver", "Insurance without Waiver", "$545 / $588.60 / $654")
    y = item_row(c, y, "insurance_with_waiver", "Insurance with Waiver", "$599.50 / $643.10 / $708.50", "Covered $5000 if MDW missing")
    y = total_row(c, y, "part_d_total", "Total Fee for Part D")
    c.showPage()


def make_page_2(c):
    title(c, "QUOTATION TOTALS / TERMS", "Blank editable totals, placement fee and acknowledgement")
    y = PAGE_H - 90
    rows = [
        ("Total Fees (Part A/B/C/D)", "total_abcd"),
        ("Estimated Placement Fees", "estimated_placement_fee"),
        ("Estimated Total Fees Payable", "estimated_total_payable"),
        ("Deposit / First Payment", "deposit_payment"),
        ("Balance Payable", "balance_payable"),
        ("Payment Due Date", "payment_due_date"),
    ]
    for text, name in rows:
        label(c, text, MARGIN, y + 4, 9, True)
        label(c, "$", PAGE_W - MARGIN - 96, y + 4, 8, True)
        text_field(c, name, PAGE_W - MARGIN - 80, y, 80, 16)
        y -= 30

    y -= 4
    label(c, "Special Notes / Remarks", MARGIN, y, 9, True)
    area_field(c, "special_remarks", MARGIN, y - 58, PAGE_W - MARGIN * 2, 50)
    y -= 88

    label(c, "Terms", MARGIN, y, 10, True)
    y -= 18
    terms = [
        "Replacement is applicable only if the MDW is returned to the agency with approval of consent for transfer to a new employer.",
        "If the replacement MDW's nationality differs from the MDW to be replaced, employer pays the fee difference as prescribed.",
        "For replacement, fees stated in Part B, C and D are still applicable.",
        "Filipino MDW arrangements must follow POEA rules and regulations where applicable.",
        "Employers shall not deduct placement fees, expenses or agency fees from the MDW's monthly salary.",
        "Lodging after the included period may be chargeable until deployment / pick-up date.",
    ]
    for term in terms:
        small(c, f"- {term}", MARGIN, y)
        y -= 14

    y -= 20
    label(c, "Employer Name", MARGIN, y, 8, True)
    text_field(c, "employer_name", MARGIN, y - 28, 180, 22)
    label(c, "Employer Signature / Date", MARGIN + 230, y, 8, True)
    text_field(c, "employer_signature_date", MARGIN + 230, y - 28, 220, 22)
    y -= 70
    label(c, "Agency Personnel", MARGIN, y, 8, True)
    text_field(c, "agency_personnel", MARGIN, y - 28, 180, 22)
    label(c, "Agency Signature / Date", MARGIN + 230, y, 8, True)
    text_field(c, "agency_signature_date", MARGIN + 230, y - 28, 220, 22)
    c.showPage()


def build():
    OUT.parent.mkdir(exist_ok=True)
    c = canvas.Canvas(str(OUT), pagesize=A4)
    c.setTitle("Blank Editable Quotation Package Fee Template")
    make_page_1(c)
    make_page_2(c)
    c.save()
    add_calculation_scripts(OUT)
    print(OUT)


def calc_script(item_codes):
    checks = ", ".join([f'"{code}_selected"' for code in item_codes])
    amounts = ", ".join([f'"{code}_amount"' for code in item_codes])
    return f"""
function cleanMoney(v) {{
  return Number(String(v || '').replace(/[^0-9.\\-]/g, '')) || 0;
}}
function selected(name) {{
  var f = this.getField(name);
  return f && f.value !== 'Off';
}}
var checks = [{checks}];
var amounts = [{amounts}];
var total = 0;
for (var i = 0; i < amounts.length; i++) {{
  if (selected(checks[i])) total += cleanMoney(this.getField(amounts[i]).value);
}}
event.value = total ? total.toFixed(2) : '';
"""


def sum_script(field_names):
    fields = ", ".join([f'"{name}"' for name in field_names])
    return f"""
function cleanMoney(v) {{
  return Number(String(v || '').replace(/[^0-9.\\-]/g, '')) || 0;
}}
var fields = [{fields}];
var total = 0;
for (var i = 0; i < fields.length; i++) {{
  var f = this.getField(fields[i]);
  if (f) total += cleanMoney(f.value);
}}
event.value = total ? total.toFixed(2) : '';
"""


def attach_calc(field, script):
    field[NameObject("/AA")] = DictionaryObject(
        {
            NameObject("/C"): DictionaryObject(
                {
                    NameObject("/S"): NameObject("/JavaScript"),
                    NameObject("/JS"): TextStringObject(script),
                }
            )
        }
    )


def add_calculation_scripts(path):
    reader = PdfReader(str(path))
    writer = PdfWriter()
    writer.clone_reader_document_root(reader)
    fields = writer._root_object["/AcroForm"]["/Fields"]
    scripts = {
        "part_a_total_amount": calc_script(["agency_new_arrival", "agency_transfer"]),
        "part_b_total_amount": calc_script(["ex_sg_tw_hk", "ex_my_me", "chinese_speaking"]),
        "part_c_total_amount": calc_script(
            [
                "wp_application",
                "wp_issuance",
                "doc_fee",
                "medical_fee",
                "transport_airport",
                "air_ticket",
                "poea",
                "embassy_contract",
                "replacement_transfer",
            ]
        ),
        "part_d_total_amount": calc_script(["insurance_without_waiver", "insurance_with_waiver"]),
        "total_abcd": sum_script(["part_a_total_amount", "part_b_total_amount", "part_c_total_amount", "part_d_total_amount"]),
        "estimated_total_payable": sum_script(["total_abcd", "estimated_placement_fee"]),
        "balance_payable": sum_script(["estimated_total_payable"]),
    }
    calculation_order = []
    for field_ref in fields:
        field = field_ref.get_object()
        name = str(field.get("/T", ""))
        if name in scripts:
            attach_calc(field, scripts[name])
            calculation_order.append(field_ref)
    writer._root_object["/AcroForm"][NameObject("/CO")] = ArrayObject(calculation_order)
    with open(path, "wb") as output:
        writer.write(output)


if __name__ == "__main__":
    build()

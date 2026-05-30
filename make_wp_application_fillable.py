from io import BytesIO

from pypdf import PdfReader, PdfWriter
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas


MASTER = "assets/wp_application_master.pdf"
OUT = "assets/blank_wp_application_template.pdf"


def transparent_color():
    return colors.Color(0, 0, 0, alpha=0)


def textfield(c, name, x, y, w, h, size=10):
    c.acroForm.textfield(
        name=name,
        x=x,
        y=y,
        width=w,
        height=h,
        borderWidth=0,
        borderColor=transparent_color(),
        fillColor=transparent_color(),
        textColor=colors.HexColor("#1e40af"),
        fontName="Helvetica",
        fontSize=size,
        forceBorder=False,
    )


def checkbox(c, name, x, y, size=11):
    c.acroForm.checkbox(
        name=name,
        x=x,
        y=y,
        size=size,
        borderWidth=0,
        borderColor=transparent_color(),
        fillColor=transparent_color(),
        textColor=colors.HexColor("#111827"),
        forceBorder=False,
    )


def build_overlay(page_count):
    buf = BytesIO()
    c = canvas.Canvas(buf, pagesize=A4)

    w, h = A4
    x0 = 18
    x_label = 18
    x_mid = 297
    x_right = 577

    y_top = h - 18

    textfield(c, "file_no", x_right - 120, y_top - 62, 118, 16)

    y_row1 = y_top - 132
    row_h = 22

    textfield(c, "employer_name", x_label + 124, y_row1, 170, 16)
    textfield(c, "spouse_name", x_mid + 22, y_row1, x_right - (x_mid + 26), 16)

    y_row2 = y_row1 - row_h
    textfield(c, "employer_dob", x_label + 124, y_row2, 170, 16)
    textfield(c, "spouse_dob", x_mid + 22, y_row2, x_right - (x_mid + 26), 16)

    y_row3 = y_row2 - row_h
    textfield(c, "employer_nric", x_label + 124, y_row3, 170, 16)
    textfield(c, "spouse_nric", x_mid + 22, y_row3, x_right - (x_mid + 26), 16)

    y_row4 = y_row3 - row_h
    textfield(c, "employer_passport", x_label + 124, y_row4, 170, 16)
    textfield(c, "spouse_passport", x_mid + 22, y_row4, x_right - (x_mid + 26), 16)

    y_res = y_row4 - 118
    employer_left = x_label + 124
    spouse_left = x_mid + 22

    for i in range(10):
        dy = (i % 5) * 18
        col = 0 if i < 5 else 1
        checkbox(c, f"employer_res_{i}", employer_left + col * 120, y_res - dy)
        checkbox(c, f"spouse_res_{i}", spouse_left + col * 120, y_res - dy)

    y_married = y_res - 112
    checkbox(c, "married_in_sg_yes", x_mid - 20, y_married + 2)
    checkbox(c, "married_in_sg_no", x_mid + 85, y_married + 2)

    y_prof = y_married - 26
    textfield(c, "profession", x_label + 124, y_prof, x_right - (x_label + 128), 16)
    y_company = y_prof - 22
    textfield(c, "employer_company", x_label + 124, y_company, x_right - (x_label + 128), 16)
    y_mobile = y_company - 22
    textfield(c, "mobile_phone", x_label + 124, y_mobile, x_right - (x_label + 128), 16)
    y_addr = y_mobile - 44
    textfield(c, "address", x_label + 124, y_addr, x_right - (x_label + 128), 40)
    y_email = y_addr - 22
    textfield(c, "email", x_label + 124, y_email, 260, 16)
    textfield(c, "home_phone", x_label + 398, y_email, x_right - (x_label + 402), 16)

    y_house = y_email - 48
    house_x = x_label + 124
    house_y = y_house
    for i in range(8):
        dx = (i % 4) * 120
        dy = (i // 4) * 18
        checkbox(c, f"house_{i}", house_x + dx, house_y - dy)

    y_family = y_house - 110
    col1 = x_label + 18
    col2 = x_label + 260
    col3 = x_label + 360
    col4 = x_label + 462
    for i in range(1, 5):
        y = y_family - (i - 1) * 20
        textfield(c, f"family_{i}_name", col1 + 6, y, 230, 14, size=9)
        textfield(c, f"family_{i}_id", col2 + 6, y, 92, 14, size=9)
        textfield(c, f"family_{i}_dob", col3 + 6, y, 92, 14, size=9)
        textfield(c, f"family_{i}_relationship", col4 + 6, y, x_right - (col4 + 10), 14, size=9)

    y_purpose = y_family - 142
    checkbox(c, "purpose_new_fdw", x_label + 20, y_purpose)
    checkbox(c, "purpose_replacement", x_label + 205, y_purpose)
    checkbox(c, "purpose_additional", x_label + 420, y_purpose)
    textfield(c, "replacement_fin", x_label + 240, y_purpose - 18, 120, 14, size=9)
    textfield(c, "replacement_fdw", x_label + 240, y_purpose - 36, 220, 14, size=9)

    y_maid = y_purpose - 78
    textfield(c, "maid_name", x_label + 88, y_maid, 290, 14, size=9)
    textfield(c, "maid_code_no", x_label + 470, y_maid, 105, 14, size=9)
    y_maid2 = y_maid - 20
    textfield(c, "maid_work_permit", x_label + 88, y_maid2, 160, 14, size=9)
    textfield(c, "maid_fin_no", x_label + 330, y_maid2, 160, 14, size=9)
    y_maid3 = y_maid2 - 20
    textfield(c, "maid_passport", x_label + 88, y_maid3, 160, 14, size=9)
    textfield(c, "maid_dob", x_label + 330, y_maid3, 160, 14, size=9)

    y_sponsor = y_maid3 - 74
    textfield(c, "sponsor1_name", x_label + 98, y_sponsor, 290, 14, size=9)
    textfield(c, "sponsor1_nric", x_label + 420, y_sponsor, 155, 14, size=9)
    y_sponsor2 = y_sponsor - 18
    textfield(c, "sponsor1_nationality", x_label + 98, y_sponsor2, 165, 14, size=9)
    textfield(c, "sponsor1_dob", x_label + 330, y_sponsor2, 245, 14, size=9)
    y_sponsor3 = y_sponsor2 - 18
    textfield(c, "sponsor1_relationship", x_label + 150, y_sponsor3, 230, 14, size=9)
    textfield(c, "sponsor1_contact", x_label + 450, y_sponsor3, 125, 14, size=9)
    y_sponsor4 = y_sponsor3 - 18
    textfield(c, "sponsor1_married_in_sg", x_label + 120, y_sponsor4, 455, 14, size=9)

    y_sponsor5 = y_sponsor4 - 22
    textfield(c, "sponsor_spouse_name", x_label + 160, y_sponsor5, 228, 14, size=9)
    textfield(c, "sponsor_spouse_nric", x_label + 420, y_sponsor5, 155, 14, size=9)
    y_sponsor6 = y_sponsor5 - 18
    textfield(c, "sponsor_spouse_dob", x_label + 98, y_sponsor6, 240, 14, size=9)

    c.showPage()
    for _ in range(page_count - 1):
        c.showPage()
    c.save()
    buf.seek(0)
    return buf


def merge(master_path, out_path):
    master = PdfReader(master_path)
    overlay_buf = build_overlay(len(master.pages))
    overlay = PdfReader(overlay_buf)

    writer = PdfWriter()
    writer.clone_document_from_reader(overlay)
    for i in range(len(master.pages)):
        writer.pages[i].merge_page(master.pages[i], over=False)

    writer.set_need_appearances_writer()
    with open(out_path, "wb") as f:
        writer.write(f)


if __name__ == "__main__":
    merge(MASTER, OUT)

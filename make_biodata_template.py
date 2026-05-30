from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas


OUT = Path("assets/blank_biodata_template.pdf")
PAGE_W, PAGE_H = A4
MARGIN = 36
LINE = colors.HexColor("#4d5a55")
GREEN = colors.HexColor("#1f7a55")


def label(c, text, x, y, size=8):
    c.setFillColor(colors.HexColor("#17211d"))
    c.setFont("Helvetica-Bold", size)
    c.drawString(x, y, text)


def small(c, text, x, y):
    c.setFillColor(colors.HexColor("#62706a"))
    c.setFont("Helvetica", 7)
    c.drawString(x, y, text)


def title(c, text, subtitle=""):
    c.setFillColor(GREEN)
    c.setFont("Helvetica-Bold", 15)
    c.drawString(MARGIN, PAGE_H - 38, text)
    if subtitle:
        c.setFillColor(colors.HexColor("#62706a"))
        c.setFont("Helvetica", 8)
        c.drawString(MARGIN, PAGE_H - 52, subtitle)
    c.setStrokeColor(colors.HexColor("#dce3df"))
    c.line(MARGIN, PAGE_H - 62, PAGE_W - MARGIN, PAGE_H - 62)


def text_field(c, name, x, y, w, h=16, value=""):
    c.acroForm.textfield(
        name=name,
        x=x,
        y=y,
        width=w,
        height=h,
        value=value,
        borderColor=LINE,
        fillColor=colors.white,
        textColor=colors.black,
        borderWidth=0.7,
        fontName="Helvetica",
        fontSize=8,
        forceBorder=True,
    )


def area_field(c, name, x, y, w, h=46):
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
    small(c, text, x + 15, y + 2)


def draw_rows(c, start_y, rows, left=MARGIN, right=PAGE_W - MARGIN, row_h=26):
    y = start_y
    for row in rows:
        label(c, row[0], left, y + 7)
        text_field(c, row[1], left + 130, y, right - left - 130, 16)
        y -= row_h
    return y


def make_page_1(c):
    title(c, "BIO-DATA OF FOREIGN DOMESTIC WORKER (FDW)", "A. Profile of FDW - blank editable template")
    y = PAGE_H - 88
    label(c, "A1 Personal Information", MARGIN, y, 10)
    y -= 28
    rows = [
        ("Ref. No.", "ref_no"),
        ("1. Name", "name"),
        ("2. Date of Birth", "date_of_birth"),
        ("Age", "age"),
        ("3. Place of Birth", "place_of_birth"),
        ("4. Height", "height"),
        ("Weight", "weight"),
        ("5. Nationality", "nationality"),
        ("6. Residential address in home country", "home_address"),
        ("7. Port / airport to be repatriated to", "repatriation_airport"),
        ("8. Contact number in home country", "home_contact"),
        ("9. Religion", "religion"),
        ("10. Educational level", "education"),
        ("11. Number of siblings", "siblings"),
        ("12. Marital status", "marital_status"),
        ("13. Number of children", "children_count"),
        ("Age(s) of children", "children_ages"),
        ("Expected monthly salary", "salary"),
    ]
    draw_rows(c, y, rows)
    c.showPage()


def make_page_2(c):
    title(c, "A2 Medical History / Dietary Restrictions", "Fill all applicable items. Leave blank if unknown.")
    y = PAGE_H - 90
    label(c, "15. Past and existing illnesses", MARGIN, y, 10)
    y -= 24
    illness = [
        "Mental illness",
        "Epilepsy",
        "Asthma",
        "Diabetes",
        "Hypertension",
        "Tuberculosis",
        "Heart Disease",
        "Malaria",
        "Operations",
        "Others",
    ]
    x1 = MARGIN
    x2 = PAGE_W / 2 + 8
    for idx, item in enumerate(illness):
        x = x1 if idx < 5 else x2
        yy = y - (idx % 5) * 28
        label(c, item, x, yy + 4)
        checkbox(c, f"medical_{idx}_yes", x + 110, yy, "Yes")
        checkbox(c, f"medical_{idx}_no", x + 170, yy, "No")
    y -= 160
    label(c, "14. Allergies / fears, if any", MARGIN, y)
    text_field(c, "allergies", MARGIN + 140, y - 4, PAGE_W - MARGIN * 2 - 140, 16)
    y -= 32
    label(c, "16. Physical disabilities", MARGIN, y)
    text_field(c, "physical_disabilities", MARGIN + 140, y - 4, PAGE_W - MARGIN * 2 - 140, 16)
    y -= 32
    label(c, "17. Dietary restrictions", MARGIN, y)
    text_field(c, "dietary_restrictions", MARGIN + 140, y - 4, PAGE_W - MARGIN * 2 - 140, 16)
    y -= 36
    label(c, "18. Food handling preferences", MARGIN, y, 10)
    y -= 22
    checkbox(c, "food_no_pork", MARGIN, y, "No pork")
    checkbox(c, "food_no_beef", MARGIN + 130, y, "No beef")
    checkbox(c, "food_any", MARGIN + 260, y, "Can handle any food")
    label(c, "Others", MARGIN, y - 30)
    text_field(c, "food_others", MARGIN + 70, y - 34, PAGE_W - MARGIN * 2 - 70, 16)
    y -= 74
    label(c, "19. Preference for rest day", MARGIN, y)
    text_field(c, "rest_day_preference", MARGIN + 140, y - 4, 120, 16)
    small(c, "rest day(s) per month", MARGIN + 268, y)
    y -= 34
    label(c, "20. Any other remarks", MARGIN, y)
    area_field(c, "other_remarks", MARGIN, y - 58, PAGE_W - MARGIN * 2, 50)
    y -= 88
    label(c, "B1 Method of Evaluation of Skills", MARGIN, y, 10)
    y -= 22
    checkbox(c, "eval_declaration", MARGIN, y, "Based on FDW's declaration, no evaluation/observation by EA or overseas training centre / EA")
    y -= 22
    checkbox(c, "eval_videoconference", MARGIN, y, "Interviewed via videoconference")
    y -= 22
    checkbox(c, "eval_in_person", MARGIN, y, "Interviewed in person")
    y -= 22
    checkbox(c, "eval_in_person_observation", MARGIN, y, "Interviewed in person and also made observation of the FDW")
    c.showPage()


def skill_row(c, y, idx, area):
    x = MARGIN
    label(c, area, x, y + 8)
    checkbox(c, f"skill_{idx}_willing_yes", x + 155, y + 4, "Yes")
    checkbox(c, f"skill_{idx}_willing_no", x + 210, y + 4, "No")
    checkbox(c, f"skill_{idx}_exp_yes", x + 260, y + 4, "Yes")
    checkbox(c, f"skill_{idx}_exp_no", x + 315, y + 4, "No")
    text_field(c, f"skill_{idx}_years", x + 365, y + 2, 38, 16)
    text_field(c, f"skill_{idx}_rating", x + 414, y + 2, 38, 16)
    text_field(c, f"skill_{idx}_observation", x + 464, y + 2, PAGE_W - MARGIN - (x + 464), 16)


def make_page_3(c):
    title(c, "B. Skills of FDW", "Willingness, experience, years, rating, and qualitative observation.")
    y = PAGE_H - 92
    small(c, "Area of Work", MARGIN, y)
    small(c, "Willingness", MARGIN + 155, y)
    small(c, "Experience", MARGIN + 260, y)
    small(c, "Years", MARGIN + 365, y)
    small(c, "Rate", MARGIN + 414, y)
    small(c, "Assessment / Observation", MARGIN + 464, y)
    y -= 28
    areas = [
        "1. Care of Infants / children",
        "2. Care of elderly",
        "3. Care of disabled",
        "4. General housework",
        "5. Cooking",
        "6. Language abilities (spoken)",
        "7. Other skills, if any",
    ]
    for idx, area in enumerate(areas, 1):
        skill_row(c, y, idx, area)
        y -= 34
    label(c, "Please specify cuisines", MARGIN, y)
    text_field(c, "cuisines", MARGIN + 130, y - 4, PAGE_W - MARGIN * 2 - 130, 16)
    y -= 30
    label(c, "Please specify languages", MARGIN, y)
    text_field(c, "languages", MARGIN + 130, y - 4, PAGE_W - MARGIN * 2 - 130, 16)
    y -= 52
    label(c, "C. Employment History Overseas", MARGIN, y, 10)
    y -= 22
    small(c, "From", MARGIN, y)
    small(c, "To", MARGIN + 70, y)
    small(c, "Country", MARGIN + 140, y)
    small(c, "Employer", MARGIN + 230, y)
    small(c, "Work Duties / Remarks", MARGIN + 330, y)
    y -= 24
    for idx in range(1, 5):
        text_field(c, f"job_{idx}_from", MARGIN, y, 58, 16)
        text_field(c, f"job_{idx}_to", MARGIN + 70, y, 58, 16)
        text_field(c, f"job_{idx}_country", MARGIN + 140, y, 78, 16)
        text_field(c, f"job_{idx}_employer", MARGIN + 230, y, 88, 16)
        text_field(c, f"job_{idx}_duties", MARGIN + 330, y, PAGE_W - MARGIN - (MARGIN + 330), 16)
        y -= 28
    c.showPage()


def make_page_4(c):
    title(c, "D. Availability / E. Other Remarks", "Interview availability, signatures, and employer confirmation.")
    y = PAGE_H - 92
    label(c, "D. Availability of FDW to be interviewed by prospective employer", MARGIN, y, 10)
    y -= 28
    checkbox(c, "interview_not_available", MARGIN, y, "FDW is not available for interview")
    y -= 24
    checkbox(c, "interview_phone", MARGIN, y, "FDW can be interviewed by phone")
    y -= 24
    checkbox(c, "interview_video", MARGIN, y, "FDW can be interviewed by video-conference")
    y -= 24
    checkbox(c, "interview_person", MARGIN, y, "FDW can be interviewed in person")
    y -= 48
    label(c, "E. Other Remarks", MARGIN, y, 10)
    area_field(c, "section_e_other_remarks", MARGIN, y - 70, PAGE_W - MARGIN * 2, 62)
    y -= 110
    label(c, "FDW Name and Signature", MARGIN, y)
    text_field(c, "fdw_name_signature", MARGIN, y - 28, 220, 22)
    label(c, "Date", MARGIN + 250, y)
    text_field(c, "fdw_signature_date", MARGIN + 250, y - 28, 120, 22)
    y -= 70
    label(c, "EA Personnel Name and Registration Number", MARGIN, y)
    text_field(c, "ea_personnel", MARGIN, y - 28, 300, 22)
    label(c, "Date", MARGIN + 330, y)
    text_field(c, "ea_date", MARGIN + 330, y - 28, 120, 22)
    y -= 78
    label(c, "Employer confirmation", MARGIN, y, 10)
    y -= 22
    small(c, "I have gone through the biodata of this FDW and confirm that I would like to employ her.", MARGIN, y)
    y -= 46
    label(c, "Employer's Signature / Date", MARGIN, y)
    text_field(c, "employer_signature_date", MARGIN, y - 28, 260, 22)
    c.showPage()


def build():
    OUT.parent.mkdir(exist_ok=True)
    c = canvas.Canvas(str(OUT), pagesize=A4)
    c.setTitle("Blank Editable FDW Biodata Template")
    make_page_1(c)
    make_page_2(c)
    make_page_3(c)
    make_page_4(c)
    c.save()
    print(OUT)


if __name__ == "__main__":
    build()

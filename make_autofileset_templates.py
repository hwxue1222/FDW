from pathlib import Path

import fitz
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfgen import canvas


OUT = Path("assets")
PAGE_W, PAGE_H = A4
MARGIN = 34
INK = colors.HexColor("#17211d")
MUTED = colors.HexColor("#62706a")
GREEN = colors.HexColor("#1f7a55")
LINE = colors.HexColor("#4d5a55")


def cnew(path, title):
    c = canvas.Canvas(str(path), pagesize=A4)
    c.setTitle(title)
    return c


def title(c, text, subtitle=""):
    c.setFillColor(GREEN)
    c.setFont("Helvetica-Bold", 15)
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


def text(c, name, x, y, w, h=16, size=8):
    c.acroForm.textfield(
        name=name,
        x=x,
        y=y,
        width=w,
        height=h,
        borderColor=LINE,
        fillColor=colors.white,
        textColor=colors.black,
        borderWidth=0.7,
        fontName="Helvetica",
        fontSize=size,
        forceBorder=True,
    )


def area(c, name, x, y, w, h=44):
    c.acroForm.textfield(
        name=name,
        x=x,
        y=y,
        width=w,
        height=h,
        borderColor=LINE,
        fillColor=colors.white,
        textColor=colors.black,
        borderWidth=0.7,
        fontName="Helvetica",
        fontSize=8,
        forceBorder=True,
        fieldFlags="multiline",
    )


def check(c, name, x, y, caption):
    c.acroForm.checkbox(name=name, x=x, y=y, size=10, borderColor=LINE, fillColor=colors.white, forceBorder=True)
    label(c, caption, x + 15, y + 2, 7)


def row(c, y, caption, field, x=MARGIN, label_w=150, field_w=None):
    if field_w is None:
        field_w = PAGE_W - MARGIN * 2 - label_w
    label(c, caption, x, y + 4, 8, True)
    text(c, field, x + label_w, y, field_w)
    return y - 26


def section(c, y, caption):
    c.setFillColor(colors.HexColor("#eef5f1"))
    c.rect(MARGIN, y - 4, PAGE_W - MARGIN * 2, 18, fill=1, stroke=0)
    label(c, caption, MARGIN + 8, y, 9, True)
    return y - 26


def make_wp_application():
    path = OUT / "blank_wp_application_template.pdf"
    c = cnew(path, "Blank Work Permit Application Information")
    title(c, "WORK PERMIT APPLICATION INFORMATION", "Blank editable employer, sponsor, family and FDW details")
    y = PAGE_H - 90
    y = row(c, y, "File No.", "file_no")
    y = section(c, y, "Employer / Spouse")
    for prefix in ["employer", "spouse"]:
        label(c, prefix.title(), MARGIN, y + 4, 8, True)
        text(c, f"{prefix}_name", MARGIN + 80, y, 135)
        text(c, f"{prefix}_dob", MARGIN + 245, y, 90)
        text(c, f"{prefix}_nric", MARGIN + 365, y, 120)
        y -= 24
    y = row(c, y, "Mobile Phone", "mobile_phone")
    y = row(c, y, "Email", "email")
    label(c, "Address", MARGIN, y + 28, 8, True)
    area(c, "address", MARGIN + 150, y, PAGE_W - MARGIN * 2 - 150, 42)
    y -= 56
    label(c, "Type of House", MARGIN, y, 8, True)
    house = ["Bungalow", "Terrace", "HDB 4 Rooms", "Condominium", "Semi-D", "Private Flat", "HDB 5 Rooms & Above", "Other"]
    for i, item in enumerate(house):
        check(c, f"house_{i}", MARGIN + 110 + (i % 2) * 170, y - (i // 2) * 20 - 4, item)
    y -= 96
    y = section(c, y, "Purpose / FDW")
    check(c, "purpose_new", MARGIN, y, "A new FDW")
    check(c, "purpose_replacement", MARGIN + 130, y, "A replacement")
    check(c, "purpose_additional", MARGIN + 280, y, "An additional FDW")
    y -= 28
    y = row(c, y, "FDW to be replaced", "fdw_to_be_replaced")
    y = row(c, y, "Maid Name / Code No.", "maid_name_code")
    y = row(c, y, "Work Permit / FIN", "work_permit_fin")
    y = row(c, y, "Passport No.", "passport_no")
    y = section(c, y, "Family Members")
    small(c, "Name", MARGIN, y)
    small(c, "ID Number", MARGIN + 160, y)
    small(c, "Date of Birth", MARGIN + 275, y)
    small(c, "Relationship", MARGIN + 390, y)
    y -= 22
    for i in range(1, 6):
        text(c, f"family_{i}_name", MARGIN, y, 145)
        text(c, f"family_{i}_id", MARGIN + 160, y, 100)
        text(c, f"family_{i}_dob", MARGIN + 275, y, 100)
        text(c, f"family_{i}_relationship", MARGIN + 390, y, 120)
        y -= 24
    c.showPage()
    title(c, "SPONSOR / DECLARATION", "Blank editable sponsor and declaration page")
    y = PAGE_H - 90
    for prefix in ["sponsor_1", "sponsor_spouse"]:
        y = section(c, y, prefix.replace("_", " ").title())
        y = row(c, y, "Name", f"{prefix}_name")
        y = row(c, y, "NRIC No.", f"{prefix}_nric")
        y = row(c, y, "Nationality", f"{prefix}_nationality")
        y = row(c, y, "Date of Birth", f"{prefix}_dob")
        y = row(c, y, "Relationship / Contact", f"{prefix}_relationship_contact")
    y = section(c, y, "Declaration")
    y = row(c, y, "Employer Name", "declaration_employer")
    y = row(c, y, "Employer NRIC / WP / FIN", "declaration_id")
    y = row(c, y, "Signature", "declaration_signature")
    y = row(c, y, "Date", "declaration_date")
    c.save()
    return path


def make_service_agreement():
    path = OUT / "blank_service_agreement_template.pdf"
    c = cnew(path, "Blank Standard Service Agreement")
    title(c, "STANDARD SERVICE AGREEMENT", "Between Foreign Domestic Worker Employer and Employment Agency")
    y = PAGE_H - 90
    fields = [
        ("Employment Agency Ref No.", "ea_ref_no"),
        ("Agreement Date", "agreement_date"),
        ("Agency Name", "agency_name"),
        ("Agency License No.", "agency_license"),
        ("Agency Address", "agency_address"),
        ("Employer Name", "employer_name"),
        ("Employer NRIC / Passport", "employer_id"),
        ("Employer Address", "employer_address"),
        ("FDW Name", "fdw_name"),
        ("FDW Passport / FIN", "fdw_id"),
    ]
    for caption, name in fields:
        y = row(c, y, caption, name)
    y = section(c, y, "Fees Payment")
    fees = [
        ("Total Service Fee", "total_service_fee"),
        ("Deposit", "deposit"),
        ("Balance", "balance"),
        ("Insurance Premium", "insurance_premium"),
        ("Placement Fee", "placement_fee"),
        ("SG Agency Service Fee charged on FDW", "fdw_agency_fee"),
        ("FDW Overseas Expenses / Advance", "fdw_overseas_expenses"),
    ]
    for caption, name in fees:
        y = row(c, y, caption + " S$", name)
    label(c, "Special Provisions / Other Terms", MARGIN, y, 8, True)
    area(c, "special_terms", MARGIN, y - 80, PAGE_W - MARGIN * 2, 72)
    c.showPage()
    title(c, "STANDARD SERVICE AGREEMENT - SIGNATURES", "Keep one signed copy for each party")
    y = PAGE_H - 90
    y = row(c, y, "Employer Signature / Date", "employer_signature_date")
    y = row(c, y, "Agency Signature / Date", "agency_signature_date")
    y = row(c, y, "Witness / Date", "witness_date")
    area(c, "agreement_notes", MARGIN, y - 90, PAGE_W - MARGIN * 2, 80)
    c.save()
    return path


def make_form_a():
    path = OUT / "blank_form_a_services_fees_template.pdf"
    c = cnew(path, "Blank Form A Services and Fees Schedule")
    title(c, "FORM A - SERVICES & FEES SCHEDULE", "For New / Transfer of MDW")
    y = PAGE_H - 90
    y = row(c, y, "Date", "date")
    y = section(c, y, "Part A: Particulars of FDW Selected")
    for caption, name in [("Name of FDW", "fdw_name"), ("Nationality", "nationality"), ("Passport No.", "passport"), ("Salary", "salary")]:
        y = row(c, y, caption, name)
    y = section(c, y, "Part B: Service Fee")
    items = [
        "Agency Fee",
        "DOC / SIP / PROC",
        "APP / E-ISSUE / RENEWAL WP",
        "POEA",
        "Medical Fee incl. 3 Days Accommodation",
        "Insurance / Security Bond / Indemnity Policy",
        "MDW Overseas Expenses / Placement Fee / Advance",
        "Singapore Agency Service Fee",
        "Placement Fee borne by employer",
        "Indonesia Embassy Contract",
        "Transportation / Airport Pick Up",
        "Other Services",
    ]
    for i, item in enumerate(items, 1):
        check(c, f"service_{i}_selected", MARGIN, y + 2, item)
        text(c, f"service_{i}_amount", PAGE_W - MARGIN - 86, y, 86)
        y -= 22
    y = row(c, y, "Total Package Service Fee S$", "total_package_fee")
    y = row(c, y, "GST / Tax S$", "gst")
    y = section(c, y, "Payment Schedule")
    for i in range(1, 4):
        y = row(c, y, f"Payment {i}", f"payment_{i}")
    c.save()
    return path


def make_pdpa():
    path = OUT / "blank_pdpa_statement_template.pdf"
    c = cnew(path, "Blank Personal Data Protection Statement")
    title(c, "PERSONAL DATA PROTECTION STATEMENT", "Consent and declaration")

    master = OUT / "pdpa_statement_master.pdf"
    raw_lines = []
    if master.exists():
        doc = fitz.open(str(master))
        raw_lines = [ln.rstrip() for ln in doc[0].get_text("text").splitlines()]

    def wrap_text(txt: str, width: float, font: str, size: int):
        words = txt.split()
        out = []
        cur = []
        for w in words:
            trial = (" ".join(cur + [w])).strip()
            if pdfmetrics.stringWidth(trial, font, size) <= width:
                cur.append(w)
            else:
                if cur:
                    out.append(" ".join(cur))
                cur = [w]
        if cur:
            out.append(" ".join(cur))
        return out

    def draw_paragraph(y: float, txt: str, indent: float = 0.0, size: int = 8, leading: float = 11.0):
        c.setFillColor(INK)
        c.setFont("Helvetica", size)
        max_w = PAGE_W - MARGIN * 2 - indent
        for ln in wrap_text(txt, max_w, "Helvetica", size):
            c.drawString(MARGIN + indent, y, ln)
            y -= leading
        return y

    org_label = "Organization name:"
    name_label = "Name of Client:"
    nric_label = "NRIC/PASSPORT/FIN:"
    sig_label = "Signature and Date:"

    y = PAGE_H - 92
    y = row(c, y, org_label, "organization_name")
    y -= 6

    body_lines = []
    if raw_lines:
        normalized = [" ".join(ln.split()) for ln in raw_lines]
        try:
            start = next(i for i, ln in enumerate(normalized) if ln.lower().startswith("our agency"))
        except StopIteration:
            start = 0
        try:
            end = next(i for i, ln in enumerate(normalized) if ln.lower().startswith("name of client"))
        except StopIteration:
            end = len(normalized)
        body_lines = [ln for ln in normalized[start:end] if ln]

    if not body_lines:
        body_lines = [
            "Our agency places great importance regarding the collection of personal data we are entrusted to. We take responsibilities under Singapore Personal Protection Act 2012 (PDPA) and believe it is our responsibility to manage, protect and process your personal data only with consent.",
            "The data collected from our organization for processing of documents, that previously collected and/or collection in future, may be collected, used, disclosed and/or processed for one or more purposes as follows:",
        ]

    def is_roman_item(ln: str):
        return ln.startswith("i)") or ln.startswith("ii)") or ln.startswith("iii)") or ln.startswith("iv)") or ln.startswith("v)") or ln.startswith("vi)")

    def is_alpha_item(ln: str):
        return len(ln) >= 2 and ln[0].lower() in "abcde" and ln[1] == ")"

    paragraphs = []
    current = []
    for ln in body_lines:
        low = ln.lower()
        if low == "declaration":
            if current:
                paragraphs.append(" ".join(current).strip())
                current = []
            paragraphs.append("__SECTION__Declaration")
            continue

        if is_roman_item(ln) or is_alpha_item(ln):
            if current:
                paragraphs.append(" ".join(current).strip())
                current = []
            paragraphs.append(ln)
            continue

        if low.startswith("the data collected") and current:
            paragraphs.append(" ".join(current).strip())
            current = [ln]
            continue

        current.append(ln)

    if current:
        paragraphs.append(" ".join(current).strip())

    for para in paragraphs:
        if para.startswith("__SECTION__"):
            y = section(c, y, para.replace("__SECTION__", ""))
            continue

        if is_roman_item(para) or is_alpha_item(para):
            marker = para.split(" ", 1)[0]
            rest = para[len(marker) :].strip()
            c.setFillColor(INK)
            c.setFont("Helvetica", 8)
            c.drawString(MARGIN, y, marker)
            y = draw_paragraph(y, rest, indent=18.0, size=8, leading=11)
        else:
            y = draw_paragraph(y, para, indent=0.0, size=8, leading=11)

        if y < MARGIN + 120:
            c.showPage()
            title(c, "PERSONAL DATA PROTECTION STATEMENT (CONT.)", "")
            y = PAGE_H - 92

    y -= 10
    y = row(c, y, name_label, "client_name")
    y = row(c, y, nric_label, "client_id")
    y = row(c, y, sig_label, "signature_date")
    c.save()
    return path


def make_insurance():
    path = OUT / "blank_insurance_proposal_template.pdf"
    c = cnew(path, "Blank Maid Protector Plus Proposal Form")
    title(c, "MAID PROTECTOR PLUS PROPOSAL FORM", "Blank insurance proposal form")
    y = PAGE_H - 90
    y = row(c, y, "TSA Code", "tsa_code")
    y = section(c, y, "Proposer / Employer")
    for caption, name in [("Name", "employer_name"), ("Address", "address"), ("Telephone / HP", "phone"), ("Email", "email"), ("NRIC / FIN", "employer_id"), ("Nationality", "nationality"), ("Date of Birth", "dob")]:
        y = row(c, y, caption, name)
    check(c, "paynow_registered", MARGIN, y, "Employer has NRIC/FIN registered PayNow")
    y -= 30
    y = section(c, y, "Domestic Helper")
    for caption, name in [("Name", "helper_name"), ("Nationality", "helper_nationality"), ("FIN", "helper_fin"), ("Passport No.", "helper_passport"), ("Date of Birth", "helper_dob")]:
        y = row(c, y, caption, name)
    y = section(c, y, "Coverage Selection & Premium")
    plans = ["Standard", "Standard Plus", "Premium Plus"]
    for i, plan in enumerate(plans, 1):
        check(c, f"insurance_mom_{i}", MARGIN, y, f"Insurance + Security Bond (MOM) - {plan}")
        text(c, f"insurance_mom_{i}_premium", PAGE_W - MARGIN - 90, y, 90)
        y -= 22
    for i, plan in enumerate(plans, 1):
        check(c, f"insurance_waiver_{i}", MARGIN, y, f"Insurance + Bond + Waiver - {plan}")
        text(c, f"insurance_waiver_{i}_premium", PAGE_W - MARGIN - 90, y, 90)
        y -= 22
    y = row(c, y, "Effective From", "effective_from")
    y = row(c, y, "Signature of Proposer / Date", "signature_date")
    c.save()
    return path


def make_employment_contract():
    path = OUT / "blank_employment_contract_template.pdf"
    c = cnew(path, "Blank Standard Employment Contract")
    title(c, "STANDARD EMPLOYMENT CONTRACT", "Between Foreign Domestic Worker and Employer")
    y = PAGE_H - 90
    for caption, name in [("Employment Agency Name", "agency_name"), ("License No.", "license_no"), ("Reference No.", "reference_no")]:
        y = row(c, y, caption, name)
    y = section(c, y, "Section A: Parties")
    for caption, name in [("Employer Full Name", "employer_name"), ("Employer NRIC / Passport", "employer_id"), ("Employer Address", "employer_address"), ("FDW Full Name", "fdw_name"), ("Work Permit No.", "work_permit_no"), ("Passport No.", "passport_no")]:
        y = row(c, y, caption, name)
    y = section(c, y, "Remuneration and Benefits")
    for caption, name in [("Monthly Salary S$", "salary"), ("Day off / Compensation", "day_off_compensation"), ("Salary Payment Day", "salary_payment_day"), ("Payment Mode", "payment_mode"), ("Accommodation Arrangement", "accommodation"), ("Rest Hours", "rest_hours"), ("Home Leave / Ticket Arrangement", "home_leave")]:
        y = row(c, y, caption, name)
    c.showPage()
    title(c, "STANDARD EMPLOYMENT CONTRACT - SIGNATURES", "Termination, repatriation and signatures")
    y = PAGE_H - 90
    y = row(c, y, "Notice Period", "notice_period")
    y = row(c, y, "Repatriation Destination", "repatriation_destination")
    label(c, "Additional Terms", MARGIN, y, 8, True)
    area(c, "additional_terms", MARGIN, y - 90, PAGE_W - MARGIN * 2, 82)
    y -= 124
    y = row(c, y, "Employer Signature / Date", "employer_signature_date")
    y = row(c, y, "FDW Signature / Date", "fdw_signature_date")
    y = row(c, y, "Agency Witness / Date", "agency_witness_date")
    c.save()
    return path


def make_job_offer():
    path = OUT / "blank_job_offer_template.pdf"
    c = cnew(path, "Blank Job Offer")
    title(c, "JOB OFFER", "Blank family profile, duties and terms")
    y = PAGE_H - 90
    y = row(c, y, "Offer made to FDW", "fdw_name")
    y = section(c, y, "Employer Family Profile")
    for caption, name in [("Employer Name", "employer_name"), ("Nationality", "nationality"), ("Total Members", "total_members"), ("Adults / Children / Elderly", "family_profile"), ("Special Needs", "special_needs")]:
        y = row(c, y, caption, name)
    y = section(c, y, "Type of Dwelling")
    dwelling = ["Bungalow", "Condo", "Private Apartment", "Landed Semi-D", "Landed Terrace", "HDB", "HDB 5 Rooms & Above", "Others"]
    for i, item in enumerate(dwelling):
        check(c, f"dwelling_{i}", MARGIN + (i % 2) * 210, y - (i // 2) * 22, item)
    y -= 100
    y = section(c, y, "Duties")
    duties = ["General housekeeping", "Infant care", "Marketing", "Pet care", "Cooking", "Laundry handwash", "Toddler care", "Laundry machine", "Night feeding", "Gardening", "Childcare / Elderly"]
    for i, item in enumerate(duties):
        check(c, f"duty_{i}", MARGIN + (i % 2) * 230, y - (i // 2) * 22, item)
    y -= 140
    y = section(c, y, "Essential Terms")
    for caption, name in [("Basic Salary S$", "basic_salary"), ("Rest Days Work Per Month", "rest_days_work"), ("Compensation in lieu S$", "rest_compensation"), ("Rest Arrangement", "rest_arrangement"), ("Rest Hours", "rest_hours"), ("Handphone Usage", "handphone_usage"), ("Religious Practice", "religious_practice")]:
        y = row(c, y, caption, name)
    label(c, "Additional Duties / Caregiving Arrangement", MARGIN, y, 8, True)
    area(c, "additional_duties", MARGIN, y - 68, PAGE_W - MARGIN * 2, 60)
    c.showPage()
    title(c, "JOB OFFER - ACKNOWLEDGEMENT", "")
    y = PAGE_H - 90
    y = row(c, y, "Employer Name / IC / Date", "employer_ack")
    y = row(c, y, "FDW Name / Date", "fdw_ack")
    c.save()
    return path


def make_safety_agreement():
    path = OUT / "blank_safety_agreement_template.pdf"
    c = cnew(path, "Blank Safety Agreement")
    title(c, "SAFETY AGREEMENT", "Between Migrant Domestic Worker and Employer")
    y = PAGE_H - 90
    y = row(c, y, "Name of Employment Agency", "agency_name")
    y = row(c, y, "License No.", "license_no")
    y = section(c, y, "Part A - Employer")
    for caption, name in [("Name of Employer", "employer_name"), ("NRIC / FIN", "employer_id")]:
        y = row(c, y, caption, name)
    check(c, "dwelling_hdb", MARGIN, y, "HDB Apartment")
    check(c, "dwelling_private", MARGIN + 140, y, "Private Apartment / Condominium")
    check(c, "dwelling_landed", MARGIN + 350, y, "Landed Property")
    y -= 30
    check(c, "clean_window_yes", MARGIN, y, "Require MDW to clean window exterior: Yes")
    check(c, "clean_window_no", MARGIN + 250, y, "No")
    y -= 30
    choices = ["Ground level", "Facing common corridor", "Others", "Grilles installed", "Adult supervision"]
    for i, item in enumerate(choices):
        check(c, f"safety_{i}", MARGIN + (i % 2) * 240, y - (i // 2) * 24, item)
    y -= 92
    y = row(c, y, "Employer Signature / Date", "employer_signature_date")
    y = section(c, y, "Part B - EAP / KAH")
    y = row(c, y, "Name of EAP / KAH", "eap_name")
    y = row(c, y, "Registration Number", "eap_registration")
    y = row(c, y, "Signature / Date", "eap_signature_date")
    c.showPage()
    title(c, "SAFETY AGREEMENT - MDW", "Part C and Part D")
    y = PAGE_H - 90
    y = section(c, y, "Part C - Migrant Domestic Worker")
    y = row(c, y, "Name of MDW", "mdw_name")
    y = row(c, y, "Work Permit No.", "work_permit_no")
    mdw_options = ["Not required to clean window exterior", "Clean ground floor only", "Clean common corridor only", "Clean with locked grilles and adult supervision"]
    for i, item in enumerate(mdw_options):
        check(c, f"mdw_window_{i}", MARGIN, y, item)
        y -= 26
    y = row(c, y, "MDW Signature / Date", "mdw_signature_date")
    y = section(c, y, "Part D - EAP / KAH")
    y = row(c, y, "EAP / KAH Signature / Date", "eap_kah_signature_date")
    c.save()
    return path


def make_rest_day():
    path = OUT / "blank_rest_day_agreement_template.pdf"
    c = cnew(path, "Blank Rest Day Agreement")
    title(c, "FDW WEEKLY REST DAY ARRANGEMENT", "Agreement between FDW and Employer")
    y = PAGE_H - 90
    y = section(c, y, "Parties Involved")
    for caption, name in [("FDW Name", "fdw_name"), ("FDW NRIC / WP No.", "fdw_id"), ("Employer Name", "employer_name"), ("Employer NRIC / WP No.", "employer_id")]:
        y = row(c, y, caption, name)
    y = section(c, y, "Terms of Agreement")
    check(c, "one_rest_day_weekly", MARGIN, y, "One rest day for every week")
    text(c, "weekly_rest_day", MARGIN + 210, y, 150)
    y -= 30
    check(c, "monthly_rest_days", MARGIN, y, "Rest days in a month")
    text(c, "monthly_rest_days_count", MARGIN + 170, y, 60)
    text(c, "monthly_rest_days_day", MARGIN + 250, y, 140)
    text(c, "compensation_amount", MARGIN + 410, y, 70)
    y -= 42
    y = row(c, y, "FDW Signature / Date", "fdw_signature_date")
    y = row(c, y, "Employer Signature / Date", "employer_signature_date")
    y = section(c, y, "Subsequent Variation")
    y = row(c, y, "Rest day in lieu date", "variation_rest_day")
    y = row(c, y, "Rest day forgone date", "variation_forgone_day")
    y = row(c, y, "Compensation in lieu S$", "variation_compensation")
    y = row(c, y, "FDW Signature / Date", "variation_fdw_signature_date")
    y = row(c, y, "Employer Signature / Date", "variation_employer_signature_date")
    c.save()
    return path


def build():
    OUT.mkdir(exist_ok=True)
    paths = [
        make_wp_application(),
        make_service_agreement(),
        make_form_a(),
        make_pdpa(),
        make_insurance(),
        make_employment_contract(),
        make_job_offer(),
        make_safety_agreement(),
        make_rest_day(),
    ]
    for path in paths:
        print(path)


if __name__ == "__main__":
    build()

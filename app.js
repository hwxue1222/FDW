const seed = {
  maids: [
    {
      id: "m4",
      refNo: "BBC0189JW",
      name: "WATI BT RUHYA ENGKOS",
      nationality: "Indonesian",
      age: 49,
      salary: 700,
      experience: 13,
      languages: "Mandarin / Basic English",
      dateOfBirth: "1975-03-18",
      passportNo: "E4675978",
      fin: "M3336448W",
      wpNo: "082511687",
      religion: "Islam",
      maritalStatus: "Widowed, 2 children",
      education: "High School",
      height: 157,
      weight: 66,
      originCity: "Subang",
      homeAddress: "Kadalangan Desa Koranji Purwadadi Subang Jawabarat",
      repatriationAirport: "Soekarno Hatta",
      siblings: 4,
      workedCountries: ["Taiwan", "Hong Kong", "Singapore"],
      offDay: "To be confirmed",
      medicalStatus: "No declared chronic illness",
      medicalHistory: [
        { item: "Mental illness", status: "No" },
        { item: "Epilepsy", status: "No" },
        { item: "Asthma", status: "No" },
        { item: "Diabetes", status: "No" },
        { item: "Hypertension", status: "No" },
        { item: "Tuberculosis", status: "No" },
        { item: "Heart Disease", status: "No" },
        { item: "Malaria", status: "No" },
        { item: "Operations", status: "No" },
        { item: "Physical disabilities", status: "N/A" },
        { item: "Dietary restrictions", status: "N/A" }
      ],
      foodHandling: "Can handle any food; no pork / no beef preference noted",
      allergies: "Afraid of dogs",
      evaluationMethods: ["Interviewed via videoconference", "Interviewed by overseas training centre / EA: BB"],
      interviewAvailability: ["Can be interviewed by video-conference"],
      skills: ["Child care", "Elderly care", "Housework", "Cooking", "Mandarin"],
      duties: ["Infant / child care", "Elderly care", "Disabled care", "General housework", "Simple Chinese food", "Mandarin and simple English"],
      skillAssessment: [
        {
          area: "Care of Infants / children",
          willingness: "Yes",
          experience: "Yes",
          years: "4",
          rating: "4",
          observation: "Can care for children; overseas history includes children aged 8 and 10, and 2 and 3."
        },
        {
          area: "Care of elderly",
          willingness: "Yes",
          experience: "Yes",
          years: "4",
          rating: "4",
          observation: "Taiwan record includes elderly care."
        },
        {
          area: "Care of disabled",
          willingness: "Yes",
          experience: "Yes",
          years: "3",
          rating: "3",
          observation: "Declared experience in disabled care."
        },
        {
          area: "General housework",
          willingness: "Yes",
          experience: "Yes",
          years: "4",
          rating: "4",
          observation: "Household chores in Taiwan, Hong Kong and Singapore."
        },
        {
          area: "Cooking",
          willingness: "Yes",
          experience: "Yes",
          years: "4",
          rating: "4",
          observation: "Simple Chinese food."
        },
        {
          area: "Language abilities",
          willingness: "Yes",
          experience: "Yes",
          years: "4",
          rating: "4",
          observation: "Mandarin and simple English."
        }
      ],
      employmentHistory: [
        {
          from: "2000",
          to: "2006",
          country: "Taiwan",
          employer: "Chinese",
          duties: "3 persons, household chores, elderly and children care, apartment house"
        },
        {
          from: "2018",
          to: "2021",
          country: "Hong Kong",
          employer: "Chinese",
          duties: "4 persons, household chores, children care aged 8 and 10, apartment house"
        },
        {
          from: "2023",
          to: "2025",
          country: "Singapore",
          employer: "Indian",
          duties: "11 persons, household chores, children care aged 2 and 3, apartment house"
        }
      ],
      momHistory: [
        { employer: "Employer 2", startDate: "2024-01-12", endDate: "2025-01-24", industry: "General Household" },
        { employer: "Employer 1", startDate: "2023-09-14", endDate: "2024-01-12", industry: "General Household" }
      ],
      status: "可预约",
      photoUrl: "assets/wati-page1-image3.jpg",
      biodataRemarks: "FDW signed biodata on 13/02/25. Employer confirmation/signature section is included in original biodata."
    },
    {
      id: "m1",
      refNo: "DEMO-001",
      name: "Siti Aminah",
      nationality: "Indonesian",
      age: 32,
      salary: 720,
      experience: 6,
      languages: "English / Malay",
      dateOfBirth: "1994-03-12",
      passportNo: "A1234567",
      religion: "Muslim",
      maritalStatus: "Married, 2 children",
      education: "High School",
      height: 158,
      weight: 54,
      originCity: "Surabaya",
      workedCountries: ["Singapore", "Malaysia"],
      offDay: "2 days per month",
      medicalStatus: "Medical check pending arrangement",
      skills: ["Elderly care", "Cooking", "Housework"],
      duties: ["Elderly care", "Wheelchair assistance", "Simple Chinese meals", "Daily cleaning"],
      status: "可预约",
      photoUrl: ""
    },
    {
      id: "m2",
      refNo: "DEMO-002",
      name: "Maria Santos",
      nationality: "Filipino",
      age: 29,
      salary: 780,
      experience: 5,
      languages: "English / Tagalog",
      dateOfBirth: "1997-09-20",
      passportNo: "P7654321",
      religion: "Catholic",
      maritalStatus: "Single",
      education: "College",
      height: 162,
      weight: 55,
      originCity: "Iloilo",
      workedCountries: ["Singapore", "Hong Kong"],
      offDay: "4 days per month",
      medicalStatus: "Pre-entry medical check passed",
      skills: ["Child care", "Homework support", "Cooking"],
      duties: ["Young child care", "English communication", "School pick-up", "Simple Western meals"],
      status: "面试中",
      photoUrl: ""
    },
    {
      id: "m3",
      refNo: "DEMO-003",
      name: "Thandar Win",
      nationality: "Myanmar",
      age: 27,
      salary: 650,
      experience: 3,
      languages: "English / Burmese",
      dateOfBirth: "1999-01-18",
      passportNo: "M9988123",
      religion: "Buddhist",
      maritalStatus: "Single",
      education: "Secondary School",
      height: 155,
      weight: 49,
      originCity: "Yangon",
      workedCountries: ["Myanmar", "Singapore"],
      offDay: "2 days per month",
      medicalStatus: "Medical check pending",
      skills: ["Housework", "Pet care", "Cooking"],
      duties: ["Whole-home cleaning", "Laundry and ironing", "Pet feeding", "Simple cooking"],
      status: "可预约",
      photoUrl: ""
    }
  ],
  clients: [
    {
      id: "c1",
      name: "Mr. Chen",
      phone: "+65 8123 4567",
      need: "Elderly care",
      budget: "700-800",
      assignedMaidId: "m1",
      hires: [
        {
          id: "h1",
          maidId: "m1",
          contractNo: "EMP-2026-001",
          startDate: "2026-06-18",
          status: "培训中",
          consultant: "Kelly",
          payments: [
            { stage: "Registration Fee", amount: 300, dueDate: "2026-05-28", status: "已付款", paidDate: "2026-05-28" },
            { stage: "Interview Confirmation Deposit", amount: 700, dueDate: "2026-06-02", status: "已付款", paidDate: "2026-06-02" },
            { stage: "Pre-Arrival Balance", amount: 1200, dueDate: "2026-06-12", status: "待付款", paidDate: "" },
            { stage: "Post-Deployment Settlement", amount: 800, dueDate: "2026-06-20", status: "未到期", paidDate: "" }
          ]
        }
      ]
    },
    {
      id: "c2",
      name: "Lim Family",
      phone: "+65 9234 5678",
      need: "Child care",
      budget: "750-850",
      assignedMaidId: "m2",
      hires: [
        {
          id: "h2",
          maidId: "m2",
          contractNo: "EMP-2026-002",
          startDate: "TBC",
          status: "面试中",
          consultant: "Jason",
          payments: [
            { stage: "Registration Fee", amount: 300, dueDate: "2026-05-30", status: "已付款", paidDate: "2026-05-30" },
            { stage: "Interview Confirmation Deposit", amount: 700, dueDate: "2026-06-03", status: "待付款", paidDate: "" },
            { stage: "Work Permit Application Fee", amount: 600, dueDate: "TBC", status: "未到期", paidDate: "" }
          ]
        }
      ]
    }
  ],
  timeline: {
    m1: [
      { step: "Interview", date: "2026-06-02", status: "已完成", note: "Customer confirmed suitability" },
      { step: "Training", date: "2026-06-08", status: "进行中", note: "Elderly care training" },
      { step: "Arrival in Singapore", date: "2026-06-14", status: "待处理", note: "Waiting for flight confirmation" },
      { step: "Medical Check", date: "2026-06-16", status: "待处理", note: "To arrange after arrival" },
      { step: "Pre-deployment Training", date: "2026-06-18", status: "待处理", note: "Household rules briefing" },
      { step: "Deployment (Sent to employer's house and start working)", date: "2026-12-18", status: "待处理", note: "Final deployment stage" }
    ],
    m2: [
      { step: "Interview", date: "2026-06-01", status: "进行中", note: "Customer second interview" },
      { step: "Training", date: "2026-06-10", status: "待处理", note: "Child care training" },
      { step: "Arrival in Singapore", date: "2026-06-18", status: "待处理", note: "Documents in preparation" }
    ],
    m3: [
      { step: "Interview", date: "2026-06-04", status: "待处理", note: "Waiting for customer to choose a time" }
    ]
  },
  documents: [
    {
      id: "d1",
      clientId: "c1",
      maidId: "m1",
      name: "Service Agreement",
      stage: "After Interview Confirmation",
      status: "已签署",
      sentAt: "2026-05-28",
      signedAt: "2026-05-29",
      copySent: true,
      fileName: "Service Agreement.pdf",
      fileType: "PDF",
      signingLink: "#sign=d1",
      signedBy: "Mr. Chen",
      source: "template"
    },
    {
      id: "d2",
      clientId: "c1",
      maidId: "m1",
      name: "Employment Contract",
      stage: "Before Arrival in Singapore",
      status: "待签署",
      sentAt: "2026-05-30",
      signedAt: "",
      copySent: false,
      fileName: "Employment Contract.pdf",
      fileType: "PDF",
      signingLink: "#sign=d2",
      signedBy: "",
      source: "template"
    },
    {
      id: "d3",
      clientId: "c2",
      maidId: "m2",
      name: "Interview Confirmation Form",
      stage: "Interview Stage",
      status: "待签署",
      sentAt: "2026-05-30",
      signedAt: "",
      copySent: false,
      fileName: "Interview Confirmation Form.pdf",
      fileType: "PDF",
      signingLink: "#sign=d3",
      signedBy: "",
      source: "template"
    }
  ]
};

const defaultMaidDetails = {
  refNo: "To be filled",
  dateOfBirth: "To be filled",
  passportNo: "To be filled",
  fin: "",
  wpNo: "",
  religion: "To be filled",
  maritalStatus: "To be filled",
  education: "To be filled",
  height: "",
  weight: "",
  originCity: "To be filled",
  workedCountries: [],
  offDay: "To be confirmed",
  medicalStatus: "Medical check pending",
  foodHandling: "To be filled",
  allergies: "To be filled",
  evaluationMethods: [],
  interviewAvailability: [],
  duties: [],
  skillAssessment: [],
  medicalHistory: [],
  employmentHistory: [],
  momHistory: [],
  photoUrl: "",
  biodataRemarks: ""
};

const skillEvaluationMethodOptions = [
  "Based on FDW's declaration, no evaluation/observation by EA or overseas training centre / EA",
  "Interviewed via videoconference",
  "Interviewed in person",
  "Interviewed in person and also made observation of the FDW in the areas of work listed in the table"
];

const categoryMeta = {
  女佣: {
    title: { zh: "女佣", en: "Maid" },
    eyebrow: "Domestic Worker",
    description: { zh: "家庭护理、家务、烹饪与儿童照护人员", en: "Home care, housekeeping, cooking, and family support workers" }
  },
  建筑: {
    title: { zh: "建筑", en: "Construction" },
    eyebrow: "Construction Worker",
    description: { zh: "工地、装修、机电与现场技术人员", en: "Site, renovation, mechanical, electrical, and technical workers" }
  },
  服务: {
    title: { zh: "服务", en: "Service" },
    eyebrow: "Service Worker",
    description: { zh: "清洁、餐饮、酒店与日常运营服务人员", en: "Cleaning, F&B, hospitality, and daily operations workers" }
  }
};

const externalWorkers = [
  {
    id: "bw-2401",
    category: "建筑",
    refNo: "BW-2401",
    name: "Rahman Hadi",
    nationality: "Bangladesh",
    age: 34,
    salary: "S$1,600 - S$1,900",
    experience: 6,
    languages: "Basic English / Bengali",
    offDay: "According to project schedule",
    role: "General Construction Worker",
    skills: ["Formwork", "Rebar", "Site Safety"],
    status: "可预约",
    photoUrl: ""
  },
  {
    id: "bw-2402",
    category: "建筑",
    refNo: "BW-2402",
    name: "Suresh Kumar",
    nationality: "India",
    age: 38,
    salary: "S$1,800 - S$2,200",
    experience: 9,
    languages: "English / Tamil",
    offDay: "According to project schedule",
    role: "Tiling and Finishing Worker",
    skills: ["Tiling", "Plastering", "Waterproofing"],
    status: "面试中",
    photoUrl: ""
  },
  {
    id: "sw-2401",
    category: "服务",
    refNo: "SW-2401",
    name: "Nilar Win",
    nationality: "Myanmar",
    age: 30,
    salary: "S$1,400 - S$1,700",
    experience: 4,
    languages: "English / Burmese",
    offDay: "2-4 days per month",
    role: "Cleaner",
    skills: ["Office Cleaning", "Deep Cleaning", "Laundry"],
    status: "可预约",
    photoUrl: ""
  },
  {
    id: "sw-2402",
    category: "服务",
    refNo: "SW-2402",
    name: "Ana Morales",
    nationality: "Philippines",
    age: 28,
    salary: "S$1,700 - S$2,000",
    experience: 5,
    languages: "English / Tagalog",
    offDay: "4 days per month",
    role: "F&B Service Crew",
    skills: ["Customer Service", "Cashier", "Food Prep"],
    status: "可预约",
    photoUrl: ""
  }
];

const formTemplates = [
  { title: "Biodata", url: "assets/blank_biodata_template.pdf", categories: ["女佣"] },
  { title: "Quotation", url: "assets/blank_quotation_template.pdf", categories: ["女佣", "建筑", "服务"] },
  { title: "Work Permit Application Form", url: "assets/work_permit_application_form.fillable.v10.pdf", categories: ["女佣", "建筑", "服务"] },
  { title: "Standard Service Agreement", url: "assets/blank_service_agreement_template.pdf", categories: ["女佣", "建筑", "服务"] },
  { title: "Tax Declaration Form", url: "assets/tax_declaration_form.fillable.v2.pdf", categories: ["女佣", "建筑", "服务"] },
  { title: "Form A Service Fees", url: "assets/blank_form_a_services_fees_template.pdf", categories: ["女佣", "建筑", "服务"] },
  { title: "PDPA Statement", url: "assets/blank_pdpa_statement_template.pdf", categories: ["女佣", "建筑", "服务"] },
  { title: "Insurance Proposal", url: "assets/blank_insurance_proposal_template.pdf", categories: ["女佣"] },
  { title: "Employment Contract", url: "assets/blank_employment_contract_template.pdf", categories: ["女佣", "建筑", "服务"] },
  { title: "Job Offer", url: "assets/blank_job_offer_template.pdf", categories: ["建筑", "服务"] },
  { title: "Safety Agreement", url: "assets/blank_safety_agreement_template.pdf", categories: ["建筑", "服务"] },
  { title: "Rest Day Agreement", url: "assets/blank_rest_day_agreement_template.pdf", categories: ["女佣"] }
];

const defaultTimelineSteps = [
  { step: "Interview", date: "TBC", status: "待处理", note: "Waiting for customer appointment" },
  { step: "Document Confirmation", date: "TBC", status: "待处理", note: "Waiting for documents to be filled and confirmed" },
  { step: "Contract Signing", date: "TBC", status: "待处理", note: "Waiting to send signing link" },
  { step: "Deployment Arrangement", date: "TBC", status: "待处理", note: "Waiting for signature completion" }
];

function normalizeTimelineStage(item) {
  if (!item) return item;
  if (item.step === "Deployment Training") {
    return {
      ...item,
      step: "Pre-deployment Training"
    };
  }
  if (!["Periodic Medical Check", "Deployment"].includes(item.step)) return item;
  return {
    ...item,
    step: "Deployment (Sent to employer's house and start working)",
    note: "Final deployment stage"
  };
}

function normalizeDocumentStage(stage) {
  if (stage === "Deployment Training") {
    return "Pre-deployment Training";
  }
  if (stage === "Periodic Medical Check" || stage === "Deployment") {
    return "Deployment (Sent to employer's house and start working)";
  }
  return stage;
}

function normalizeState(savedState) {
  const data = savedState || seed;
  if (savedState) {
    seed.maids.forEach((seedMaid) => {
      if (!data.maids?.some((maid) => maid.id === seedMaid.id || (maid.refNo && maid.refNo === seedMaid.refNo))) {
        data.maids.push(seedMaid);
      }
    });
    data.maids = (data.maids || []).map((maid) => {
      const seedMaid = seed.maids.find((item) => item.id === maid.id);
      return seedMaid ? { ...maid, ...seedMaid } : maid;
    });
    data.clients = (data.clients || []).map((client) => {
      const seedClient = seed.clients.find((item) => item.id === client.id);
      return seedClient ? { ...client, ...seedClient } : client;
    });
    data.timeline = { ...(data.timeline || {}) };
    Object.entries(seed.timeline).forEach(([maidId, items]) => {
      data.timeline[maidId] = items.map((item) => normalizeTimelineStage({ ...item }));
    });
    const seededDocumentIds = new Set(seed.documents.map((doc) => doc.id));
    data.documents = [
      ...(data.documents || []).filter((doc) => !seededDocumentIds.has(doc.id)),
      ...seed.documents.map((doc) => ({ ...doc }))
    ];
  }
  data.maids = (data.maids || []).map((maid) => ({
    ...defaultMaidDetails,
    ...(seed.maids.find((item) => item.id === maid.id) || {}),
    ...maid,
    workedCountries: maid.workedCountries || seed.maids.find((item) => item.id === maid.id)?.workedCountries || [],
    duties: maid.duties || seed.maids.find((item) => item.id === maid.id)?.duties || maid.skills || [],
    skillAssessment: maid.skillAssessment || seed.maids.find((item) => item.id === maid.id)?.skillAssessment || [],
    medicalHistory: maid.medicalHistory || seed.maids.find((item) => item.id === maid.id)?.medicalHistory || [],
    employmentHistory: maid.employmentHistory || seed.maids.find((item) => item.id === maid.id)?.employmentHistory || [],
    momHistory: maid.momHistory || seed.maids.find((item) => item.id === maid.id)?.momHistory || [],
    evaluationMethods: maid.evaluationMethods || seed.maids.find((item) => item.id === maid.id)?.evaluationMethods || [],
    interviewAvailability: maid.interviewAvailability || seed.maids.find((item) => item.id === maid.id)?.interviewAvailability || []
  }));
  data.clients = (data.clients || []).map((client) => ({
    ...client,
    hires:
      client.hires ||
      [
        {
          id: `h-${client.id}`,
          maidId: client.assignedMaidId,
          contractNo: "To be generated",
          startDate: "TBC",
          status: "跟进中",
          consultant: "To be assigned",
          payments: [
            { stage: "Registration Fee", amount: 300, dueDate: "TBC", status: "待付款", paidDate: "" },
            { stage: "Interview Confirmation Deposit", amount: 700, dueDate: "TBC", status: "未到期", paidDate: "" },
            { stage: "Pre-Arrival Balance", amount: 1200, dueDate: "TBC", status: "未到期", paidDate: "" }
          ]
        }
      ]
  }));
  data.timeline = data.timeline || seed.timeline;
  data.workers = (data.workers || externalWorkers).map((worker) => {
    const seedWorker = externalWorkers.find((item) => item.id === worker.id);
    return { ...worker, ...(seedWorker || {}), skills: (seedWorker || worker).skills || [], status: (seedWorker || worker).status || "可预约" };
  });
  data.workers.forEach((worker) => {
    data.timeline[worker.id] = data.timeline[worker.id] || defaultTimelineSteps.map((step) => ({ ...step }));
  });
  Object.keys(data.timeline || {}).forEach((maidId) => {
    data.timeline[maidId] = (data.timeline[maidId] || []).map((item) => normalizeTimelineStage(item));
  });
  data.documents = (data.documents || seed.documents).map((doc) => ({
    fileName: doc.name ? `${doc.name}.pdf` : "Pending Signing Document.pdf",
    fileType: "PDF",
    files: doc.files || [{ fileName: doc.fileName || (doc.name ? `${doc.name}.pdf` : "Pending Signing Document.pdf"), fileType: doc.fileType || "PDF", uploadedAt: doc.sentAt || "" }],
    signingLink: `#sign=${doc.id}`,
    signedBy: "",
    source: "template",
    ...doc,
    stage: normalizeDocumentStage(doc.stage)
  }));
  return data;
}

const state = normalizeState(JSON.parse(localStorage.getItem("maidAgencyState")));
let activeFrontCategory = "女佣";
let activeFrontDetailId = "";
let activeAdminCategory = "女佣";
let activeMaidDetailId = "";
let currentLanguage = localStorage.getItem("bybridgeLanguage") || "en";
let currentSession = JSON.parse(localStorage.getItem("bybridgeAdminSession") || "null");

const save = () => localStorage.setItem("maidAgencyState", JSON.stringify(state));
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const uiText = {
  zh: {
    front: "前台",
    admin: "后台",
    filters: "客户筛选",
    nationality: "国籍",
    experience: "工作经验",
    skill: "擅长",
    all: "全部",
    yearsMore: (years) => `${years} 年以上`,
    viewable: (count) => `${count} 位可查看`,
    empty: (category) => `当前筛选下暂无${category}工人。`,
    fields: {
      category: "分类",
      nationality: "国籍",
      age: "年龄",
      experience: "经验",
      salary: "薪资",
      language: "语言"
    },
    ageValue: (age) => `${age} 岁`,
    yearsValue: (years) => `${years} 年`,
    status: {
      可预约: "可预约",
      面试中: "面试中",
      已完成: "已完成",
      进行中: "进行中",
      待处理: "待处理",
      已签署: "已签署",
      待签署: "待签署",
      已付款: "已付款",
      待付款: "待付款",
      未到期: "未到期",
      跟进中: "跟进中",
      培训中: "培训中"
    }
  },
  en: {
    front: "Front",
    admin: "Admin",
    filters: "Filters",
    nationality: "Nationality",
    experience: "Experience",
    skill: "Skill",
    all: "All",
    yearsMore: (years) => `${years}+ years`,
    viewable: (count) => `${count} available`,
    empty: (category) => `No ${category} workers match the current filters.`,
    fields: {
      category: "Category",
      nationality: "Nationality",
      age: "Age",
      experience: "Experience",
      salary: "Salary",
      language: "Language"
    },
    ageValue: (age) => `${age}`,
    yearsValue: (years) => `${years} years`,
    status: {
      可预约: "Available",
      面试中: "Interviewing",
      已完成: "Completed",
      进行中: "In Progress",
      待处理: "Pending",
      已签署: "Signed",
      待签署: "Pending Signature",
      已付款: "Paid",
      待付款: "Payment Due",
      未到期: "Not Due",
      跟进中: "Following Up",
      培训中: "Training"
    }
  }
};

function txt() {
  return uiText[currentLanguage] || uiText.zh;
}

function localized(value) {
  if (!value || typeof value !== "object") return value;
  return value[currentLanguage] || value.zh || value.en || "";
}

function statusLabel(status) {
  return txt().status[status] || status;
}

function uiLabel(en, zh) {
  return currentLanguage === "zh" ? zh : en;
}

function currentUser() {
  return currentSession?.user || null;
}

function isAdminLoggedIn() {
  return Boolean(currentSession?.token && currentUser());
}

function canManageAccounts() {
  return currentUser()?.role === "admin";
}

function saveSession(session) {
  currentSession = session?.token && session?.user ? session : null;
  if (currentSession) {
    localStorage.setItem("bybridgeAdminSession", JSON.stringify(currentSession));
  } else {
    localStorage.removeItem("bybridgeAdminSession");
  }
}

async function apiRequest(path, options = {}) {
  const apiPath = location.protocol === "file:" && path.startsWith("/") ? `https://fdw-one.vercel.app${path}` : path;
  const response = await fetch(apiPath, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(currentSession?.token ? { Authorization: `Bearer ${currentSession.token}` } : {}),
      ...(options.headers || {})
    }
  });
  const data = await response.json().catch(() => ({}));
  if (response.status === 401) {
    saveSession(null);
    renderAll();
  }
  if (!response.ok) {
    throw new Error(data.message || data.error || "Request failed");
  }
  return data;
}

function displayValue(value, fallback = "-") {
  if (Array.isArray(value)) return value.length ? value.join(currentLanguage === "zh" ? "、" : ", ") : fallback;
  if (value === 0) return "0";
  return value || fallback;
}

function heightWeightValue(maid) {
  const height = maid.height ? `${maid.height} cm` : "";
  const weight = maid.weight ? `${maid.weight} kg` : "";
  return [height, weight].filter(Boolean).join(" / ") || "-";
}

function setSelectOptions(select, options) {
  const previous = select.value || "全部";
  select.innerHTML = options.map(({ value, label }) => `<option value="${value}">${label}</option>`).join("");
  if (options.some((option) => option.value === previous)) {
    select.value = previous;
  }
}

function renderLanguageLabels() {
  document.documentElement.lang = currentLanguage === "en" ? "en" : "zh-CN";
  $("#frontModeBtn").textContent = txt().front;
  $("#adminModeBtn").textContent = txt().admin;
  $("#filterTitle").textContent = txt().filters;
  $("#nationalityLabel").textContent = txt().nationality;
  $("#experienceLabel").textContent = txt().experience;
  $("#skillLabel").textContent = txt().skill;
  $("#timelineWorkerLabel").textContent = uiLabel("Select Worker", "选择人员");
  $("#processClientLabel").textContent = uiLabel("Client", "客户");
  $("#dialogCancelBtn").textContent = uiLabel("Cancel", "取消");
  $("#dialogSubmit").textContent = uiLabel("Save", "保存");
  $("#previewTitle").textContent = uiLabel("Preview", "预览");
  $("#previewOpen").textContent = uiLabel("Open in New Tab", "新标签页打开");
  $("#loginEyebrow").textContent = uiLabel("Admin Login", "后台登录");
  $("#loginTitle").textContent = uiLabel("Back Office Access", "后台访问");
  $("#loginUsernameLabel").textContent = uiLabel("Username", "用户名");
  $("#loginPasswordLabel").textContent = uiLabel("Password", "密码");
  $("#loginSubmitBtn").textContent = uiLabel("Login", "登录");
  $("#userTitle").textContent = uiLabel("Account Management", "账号管理");
  $("#addUserBtn").textContent = uiLabel("Add Employee Account", "新增员工账号");
  $$("#languageSwitch button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLanguage);
  });
  setSelectOptions($("#experienceFilter"), [
    { value: "全部", label: txt().all },
    { value: "2", label: txt().yearsMore(2) },
    { value: "4", label: txt().yearsMore(4) },
    { value: "6", label: txt().yearsMore(6) }
  ]);
}

const previewDialog = $("#previewDialog");
const previewFrame = $("#previewFrame");
const previewTitle = $("#previewTitle");
const previewClose = $("#previewClose");
const previewOpen = $("#previewOpen");

function withCacheBust(url) {
  if (!url) return url;
  const parts = String(url).split("#");
  const base = parts[0];
  const hash = parts.length > 1 ? parts.slice(1).join("#") : "";
  const sep = base.includes("?") ? "&" : "?";
  const busted = `${base}${sep}v=${Date.now()}`;
  return hash ? `${busted}#${hash}` : busted;
}

function openPdfPreview(url, title) {
  if (!previewDialog || !previewFrame) return;
  const previewUrl = withCacheBust(url);
  if (previewTitle) previewTitle.textContent = title || uiLabel("Preview", "预览");
  if (previewOpen) previewOpen.href = previewUrl || "#";
  previewFrame.src = previewUrl;
  previewDialog.showModal();
}

function closePdfPreview() {
  if (!previewDialog || !previewFrame) return;
  previewDialog.close();
  previewFrame.src = "";
  if (previewOpen) previewOpen.href = "#";
}

if (previewClose) {
  previewClose.addEventListener("click", closePdfPreview);
}

if (previewDialog) {
  previewDialog.addEventListener("close", () => {
    if (previewFrame) previewFrame.src = "";
    if (previewOpen) previewOpen.href = "#";
  });
}

document.addEventListener("click", (event) => {
  const target = event.target.closest(".download-preview");
  if (!target) return;
  const url = target.getAttribute("data-url") || "";
  const title = target.getAttribute("data-title") || target.textContent || uiLabel("Preview", "预览");
  if (!url) return;
  openPdfPreview(url, title);
});

document.addEventListener("click", (event) => {
  const detailTarget = event.target.closest("[data-open-maid-detail]");
  if (detailTarget) {
    activeMaidDetailId = detailTarget.dataset.openMaidDetail || "";
    renderAdminMaids();
    return;
  }

  const backTarget = event.target.closest("[data-back-maid-list]");
  if (backTarget) {
    activeMaidDetailId = "";
    renderAdminMaids();
  }
});

document.addEventListener("click", (event) => {
  const frontDetailTarget = event.target.closest("[data-open-front-detail]");
  if (frontDetailTarget) {
    activeFrontDetailId = frontDetailTarget.dataset.openFrontDetail || "";
    renderFront();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const frontBackTarget = event.target.closest("[data-back-front-list]");
  if (frontBackTarget) {
    activeFrontDetailId = "";
    renderFront();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

function maidById(id) {
  return state.maids.find((maid) => maid.id === id);
}

function adminWorkers() {
  return [...state.maids.map(maidToWorker), ...state.workers];
}

function workersForCategory(category = activeAdminCategory) {
  return adminWorkers().filter((worker) => worker.category === category);
}

function workerById(id) {
  return adminWorkers().find((worker) => worker.id === id);
}

function workerName(id) {
  return workerById(id)?.name || uiLabel("Unassigned worker", "未分配人员");
}

function clientById(id) {
  return state.clients.find((client) => client.id === id);
}

function formatMoney(amount) {
  return `S$${Number(amount || 0).toLocaleString("en-SG")}`;
}

function paymentsForClient(client) {
  return (client.hires || []).flatMap((hire) => hire.payments || []);
}

function documentsForMaid(maidId) {
  return state.documents.filter((doc) => doc.maidId === maidId);
}

function documentsForCategory(category = activeAdminCategory) {
  const workerIds = new Set(workersForCategory(category).map((worker) => worker.id));
  return state.documents.filter((doc) => workerIds.has(doc.maidId));
}

function documentsForStage(maidId, stage) {
  return state.documents.filter((doc) => doc.maidId === maidId && doc.stage === stage);
}

function documentById(id) {
  return state.documents.find((doc) => doc.id === id);
}

function currentSigningUrl(docId) {
  return `${location.origin}${location.pathname}#sign=${docId}`;
}

function firstClientForMaid(maidId) {
  return state.clients.find((client) => client.assignedMaidId === maidId || (client.hires || []).some((hire) => hire.maidId === maidId));
}

function clientsForCategory(category = activeAdminCategory) {
  const workerIds = new Set(workersForCategory(category).map((worker) => worker.id));
  return state.clients.filter(
    (client) => (client.assignedMaidId && workerIds.has(client.assignedMaidId)) || (client.hires || []).some((hire) => workerIds.has(hire.maidId))
  );
}

function timelineItemsForMaid(maidId) {
  state.timeline[maidId] = state.timeline[maidId] || [];
  return state.timeline[maidId];
}

function findTimelineStep(maidId, stage) {
  return timelineItemsForMaid(maidId).find((item) => item.step === stage);
}

function markStepInProgress(maidId, stage) {
  const step = findTimelineStep(maidId, stage);
  if (!step || step.status === "已完成") return;
  step.status = "进行中";
  step.note = step.note || "Signing document uploaded";
}

function completeStepAndOpenNext(maidId, stage) {
  const items = timelineItemsForMaid(maidId);
  const index = items.findIndex((item) => item.step === stage);
  if (index < 0) return;
  items[index].status = "已完成";
  items[index].note = "Customer completed e-signature";
  const next = items[index + 1];
  if (next && next.status !== "已完成" && next.status !== "进行中") {
    next.status = "待处理";
    next.note = next.note || "Waiting for file upload or processing";
  }
}

function splitList(value) {
  return String(value || "")
    .split(/[,，\n]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function parsePairLines(value, fallbackKey = "item") {
  return String(value || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [label, ...rest] = line.split(/[:：]/);
      return { [fallbackKey]: label.trim(), status: rest.join(":").trim() || "To be filled" };
    });
}

function parseSkillLines(value) {
  return String(value || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [area, willingness = "Yes", experience = "Yes", years = "", rating = "", observation = ""] = line
        .split("|")
        .map((item) => item.trim());
      return { area, willingness, experience, years, rating, observation };
    });
}

function parseEmploymentLines(value) {
  return String(value || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [from = "", to = "", country = "", employer = "", duties = ""] = line.split("|").map((item) => item.trim());
      return { from, to, country, employer, duties };
    });
}

function normalizeImportedMaid(maid) {
  return {
    ...defaultMaidDetails,
    ...maid,
    id: maid.id || `m${Date.now()}`,
    age: Number(maid.age || 0),
    salary: Number(maid.salary || 0),
    experience: Number(maid.experience || 0),
    skills: maid.skills || [],
    duties: maid.duties || [],
    workedCountries: maid.workedCountries || [],
    skillAssessment: maid.skillAssessment || [],
    medicalHistory: maid.medicalHistory || [],
    employmentHistory: maid.employmentHistory || [],
    momHistory: maid.momHistory || [],
    evaluationMethods: maid.evaluationMethods || [],
    interviewAvailability: maid.interviewAvailability || [],
    status: maid.status || "可预约"
  };
}

function stagePackage(maidId, clientId, stage) {
  return state.documents.find(
    (doc) => doc.maidId === maidId && doc.clientId === clientId && doc.stage === stage && doc.source === "stage-package" && doc.status !== "已签署"
  );
}

function fileRecord(file) {
  const extension = file?.name?.split(".").pop()?.toUpperCase() || "FILE";
  return {
    id: `f${Date.now()}${Math.round(Math.random() * 1000)}`,
    fileName: file?.name || "Uploaded Form",
    fileType: extension,
    uploadedAt: new Date().toISOString().slice(0, 10)
  };
}

function createSigningDocument(file, stageOverride) {
  const maidId = $("#timelineMaidSelect").value || workersForCategory()[0]?.id || "";
  const clientId = $("#processClientSelect").value || firstClientForMaid(maidId)?.id || "";
  const stage = stageOverride || "Employment Process";
  const existingPackage = stagePackage(maidId, clientId, stage);
  const nextFile = fileRecord(file);
  if (existingPackage) {
    existingPackage.files = [...(existingPackage.files || []), nextFile];
    existingPackage.fileName = `${existingPackage.files.length} file(s)`;
    existingPackage.name = `${stage} Signing Package`;
    existingPackage.sentAt = new Date().toISOString().slice(0, 10);
    save();
    renderAll();
    return existingPackage;
  }
  const id = `d${Date.now()}`;
  const doc = {
    id,
    clientId,
    maidId,
    name: `${stage} Signing Package`,
    stage,
    status: "待签署",
    sentAt: new Date().toISOString().slice(0, 10),
    signedAt: "",
    signedBy: "",
    copySent: false,
    fileName: "1 file",
    fileType: "PACKAGE",
    files: [nextFile],
    signingLink: `#sign=${id}`,
    source: "stage-package",
    mergeFields: {
      clientName: clientById(clientId)?.name || "",
      clientPhone: clientById(clientId)?.phone || "",
      maidName: workerById(maidId)?.name || "",
      maidRefNo: workerById(maidId)?.refNo || "",
      maidPassport: workerById(maidId)?.passportNo || ""
    }
  };
  state.documents.unshift(doc);
  markStepInProgress(maidId, stage);
  save();
  renderAll();
  return doc;
}

function createSigningDocumentFromTemplate(templateTitle, stageOverride) {
  const template = formTemplates.find((item) => item.title === templateTitle);
  if (!template) return null;
  return createSigningDocument(
    {
      name: `${template.title}.pdf`,
      type: "application/pdf",
      templateUrl: template.url
    },
    stageOverride
  );
}

function addFilesToStage(files, stage) {
  let doc = null;
  [...files].forEach((file) => {
    doc = createSigningDocument(file, stage);
  });
  if (doc) {
    alert(uiLabel(`Signing package link generated/updated: ${currentSigningUrl(doc.id)}`, `已生成/更新签署包链接：${currentSigningUrl(doc.id)}`));
  }
}

function statusClass(status) {
  if (status === "已完成" || status === "已签署") return "";
  if (status === "进行中") return "amber";
  return "red";
}

function timelineClass(status) {
  if (status === "已完成") return "";
  if (status === "进行中") return "pending";
  return "blocked";
}

function sentenceList(items) {
  const list = [...new Set((items || []).filter(Boolean).map((item) => String(item).trim()).filter(Boolean))];
  if (!list.length) return "";
  if (list.length === 1) return list[0];
  if (list.length === 2) return `${list[0]} and ${list[1]}`;
  return `${list.slice(0, -1).join(", ")} and ${list.at(-1)}`;
}

function cleanCapabilityLabel(value) {
  const label = String(value || "").trim();
  const map = {
    "Care of Infants / children": "infant / child care",
    "Infant / child care": "infant / child care",
    "Care of elderly": "elderly care",
    "Elderly care": "elderly care",
    "Care of disabled": "disabled care",
    "Disabled care": "disabled care",
    "General housework": "general housework",
    Cooking: "cooking",
    "Language abilities": "language abilities",
    "Simple Chinese food": "simple Chinese food",
    "Mandarin and simple English": "Mandarin and simple English"
  };
  return map[label] || label;
}

function workerCapabilities(worker) {
  const assessed = (worker.skillAssessment || [])
    .filter((item) => ["yes", "y"].includes(String(item.experience || "").toLowerCase()) || ["yes", "y"].includes(String(item.willingness || "").toLowerCase()))
    .map((item) => cleanCapabilityLabel(item.area));
  return (assessed.length ? assessed : worker.duties || worker.skills || [])
    .map(cleanCapabilityLabel)
    .filter((item) => item && !["language abilities"].includes(item.toLowerCase()))
    .slice(0, 4);
}

function generateWorkerSummary(worker) {
  const parts = [];
  const countries = sentenceList(worker.workedCountries || []);
  const capabilities = sentenceList(workerCapabilities(worker));
  const years = Number(worker.experience || 0);

  if (countries) {
    parts.push(`Ex-${countries}.`);
  } else if (years) {
    parts.push(`${years} ${years === 1 ? "year" : "years"} of ${worker.role || "work"} experience.`);
  }

  if (capabilities) {
    parts.push(`Experienced in ${capabilities}.`);
  } else if (worker.languages) {
    parts.push(`Can communicate in ${worker.languages}.`);
  }

  return parts.join(" ") || `${worker.role || localized(categoryMeta[worker.category]?.title) || "Worker"} profile available for review.`;
}

function maidToWorker(maid) {
  return {
    ...maid,
    category: "女佣",
    role: "Domestic Worker",
    salary: `S$${maid.salary}`,
    summary: generateWorkerSummary({ ...maid, category: "女佣", role: "Domestic Worker" })
  };
}

function allFrontWorkers() {
  return [
    ...state.maids.map(maidToWorker),
    ...state.workers.map((worker) => ({
      ...worker,
      summary: generateWorkerSummary(worker)
    }))
  ];
}

function initFilters() {
  const workers = allFrontWorkers();
  const nationalities = [...new Set(workers.map((worker) => worker.nationality))];
  const skills = [...new Set(workers.flatMap((worker) => worker.skills))];
  setSelectOptions($("#nationalityFilter"), [
    { value: "全部", label: txt().all },
    ...nationalities.map((item) => ({ value: item, label: item }))
  ]);
  setSelectOptions($("#skillFilter"), [
    { value: "全部", label: txt().all },
    ...skills.map((item) => ({ value: item, label: item }))
  ]);
}

function renderFront() {
  const nationality = $("#nationalityFilter").value;
  const experience = $("#experienceFilter").value;
  const skill = $("#skillFilter").value;
  const filteredByControls = allFrontWorkers().filter((worker) => {
    const matchNationality = nationality === "全部" || worker.nationality === nationality;
    const matchExperience = experience === "全部" || worker.experience >= Number(experience);
    const matchSkill = skill === "全部" || worker.skills.includes(skill);
    return matchNationality && matchExperience && matchSkill;
  });
  const workers = filteredByControls.filter((worker) => worker.category === activeFrontCategory);
  const meta = categoryMeta[activeFrontCategory];
  const footer = renderFrontFooter();

  $("#categoryTabs").innerHTML = Object.keys(categoryMeta)
    .map((key) => {
      const count = filteredByControls.filter((worker) => worker.category === key).length;
      return `
        <button class="category-tab ${key === activeFrontCategory ? "active" : ""}" type="button" data-category="${key}" role="tab" aria-selected="${key === activeFrontCategory}">
          <span>${localized(categoryMeta[key].title)}</span>
          <em>${count}</em>
        </button>
      `;
    })
    .join("");

  $("#frontCount").textContent = txt().viewable(workers.length);
  if (activeFrontDetailId) {
    const selectedWorker = workers.find((worker) => worker.id === activeFrontDetailId);
    if (!selectedWorker) {
      activeFrontDetailId = "";
    } else {
      const maid = maidById(activeFrontDetailId);
      $("#maidCards").innerHTML = `
        <section class="worker-section">
          ${maid ? renderMaidDetail(maid, { context: "front" }) : renderFrontWorkerDetail(selectedWorker)}
          ${footer}
        </section>
      `;
      return;
    }
  }
  if (!workers.length) {
    $("#maidCards").innerHTML = `
      <section class="worker-section">
        <div class="worker-section-head">
          <div>
            <h3>${localized(meta.title)}</h3>
            <p>${localized(meta.description)}</p>
          </div>
        </div>
        <div class="empty-state">${txt().empty(localized(meta.title))}</div>
        ${footer}
      </section>
    `;
    return;
  }

  $("#maidCards").innerHTML = `
    <section class="worker-section">
      <div class="worker-section-head">
        <div>
          <h3>${localized(meta.title)}</h3>
          <p>${localized(meta.description)}</p>
        </div>
      </div>
      <div class="worker-grid">
        ${workers
          .map(
            (worker) => `
              <article class="maid-card">
                ${
                  worker.photoUrl
                    ? `<img class="maid-photo" src="${worker.photoUrl}" alt="${worker.name}" />`
                    : `<div class="maid-photo ${worker.category === "建筑" ? "building" : worker.category === "服务" ? "service" : ""}">${worker.name.slice(0, 1)}</div>`
                }
                <div class="maid-body">
                  <div class="maid-title">
                    <div>
                      <button class="text-link maid-name-link" type="button" data-open-front-detail="${worker.id}">${worker.name}</button>
                      <span>${worker.refNo} · ${worker.role}</span>
                    </div>
                    <span class="tag ${worker.status === "面试中" ? "amber" : ""}">${statusLabel(worker.status)}</span>
                  </div>
                  <p>${worker.summary}</p>
                  <h4 class="card-section-title">${uiLabel("Personal Particulars", "个人资料")}</h4>
                  <div class="info-grid">
                    <div><span>${txt().fields.category}</span><strong>${localized(categoryMeta[worker.category].title)}</strong></div>
                    <div><span>${txt().fields.nationality}</span><strong>${worker.nationality}</strong></div>
                    <div><span>${txt().fields.age}</span><strong>${txt().ageValue(worker.age)}</strong></div>
                    <div><span>${txt().fields.experience}</span><strong>${txt().yearsValue(worker.experience)}</strong></div>
                    <div><span>${txt().fields.salary}</span><strong>${worker.salary}</strong></div>
                    <div><span>${txt().fields.language}</span><strong>${worker.languages}</strong></div>
                  </div>
                  <div class="skills">${worker.skills.map((item) => `<span class="tag blue">${item}</span>`).join("")}</div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
      ${footer}
    </section>
  `;
}

function renderFrontFooter() {
  return `
    <footer class="front-footer">
      <div class="footer-main">
        <div class="footer-col">
          <h3>Site Map</h3>
          <a href="mailto:Luke@bby.sg">Contact Us</a>
          <a href="#front">Jobs in Singapore</a>
          <a href="#front">Hiring in Singapore</a>
          <a href="#front">Career Consulting</a>
        </div>
        <div class="footer-col">
          <h3>Help</h3>
          <a href="#terms" data-open-terms>Terms of Use</a>
          <a href="#front">Privacy Policy</a>
          <a href="#front">Email Disclaimer</a>
        </div>
        <div class="footer-col footer-locations">
          <h3>Bybridge Locations</h3>
          <div>
            <span>Singapore</span>
            <span>Malaysia</span>
            <span>Indonesia</span>
            <span>Thailand</span>
            <span>Vietnam</span>
            <span>India</span>
          </div>
        </div>
      </div>
      <div class="footer-contact">
        <h3>Contact Us</h3>
        <strong>Bybridge Consultancy Pte Ltd</strong>
        <p>8 Burn Road #15-03 Trivex Singapore 369977</p>
        <p>UEN: 201523304N</p>
        <p>EA License No. 15C7627</p>
        <p>Resume submissions and recruitment enquiries</p>
        <a href="mailto:Luke@bby.sg">Luke@bby.sg</a>
      </div>
    </footer>
  `;
}

function renderTermsOfUse() {
  return `
    <section class="legal-content">
      <h3>Overview of Policy</h3>
      <p>The following Terms and Conditions apply to your use of any website of Bybridge Consultancy Pte Ltd. Such terms should be read in conjunction with our Privacy Policy. By using this website, you agree to comply with these Terms and Conditions. If you do not agree with these terms then please do not use the website.</p>

      <h3>Use of Website</h3>
      <p>The purpose of this website is to provide you with our services and general information. You must not breach any term of our Acceptable Use Policy set out below.</p>

      <h3>Acceptable Use Policy</h3>
      <p>You agree to use this website only for lawful purposes in accordance with these terms and conditions and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of this website. Prohibited behaviour includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content or disrupting the normal flow of dialogue within this website.</p>
      <p>You must not:</p>
      <ul>
        <li>send, upload, display or disseminate or otherwise make available any unlawful, discriminatory, harassing, libelous, defamatory, abusive, threatening, harmful, offensive, obscene, tortious or otherwise objectionable material or otherwise breach any laws;</li>
        <li>display, upload or transmit material that encourages conduct that may constitute a criminal offence, result in civil liability or otherwise may breach any applicable laws, regulations or code of practice;</li>
        <li>interfere with any other person's privacy or use or enjoyment of this website;</li>
        <li>fraudulently or otherwise misrepresent yourself to be another person or a representative of another entity or fraudulently or otherwise misrepresent that you have an affiliation with a person, entity or group;</li>
        <li>mislead or deceive Bybridge, its representatives and any third parties who may rely on the information provided by you, by providing inaccurate or false information, which includes omissions of information;</li>
        <li>disguise the origin of any material transmitted through the services provided by the website whether by forging message headers or otherwise manipulating normal identification information;</li>
        <li>send, upload or otherwise make available material which infringes any intellectual or industrial property right of any person, such as copyright, trademarks, patents, trade secrets, or other proprietary rights of any party;</li>
        <li>send, upload, display or disseminate or otherwise make available material containing or associated with spam, junk mail, advertising for pyramid schemes, chain letters, virus warnings without first confirming the authenticity of the warning, or any other form of unauthorised advertising or promotional material;</li>
        <li>send, upload or otherwise make available material containing viruses, trojans or any other material designed to impair, destroy or interrupt the performance of any hardware or software;</li>
        <li>obtain unauthorised access to or interfere with the performance of the servers which provide the services or any servers on any associated networks or otherwise fail to comply with any policies or procedures relating to the use of those servers;</li>
        <li>collect, whether aggregated or otherwise, data about other users of the services.</li>
      </ul>

      <h3>Links to or from Other Sites</h3>
      <p>This website may include links to other websites on the internet which are owned, published and maintained by third parties. Please note that these websites are not under the control of Bybridge Consultancy Pte Ltd and therefore Bybridge Consultancy Pte Ltd cannot assume any responsibility for the content of such linked websites.</p>

      <h3>Aggregate Information</h3>
      <p>We may gather information and statistics collectively about all visitors to this site, which may include the information supplied by you and will help us understand our users, thereby creating a better recruitment process. We will not disclose individual names or identifying information. All data will be in aggregate form only. We believe this information helps us determine what is most beneficial for our users and how we can continually improve our online service. We may share this kind of aggregate data with selected third parties to assist with these purposes. Personal data is processed by us in accordance with our Privacy Policy.</p>

      <h3>Disclaimer</h3>
      <p>This website's content, including the information and material, names, images, pictures, logos and icons regarding or relating to Bybridge Consultancy Pte Ltd, its products and services or to third party products and services, is provided as a general guide only on an "as is" and on an "is available" basis. We make no representations or any kind of warranty whatsoever, whether express or implied by law, to the extent permitted by law, including the implied warranties of satisfactory quality, fitness for a particular purpose, non-infringement, compatibility, security, currency, completeness, adequacy, suitability and accuracy.</p>
      <p>Under no circumstances will Bybridge Consultancy Pte Ltd be liable for any of the following losses or damage, whether such losses were foreseen, foreseeable, known or otherwise:</p>
      <ul>
        <li>loss of data;</li>
        <li>loss of revenue or anticipated profits;</li>
        <li>loss of business;</li>
        <li>loss of opportunity;</li>
        <li>loss of goodwill or injury to reputation;</li>
        <li>losses suffered by third parties; or</li>
        <li>any indirect, consequential, special or exemplary damages arising from the use of this website regardless of the form of action.</li>
      </ul>
      <p>Bybridge Consultancy Pte Ltd does not warrant that functions contained in this website's content will be uninterrupted or error free, that defects will be corrected, or that this website or the server that makes it available is free of bugs, viruses, worms, trojans or any other computer code that may adversely affect any communications.</p>

      <h3>Submitting Data to Our Website</h3>
      <p>If you upload your CV or apply for a job on our websites, you must ensure that the details provided by you at that or at any other time are accurate, up to date and complete.</p>
      <p>You must immediately update and inform us of any changes to your information, whether by making relevant changes to your CV or by updating your personal details, so that we can communicate with you effectively and provide accurate, up to date information to potential employers.</p>
      <p>We accept no liability for any unauthorised use of logins and passwords. In order to prevent such fraud, you must keep your password confidential and must not disclose it or share it with anyone. If you know or suspect that someone else knows your password, you should notify us immediately.</p>
      <p>By using this site, you are solely responsible for any and all occurrences, which includes maintaining up-to-date, correct, accurate and complete information and uploading materials which do not breach or infringe the rights of any third party.</p>
      <p>If we have reason to believe that there is likely to be a breach of security or misuse of our website, we may require you to change your password or we may suspend your account.</p>
      <p>We may suspend or cancel your account immediately at our reasonable discretion or if you breach any of your obligations under these Terms and Conditions or the Privacy Policy.</p>
      <p>The suspension or cancellation of your account and your right to use the website shall not affect either party's statutory rights or liabilities.</p>
      <p>We may change these Terms and Conditions at our discretion and without notice. Any updates and changes will be posted to this page.</p>

      <p class="legal-updated">Updated: June 2023</p>
    </section>
  `;
}

function renderAdminCategoryTabs() {
  const modules = [
    { id: "maids", label: uiLabel("Personnel Management", "人员管理") },
    { id: "clients", label: uiLabel("Client Management", "客户管理") },
    { id: "process", label: uiLabel("Employment Process", "雇佣流程") },
    { id: "documents", label: uiLabel("Signed Documents", "签署文件") },
    { id: "downloads", label: uiLabel("Form Downloads", "表格下载") }
  ];
  const accountModule = canManageAccounts()
    ? `
      <section class="admin-category-group account-group">
        <div class="admin-category-heading">
          <span>${uiLabel("Administration", "系统管理")}</span>
        </div>
        <div class="admin-module-list">
          <button class="${document.querySelector(".admin-tab.active-admin-tab")?.id === "users" ? "active" : ""}" type="button" data-admin-tab-only="users">
            ${uiLabel("Account Management", "账号管理")}
          </button>
        </div>
      </section>
    `
    : "";
  const activeTab = document.querySelector(".admin-tab.active-admin-tab")?.id || "maids";
  $("#adminCategoryTabs").innerHTML = Object.keys(categoryMeta)
    .map((key) => {
      const count = workersForCategory(key).length;
      return `
        <section class="admin-category-group">
          <div class="admin-category-heading">
            <span>${localized(categoryMeta[key].title)}</span>
            <em>${count}</em>
          </div>
          <div class="admin-module-list">
            ${modules
              .map(
                (module) => `
                  <button class="${key === activeAdminCategory && module.id === activeTab ? "active" : ""}" type="button" data-admin-category="${key}" data-admin-tab="${module.id}">
                    ${module.label}
                  </button>
                `
              )
              .join("")}
          </div>
        </section>
      `;
    })
    .join("") + accountModule;
  const title = localized(categoryMeta[activeAdminCategory].title);
  $("#personnelTitle").textContent = `${title} · ${uiLabel("Personnel Management", "人员管理")}`;
  $("#clientTitle").textContent = `${title} · ${uiLabel("Client Management", "客户管理")}`;
  $("#processTitle").textContent = `${title} · ${uiLabel("Employment Process", "雇佣流程")}`;
  $("#documentTitle").textContent = `${title} · ${uiLabel("Signed Documents", "签署文件")}`;
  $("#downloadTitle").textContent = `${title} · ${uiLabel("Form Downloads", "表格下载")}`;
  $("#addMaidBtn").textContent = uiLabel(`Add ${title} Worker`, `新增${title}人员`);
  $("#uploadBiodataText").textContent = uiLabel("Upload Biodata PDF", "上传 Biodata PDF");
  const upload = $("#maidPdfInput")?.closest(".upload-btn");
  if (upload) upload.style.display = activeAdminCategory === "女佣" ? "inline-flex" : "none";
}

function renderAdminAuth() {
  const loggedIn = isAdminLoggedIn();
  $("#adminAuth").style.display = loggedIn ? "none" : "grid";
  document.querySelector("#admin .admin-layout").style.display = loggedIn ? "grid" : "none";
  if (!loggedIn) return;
  const user = currentUser();
  $("#adminSessionBar").innerHTML = `
    <div>
      <strong>${user.name}</strong>
      <span>${user.username} · ${user.role === "admin" ? uiLabel("Administrator", "管理员") : uiLabel("Employee", "员工")}</span>
    </div>
    <button class="mini-btn" type="button" data-admin-logout>${uiLabel("Logout", "退出登录")}</button>
  `;
}

function renderDashboard() {
  if (!$("#metrics")) return;
  const signedDocs = state.documents.filter((doc) => doc.status === "已签署").length;
  const pendingDocs = state.documents.length - signedDocs;
  const activeProcesses = Object.values(state.timeline).flat().filter((item) => item.status !== "已完成").length;
  const unpaidPayments = state.clients
    .flatMap((client) => paymentsForClient(client))
    .filter((payment) => payment.status === "待付款").length;
  $("#metrics").innerHTML = [
    [uiLabel("Maid Profiles", "女佣档案"), state.maids.length],
    [uiLabel("Clients", "客户数量"), state.clients.length],
    [uiLabel("Active Processes", "进行中流程"), activeProcesses],
    [uiLabel("Pending Documents", "待签文件"), pendingDocs],
    [uiLabel("Pending Payments", "待收款项"), unpaidPayments]
  ]
    .map(([label, value]) => `<div class="metric"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");

  $("#pendingTimeline").innerHTML = Object.entries(state.timeline)
    .flatMap(([maidId, items]) =>
      items
        .filter((item) => item.status !== "已完成")
        .map((item) => ({ ...item, maid: maidById(maidId)?.name || "" }))
    )
    .slice(0, 5)
    .map(
      (item) => `
        <div class="list-item">
          <div class="row-title">${item.maid} · ${item.step}</div>
          <div class="row-sub">${item.date} · ${item.status} · ${item.note}</div>
        </div>
      `
    )
    .join("");

  $("#pendingDocs").innerHTML = state.documents
    .filter((doc) => doc.status !== "已签署")
    .map(
      (doc) => `
        <div class="list-item">
          <div class="row-title">${doc.name}</div>
          <div class="row-sub">${clientById(doc.clientId)?.name} · ${maidById(doc.maidId)?.name} · ${doc.stage}</div>
        </div>
      `
    )
    .join("");
}

function renderDownloads() {
  const templates = formTemplates.filter((template) => template.categories.includes(activeAdminCategory));
  $("#downloadList").innerHTML = templates
    .map(
      (template) => `
        <article class="download-card">
          <div>
            <div class="row-title">${template.title}</div>
            <div class="row-sub">${localized(categoryMeta[activeAdminCategory].title)} · PDF Template</div>
          </div>
          <div class="row-actions">
            <button type="button" class="mini-btn download-preview" data-url="${template.url}" data-title="${template.title}">${uiLabel("Preview", "预览")}</button>
            <a class="mini-link" href="${template.url}" target="_blank" rel="noreferrer">${uiLabel("Download", "下载")}</a>
          </div>
        </article>
      `
    )
    .join("");
}

function detailFields(fields) {
  return fields
    .map(
      ([label, value]) => `
        <div>
          <span>${label}</span>
          <strong>${displayValue(value)}</strong>
        </div>
      `
    )
    .join("");
}

function renderMaidDetail(maid, options = {}) {
  const isFrontDetail = options.context === "front";
  const selectedEvaluationMethods = new Set(maid.evaluationMethods || []);
  const medicalRows = (maid.medicalHistory || [])
    .map((item) => {
      const status = item.status || "-";
      const clearStatus = ["No", "N/A", "-", "Nil", "None"].includes(status);
      return `
        <div class="medical-chip ${clearStatus ? "" : "attention"}">
          <span>${item.item || "-"}</span>
          <strong>${status}</strong>
        </div>
      `;
    })
    .join("");
  const skillRows = (maid.skillAssessment || [])
    .map(
      (item) => `
        <div class="skill-row">
          <span>${item.area || "-"}</span>
          <span>${item.willingness || "-"}</span>
          <span>${item.experience || "-"}</span>
          <span>${item.years || "-"}</span>
          <span>${item.rating || "-"}</span>
          <span>${item.observation || "-"}</span>
        </div>
      `
    )
    .join("");
  const employmentRows = (maid.employmentHistory || [])
    .map(
      (item) => `
        <div class="history-row maid-history-row">
          <span>${[item.from, item.to].filter(Boolean).join(" - ") || "-"}</span>
          <span>${item.country || "-"}</span>
          <span>${item.employer || "-"}</span>
          <span>${item.duties || "-"}</span>
        </div>
      `
    )
    .join("");
  const momRows = (maid.momHistory || [])
    .map(
      (item) => `
        <div class="history-row maid-history-row">
          <span>${[item.startDate, item.endDate].filter(Boolean).join(" - ") || "-"}</span>
          <span>${item.employer || "-"}</span>
          <span>${item.industry || "-"}</span>
          <span>-</span>
        </div>
      `
    )
    .join("");

  return `
    <article class="detail-card maid-detail-card">
      <div class="detail-toolbar">
        <button class="mini-btn" type="button" ${isFrontDetail ? "data-back-front-list" : "data-back-maid-list"}>${isFrontDetail ? uiLabel("Back to Worker List", "返回人员列表") : uiLabel("Back to Personnel List", "返回人员列表")}</button>
        <span class="tag ${maid.status === "面试中" ? "amber" : ""}">${statusLabel(maid.status)}</span>
      </div>
      <div class="detail-head">
        <div class="profile-title">
          ${
            maid.photoUrl
              ? `<img class="profile-avatar large" src="${maid.photoUrl}" alt="${maid.name}" />`
              : `<div class="profile-avatar large">${maid.name.slice(0, 1)}</div>`
          }
          <div>
            <h3>${maid.name}</h3>
            <div class="row-sub">${maid.refNo} · Domestic Worker · ${maid.nationality} · ${txt().ageValue(maid.age)}</div>
          </div>
        </div>
      </div>

      <section class="detail-section">
        <h3>${uiLabel("Personal Particulars", "个人资料")}</h3>
        <div class="profile-grid maid-fixed-grid">
          ${detailFields([
            [uiLabel("Name", "姓名"), maid.name],
            [uiLabel("Reference No.", "编号"), maid.refNo],
            [uiLabel("Nationality", "国籍"), maid.nationality],
            [uiLabel("Date of Birth", "出生日期"), maid.dateOfBirth],
            [uiLabel("Age", "年龄"), maid.age ? txt().ageValue(maid.age) : ""],
            [uiLabel("Religion", "宗教"), maid.religion],
            [uiLabel("Marital Status", "婚姻状况"), maid.maritalStatus],
            [uiLabel("Education", "学历"), maid.education],
            [uiLabel("Height / Weight", "身高 / 体重"), heightWeightValue(maid)],
            [uiLabel("Birth / Home City", "出生 / 家乡城市"), maid.originCity],
            [uiLabel("Home Address", "家庭地址"), maid.homeAddress],
            [uiLabel("No. of Siblings", "兄弟姐妹人数"), maid.siblings],
            [uiLabel("Worked Countries", "曾工作国家"), maid.workedCountries],
            [uiLabel("Salary", "薪资"), maid.salary ? `S$${maid.salary}` : ""],
            [uiLabel("Rest Day", "休息日"), maid.offDay],
            [uiLabel("Languages", "语言"), maid.languages]
          ])}
        </div>
      </section>

      <section class="detail-section">
        <h3>${uiLabel("Passport and Work Permit Information", "证件与准证信息")}</h3>
        <div class="profile-grid maid-fixed-grid">
          ${detailFields([
            [uiLabel("Passport No.", "护照号码"), maid.passportNo],
            ["FIN", maid.fin],
            ["WP No.", maid.wpNo],
            [uiLabel("Repatriation Airport", "回国机场"), maid.repatriationAirport]
          ])}
        </div>
      </section>

      <section class="detail-section">
        <h3>${uiLabel("Health, Food Handling and Restrictions", "健康、饮食与限制")}</h3>
        <div class="profile-grid maid-fixed-grid">
          ${detailFields([
            [uiLabel("Medical Status", "医疗状态"), maid.medicalStatus],
            [uiLabel("Food Handling", "饮食 / 食物处理"), maid.foodHandling],
            [uiLabel("Allergies / Fears / Restrictions", "过敏 / 害怕 / 限制"), maid.allergies]
          ])}
        </div>
        <div class="medical-grid">${medicalRows || `<div class="empty-state compact">${uiLabel("No medical history yet.", "暂无医疗记录。")}</div>`}</div>
      </section>

      <section class="detail-section">
        <h3>${uiLabel("Scope of Work and Skills", "工作范围与能力")}</h3>
        <div class="skills">${(maid.duties || maid.skills || []).map((item) => `<span class="tag blue">${item}</span>`).join("")}</div>
        <div class="evaluation-methods">
          <div class="row-sub">${uiLabel("Method of evaluation of skills (multiple choice)", "Method of evaluation of skills（多选）")}</div>
          <div class="evaluation-grid">
            ${skillEvaluationMethodOptions
              .map(
                (option) => `
                  <div class="evaluation-option ${selectedEvaluationMethods.has(option) ? "selected" : ""}">
                    <span>${selectedEvaluationMethods.has(option) ? "✓" : ""}</span>
                    <strong>${option}</strong>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
        <div class="skill-table maid-skill-table">
          <div class="skill-row skill-head">
            <span>${uiLabel("Scope of Work", "工作范围")}</span>
            <span>${uiLabel("Willing", "愿意")}</span>
            <span>${uiLabel("Experience", "经验")}</span>
            <span>${uiLabel("Years", "年数")}</span>
            <span class="rating-head">${uiLabel("Rating", "评分")} <small>1 Poor - 5 Excellent</small></span>
            <span>${uiLabel("Remarks", "备注")}</span>
          </div>
          ${skillRows || `<div class="empty-state compact">${uiLabel("No skill assessment yet.", "暂无技能评估。")}</div>`}
        </div>
      </section>

      <section class="detail-section">
        <h3>${uiLabel("Overseas Employment History", "海外工作经历")}</h3>
        <div class="history-row maid-history-row history-head">
          <span>${uiLabel("Period", "时间")}</span>
          <span>${uiLabel("Country", "国家")}</span>
          <span>${uiLabel("Employer", "雇主")}</span>
          <span>${uiLabel("Duties", "工作内容")}</span>
        </div>
        ${employmentRows || `<div class="empty-state compact">${uiLabel("No overseas employment history yet.", "暂无海外工作经历。")}</div>`}
      </section>

      <section class="detail-section">
        <h3>${uiLabel("MOM Singapore Records", "MOM 新加坡记录")}</h3>
        <div class="history-row maid-history-row history-head">
          <span>${uiLabel("Period", "时间")}</span>
          <span>${uiLabel("Employer", "雇主")}</span>
          <span>${uiLabel("Industry", "行业")}</span>
          <span>${uiLabel("Remarks", "备注")}</span>
        </div>
        ${momRows || `<div class="empty-state compact">${uiLabel("No MOM records yet.", "暂无 MOM 记录。")}</div>`}
      </section>

      <section class="detail-section">
        <h3>${uiLabel("Interview Availability and Biodata Remarks", "面试与 Biodata 备注")}</h3>
        <div class="profile-grid maid-fixed-grid">
          ${detailFields([
            [uiLabel("Interview Availability", "可面试方式"), maid.interviewAvailability],
            [uiLabel("Biodata Remarks", "Biodata 备注"), maid.biodataRemarks]
          ])}
        </div>
      </section>
    </article>
  `;
}

function renderFrontWorkerDetail(worker) {
  return `
    <article class="detail-card maid-detail-card">
      <div class="detail-toolbar">
        <button class="mini-btn" type="button" data-back-front-list>${uiLabel("Back to Worker List", "返回人员列表")}</button>
        <span class="tag ${worker.status === "面试中" ? "amber" : ""}">${statusLabel(worker.status)}</span>
      </div>
      <div class="detail-head">
        <div class="profile-title">
          ${
            worker.photoUrl
              ? `<img class="profile-avatar large" src="${worker.photoUrl}" alt="${worker.name}" />`
              : `<div class="profile-avatar large ${worker.category === "建筑" ? "building" : worker.category === "服务" ? "service" : ""}">${worker.name.slice(0, 1)}</div>`
          }
          <div>
            <h3>${worker.name}</h3>
            <div class="row-sub">${worker.refNo} · ${worker.role} · ${worker.nationality} · ${txt().ageValue(worker.age)}</div>
          </div>
        </div>
      </div>

      <section class="detail-section">
        <h3>${uiLabel("Personal Particulars", "个人资料")}</h3>
        <div class="profile-grid maid-fixed-grid">
          ${detailFields([
            [uiLabel("Name", "姓名"), worker.name],
            [uiLabel("Reference No.", "编号"), worker.refNo],
            [uiLabel("Category", "分类"), localized(categoryMeta[worker.category].title)],
            [uiLabel("Nationality", "国籍"), worker.nationality],
            [uiLabel("Age", "年龄"), worker.age ? txt().ageValue(worker.age) : ""],
            [uiLabel("Role", "职位"), worker.role],
            [uiLabel("Experience", "经验"), worker.experience ? txt().yearsValue(worker.experience) : ""],
            [uiLabel("Salary", "薪资"), worker.salary],
            [uiLabel("Languages", "语言"), worker.languages],
            [uiLabel("Status", "状态"), statusLabel(worker.status)]
          ])}
        </div>
      </section>

      <section class="detail-section">
        <h3>${uiLabel("Summary", "摘要")}</h3>
        <p class="detail-copy">${worker.summary || "-"}</p>
        <div class="skills">${(worker.skills || []).map((item) => `<span class="tag blue">${item}</span>`).join("")}</div>
      </section>
    </article>
  `;
}

function renderAdminMaids() {
  const workers = workersForCategory();
  if (activeAdminCategory === "女佣" && activeMaidDetailId) {
    const maid = maidById(activeMaidDetailId);
    $("#adminMaidList").innerHTML = maid ? renderMaidDetail(maid) : `<div class="empty-state">${uiLabel("This maid profile could not be found.", "没有找到这位女佣资料。")}</div>`;
    return;
  }
  $("#adminMaidList").innerHTML = workers.length
    ? workers
    .map(
      (worker) => {
        const title = activeAdminCategory === "女佣"
          ? `<button class="text-link row-title" type="button" data-open-maid-detail="${worker.id}">${worker.name}</button>`
          : `<div class="row-title">${worker.name}</div>`;
        const summary = generateWorkerSummary(worker);
        return `
        <article class="detail-card">
          <div class="detail-head">
            <div class="profile-title">
              ${
                worker.photoUrl
                  ? `<img class="profile-avatar" src="${worker.photoUrl}" alt="${worker.name}" />`
                  : `<div class="profile-avatar">${worker.name.slice(0, 1)}</div>`
              }
              <div>
                ${title}
                <div class="row-sub">${worker.refNo} · ${worker.role} · ${worker.nationality} · ${txt().ageValue(worker.age)}</div>
              </div>
            </div>
            <span class="tag ${worker.status === "面试中" ? "amber" : ""}">${statusLabel(worker.status)}</span>
          </div>
          <div class="profile-grid">
            <div><span>${uiLabel("Category", "分类")}</span><strong>${localized(categoryMeta[worker.category].title)}</strong></div>
            <div><span>${uiLabel("Reference No.", "编号")}</span><strong>${worker.refNo}</strong></div>
            <div><span>${uiLabel("Role", "职位")}</span><strong>${worker.role}</strong></div>
            <div><span>${uiLabel("Experience", "经验")}</span><strong>${txt().yearsValue(worker.experience)}</strong></div>
            <div><span>${uiLabel("Salary", "薪资")}</span><strong>${worker.salary}</strong></div>
            <div><span>${uiLabel("Languages", "语言")}</span><strong>${worker.languages}</strong></div>
          </div>
          <p class="record-note">${summary}</p>
          <div class="skills">${(worker.skills || worker.duties || []).map((item) => `<span class="tag blue">${item}</span>`).join("")}</div>
        </article>
      `;
      }
    )
    .join("")
    : `<div class="empty-state">${uiLabel("No personnel in this category yet.", "当前分类还没有人员。")}</div>`;
}

function renderClients() {
  const clients = clientsForCategory();
  $("#clientList").innerHTML = clients.length
    ? clients
    .map(
      (client) => {
        const payments = paymentsForClient(client);
        const paid = payments.filter((payment) => payment.status === "已付款").reduce((sum, payment) => sum + Number(payment.amount), 0);
        const total = payments.reduce((sum, payment) => sum + Number(payment.amount), 0);
        return `
          <article class="detail-card">
            <div class="detail-head">
              <div>
                <div class="row-title">${client.name}</div>
                <div class="row-sub">${client.phone} · ${uiLabel("Need", "需求")}：${client.need} · ${uiLabel("Budget", "预算")} S$${client.budget}</div>
              </div>
              <span class="tag blue">${uiLabel("Received", "已收")} ${formatMoney(paid)} / ${formatMoney(total)}</span>
            </div>
            <div class="hire-list">
              ${(client.hires || [])
                .map(
                  (hire) => `
                    <section class="hire-card">
                      <div class="hire-head">
                        <div>
                          <strong>${workerName(hire.maidId)}</strong>
                          <span>${hire.contractNo} · ${statusLabel(hire.status)} · ${uiLabel("Consultant", "顾问")} ${hire.consultant}</span>
                        </div>
                        <span class="tag ${hire.status === "面试中" ? "amber" : ""}">${uiLabel("Expected Start", "预计上岗")} ${hire.startDate}</span>
                      </div>
                      <div class="payment-table">
                        ${(hire.payments || [])
                          .map(
                            (payment, index) => `
                              <div class="payment-row">
                                <span>${index + 1}. ${payment.stage}</span>
                                <strong>${formatMoney(payment.amount)}</strong>
                                <span>${payment.dueDate}</span>
                                <span class="tag ${payment.status === "已付款" ? "" : payment.status === "待付款" ? "red" : "amber"}">${statusLabel(payment.status)}</span>
                              </div>
                            `
                          )
                          .join("")}
                      </div>
                    </section>
                  `
                )
                .join("")}
            </div>
          </article>
        `;
      }
    )
    .join("")
    : `<div class="empty-state">${uiLabel("No clients in this category yet.", "当前分类还没有客户。")}</div>`;
}

function renderTimelineSelector() {
  $("#timelineMaidSelect").innerHTML = workersForCategory()
    .map((worker) => `<option value="${worker.id}">${worker.name}</option>`)
    .join("");
}

function renderProcessSelectors() {
  const maidId = $("#timelineMaidSelect").value || workersForCategory()[0]?.id;
  const linkedClient = firstClientForMaid(maidId);
  const clients = clientsForCategory();
  $("#processClientSelect").innerHTML = clients
    .map((client) => `<option value="${client.id}" ${client.id === linkedClient?.id ? "selected" : ""}>${client.name}</option>`)
    .join("");
}

function renderTimeline() {
  const selected = $("#timelineMaidSelect").value;
  const maidId = workersForCategory().some((worker) => worker.id === selected) ? selected : workersForCategory()[0]?.id;
  if (!maidId) {
    $("#timelineList").innerHTML = `<div class="empty-state">${uiLabel("No manageable personnel in this category yet.", "当前分类还没有可管理的人员。")}</div>`;
    $("#processClientSelect").innerHTML = "";
    return;
  }
  $("#timelineMaidSelect").value = maidId;
  const items = timelineItemsForMaid(maidId);
  $("#timelineList").innerHTML = items
    .map(
      (item, index) => `
        <div class="timeline-item ${timelineClass(item.status)}" data-stage="${item.step}">
          <strong>${item.date}</strong>
          <div class="timeline-main">
            <div>
              <div class="row-title">${index + 1}. ${item.step}</div>
              <div class="row-sub">${item.note}</div>
            </div>
            ${renderStageDocuments(maidId, item.step)}
          </div>
          <span class="tag ${statusClass(item.status)}">${statusLabel(item.status)}</span>
        </div>
      `
    )
    .join("");
  renderProcessSelectors();
}

function renderStageDocuments(maidId, stage) {
  const docs = documentsForStage(maidId, stage);
  const templateOptions = formTemplates
    .filter((template) => template.categories.includes(activeAdminCategory))
    .map((template) => `<option value="${template.title}">${template.title}</option>`)
    .join("");
  const docList =
    docs
      .map((doc) => {
        const signed = doc.status === "已签署";
        const files = doc.files || [{ fileName: doc.fileName, fileType: doc.fileType }];
        return `
          <div class="stage-package">
            <div>
              <div class="row-title">${doc.name}</div>
              <div class="row-sub">${clientById(doc.clientId)?.name || uiLabel("Unassigned client", "未指定客户")} · ${files.length} ${uiLabel("file(s)", "个文件")} · ${uiLabel("one signing link", "一个签署链接")}</div>
              <div class="merge-preview">${uiLabel("Auto-filled", "已自动带入")}：${uiLabel("Client", "客户")} ${clientById(doc.clientId)?.name || "-"} / ${uiLabel("Worker", "人员")} ${workerName(doc.maidId)}</div>
              <div class="file-chip-list">${files.map((file) => `<span class="file-chip">${file.fileName}</span>`).join("")}</div>
            </div>
            <span class="tag ${signed ? "" : "red"}">${statusLabel(doc.status)}</span>
            <button class="mini-btn" data-copy-link="${doc.id}">${uiLabel("Copy Link", "复制链接")}</button>
            <a class="mini-link" href="#sign=${doc.id}" target="_blank">${uiLabel("Open Signing", "打开签署")}</a>
          </div>
        `;
      })
      .join("");
  return `
    <div class="stage-documents">
      <div class="stage-form-picker">
        <label>
          ${uiLabel("Select Document to Fill", "选择需要填写的文件")}
          <select data-template-select="${stage}">
            ${templateOptions}
          </select>
        </label>
        <button class="primary-btn" type="button" data-send-template="${stage}">${uiLabel("Completed, Send Link to Client for Signature", "填写完毕，发送链接给客户签名")}</button>
      </div>
      ${docList || `<div class="empty-state">${uiLabel("No signing documents in this stage yet.", "这个节点还没有签署文件。")}</div>`}
    </div>
  `;
}

function renderProcessDocuments() {
  const maidId = $("#timelineMaidSelect").value || state.maids[0]?.id;
  $$(".timeline-item").forEach((item) => {
    const stage = item.dataset.stage;
    const container = item.querySelector(".stage-documents");
    if (stage && container) {
      container.outerHTML = renderStageDocuments(maidId, stage);
    }
  });
}

function renderDocuments() {
  const docs = documentsForCategory();
  $("#documentList").innerHTML = docs.length
    ? docs
    .map((doc) => {
      const signed = doc.status === "已签署";
      return `
        <div class="table-row">
          <div>
            <div class="row-title">${doc.name}</div>
            <div class="row-sub">${doc.stage} · ${uiLabel("Sent", "发送")} ${doc.sentAt} · ${doc.fileName}</div>
          </div>
          <div>${clientById(doc.clientId)?.name || uiLabel("Unassigned client", "未指定客户")} / ${workerName(doc.maidId)}</div>
          <div>
            <span class="tag ${signed ? "" : "red"}">${statusLabel(doc.status)}</span>
            <span class="tag ${doc.copySent ? "" : "amber"}">${doc.copySent ? uiLabel("Copy Sent", "副本已发送") : uiLabel("Waiting Copy", "等待副本")}</span>
          </div>
          <div class="row-actions">
            <a class="mini-link" href="#sign=${doc.id}" target="_blank">${uiLabel("Signing Link", "签署链接")}</a>
            <button class="mini-btn" data-sign-doc="${doc.id}" ${signed ? "disabled" : ""}>${uiLabel("Mark Signed", "标记已签")}</button>
          </div>
        </div>
      `;
    })
    .join("")
    : `<div class="empty-state">${uiLabel("No sent signing documents in this category yet.", "当前分类还没有已发送的签署文件。")}</div>`;
}

async function renderUsers() {
  if (!$("#userList")) return;
  if (!canManageAccounts()) {
    $("#userList").innerHTML = `<div class="empty-state">${uiLabel("Only administrators can manage accounts.", "只有管理员可以管理账号。")}</div>`;
    return;
  }
  $("#userList").innerHTML = `<div class="empty-state">${uiLabel("Loading accounts...", "正在加载账号...")}</div>`;
  try {
    const data = await apiRequest("/api/accounts");
    const accounts = data.accounts || [];
    $("#userList").innerHTML = accounts
    .map(
      (account) => `
        <article class="detail-card user-card">
          <div class="detail-head">
            <div>
              <div class="row-title">${account.name}</div>
              <div class="row-sub">${account.username} · ${account.role === "admin" ? uiLabel("Administrator", "管理员") : uiLabel("Employee", "员工")}</div>
            </div>
            <span class="tag ${account.status === "active" ? "" : "amber"}">${account.status === "active" ? uiLabel("Active", "启用") : uiLabel("Disabled", "停用")}</span>
          </div>
        </article>
      `
    )
    .join("");
  } catch (error) {
    $("#userList").innerHTML = `<div class="empty-state">${error.message}</div>`;
  }
}

function renderSignaturePortal() {
  const docId = location.hash.startsWith("#sign=") ? location.hash.replace("#sign=", "") : "";
  const portal = $("#signaturePortal");
  const front = $("#front");
  const admin = $("#admin");
  if (!docId) {
    portal.classList.remove("active-view");
    return;
  }

  $$(".view").forEach((item) => item.classList.remove("active-view"));
  portal.classList.add("active-view");
  front.classList.remove("active-view");
  admin.classList.remove("active-view");
  $$(".mode-switch button").forEach((item) => item.classList.remove("active"));

  const doc = documentById(docId);
  if (!doc) {
    $("#signatureContent").innerHTML = `<div class="detail-card"><h3>${uiLabel("Invalid Link", "链接无效")}</h3><p>${uiLabel("This signing document could not be found.", "找不到这份待签文件。")}</p></div>`;
    return;
  }
  const client = clientById(doc.clientId);
  const worker = workerById(doc.maidId);
  const signed = doc.status === "已签署";
  const files = doc.files || [{ fileName: doc.fileName, fileType: doc.fileType }];
  $("#signatureContent").innerHTML = `
    <article class="signature-card">
      <div class="detail-head">
        <div>
          <div class="row-title">${doc.name}</div>
          <div class="row-sub">${doc.fileName} · ${doc.stage}</div>
        </div>
        <span class="tag ${signed ? "" : "red"}">${statusLabel(doc.status)}</span>
      </div>
      <div class="profile-grid">
        <div><span>${uiLabel("Client", "客户")}</span><strong>${client?.name || "-"}</strong></div>
        <div><span>${uiLabel("Worker", "人员")}</span><strong>${worker?.name || "-"}</strong></div>
        <div><span>${uiLabel("Sent Date", "发送日期")}</span><strong>${doc.sentAt}</strong></div>
        <div><span>${uiLabel("Signed Date", "签署日期")}</span><strong>${doc.signedAt || statusLabel("待签署")}</strong></div>
      </div>
      <div class="document-preview">
        <h3>${uiLabel("Document Preview", "文件预览")}</h3>
        <p>${uiLabel(`This signing link contains ${files.length} file(s). The production system will merge them into one PDF signing package and request customer signature page by page.`, `这个签署链接包含 ${files.length} 个文件。正式系统会把这些文件合并为一份 PDF 签署包，并逐页要求客户签署。`)}</p>
        <div class="file-chip-list">${files.map((file) => `<span class="file-chip">${file.fileName}</span>`).join("")}</div>
        <div class="merge-preview">${uiLabel("Client", "客户")}：${client?.name || "-"}　${uiLabel("Worker", "人员")}：${worker?.name || "-"}　${uiLabel("Process", "流程")}：${doc.stage}</div>
      </div>
      ${
        signed
          ? `<div class="signed-box">${uiLabel("Signed by", "已由")} ${doc.signedBy || client?.name || uiLabel("Customer", "客户")} ${uiLabel("on", "于")} ${doc.signedAt} ${uiLabel("and a copy has been sent to the customer.", "签署，副本已发送给客户。")}</div>`
          : `<form id="signatureForm" class="signature-form">
              <label>
                ${uiLabel("Signer Name", "签署人姓名")}
                <input name="signedBy" value="${client?.name || ""}" required />
              </label>
              <label class="check-option">
                <input name="confirm" type="checkbox" required />
                <span>${uiLabel("I confirm that I have read and agree to sign this document.", "我确认已阅读并同意签署此文件。")}</span>
              </label>
              <button class="primary-btn">${uiLabel("Confirm E-Signature", "确认电子签名")}</button>
            </form>`
      }
    </article>
  `;

  const form = $("#signatureForm");
  if (form) {
    form.onsubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      doc.status = "已签署";
      doc.signedAt = new Date().toISOString().slice(0, 10);
      doc.signedBy = formData.get("signedBy");
      doc.copySent = true;
      completeStepAndOpenNext(doc.maidId, doc.stage);
      save();
      renderDocuments();
      renderProcessDocuments();
      renderSignaturePortal();
    };
  }
}

function renderAll() {
  renderLanguageLabels();
  initFilters();
  renderFront();
  renderAdminAuth();
  renderAdminCategoryTabs();
  renderDashboard();
  renderAdminMaids();
  renderClients();
  renderTimelineSelector();
  renderProcessSelectors();
  renderTimeline();
  renderDocuments();
  renderUsers();
  renderDownloads();
  renderSignaturePortal();
}

function openDialog(title, fields, onSubmit) {
  const dialog = $("#recordDialog");
  $("#dialogTitle").textContent = title;
  $("#dialogFields").innerHTML = fields
    .map((field) => {
      if (field.type === "checkboxGroup") {
        return `
          <fieldset class="${field.full ? "full" : ""}">
            <legend>${field.label}</legend>
            <div class="checkbox-grid">
              ${field.options
                .map(
                  (option) => `
                    <label class="check-option">
                      <input type="checkbox" name="${field.name}" value="${option}" />
                      <span>${option}</span>
                    </label>
                  `
                )
                .join("")}
            </div>
            ${
              field.otherName
                ? `<label class="other-label">${field.otherPlaceholder || "其他"}<input class="other-input" name="${field.otherName}" /></label>`
                : ""
            }
          </fieldset>
        `;
      }
      const input =
        field.type === "textarea"
          ? `<textarea name="${field.name}" rows="3" ${field.required === false ? "" : "required"}>${field.value || ""}</textarea>`
          : `<input name="${field.name}" value="${field.value || ""}" ${field.required === false ? "" : "required"} />`;
      return `<label class="${field.full ? "full" : ""}">${field.label}${input}</label>`;
    })
    .join("");
  $("#recordForm").onsubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    fields
      .filter((field) => field.type === "checkboxGroup")
      .forEach((field) => {
        data[field.name] = formData.getAll(field.name);
      });
    try {
      await onSubmit(data);
      save();
      renderAll();
      dialog.close();
    } catch (error) {
      alert(error.message || "Request failed");
    }
  };
  dialog.showModal();
}

function bindEvents() {
  $$(".mode-switch button").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".mode-switch button").forEach((item) => item.classList.remove("active"));
      $$(".view").forEach((item) => item.classList.remove("active-view"));
      button.classList.add("active");
      $(`#${button.dataset.view}`).classList.add("active-view");
      if (button.dataset.view === "admin") {
        renderAdminAuth();
      }
    });
  });

  $("#adminLoginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const username = String(formData.get("username") || "").trim();
    const password = String(formData.get("password") || "");
    $("#loginError").textContent = "";
    try {
      const session = await apiRequest("/api/auth-login", {
        method: "POST",
        body: JSON.stringify({ username, password })
      });
      saveSession(session);
      form.reset();
      renderAll();
    } catch (error) {
      $("#loginError").textContent = error.message || uiLabel("Invalid username or password.", "用户名或密码错误。");
    }
  });

  $("#adminCategoryTabs").addEventListener("click", (event) => {
    const tabOnlyButton = event.target.closest("[data-admin-tab-only]");
    if (tabOnlyButton) {
      $$(".admin-tab").forEach((item) => item.classList.remove("active-admin-tab"));
      $(`#${tabOnlyButton.dataset.adminTabOnly}`).classList.add("active-admin-tab");
      renderAdminCategoryTabs();
      renderUsers();
      return;
    }
    const button = event.target.closest("[data-admin-category][data-admin-tab]");
    if (!button) return;
    activeAdminCategory = button.dataset.adminCategory || "女佣";
    activeMaidDetailId = "";
    $$(".admin-tab").forEach((item) => item.classList.remove("active-admin-tab"));
    $(`#${button.dataset.adminTab}`).classList.add("active-admin-tab");
    renderAdminCategoryTabs();
    renderAdminMaids();
    renderClients();
    renderTimelineSelector();
    renderProcessSelectors();
    renderTimeline();
    renderDocuments();
    renderDownloads();
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-admin-logout]")) {
      saveSession(null);
      $$(".admin-tab").forEach((item) => item.classList.remove("active-admin-tab"));
      $("#maids").classList.add("active-admin-tab");
      renderAll();
      return;
    }
  });

  $("#languageSwitch").addEventListener("click", (event) => {
    const button = event.target.closest("[data-lang]");
    if (!button) return;
    currentLanguage = button.dataset.lang || "zh";
    localStorage.setItem("bybridgeLanguage", currentLanguage);
    renderAll();
  });

  $("#categoryTabs").addEventListener("click", (event) => {
    const tab = event.target.closest(".category-tab");
    if (!tab) return;
    activeFrontCategory = tab.dataset.category || "女佣";
    renderFront();
  });

  document.addEventListener("click", (event) => {
    const termsLink = event.target.closest("[data-open-terms]");
    if (!termsLink) return;
    event.preventDefault();
    $("#termsBody").innerHTML = renderTermsOfUse();
    $("#termsDialog").showModal();
  });

  $("#termsClose").addEventListener("click", () => {
    $("#termsDialog").close();
  });

  ["#nationalityFilter", "#experienceFilter", "#skillFilter"].forEach((selector) => {
    $(selector).addEventListener("change", renderFront);
  });

  $("#timelineMaidSelect").addEventListener("change", renderTimeline);
  $("#processClientSelect").addEventListener("change", renderProcessDocuments);

  $("#maidPdfInput").addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    $("#importStatus").textContent = uiLabel("Parsing PDF and generating maid profile...", "正在解析 PDF 并生成女佣档案...");
    const formData = new FormData();
    formData.append("pdf", file);
    try {
      const response = await fetch("/api/import-biodata", {
        method: "POST",
        body: formData
      });
      if (!response.ok) {
        throw new Error("PDF 解析失败");
      }
      const result = await response.json();
      const maid = normalizeImportedMaid(result.maid);
      const existingIndex = state.maids.findIndex((item) => item.refNo && item.refNo === maid.refNo);
      if (existingIndex >= 0) {
        maid.id = state.maids[existingIndex].id;
        state.maids[existingIndex] = maid;
      } else {
        state.maids.unshift(maid);
      }
      state.timeline[maid.id] = state.timeline[maid.id] || [
        { step: "Interview", date: "TBC", status: "待处理", note: "Waiting for customer appointment after PDF import" },
        { step: "Training", date: "TBC", status: "待处理", note: "Waiting for interview confirmation" },
        { step: "Arrival in Singapore", date: "TBC", status: "待处理", note: "Waiting for document confirmation" },
        { step: "Medical Check", date: "TBC", status: "待处理", note: "Waiting for arrangement" }
      ];
      save();
      renderAll();
      $("#importStatus").textContent = uiLabel(`Imported: ${maid.name}`, `已导入：${maid.name}`);
    } catch (error) {
      $("#importStatus").textContent = uiLabel("Import failed: please confirm the page is opened with the new local preview service.", "导入失败：请确认使用新的本地预览服务打开页面。");
    } finally {
      event.target.value = "";
    }
  });

  $("#addMaidBtn").addEventListener("click", () => {
    if (activeAdminCategory !== "女佣") {
      const title = localized(categoryMeta[activeAdminCategory].title);
      openDialog(
        uiLabel(`Add ${title} Worker`, `新增${title}人员`),
        [
          { label: "Name", name: "name" },
          { label: "Nationality", name: "nationality" },
          { label: "Age", name: "age" },
          { label: "Role", name: "role" },
          { label: "Salary", name: "salary" },
          { label: "Years of experience", name: "experience" },
          { label: "Languages", name: "languages" },
          { label: "Skills, comma-separated", name: "skills", full: true }
        ],
        (data) => {
          const idPrefix = activeAdminCategory === "建筑" ? "bw" : "sw";
          const id = `${idPrefix}${Date.now()}`;
          state.workers.unshift({
            ...data,
            id,
            category: activeAdminCategory,
            refNo: `${activeAdminCategory === "建筑" ? "BW" : "SW"}-${String(Date.now()).slice(-4)}`,
            age: Number(data.age),
            experience: Number(data.experience),
            skills: splitList(data.skills),
            status: "可预约",
            photoUrl: ""
          });
          state.timeline[id] = defaultTimelineSteps.map((step) => ({ ...step }));
        }
      );
      return;
    }
    openDialog(
      uiLabel("Add Maid", "新增女佣"),
      [
        { label: uiLabel("Name", "姓名"), name: "name" },
        { label: uiLabel("Nationality", "国籍"), name: "nationality" },
        { label: uiLabel("Age", "年龄"), name: "age" },
        { label: uiLabel("Monthly Salary", "月薪"), name: "salary" },
        { label: uiLabel("Years of Experience", "经验年数"), name: "experience" },
        { label: uiLabel("Languages", "语言"), name: "languages" },
        { label: uiLabel("Passport No.", "护照号码"), name: "passportNo" },
        { label: uiLabel("Date of Birth", "出生日期"), name: "dateOfBirth" },
        { label: uiLabel("Religion", "宗教"), name: "religion" },
        { label: uiLabel("Marital Status", "婚姻状况"), name: "maritalStatus" },
        { label: uiLabel("Education", "学历"), name: "education" },
        { label: uiLabel("Height cm", "身高 cm"), name: "height" },
        { label: uiLabel("Weight kg", "体重 kg"), name: "weight" },
        { label: uiLabel("Home City", "家乡城市"), name: "originCity" },
        { label: uiLabel("Worked Countries, comma-separated", "经验国家，用逗号分隔"), name: "workedCountries", full: true },
        { label: uiLabel("Duties, comma-separated", "可做事项，用逗号分隔"), name: "duties", full: true },
        { label: uiLabel("Rest Day", "休息日"), name: "offDay" },
        { label: uiLabel("Medical Status", "体检状态"), name: "medicalStatus" },
        { label: uiLabel("Medical History, one per line: Item: Status", "医疗记录，每行格式：项目: 状态"), name: "medicalHistory", type: "textarea", full: true },
        {
          label: "18. Food handling preference",
          name: "foodHandlingOptions",
          type: "checkboxGroup",
          full: true,
          options: ["No pork", "No beef", "Can handle any food"],
          otherName: "foodHandlingOther",
          otherPlaceholder: "Others"
        },
        { label: uiLabel("Allergies / Fears / Other Restrictions", "过敏 / 怕什么 / 其他限制"), name: "allergies", type: "textarea", full: true },
        { label: uiLabel("Skills of FDW, one per line: Scope | Willing | Exp | Years | Rate | Observation", "Skills of FDW，每行格式：工作范围 | Willing | Exp | Years | Rate | Observation"), name: "skillAssessment", type: "textarea", full: true },
        {
          label: "B1. Method of evaluation of skills",
          name: "evaluationMethods",
          type: "checkboxGroup",
          full: true,
          options: skillEvaluationMethodOptions,
          otherName: "evaluationMethodOther",
          otherPlaceholder: "Other evaluation method"
        },
        {
          label: "Availability to be interviewed",
          name: "interviewAvailability",
          type: "checkboxGroup",
          full: true,
          options: [
            "FDW is not available for interview",
            "FDW can be interviewed by phone",
            "FDW can be interviewed by video-conference",
            "FDW can be interviewed in person"
          ]
        },
        { label: uiLabel("Overseas Employment History, one per line: From | To | Country | Employer | Duties", "海外工作经历，每行格式：From | To | Country | Employer | Duties"), name: "employmentHistory", type: "textarea", full: true },
        { label: uiLabel("Biodata Remarks", "Biodata 备注"), name: "biodataRemarks", type: "textarea", full: true },
        { label: uiLabel("Skills, comma-separated", "技能，用逗号分隔"), name: "skills", full: true }
      ],
      (data) => {
        const id = `m${Date.now()}`;
        state.maids.push({
          ...data,
          id,
          age: Number(data.age),
          salary: Number(data.salary),
          experience: Number(data.experience),
          skills: splitList(data.skills),
          duties: splitList(data.duties),
          workedCountries: splitList(data.workedCountries),
          medicalHistory: parsePairLines(data.medicalHistory),
          skillAssessment: parseSkillLines(data.skillAssessment),
          foodHandling: [...(data.foodHandlingOptions || []), data.foodHandlingOther].filter(Boolean).join("; "),
          evaluationMethods: [...(data.evaluationMethods || []), data.evaluationMethodOther].filter(Boolean),
          interviewAvailability: data.interviewAvailability || [],
          employmentHistory: parseEmploymentLines(data.employmentHistory),
          momHistory: [],
          height: Number(data.height),
          weight: Number(data.weight),
          status: "可预约"
        });
        state.timeline[id] = [
          { step: "Interview", date: "TBC", status: "待处理", note: "Waiting for customer appointment" },
          { step: "Training", date: "TBC", status: "待处理", note: "Waiting for previous step completion" },
          { step: "Arrival in Singapore", date: "TBC", status: "待处理", note: "Waiting for document confirmation" }
        ];
      }
    );
  });

  $("#addClientBtn").addEventListener("click", () => {
    openDialog(
      uiLabel("Add Client", "新增客户"),
      [
        { label: uiLabel("Client Name", "客户姓名"), name: "name" },
        { label: uiLabel("Phone", "联系电话"), name: "phone" },
        { label: uiLabel("Need", "需求"), name: "need" },
        { label: uiLabel("Budget", "预算"), name: "budget" }
      ],
      (data) => {
        const worker = workersForCategory()[0];
        state.clients.push({
          ...data,
          id: `c${Date.now()}`,
          assignedMaidId: worker?.id || "",
          hires: [
            {
              id: `h${Date.now()}`,
              maidId: worker?.id || "",
              contractNo: "To be generated",
              startDate: "TBC",
              status: "跟进中",
              consultant: "To be assigned",
              payments: [
                { stage: "Registration Fee", amount: 300, dueDate: "TBC", status: "待付款", paidDate: "" },
                { stage: "Interview Confirmation Deposit", amount: 700, dueDate: "TBC", status: "未到期", paidDate: "" },
                { stage: "Pre-Arrival Balance", amount: 1200, dueDate: "TBC", status: "未到期", paidDate: "" }
              ]
            }
          ]
        });
      }
    );
  });

  $("#addUserBtn").addEventListener("click", () => {
    if (!canManageAccounts()) return;
    openDialog(
      uiLabel("Add Employee Account", "新增员工账号"),
      [
        { label: uiLabel("Employee Name", "员工姓名"), name: "name" },
        { label: uiLabel("Username", "用户名"), name: "username" },
        { label: uiLabel("Password", "密码"), name: "password" }
      ],
      async (data) => {
        const username = String(data.username || "").trim();
        if (!username) {
          alert(uiLabel("Username is required.", "用户名不能为空。"));
          return;
        }
        await apiRequest("/api/accounts", {
          method: "POST",
          body: JSON.stringify({ name: data.name, username, password: data.password })
        });
      }
    );
  });

  $("#sendDocBtn").addEventListener("click", () => {
    openDialog(
      uiLabel("Send Signing Document", "发送签署文件"),
      [
        { label: uiLabel("Document Name", "文件名称"), name: "name" },
        { label: uiLabel("Trigger Stage", "触发阶段"), name: "stage" }
      ],
      (data) => {
        const firstClient = clientsForCategory()[0] || state.clients[0];
        const firstWorker = workersForCategory()[0];
        state.documents.push({
          ...data,
          id: `d${Date.now()}`,
          clientId: firstClient?.id || "",
          maidId: firstClient?.assignedMaidId || firstWorker?.id || "",
          status: "待签署",
          sentAt: new Date().toISOString().slice(0, 10),
          signedAt: "",
          copySent: false
        });
      }
    );
  });

  document.addEventListener("click", (event) => {
    const sendTemplateButton = event.target.closest("[data-send-template]");
    if (sendTemplateButton) {
      const stage = sendTemplateButton.dataset.sendTemplate;
      const select = document.querySelector(`[data-template-select="${stage}"]`);
      if (!$("#processClientSelect").value) {
        alert(uiLabel("Please add or select a client in the current category first.", "请先在当前分类下新增或选择客户。"));
        return;
      }
      const doc = createSigningDocumentFromTemplate(select?.value, stage);
      if (doc) {
        alert(uiLabel(`Signing link generated: ${currentSigningUrl(doc.id)}`, `签署链接已生成：${currentSigningUrl(doc.id)}`));
      }
      save();
      renderAll();
      return;
    }

    const copyButton = event.target.closest("[data-copy-link]");
    if (copyButton) {
      const url = currentSigningUrl(copyButton.dataset.copyLink);
      navigator.clipboard?.writeText(url);
      copyButton.textContent = uiLabel("Copied", "已复制");
      setTimeout(() => {
        copyButton.textContent = uiLabel("Copy Link", "复制链接");
      }, 1200);
      return;
    }

    const button = event.target.closest("[data-sign-doc]");
    if (!button) return;
    const doc = state.documents.find((item) => item.id === button.dataset.signDoc);
    doc.status = "已签署";
    doc.signedAt = new Date().toISOString().slice(0, 10);
    doc.copySent = true;
    completeStepAndOpenNext(doc.maidId, doc.stage);
    save();
    renderAll();
  });

  window.addEventListener("hashchange", renderSignaturePortal);
  window.addEventListener("storage", (event) => {
    if (event.key !== "maidAgencyState" || !event.newValue) return;
    Object.assign(state, normalizeState(JSON.parse(event.newValue)));
    renderAll();
  });
}

bindEvents();
renderAll();

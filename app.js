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
  foodHandling: "To be filled",
  allergies: "To be filled",
  physicalDisabilities: "",
  dietaryRestrictions: "",
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

const watiClientSeed = {
  id: "c-wati",
  name: "Employer",
  phone: "To be confirmed",
  need: "Domestic worker",
  budget: "To be confirmed",
  assignedMaidId: "m4",
  hires: [
    {
      id: "h-wati",
      maidId: "m4",
      contractNo: "To be generated",
      startDate: "TBC",
      status: "跟进中",
      consultant: "To be assigned",
      payments: []
    }
  ]
};

const maidEmploymentProcessSteps = [
  { step: "Interview", date: "TBC", status: "pending", note: "Start from interview and confirm suitability" },
  { step: "Training", date: "TBC", status: "pending", note: "Training after interview confirmation" },
  { step: "Arrival in Singapore", date: "TBC", status: "pending", note: "Waiting for arrival arrangement" },
  { step: "Medical Check", date: "TBC", status: "pending", note: "Arrange medical check after arrival" },
  { step: "Pre-deployment Training", date: "TBC", status: "pending", note: "Pre-deployment briefing and final documents" },
  { step: "Deployment (Sent to employer's house and start working)", date: "TBC", status: "pending", note: "Final deployment stage" }
];

const stageSigningRequirements = {
  Interview: [
    {
      templateTitle: "Biodata",
      signerRole: "Employer",
      signatureArea: "Employer confirmation / biodata acknowledgement section"
    },
    {
      templateTitle: "Quotation",
      signerRole: "Employer",
      signatureArea: "Quotation acceptance / customer signature section"
    }
  ],
  Training: [
    {
      templateTitle: "Work Permit Application Form",
      signerRole: "Employer",
      signatureArea: "Employer declaration and signature section"
    }
  ],
  "Pre-deployment Training": [
    {
      templateTitle: "PDPA Statement",
      signerRole: "Employer",
      signatureArea: "PDPA acknowledgement / consent signature section"
    },
    {
      templateTitle: "Employment Contract",
      signerRole: "Employer",
      signatureArea: "Employer signature section"
    },
    {
      templateTitle: "Employment Contract",
      signerRole: "FDW",
      signatureArea: "FDW signature section"
    }
  ]
};

const defaultTimelineSteps = [
  { step: "Interview", date: "TBC", status: "待处理", note: "Waiting for customer appointment" },
  { step: "Document Confirmation", date: "TBC", status: "待处理", note: "Waiting for documents to be filled and confirmed" },
  { step: "Contract Signing", date: "TBC", status: "待处理", note: "Waiting to send signing link" },
  { step: "Deployment Arrangement", date: "TBC", status: "待处理", note: "Waiting for signature completion" }
];

function normalizeTimelineStage(item) {
  if (!item) return item;
  const statusMap = {
    待处理: "pending",
    进行中: "in process",
    已完成: "completed"
  };
  const normalizedItem = {
    ...item,
    status: statusMap[item.status] || item.status || "pending",
    requirementsConfigured: Boolean(item.requirementsConfigured || item.customRequirements || (item.requirements || []).length),
    requirements: (item.requirements || []).map((requirement) => ({
      templateTitle: requirement.templateTitle || requirement.name || "Document",
      signerRole: requirement.signerRole || "Employer",
      signatureArea: requirement.signatureArea || "Signature section"
    }))
  };
  if (item.step === "Deployment Training") {
    return {
      ...normalizedItem,
      step: "Pre-deployment Training"
    };
  }
  if (!["Periodic Medical Check", "Deployment"].includes(item.step)) return normalizedItem;
  return {
    ...normalizedItem,
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

function isTestImportedMaid(maid) {
  const refNo = String(maid?.refNo || "").trim().toUpperCase();
  return ["PDF-625006", "PDF-017080", "DEMO-001", "DEMO-002", "DEMO-003"].includes(refNo);
}

function removeTestImportedMaids(data) {
  const removedIds = new Set((data.maids || []).filter(isTestImportedMaid).map((maid) => maid.id));
  if (!removedIds.size) return;
  data.maids = (data.maids || []).filter((maid) => !removedIds.has(maid.id));
  data.clients = (data.clients || [])
    .map((client) => ({
      ...client,
      hires: (client.hires || []).filter((hire) => !removedIds.has(hire.maidId))
    }))
    .filter((client) => client.hires.length || client.assignedMaidId && !removedIds.has(client.assignedMaidId));
  data.documents = (data.documents || []).filter((doc) => !removedIds.has(doc.maidId));
  data.requirementDrafts = (data.requirementDrafts || []).filter((draft) => !removedIds.has(draft.maidId));
  removedIds.forEach((id) => {
    delete data.timeline?.[id];
  });
}

function isLegacyDefaultEmptyStep(data, maidId, item, defaultStepNames) {
  const status = item.status || "pending";
  const hasDocuments = (data.documents || []).some((doc) => doc.maidId === maidId && doc.stage === item.step);
  return (
    defaultStepNames.has(item.step) &&
    item.date === "TBC" &&
    ["pending", "待处理"].includes(status) &&
    !item.requirementsConfigured &&
    !(item.requirements || []).length &&
    !hasDocuments
  );
}

function pruneLegacyDefaultProcessSteps(data) {
  const defaultStepNames = new Set([...maidEmploymentProcessSteps, ...defaultTimelineSteps].map((step) => step.step));
  const startedMaidIds = new Set();
  (data.clients || []).forEach((client) => {
    (client.hires || []).forEach((hire) => {
      if (hire.processStarted && hire.maidId) startedMaidIds.add(hire.maidId);
    });
  });
  startedMaidIds.forEach((maidId) => {
    const items = data.timeline?.[maidId] || [];
    if (items.length <= 1) return;
    data.timeline[maidId] = items.filter((item, index) => index === 0 || !isLegacyDefaultEmptyStep(data, maidId, item, defaultStepNames));
  });
}

function normalizeState(savedState) {
  const data = savedState || seed;
  const needsWatiReset = data.workflowVersion !== "wati-employment-process-v1";
  if (needsWatiReset) {
    const seedWati = seed.maids.find((maid) => maid.id === "m4");
    const existingWati = (data.maids || []).find((maid) => maid.id === "m4" || maid.refNo === seedWati?.refNo);
    const existingClient = (data.clients || []).find((client) => client.assignedMaidId === "m4" || (client.hires || []).some((hire) => hire.maidId === "m4"));
    data.maids = [{ ...seedWati, ...(existingWati || {}) }];
    data.clients = [{ ...watiClientSeed, ...(existingClient || {}), assignedMaidId: "m4" }];
    data.timeline = { m4: maidEmploymentProcessSteps.map((step) => ({ ...step })) };
    data.documents = [];
    data.workers = [];
    data.workflowVersion = "wati-employment-process-v1";
  }
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
  data.maids = (data.maids || []).map((maid) => {
    const seedMaid = seed.maids.find((item) => item.id === maid.id);
    const mergedMaid = {
      ...defaultMaidDetails,
      ...(seedMaid || {}),
      ...maid,
      workedCountries: maid.workedCountries || seedMaid?.workedCountries || [],
      duties: maid.duties || seedMaid?.duties || maid.skills || [],
      skillAssessment: maid.skillAssessment || seedMaid?.skillAssessment || [],
      medicalHistory: maid.medicalHistory || seedMaid?.medicalHistory || [],
      employmentHistory: maid.employmentHistory || seedMaid?.employmentHistory || [],
      momHistory: maid.momHistory || seedMaid?.momHistory || [],
      evaluationMethods: maid.evaluationMethods || seedMaid?.evaluationMethods || [],
      interviewAvailability: maid.interviewAvailability || seedMaid?.interviewAvailability || []
    };
    return {
      ...mergedMaid,
      physicalDisabilities: maid.physicalDisabilities || medicalRecordStatus(mergedMaid, "Physical disabilities"),
      dietaryRestrictions: maid.dietaryRestrictions || medicalRecordStatus(mergedMaid, "Dietary restrictions")
    };
  });
  removeTestImportedMaids(data);
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
  const realClients = data.clients.filter((client) => client.id !== "c-wati" && client.name !== "Employer");
  data.clients = realClients.length ? realClients : [];
  data.timeline = data.timeline || seed.timeline;
  data.timeline.m4 = (data.timeline.m4?.length ? data.timeline.m4 : maidEmploymentProcessSteps).map((item) => normalizeTimelineStage({ ...item }));
  data.workers = [];
  data.requirementDrafts = data.requirementDrafts || [];
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
  data.clients.forEach((client) => {
    client.clientType = normalizeClientType(client.clientType || "new");
    (client.hires || []).forEach((hire) => {
      hire.clientType = normalizeClientType(hire.clientType || client.clientType);
      hire.processStarted = Boolean(hire.processStarted);
      hire.processStartedAt = hire.processStartedAt || "";
      const hiredMaid = data.maids.find((maid) => maid.id === hire.maidId);
      if (hiredMaid && isAvailableWorker(hiredMaid)) {
        hiredMaid.status = "已雇佣";
      }
      hire.payments = (hire.payments || []).map((payment, index) => ({
        id: payment.id || `p${client.id}${hire.id}${index}`,
        ...payment,
        status: normalizePaymentStatus(payment.status)
      }));
    });
  });
  pruneLegacyDefaultProcessSteps(data);
  data.workflowVersion = "wati-employment-process-v1";
  return data;
}

function parseStoredJson(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "null");
  } catch (error) {
    return null;
  }
}

function cloneState(value) {
  return JSON.parse(JSON.stringify(value || {}));
}

const initialLocalState = parseStoredJson("maidAgencyState");
const state = normalizeState(initialLocalState ? cloneState(initialLocalState) : null);
let activeFrontCategory = "女佣";
let activeFrontDetailId = "";
let activeAdminCategory = "女佣";
let activeMaidDetailId = "";
let activeProcessMaidId = "";
let activeProcessClientId = "";
let currentLanguage = localStorage.getItem("bybridgeLanguage") || "en";
let currentSession = parseStoredJson("bybridgeAdminSession");
let activeViewId = ["front", "admin"].includes(localStorage.getItem("bybridgeActiveView")) ? localStorage.getItem("bybridgeActiveView") : "front";
let activeAdminTabId = localStorage.getItem("bybridgeAdminTab") || "maids";
let adminSidebarCollapsed = localStorage.getItem("bybridgeAdminSidebar") === "collapsed";
let adminCategoryCollapsed = parseStoredJson("bybridgeAdminCategoryCollapsed") || Object.fromEntries(Object.keys(categoryMeta).map((key) => [key, true]));
let adminAccountsCache = [];
let remoteSaveTimer = null;
let isHydratingSharedState = false;

function saveLocalState() {
  localStorage.setItem("maidAgencyState", JSON.stringify(state));
}

function scheduleRemoteSave() {
  if (isHydratingSharedState || !currentSession?.token) return;
  clearTimeout(remoteSaveTimer);
  remoteSaveTimer = setTimeout(() => {
    persistSharedState();
  }, 500);
}

const save = () => {
  saveLocalState();
  scheduleRemoteSave();
};
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
      培训中: "培训中",
      已雇佣: "已雇佣",
      employed: "已雇佣",
      pending: "Pending",
      "in process": "In Process",
      completed: "Completed"
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
      培训中: "Training",
      已雇佣: "Employed",
      employed: "Employed",
      pending: "Pending",
      "in process": "In Process",
      completed: "Completed"
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

function shortLabel(value) {
  return String(value || "").trim().slice(0, 1).toUpperCase();
}

function saveAdminCategoryCollapsed() {
  localStorage.setItem("bybridgeAdminCategoryCollapsed", JSON.stringify(adminCategoryCollapsed));
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

function activateView(viewId, persist = true) {
  const nextView = ["front", "admin"].includes(viewId) ? viewId : "front";
  activeViewId = nextView;
  $$(".mode-switch button").forEach((button) => button.classList.toggle("active", button.dataset.view === nextView));
  $$(".view").forEach((item) => item.classList.remove("active-view"));
  $(`#${nextView}`)?.classList.add("active-view");
  if (persist) {
    localStorage.setItem("bybridgeActiveView", nextView);
  }
  if (nextView === "admin") {
    renderAdminAuth();
  }
}

function activateAdminTab(tabId, persist = true) {
  const nextTab = $(`#${tabId}`) ? tabId : "maids";
  activeAdminTabId = nextTab;
  $$(".admin-tab").forEach((item) => item.classList.remove("active-admin-tab"));
  $(`#${nextTab}`)?.classList.add("active-admin-tab");
  if (persist) {
    localStorage.setItem("bybridgeAdminTab", nextTab);
  }
}

async function apiRequest(path, options = {}) {
  const apiPath = apiUrl(path);
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

function apiUrl(path) {
  const isStaticPreview =
    location.protocol === "file:" ||
    (["127.0.0.1", "localhost"].includes(location.hostname) && path === "/api/import-biodata");
  return isStaticPreview && path.startsWith("/") ? `https://fdw-one.vercel.app${path}` : path;
}

function identityValue(item, fields = ["id", "refNo", "name"]) {
  for (const field of fields) {
    const value = String(item?.[field] || "").trim().toLowerCase();
    if (value) return value;
  }
  return "";
}

function mergeList(sharedItems = [], localItems = [], fields) {
  const merged = new Map();
  localItems.forEach((item) => {
    const key = identityValue(item, fields);
    if (key) merged.set(key, item);
  });
  sharedItems.forEach((item) => {
    const key = identityValue(item, fields);
    if (key) merged.set(key, { ...(merged.get(key) || {}), ...item });
  });
  return [...merged.values()];
}

function mergeSharedState(sharedRaw, localRaw, options = {}) {
  const local = normalizeState(localRaw ? cloneState(localRaw) : null);
  if (!sharedRaw) return local;
  const shared = normalizeState(cloneState(sharedRaw));
  if (!options.includeLocalOnly) return shared;
  return normalizeState({
    ...local,
    ...shared,
    maids: mergeList(shared.maids, local.maids, ["refNo", "id", "name"]),
    clients: mergeList(shared.clients, local.clients, ["id", "name"]),
    documents: mergeList(shared.documents, local.documents, ["id"]),
    requirementDrafts: mergeList(shared.requirementDrafts, local.requirementDrafts, ["id"]),
    timeline: { ...(local.timeline || {}), ...(shared.timeline || {}) }
  });
}

async function persistSharedState() {
  if (!currentSession?.token) return;
  try {
    await apiRequest("/api/state", {
      method: "PUT",
      body: JSON.stringify({ state })
    });
  } catch (error) {
    console.warn("Shared state save failed", error);
  }
}

async function hydrateSharedState() {
  try {
    isHydratingSharedState = true;
    const response = await fetch(apiUrl("/api/state"), {
      headers: currentSession?.token ? { Authorization: `Bearer ${currentSession.token}` } : {}
    });
    if (!response.ok) return;
    const data = await response.json();
    const localRaw = parseStoredJson("maidAgencyState");
    const mergedState = mergeSharedState(data.state, localRaw, { includeLocalOnly: !data.state });
    Object.keys(state).forEach((key) => delete state[key]);
    Object.assign(state, mergedState);
    state.maids = state.maids.map((maid) => normalizeUppercaseText(maid));
    state.clients = state.clients.map((client) => normalizeUppercaseText(client));
    saveLocalState();
    renderAll();
    if (currentSession?.token && !data.state) {
      await persistSharedState();
    }
  } catch (error) {
    console.warn("Shared state load failed", error);
  } finally {
    isHydratingSharedState = false;
  }
}

function displayValue(value, fallback = "-") {
  if (Array.isArray(value)) return value.length ? value.join(currentLanguage === "zh" ? "、" : ", ") : fallback;
  if (value === 0) return "0";
  return value || fallback;
}

const preserveCaseKeys = new Set([
  "id",
  "name",
  "refNo",
  "passportNo",
  "fin",
  "wpNo",
  "photoUrl",
  "username",
  "password",
  "currentPassword",
  "newPassword",
  "token",
  "role",
  "status"
]);

function lowerCaseIfAllCaps(value) {
  if (typeof value !== "string") return value;
  const letters = value.match(/[A-Za-z]/g) || [];
  if (letters.length < 3) return value;
  const hasLowerCase = /[a-z]/.test(value);
  const upperCaseLetters = letters.filter((letter) => /[A-Z]/.test(letter)).length;
  return !hasLowerCase && upperCaseLetters / letters.length > 0.8 ? value.toLowerCase() : value;
}

function normalizeUppercaseText(value, key = "") {
  if (Array.isArray(value)) return value.map((item) => normalizeUppercaseText(item, key));
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([childKey, childValue]) => [
        childKey,
        preserveCaseKeys.has(childKey) ? childValue : normalizeUppercaseText(childValue, childKey)
      ])
    );
  }
  return preserveCaseKeys.has(key) ? value : lowerCaseIfAllCaps(value);
}

function heightWeightValue(maid) {
  const height = maid.height ? `${maid.height} cm` : "";
  const weight = maid.weight ? `${maid.weight} kg` : "";
  return [height, weight].filter(Boolean).join(" / ") || "-";
}

function medicalRecordStatus(maid, itemName) {
  return (maid.medicalHistory || []).find((item) => String(item.item || "").toLowerCase() === itemName.toLowerCase())?.status || "";
}

const separateHealthRecordItems = new Set(["physical disabilities", "dietary restrictions"]);

function editableMedicalHistory(maid) {
  return (maid.medicalHistory || []).filter(
    (item) => !separateHealthRecordItems.has(String(item.item || "").trim().toLowerCase())
  );
}

function foodHandlingParts(value) {
  const text = String(value || "");
  const options = [];
  if (/no\s*pork/i.test(text)) options.push("No pork");
  if (/no\s*beef/i.test(text)) options.push("No beef");
  const other = text
    .replace(/preferences?\s*[:：]?/i, "")
    .replace(/no\s*pork/gi, "")
    .replace(/no\s*beef/gi, "")
    .replace(/[;,:：/]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
  return { options, other: other && !/^(to be filled|-|none|nil|n\/a)$/i.test(other) ? other : "" };
}

function formatFoodHandling(options = [], other = "") {
  return [...options, other].map((item) => String(item || "").trim()).filter(Boolean).join("; ");
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
  renderAdminSidebarState();
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
  if (/^(blob:|data:)/i.test(String(url))) return url;
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
  if (previewOpen) {
    previewOpen.href = previewUrl || "#";
    previewOpen.removeAttribute("download");
  }
  previewFrame.src = previewUrl;
  previewDialog.showModal();
}

function closePdfPreview() {
  if (!previewDialog || !previewFrame) return;
  previewDialog.close();
  const previousUrl = previewFrame.dataset.objectUrl || "";
  if (previousUrl) URL.revokeObjectURL(previousUrl);
  previewFrame.dataset.objectUrl = "";
  previewFrame.src = "";
  if (previewOpen) previewOpen.href = "#";
}

if (previewClose) {
  previewClose.addEventListener("click", closePdfPreview);
}

if (previewDialog) {
  previewDialog.addEventListener("close", () => {
    const previousUrl = previewFrame?.dataset.objectUrl || "";
    if (previousUrl) URL.revokeObjectURL(previousUrl);
    if (previewFrame) previewFrame.dataset.objectUrl = "";
    if (previewFrame) previewFrame.src = "";
    if (previewOpen) previewOpen.href = "#";
  });
}

const recordDialog = $("#recordDialog");
if (recordDialog) {
  recordDialog.addEventListener("close", () => {
    $("#recordForm").onsubmit = null;
  });
}

function pdfText(value) {
  return String(displayValue(value)).replace(/[^\x09\x0A\x0D\x20-\x7E]/g, " ");
}

function escapePdfString(value) {
  return pdfText(value).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrapPdfText(value, width, fontSize = 9) {
  const text = pdfText(value);
  const maxChars = Math.max(8, Math.floor(width / (fontSize * 0.52)));
  const lines = [];
  text.split(/\n/).forEach((paragraph) => {
    const words = paragraph.split(/\s+/).filter(Boolean);
    let line = "";
    words.forEach((word) => {
      if (!line) {
        line = word;
        return;
      }
      if (`${line} ${word}`.length <= maxChars) {
        line = `${line} ${word}`;
      } else {
        lines.push(line);
        line = word;
      }
    });
    lines.push(line || "-");
  });
  return lines.length ? lines : ["-"];
}

function makePdfDocument() {
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const margin = 34;
  const contentWidth = pageWidth - margin * 2;
  const pages = [];
  let commands = [];
  let y = margin;

  const write = (command) => commands.push(command);
  const pdfY = (value) => pageHeight - value;
  const color = (hex) => {
    const clean = hex.replace("#", "");
    const r = parseInt(clean.slice(0, 2), 16) / 255;
    const g = parseInt(clean.slice(2, 4), 16) / 255;
    const b = parseInt(clean.slice(4, 6), 16) / 255;
    return `${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)}`;
  };
  const addPage = () => {
    if (commands.length) pages.push(commands.join("\n"));
    commands = [];
    y = margin;
  };
  const ensureSpace = (height) => {
    if (y + height > pageHeight - margin) addPage();
  };
  const text = (value, x, top, options = {}) => {
    const size = options.size || 9;
    const font = options.bold ? "F2" : "F1";
    const fill = color(options.color || "#1f2925");
    write(`BT /${font} ${size} Tf ${fill} rg ${x.toFixed(2)} ${pdfY(top).toFixed(2)} Td (${escapePdfString(value)}) Tj ET`);
  };
  const line = (x1, y1, x2, y2, stroke = "#d8e2dd") => {
    write(`${color(stroke)} RG ${x1.toFixed(2)} ${pdfY(y1).toFixed(2)} m ${x2.toFixed(2)} ${pdfY(y2).toFixed(2)} l S`);
  };
  const rect = (x, top, width, height, options = {}) => {
    if (options.fill) {
      write(`${color(options.fill)} rg ${x.toFixed(2)} ${(pdfY(top) - height).toFixed(2)} ${width.toFixed(2)} ${height.toFixed(2)} re f`);
    }
    if (options.stroke !== false) {
      write(`${color(options.stroke || "#d8e2dd")} RG ${x.toFixed(2)} ${(pdfY(top) - height).toFixed(2)} ${width.toFixed(2)} ${height.toFixed(2)} re S`);
    }
  };
  const heading = (title) => {
    ensureSpace(32);
    y += y === margin ? 0 : 10;
    text(title, margin, y + 8, { size: 13, bold: true, color: "#17613e" });
    y += 24;
  };
  const table = (headers, rows, widths) => {
    const rowPadding = 8;
    const headerHeight = 24;
    ensureSpace(headerHeight + 12);
    rect(margin, y, contentWidth, headerHeight, { fill: "#edf5f1", stroke: "#d8e2dd" });
    let x = margin;
    headers.forEach((header, index) => {
      text(header, x + rowPadding, y + 15, { size: 8.5, bold: true, color: "#55655f" });
      x += widths[index];
    });
    y += headerHeight;
    rows.forEach((row) => {
      const wrapped = row.map((cell, index) => wrapPdfText(cell, widths[index] - rowPadding * 2, 8.5));
      const lineCount = Math.max(...wrapped.map((lines) => lines.length));
      const rowHeight = Math.max(28, lineCount * 12 + 12);
      ensureSpace(rowHeight + 4);
      rect(margin, y, contentWidth, rowHeight, { fill: "#ffffff", stroke: "#dfe7e3" });
      x = margin;
      wrapped.forEach((lines, index) => {
        lines.forEach((lineText, lineIndex) => {
          text(lineText, x + rowPadding, y + 15 + lineIndex * 11, { size: 8.5, bold: index === 0 && headers.length === 2 });
        });
        x += widths[index];
      });
      y += rowHeight + 4;
    });
  };
  const infoGrid = (pairs) => {
    const cellWidth = contentWidth / 2;
    const rowPadding = 8;
    for (let index = 0; index < pairs.length; index += 2) {
      const rowPairs = [pairs[index] || ["", ""], pairs[index + 1] || ["", ""]];
      const wrappedCells = rowPairs.map(([label, value]) => {
        const labelLines = wrapPdfText(label, cellWidth - rowPadding * 2, 7.5);
        const valueLines = wrapPdfText(value, cellWidth - rowPadding * 2, 8.8);
        return { labelLines, valueLines };
      });
      const rowHeight = Math.max(
        34,
        ...wrappedCells.map((cell) => cell.labelLines.length * 9 + cell.valueLines.length * 11 + 14)
      );
      ensureSpace(rowHeight + 4);
      rect(margin, y, contentWidth, rowHeight, { fill: "#ffffff", stroke: "#dfe7e3" });
      line(margin + cellWidth, y, margin + cellWidth, y + rowHeight, "#d8e2dd");
      wrappedCells.forEach((cell, cellIndex) => {
        const x = margin + cellIndex * cellWidth + rowPadding;
        cell.labelLines.forEach((lineText, lineIndex) => {
          text(lineText, x, y + 11 + lineIndex * 9, { size: 7.5, bold: true, color: "#61706a" });
        });
        const valueTop = y + 13 + cell.labelLines.length * 9;
        cell.valueLines.forEach((lineText, lineIndex) => {
          text(lineText, x, valueTop + lineIndex * 11, { size: 8.8, color: "#1f2925" });
        });
      });
      y += rowHeight + 4;
    }
  };
  const finish = () => {
    pages.push(commands.join("\n"));
    const objects = [];
    const addObject = (body) => {
      objects.push(body);
      return objects.length;
    };
    const catalogId = addObject("<< /Type /Catalog /Pages 2 0 R >>");
    const pagesId = addObject("");
    const fontRegularId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
    const fontBoldId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
    const pageIds = [];
    pages.forEach((content) => {
      const contentId = addObject(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
      const pageId = addObject(`<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontRegularId} 0 R /F2 ${fontBoldId} 0 R >> >> /Contents ${contentId} 0 R >>`);
      pageIds.push(pageId);
    });
    objects[pagesId - 1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;
    let output = "%PDF-1.4\n";
    const offsets = [0];
    objects.forEach((body, index) => {
      offsets.push(output.length);
      output += `${index + 1} 0 obj\n${body}\nendobj\n`;
    });
    const xrefOffset = output.length;
    output += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
    offsets.slice(1).forEach((offset) => {
      output += `${String(offset).padStart(10, "0")} 00000 n \n`;
    });
    output += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
    return new Blob([output], { type: "application/pdf" });
  };

  return { addPage, ensureSpace, text, line, rect, heading, table, infoGrid, finish, get y() { return y; }, set y(value) { y = value; }, margin, contentWidth, pageWidth, pageHeight };
}

function maidPdfFileName(maid) {
  return `${String(maid.refNo || maid.name || "worker").replace(/[^a-z0-9-]+/gi, "_")}_biodata.pdf`;
}

function buildMaidProfilePdf(maid) {
  const pdf = makePdfDocument();

  pdf.text("Bybridge Job Agency System", pdf.margin, 42, { size: 18, bold: true });
  pdf.text("FDW Biodata Summary", pdf.margin, 62, { size: 11, color: "#17613e", bold: true });
  pdf.text(`Generated: ${new Date().toISOString().slice(0, 10)}`, 430, 62, { size: 8.5, color: "#61706a" });
  pdf.line(pdf.margin, 76, pdf.pageWidth - pdf.margin, 76, "#cddbd5");
  pdf.y = 92;
  pdf.text(maid.name || "-", pdf.margin, pdf.y, { size: 16, bold: true });
  pdf.text(`${maid.refNo || "-"} | Domestic Worker | ${maid.nationality || "-"} | ${maid.age || "-"} years old`, pdf.margin, pdf.y + 17, { size: 9.5, color: "#55655f" });
  pdf.y += 34;

  pdf.heading("Personal Particulars");
  pdf.infoGrid([
    ["Name", maid.name],
    ["Reference No.", maid.refNo],
    ["Nationality", maid.nationality],
    ["Date of Birth", maid.dateOfBirth],
    ["Age", maid.age],
    ["Religion", maid.religion],
    ["Marital Status", maid.maritalStatus],
    ["Education", maid.education],
    ["Height / Weight", heightWeightValue(maid)],
    ["Birth / Home City", maid.originCity],
    ["Home Address", maid.homeAddress],
    ["No. of Siblings", maid.siblings],
    ["Worked Countries", displayValue(maid.workedCountries)],
    ["Salary", maid.salary ? `S$${maid.salary}` : ""],
    ["Rest Day", maid.offDay],
    ["Languages", maid.languages]
  ]);

  pdf.heading("Passport and Work Permit Information");
  pdf.infoGrid([
    ["Passport No.", maid.passportNo],
    ["FIN", maid.fin],
    ["WP No.", maid.wpNo],
    ["Repatriation Airport", maid.repatriationAirport]
  ]);

  pdf.heading("Health, Food Handling and Restrictions");
  pdf.infoGrid([
    ["Allergies (if any)", maid.allergies],
    ["Physical disabilities", maid.physicalDisabilities || medicalRecordStatus(maid, "Physical disabilities")],
    ["Dietary restrictions", maid.dietaryRestrictions || medicalRecordStatus(maid, "Dietary restrictions")],
    ["Food handling preferences", maid.foodHandling],
    ["Medical History", editableMedicalHistory(maid).map((item) => `${item.item}: ${item.status}`).join("; ")]
  ]);

  pdf.heading("Method of Evaluation");
  {
    const selectedMethods = new Set(maid.evaluationMethods || []);
    pdf.table(
      ["Selected", "Method"],
      skillEvaluationMethodOptions.map((item) => [selectedMethods.has(item) ? "[x]" : "[ ]", item]),
      [65, 485]
    );
  }

  pdf.heading("Scope of Work and Skills");
  pdf.table(
    ["Scope of Work", "Willing", "Experience", "Years", "Rating", "Remarks"],
    (maid.skillAssessment || []).map((item) => [item.area, item.willingness, item.experience, item.years, item.rating, item.observation]),
    [150, 50, 65, 45, 50, 190]
  );

  pdf.heading("Overseas Employment History");
  pdf.table(
    ["Period", "Country", "Employer", "Duties"],
    (maid.employmentHistory || []).length
      ? (maid.employmentHistory || []).map((item) => [[item.from, item.to].filter(Boolean).join(" - ") || "-", item.country, item.employer, item.duties])
      : [["-", "-", "-", "No overseas employment history recorded."]],
    [105, 90, 120, 235]
  );

  pdf.heading("MOM Singapore Records");
  pdf.table(
    ["Period", "Employer", "Industry", "Remarks"],
    (maid.momHistory || []).length
      ? (maid.momHistory || []).map((item) => [[item.startDate, item.endDate].filter(Boolean).join(" - ") || "-", item.employer, item.industry, item.remarks])
      : [["-", "-", "-", "No MOM records recorded."]],
    [105, 130, 105, 210]
  );

  pdf.heading("Interview Availability and Biodata Remarks");
  pdf.infoGrid([
    ["Interview Availability", displayValue(maid.interviewAvailability)],
    ["Biodata Remarks", maid.biodataRemarks || "-"]
  ]);

  pdf.ensureSpace(120);
  pdf.heading("Signature Section");
  const signatureTop = pdf.y + 14;
  const signatureWidth = (pdf.contentWidth - 28) / 3;
  [
    ["FDW", maid.name || ""],
    ["Employer", ""],
    ["EA Personnel Name / Registration No.", ""]
  ].forEach((item, index) => {
    const x = pdf.margin + index * (signatureWidth + 14);
    pdf.rect(x, signatureTop, signatureWidth, 76, { fill: "#ffffff", stroke: "#cddbd5" });
    pdf.text(item[0], x + 8, signatureTop + 16, { size: 8.5, bold: true, color: "#17613e" });
    pdf.line(x + 8, signatureTop + 48, x + signatureWidth - 8, signatureTop + 48, "#7b8883");
    pdf.text("Signature", x + 8, signatureTop + 61, { size: 7.5, color: "#61706a" });
    if (item[1]) pdf.text(item[1], x + 8, signatureTop + 73, { size: 7.5, color: "#61706a" });
  });
  pdf.y = signatureTop + 92;
  pdf.text("EA License No. 15C7627 | Bybridge Consultancy Pte Ltd", pdf.margin, pdf.y, { size: 8, color: "#61706a" });

  return pdf.finish();
}

function previewMaidProfilePdf(maidId) {
  const maid = maidById(maidId);
  if (!maid || !previewDialog || !previewFrame) return;
  const previousUrl = previewFrame.dataset.objectUrl || "";
  if (previousUrl) URL.revokeObjectURL(previousUrl);
  const url = URL.createObjectURL(buildMaidProfilePdf(maid));
  previewFrame.dataset.objectUrl = url;
  if (previewTitle) previewTitle.textContent = `${maid.name} Biodata PDF`;
  if (previewOpen) {
    previewOpen.href = url;
    previewOpen.download = maidPdfFileName(maid);
  }
  previewFrame.src = url;
  previewDialog.showModal();
}

function downloadMaidProfilePdf(maidId) {
  const maid = maidById(maidId);
  if (!maid) return;
  const url = URL.createObjectURL(buildMaidProfilePdf(maid));
  const link = document.createElement("a");
  link.href = url;
  link.download = maidPdfFileName(maid);
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
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
  const previewPdfTarget = event.target.closest("[data-preview-maid-pdf]");
  if (previewPdfTarget) {
    previewMaidProfilePdf(previewPdfTarget.dataset.previewMaidPdf);
    return;
  }

  const downloadPdfTarget = event.target.closest("[data-download-maid-pdf]");
  if (downloadPdfTarget) {
    downloadMaidProfilePdf(downloadPdfTarget.dataset.downloadMaidPdf);
    return;
  }

  const editSectionTarget = event.target.closest("[data-edit-maid-section]");
  if (editSectionTarget) {
    openMaidProfileSectionDialog(editSectionTarget.dataset.maidId || activeMaidDetailId, editSectionTarget.dataset.editMaidSection);
    return;
  }

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

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function rowEditorTemplate(columns = []) {
  return `${columns.map((column) => column.width || "minmax(110px, 1fr)").join(" ")} 42px`;
}

function renderRowEditorLine(field, row = {}) {
  return `
    <div class="row-editor-line" style="--row-editor-columns: ${rowEditorTemplate(field.columns)}">
      ${(field.columns || [])
        .map((column) => {
          const value = row[column.name] ?? "";
          const control =
            column.type === "textarea"
              ? `<textarea data-row-key="${column.name}" rows="${column.rows || 2}" placeholder="${escapeHtml(column.placeholder || column.label)}">${escapeHtml(value)}</textarea>`
              : `<input data-row-key="${column.name}" value="${escapeHtml(value)}" placeholder="${escapeHtml(column.placeholder || column.label)}" />`;
          return `
            <label class="row-editor-cell">
              <span>${column.label}</span>
              ${control}
            </label>
          `;
        })
        .join("")}
      <button class="mini-btn row-editor-remove" type="button" data-remove-row-editor aria-label="${uiLabel("Remove row", "删除此行")}">×</button>
    </div>
  `;
}

function paymentsForClient(client) {
  return (client.hires || []).flatMap((hire) => hire.payments || []);
}

function defaultPaymentItems() {
  return [
    { id: `p${Date.now()}1`, stage: "Registration Fee", amount: 300, dueDate: new Date().toISOString().slice(0, 10), status: "not paid", paidDate: "" },
    { id: `p${Date.now()}2`, stage: "Interview Confirmation Deposit", amount: 700, dueDate: "TBC", status: "not paid", paidDate: "" },
    { id: `p${Date.now()}3`, stage: "Pre-Arrival Balance", amount: 1200, dueDate: "TBC", status: "not paid", paidDate: "" }
  ];
}

function normalizePaymentStatus(status) {
  if (status === "已付款" || status === "paid") return "paid";
  return "not paid";
}

function isPaymentDue(payment) {
  if (normalizePaymentStatus(payment.status) === "paid") return false;
  if (!payment.dueDate || payment.dueDate === "TBC") return false;
  return payment.dueDate <= new Date().toISOString().slice(0, 10);
}

function paymentDisplayStatus(payment) {
  if (normalizePaymentStatus(payment.status) === "paid") {
    return { label: uiLabel("Paid", "已付款"), className: "" };
  }
  return isPaymentDue(payment)
    ? { label: uiLabel("Payment Due", "已到期"), className: "red" }
    : { label: uiLabel("Not Due", "未到期"), className: "amber" };
}

function clientTypeLabel(type) {
  return normalizeClientType(type) === "transfer" ? "Transfer" : "New";
}

function findClientHirePayment(clientId, hireId, paymentId) {
  const client = clientById(clientId);
  const hire = (client?.hires || []).find((item) => item.id === hireId);
  const payment = (hire?.payments || []).find((item) => item.id === paymentId);
  return { client, hire, payment };
}

function createHireForClient(client, maidId) {
  return addHireForClient(client, maidId, client.clientType || "new");
}

function normalizeClientType(type) {
  return type === "transfer" || type === "transferred" ? "transfer" : "new";
}

function addHireForClient(client, maidId, clientType = "new") {
  if (!maidId) return null;
  client.assignedMaidId = client.assignedMaidId || maidId;
  client.hires = client.hires || [];
  const hire = {
    id: `h${Date.now()}${Math.round(Math.random() * 1000)}`,
    maidId,
    clientType: normalizeClientType(clientType),
    contractNo: "To be generated",
    startDate: "TBC",
    status: "跟进中",
    consultant: "To be assigned",
    processStarted: false,
    processStartedAt: "",
    payments: defaultPaymentItems()
  };
  client.hires.push(hire);
  const maid = maidById(maidId);
  if (maid && normalizeClientType(clientType) === "new") {
    maid.status = "已雇佣";
  }
  return hire;
}

function replaceHireForClient(client, maidId, clientType = "new") {
  client.assignedMaidId = maidId;
  client.hires = [
    {
      id: `h${Date.now()}`,
      maidId,
      clientType: normalizeClientType(clientType),
      contractNo: "To be generated",
      startDate: "TBC",
      status: "跟进中",
      consultant: "To be assigned",
      processStarted: false,
      processStartedAt: "",
      payments: defaultPaymentItems()
    }
  ];
}

function isAvailableWorker(worker) {
  return ["可预约", "available", "Available"].includes(worker.status);
}

function isEmployedWorker(worker) {
  return ["已雇佣", "employed", "Employed"].includes(worker.status);
}

function maidSelectOptions(clientType = "new") {
  const normalizedType = normalizeClientType(clientType);
  return workersForCategory("女佣")
    .filter((worker) => (normalizedType === "transfer" ? isEmployedWorker(worker) : isAvailableWorker(worker)))
    .map((worker) => ({ value: worker.id, label: `${worker.name} · ${statusLabel(worker.status)}` }));
}

function bindClientTypeMaidSelect() {
  const form = $("#recordForm");
  const typeSelect = form?.elements?.clientType;
  const maidSelect = form?.elements?.maidId;
  if (!typeSelect || !maidSelect) return;

  const includeBlank = Array.from(maidSelect.options).some((option) => option.value === "");
  const blankLabel = uiLabel("Not selected yet", "暂不选择");
  const refreshOptions = () => {
    const options = maidSelectOptions(typeSelect.value);
    maidSelect.innerHTML = [
      ...(includeBlank ? [{ value: "", label: blankLabel }] : []),
      ...options
    ]
      .map((option) => `<option value="${option.value}">${option.label}</option>`)
      .join("");
    if (!options.length && !includeBlank) {
      maidSelect.innerHTML = `<option value="">${uiLabel("No matching maid available", "没有符合条件的女佣")}</option>`;
    }
  };

  typeSelect.addEventListener("change", refreshOptions);
  refreshOptions();
}

function openAssignMaidDialog(clientId) {
  const client = clientById(clientId);
  if (!client) return;
  openDialog(
    uiLabel("Select Maid", "选择女佣"),
    [
      { label: uiLabel("Client", "客户"), name: "clientName", value: client.name },
      {
        label: uiLabel("Client Type", "客户类型"),
        name: "clientType",
        type: "select",
        options: [
          { value: "new", label: "New" },
          { value: "transfer", label: "Transfer" }
        ],
        value: "new"
      },
      { label: uiLabel("Maid", "女佣"), name: "maidId", type: "select", options: maidSelectOptions("new") }
    ],
    (data) => {
      addHireForClient(client, data.maidId, data.clientType);
    }
  );
  bindClientTypeMaidSelect();
}

function openPaymentDialog(clientId, hireId, paymentId = "") {
  const { hire, payment } = findClientHirePayment(clientId, hireId, paymentId);
  if (!hire) return;
  openDialog(
    payment ? uiLabel("Edit Fee", "编辑收费") : uiLabel("Add Fee", "新增收费"),
    [
      { label: uiLabel("Fee Name", "收费名称"), name: "stage", value: payment?.stage || "" },
      { label: uiLabel("Amount", "金额"), name: "amount", value: payment?.amount || "" },
      { label: uiLabel("Due Date", "到期日"), name: "dueDate", value: payment?.dueDate || "TBC" },
      {
        label: uiLabel("Payment Status", "付款状态"),
        name: "status",
        type: "select",
        value: normalizePaymentStatus(payment?.status),
        options: [
          { value: "not paid", label: uiLabel("Not Paid", "未付款") },
          { value: "paid", label: uiLabel("Paid", "已付款") }
        ]
      }
    ],
    (data) => {
      const nextPayment = {
        id: payment?.id || `p${Date.now()}`,
        stage: data.stage,
        amount: Number(data.amount || 0),
        dueDate: data.dueDate || "TBC",
        status: normalizePaymentStatus(data.status),
        paidDate: normalizePaymentStatus(data.status) === "paid" ? new Date().toISOString().slice(0, 10) : ""
      };
      if (payment) {
        Object.assign(payment, nextPayment);
      } else {
        hire.payments = hire.payments || [];
        hire.payments.push(nextPayment);
      }
    }
  );
}

function openMaidProfileSectionDialog(maidId, section) {
  const maid = maidById(maidId);
  if (!maid) return;

  if (section === "employment") {
    openDialog(
      uiLabel("Edit Overseas Employment History", "编辑海外工作经历"),
      [
        {
          label: uiLabel("Overseas Employment Records", "海外工作记录"),
          name: "employmentHistory",
          type: "rowEditor",
          full: true,
          rows: maid.employmentHistory || [],
          columns: [
            { name: "from", label: "From", width: "92px" },
            { name: "to", label: "To", width: "92px" },
            { name: "country", label: "Country", width: "130px" },
            { name: "employer", label: "Employer", width: "150px" },
            { name: "duties", label: "Duties", width: "minmax(220px, 1fr)", type: "textarea" }
          ]
        }
      ],
      (data) => {
        maid.employmentHistory = data.employmentHistory;
      }
    );
    return;
  }

  if (section === "personal") {
    openDialog(
      uiLabel("Edit Personal Particulars", "编辑个人资料"),
      [
        { label: "Name", name: "name", value: maid.name || "" },
        { label: "Reference No.", name: "refNo", value: maid.refNo || "" },
        { label: "Nationality", name: "nationality", value: maid.nationality || "" },
        { label: "Date of Birth", name: "dateOfBirth", value: maid.dateOfBirth || "" },
        { label: "Age", name: "age", value: maid.age || "" },
        { label: "Religion", name: "religion", value: maid.religion || "" },
        { label: "Marital Status", name: "maritalStatus", value: maid.maritalStatus || "" },
        { label: "Education", name: "education", value: maid.education || "" },
        { label: "Height cm", name: "height", value: maid.height || "" },
        { label: "Weight kg", name: "weight", value: maid.weight || "" },
        { label: "Birth / Home City", name: "originCity", value: maid.originCity || "" },
        { label: "Home Address", name: "homeAddress", value: maid.homeAddress || "", full: true },
        { label: "No. of Siblings", name: "siblings", value: maid.siblings || "" },
        { label: "Worked Countries, comma-separated", name: "workedCountries", value: displayValue(maid.workedCountries, ""), full: true },
        { label: "Salary", name: "salary", value: maid.salary || "" },
        { label: "Rest Day", name: "offDay", value: maid.offDay || "" },
        { label: "Languages", name: "languages", value: maid.languages || "", full: true }
      ],
      (data) => {
        Object.assign(maid, {
          name: data.name,
          refNo: data.refNo,
          nationality: data.nationality,
          dateOfBirth: data.dateOfBirth,
          age: Number(data.age || 0),
          religion: data.religion,
          maritalStatus: data.maritalStatus,
          education: data.education,
          height: Number(data.height || 0),
          weight: Number(data.weight || 0),
          originCity: data.originCity,
          homeAddress: data.homeAddress,
          siblings: data.siblings,
          workedCountries: splitList(data.workedCountries),
          salary: Number(data.salary || 0),
          offDay: data.offDay,
          languages: data.languages
        });
      }
    );
    return;
  }

  if (section === "passport") {
    openDialog(
      uiLabel("Edit Passport and Work Permit Information", "编辑证件与准证信息"),
      [
        { label: "Passport No.", name: "passportNo", value: maid.passportNo || "" },
        { label: "FIN", name: "fin", value: maid.fin || "" },
        { label: "WP No.", name: "wpNo", value: maid.wpNo || "" },
        { label: "Repatriation Airport", name: "repatriationAirport", value: maid.repatriationAirport || "", full: true }
      ],
      (data) => {
        Object.assign(maid, data);
      }
    );
    return;
  }

  if (section === "health") {
    const foodHandling = foodHandlingParts(maid.foodHandling);
    openDialog(
      uiLabel("Edit Health, Food Handling and Restrictions", "编辑健康、饮食与限制"),
      [
        { label: "Allergies (if any)", name: "allergies", value: maid.allergies || "", type: "textarea", full: true, required: false },
        { label: "Physical disabilities", name: "physicalDisabilities", value: maid.physicalDisabilities || medicalRecordStatus(maid, "Physical disabilities"), full: true, required: false },
        { label: "Dietary restrictions", name: "dietaryRestrictions", value: maid.dietaryRestrictions || medicalRecordStatus(maid, "Dietary restrictions"), full: true, required: false },
        {
          label: "Food handling preferences",
          name: "foodHandlingOptions",
          type: "checkboxGroup",
          full: true,
          options: ["No pork", "No beef"],
          value: foodHandling.options,
          otherName: "foodHandlingOther",
          otherValue: foodHandling.other,
          otherPlaceholder: "Others"
        },
        {
          label: "Medical History",
          name: "medicalHistory",
          type: "rowEditor",
          full: true,
          rows: editableMedicalHistory(maid),
          columns: [
            { name: "item", label: "Item", width: "minmax(180px, 1fr)" },
            { name: "status", label: "Status", width: "minmax(120px, 1fr)" }
          ]
        }
      ],
      (data) => {
        maid.allergies = data.allergies;
        maid.physicalDisabilities = data.physicalDisabilities;
        maid.dietaryRestrictions = data.dietaryRestrictions;
        maid.foodHandling = formatFoodHandling(data.foodHandlingOptions, data.foodHandlingOther);
        maid.medicalHistory = data.medicalHistory;
      }
    );
    return;
  }

  if (section === "skills") {
    openDialog(
      uiLabel("Edit Scope of Work and Skills", "编辑工作范围与能力"),
      [
        {
          label: "Duties / skill tags, comma-separated",
          name: "duties",
          value: displayValue(maid.duties || maid.skills, ""),
          full: true,
          required: false
        },
        {
          label: "Method of evaluation of skills (multiple choice)",
          name: "evaluationMethods",
          type: "checkboxGroup",
          full: true,
          options: skillEvaluationMethodOptions,
          value: maid.evaluationMethods || []
        },
        {
          label: "Skills of FDW",
          name: "skillAssessment",
          type: "rowEditor",
          full: true,
          rows: maid.skillAssessment || [],
          columns: [
            { name: "area", label: "Scope of Work", width: "minmax(180px, 1.4fr)" },
            { name: "willingness", label: "Willing", width: "80px" },
            { name: "experience", label: "Experience", width: "90px" },
            { name: "years", label: "Years", width: "70px" },
            { name: "rating", label: "Rating", width: "80px" },
            { name: "observation", label: "Remarks", width: "minmax(220px, 1.6fr)", type: "textarea" }
          ]
        }
      ],
      (data) => {
        maid.duties = splitList(data.duties);
        maid.skills = splitList(data.duties);
        maid.evaluationMethods = data.evaluationMethods || [];
        maid.skillAssessment = data.skillAssessment;
      }
    );
    return;
  }

  if (section === "mom") {
    openDialog(
      uiLabel("Edit MOM Singapore Records", "编辑 MOM 新加坡记录"),
      [
        {
          label: uiLabel("MOM Singapore Records", "MOM 新加坡记录"),
          name: "momHistory",
          type: "rowEditor",
          full: true,
          rows: maid.momHistory || [],
          columns: [
            { name: "startDate", label: "From", width: "92px" },
            { name: "endDate", label: "To", width: "92px" },
            { name: "employer", label: "Employer", width: "160px" },
            { name: "industry", label: "Industry", width: "130px" },
            { name: "remarks", label: "Remarks", width: "minmax(220px, 1fr)", type: "textarea" }
          ]
        }
      ],
      (data) => {
        maid.momHistory = data.momHistory;
      }
    );
    return;
  }

  if (section === "interview") {
    openDialog(
      uiLabel("Edit Interview Availability and Biodata Remarks", "编辑面试方式与 Biodata 备注"),
      [
        {
          label: uiLabel("Interview Availability, one per line", "面试方式，每行一条"),
          name: "interviewAvailability",
          type: "textarea",
          full: true,
          required: false,
          value: formatListLines(maid.interviewAvailability)
        },
        {
          label: uiLabel("Biodata Remarks", "Biodata 备注"),
          name: "biodataRemarks",
          type: "textarea",
          full: true,
          required: false,
          value: maid.biodataRemarks || ""
        }
      ],
      (data) => {
        maid.interviewAvailability = splitList(data.interviewAvailability);
        maid.biodataRemarks = data.biodataRemarks || "";
      }
    );
  }
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
  if (category === "女佣") return state.clients;
  const workerIds = new Set(workersForCategory(category).map((worker) => worker.id));
  return state.clients.filter(
    (client) => (client.assignedMaidId && workerIds.has(client.assignedMaidId)) || (client.hires || []).some((hire) => workerIds.has(hire.maidId))
  );
}

function defaultTimelineForWorker(workerId) {
  const worker = workerById(workerId);
  const base = worker?.category === "女佣" ? maidEmploymentProcessSteps : defaultTimelineSteps;
  return base.map((step) => normalizeTimelineStage({ ...step }));
}

function firstTimelineStepForWorker(workerId) {
  return defaultTimelineForWorker(workerId).slice(0, 1);
}

function timelineItemsForMaid(maidId) {
  state.timeline[maidId] = state.timeline[maidId]?.length ? state.timeline[maidId] : defaultTimelineForWorker(maidId);
  return state.timeline[maidId];
}

function findTimelineStep(maidId, stage) {
  return timelineItemsForMaid(maidId).find((item) => item.step === stage);
}

function hireForClientMaid(clientId, maidId) {
  const client = clientById(clientId);
  const hire = (client?.hires || []).find((item) => item.maidId === maidId);
  return { client, hire };
}

function selectedProcessHire() {
  const maidId = $("#timelineMaidSelect").value || workersForCategory()[0]?.id || "";
  const clientId = $("#processClientSelect").value || firstClientForMaid(maidId)?.id || "";
  return { maidId, clientId, ...hireForClientMaid(clientId, maidId) };
}

function requirementsForStage(maidId, stage) {
  const step = findTimelineStep(maidId, stage);
  if (step?.requirementsConfigured) return step.requirements || [];
  return stageSigningRequirements[stage] || [];
}

function startEmploymentProcess(clientId, hireId) {
  const client = clientById(clientId);
  const hire = (client?.hires || []).find((item) => item.id === hireId);
  if (!client || !hire) return;
  hire.processStarted = true;
  hire.processStartedAt = hire.processStartedAt || new Date().toISOString().slice(0, 10);
  hire.status = "进行中";
  state.timeline[hire.maidId] = firstTimelineStepForWorker(hire.maidId);
  const items = state.timeline[hire.maidId];
  if (items[0]) {
    items[0].status = items[0].status === "completed" ? "completed" : "in process";
    items[0].date = items[0].date === "TBC" ? hire.processStartedAt : items[0].date;
  }
}

function focusEmploymentProcess(clientId, maidId) {
  activeAdminTabId = "process";
  activeProcessMaidId = maidId;
  activeProcessClientId = clientId;
  localStorage.setItem("bybridgeAdminTab", "process");
  activateAdminTab("process", false);
  renderTimelineSelector();
  if ($("#timelineMaidSelect")) $("#timelineMaidSelect").value = maidId;
  renderProcessSelectors();
  if ($("#processClientSelect")) $("#processClientSelect").value = clientId;
  renderTimeline();
}

function markStepInProgress(maidId, stage) {
  const step = findTimelineStep(maidId, stage);
  if (!step || step.status === "completed") return;
  step.status = "in process";
  step.note = step.note || "Signing document sent";
}

function completeStepAndOpenNext(maidId, stage) {
  const items = timelineItemsForMaid(maidId);
  const index = items.findIndex((item) => item.step === stage);
  if (index < 0) return;
  const stageDocs = documentsForStage(maidId, stage);
  const requirements = requirementsForStage(maidId, stage);
  const allStageDocsSigned = requirements.length
    ? requirements.every((requirement) => documentsForRequirement(maidId, stage, requirement)?.status === "已签署")
    : stageDocs.length > 0 && stageDocs.every((doc) => doc.status === "已签署");
  if (!allStageDocsSigned) {
    items[index].status = "in process";
    items[index].note = "Waiting for all required signatures";
    return;
  }
  items[index].status = "completed";
  items[index].note = "All required signatures completed";
  const next = items[index + 1];
  if (next && next.status !== "completed" && next.status !== "in process") {
    next.status = "pending";
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

function formatEmploymentLines(items = []) {
  return items
    .map((item) => [item.from, item.to, item.country, item.employer, item.duties].map((value) => value || "").join(" | "))
    .join("\n");
}

function parseMomHistoryLines(value) {
  return String(value || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [startDate = "", endDate = "", employer = "", industry = "", remarks = ""] = line.split("|").map((item) => item.trim());
      return { startDate, endDate, employer, industry, remarks };
    });
}

function formatMomHistoryLines(items = []) {
  return items
    .map((item) => [item.startDate, item.endDate, item.employer, item.industry, item.remarks].map((value) => value || "").join(" | "))
    .join("\n");
}

function formatListLines(value) {
  return Array.isArray(value) ? value.join("\n") : String(value || "");
}

function normalizeImportedMaid(maid) {
  return normalizeUppercaseText({
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
  });
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

function signerLabel(role) {
  if (role === "FDW") return "FDW";
  if (role === "Employer") return uiLabel("Employer", "雇主");
  return role || uiLabel("Signer", "签署方");
}

function signingRequirementOptions() {
  const byKey = new Map();
  Object.values(stageSigningRequirements).flat().forEach((requirement) => {
    byKey.set(requirementKey(requirement), requirement);
  });
  formTemplates
    .filter((template) => template.categories.includes(activeAdminCategory))
    .forEach((template) => {
      const requirement = {
        templateTitle: template.title,
        signerRole: "Employer",
        signatureArea: "Signature section"
      };
      byKey.set(requirementKey(requirement), requirement);
    });
  return [...byKey.values()].map((requirement) => ({
    value: requirementKey(requirement),
    label: `${requirement.templateTitle} · ${signerLabel(requirement.signerRole)}`,
    requirement
  }));
}

function requirementFromOptionValue(value) {
  return signingRequirementOptions().find((option) => option.value === value)?.requirement || null;
}

function requirementKey(requirement) {
  return `${requirement.templateTitle}::${requirement.signerRole}`;
}

function requirementDraftId(maidId, clientId, stage, requirement) {
  return `${maidId}::${clientId}::${stage}::${requirementKey(requirement)}`;
}

function requirementDraftFor(maidId, clientId, stage, requirement) {
  const id = requirementDraftId(maidId, clientId, stage, requirement);
  return (state.requirementDrafts || []).find((draft) => draft.id === id);
}

function saveRequirementDraft(maidId, clientId, stage, requirement, data) {
  state.requirementDrafts = state.requirementDrafts || [];
  const id = requirementDraftId(maidId, clientId, stage, requirement);
  const existing = state.requirementDrafts.find((draft) => draft.id === id);
  const draft = {
    id,
    maidId,
    clientId,
    stage,
    requirementKey: requirementKey(requirement),
    templateTitle: requirement.templateTitle,
    signerRole: data.signerRole || requirement.signerRole,
    signatureArea: data.signatureArea || requirement.signatureArea,
    fillNotes: data.fillNotes || "",
    filledAt: new Date().toISOString().slice(0, 10)
  };
  if (existing) {
    Object.assign(existing, draft);
  } else {
    state.requirementDrafts.push(draft);
  }
  markStepInProgress(maidId, stage);
  save();
  renderAll();
}

function documentsForRequirement(maidId, stage, requirement) {
  const key = requirementKey(requirement);
  return documentsForStage(maidId, stage).find((doc) => doc.requirementKey === key);
}

function createSigningDocumentFromRequirement(requirement, stageOverride) {
  const template = formTemplates.find((item) => item.title === requirement.templateTitle);
  if (!template) return null;
  const maidId = $("#timelineMaidSelect").value || workersForCategory()[0]?.id || "";
  const clientId = $("#processClientSelect").value || firstClientForMaid(maidId)?.id || "";
  const existing = documentsForRequirement(maidId, stageOverride, requirement);
  if (existing) return existing;
  const draft = requirementDraftFor(maidId, clientId, stageOverride, requirement);
  if (!draft) {
    throw new Error(uiLabel("Please fill and confirm this document before sending the signing link.", "请先填写并确认这份文件，再发送签署链接。"));
  }
  const id = `d${Date.now()}${Math.round(Math.random() * 1000)}`;
  const doc = {
    id,
    clientId,
    maidId,
    name: requirement.templateTitle,
    stage: stageOverride,
    status: "待签署",
    sentAt: new Date().toISOString().slice(0, 10),
    signedAt: "",
    signedBy: "",
    copySent: false,
    fileName: `${requirement.templateTitle}.pdf`,
    fileType: "PDF",
    files: [{ fileName: `${requirement.templateTitle}.pdf`, fileType: "PDF", uploadedAt: new Date().toISOString().slice(0, 10), templateUrl: template.url }],
    signingLink: `#sign=${id}`,
    source: "template",
    requirementKey: requirementKey(requirement),
    signerRole: draft.signerRole,
    signatureArea: draft.signatureArea,
    fillNotes: draft.fillNotes,
    filledAt: draft.filledAt,
    mergeFields: {
      clientName: clientById(clientId)?.name || "",
      clientPhone: clientById(clientId)?.phone || "",
      maidName: workerById(maidId)?.name || "",
      maidRefNo: workerById(maidId)?.refNo || "",
      maidPassport: workerById(maidId)?.passportNo || ""
    }
  };
  state.documents.unshift(doc);
  markStepInProgress(maidId, stageOverride);
  save();
  renderAll();
  return doc;
}

function requirementPreviewHtml(maidId, clientId, stage, requirement) {
  const maid = workerById(maidId);
  const client = clientById(clientId);
  const draft = requirementDraftFor(maidId, clientId, stage, requirement);
  const doc = documentsForRequirement(maidId, stage, requirement);
  const filled = Boolean(draft || doc);
  const signed = doc?.status === "已签署";
  const rows = [
    ["Document", requirement.templateTitle],
    ["Stage", stage],
    ["Client", client?.name || "-"],
    ["Worker", maid?.name || "-"],
    ["Reference No.", maid?.refNo || "-"],
    ["Signer", signerLabel(doc?.signerRole || draft?.signerRole || requirement.signerRole)],
    ["Signature Area", doc?.signatureArea || draft?.signatureArea || requirement.signatureArea],
    ["Fill Status", filled ? "Filled" : "Not filled"],
    ["Filled Date", doc?.filledAt || draft?.filledAt || "-"],
    ["Signing Status", doc ? statusLabel(doc.status) : "Not sent"],
    ["Signed Date", doc?.signedAt || "-"],
    ["Fill Notes", doc?.fillNotes || draft?.fillNotes || "Information will be filled from worker and client profile."]
  ];
  return `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: Arial, sans-serif; color: #1f2824; margin: 36px; }
          h1 { color: #17613e; margin: 0 0 8px; font-size: 28px; }
          .sub { color: #61706a; margin-bottom: 24px; }
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #d9e4df; padding: 12px 14px; text-align: left; vertical-align: top; }
          th { width: 28%; background: #eef5f1; color: #4f6059; }
          .signature { margin-top: 36px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
          .sig-box { border: 1px solid #d9e4df; padding: 14px; height: 90px; }
          .line { border-bottom: 1px solid #66736d; margin-top: 38px; }
        </style>
      </head>
      <body>
        <h1>${escapeHtml(requirement.templateTitle)}</h1>
        <div class="sub">${escapeHtml(stage)} · ${signed ? "Signed" : doc ? "Sent for signature" : filled ? "Filled, not sent" : "Draft preview"}</div>
        <table>${rows.map(([label, value]) => `<tr><th>${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`).join("")}</table>
        <div class="signature">
          ${["FDW", "Employer", "EA Personnel Name / Registration No."].map((label) => `<div class="sig-box"><strong>${label}</strong><div class="line"></div><small>Signature</small></div>`).join("")}
        </div>
      </body>
    </html>`;
}

function openRequirementPreview(maidId, clientId, stage, requirement) {
  if (!previewDialog || !previewFrame) return;
  const previousUrl = previewFrame.dataset.objectUrl || "";
  if (previousUrl) URL.revokeObjectURL(previousUrl);
  const url = URL.createObjectURL(new Blob([requirementPreviewHtml(maidId, clientId, stage, requirement)], { type: "text/html" }));
  previewFrame.dataset.objectUrl = url;
  if (previewTitle) previewTitle.textContent = `${requirement.templateTitle} Preview`;
  if (previewOpen) {
    previewOpen.href = url;
    previewOpen.removeAttribute("download");
  }
  previewFrame.src = url;
  previewDialog.showModal();
}

function openAddProcessStepDialog(maidId, clientId) {
  const requirementOptions = signingRequirementOptions();
  openDialog(
    uiLabel("Add Employment Process Step", "新增雇佣流程步骤"),
    [
      { label: uiLabel("Step Name", "步骤名称"), name: "step" },
      { label: uiLabel("Target Date", "目标日期"), name: "date", value: "TBC", required: false },
      { label: uiLabel("Step Note", "步骤说明"), name: "note", value: "Custom process step", required: false, full: true },
      {
        label: uiLabel("Forms to Fill / Sign", "需要填写 / 签署的表格"),
        name: "documents",
        type: "checkboxGroup",
        full: true,
        options: requirementOptions
      }
    ],
    (data) => {
      const stepName = String(data.step || "").trim();
      if (!stepName) throw new Error(uiLabel("Step name is required.", "步骤名称不能为空。"));
      const requirements = (data.documents || []).map(requirementFromOptionValue).filter(Boolean);
      timelineItemsForMaid(maidId).push(
        normalizeTimelineStage({
          step: stepName,
          date: data.date || "TBC",
          status: "pending",
          note: data.note || "Custom process step",
          requirementsConfigured: true,
          requirements
        })
      );
      const { hire } = hireForClientMaid(clientId, maidId);
      if (hire) hire.processStarted = true;
    }
  );
}

function openStepFormsDialog(maidId, stage) {
  const step = findTimelineStep(maidId, stage);
  if (!step) return;
  const currentRequirements = requirementsForStage(maidId, stage);
  const currentValues = currentRequirements.map(requirementKey);
  openDialog(
    uiLabel(`Select Forms for ${stage}`, `选择 ${stage} 的表格`),
    [
      {
        label: uiLabel("Forms to Fill / Sign", "需要填写 / 签署的表格"),
        name: "documents",
        type: "checkboxGroup",
        full: true,
        value: currentValues,
        options: signingRequirementOptions()
      }
    ],
    (data) => {
      step.requirements = (data.documents || []).map(requirementFromOptionValue).filter(Boolean);
      step.requirementsConfigured = true;
    }
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
  if (status === "已完成" || status === "已签署" || status === "completed") return "";
  if (status === "进行中" || status === "in process") return "amber";
  return "red";
}

function timelineClass(status) {
  if (status === "已完成" || status === "completed") return "";
  if (status === "进行中" || status === "in process") return "pending";
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
    { id: "maids", label: uiLabel("Personnel Management", "人员管理"), short: "P" },
    { id: "clients", label: uiLabel("Client Management", "客户管理"), short: "C" },
    { id: "process", label: uiLabel("Employment Process", "雇佣流程"), short: "E" },
    { id: "documents", label: uiLabel("Signed Documents", "签署文件"), short: "S" },
    { id: "downloads", label: uiLabel("Form Downloads", "表格下载"), short: "F" }
  ];
  const activeTab = activeAdminTabId || document.querySelector(".admin-tab.active-admin-tab")?.id || "maids";
  $("#adminCategoryTabs").innerHTML = Object.keys(categoryMeta)
    .map((key) => {
      const count = workersForCategory(key).length;
      const categoryTitle = localized(categoryMeta[key].title);
      const isCollapsed = Boolean(adminCategoryCollapsed[key]);
      return `
        <section class="admin-category-group ${isCollapsed ? "collapsed" : ""}">
          <button class="admin-category-heading" type="button" data-toggle-admin-category="${key}" aria-expanded="${String(!isCollapsed)}">
            <span data-short="${shortLabel(categoryTitle)}">${categoryTitle}</span>
            <em>${count}</em>
          </button>
          <div class="admin-module-list">
            ${modules
              .map(
                (module) => `
                  <button class="${key === activeAdminCategory && module.id === activeTab ? "active" : ""}" type="button" data-admin-category="${key}" data-admin-tab="${module.id}" data-short="${module.short}" title="${module.label}">
                    ${module.label}
                  </button>
                `
              )
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");
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
  renderAdminSidebarState();
}

function renderAdminSidebarState() {
  const layout = $("#adminLayout");
  const toggle = $("#adminSidebarToggle");
  if (!layout || !toggle) return;
  layout.classList.toggle("sidebar-collapsed", adminSidebarCollapsed);
  toggle.setAttribute("aria-expanded", String(!adminSidebarCollapsed));
  $("#adminSidebarToggleText").textContent = adminSidebarCollapsed
    ? uiLabel("Expand Menu", "展开菜单")
    : uiLabel("Collapse Menu", "收起菜单");
}

function renderAdminAuth() {
  const loggedIn = isAdminLoggedIn();
  $("#adminAuth").style.display = loggedIn ? "none" : "grid";
  document.querySelector("#admin .admin-layout").style.display = loggedIn ? "grid" : "none";
  if (!loggedIn) {
    $("#accountMenu").innerHTML = "";
    return;
  }
  const user = currentUser();
  $("#accountMenu").innerHTML = `
    <details class="account-popover">
      <summary>
        <span>${user.name}</span>
        <small>${user.role === "admin" ? uiLabel("Administrator", "管理员") : uiLabel("Employee", "员工")}</small>
      </summary>
      <div class="account-panel">
        <button type="button" data-account-profile>${uiLabel("Profile", "个人资料")}</button>
        <button type="button" data-account-team>${uiLabel("Manage Team", "管理团队")}</button>
        <button type="button" data-account-password>${uiLabel("Change Password", "修改密码")}</button>
        <button type="button" data-admin-logout>${uiLabel("Logout", "退出登录")}</button>
      </div>
    </details>
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
  const canEditProfileSections = !isFrontDetail && isAdminLoggedIn();
  const selectedEvaluationMethods = new Set(maid.evaluationMethods || []);
  const medicalRows = editableMedicalHistory(maid)
    .map((item) => {
      const status = item.status || "-";
      const clearStatus = ["no", "n/a", "-", "nil", "none"].includes(String(status).trim().toLowerCase());
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
          <span>${item.remarks || "-"}</span>
        </div>
      `
    )
    .join("");

  return `
    <article class="detail-card maid-detail-card">
      <div class="detail-toolbar">
        <button class="mini-btn" type="button" ${isFrontDetail ? "data-back-front-list" : "data-back-maid-list"}>${isFrontDetail ? uiLabel("Back to Worker List", "返回人员列表") : uiLabel("Back to Personnel List", "返回人员列表")}</button>
        <div class="detail-toolbar-actions">
          ${!isFrontDetail ? `<button class="mini-btn" type="button" data-preview-maid-pdf="${maid.id}">${uiLabel("Preview PDF", "预览 PDF")}</button>` : ""}
          ${!isFrontDetail ? `<button class="mini-btn" type="button" data-download-maid-pdf="${maid.id}">${uiLabel("Download PDF", "下载 PDF")}</button>` : ""}
          <span class="tag ${maid.status === "面试中" ? "amber" : ""}">${statusLabel(maid.status)}</span>
        </div>
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
        <div class="detail-section-title">
          <h3>${uiLabel("Personal Particulars", "个人资料")}</h3>
          ${canEditProfileSections ? `<button class="mini-btn" type="button" data-edit-maid-section="personal" data-maid-id="${maid.id}">${uiLabel("Edit", "编辑")}</button>` : ""}
        </div>
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
        <div class="detail-section-title">
          <h3>${uiLabel("Passport and Work Permit Information", "证件与准证信息")}</h3>
          ${canEditProfileSections ? `<button class="mini-btn" type="button" data-edit-maid-section="passport" data-maid-id="${maid.id}">${uiLabel("Edit", "编辑")}</button>` : ""}
        </div>
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
        <div class="detail-section-title">
          <h3>${uiLabel("Health, Food Handling and Restrictions", "健康、饮食与限制")}</h3>
          ${canEditProfileSections ? `<button class="mini-btn" type="button" data-edit-maid-section="health" data-maid-id="${maid.id}">${uiLabel("Edit", "编辑")}</button>` : ""}
        </div>
        <div class="profile-grid maid-fixed-grid">
          ${detailFields([
            ["Allergies (if any)", maid.allergies],
            ["Physical disabilities", maid.physicalDisabilities || medicalRecordStatus(maid, "Physical disabilities")],
            ["Dietary restrictions", maid.dietaryRestrictions || medicalRecordStatus(maid, "Dietary restrictions")],
            ["Food handling preferences", maid.foodHandling]
          ])}
        </div>
        <div class="medical-grid">${medicalRows || `<div class="empty-state compact">${uiLabel("No medical history yet.", "暂无医疗记录。")}</div>`}</div>
      </section>

      <section class="detail-section">
        <div class="detail-section-title">
          <h3>${uiLabel("Scope of Work and Skills", "工作范围与能力")}</h3>
          ${canEditProfileSections ? `<button class="mini-btn" type="button" data-edit-maid-section="skills" data-maid-id="${maid.id}">${uiLabel("Edit", "编辑")}</button>` : ""}
        </div>
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
        <div class="detail-section-title">
          <h3>${uiLabel("Overseas Employment History", "海外工作经历")}</h3>
          ${canEditProfileSections ? `<button class="mini-btn" type="button" data-edit-maid-section="employment" data-maid-id="${maid.id}">${uiLabel("Edit", "编辑")}</button>` : ""}
        </div>
        <div class="history-row maid-history-row history-head">
          <span>${uiLabel("Period", "时间")}</span>
          <span>${uiLabel("Country", "国家")}</span>
          <span>${uiLabel("Employer", "雇主")}</span>
          <span>${uiLabel("Duties", "工作内容")}</span>
        </div>
        ${employmentRows || `<div class="empty-state compact">${uiLabel("No overseas employment history yet.", "暂无海外工作经历。")}</div>`}
      </section>

      <section class="detail-section">
        <div class="detail-section-title">
          <h3>${uiLabel("MOM Singapore Records", "MOM 新加坡记录")}</h3>
          ${canEditProfileSections ? `<button class="mini-btn" type="button" data-edit-maid-section="mom" data-maid-id="${maid.id}">${uiLabel("Edit", "编辑")}</button>` : ""}
        </div>
        <div class="history-row maid-history-row history-head">
          <span>${uiLabel("Period", "时间")}</span>
          <span>${uiLabel("Employer", "雇主")}</span>
          <span>${uiLabel("Industry", "行业")}</span>
          <span>${uiLabel("Remarks", "备注")}</span>
        </div>
        ${momRows || `<div class="empty-state compact">${uiLabel("No MOM records yet.", "暂无 MOM 记录。")}</div>`}
      </section>

      <section class="detail-section">
        <div class="detail-section-title">
          <h3>${uiLabel("Interview Availability and Biodata Remarks", "面试与 Biodata 备注")}</h3>
          ${canEditProfileSections ? `<button class="mini-btn" type="button" data-edit-maid-section="interview" data-maid-id="${maid.id}">${uiLabel("Edit", "编辑")}</button>` : ""}
        </div>
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
        const paid = payments.filter((payment) => normalizePaymentStatus(payment.status) === "paid").reduce((sum, payment) => sum + Number(payment.amount), 0);
        const total = payments.reduce((sum, payment) => sum + Number(payment.amount), 0);
        return `
          <article class="detail-card">
            <div class="detail-head">
              <div>
                <div class="row-title">${client.name} <button class="mini-btn" type="button" data-assign-maid="${client.id}">${uiLabel("Add Maid", "增加女佣")}</button></div>
                <div class="row-sub">${client.phone} · ${uiLabel("Need", "需求")}：${client.need} · ${uiLabel("Budget", "预算")} S$${client.budget}</div>
              </div>
              <div class="row-actions">
                <span class="tag blue">${uiLabel("Received", "已收")} ${formatMoney(paid)} / ${formatMoney(total)}</span>
              </div>
            </div>
            <div class="hire-list">
              ${(client.hires || []).length
                ? (client.hires || [])
                .map(
                  (hire) => `
                    <section class="hire-card">
                      <div class="hire-head">
                        <div>
                          <strong>${workerName(hire.maidId)} <span class="tag blue">${clientTypeLabel(hire.clientType || client.clientType)}</span></strong>
                          <span>${hire.contractNo} · ${statusLabel(hire.status)} · ${uiLabel("Consultant", "顾问")} ${hire.consultant}${hire.processStarted ? ` · ${uiLabel("Process started", "流程已启动")} ${hire.processStartedAt || ""}` : ""}</span>
                        </div>
                        <div class="row-actions">
                          <span class="tag ${hire.status === "面试中" ? "amber" : ""}">${uiLabel("Expected Start", "预计上岗")} ${hire.startDate}</span>
                          <button class="${hire.processStarted ? "mini-btn" : "primary-btn"}" type="button" data-open-process="${client.id}" data-hire-id="${hire.id}" data-process-start="${hire.processStarted ? "0" : "1"}">${hire.processStarted ? uiLabel("Open Process", "打开流程") : uiLabel("Start Employment Process", "启动雇佣流程")}</button>
                          <button class="mini-btn" type="button" data-add-payment="${client.id}" data-hire-id="${hire.id}">${uiLabel("Add Fee", "新增收费")}</button>
                        </div>
                      </div>
                      <div class="payment-table">
                        ${(hire.payments || [])
                          .map(
                            (payment, index) => {
                              const displayStatus = paymentDisplayStatus(payment);
                              return `
                              <div class="payment-row client-payment-row">
                                <span>${index + 1}. ${payment.stage}</span>
                                <strong>${formatMoney(payment.amount)}</strong>
                                <span>${payment.dueDate}</span>
                                <span class="tag ${displayStatus.className}">${displayStatus.label}</span>
                                <div class="row-actions">
                                  <button class="mini-btn" type="button" data-toggle-payment="${client.id}" data-hire-id="${hire.id}" data-payment-id="${payment.id}">${normalizePaymentStatus(payment.status) === "paid" ? uiLabel("Mark Not Paid", "标记未付款") : uiLabel("Mark Paid", "标记已付款")}</button>
                                  <button class="mini-btn" type="button" data-edit-payment="${client.id}" data-hire-id="${hire.id}" data-payment-id="${payment.id}">${uiLabel("Edit", "编辑")}</button>
                                  <button class="mini-btn" type="button" data-delete-payment="${client.id}" data-hire-id="${hire.id}" data-payment-id="${payment.id}">${uiLabel("Delete", "删除")}</button>
                                </div>
                              </div>
                            `;
                            }
                          )
                          .join("")}
                      </div>
                    </section>
                  `
                )
                .join("")
                : `<div class="empty-state compact">${uiLabel("Select a maid to start fees.", "选择女佣后开始收费。")} <button class="mini-btn" type="button" data-assign-maid="${client.id}">${uiLabel("Select Maid", "选择女佣")}</button></div>`}
            </div>
          </article>
        `;
      }
    )
    .join("")
    : `<div class="empty-state">${uiLabel("No clients in this category yet.", "当前分类还没有客户。")}</div>`;
}

function renderTimelineSelector() {
  const workers = workersForCategory();
  const selectedWorkerId = workers.some((worker) => worker.id === activeProcessMaidId) ? activeProcessMaidId : workers[0]?.id || "";
  $("#timelineMaidSelect").innerHTML = workers
    .map((worker) => `<option value="${worker.id}">${worker.name}</option>`)
    .join("");
  if (selectedWorkerId) $("#timelineMaidSelect").value = selectedWorkerId;
}

function renderProcessSelectors() {
  const maidId = $("#timelineMaidSelect").value || activeProcessMaidId || workersForCategory()[0]?.id;
  const currentClientId = $("#processClientSelect").value;
  const linkedClient = firstClientForMaid(maidId);
  const clients = clientsForCategory();
  const selectedClientId = clients.some((client) => client.id === activeProcessClientId)
    ? activeProcessClientId
    : clients.some((client) => client.id === currentClientId)
      ? currentClientId
      : linkedClient?.id;
  $("#processClientSelect").innerHTML = clients
    .map((client) => `<option value="${client.id}" ${client.id === selectedClientId ? "selected" : ""}>${client.name}</option>`)
    .join("");
  activeProcessClientId = $("#processClientSelect").value || "";
}

function renderTimeline() {
  const selected = $("#timelineMaidSelect").value || activeProcessMaidId;
  const maidId = workersForCategory().some((worker) => worker.id === selected) ? selected : workersForCategory()[0]?.id;
  if (!maidId) {
    $("#timelineList").innerHTML = `<div class="empty-state">${uiLabel("No manageable personnel in this category yet.", "当前分类还没有可管理的人员。")}</div>`;
    $("#processClientSelect").innerHTML = "";
    return;
  }
  $("#timelineMaidSelect").value = maidId;
  activeProcessMaidId = maidId;
  renderProcessSelectors();
  const clientId = $("#processClientSelect").value || firstClientForMaid(maidId)?.id || "";
  activeProcessClientId = clientId;
  const { client, hire } = hireForClientMaid(clientId, maidId);
  if (!client || !hire) {
    $("#timelineList").innerHTML = `
      <div class="empty-state">
        ${uiLabel("Select a client with this worker before starting the employment process.", "请先选择已经匹配这位人员的客户，再启动雇佣流程。")}
      </div>
    `;
    return;
  }
  if (!hire.processStarted) {
    $("#timelineList").innerHTML = `
      <article class="process-start-card">
        <p class="eyebrow">${uiLabel("Ready to Start", "可以启动")}</p>
        <h3>${uiLabel("Start Employment Process", "启动雇佣流程")}</h3>
        <p>${uiLabel(`Client ${client.name} has selected ${workerName(maidId)}. Start the process when you are ready to fill documents and send signing links.`, `客户 ${client.name} 已选择 ${workerName(maidId)}。准备填写文件和发送签署链接时，可以启动流程。`)}</p>
        <button class="primary-btn" type="button" data-open-process="${client.id}" data-hire-id="${hire.id}" data-process-start="1">${uiLabel("Start Employment Process", "启动雇佣流程")}</button>
      </article>
    `;
    return;
  }
  const items = timelineItemsForMaid(maidId);
  $("#timelineList").innerHTML = `
    <div class="process-toolbar">
      <div>
        <span class="tag">${uiLabel("Started", "已启动")} ${hire.processStartedAt || "-"}</span>
      </div>
      <button class="mini-btn" type="button" data-add-process-step="${maidId}" data-client-id="${clientId}">${uiLabel("Add Step", "新增步骤")}</button>
    </div>
    ${items
    .map(
      (item, index) => `
        <div class="timeline-item ${timelineClass(item.status)}" data-stage="${escapeHtml(item.step)}">
          <strong>${item.date}</strong>
          <div class="timeline-main">
            <div>
              <div class="row-title">${index + 1}. ${item.step}</div>
              <div class="row-sub">${item.note}</div>
              <div class="step-form-actions">
                <span class="file-chip">${uiLabel("Forms", "表格")}: ${requirementsForStage(maidId, item.step).length}</span>
                <button class="mini-btn" type="button" data-edit-step-forms="${escapeHtml(item.step)}">${uiLabel("Select Forms", "选择表格")}</button>
              </div>
            </div>
            ${renderStageDocuments(maidId, item.step)}
          </div>
          <label class="stage-status-control">
            <span>${uiLabel("Step Status", "步骤状态")}</span>
            <select data-stage-status="${item.step}">
              <option value="pending" ${item.status === "pending" ? "selected" : ""}>Pending</option>
              <option value="in process" ${item.status === "in process" ? "selected" : ""}>In Process</option>
              <option value="completed" ${item.status === "completed" ? "selected" : ""}>Completed</option>
            </select>
          </label>
        </div>
      `
    )
    .join("")}
  `;
}

function renderStageDocuments(maidId, stage) {
  const requirements = requirementsForStage(maidId, stage);
  const clientId = $("#processClientSelect").value || firstClientForMaid(maidId)?.id || "";
  const docList = requirements
    .map((requirement, index) => {
      const doc = documentsForRequirement(maidId, stage, requirement);
      const draft = requirementDraftFor(maidId, clientId, stage, requirement);
      const signed = doc?.status === "已签署";
      const sent = Boolean(doc);
      const filled = Boolean(draft || doc);
      const signerRole = doc?.signerRole || draft?.signerRole || requirement.signerRole;
      const signatureArea = doc?.signatureArea || draft?.signatureArea || requirement.signatureArea;
      return `
        <div class="stage-package requirement-card">
          <div>
            <div class="row-title">${requirement.templateTitle}</div>
            <div class="row-sub">${uiLabel("Signer", "签署方")}: ${signerLabel(signerRole)} · ${uiLabel("Signature Area", "签字位置")}: ${signatureArea}</div>
            <div class="merge-preview">${uiLabel("Auto-filled", "已自动带入")}：${uiLabel("Client", "客户")} ${clientById(doc?.clientId || clientId)?.name || "-"} / ${uiLabel("Worker", "人员")} ${workerName(maidId)}</div>
            <div class="file-chip-list">
              <span class="file-chip">${filled ? uiLabel("Filled", "已填写") : uiLabel("Not Filled", "未填写")}</span>
              ${draft?.filledAt ? `<span class="file-chip">${uiLabel("Filled Date", "填写日期")}: ${draft.filledAt}</span>` : ""}
              ${sent ? `<span class="file-chip">${doc.fileName}</span><span class="file-chip">${uiLabel("Link", "链接")}: ${signerLabel(doc.signerRole)}</span>` : ""}
            </div>
          </div>
          <span class="tag ${signed ? "" : sent ? "red" : filled ? "amber" : "red"}">${sent ? statusLabel(doc.status) : filled ? uiLabel("Filled", "已填写") : uiLabel("Not Filled", "未填写")}</span>
          <button class="mini-btn" type="button" data-preview-requirement-stage="${escapeHtml(stage)}" data-preview-requirement-index="${index}">${uiLabel("Preview", "预览")}</button>
          ${
            sent
              ? `<button class="mini-btn" data-copy-link="${doc.id}">${uiLabel("Copy Link", "复制链接")}</button>
                 <a class="mini-link" href="#sign=${doc.id}" target="_blank">${uiLabel("Open Signing", "打开签署")}</a>`
              : `${filled ? `<button class="mini-btn" type="button" data-fill-requirement-stage="${escapeHtml(stage)}" data-fill-requirement-index="${index}">${uiLabel("Edit Fill", "修改填写")}</button>` : `<button class="mini-btn" type="button" data-fill-requirement-stage="${escapeHtml(stage)}" data-fill-requirement-index="${index}">${uiLabel("Fill Form", "填写文件")}</button>`}
                 ${filled ? `<button class="primary-btn" type="button" data-send-requirement-stage="${escapeHtml(stage)}" data-send-requirement-index="${index}">${uiLabel(`Send to ${signerRole}`, `发送给${signerRole}`)}</button>` : ""}`
          }
        </div>
      `;
    })
    .join("");
  return `
    <div class="stage-documents">
      ${docList || `<div class="empty-state">${uiLabel("No signing documents required in this stage.", "这个节点暂不需要签署文件。")}</div>`}
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
            <div class="row-sub">${uiLabel("Signer", "签署方")}: ${signerLabel(doc.signerRole)} · ${uiLabel("Signature Area", "签字位置")}: ${doc.signatureArea || "-"}</div>
            <div class="row-sub">${uiLabel("Filled Date", "填写日期")}: ${doc.filledAt || "-"}</div>
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
    adminAccountsCache = accounts;
    $("#userList").innerHTML = accounts
    .map(
      (account) => {
        const editable = account.role !== "admin";
        return `
        <article class="detail-card user-card ${editable ? "clickable-card" : ""}" ${editable ? `data-edit-user="${account.id}"` : ""}>
          <div class="detail-head">
            <div>
              <div class="row-title">${account.name}</div>
              <div class="row-sub">${account.username} · ${account.role === "admin" ? uiLabel("Administrator", "管理员") : uiLabel("Employee", "员工")}</div>
            </div>
            <span class="tag ${account.status === "active" ? "" : "amber"}">${account.status === "active" ? uiLabel("Active", "启用") : uiLabel("Disabled", "停用")}</span>
          </div>
          ${editable ? `<div class="row-sub">${uiLabel("Click to edit name, username or password.", "点击修改姓名、用户名或密码。")}</div>` : ""}
        </article>
      `;
      }
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
  const defaultSignerName = doc.signerRole === "FDW" ? worker?.name || "" : client?.name || "";
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
        <div><span>${uiLabel("Signing Party", "签署方")}</span><strong>${signerLabel(doc.signerRole)}</strong></div>
        <div><span>${uiLabel("Signature Area", "签字位置")}</span><strong>${doc.signatureArea || "-"}</strong></div>
        <div><span>${uiLabel("Filled Date", "填写日期")}</span><strong>${doc.filledAt || "-"}</strong></div>
        <div><span>${uiLabel("Sent Date", "发送日期")}</span><strong>${doc.sentAt}</strong></div>
        <div><span>${uiLabel("Signed Date", "签署日期")}</span><strong>${doc.signedAt || statusLabel("待签署")}</strong></div>
      </div>
      <div class="document-preview">
        <h3>${uiLabel("Document Preview", "文件预览")}</h3>
        <p>${uiLabel(`This signing link contains ${files.length} file(s). The production system will merge them into one PDF signing package and request customer signature page by page.`, `这个签署链接包含 ${files.length} 个文件。正式系统会把这些文件合并为一份 PDF 签署包，并逐页要求客户签署。`)}</p>
        <div class="file-chip-list">${files.map((file) => `<span class="file-chip">${file.fileName}</span>`).join("")}</div>
        <div class="merge-preview">${uiLabel("Client", "客户")}：${client?.name || "-"}　${uiLabel("Worker", "人员")}：${worker?.name || "-"}　${uiLabel("Process", "流程")}：${doc.stage}　${uiLabel("Signer", "签署方")}：${signerLabel(doc.signerRole)}</div>
        ${doc.fillNotes ? `<p class="detail-copy">${doc.fillNotes}</p>` : ""}
      </div>
      ${
        signed
          ? `<div class="signed-box">${uiLabel("Signed by", "已由")} ${doc.signedBy || defaultSignerName || uiLabel("Signer", "签署方")} ${uiLabel("on", "于")} ${doc.signedAt} ${uiLabel("and a copy has been sent to the customer.", "签署，副本已发送给客户。")}</div>`
          : `<form id="signatureForm" class="signature-form">
              <label>
                ${uiLabel("Signer Name", "签署人姓名")}
                <input name="signedBy" value="${defaultSignerName}" required />
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
  activateAdminTab(activeAdminTabId, false);
  activateView(activeViewId, false);
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
      if (field.type === "rowEditor") {
        const rows = (field.rows || []).length ? field.rows : [{}];
        return `
          <fieldset class="full row-editor-field" data-row-editor-name="${field.name}">
            <legend>${field.label}</legend>
            <div class="row-editor-list">
              ${rows.map((row) => renderRowEditorLine(field, row)).join("")}
            </div>
            <div class="row-editor-actions">
              <button class="mini-btn" type="button" data-add-row-editor="${field.name}">${uiLabel("Add Row", "增加一行")}</button>
            </div>
          </fieldset>
        `;
      }
      if (field.type === "checkboxGroup") {
        const checkedValues = new Set(Array.isArray(field.value) ? field.value : []);
        return `
          <fieldset class="${field.full ? "full" : ""}">
            <legend>${field.label}</legend>
            <div class="checkbox-grid">
              ${field.options
                .map(
                  (option) => {
                    const optionValue = typeof option === "string" ? option : option.value;
                    const optionLabel = typeof option === "string" ? option : option.label;
                    return `
                    <label class="check-option">
                      <input type="checkbox" name="${field.name}" value="${escapeHtml(optionValue)}" ${checkedValues.has(optionValue) ? "checked" : ""} />
                      <span>${escapeHtml(optionLabel)}</span>
                    </label>
                  `;
                  }
                )
                .join("")}
            </div>
            ${
              field.otherName
                ? `<label class="other-label">${field.otherPlaceholder || "其他"}<input class="other-input" name="${field.otherName}" value="${escapeHtml(field.otherValue || "")}" /></label>`
                : ""
            }
          </fieldset>
        `;
      }
      if (field.type === "select") {
        return `
          <label class="${field.full ? "full" : ""}">
            ${field.label}
            <select name="${field.name}" ${field.required === false ? "" : "required"}>
              ${(field.options || [])
                .map((option) => {
                  const value = typeof option === "string" ? option : option.value;
                  const label = typeof option === "string" ? option : option.label;
                  return `<option value="${value}" ${String(field.value || "") === String(value) ? "selected" : ""}>${label}</option>`;
                })
                .join("")}
            </select>
          </label>
        `;
      }
      const input =
        field.type === "textarea"
          ? `<textarea name="${field.name}" rows="3" ${field.required === false ? "" : "required"}>${field.value || ""}</textarea>`
          : `<input type="${field.inputType || "text"}" name="${field.name}" value="${field.value || ""}" ${field.required === false ? "" : "required"} />`;
      return `<label class="${field.full ? "full" : ""}">${field.label}${input}</label>`;
    })
    .join("");
  $("#dialogFields").onclick = (event) => {
    const addButton = event.target.closest("[data-add-row-editor]");
    if (addButton) {
      const field = fields.find((item) => item.name === addButton.dataset.addRowEditor);
      const list = addButton.closest(".row-editor-field")?.querySelector(".row-editor-list");
      if (field && list) list.insertAdjacentHTML("beforeend", renderRowEditorLine(field, {}));
      return;
    }
    const removeButton = event.target.closest("[data-remove-row-editor]");
    if (removeButton) {
      const list = removeButton.closest(".row-editor-list");
      const rows = list ? [...list.querySelectorAll(".row-editor-line")] : [];
      if (rows.length <= 1) {
        rows[0]?.querySelectorAll("input, textarea").forEach((control) => {
          control.value = "";
        });
      } else {
        removeButton.closest(".row-editor-line")?.remove();
      }
    }
  };
  $("#recordForm").onsubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    fields
      .filter((field) => field.type === "checkboxGroup")
      .forEach((field) => {
        data[field.name] = formData.getAll(field.name);
      });
    fields
      .filter((field) => field.type === "rowEditor")
      .forEach((field) => {
        const editor = document.querySelector(`.row-editor-field[data-row-editor-name="${field.name}"]`);
        data[field.name] = [...(editor?.querySelectorAll(".row-editor-line") || [])]
          .map((row) =>
            Object.fromEntries(
              (field.columns || []).map((column) => [column.name, row.querySelector(`[data-row-key="${column.name}"]`)?.value.trim() || ""])
            )
          )
          .filter((row) => Object.values(row).some(Boolean));
      });
    try {
      await onSubmit(normalizeUppercaseText(data));
      save();
      renderAll();
      dialog.close();
    } catch (error) {
      alert(error.message || "Request failed");
    }
  };
  dialog.showModal();
}

function openAddUserDialog() {
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
}

function openEditUserDialog(account) {
  if (!canManageAccounts() || !account || account.role === "admin") return;
  openDialog(
    uiLabel("Edit Employee Account", "编辑员工账号"),
    [
      { label: uiLabel("Employee Name", "员工姓名"), name: "name", value: account.name || "" },
      { label: uiLabel("Username", "用户名"), name: "username", value: account.username || "" },
      {
        label: uiLabel("New Password (leave blank to keep current)", "新密码（留空则不修改）"),
        name: "password",
        inputType: "password",
        required: false
      }
    ],
    async (data) => {
      const username = String(data.username || "").trim();
      if (!username) {
        throw new Error(uiLabel("Username is required.", "用户名不能为空。"));
      }
      await apiRequest("/api/accounts", {
        method: "PUT",
        body: JSON.stringify({
          id: account.id,
          name: data.name,
          username,
          password: data.password
        })
      });
    }
  );
}

function openProfileDialog() {
  const user = currentUser();
  if (!user) return;
  openDialog(
    uiLabel("Profile", "个人资料"),
    [
      { label: uiLabel("Name", "姓名"), name: "name", value: user.name || "" },
      { label: uiLabel("Username", "用户名"), name: "username", value: user.username || "" },
      { label: uiLabel("Role", "角色"), name: "role", value: user.role === "admin" ? "Administrator" : "Employee" }
    ],
    () => {}
  );
}

function openChangePasswordDialog() {
  openDialog(
    uiLabel("Change Password", "修改密码"),
    [
      { label: uiLabel("Current Password", "当前密码"), name: "currentPassword" },
      { label: uiLabel("New Password", "新密码"), name: "newPassword" },
      { label: uiLabel("Confirm New Password", "确认新密码"), name: "confirmPassword" }
    ],
    (data) => {
      if (data.newPassword !== data.confirmPassword) {
        throw new Error(uiLabel("New passwords do not match.", "两次输入的新密码不一致。"));
      }
      alert(uiLabel("Password change request saved. The production API can be connected next.", "修改密码请求已记录，下一步可以接入正式 API。"));
    }
  );
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const closeButton = event.target.closest("[data-dialog-close]");
    if (!closeButton) return;
    event.preventDefault();
    $("#recordForm").onsubmit = null;
    $("#recordDialog").close();
  });

  document.addEventListener("click", (event) => {
    const profileButton = event.target.closest("[data-account-profile]");
    const teamButton = event.target.closest("[data-account-team]");
    const passwordButton = event.target.closest("[data-account-password]");
    if (!profileButton && !teamButton && !passwordButton) return;
    $("#accountMenu details")?.removeAttribute("open");
    if (profileButton) {
      openProfileDialog();
      return;
    }
    if (teamButton) {
      activateView("admin");
      activateAdminTab("users");
      renderAdminCategoryTabs();
      renderUsers();
      return;
    }
    if (passwordButton) {
      openChangePasswordDialog();
    }
  });

  document.addEventListener("click", (event) => {
    const editUserCard = event.target.closest("[data-edit-user]");
    if (!editUserCard) return;
    const account = adminAccountsCache.find((item) => item.id === editUserCard.dataset.editUser);
    openEditUserDialog(account);
  });

  $$(".mode-switch button").forEach((button) => {
    button.addEventListener("click", () => {
      activateView(button.dataset.view || "front");
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
      await hydrateSharedState();
      form.reset();
      renderAll();
    } catch (error) {
      $("#loginError").textContent = error.message || uiLabel("Invalid username or password.", "用户名或密码错误。");
    }
  });

  $("#adminCategoryTabs").addEventListener("click", (event) => {
    const toggleButton = event.target.closest("[data-toggle-admin-category]");
    if (toggleButton) {
      const category = toggleButton.dataset.toggleAdminCategory;
      adminCategoryCollapsed[category] = !adminCategoryCollapsed[category];
      saveAdminCategoryCollapsed();
      renderAdminCategoryTabs();
      return;
    }

    const tabOnlyButton = event.target.closest("[data-admin-tab-only]");
    if (tabOnlyButton) {
      activateAdminTab(tabOnlyButton.dataset.adminTabOnly || "maids");
      renderAdminCategoryTabs();
      renderUsers();
      return;
    }
    const button = event.target.closest("[data-admin-category][data-admin-tab]");
    if (!button) return;
    activeAdminCategory = button.dataset.adminCategory || "女佣";
    activeMaidDetailId = "";
    activateAdminTab(button.dataset.adminTab || "maids");
    renderAdminCategoryTabs();
    renderAdminMaids();
    renderClients();
    renderTimelineSelector();
    renderProcessSelectors();
    renderTimeline();
    renderDocuments();
    renderDownloads();
  });

  $("#adminSidebarToggle").addEventListener("click", () => {
    adminSidebarCollapsed = !adminSidebarCollapsed;
    localStorage.setItem("bybridgeAdminSidebar", adminSidebarCollapsed ? "collapsed" : "expanded");
    renderAdminSidebarState();
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-admin-logout]")) {
      saveSession(null);
      activateView("admin");
      activateAdminTab("maids");
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

  $("#timelineMaidSelect").addEventListener("change", (event) => {
    activeProcessMaidId = event.target.value;
    activeProcessClientId = "";
    renderTimeline();
  });
  $("#processClientSelect").addEventListener("change", (event) => {
    activeProcessClientId = event.target.value;
    renderTimeline();
  });

  document.addEventListener("change", (event) => {
    const statusSelect = event.target.closest("[data-stage-status]");
    if (!statusSelect) return;
    const maidId = $("#timelineMaidSelect").value || workersForCategory()[0]?.id || "";
    const step = findTimelineStep(maidId, statusSelect.dataset.stageStatus);
    if (!step) return;
    step.status = statusSelect.value;
    save();
    renderTimeline();
  });

  $("#maidPdfInput").addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    $("#importStatus").textContent = uiLabel("Parsing PDF and generating maid profile...", "正在解析 PDF 并生成女佣档案...");
    const formData = new FormData();
    formData.append("pdf", file);
    try {
      const response = await fetch(apiUrl("/api/import-biodata"), {
        method: "POST",
        body: formData
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "PDF import failed");
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
      state.timeline[maid.id] = state.timeline[maid.id] || maidEmploymentProcessSteps.map((step) => ({ ...step }));
      activeMaidDetailId = maid.id;
      save();
      renderAll();
      $("#importStatus").textContent = uiLabel(`Imported: ${maid.name}`, `已导入：${maid.name}`);
    } catch (error) {
      $("#importStatus").textContent = uiLabel(`Import failed: ${error.message}`, `导入失败：${error.message}`);
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
        {
          label: uiLabel("Client Type", "客户标签"),
          name: "clientType",
          type: "select",
          options: [
            { value: "new", label: "New" },
            { value: "transfer", label: "Transfer" }
          ]
        },
        { label: uiLabel("Need", "需求"), name: "need" },
        { label: uiLabel("Budget", "预算"), name: "budget" },
        {
          label: uiLabel("Select Maid to Start Fees", "选择女佣后开始收费"),
          name: "maidId",
          type: "select",
          required: false,
          options: [{ value: "", label: uiLabel("Not selected yet", "暂不选择") }, ...maidSelectOptions("new")]
        }
      ],
      (data) => {
        const client = {
          ...data,
          id: `c${Date.now()}`,
          assignedMaidId: "",
          hires: []
        };
        if (data.maidId) {
          addHireForClient(client, data.maidId, data.clientType);
        }
        delete client.maidId;
        state.clients.push(client);
      }
    );
    bindClientTypeMaidSelect();
  });

  document.addEventListener("click", (event) => {
    const processButton = event.target.closest("[data-open-process]");
    if (processButton) {
      const client = clientById(processButton.dataset.openProcess);
      const hire = (client?.hires || []).find((item) => item.id === processButton.dataset.hireId);
      if (!client || !hire) return;
      if (processButton.dataset.processStart === "1") {
        startEmploymentProcess(client.id, hire.id);
        save();
        renderAll();
      }
      focusEmploymentProcess(client.id, hire.maidId);
      return;
    }

    const addStepButton = event.target.closest("[data-add-process-step]");
    if (addStepButton) {
      openAddProcessStepDialog(addStepButton.dataset.addProcessStep, addStepButton.dataset.clientId);
      return;
    }

    const editStepFormsButton = event.target.closest("[data-edit-step-forms]");
    if (editStepFormsButton) {
      const maidId = $("#timelineMaidSelect").value || workersForCategory()[0]?.id || "";
      openStepFormsDialog(maidId, editStepFormsButton.dataset.editStepForms);
      return;
    }

    const assignButton = event.target.closest("[data-assign-maid]");
    if (assignButton) {
      openAssignMaidDialog(assignButton.dataset.assignMaid);
      return;
    }

    const addPaymentButton = event.target.closest("[data-add-payment]");
    if (addPaymentButton) {
      openPaymentDialog(addPaymentButton.dataset.addPayment, addPaymentButton.dataset.hireId);
      return;
    }

    const editPaymentButton = event.target.closest("[data-edit-payment]");
    if (editPaymentButton) {
      openPaymentDialog(editPaymentButton.dataset.editPayment, editPaymentButton.dataset.hireId, editPaymentButton.dataset.paymentId);
      return;
    }

    const togglePaymentButton = event.target.closest("[data-toggle-payment]");
    if (togglePaymentButton) {
      const { payment } = findClientHirePayment(togglePaymentButton.dataset.togglePayment, togglePaymentButton.dataset.hireId, togglePaymentButton.dataset.paymentId);
      if (!payment) return;
      const nextStatus = normalizePaymentStatus(payment.status) === "paid" ? "not paid" : "paid";
      payment.status = nextStatus;
      payment.paidDate = nextStatus === "paid" ? new Date().toISOString().slice(0, 10) : "";
      save();
      renderClients();
      return;
    }

    const deletePaymentButton = event.target.closest("[data-delete-payment]");
    if (deletePaymentButton) {
      const { hire } = findClientHirePayment(deletePaymentButton.dataset.deletePayment, deletePaymentButton.dataset.hireId, deletePaymentButton.dataset.paymentId);
      if (!hire) return;
      hire.payments = (hire.payments || []).filter((payment) => payment.id !== deletePaymentButton.dataset.paymentId);
      save();
      renderClients();
    }
  });

  $("#addUserBtn").addEventListener("click", () => {
    openAddUserDialog();
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
    const previewRequirementButton = event.target.closest("[data-preview-requirement-stage]");
    if (previewRequirementButton) {
      const stage = previewRequirementButton.dataset.previewRequirementStage;
      const index = Number(previewRequirementButton.dataset.previewRequirementIndex || 0);
      const maidId = $("#timelineMaidSelect").value || workersForCategory()[0]?.id || "";
      const clientId = $("#processClientSelect").value || firstClientForMaid(maidId)?.id || "";
      const requirement = (requirementsForStage(maidId, stage) || [])[index];
      if (requirement) openRequirementPreview(maidId, clientId, stage, requirement);
      return;
    }

    const fillButton = event.target.closest("[data-fill-requirement-stage]");
    if (fillButton) {
      const stage = fillButton.dataset.fillRequirementStage;
      const index = Number(fillButton.dataset.fillRequirementIndex || 0);
      const maidId = $("#timelineMaidSelect").value || workersForCategory()[0]?.id || "";
      const requirement = (requirementsForStage(maidId, stage) || [])[index];
      if (!requirement) return;
      const clientId = $("#processClientSelect").value || firstClientForMaid(maidId)?.id || "";
      if (!clientId) {
        alert(uiLabel("Please add or select a client in the current category first.", "请先在当前分类下新增或选择客户。"));
        return;
      }
      const draft = requirementDraftFor(maidId, clientId, stage, requirement);
      openDialog(
        uiLabel(`Fill ${requirement.templateTitle}`, `填写 ${requirement.templateTitle}`),
        [
          { label: uiLabel("Document", "文件"), name: "templateTitle", value: requirement.templateTitle },
          { label: uiLabel("Signing Party", "签署方"), name: "signerRole", value: draft?.signerRole || requirement.signerRole },
          { label: uiLabel("Signature Area", "签字位置"), name: "signatureArea", value: draft?.signatureArea || requirement.signatureArea, full: true },
          { label: uiLabel("Fill Notes", "填写备注"), name: "fillNotes", value: draft?.fillNotes || "Information checked and filled from worker/client profile.", type: "textarea", full: true }
        ],
        (data) => {
          saveRequirementDraft(maidId, clientId, stage, requirement, data);
        }
      );
      return;
    }

    const requirementButton = event.target.closest("[data-send-requirement-stage]");
    if (requirementButton) {
      const stage = requirementButton.dataset.sendRequirementStage;
      const index = Number(requirementButton.dataset.sendRequirementIndex || 0);
      const maidId = $("#timelineMaidSelect").value || workersForCategory()[0]?.id || "";
      const requirement = (requirementsForStage(maidId, stage) || [])[index];
      if (!requirement) return;
      if (!$("#processClientSelect").value) {
        alert(uiLabel("Please add or select a client in the current category first.", "请先在当前分类下新增或选择客户。"));
        return;
      }
      try {
        const doc = createSigningDocumentFromRequirement(requirement, stage);
        if (doc) {
          alert(uiLabel(`Signing link for ${doc.signerRole} generated: ${currentSigningUrl(doc.id)}`, `${doc.signerRole} 的签署链接已生成：${currentSigningUrl(doc.id)}`));
        }
      } catch (error) {
        alert(error.message);
      }
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
    doc.signedBy = doc.signerRole === "FDW" ? workerById(doc.maidId)?.name || doc.signerRole : clientById(doc.clientId)?.name || doc.signerRole || "";
    doc.copySent = true;
    completeStepAndOpenNext(doc.maidId, doc.stage);
    save();
    renderAll();
  });

  window.addEventListener("hashchange", renderSignaturePortal);
  window.addEventListener("storage", (event) => {
    if (event.key !== "maidAgencyState" || !event.newValue) return;
    Object.assign(state, normalizeState(JSON.parse(event.newValue)));
    state.maids = state.maids.map((maid) => normalizeUppercaseText(maid));
    state.clients = state.clients.map((client) => normalizeUppercaseText(client));
    renderAll();
  });
}

state.maids = state.maids.map((maid) => normalizeUppercaseText(maid));
state.clients = state.clients.map((client) => normalizeUppercaseText(client));
saveLocalState();
bindEvents();
renderAll();
hydrateSharedState();

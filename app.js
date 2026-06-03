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
      offDay: "待确认",
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
      skills: ["照顾儿童", "照顾老人", "家务", "烹饪", "普通话"],
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
      biodataRemarks: "FDW signed biodata on 13/02/25. Employer confirmation/signature section is included in original biodata.",
      summary: "Ex-Hong Kong, Singapore and Taiwan. Experienced in household chores, elderly care, child care and simple Chinese cooking."
    },
    {
      id: "m1",
      refNo: "DEMO-001",
      name: "Siti Aminah",
      nationality: "印度尼西亚",
      age: 32,
      salary: 720,
      experience: 6,
      languages: "英语 / 马来语",
      dateOfBirth: "1994-03-12",
      passportNo: "A1234567",
      religion: "穆斯林",
      maritalStatus: "已婚，2 个孩子",
      education: "高中",
      height: 158,
      weight: 54,
      originCity: "Surabaya",
      workedCountries: ["新加坡", "马来西亚"],
      offDay: "每月 2 天",
      medicalStatus: "体检待安排",
      skills: ["照顾老人", "烹饪", "家务"],
      duties: ["老人护理", "轮椅协助", "中式简单餐", "日常清洁"],
      status: "可预约",
      photoUrl: "",
      summary: "有新加坡与马来西亚家庭经验，擅长照顾行动不便老人。"
    },
    {
      id: "m2",
      refNo: "DEMO-002",
      name: "Maria Santos",
      nationality: "菲律宾",
      age: 29,
      salary: 780,
      experience: 5,
      languages: "英语 / 他加禄语",
      dateOfBirth: "1997-09-20",
      passportNo: "P7654321",
      religion: "天主教",
      maritalStatus: "单身",
      education: "大专",
      height: 162,
      weight: 55,
      originCity: "Iloilo",
      workedCountries: ["新加坡", "香港"],
      offDay: "每月 4 天",
      medicalStatus: "入境前体检通过",
      skills: ["照顾儿童", "辅导作业", "烹饪"],
      duties: ["幼儿照顾", "英语沟通", "接送上学", "西式简餐"],
      status: "面试中",
      photoUrl: "",
      summary: "熟悉幼儿日常照护，沟通能力好，适合有儿童家庭。"
    },
    {
      id: "m3",
      refNo: "DEMO-003",
      name: "Thandar Win",
      nationality: "缅甸",
      age: 27,
      salary: 650,
      experience: 3,
      languages: "英语 / 缅甸语",
      dateOfBirth: "1999-01-18",
      passportNo: "M9988123",
      religion: "佛教",
      maritalStatus: "单身",
      education: "中学",
      height: 155,
      weight: 49,
      originCity: "Yangon",
      workedCountries: ["缅甸", "新加坡"],
      offDay: "每月 2 天",
      medicalStatus: "待体检",
      skills: ["家务", "宠物照顾", "烹饪"],
      duties: ["全屋清洁", "洗烫衣物", "宠物喂养", "简单烹饪"],
      status: "可预约",
      photoUrl: "",
      summary: "做事细致，适合需要日常家务和简单餐食准备的家庭。"
    }
  ],
  clients: [
    {
      id: "c1",
      name: "陈先生",
      phone: "+65 8123 4567",
      need: "照顾老人",
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
            { stage: "报名费", amount: 300, dueDate: "2026-05-28", status: "已付款", paidDate: "2026-05-28" },
            { stage: "面试确认金", amount: 700, dueDate: "2026-06-02", status: "已付款", paidDate: "2026-06-02" },
            { stage: "入境前尾款", amount: 1200, dueDate: "2026-06-12", status: "待付款", paidDate: "" },
            { stage: "上岗后结清", amount: 800, dueDate: "2026-06-20", status: "未到期", paidDate: "" }
          ]
        }
      ]
    },
    {
      id: "c2",
      name: "Lim Family",
      phone: "+65 9234 5678",
      need: "照顾儿童",
      budget: "750-850",
      assignedMaidId: "m2",
      hires: [
        {
          id: "h2",
          maidId: "m2",
          contractNo: "EMP-2026-002",
          startDate: "待定",
          status: "面试中",
          consultant: "Jason",
          payments: [
            { stage: "报名费", amount: 300, dueDate: "2026-05-30", status: "已付款", paidDate: "2026-05-30" },
            { stage: "面试确认金", amount: 700, dueDate: "2026-06-03", status: "待付款", paidDate: "" },
            { stage: "准证申请费", amount: 600, dueDate: "待定", status: "未到期", paidDate: "" }
          ]
        }
      ]
    }
  ],
  timeline: {
    m1: [
      { step: "面试", date: "2026-06-02", status: "已完成", note: "客户已确认合适" },
      { step: "培训", date: "2026-06-08", status: "进行中", note: "老人护理课程" },
      { step: "登录新加坡", date: "2026-06-14", status: "待处理", note: "等待航班确认" },
      { step: "体检", date: "2026-06-16", status: "待处理", note: "抵达后安排" },
      { step: "上岗培训", date: "2026-06-18", status: "待处理", note: "家庭规则说明" },
      { step: "定期体检", date: "2026-12-18", status: "待处理", note: "半年复查" }
    ],
    m2: [
      { step: "面试", date: "2026-06-01", status: "进行中", note: "客户第二轮面试" },
      { step: "培训", date: "2026-06-10", status: "待处理", note: "儿童照护课程" },
      { step: "登录新加坡", date: "2026-06-18", status: "待处理", note: "资料准备中" }
    ],
    m3: [
      { step: "面试", date: "2026-06-04", status: "待处理", note: "等待客户选择时间" }
    ]
  },
  documents: [
    {
      id: "d1",
      clientId: "c1",
      maidId: "m1",
      name: "服务协议",
      stage: "面试确认后",
      status: "已签署",
      sentAt: "2026-05-28",
      signedAt: "2026-05-29",
      copySent: true,
      fileName: "服务协议.pdf",
      fileType: "PDF",
      signingLink: "#sign=d1",
      signedBy: "陈先生",
      source: "template"
    },
    {
      id: "d2",
      clientId: "c1",
      maidId: "m1",
      name: "雇佣合同",
      stage: "登录新加坡前",
      status: "待签署",
      sentAt: "2026-05-30",
      signedAt: "",
      copySent: false,
      fileName: "雇佣合同.pdf",
      fileType: "PDF",
      signingLink: "#sign=d2",
      signedBy: "",
      source: "template"
    },
    {
      id: "d3",
      clientId: "c2",
      maidId: "m2",
      name: "面试确认书",
      stage: "面试阶段",
      status: "待签署",
      sentAt: "2026-05-30",
      signedAt: "",
      copySent: false,
      fileName: "面试确认书.pdf",
      fileType: "PDF",
      signingLink: "#sign=d3",
      signedBy: "",
      source: "template"
    }
  ]
};

const defaultMaidDetails = {
  refNo: "待填写",
  dateOfBirth: "待填写",
  passportNo: "待填写",
  fin: "",
  wpNo: "",
  religion: "待填写",
  maritalStatus: "待填写",
  education: "待填写",
  height: "",
  weight: "",
  originCity: "待填写",
  workedCountries: [],
  offDay: "待确认",
  medicalStatus: "待体检",
  foodHandling: "待填写",
  allergies: "待填写",
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

const categoryMeta = {
  女佣: {
    title: "女佣",
    eyebrow: "Domestic Worker",
    description: "家庭护理、家务、烹饪与儿童照护人员"
  },
  建筑: {
    title: "建筑",
    eyebrow: "Construction Worker",
    description: "工地、装修、机电与现场技术人员"
  },
  服务: {
    title: "服务",
    eyebrow: "Service Worker",
    description: "清洁、餐饮、酒店与日常运营服务人员"
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
    offDay: "按项目安排",
    role: "General Construction Worker",
    skills: ["Formwork", "Rebar", "Site Safety"],
    status: "可预约",
    photoUrl: "",
    summary: "6 年建筑现场经验，可配合工地日班与轮班。"
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
    offDay: "按项目安排",
    role: "Tiling and Finishing Worker",
    skills: ["Tiling", "Plastering", "Waterproofing"],
    status: "面试中",
    photoUrl: "",
    summary: "熟悉室内装修收尾、瓷砖铺设与墙面修补。"
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
    offDay: "每月 2-4 天",
    role: "Cleaner",
    skills: ["Office Cleaning", "Deep Cleaning", "Laundry"],
    status: "可预约",
    photoUrl: "",
    summary: "4 年清洁服务经验，适合办公室、宿舍与商业空间。"
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
    offDay: "每月 4 天",
    role: "F&B Service Crew",
    skills: ["Customer Service", "Cashier", "Food Prep"],
    status: "可预约",
    photoUrl: "",
    summary: "可做餐饮前台、备餐、收银与基础英文沟通。"
  }
];

function normalizeState(savedState) {
  const data = savedState || seed;
  if (savedState) {
    seed.maids.forEach((seedMaid) => {
      if (!data.maids?.some((maid) => maid.id === seedMaid.id || (maid.refNo && maid.refNo === seedMaid.refNo))) {
        data.maids.push(seedMaid);
      }
    });
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
          contractNo: "待生成",
          startDate: "待定",
          status: "跟进中",
          consultant: "待分配",
          payments: [
            { stage: "报名费", amount: 300, dueDate: "待定", status: "待付款", paidDate: "" },
            { stage: "面试确认金", amount: 700, dueDate: "待定", status: "未到期", paidDate: "" },
            { stage: "入境前尾款", amount: 1200, dueDate: "待定", status: "未到期", paidDate: "" }
          ]
        }
      ]
  }));
  data.timeline = data.timeline || seed.timeline;
  data.documents = (data.documents || seed.documents).map((doc) => ({
    fileName: doc.name ? `${doc.name}.pdf` : "待签文件.pdf",
    fileType: "PDF",
    files: doc.files || [{ fileName: doc.fileName || (doc.name ? `${doc.name}.pdf` : "待签文件.pdf"), fileType: doc.fileType || "PDF", uploadedAt: doc.sentAt || "" }],
    signingLink: `#sign=${doc.id}`,
    signedBy: "",
    source: "template",
    ...doc
  }));
  return data;
}

const state = normalizeState(JSON.parse(localStorage.getItem("maidAgencyState")));

const save = () => localStorage.setItem("maidAgencyState", JSON.stringify(state));
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

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
  if (previewTitle) previewTitle.textContent = title || "预览";
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

const downloads = $(".sidebar-downloads");
if (downloads) {
  downloads.addEventListener("click", (event) => {
    const target = event.target.closest(".download-preview");
    if (!target) return;
    const url = target.getAttribute("data-url") || "";
    const title = target.getAttribute("data-title") || target.textContent || "预览";
    if (!url) return;
    openPdfPreview(url, title);
  });
}

function maidById(id) {
  return state.maids.find((maid) => maid.id === id);
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
  step.note = step.note || "已上传待签文件";
}

function completeStepAndOpenNext(maidId, stage) {
  const items = timelineItemsForMaid(maidId);
  const index = items.findIndex((item) => item.step === stage);
  if (index < 0) return;
  items[index].status = "已完成";
  items[index].note = "客户已完成电子签署";
  const next = items[index + 1];
  if (next && next.status !== "已完成" && next.status !== "进行中") {
    next.status = "待处理";
    next.note = next.note || "等待上传文件或开始处理";
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
      return { [fallbackKey]: label.trim(), status: rest.join(":").trim() || "待填写" };
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
    fileName: file?.name || "上传表格",
    fileType: extension,
    uploadedAt: new Date().toISOString().slice(0, 10)
  };
}

function createSigningDocument(file, stageOverride) {
  const maidId = $("#timelineMaidSelect").value || state.maids[0]?.id || "";
  const clientId = $("#processClientSelect").value || firstClientForMaid(maidId)?.id || state.clients[0]?.id || "";
  const stage = stageOverride || "雇佣流程";
  const existingPackage = stagePackage(maidId, clientId, stage);
  const nextFile = fileRecord(file);
  if (existingPackage) {
    existingPackage.files = [...(existingPackage.files || []), nextFile];
    existingPackage.fileName = `${existingPackage.files.length} 个文件`;
    existingPackage.name = `${stage}签署包`;
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
    name: `${stage}签署包`,
    stage,
    status: "待签署",
    sentAt: new Date().toISOString().slice(0, 10),
    signedAt: "",
    signedBy: "",
    copySent: false,
    fileName: "1 个文件",
    fileType: "PACKAGE",
    files: [nextFile],
    signingLink: `#sign=${id}`,
    source: "stage-package",
    mergeFields: {
      clientName: clientById(clientId)?.name || "",
      clientPhone: clientById(clientId)?.phone || "",
      maidName: maidById(maidId)?.name || "",
      maidRefNo: maidById(maidId)?.refNo || "",
      maidPassport: maidById(maidId)?.passportNo || ""
    }
  };
  state.documents.unshift(doc);
  markStepInProgress(maidId, stage);
  save();
  renderAll();
  return doc;
}

function addFilesToStage(files, stage) {
  let doc = null;
  [...files].forEach((file) => {
    doc = createSigningDocument(file, stage);
  });
  if (doc) {
    alert(`已生成/更新签署包链接：${currentSigningUrl(doc.id)}`);
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

function maidToWorker(maid) {
  return {
    ...maid,
    category: "女佣",
    role: "Domestic Worker",
    salary: `S$${maid.salary}`
  };
}

function allFrontWorkers() {
  return [...state.maids.map(maidToWorker), ...externalWorkers];
}

function initFilters() {
  const workers = allFrontWorkers();
  const nationalities = [...new Set(workers.map((worker) => worker.nationality))];
  const skills = [...new Set(workers.flatMap((worker) => worker.skills))];
  $("#nationalityFilter").innerHTML = `<option value="全部">全部</option>${nationalities
    .map((item) => `<option value="${item}">${item}</option>`)
    .join("")}`;
  $("#skillFilter").innerHTML = `<option value="全部">全部</option>${skills
    .map((item) => `<option value="${item}">${item}</option>`)
    .join("")}`;
}

function renderFront() {
  const category = $("#categoryFilter").value;
  const nationality = $("#nationalityFilter").value;
  const experience = $("#experienceFilter").value;
  const skill = $("#skillFilter").value;
  const workers = allFrontWorkers().filter((worker) => {
    const matchCategory = category === "全部" || worker.category === category;
    const matchNationality = nationality === "全部" || worker.nationality === nationality;
    const matchExperience = experience === "全部" || worker.experience >= Number(experience);
    const matchSkill = skill === "全部" || worker.skills.includes(skill);
    return matchCategory && matchNationality && matchExperience && matchSkill;
  });

  $("#frontCount").textContent = `${workers.length} 位可查看`;
  $("#categorySummary").innerHTML = Object.entries(categoryMeta)
    .map(([key, meta]) => {
      const count = workers.filter((worker) => worker.category === key).length;
      return `
        <div class="category-card">
          <span>${meta.eyebrow}</span>
          <strong>${meta.title}</strong>
          <em>${count} 位工人</em>
        </div>
      `;
    })
    .join("");

  $("#maidCards").innerHTML = Object.entries(categoryMeta)
    .map(([key, meta]) => {
      const group = workers.filter((worker) => worker.category === key);
      if (!group.length) {
        return `
          <section class="worker-section">
            <div class="worker-section-head">
              <div>
                <p class="eyebrow">${meta.eyebrow}</p>
                <h3>${meta.title}</h3>
                <p>${meta.description}</p>
              </div>
              <span class="status-pill">0 位</span>
            </div>
            <div class="empty-state">当前筛选下暂无${meta.title}工人。</div>
          </section>
        `;
      }
      return `
        <section class="worker-section">
          <div class="worker-section-head">
            <div>
              <p class="eyebrow">${meta.eyebrow}</p>
              <h3>${meta.title}</h3>
              <p>${meta.description}</p>
            </div>
            <span class="status-pill">${group.length} 位</span>
          </div>
          <div class="worker-grid">
            ${group
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
                          <h3>${worker.name}</h3>
                          <span>${worker.refNo} · ${worker.role}</span>
                        </div>
                        <span class="tag ${worker.status === "面试中" ? "amber" : ""}">${worker.status}</span>
                      </div>
                      <p>${worker.summary}</p>
                      <div class="info-grid">
                        <div><span>分类</span><strong>${worker.category}</strong></div>
                        <div><span>国籍</span><strong>${worker.nationality}</strong></div>
                        <div><span>年龄</span><strong>${worker.age} 岁</strong></div>
                        <div><span>经验</span><strong>${worker.experience} 年</strong></div>
                        <div><span>薪资</span><strong>${worker.salary}</strong></div>
                        <div><span>语言</span><strong>${worker.languages}</strong></div>
                      </div>
                      <div class="skills">${worker.skills.map((item) => `<span class="tag blue">${item}</span>`).join("")}</div>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderDashboard() {
  const signedDocs = state.documents.filter((doc) => doc.status === "已签署").length;
  const pendingDocs = state.documents.length - signedDocs;
  const activeProcesses = Object.values(state.timeline).flat().filter((item) => item.status !== "已完成").length;
  const unpaidPayments = state.clients
    .flatMap((client) => paymentsForClient(client))
    .filter((payment) => payment.status === "待付款").length;
  $("#metrics").innerHTML = [
    ["女佣档案", state.maids.length],
    ["客户数量", state.clients.length],
    ["进行中流程", activeProcesses],
    ["待签文件", pendingDocs],
    ["待收款项", unpaidPayments]
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

function renderAdminMaids() {
  $("#adminMaidList").innerHTML = state.maids
    .map(
      (maid) => `
        <article class="detail-card">
          <div class="detail-head">
            <div class="profile-title">
              ${
                maid.photoUrl
                  ? `<img class="profile-avatar" src="${maid.photoUrl}" alt="${maid.name}" />`
                  : `<div class="profile-avatar">${maid.name.slice(0, 1)}</div>`
              }
              <div>
                <div class="row-title">${maid.name}</div>
                <div class="row-sub">${maid.refNo} · ${maid.nationality} · ${maid.age} 岁 · ${maid.originCity}</div>
              </div>
            </div>
            <span class="tag ${maid.status === "面试中" ? "amber" : ""}">${maid.status}</span>
          </div>
          <div class="profile-grid">
            <div><span>Ref No.</span><strong>${maid.refNo}</strong></div>
            <div><span>护照</span><strong>${maid.passportNo}</strong></div>
            <div><span>FIN / WP</span><strong>${maid.fin || "-"} / ${maid.wpNo || "-"}</strong></div>
            <div><span>出生日期</span><strong>${maid.dateOfBirth}</strong></div>
            <div><span>宗教</span><strong>${maid.religion}</strong></div>
            <div><span>婚姻</span><strong>${maid.maritalStatus}</strong></div>
            <div><span>学历</span><strong>${maid.education}</strong></div>
            <div><span>身高 / 体重</span><strong>${maid.height || "-"}cm / ${maid.weight || "-"}kg</strong></div>
            <div><span>经验国家</span><strong>${maid.workedCountries.join("、") || "待填写"}</strong></div>
            <div><span>月薪 / 休息日</span><strong>S$${maid.salary} / ${maid.offDay}</strong></div>
            <div><span>体检状态</span><strong>${maid.medicalStatus}</strong></div>
            <div><span>语言</span><strong>${maid.languages}</strong></div>
            <div><span>饮食 / 食材</span><strong>${maid.foodHandling}</strong></div>
            <div><span>过敏 / 备注</span><strong>${maid.allergies}</strong></div>
          </div>
          <div class="skills">${maid.duties.map((item) => `<span class="tag blue">${item}</span>`).join("")}</div>
          <div class="biodata-sections">
            <section class="history-block">
              <h3>医疗 / 饮食 / 其他限制</h3>
              <div class="profile-grid compact">
                ${(maid.medicalHistory || [])
                  .map((record) => `<div><span>${record.item}</span><strong>${record.status}</strong></div>`)
                  .join("")}
                <div><span>Food handling</span><strong>${maid.foodHandling}</strong></div>
                <div><span>Allergies / Fear</span><strong>${maid.allergies}</strong></div>
              </div>
            </section>
            <section class="history-block">
              <h3>Skills of FDW</h3>
              <div class="skill-table">
                <div class="skill-row skill-head">
                  <span>Area of Work</span>
                  <span>Willing</span>
                  <span>Exp.</span>
                  <span>Years</span>
                  <span>Rate</span>
                  <span>Observation</span>
                </div>
                ${(maid.skillAssessment || [])
                  .map(
                    (skill) => `
                      <div class="skill-row">
                        <strong>${skill.area}</strong>
                        <span>${skill.willingness}</span>
                        <span>${skill.experience}</span>
                        <span>${skill.years}</span>
                        <span>${skill.rating}</span>
                        <span>${skill.observation}</span>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            </section>
            <section class="history-block">
              <h3>评估 / 面试方式</h3>
              <div class="skills">
                ${(maid.evaluationMethods || []).map((item) => `<span class="tag blue">${item}</span>`).join("")}
                ${(maid.interviewAvailability || []).map((item) => `<span class="tag">${item}</span>`).join("")}
              </div>
              ${maid.biodataRemarks ? `<p class="record-note">${maid.biodataRemarks}</p>` : ""}
            </section>
          </div>
          ${
            maid.employmentHistory.length
              ? `<div class="history-block">
                  <h3>海外工作经历</h3>
                  ${maid.employmentHistory
                    .map(
                      (job) => `
                        <div class="history-row">
                          <strong>${job.from} - ${job.to}</strong>
                          <span>${job.country} · ${job.employer}</span>
                          <span>${job.duties}</span>
                        </div>
                      `
                    )
                    .join("")}
                </div>`
              : ""
          }
          ${
            maid.momHistory.length
              ? `<div class="history-block">
                  <h3>MOM 新加坡记录</h3>
                  ${maid.momHistory
                    .map(
                      (job) => `
                        <div class="history-row">
                          <strong>${job.startDate} - ${job.endDate}</strong>
                          <span>${job.employer}</span>
                          <span>${job.industry}</span>
                        </div>
                      `
                    )
                    .join("")}
                </div>`
              : ""
          }
        </article>
      `
    )
    .join("");
}

function renderClients() {
  $("#clientList").innerHTML = state.clients
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
                <div class="row-sub">${client.phone} · 需求：${client.need} · 预算 S$${client.budget}</div>
              </div>
              <span class="tag blue">已收 ${formatMoney(paid)} / ${formatMoney(total)}</span>
            </div>
            <div class="hire-list">
              ${(client.hires || [])
                .map(
                  (hire) => `
                    <section class="hire-card">
                      <div class="hire-head">
                        <div>
                          <strong>${maidById(hire.maidId)?.name || "未分配女佣"}</strong>
                          <span>${hire.contractNo} · ${hire.status} · 顾问 ${hire.consultant}</span>
                        </div>
                        <span class="tag ${hire.status === "面试中" ? "amber" : ""}">预计上岗 ${hire.startDate}</span>
                      </div>
                      <div class="payment-table">
                        ${(hire.payments || [])
                          .map(
                            (payment, index) => `
                              <div class="payment-row">
                                <span>${index + 1}. ${payment.stage}</span>
                                <strong>${formatMoney(payment.amount)}</strong>
                                <span>${payment.dueDate}</span>
                                <span class="tag ${payment.status === "已付款" ? "" : payment.status === "待付款" ? "red" : "amber"}">${payment.status}</span>
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
    .join("");
}

function renderTimelineSelector() {
  $("#timelineMaidSelect").innerHTML = state.maids
    .map((maid) => `<option value="${maid.id}">${maid.name}</option>`)
    .join("");
}

function renderProcessSelectors() {
  const maidId = $("#timelineMaidSelect").value || state.maids[0]?.id;
  const linkedClient = firstClientForMaid(maidId);
  $("#processClientSelect").innerHTML = state.clients
    .map((client) => `<option value="${client.id}" ${client.id === linkedClient?.id ? "selected" : ""}>${client.name}</option>`)
    .join("");
}

function renderTimeline() {
  const maidId = $("#timelineMaidSelect").value || state.maids[0]?.id;
  const items = state.timeline[maidId] || [];
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
          <span class="tag ${statusClass(item.status)}">${item.status}</span>
        </div>
      `
    )
    .join("");
  renderProcessSelectors();
}

function renderStageDocuments(maidId, stage) {
  const docs = documentsForStage(maidId, stage);
  const docList =
    docs
      .map((doc) => {
        const signed = doc.status === "已签署";
        const files = doc.files || [{ fileName: doc.fileName, fileType: doc.fileType }];
        return `
          <div class="stage-package">
            <div>
              <div class="row-title">${doc.name}</div>
              <div class="row-sub">${clientById(doc.clientId)?.name || "未指定客户"} · ${files.length} 个文件 · 一个签署链接</div>
              <div class="merge-preview">已自动带入：客户 ${clientById(doc.clientId)?.name || "-"} / 女佣 ${maidById(doc.maidId)?.name || "-"}</div>
              <div class="file-chip-list">${files.map((file) => `<span class="file-chip">${file.fileName}</span>`).join("")}</div>
            </div>
            <span class="tag ${signed ? "" : "red"}">${doc.status}</span>
            <button class="mini-btn" data-copy-link="${doc.id}">复制链接</button>
            <a class="mini-link" href="#sign=${doc.id}" target="_blank">打开签署</a>
          </div>
        `;
      })
      .join("");
  return `
    <div class="stage-documents">
      <label class="stage-dropzone" data-stage="${stage}">
        <input type="file" data-stage-input="${stage}" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" multiple />
        <strong>拖入表格到“${stage}”</strong>
        <span>可一次或多次加入多个文件，系统会整合成一个签署包</span>
      </label>
      ${docList || `<div class="empty-state">这个节点还没有签署文件。</div>`}
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
  $("#documentList").innerHTML = state.documents
    .map((doc) => {
      const signed = doc.status === "已签署";
      return `
        <div class="table-row">
          <div>
            <div class="row-title">${doc.name}</div>
            <div class="row-sub">${doc.stage} · 发送 ${doc.sentAt} · ${doc.fileName}</div>
          </div>
          <div>${clientById(doc.clientId)?.name} / ${maidById(doc.maidId)?.name}</div>
          <div>
            <span class="tag ${signed ? "" : "red"}">${doc.status}</span>
            <span class="tag ${doc.copySent ? "" : "amber"}">${doc.copySent ? "副本已发送" : "等待副本"}</span>
          </div>
          <div class="row-actions">
            <a class="mini-link" href="#sign=${doc.id}" target="_blank">签署链接</a>
            <button class="mini-btn" data-sign-doc="${doc.id}" ${signed ? "disabled" : ""}>标记已签</button>
          </div>
        </div>
      `;
    })
    .join("");
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
    $("#signatureContent").innerHTML = `<div class="detail-card"><h3>链接无效</h3><p>找不到这份待签文件。</p></div>`;
    return;
  }
  const client = clientById(doc.clientId);
  const maid = maidById(doc.maidId);
  const signed = doc.status === "已签署";
  const files = doc.files || [{ fileName: doc.fileName, fileType: doc.fileType }];
  $("#signatureContent").innerHTML = `
    <article class="signature-card">
      <div class="detail-head">
        <div>
          <div class="row-title">${doc.name}</div>
          <div class="row-sub">${doc.fileName} · ${doc.stage}</div>
        </div>
        <span class="tag ${signed ? "" : "red"}">${doc.status}</span>
      </div>
      <div class="profile-grid">
        <div><span>客户</span><strong>${client?.name || "-"}</strong></div>
        <div><span>女佣</span><strong>${maid?.name || "-"}</strong></div>
        <div><span>发送日期</span><strong>${doc.sentAt}</strong></div>
        <div><span>签署日期</span><strong>${doc.signedAt || "待签署"}</strong></div>
      </div>
      <div class="document-preview">
        <h3>文件预览</h3>
        <p>这个签署链接包含 ${files.length} 个文件。正式系统会把这些文件合并为一份 PDF 签署包，并逐页要求客户签署。</p>
        <div class="file-chip-list">${files.map((file) => `<span class="file-chip">${file.fileName}</span>`).join("")}</div>
        <div class="merge-preview">客户：${client?.name || "-"}　女佣：${maid?.name || "-"}　流程：${doc.stage}</div>
      </div>
      ${
        signed
          ? `<div class="signed-box">已由 ${doc.signedBy || client?.name || "客户"} 于 ${doc.signedAt} 签署，副本已发送给客户。</div>`
          : `<form id="signatureForm" class="signature-form">
              <label>
                签署人姓名
                <input name="signedBy" value="${client?.name || ""}" required />
              </label>
              <label class="check-option">
                <input name="confirm" type="checkbox" required />
                <span>我确认已阅读并同意签署此文件。</span>
              </label>
              <button class="primary-btn">确认电子签名</button>
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
  initFilters();
  renderFront();
  renderDashboard();
  renderAdminMaids();
  renderClients();
  renderTimelineSelector();
  renderProcessSelectors();
  renderTimeline();
  renderDocuments();
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
  $("#recordForm").onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    fields
      .filter((field) => field.type === "checkboxGroup")
      .forEach((field) => {
        data[field.name] = formData.getAll(field.name);
      });
    onSubmit(data);
    save();
    renderAll();
    dialog.close();
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
    });
  });

  $$(".sidebar button").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".sidebar button").forEach((item) => item.classList.remove("active"));
      $$(".admin-tab").forEach((item) => item.classList.remove("active-admin-tab"));
      button.classList.add("active");
      $(`#${button.dataset.adminTab}`).classList.add("active-admin-tab");
    });
  });

  ["#categoryFilter", "#nationalityFilter", "#experienceFilter", "#skillFilter"].forEach((selector) => {
    $(selector).addEventListener("change", renderFront);
  });

  $("#timelineMaidSelect").addEventListener("change", renderTimeline);
  $("#processClientSelect").addEventListener("change", renderProcessDocuments);

  document.addEventListener("change", (event) => {
    const input = event.target.closest("[data-stage-input]");
    if (!input) return;
    if (!input.files?.length) return;
    addFilesToStage(input.files, input.dataset.stageInput);
    input.value = "";
  });

  document.addEventListener("dragenter", (event) => {
    const zone = event.target.closest("[data-stage]");
    if (!zone) return;
    event.preventDefault();
    zone.classList.add("dragging");
  });

  document.addEventListener("dragover", (event) => {
    const zone = event.target.closest("[data-stage]");
    if (!zone) return;
    event.preventDefault();
  });

  document.addEventListener("dragleave", (event) => {
    const zone = event.target.closest("[data-stage]");
    if (!zone) return;
    zone.classList.remove("dragging");
  });

  document.addEventListener("drop", (event) => {
    const zone = event.target.closest("[data-stage]");
    if (!zone) return;
    event.preventDefault();
    zone.classList.remove("dragging");
    if (!event.dataTransfer?.files?.length) return;
    addFilesToStage(event.dataTransfer.files, zone.dataset.stage);
  });

  $("#maidPdfInput").addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    $("#importStatus").textContent = "正在解析 PDF 并生成女佣档案...";
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
        { step: "面试", date: "待定", status: "待处理", note: "PDF 导入后等待客户预约" },
        { step: "培训", date: "待定", status: "待处理", note: "等待面试确认" },
        { step: "登录新加坡", date: "待定", status: "待处理", note: "等待资料确认" },
        { step: "体检", date: "待定", status: "待处理", note: "等待安排" }
      ];
      save();
      renderAll();
      $("#importStatus").textContent = `已导入：${maid.name}`;
    } catch (error) {
      $("#importStatus").textContent = "导入失败：请确认使用新的本地预览服务打开页面。";
    } finally {
      event.target.value = "";
    }
  });

  $("#addMaidBtn").addEventListener("click", () => {
    openDialog(
      "新增女佣",
      [
        { label: "姓名", name: "name" },
        { label: "国籍", name: "nationality" },
        { label: "年龄", name: "age" },
        { label: "月薪", name: "salary" },
        { label: "经验年数", name: "experience" },
        { label: "语言", name: "languages" },
        { label: "护照号码", name: "passportNo" },
        { label: "出生日期", name: "dateOfBirth" },
        { label: "宗教", name: "religion" },
        { label: "婚姻状况", name: "maritalStatus" },
        { label: "学历", name: "education" },
        { label: "身高 cm", name: "height" },
        { label: "体重 kg", name: "weight" },
        { label: "家乡城市", name: "originCity" },
        { label: "经验国家，用逗号分隔", name: "workedCountries", full: true },
        { label: "可做事项，用逗号分隔", name: "duties", full: true },
        { label: "休息日", name: "offDay" },
        { label: "体检状态", name: "medicalStatus" },
        { label: "医疗记录，每行格式：项目: 状态", name: "medicalHistory", type: "textarea", full: true },
        {
          label: "18. Food handling preference",
          name: "foodHandlingOptions",
          type: "checkboxGroup",
          full: true,
          options: ["No pork", "No beef", "Can handle any food"],
          otherName: "foodHandlingOther",
          otherPlaceholder: "Others"
        },
        { label: "过敏 / 怕什么 / 其他限制", name: "allergies", type: "textarea", full: true },
        { label: "Skills of FDW，每行格式：工作范围 | Willing | Exp | Years | Rate | Observation", name: "skillAssessment", type: "textarea", full: true },
        {
          label: "B1. Method of evaluation of skills",
          name: "evaluationMethods",
          type: "checkboxGroup",
          full: true,
          options: [
            "Based on FDW's declaration, no evaluation/observation by EA or overseas training centre / EA",
            "Interviewed via videoconference",
            "Interviewed in person",
            "Interviewed in person and also made observation of the FDW"
          ],
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
        { label: "海外工作经历，每行格式：From | To | Country | Employer | Duties", name: "employmentHistory", type: "textarea", full: true },
        { label: "Biodata 备注", name: "biodataRemarks", type: "textarea", full: true },
        { label: "技能，用逗号分隔", name: "skills", full: true },
        { label: "简介", name: "summary", type: "textarea", full: true }
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
          { step: "面试", date: "待定", status: "待处理", note: "等待客户预约" },
          { step: "培训", date: "待定", status: "待处理", note: "等待前一步完成" },
          { step: "登录新加坡", date: "待定", status: "待处理", note: "等待资料确认" }
        ];
      }
    );
  });

  $("#addClientBtn").addEventListener("click", () => {
    openDialog(
      "新增客户",
      [
        { label: "客户姓名", name: "name" },
        { label: "联系电话", name: "phone" },
        { label: "需求", name: "need" },
        { label: "预算", name: "budget" }
      ],
      (data) => {
        state.clients.push({
          ...data,
          id: `c${Date.now()}`,
          assignedMaidId: state.maids[0]?.id || "",
          hires: [
            {
              id: `h${Date.now()}`,
              maidId: state.maids[0]?.id || "",
              contractNo: "待生成",
              startDate: "待定",
              status: "跟进中",
              consultant: "待分配",
              payments: [
                { stage: "报名费", amount: 300, dueDate: "待定", status: "待付款", paidDate: "" },
                { stage: "面试确认金", amount: 700, dueDate: "待定", status: "未到期", paidDate: "" },
                { stage: "入境前尾款", amount: 1200, dueDate: "待定", status: "未到期", paidDate: "" }
              ]
            }
          ]
        });
      }
    );
  });

  $("#sendDocBtn").addEventListener("click", () => {
    openDialog(
      "发送签署文件",
      [
        { label: "文件名称", name: "name" },
        { label: "触发阶段", name: "stage" }
      ],
      (data) => {
        const firstClient = state.clients[0];
        state.documents.push({
          ...data,
          id: `d${Date.now()}`,
          clientId: firstClient?.id || "",
          maidId: firstClient?.assignedMaidId || state.maids[0]?.id || "",
          status: "待签署",
          sentAt: new Date().toISOString().slice(0, 10),
          signedAt: "",
          copySent: false
        });
      }
    );
  });

  document.addEventListener("click", (event) => {
    const copyButton = event.target.closest("[data-copy-link]");
    if (copyButton) {
      const url = currentSigningUrl(copyButton.dataset.copyLink);
      navigator.clipboard?.writeText(url);
      copyButton.textContent = "已复制";
      setTimeout(() => {
        copyButton.textContent = "复制链接";
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
}

bindEvents();
renderAll();

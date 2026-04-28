const SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbzvTuHAb78nlFWPzu6UAJoI_MPJuviIPxgBVP_xYNp7bP-nmH1RqqqwBUp-iEQ9pVcR/exec";
const STORAGE_KEY = "suandok-news-history-v2";
const LANGUAGE_KEY = "suandok-news-language";
const ADMIN_AUTH_KEY = "suandok-news-admin-auth-v1";
const HISTORY_FETCH_LIMIT = 100;

const I18N = {
  th: {
    htmlLang: "th",
    heroBadge: "PWA • Offline Ready • Responsive",
    heroSubtitleLine1: "NEWS",
    heroSubtitleLine2: "National Early Warning Score",
    installApp: "ติดตั้งแอป",
    resetAll: "รีเซ็ตทั้งหมด",
    assessmentSectionTitle: "ข้อมูลการประเมิน",
    assessmentSectionSubtitle: "กรอกข้อมูลพื้นฐานก่อนบันทึกคะแนน",
    assessmentTimeLabel: "วันประเมิน",
    locationLabel: "สถานที่ประเมิน",
    hnLabel: "เลขที่โรงพยาบาล (HN)",
    hnPlaceholder: "เช่น 123456789",
    metricSectionTitle: "ตัวชี้วัด NEWS",
    metricSectionSubtitle: "เลือกค่าที่ตรงกับการประเมินผู้ป่วย",
    metricSectionHint: "ระบบจะคำนวณคะแนนให้อัตโนมัติ",
    historySectionTitle: "ประวัติการบันทึก",
    historySectionSubtitle: "เก็บไว้ในเครื่อง และสามารถดึงจาก Google Sheet พร้อมค้นหาตามวันที่หรือ HN ได้",
    clearHistory: "ล้างข้อมูลในเครื่อง",
    historyHeadLocation: "สถานที่",
    historyHeadHn: "HN",
    historyHeadScore: "คะแนน",
    historyHeadLevel: "ระดับ",
    historyHeadTime: "เวลา",
    historyHeadAction: "จัดการ",
    historyFilterDateLabel: "เลือกวันที่",
    historyFilterHnLabel: "ค้นหา HN",
    historyFilterLocationLabel: "สถานที่",
    historyFilterLevelLabel: "ระดับ",
    historyFilterRedLabel: "RED Flag",
    historyFilterHnPlaceholder: "เช่น 123456789",
    historyRefresh: "รีเฟรช",
    historyResetFilters: "ล้างตัวกรอง",
    historyLoading: "กำลังโหลดประวัติจาก Google Sheet...",
    historySourceGoogle: "กำลังแสดงข้อมูลจาก Google Sheet",
    historySourceLocal: "แสดงข้อมูลจากเครื่อง เนื่องจากไม่สามารถโหลด Google Sheet ได้",
    historySourceEmpty: "ยังไม่พบข้อมูลตามเงื่อนไขที่เลือก",
    historyResultsCount: "พบ {count} รายการ",
    historyResultsCountZero: "ไม่พบรายการ",
    historyFilterAllOption: "ทั้งหมด",
    historyFilterRedOnly: "พบ RED",
    historyFilterRedNone: "ไม่พบ RED",
    adminLoginToggle: "Admin Login",
    adminLogout: "Logout",
    adminUsernameLabel: "Username",
    adminPasswordLabel: "Password",
    adminLoginBtn: "Login",
    adminDelete: "ลบ",
    adminDeleteConfirm: "ยืนยันลบประวัตินี้ใช่หรือไม่",
    adminDeleteSuccess: "ลบประวัติเรียบร้อย",
    adminLoginSuccess: "Admin login สำเร็จ",
    adminLoginFailed: "Username หรือ Password ไม่ถูกต้อง",
    adminRequired: "กรุณา login ก่อนลบข้อมูล",
    resultSectionTitle: "ผลการประเมิน",
    resultSectionSubtitle: "อัปเดตแบบเรียลไทม์",
    totalScoreLabel: "คะแนนรวม",
    urgencyLabelTitle: "ระดับ",
    redFlagTitle: "RED Flag",
    saveBtn: "บันทึกคะแนน",
    resetBtn: "รีเซ็ต",
    adviceSectionTitle: "คำแนะนำการพยาบาล",
    metricTitles: {
      respiratoryRate: "อัตราการหายใจ (ครั้ง/นาที)",
      spo2: "ความอิ่มตัวของออกซิเจนในเลือด",
      oxygenSupport: "การใช้ออกซิเจนเสริม",
      temperature: "อุณหภูมิ",
      systolicBP: "ความดันโลหิตซิสโตลิก (มม.ปรอท)",
      heartRate: "อัตราการเต้นของหัวใจ (ครั้ง/นาที)",
      consciousness: "ระดับความรู้สึกตัว (AVPU)"
    },
    scaleLabels: {
      1: "เกณฑ์ทั่วไป",
      2: "เสี่ยงภาวะหายใจล้มเหลวจาก CO2 สูง (ตัวอย่าง โรคปอดอุดกั้นเรื้อรัง COPD)"
    },
    spo2ScaleDescriptions: {
      1: "เกณฑ์ทั่วไป",
      2: "เสี่ยงภาวะหายใจล้มเหลวจาก CO2 สูง (ตัวอย่าง โรคปอดอุดกั้นเรื้อรัง COPD)"
    },
    metrics: {
      respiratoryRate: [
        { label: "≤8", value: "3" },
        { label: "9-11", value: "1" },
        { label: "12-20", value: "0" },
        { label: "21-24", value: "2" },
        { label: "≥25", value: "3" }
      ],
      spo2: {
        1: [
          { label: "≤91%", value: "3" },
          { label: "92-93%", value: "2" },
          { label: "94-95%", value: "1" },
          { label: "≥96%", value: "0" }
        ],
        2: [
          { label: "≤83%", value: "3" },
          { label: "84-85%", value: "2" },
          { label: "86-87%", value: "1" },
          { label: "88-92% / ≥93% Air", value: "0" },
          { label: "93-94% O2", value: "1" },
          { label: "95-96% O2", value: "2" },
          { label: "≥97% O2", value: "3" }
        ]
      },
      oxygenSupport: [
        { label: "ไม่มี", value: "0" },
        { label: "มี", value: "2" }
      ],
      temperature: [
        { label: "<35°C", value: "3" },
        { label: "35.1-36°C", value: "1" },
        { label: "36.1-38°C", value: "0" },
        { label: "38.1-39°C", value: "1" },
        { label: ">39.1°C", value: "2" }
      ],
      systolicBP: [
        { label: "≤90", value: "3" },
        { label: "91-100", value: "2" },
        { label: "101-110", value: "1" },
        { label: "111-219", value: "0" },
        { label: "≥220", value: "3" }
      ],
      heartRate: [
        { label: "≤40", value: "3" },
        { label: "41-50", value: "1" },
        { label: "51-90", value: "0" },
        { label: "91-110", value: "1" },
        { label: "111-130", value: "2" },
        { label: "≥131", value: "3" }
      ],
      consciousness: [
        { label: "รู้สึกตัวดี (A)", value: "0" },
        { label: "ตอบสนองต่อเสียง/ความเจ็บปวด/ไม่ตอบสนอง (V, P, U)", value: "3" }
      ]
    },
    levelLabels: {
      Normal: "Non-urgent",
      Low: "Semi-urgent",
      Urgent: "Urgent",
      Emergent: "Emergency"
    },
    scoreStateReady: "พร้อมประเมิน",
    scoreStateInProgress: "กำลังประเมิน",
    scoreStateWatch: "ติดตามใกล้ชิด",
    redFound: "พบ RED",
    redNotFound: "ไม่พบ",
    advice: {
      Normal: {
        title: "0-2 คะแนน: Non-urgent",
        items: [
          "Non-urgent / ไม่ฉุกเฉิน",
          "ประเมินอาการและอาการแสดงของผู้ป่วย",
          "อธิบายขั้นตอนการรับบริการ"
        ]
      },
      Low: {
        title: "3-4 คะแนน: Semi-urgent",
        items: [
          "Semi-urgent / เจ็บป่วยกึ่งฉุกเฉิน",
          "ประเมินอาการและอาการแสดงของผู้ป่วย",
          "รายงานพยาบาลเพื่อประเมินอาการซ้ำ",
          "ระหว่างรอตรวจ เฝ้าระวังสัญญาณชีพและอาการเปลี่ยนแปลง"
        ]
      },
      Urgent: {
        title: "5-6 คะแนน: Urgent",
        items: [
          "Urgent / เจ็บป่วยฉุกเฉินระดับปานกลาง",
          "ประเมินอาการและอาการแสดงของผู้ป่วย",
          "รายงานพยาบาลเพื่อประเมินอาการซ้ำ",
          "กรณีผู้ป่วยอยู่ OPD ให้พิจารณาส่งต่อ ER",
          "เมื่อถึง ER ให้ประเมินสัญญาณชีพและอาการซ้ำ เพื่อรายงานแพทย์หรือหัวหน้าพยาบาลเวร (Incharge)",
          "กรณีผู้ป่วยอยู่ IPD หรือ ICU ให้รายงานแพทย์หรือหัวหน้าพยาบาลเวรทันที"
        ]
      },
      Emergent: {
        title: "มากกว่า 7 คะแนน: Emergency",
        items: [
          "ฉุกเฉิน / มีความเสี่ยงสูง",
          "รายงานพยาบาลและแพทย์ทันที",
          "พิจารณาส่งต่อ ER",
          "ให้การพยาบาลเบื้องต้น เช่น ให้ออกซิเจน",
          "ติดตามอาการอย่างใกล้ชิด",
          "หากผู้ป่วยอยู่ IPD หรือ ICU ให้รายงานแพทย์หรือหัวหน้าพยาบาลเวรทันที"
        ]
      },
      redTitle: "Red Score",
      redItems: [
        "กรณีพบคะแนนข้อใดข้อหนึ่ง = +3 เปลี่ยน Triage เป็น Urgency",
        "รายงานพยาบาลและแพทย์ทันที",
        "พิจารณาส่งต่อ ER",
        "ให้การพยาบาลเบื้องต้น เช่น ให้ออกซิเจน",
        "ติดตามอาการอย่างใกล้ชิด",
        "หากผู้ป่วยอยู่ IPD หรือ ICU ให้รายงานแพทย์หรือหัวหน้าพยาบาลเวรทันที"
      ]
    },
    noHistory: "ยังไม่มีประวัติการบันทึก",
    statuses: {
      assessmentTimeRequired: "กรุณาเลือกวันประเมินก่อนบันทึก",
      locationRequired: "กรุณาเลือกสถานที่ประเมินก่อนบันทึก",
      hnRequired: "กรุณากรอกเลขที่โรงพยาบาลเป็นตัวเลข 9 หลัก",
      savePending: "บันทึกลงเครื่องสำเร็จ กำลังส่งข้อมูลไป Google Sheet...",
      saveSuccess: "บันทึกลงเครื่องและส่งไป Google Sheet สำเร็จ",
      saveError: "บันทึกลงเครื่องสำเร็จ แต่ส่งไป Google Sheet ไม่สำเร็จ",
      resetSuccess: "รีเซ็ตข้อมูลเรียบร้อย",
      clearHistorySuccess: "ล้างข้อมูลในเครื่องเรียบร้อย",
      historyLoaded: "โหลดประวัติลงในฟอร์มเรียบร้อย และล็อกค่าไว้แล้ว กดรีเซ็ตหากต้องการกรอกใหม่",
      adminDeleteError: "ลบประวัติไม่สำเร็จ",
      adminSessionExpired: "Session หมดอายุ กรุณา login ใหม่"
    }
  },
  en: {
    htmlLang: "en",
    heroBadge: "PWA • Offline Ready • Responsive",
    heroSubtitleLine1: "NEWS",
    heroSubtitleLine2: "National Early Warning Score",
    installApp: "Install App",
    resetAll: "Reset All",
    assessmentSectionTitle: "Assessment Details",
    assessmentSectionSubtitle: "Enter basic information before saving the score",
    assessmentTimeLabel: "Assessment Date/Time",
    locationLabel: "Assessment Location",
    hnLabel: "Hospital Number (HN)",
    hnPlaceholder: "e.g. 123456789",
    metricSectionTitle: "NEWS Metrics",
    metricSectionSubtitle: "Choose values that match the patient assessment",
    metricSectionHint: "Scores are calculated automatically",
    historySectionTitle: "Saved History",
    historySectionSubtitle: "Stored on this device and can also be loaded from Google Sheet with date or HN filters",
    clearHistory: "Clear Local Cache",
    historyHeadLocation: "Location",
    historyHeadHn: "HN",
    historyHeadScore: "Score",
    historyHeadLevel: "Level",
    historyHeadTime: "Time",
    historyHeadAction: "Action",
    historyFilterDateLabel: "Select Date",
    historyFilterHnLabel: "Search HN",
    historyFilterLocationLabel: "Location",
    historyFilterLevelLabel: "Level",
    historyFilterRedLabel: "RED Flag",
    historyFilterHnPlaceholder: "e.g. 123456789",
    historyRefresh: "Refresh",
    historyResetFilters: "Reset Filters",
    historyLoading: "Loading history from Google Sheet...",
    historySourceGoogle: "Showing data from Google Sheet",
    historySourceLocal: "Showing local data because Google Sheet could not be loaded",
    historySourceEmpty: "No records matched the selected filters",
    historyResultsCount: "{count} records found",
    historyResultsCountZero: "No matching records",
    historyFilterAllOption: "All",
    historyFilterRedOnly: "RED Found",
    historyFilterRedNone: "No RED",
    adminLoginToggle: "Admin Login",
    adminLogout: "Logout",
    adminUsernameLabel: "Username",
    adminPasswordLabel: "Password",
    adminLoginBtn: "Login",
    adminDelete: "Delete",
    adminDeleteConfirm: "Delete this history record?",
    adminDeleteSuccess: "History record deleted successfully",
    adminLoginSuccess: "Admin login successful",
    adminLoginFailed: "Invalid username or password",
    adminRequired: "Please login before deleting records",
    resultSectionTitle: "Assessment Result",
    resultSectionSubtitle: "Updated in real time",
    totalScoreLabel: "Total Score",
    urgencyLabelTitle: "Level",
    redFlagTitle: "RED Flag",
    saveBtn: "Save Score",
    resetBtn: "Reset",
    adviceSectionTitle: "Nursing Advice",
    metricTitles: {
      respiratoryRate: "Respiratory Rate (breaths/min)",
      spo2: "Oxygen Saturation in Blood",
      oxygenSupport: "Supplemental Oxygen",
      temperature: "Temperature",
      systolicBP: "Systolic Blood Pressure (mmHg)",
      heartRate: "Heart Rate (beats/min)",
      consciousness: "Consciousness Level (AVPU)"
    },
    scaleLabels: {
      1: "General Criteria",
      2: "Risk of CO2 Retention (example: Chronic Obstructive Pulmonary Disease, COPD)"
    },
    spo2ScaleDescriptions: {
      1: "General Criteria",
      2: "Risk of respiratory failure from high CO2 (example: Chronic Obstructive Pulmonary Disease, COPD)"
    },
    metrics: {
      respiratoryRate: [
        { label: "≤8", value: "3" },
        { label: "9-11", value: "1" },
        { label: "12-20", value: "0" },
        { label: "21-24", value: "2" },
        { label: "≥25", value: "3" }
      ],
      spo2: {
        1: [
          { label: "≤91%", value: "3" },
          { label: "92-93%", value: "2" },
          { label: "94-95%", value: "1" },
          { label: "≥96%", value: "0" }
        ],
        2: [
          { label: "≤83%", value: "3" },
          { label: "84-85%", value: "2" },
          { label: "86-87%", value: "1" },
          { label: "88-92% / ≥93% Air", value: "0" },
          { label: "93-94% O2", value: "1" },
          { label: "95-96% O2", value: "2" },
          { label: "≥97% O2", value: "3" }
        ]
      },
      oxygenSupport: [
        { label: "No", value: "0" },
        { label: "Yes", value: "2" }
      ],
      temperature: [
        { label: "<35°C", value: "3" },
        { label: "35.1-36°C", value: "1" },
        { label: "36.1-38°C", value: "0" },
        { label: "38.1-39°C", value: "1" },
        { label: ">39.1°C", value: "2" }
      ],
      systolicBP: [
        { label: "≤90", value: "3" },
        { label: "91-100", value: "2" },
        { label: "101-110", value: "1" },
        { label: "111-219", value: "0" },
        { label: "≥220", value: "3" }
      ],
      heartRate: [
        { label: "≤40", value: "3" },
        { label: "41-50", value: "1" },
        { label: "51-90", value: "0" },
        { label: "91-110", value: "1" },
        { label: "111-130", value: "2" },
        { label: "≥131", value: "3" }
      ],
      consciousness: [
        { label: "Alert (A)", value: "0" },
        { label: "Responds to Voice/Pain/Unresponsive (V, P, U)", value: "3" }
      ]
    },
    levelLabels: {
      Normal: "Non-urgent",
      Low: "Semi-urgent",
      Urgent: "Urgent",
      Emergent: "Emergency"
    },
    scoreStateReady: "Ready",
    scoreStateInProgress: "Assessing",
    scoreStateWatch: "Close Monitoring",
    redFound: "RED Detected",
    redNotFound: "Not Found",
    advice: {
      Normal: {
        title: "0-2 points: Non-urgent",
        items: [
          "Not urgent / non-emergency",
          "Assess the patient's symptoms and clinical signs",
          "Explain the care process and service steps"
        ]
      },
      Low: {
        title: "3-4 points: Semi-urgent",
        items: [
          "Mild urgency / semi-emergency condition",
          "Assess the patient's symptoms and clinical signs",
          "Report to the nurse for reassessment",
          "While waiting, monitor vital signs and any change in symptoms"
        ]
      },
      Urgent: {
        title: "Urgent (5-6 points)",
        items: [
          "Urgent / moderate emergency condition",
          "Assess the patient's symptoms and clinical signs",
          "Report to the nurse for reassessment",
          "If the patient is in OPD, consider transfer to ER",
          "On arrival at ER, reassess vital signs and symptoms and report to the physician or nurse in charge",
          "If the patient is in IPD or ICU, report to the physician or nurse in charge immediately"
        ]
      },
      Emergent: {
        title: "More than 7 points: Emergency",
        items: [
          "Emergency / high-risk condition",
          "Notify the nurse and physician immediately",
          "Consider transfer to ER",
          "Provide initial nursing care such as oxygen support",
          "Monitor the patient closely",
          "If the patient is in IPD or ICU, report to the physician or nurse in charge immediately"
        ]
      },
      redTitle: "Red Score",
      redItems: [
        "When any single item scores +3, change triage to Urgency",
        "Notify the nurse and physician immediately",
        "Consider transfer to ER",
        "Provide initial nursing care such as oxygen support",
        "Monitor the patient closely",
        "If the patient is in IPD or ICU, report to the physician or nurse in charge immediately"
      ]
    },
    noHistory: "No saved records yet",
    statuses: {
      assessmentTimeRequired: "Please select the assessment date/time before saving",
      locationRequired: "Please select the assessment location before saving",
      hnRequired: "Please enter a 9-digit hospital number",
      savePending: "Saved locally. Sending data to Google Sheet...",
      saveSuccess: "Saved locally and sent to Google Sheet successfully",
      saveError: "Saved locally, but sending to Google Sheet failed",
      resetSuccess: "Form reset successfully",
      clearHistorySuccess: "Local cache cleared successfully",
      historyLoaded: "History record loaded into the form and locked. Press reset to enter new values",
      adminDeleteError: "Failed to delete history record",
      adminSessionExpired: "Session expired. Please login again"
    }
  }
};

const selectors = {
  respiratoryRate: document.getElementById("respiratoryRate"),
  spo2: document.getElementById("spo2"),
  oxygenSupport: document.getElementById("oxygenSupport"),
  temperature: document.getElementById("temperature"),
  systolicBP: document.getElementById("systolicBP"),
  heartRate: document.getElementById("heartRate"),
  consciousness: document.getElementById("consciousness"),
  location: document.getElementById("location"),
  hn: document.getElementById("hn"),
  assessmentTime: document.getElementById("assessmentTime"),
  totalScore: document.getElementById("totalScore"),
  urgencyLabel: document.getElementById("urgencyLabel"),
  redFlag: document.getElementById("redFlag"),
  saveBtn: document.getElementById("saveBtn"),
  resetBtn: document.getElementById("resetBtn"),
  resetBtnTop: document.getElementById("resetBtnTop"),
  saveStatus: document.getElementById("saveStatus"),
  adviceBox: document.getElementById("adviceBox"),
  historyTable: document.getElementById("historyTable"),
  clearHistoryBtn: document.getElementById("clearHistoryBtn"),
  toggleAdminLoginBtn: document.getElementById("toggleAdminLoginBtn"),
  adminLogoutBtn: document.getElementById("adminLogoutBtn"),
  adminLoginPanel: document.getElementById("adminLoginPanel"),
  adminUsername: document.getElementById("adminUsername"),
  adminPassword: document.getElementById("adminPassword"),
  adminLoginBtn: document.getElementById("adminLoginBtn"),
  adminStatus: document.getElementById("adminStatus"),
  refreshHistoryBtn: document.getElementById("refreshHistoryBtn"),
  resetHistoryFiltersBtn: document.getElementById("resetHistoryFiltersBtn"),
  historyFilterDate: document.getElementById("historyFilterDate"),
  historyFilterHn: document.getElementById("historyFilterHn"),
  historyFilterLocation: document.getElementById("historyFilterLocation"),
  historyFilterLevel: document.getElementById("historyFilterLevel"),
  historyFilterRed: document.getElementById("historyFilterRed"),
  historyResultCount: document.getElementById("historyResultCount"),
  historySourceNote: document.getElementById("historySourceNote"),
  installBtn: document.getElementById("installBtn"),
  scoreStateTag: document.getElementById("scoreStateTag"),
  langThBtn: document.getElementById("langThBtn"),
  langEnBtn: document.getElementById("langEnBtn"),
  assessmentCard: document.getElementById("assessmentCard"),
  resultPanel: document.getElementById("resultPanel"),
  stickyPanel: document.querySelector(".sticky-panel"),
  metricProgressLabel: document.getElementById("metricProgressLabel"),
  metricProgressText: document.getElementById("metricProgressText"),
  metricProgressFill: document.getElementById("metricProgressFill"),
  mobileSaveBar: document.getElementById("mobileSaveBar"),
  mobileSaveHint: document.getElementById("mobileSaveHint"),
  mobileProgressText: document.getElementById("mobileProgressText"),
  mobileScore: document.getElementById("mobileScore"),
  mobileSaveBtn: document.getElementById("mobileSaveBtn"),
  mobileResetBtn: document.getElementById("mobileResetBtn"),
  locationGroup: document.querySelector(".location-button-grid")
};

let deferredPrompt = null;
let currentLanguage = localStorage.getItem(LANGUAGE_KEY) || "th";
let validationActive = false;
let historyFilterTimer = null;
let currentEditingRecord = null;
let historyFormLocked = false;
let adminAuth = readAdminAuth();
const historyState = {
  remoteItems: [],
  displayedItems: [],
  remoteLoaded: false,
  remoteFailed: false,
  loading: false
};

function t() {
  return I18N[currentLanguage] || I18N.th;
}

function readAdminAuth() {
  try {
    const raw = localStorage.getItem(ADMIN_AUTH_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !parsed.token) return null;
    return parsed;
  } catch {
    return null;
  }
}

function persistAdminAuth(auth) {
  adminAuth = auth && auth.token ? auth : null;
  if (adminAuth) {
    localStorage.setItem(ADMIN_AUTH_KEY, JSON.stringify(adminAuth));
  } else {
    localStorage.removeItem(ADMIN_AUTH_KEY);
  }
  updateAdminUI();
}

function isAdminLoggedIn() {
  return Boolean(adminAuth && adminAuth.token && (!adminAuth.expiresAt || Date.now() < adminAuth.expiresAt));
}

function setDefaultAssessmentTime() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  selectors.assessmentTime.value = now.toISOString().slice(0, 16);
}

function getTodayDateValue() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 10);
}

function setDefaultHistoryDate() {
  if (!selectors.historyFilterDate) return;
  selectors.historyFilterDate.value = getTodayDateValue();
}

function getHistoryLevelOptions(copy = t()) {
  return [
    { value: "", label: copy.historyFilterAllOption },
    { value: "Normal", label: copy.levelLabels.Normal },
    { value: "Low", label: copy.levelLabels.Low },
    { value: "Urgent", label: copy.levelLabels.Urgent },
    { value: "Emergent", label: copy.levelLabels.Emergent }
  ];
}

function populateHistoryFilterOptions() {
  const copy = t();
  const selectedLocation = selectors.historyFilterLocation?.value || "";
  const selectedLevel = selectors.historyFilterLevel?.value || "";
  const selectedRed = selectors.historyFilterRed?.value || "";

  if (selectors.historyFilterLocation) {
    selectors.historyFilterLocation.innerHTML = [
      { value: "", label: copy.historyFilterAllOption },
      { value: "OPD", label: "OPD" },
      { value: "Ward", label: "Ward" },
      { value: "ER", label: "ER" },
      { value: "ICU", label: "ICU" }
    ].map(option => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`).join("");
    selectors.historyFilterLocation.value = selectedLocation;
  }

  if (selectors.historyFilterLevel) {
    selectors.historyFilterLevel.innerHTML = getHistoryLevelOptions(copy)
      .map(option => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`)
      .join("");
    selectors.historyFilterLevel.value = selectedLevel;
  }

  if (selectors.historyFilterRed) {
    selectors.historyFilterRed.innerHTML = [
      { value: "", label: copy.historyFilterAllOption },
      { value: "true", label: copy.historyFilterRedOnly },
      { value: "false", label: copy.historyFilterRedNone }
    ].map(option => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`).join("");
    selectors.historyFilterRed.value = selectedRed;
  }
}

function sanitizeHN(value) {
  return String(value).replace(/\D/g, "").slice(0, 9);
}

function syncLocationButtons() {
  const selectedLocation = selectors.location.value;
  document.querySelectorAll(".location-option").forEach(button => {
    button.classList.toggle("active", button.dataset.location === selectedLocation);
  });
}

function setLocation(value) {
  selectors.location.value = value;
  syncLocationButtons();
  if (validationActive) updateAssessmentValidation(true);
}

function setFormLocked(locked) {
  historyFormLocked = Boolean(locked);

  selectors.assessmentTime.toggleAttribute("disabled", historyFormLocked);
  selectors.hn.toggleAttribute("disabled", historyFormLocked);
  document.querySelectorAll(".spo2-scale").forEach(input => {
    input.disabled = historyFormLocked;
  });
  document.querySelectorAll(".metric-option-button").forEach(button => {
    button.toggleAttribute("disabled", historyFormLocked);
  });
  document.querySelectorAll(".location-option").forEach(button => {
    button.toggleAttribute("disabled", historyFormLocked);
  });

  selectors.saveBtn.toggleAttribute("disabled", historyFormLocked);
  selectors.mobileSaveBtn?.toggleAttribute("disabled", historyFormLocked);
  selectors.assessmentCard?.classList.toggle("history-locked", historyFormLocked);
}

function formatExampleSuffix(text) {
  const value = String(text || "");
  const match = value.match(/^(.*?)(\s*\([^()]+\))$/);

  if (!match) {
    return escapeHtml(value);
  }

  const mainText = match[1].trimEnd();
  const suffix = match[2].trimStart();
  return `${escapeHtml(mainText)} <span class="example-note">${escapeHtml(suffix)}</span>`;
}

function applyStaticTranslations() {
  const copy = t();
  document.documentElement.lang = copy.htmlLang;
  document.title = "Golden Jubilee Medical Center";

  const heroBadge = document.getElementById("heroBadge");
  if (heroBadge) {
    heroBadge.textContent = copy.heroBadge;
  }
  document.getElementById("heroSubtitleLine1").textContent = copy.heroSubtitleLine1;
  document.getElementById("heroSubtitleLine2").textContent = copy.heroSubtitleLine2;
  selectors.installBtn.textContent = copy.installApp;
  if (selectors.resetBtnTop) selectors.resetBtnTop.textContent = copy.resetAll;
  document.getElementById("assessmentSectionTitle").textContent = copy.assessmentSectionTitle;
  document.getElementById("assessmentSectionSubtitle").textContent = copy.assessmentSectionSubtitle;
  document.getElementById("assessmentTimeLabel").textContent = copy.assessmentTimeLabel;
  document.getElementById("locationLabel").textContent = copy.locationLabel;
  document.getElementById("hnLabel").textContent = copy.hnLabel;
  selectors.hn.placeholder = copy.hnPlaceholder;
  document.getElementById("metricSectionTitle").textContent = copy.metricSectionTitle;
  document.getElementById("metricSectionSubtitle").textContent = copy.metricSectionSubtitle;
  document.getElementById("metricSectionHint").textContent = copy.metricSectionHint;
  document.getElementById("metricTitleRespiratoryRate").textContent = copy.metricTitles.respiratoryRate;
  document.getElementById("metricTitleSpo2").innerHTML = formatExampleSuffix(copy.metricTitles.spo2);
  document.getElementById("metricTitleOxygenSupport").textContent = copy.metricTitles.oxygenSupport;
  document.getElementById("metricTitleTemperature").textContent = copy.metricTitles.temperature;
  document.getElementById("metricTitleSystolicBP").textContent = copy.metricTitles.systolicBP;
  document.getElementById("metricTitleHeartRate").textContent = copy.metricTitles.heartRate;
  document.getElementById("metricTitleConsciousness").textContent = copy.metricTitles.consciousness;
  document.getElementById("scale1Label").textContent = copy.scaleLabels[1];
  document.getElementById("scale2Label").innerHTML = formatExampleSuffix(copy.scaleLabels[2]);
  document.getElementById("historySectionTitle").textContent = copy.historySectionTitle;
  document.getElementById("historySectionSubtitle").textContent = copy.historySectionSubtitle;
  selectors.clearHistoryBtn.textContent = copy.clearHistory;
  if (selectors.refreshHistoryBtn) selectors.refreshHistoryBtn.textContent = copy.historyRefresh;
  if (selectors.resetHistoryFiltersBtn) selectors.resetHistoryFiltersBtn.textContent = copy.historyResetFilters;
  if (document.getElementById("historyFilterDateLabel")) document.getElementById("historyFilterDateLabel").textContent = copy.historyFilterDateLabel;
  if (document.getElementById("historyFilterHnLabel")) document.getElementById("historyFilterHnLabel").textContent = copy.historyFilterHnLabel;
  if (document.getElementById("historyFilterLocationLabel")) document.getElementById("historyFilterLocationLabel").textContent = copy.historyFilterLocationLabel;
  if (document.getElementById("historyFilterLevelLabel")) document.getElementById("historyFilterLevelLabel").textContent = copy.historyFilterLevelLabel;
  if (document.getElementById("historyFilterRedLabel")) document.getElementById("historyFilterRedLabel").textContent = copy.historyFilterRedLabel;
  if (selectors.historyFilterHn) selectors.historyFilterHn.placeholder = copy.historyFilterHnPlaceholder;
  populateHistoryFilterOptions();
  document.getElementById("historyHeadLocation").textContent = copy.historyHeadLocation;
  document.getElementById("historyHeadHn").textContent = copy.historyHeadHn;
  document.getElementById("historyHeadScore").textContent = copy.historyHeadScore;
  document.getElementById("historyHeadLevel").textContent = copy.historyHeadLevel;
  document.getElementById("historyHeadTime").textContent = copy.historyHeadTime;
  if (document.getElementById("historyHeadAction")) document.getElementById("historyHeadAction").textContent = copy.historyHeadAction;
  if (selectors.toggleAdminLoginBtn) selectors.toggleAdminLoginBtn.textContent = copy.adminLoginToggle;
  if (selectors.adminLogoutBtn) selectors.adminLogoutBtn.textContent = copy.adminLogout;
  if (document.getElementById("adminUsernameLabel")) document.getElementById("adminUsernameLabel").textContent = copy.adminUsernameLabel;
  if (document.getElementById("adminPasswordLabel")) document.getElementById("adminPasswordLabel").textContent = copy.adminPasswordLabel;
  if (selectors.adminLoginBtn) selectors.adminLoginBtn.textContent = copy.adminLoginBtn;
  document.getElementById("resultSectionTitle").textContent = copy.resultSectionTitle;
  document.getElementById("resultSectionSubtitle").textContent = copy.resultSectionSubtitle;
  document.getElementById("totalScoreLabel").textContent = copy.totalScoreLabel;
  document.getElementById("urgencyLabelTitle").textContent = copy.urgencyLabelTitle;
  document.getElementById("redFlagTitle").textContent = copy.redFlagTitle;
  selectors.saveBtn.textContent = copy.saveBtn;
  selectors.resetBtn.textContent = copy.resetBtn;
  if (selectors.mobileSaveBtn) selectors.mobileSaveBtn.textContent = copy.saveBtn;
  if (selectors.mobileResetBtn) selectors.mobileResetBtn.textContent = copy.resetBtn;
  if (selectors.metricProgressLabel) selectors.metricProgressLabel.textContent = currentLanguage === "th" ? "ความคืบหน้า NEWS" : "NEWS Progress";
  if (selectors.mobileSaveHint) selectors.mobileSaveHint.textContent = currentLanguage === "th" ? "พร้อมบันทึก" : "Ready to save";
  document.getElementById("adviceSectionTitle").textContent = copy.adviceSectionTitle;
  selectors.langThBtn.classList.toggle("active", currentLanguage === "th");
  selectors.langEnBtn.classList.toggle("active", currentLanguage === "en");
  updateAdminUI();
}

function updateAdminUI() {
  const copy = t();
  const loggedIn = isAdminLoggedIn();

  selectors.toggleAdminLoginBtn?.classList.toggle("d-none", loggedIn);
  selectors.adminLogoutBtn?.classList.toggle("d-none", !loggedIn);

  if (loggedIn && selectors.adminLoginPanel) {
    selectors.adminLoginPanel.classList.add("d-none");
  }

  if (selectors.adminStatus && loggedIn) {
    selectors.adminStatus.textContent = `${copy.adminLoginSuccess}`;
    selectors.adminStatus.classList.remove("error");
  }

  renderHistory();
}

function renderMetricButtons(containerId, inputId, options) {
  const input = document.getElementById(inputId);
  const container = document.getElementById(containerId);
  const selectedOptionKey = input?.dataset.selectedOptionKey || "";

  if (!input || !container) return;

  container.innerHTML = options.map((option, index) => {
    const optionKey = `${inputId}-${index}`;
    return `
      <button
        type="button"
        class="btn metric-option-button ${selectedOptionKey === optionKey ? "active" : ""}"
        data-input-target="${inputId}"
        data-option-key="${optionKey}"
        data-score-value="${option.value}"
      >
        <span class="metric-option-text">${escapeHtml(option.label)}</span>
        <span class="metric-option-score score-${option.value}">+${option.value}</span>
      </button>
    `;
  }).join("");
}

function syncMetricButtons(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const selectedOptionKey = input.dataset.selectedOptionKey || "";

  document.querySelectorAll(`[data-input-target="${inputId}"]`).forEach(button => {
    button.classList.toggle("active", button.dataset.optionKey === selectedOptionKey);
  });
}

function setMetricValue(inputId, value, optionKey = "") {
  const input = document.getElementById(inputId);
  if (!input) return;

  const isSameSelection = input.dataset.selectedOptionKey === optionKey && optionKey !== "";

  input.value = isSameSelection ? "" : value;
  input.dataset.selectedOptionKey = isSameSelection ? "" : optionKey;
  syncMetricButtons(inputId);
  if (isSameSelection && document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
  updateUI();
}

function renderSpo2Options(scale = "1") {
  const copy = t();
  const options = copy.metrics.spo2[scale] || copy.metrics.spo2[1];
  const label = document.getElementById("spo2ScaleLabel");
  const selectedOptionKey = selectors.spo2.dataset.selectedOptionKey || "";

  if (label) {
    label.innerHTML = formatExampleSuffix(copy.spo2ScaleDescriptions[scale] || "");
  }

  if (!options.some((_, index) => `spo2-${index}` === selectedOptionKey)) {
    selectors.spo2.value = "";
    selectors.spo2.dataset.selectedOptionKey = "";
  }

  renderMetricButtons("spo2Options", "spo2", options);
}

function renderAllMetricButtons() {
  const copy = t();
  renderMetricButtons("respiratoryRateOptions", "respiratoryRate", copy.metrics.respiratoryRate);
  renderMetricButtons("oxygenSupportOptions", "oxygenSupport", copy.metrics.oxygenSupport);
  renderMetricButtons("temperatureOptions", "temperature", copy.metrics.temperature);
  renderMetricButtons("systolicBPOptions", "systolicBP", copy.metrics.systolicBP);
  renderMetricButtons("heartRateOptions", "heartRate", copy.metrics.heartRate);
  renderMetricButtons("consciousnessOptions", "consciousness", copy.metrics.consciousness);
  renderSpo2Options(document.querySelector(".spo2-scale:checked")?.value || "1");
  if (historyFormLocked) setFormLocked(true);
}

function calculateScore() {
  return Array.from(document.querySelectorAll(".score-input")).reduce((sum, el) => {
    return sum + Number.parseInt(el.value || 0, 10);
  }, 0);
}

function getCompletedMetricCount() {
  return Array.from(document.querySelectorAll(".score-input")).filter(el => (el.value || "").trim() !== "").length;
}

function updateMetricProgress(score) {
  const completed = getCompletedMetricCount();
  const total = document.querySelectorAll(".score-input").length || 7;
  const ratio = total ? (completed / total) * 100 : 0;
  const progressText = `${completed}/${total}`;

  if (selectors.metricProgressText) selectors.metricProgressText.textContent = progressText;
  if (selectors.metricProgressFill) selectors.metricProgressFill.style.width = `${ratio}%`;
  if (selectors.mobileProgressText) selectors.mobileProgressText.textContent = progressText;
  if (selectors.mobileScore) selectors.mobileScore.textContent = `${score}`;
  if (selectors.mobileSaveBar) {
    selectors.mobileSaveBar.classList.toggle("is-complete", completed === total);
  }
}

function updateAssessmentValidation(showErrors = validationActive) {
  const invalidTime = !selectors.assessmentTime.value;
  const invalidLocation = !selectors.location.value.trim();
  const invalidHn = sanitizeHN(selectors.hn.value).length !== 9;
  const shouldHighlight = Boolean(showErrors);

  selectors.assessmentTime.classList.toggle("field-invalid", shouldHighlight && invalidTime);
  selectors.assessmentTime.setAttribute("aria-invalid", shouldHighlight && invalidTime ? "true" : "false");

  selectors.hn.classList.toggle("field-invalid", shouldHighlight && invalidHn);
  selectors.hn.setAttribute("aria-invalid", shouldHighlight && invalidHn ? "true" : "false");

  if (selectors.locationGroup) {
    selectors.locationGroup.classList.toggle("field-invalid", shouldHighlight && invalidLocation);
  }

  return {
    invalidTime,
    invalidLocation,
    invalidHn,
    hasError: invalidTime || invalidLocation || invalidHn
  };
}

function getRiskLevel(score) {
  if (score >= 7) return "Emergent";
  if (score >= 5) return "Urgent";
  if (score >= 3) return "Low";
  return "Normal";
}

function checkRedFlag() {
  return Array.from(document.querySelectorAll(".score-input")).some(el => Number.parseInt(el.value || 0, 10) === 3);
}

function getUrgencyClass(levelKey) {
  switch (levelKey) {
    case "Emergent": return "critical";
    case "Urgent": return "high";
    case "Low": return "mid";
    default: return "low";
  }
}

function getSeverityTheme(levelKey, red) {
  if (red) return "red";

  switch (levelKey) {
    case "Emergent": return "emergent";
    case "Urgent": return "urgent";
    case "Low": return "low";
    default: return "normal";
  }
}

function updateAdvice(levelKey, red) {
  const copy = t();
  const advice = copy.advice[levelKey] || copy.advice.Normal;
  const adviceTheme = getSeverityTheme(levelKey, false);
  const renderAdviceItems = items => items.map(item => {
    const isUrgencyTriage = /triage/i.test(item) && /urgency/i.test(item);
    return `<li class="${isUrgencyTriage ? "advice-emergency-item" : ""}">${escapeHtml(item)}</li>`;
  }).join("");
  const extra = red ? `
    <div class="advice-card severity-theme-red">
      <h3>${escapeHtml(copy.advice.redTitle)}</h3>
      <ul>
        ${renderAdviceItems(copy.advice.redItems)}
      </ul>
    </div>
  ` : "";

  selectors.adviceBox.innerHTML = `
    <div class="advice-card severity-theme-${adviceTheme}">
      <h3>${escapeHtml(advice.title)}</h3>
      <ul>
        ${renderAdviceItems(advice.items)}
      </ul>
      ${extra}
    </div>
  `;
}

function updateResultPanelState(score, red, levelKey) {
  if (!selectors.resultPanel) return;

  selectors.resultPanel.classList.remove(
    "panel-warning",
    "panel-danger",
    "severity-theme-normal",
    "severity-theme-low",
    "severity-theme-urgent",
    "severity-theme-emergent",
    "severity-theme-red"
  );

  selectors.resultPanel.classList.add(`severity-theme-${getSeverityTheme(levelKey, red)}`);

  if (red || levelKey === "Emergent") {
    selectors.resultPanel.classList.add("panel-danger");
    return;
  }

  if (score >= 5 || levelKey === "Urgent") {
    selectors.resultPanel.classList.add("panel-warning");
  }
}

function updateUI() {
  const copy = t();
  const score = calculateScore();
  const levelKey = getRiskLevel(score);
  const red = checkRedFlag();
  const urgencyClass = getUrgencyClass(levelKey);
  const scoreStateClass = red ? "watch" : score === 0 ? "ready" : "active";

  selectors.totalScore.textContent = score;
  selectors.urgencyLabel.textContent = copy.levelLabels[levelKey];
  selectors.urgencyLabel.className = `status-pill ${urgencyClass}`;
  selectors.redFlag.textContent = red ? copy.redFound : copy.redNotFound;
  selectors.redFlag.className = `status-pill ${red ? "danger" : "neutral"}`;
  selectors.scoreStateTag.textContent = red ? copy.scoreStateWatch : score === 0 ? copy.scoreStateReady : copy.scoreStateInProgress;
  selectors.scoreStateTag.className = `badge rounded-pill px-3 py-2 score-state-tag ${scoreStateClass}`;

  updateMetricProgress(score);
  updateAssessmentValidation();
  updateResultPanelState(score, red, levelKey);
  updateAdvice(levelKey, red);
}

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function isSameHistoryRecord(item, match) {
  if (!item || !match) return false;
  return String(item.savedAt || "") === String(match.savedAt || "")
    && sanitizeHN(item.hn || "") === sanitizeHN(match.hn || "")
    && String(item.assessmentTime || "") === String(match.assessmentTime || "");
}

function saveLocal(data, match = null) {
  const history = getHistory();
  const nextHistory = [...history];
  const matchIndex = match ? nextHistory.findIndex(item => isSameHistoryRecord(item, match)) : -1;

  if (matchIndex >= 0) {
    nextHistory[matchIndex] = data;
  } else {
    nextHistory.unshift(data);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextHistory.slice(0, 100)));
}

function deleteLocalHistory(match) {
  const history = getHistory().filter(item => !isSameHistoryRecord(item, match));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, 100)));
}

function getHistoryFilters() {
  const hn = sanitizeHN(selectors.historyFilterHn?.value || "");

  return {
    date: hn ? "" : (selectors.historyFilterDate?.value || ""),
    hn,
    location: selectors.historyFilterLocation?.value || "",
    levelKey: selectors.historyFilterLevel?.value || "",
    red: selectors.historyFilterRed?.value || ""
  };
}

function normalizeHistoryItem(item = {}) {
  return {
    location: item.location || "",
    hn: sanitizeHN(item.hn || ""),
    assessmentTime: item.assessmentTime || "",
    respiratoryRate: item.respiratoryRate || "",
    spo2: item.spo2 || "",
    oxygenSupport: item.oxygenSupport || "",
    temperature: item.temperature || "",
    systolicBP: item.systolicBP || "",
    heartRate: item.heartRate || "",
    consciousness: item.consciousness || "",
    spo2Scale: item.spo2Scale || "1",
    score: Number.parseInt(item.score ?? 0, 10) || 0,
    level: item.level || "",
    levelKey: item.levelKey || "",
    red: String(item.red).toLowerCase() === "true" || item.red === true,
    savedAt: item.savedAt || ""
  };
}

function getHistoryItemDate(item) {
  const rawValue = item.assessmentTime || item.savedAt || "";
  if (!rawValue) return "";

  const date = new Date(rawValue);
  if (Number.isNaN(date.getTime())) {
    const match = String(rawValue).match(/^(\d{4}-\d{2}-\d{2})/);
    return match ? match[1] : "";
  }

  const adjusted = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
  return adjusted.toISOString().slice(0, 10);
}

function filterHistoryItems(items, filters = getHistoryFilters()) {
  return items.filter(item => {
    const matchesDate = !filters.date || getHistoryItemDate(item) === filters.date;
    const matchesHn = !filters.hn || sanitizeHN(item.hn || "").includes(filters.hn);
    const matchesLocation = !filters.location || String(item.location || "").trim() === filters.location;
    const matchesLevel = !filters.levelKey || String(item.levelKey || "").trim() === filters.levelKey;
    const redValue = String(item.red).toLowerCase() === "true";
    const matchesRed = !filters.red || String(redValue) === filters.red;
    return matchesDate && matchesHn && matchesLocation && matchesLevel && matchesRed;
  });
}

function getDisplayedHistory(filters = getHistoryFilters()) {
  const remoteItems = historyState.remoteLoaded ? historyState.remoteItems : [];
  if (remoteItems.length || historyState.remoteLoaded) {
    return {
      items: filterHistoryItems(remoteItems, filters),
      source: historyState.remoteFailed ? "local" : "google"
    };
  }

  return {
    items: filterHistoryItems(getHistory(), filters),
    source: "local"
  };
}

function formatAssessmentDateTimeForInput(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return String(value).slice(0, 16);
  }

  const adjusted = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
  return adjusted.toISOString().slice(0, 16);
}

function buildHistoryItemKeys(item = {}) {
  const hn = sanitizeHN(item.hn || "");
  return [
    `${hn}|${item.assessmentTime || ""}|${item.savedAt || ""}`,
    `${hn}|${item.assessmentTime || ""}`
  ];
}

function mergeLocalHistoryMetadata(items) {
  const localEntries = getHistory();
  const metadataMap = new Map();

  localEntries.forEach(entry => {
    buildHistoryItemKeys(entry).forEach(key => {
      if (key && !metadataMap.has(key) && entry.selectionKeys) {
        metadataMap.set(key, entry.selectionKeys);
      }
    });
  });

  return items.map(item => {
    const matchKey = buildHistoryItemKeys(item).find(key => metadataMap.has(key));
    if (!matchKey) return item;
    return {
      ...item,
      selectionKeys: metadataMap.get(matchKey)
    };
  });
}

function restoreMetricSelection(inputId, value, preferredOptionKey = "") {
  const input = document.getElementById(inputId);
  if (!input) return;

  const normalizedValue = value === undefined || value === null ? "" : String(value);
  if (!normalizedValue) {
    input.value = "";
    input.dataset.selectedOptionKey = "";
    syncMetricButtons(inputId);
    return;
  }

  let optionKey = preferredOptionKey;
  if (optionKey && !document.querySelector(`[data-input-target="${inputId}"][data-option-key="${optionKey}"]`)) {
    optionKey = "";
  }

  if (!optionKey) {
    optionKey = document.querySelector(`[data-input-target="${inputId}"][data-score-value="${normalizedValue}"]`)?.dataset.optionKey || "";
  }

  input.value = normalizedValue;
  input.dataset.selectedOptionKey = optionKey;
  syncMetricButtons(inputId);
}

function loadHistoryItemIntoForm(item) {
  if (!item) return;

  const copy = t();
  const selectionKeys = item.selectionKeys || {};
  const spo2Scale = String(item.spo2Scale || "1");
  currentEditingRecord = {
    savedAt: item.savedAt || "",
    hn: sanitizeHN(item.hn || ""),
    assessmentTime: item.assessmentTime || ""
  };

  validationActive = false;
  document.querySelectorAll(".score-input").forEach(input => {
    input.value = "";
    input.dataset.selectedOptionKey = "";
  });

  selectors.assessmentTime.value = formatAssessmentDateTimeForInput(item.assessmentTime || item.savedAt);
  selectors.hn.value = sanitizeHN(item.hn || "");
  setLocation(String(item.location || "").trim());

  const scaleInput = document.querySelector(`.spo2-scale[value="${spo2Scale}"]`);
  if (scaleInput) {
    scaleInput.checked = true;
  } else {
    document.getElementById("scale1").checked = true;
  }

  renderAllMetricButtons();

  restoreMetricSelection("respiratoryRate", item.respiratoryRate, selectionKeys.respiratoryRate || "");
  restoreMetricSelection("spo2", item.spo2, selectionKeys.spo2 || "");
  restoreMetricSelection("oxygenSupport", item.oxygenSupport, selectionKeys.oxygenSupport || "");
  restoreMetricSelection("temperature", item.temperature, selectionKeys.temperature || "");
  restoreMetricSelection("systolicBP", item.systolicBP, selectionKeys.systolicBP || "");
  restoreMetricSelection("heartRate", item.heartRate, selectionKeys.heartRate || "");
  restoreMetricSelection("consciousness", item.consciousness, selectionKeys.consciousness || "");

  updateAssessmentValidation(false);
  updateUI();
  setFormLocked(true);
  setStatus(copy.statuses.historyLoaded, "success");
  selectors.assessmentCard?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function formatDateTime(value) {
  if (!value) return "-";
  const dt = new Date(value);
  if (Number.isNaN(dt.getTime())) return value;
  return dt.toLocaleString(currentLanguage === "th" ? "th-TH" : "en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function updateHistorySourceNote(source, itemCount) {
  const copy = t();
  if (!selectors.historySourceNote) return;
  const filters = getHistoryFilters();
  const hasFilters = Boolean(filters.date || filters.hn || filters.location || filters.levelKey || filters.red);

  let message = source === "google" ? copy.historySourceGoogle : copy.historySourceLocal;
  if (!itemCount) {
    message = hasFilters || historyState.remoteLoaded ? copy.historySourceEmpty : copy.noHistory;
  }

  selectors.historySourceNote.textContent = message;
  selectors.historySourceNote.classList.toggle("error", source !== "google" && Boolean(historyState.remoteFailed));
}

function updateHistoryResultCount(itemCount) {
  const copy = t();
  if (!selectors.historyResultCount) return;

  selectors.historyResultCount.textContent = itemCount
    ? copy.historyResultsCount.replace("{count}", String(itemCount))
    : copy.historyResultsCountZero;
}

function renderHistory() {
  const copy = t();
  const { items, source } = getDisplayedHistory();
  historyState.displayedItems = items;

  updateHistorySourceNote(source, items.length);
  updateHistoryResultCount(items.length);

  if (!items.length) {
    selectors.historyTable.innerHTML = `
      <tr>
        <td colspan="6" class="text-center text-secondary-light py-4">${escapeHtml(historyState.remoteLoaded ? copy.historySourceEmpty : copy.noHistory)}</td>
      </tr>
    `;
    return;
  }

  selectors.historyTable.innerHTML = items.map((item, index) => `
    <tr class="history-row" data-history-index="${index}">
      <td>${escapeHtml(item.location || "-")}</td>
      <td>${escapeHtml(item.hn || "-")}</td>
      <td><span class="badge text-bg-dark border">${item.score}</span></td>
      <td>${escapeHtml(copy.levelLabels[item.levelKey] || item.level || "-")}</td>
      <td>${escapeHtml(formatDateTime(item.assessmentTime || item.savedAt))}</td>
      <td class="history-action-cell">
        ${isAdminLoggedIn() ? `<button type="button" class="btn btn-outline-danger btn-sm" data-delete-history-index="${index}">${escapeHtml(copy.adminDelete)}</button>` : "-"}
      </td>
    </tr>
  `).join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setStatus(message, type = "info") {
  selectors.saveStatus.textContent = message;
  selectors.saveStatus.className = `save-status ${type}`;
}

async function fetchHistoryFromGoogleSheet(filters = getHistoryFilters()) {
  const params = new URLSearchParams({
    mode: "history",
    limit: String(HISTORY_FETCH_LIMIT)
  });

  if (filters.date) params.set("date", filters.date);
  if (filters.hn) params.set("hn", filters.hn);
  if (filters.location) params.set("location", filters.location);
  if (filters.levelKey) params.set("levelKey", filters.levelKey);
  if (filters.red) params.set("red", filters.red);

  const response = await fetch(`${SHEET_WEBAPP_URL}?${params.toString()}`, {
    method: "GET",
    mode: "cors",
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const payload = await response.json();
  if (!payload || payload.ok !== true || !Array.isArray(payload.items)) {
    throw new Error("Invalid history response");
  }

  return mergeLocalHistoryMetadata(payload.items.map(normalizeHistoryItem));
}

async function refreshHistory(options = {}) {
  const { silent = false } = options;
  const copy = t();

  historyState.loading = true;
  if (!silent && selectors.historySourceNote) {
    selectors.historySourceNote.textContent = copy.historyLoading;
    selectors.historySourceNote.classList.remove("error");
  }

  try {
    historyState.remoteItems = await fetchHistoryFromGoogleSheet();
    historyState.remoteLoaded = true;
    historyState.remoteFailed = false;
  } catch (error) {
    historyState.remoteItems = [];
    historyState.remoteLoaded = false;
    historyState.remoteFailed = true;
    console.error(error);
  } finally {
    historyState.loading = false;
    renderHistory();
  }
}

function scheduleHistoryRefresh() {
  window.clearTimeout(historyFilterTimer);
  historyFilterTimer = window.setTimeout(() => {
    refreshHistory({ silent: true });
  }, 250);
}

async function saveToGoogleSheet(payload) {
  await fetch(SHEET_WEBAPP_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(payload)
  });

  return { ok: true };
}

async function postJsonToSheet(payload) {
  const response = await fetch(SHEET_WEBAPP_URL, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}

async function loginAdmin() {
  const copy = t();
  const username = selectors.adminUsername?.value.trim() || "";
  const password = selectors.adminPassword?.value || "";

  try {
    const payload = await postJsonToSheet({
      mode: "login",
      username,
      password
    });

    if (!payload || payload.ok !== true || !payload.token) {
      throw new Error(payload?.error || copy.adminLoginFailed);
    }

    persistAdminAuth({
      token: payload.token,
      expiresAt: payload.expiresAt || null,
      username: payload.username || username
    });
    if (selectors.adminPassword) selectors.adminPassword.value = "";
    if (selectors.adminStatus) {
      selectors.adminStatus.textContent = copy.adminLoginSuccess;
      selectors.adminStatus.classList.remove("error");
    }
  } catch (error) {
    if (selectors.adminStatus) {
      selectors.adminStatus.textContent = copy.adminLoginFailed;
      selectors.adminStatus.classList.add("error");
    }
    console.error(error);
  }
}

async function deleteHistoryRecord(item) {
  const copy = t();

  if (!isAdminLoggedIn()) {
    setStatus(copy.adminRequired, "error");
    return;
  }

  if (!window.confirm(copy.adminDeleteConfirm)) return;

  try {
    const payload = await postJsonToSheet({
      mode: "delete",
      token: adminAuth.token,
      match: {
        savedAt: item.savedAt || "",
        hn: item.hn || "",
        assessmentTime: item.assessmentTime || ""
      }
    });

    if (!payload || payload.ok !== true) {
      throw new Error(payload?.error || copy.statuses.adminDeleteError);
    }

    deleteLocalHistory(item);
    if (currentEditingRecord && isSameHistoryRecord(currentEditingRecord, item)) {
      resetForm();
    }
    await refreshHistory({ silent: true });
    setStatus(copy.adminDeleteSuccess, "success");
  } catch (error) {
    const message = String(error?.message || error);
    if (/expired|invalid token/i.test(message)) {
      persistAdminAuth(null);
      setStatus(copy.statuses.adminSessionExpired, "error");
    } else {
      setStatus(copy.statuses.adminDeleteError, "error");
    }
    console.error(error);
  }
}

function getEditingMatchPayload() {
  if (!currentEditingRecord) return null;
  return {
    savedAt: currentEditingRecord.savedAt || "",
    hn: currentEditingRecord.hn || "",
    assessmentTime: currentEditingRecord.assessmentTime || ""
  };
}

async function handleSave() {
  const copy = t();
  if (historyFormLocked) {
    setStatus(copy.statuses.historyLoaded, "info");
    return;
  }
  const score = calculateScore();
  const levelKey = getRiskLevel(score);
  const red = checkRedFlag();
  const location = selectors.location.value.trim();
  const assessmentTime = selectors.assessmentTime.value;
  const hn = sanitizeHN(selectors.hn.value);

  selectors.hn.value = hn;
  validationActive = true;
  const validation = updateAssessmentValidation(true);

  if (validation.invalidTime) {
    setStatus(copy.statuses.assessmentTimeRequired, "error");
    selectors.assessmentTime.focus();
    return;
  }

  if (validation.invalidLocation) {
    setStatus(copy.statuses.locationRequired, "error");
    document.querySelector(".location-option")?.focus();
    return;
  }

  if (validation.invalidHn) {
    setStatus(copy.statuses.hnRequired, "error");
    selectors.hn.focus();
    return;
  }

  validationActive = false;
  updateAssessmentValidation(false);
  const editingMatch = getEditingMatchPayload();
  const savedAt = editingMatch?.savedAt || new Date().toISOString();

  const data = {
    location,
    hn,
    assessmentTime,
    respiratoryRate: selectors.respiratoryRate.value || "",
    spo2: selectors.spo2.value || "",
    oxygenSupport: selectors.oxygenSupport.value || "",
    temperature: selectors.temperature.value || "",
    systolicBP: selectors.systolicBP.value || "",
    heartRate: selectors.heartRate.value || "",
    consciousness: selectors.consciousness.value || "",
    spo2Scale: document.querySelector(".spo2-scale:checked")?.value || "1",
    score,
    level: copy.levelLabels[levelKey],
    levelKey,
    red,
    savedAt,
    mode: editingMatch ? "update" : "create",
    match: editingMatch,
    selectionKeys: {
      respiratoryRate: selectors.respiratoryRate.dataset.selectedOptionKey || "",
      spo2: selectors.spo2.dataset.selectedOptionKey || "",
      oxygenSupport: selectors.oxygenSupport.dataset.selectedOptionKey || "",
      temperature: selectors.temperature.dataset.selectedOptionKey || "",
      systolicBP: selectors.systolicBP.dataset.selectedOptionKey || "",
      heartRate: selectors.heartRate.dataset.selectedOptionKey || "",
      consciousness: selectors.consciousness.dataset.selectedOptionKey || ""
    }
  };

  saveLocal(data, editingMatch);
  renderHistory();
  setStatus(copy.statuses.savePending, "info");

  try {
    await saveToGoogleSheet(data);
    setStatus(copy.statuses.saveSuccess, "success");
    currentEditingRecord = {
      savedAt: data.savedAt,
      hn: data.hn,
      assessmentTime: data.assessmentTime
    };
  } catch (error) {
    console.error(error);
    setStatus(copy.statuses.saveError, "error");
  } finally {
    await refreshHistory({ silent: true });
  }
}

function resetForm() {
  const copy = t();
  currentEditingRecord = null;
  setFormLocked(false);
  validationActive = false;
  document.querySelectorAll(".score-input").forEach(el => {
    el.value = "";
    el.dataset.selectedOptionKey = "";
  });
  setLocation("");
  selectors.hn.value = "";
  document.getElementById("scale1").checked = true;
  renderAllMetricButtons();
  setDefaultAssessmentTime();
  setStatus(copy.statuses.resetSuccess, "info");
  updateAssessmentValidation(false);
  updateUI();
}

function clearHistory() {
  const copy = t();
  currentEditingRecord = null;
  setFormLocked(false);
  localStorage.removeItem(STORAGE_KEY);
  renderHistory();
  setStatus(copy.statuses.clearHistorySuccess, "info");
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch(console.error);
    });
  }
}

function setupInstallPrompt() {
  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredPrompt = event;
    selectors.installBtn.classList.remove("d-none");
  });

  selectors.installBtn.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    selectors.installBtn.classList.add("d-none");
  });
}

function setLanguage(language) {
  currentLanguage = language === "en" ? "en" : "th";
  localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  applyStaticTranslations();
  renderAllMetricButtons();
  renderHistory();
  updateUI();
  syncPanelHeights();
}

function syncPanelHeights() {
  if (!selectors.assessmentCard || !selectors.resultPanel || !selectors.stickyPanel || !selectors.stickyPanel.parentElement) return;

  const sidebarColumn = selectors.stickyPanel.parentElement;

  if (window.innerWidth < 992) {
    selectors.resultPanel.style.minHeight = "";
    selectors.stickyPanel.style.top = "";
    selectors.stickyPanel.style.left = "";
    selectors.stickyPanel.style.width = "";
    selectors.stickyPanel.style.maxHeight = "";
    sidebarColumn.style.minHeight = "";
    return;
  }

  const assessmentRect = selectors.assessmentCard.getBoundingClientRect();
  const sidebarRect = sidebarColumn.getBoundingClientRect();
  const assessmentHeight = assessmentRect.height;
  const advicePanel = selectors.stickyPanel.querySelectorAll("section")[1];
  const viewportTop = Math.max(16, Math.round(assessmentRect.top));
  const viewportBottomGap = 16;
  const availableHeight = Math.max(320, window.innerHeight - viewportTop - viewportBottomGap);

  selectors.resultPanel.style.minHeight = "";
  const naturalResultHeight = selectors.resultPanel.scrollHeight;
  const adviceHeight = advicePanel ? advicePanel.scrollHeight : 0;
  const gapHeight = advicePanel ? 16 : 0;
  const remainingForResult = Math.max(naturalResultHeight, availableHeight - adviceHeight - gapHeight);
  const resultHeight = Math.max(naturalResultHeight, Math.min(assessmentHeight, remainingForResult));

  selectors.stickyPanel.style.top = `${viewportTop}px`;
  selectors.stickyPanel.style.left = `${Math.round(sidebarRect.left)}px`;
  selectors.stickyPanel.style.width = `${Math.round(sidebarRect.width)}px`;
  selectors.stickyPanel.style.maxHeight = `${Math.ceil(availableHeight)}px`;
  selectors.resultPanel.style.minHeight = `${Math.ceil(resultHeight)}px`;
  sidebarColumn.style.minHeight = `${Math.ceil(availableHeight + viewportTop)}px`;
}

function setupInteractiveCards() {
  const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const cards = document.querySelectorAll(".app-card, .result-panel, .metric-card");

  cards.forEach(card => {
    card.classList.add("interactive-card");

    if (!supportsHover) return;

    card.addEventListener("pointermove", event => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      card.style.setProperty("--pointer-x", `${x}%`);
      card.style.setProperty("--pointer-y", `${y}%`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--pointer-x", "50%");
      card.style.setProperty("--pointer-y", "50%");
    });
  });
}

function init() {
  applyStaticTranslations();
  setDefaultAssessmentTime();
  setDefaultHistoryDate();
  renderAllMetricButtons();
  renderHistory();
  syncLocationButtons();
  setupInteractiveCards();
  updateUI();
  registerServiceWorker();
  setupInstallPrompt();

  document.addEventListener("click", event => {
    if (historyFormLocked) return;

    const metricButton = event.target.closest(".metric-option-button");
    if (metricButton) {
      setMetricValue(
        metricButton.dataset.inputTarget,
        metricButton.dataset.scoreValue || "",
        metricButton.dataset.optionKey || ""
      );
      return;
    }

    const locationButton = event.target.closest(".location-option");
    if (locationButton) {
      const nextLocation = locationButton.dataset.location || "";
      setLocation(selectors.location.value === nextLocation ? "" : nextLocation);
    }
  });

  document.querySelectorAll(".spo2-scale").forEach(el => {
    el.addEventListener("change", event => {
      if (historyFormLocked) return;
      renderSpo2Options(event.target.value);
      updateUI();
    });
  });

  selectors.hn.addEventListener("input", () => {
    if (historyFormLocked) return;
    selectors.hn.value = sanitizeHN(selectors.hn.value);
    if (validationActive) updateAssessmentValidation(true);
  });

  selectors.historyFilterHn?.addEventListener("input", () => {
    selectors.historyFilterHn.value = sanitizeHN(selectors.historyFilterHn.value);
    renderHistory();
    scheduleHistoryRefresh();
  });

  selectors.historyFilterDate?.addEventListener("change", () => {
    renderHistory();
    refreshHistory({ silent: true });
  });

  selectors.historyFilterLocation?.addEventListener("change", () => {
    renderHistory();
    refreshHistory({ silent: true });
  });

  selectors.historyFilterLevel?.addEventListener("change", () => {
    renderHistory();
    refreshHistory({ silent: true });
  });

  selectors.historyFilterRed?.addEventListener("change", () => {
    renderHistory();
    refreshHistory({ silent: true });
  });

  selectors.assessmentTime.addEventListener("input", () => {
    if (historyFormLocked) return;
    if (validationActive) updateAssessmentValidation(true);
  });

  selectors.langThBtn.addEventListener("click", () => setLanguage("th"));
  selectors.langEnBtn.addEventListener("click", () => setLanguage("en"));
  selectors.saveBtn.addEventListener("click", handleSave);
  selectors.mobileSaveBtn?.addEventListener("click", handleSave);
  selectors.resetBtn.addEventListener("click", resetForm);
  selectors.mobileResetBtn?.addEventListener("click", resetForm);
  selectors.resetBtnTop?.addEventListener("click", resetForm);
  selectors.clearHistoryBtn.addEventListener("click", clearHistory);
  selectors.refreshHistoryBtn?.addEventListener("click", () => {
    refreshHistory();
  });
  selectors.toggleAdminLoginBtn?.addEventListener("click", () => {
    selectors.adminLoginPanel?.classList.toggle("d-none");
  });
  selectors.adminLoginBtn?.addEventListener("click", loginAdmin);
  selectors.adminPassword?.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      loginAdmin();
    }
  });
  selectors.adminLogoutBtn?.addEventListener("click", () => {
    persistAdminAuth(null);
    if (selectors.adminStatus) {
      selectors.adminStatus.textContent = "";
      selectors.adminStatus.classList.remove("error");
    }
  });
  selectors.historyTable?.addEventListener("click", event => {
    const deleteButton = event.target.closest("[data-delete-history-index]");
    if (deleteButton) {
      const deleteIndex = Number.parseInt(deleteButton.dataset.deleteHistoryIndex || "-1", 10);
      if (!Number.isNaN(deleteIndex) && deleteIndex >= 0) {
        deleteHistoryRecord(historyState.displayedItems[deleteIndex]);
      }
      return;
    }

    const row = event.target.closest("[data-history-index]");
    if (!row) return;

    const index = Number.parseInt(row.dataset.historyIndex || "-1", 10);
    if (Number.isNaN(index) || index < 0) return;

    loadHistoryItemIntoForm(historyState.displayedItems[index]);
  });
  selectors.resetHistoryFiltersBtn?.addEventListener("click", () => {
    setDefaultHistoryDate();
    if (selectors.historyFilterHn) selectors.historyFilterHn.value = "";
    if (selectors.historyFilterLocation) selectors.historyFilterLocation.value = "";
    if (selectors.historyFilterLevel) selectors.historyFilterLevel.value = "";
    if (selectors.historyFilterRed) selectors.historyFilterRed.value = "";
    renderHistory();
    refreshHistory({ silent: true });
  });
  window.addEventListener("resize", syncPanelHeights);
  window.addEventListener("scroll", syncPanelHeights, { passive: true });
  requestAnimationFrame(syncPanelHeights);
  refreshHistory();
}

document.addEventListener("DOMContentLoaded", init);

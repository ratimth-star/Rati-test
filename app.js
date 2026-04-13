const SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbz_mzulEZJF5PlhkGUzPXUX7u0Zjt784oHGnE-iI9lUBgAIrYl0VWOvPbWTUXgq_wcwgQ/exec";
const STORAGE_KEY = "suandok-news-history-v2";
const LANGUAGE_KEY = "suandok-news-language";

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
    historySectionSubtitle: "เก็บไว้ในเครื่อง และสามารถส่งต่อไป Google Sheet ได้",
    clearHistory: "ล้างประวัติ",
    historyHeadLocation: "สถานที่",
    historyHeadHn: "HN",
    historyHeadScore: "คะแนน",
    historyHeadLevel: "ระดับ",
    historyHeadTime: "เวลา",
    resultSectionTitle: "ผลการประเมิน",
    resultSectionSubtitle: "อัปเดตแบบเรียลไทม์",
    totalScoreLabel: "คะแนนรวม",
    urgencyLabelTitle: "ระดับความเร่งด่วน",
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
      2: "เสี่ยงภาวะหายใจล้มเหลวจาก CO2 สูง"
    },
    spo2ScaleDescriptions: {
      1: "เกณฑ์ทั่วไป",
      2: "เสี่ยงภาวะหายใจล้มเหลวจาก CO2 สูง"
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
      Urgent: "เร่งด่วน",
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
          "ไม่เร่งด่วน / ไม่ฉุกเฉิน",
          "ประเมินอาการและอาการแสดงของผู้ป่วย",
          "อธิบายขั้นตอนการรับบริการ"
        ]
      },
      Low: {
        title: "3-4 คะแนน: Semi-urgent",
        items: [
          "เร่งด่วนเล็กน้อย / เจ็บป่วยกึ่งฉุกเฉิน",
          "ประเมินอาการและอาการแสดงของผู้ป่วย",
          "รายงานพยาบาลเพื่อประเมินอาการซ้ำ",
          "ระหว่างรอตรวจ เฝ้าระวังสัญญาณชีพและอาการเปลี่ยนแปลง"
        ]
      },
      Urgent: {
        title: "5-6 คะแนน: Urgent",
        items: [
          "เร่งด่วน / เจ็บป่วยฉุกเฉินระดับปานกลาง",
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
        "กรณีพบคะแนนข้อใดข้อหนึ่ง = +3",
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
      clearHistorySuccess: "ล้างประวัติเรียบร้อย"
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
    historySectionSubtitle: "Stored on this device and can also be sent to Google Sheet",
    clearHistory: "Clear History",
    historyHeadLocation: "Location",
    historyHeadHn: "HN",
    historyHeadScore: "Score",
    historyHeadLevel: "Level",
    historyHeadTime: "Time",
    resultSectionTitle: "Assessment Result",
    resultSectionSubtitle: "Updated in real time",
    totalScoreLabel: "Total Score",
    urgencyLabelTitle: "Urgency Level",
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
      2: "Risk of CO2 Retention"
    },
    spo2ScaleDescriptions: {
      1: "General Criteria",
      2: "Risk of respiratory failure from high CO2"
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
        "When any single item scores +3",
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
      clearHistorySuccess: "History cleared successfully"
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

function t() {
  return I18N[currentLanguage] || I18N.th;
}

function setDefaultAssessmentTime() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  selectors.assessmentTime.value = now.toISOString().slice(0, 16);
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
  document.getElementById("metricTitleSpo2").textContent = copy.metricTitles.spo2;
  document.getElementById("metricTitleOxygenSupport").textContent = copy.metricTitles.oxygenSupport;
  document.getElementById("metricTitleTemperature").textContent = copy.metricTitles.temperature;
  document.getElementById("metricTitleSystolicBP").textContent = copy.metricTitles.systolicBP;
  document.getElementById("metricTitleHeartRate").textContent = copy.metricTitles.heartRate;
  document.getElementById("metricTitleConsciousness").textContent = copy.metricTitles.consciousness;
  document.getElementById("scale1Label").textContent = copy.scaleLabels[1];
  document.getElementById("scale2Label").textContent = copy.scaleLabels[2];
  document.getElementById("historySectionTitle").textContent = copy.historySectionTitle;
  document.getElementById("historySectionSubtitle").textContent = copy.historySectionSubtitle;
  selectors.clearHistoryBtn.textContent = copy.clearHistory;
  document.getElementById("historyHeadLocation").textContent = copy.historyHeadLocation;
  document.getElementById("historyHeadHn").textContent = copy.historyHeadHn;
  document.getElementById("historyHeadScore").textContent = copy.historyHeadScore;
  document.getElementById("historyHeadLevel").textContent = copy.historyHeadLevel;
  document.getElementById("historyHeadTime").textContent = copy.historyHeadTime;
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
    label.textContent = copy.spo2ScaleDescriptions[scale] || "";
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

function updateAdvice(levelKey, red) {
  const copy = t();
  const advice = copy.advice[levelKey] || copy.advice.Normal;
  const extra = red ? `
    <div class="advice-card">
      <h3>${escapeHtml(copy.advice.redTitle)}</h3>
      <ul>
        ${copy.advice.redItems.map(item => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>
  ` : "";

  selectors.adviceBox.innerHTML = `
    <div class="advice-card">
      <h3>${escapeHtml(advice.title)}</h3>
      <ul>
        ${advice.items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
      ${extra}
    </div>
  `;
}

function updateResultPanelState(score, red, levelKey) {
  if (!selectors.resultPanel) return;

  selectors.resultPanel.classList.remove("panel-warning", "panel-danger");

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

  selectors.totalScore.textContent = score;
  selectors.urgencyLabel.textContent = copy.levelLabels[levelKey];
  selectors.urgencyLabel.className = `status-pill ${urgencyClass}`;
  selectors.redFlag.textContent = red ? copy.redFound : copy.redNotFound;
  selectors.redFlag.className = `status-pill ${red ? "danger" : "neutral"}`;
  selectors.scoreStateTag.textContent = red ? copy.scoreStateWatch : score === 0 ? copy.scoreStateReady : copy.scoreStateInProgress;
  selectors.scoreStateTag.className = `badge rounded-pill px-3 py-2 ${red ? "text-bg-danger" : score === 0 ? "text-bg-secondary" : "text-bg-info"}`;

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

function saveLocal(data) {
  const history = getHistory();
  history.unshift(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, 100)));
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

function renderHistory() {
  const copy = t();
  const history = getHistory();

  if (!history.length) {
    selectors.historyTable.innerHTML = `
      <tr>
        <td colspan="5" class="text-center text-secondary-light py-4">${escapeHtml(copy.noHistory)}</td>
      </tr>
    `;
    return;
  }

  selectors.historyTable.innerHTML = history.map(item => `
    <tr>
      <td>${escapeHtml(item.location || "-")}</td>
      <td>${escapeHtml(item.hn || "-")}</td>
      <td><span class="badge text-bg-dark border">${item.score}</span></td>
      <td>${escapeHtml(copy.levelLabels[item.levelKey] || item.level || "-")}</td>
      <td>${escapeHtml(formatDateTime(item.assessmentTime || item.savedAt))}</td>
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

async function saveToGoogleSheet(payload) {
  const res = await fetch(SHEET_WEBAPP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(payload)
  });

  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}

async function handleSave() {
  const copy = t();
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

  const data = {
    location,
    hn,
    assessmentTime,
    score,
    level: copy.levelLabels[levelKey],
    levelKey,
    red,
    savedAt: new Date().toISOString(),
    spo2Scale: document.querySelector(".spo2-scale:checked")?.value || "1"
  };

  saveLocal(data);
  renderHistory();
  setStatus(copy.statuses.savePending, "info");

  try {
    await saveToGoogleSheet(data);
    setStatus(copy.statuses.saveSuccess, "success");
  } catch (error) {
    console.error(error);
    setStatus(copy.statuses.saveError, "error");
  }
}

function resetForm() {
  const copy = t();
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
  renderAllMetricButtons();
  renderHistory();
  syncLocationButtons();
  setupInteractiveCards();
  updateUI();
  registerServiceWorker();
  setupInstallPrompt();

  document.addEventListener("click", event => {
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
      renderSpo2Options(event.target.value);
      updateUI();
    });
  });

  selectors.hn.addEventListener("input", () => {
    selectors.hn.value = sanitizeHN(selectors.hn.value);
    if (validationActive) updateAssessmentValidation(true);
  });

  selectors.assessmentTime.addEventListener("input", () => {
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
  window.addEventListener("resize", syncPanelHeights);
  window.addEventListener("scroll", syncPanelHeights, { passive: true });
  requestAnimationFrame(syncPanelHeights);
}

document.addEventListener("DOMContentLoaded", init);

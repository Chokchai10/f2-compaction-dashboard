const dictionaries = {
  th: {
    eyebrow: "Onshore Compaction Control",
    title: "F2 แผนงานและติดตามเครื่องจักร",
    language: "ภาษา",
    reset: "รีเซ็ตข้อมูล",
    resetView: "รีเซ็ตมุมมอง",
    adminMode: "Admin Drag Mode",
    dragHint: "ใช้ล้อเมาส์เพื่อซูม, ลากพื้นแผนที่เพื่อเลื่อน, ลากเครื่องจักรเพื่ออัปเดตพิกัด",
    adminTools: "เครื่องมือแอดมิน",
    editMode: "โหมดแก้ไข",
    modeMachine: "ย้ายเครื่องจักร",
    modeRoute: "แก้เส้นทางรถบรรทุก",
    modeBoundary: "แก้ขอบพื้นที่ F2",
    modePlot: "แบ่งแปลง Inspection",
    modeGrid: "ปรับ STA/Offset Grid",
    addRoutePoint: "เพิ่มจุดเส้นทาง",
    addPlot: "เพิ่มแปลง",
    resetMapEdit: "รีเซ็ตขอบ/เส้น/แปลง",
    showStaGrid: "แสดง STA/Offset Grid",
    showBoundary: "แสดงขอบพื้นที่ F2",
    showStatusBadge: "แสดงเครื่องหมายสถานะ ✓/×",
    machineVisibility: "แสดงเครื่องจักร",
    shareLink: "แชร์ลิงก์สถานะล่าสุด",
    lastUpdated: "แก้ไขล่าสุด",
    machinePhoto: "รูปเครื่อง",
    reportDate: "วันที่รายงาน",
    generateReport: "สรุปรายงาน",
    saveImage: "Save image รายวัน",
    inspectionEditor: "Inspection Editor",
    selectPlot: "เลือกแปลง",
    plotLabel: "ชื่อ/วันที่แสดง",
    plotLevel: "ระดับแปลง",
    plotColor: "สีแปลง",
    savePlot: "บันทึกแปลง",
    deletePlot: "ลบแปลง",
    machineDetails: "ข้อมูลเครื่องจักรรายคัน",
    operator: "คนขับ",
    brand: "ยี่ห้อ",
    workTime: "เวลาทำงาน",
    status: "สถานะ",
    normal: "ทำงานปกติ",
    broken: "เสีย",
    downTime: "เวลาเสีย",
    rotate: "หมุน",
    viewSection: "ดู Section",
    sectionCaption: "ภาพด้านข้างแสดงลำดับชั้นบดอัดเหนือระดับน้ำทะเลจนถึง final elevation +3.0m",
    mapTitle: "แผนที่พื้นที่ F2",
    mapSub: "ติดตามโซนบดอัด, พิกัดเครื่องจักร และเส้นทางรถบรรทุกทราย",
    live: "จำลอง Live Update",
    summary: "ภาพรวมวันนี้",
    overall: "Progress รวม",
    volume: "ทรายรับเข้า",
    activeMachines: "เครื่องจักรใช้งาน",
    hours: "ชั่วโมงรวม",
    layers: "ชั้นบดอัด",
    machineFleet: "เครื่องจักร",
    dailyUpdate: "อัปเดตงานวันนี้",
    truckTrips: "จำนวนเที่ยวรถบรรทุกแดง",
    shiftNote: "บันทึกกะงาน",
    saveUpdate: "บันทึกอัปเดต",
    footer: "F2 งานบดอัด Onshore หลังงานถมทะเลจาก Cutter Suction Dredging Reclamation",
    target: "ระดับเป้าหมาย",
    progress: "ความคืบหน้า",
    count: "จำนวน",
    active: "ใช้งาน",
    workHours: "ชม.",
    notePlaceholder: "เช่น รถบดเริ่มปิดงานชั้น 2.4m ฝั่งตะวันออก, รอ sand truck เพิ่มช่วงบ่าย",
    saved: "บันทึกแล้ว",
    excavator: "รถขุด Excavator",
    dozer: "รถ Bulldozer",
    grader: "รถเกรดเดอร์",
    roller: "รถบดล้อยาง",
  },
  en: {
    eyebrow: "Onshore Compaction Control",
    title: "F2 Progress & Machine Planner",
    language: "Language",
    reset: "Reset data",
    resetView: "Reset view",
    adminMode: "Admin drag mode",
    dragHint: "Mouse wheel to zoom, drag the map to pan, drag machines to update positions",
    adminTools: "Admin tools",
    editMode: "Edit mode",
    modeMachine: "Move machines",
    modeRoute: "Edit truck route",
    modeBoundary: "Edit F2 boundary",
    modePlot: "Inspection plots",
    modeGrid: "Adjust STA/Offset Grid",
    addRoutePoint: "Add route point",
    addPlot: "Add plot",
    resetMapEdit: "Reset boundary/route/plots",
    showStaGrid: "Show STA/Offset Grid",
    showBoundary: "Show F2 boundary",
    showStatusBadge: "Show status ✓/×",
    machineVisibility: "Machine visibility",
    shareLink: "Share latest status link",
    lastUpdated: "Last updated",
    machinePhoto: "Machine photo",
    reportDate: "Report date",
    generateReport: "Generate report",
    saveImage: "Save daily image",
    inspectionEditor: "Inspection Editor",
    selectPlot: "Select plot",
    plotLabel: "Display name/date",
    plotLevel: "Plot level",
    plotColor: "Plot color",
    savePlot: "Save plot",
    deletePlot: "Delete plot",
    machineDetails: "Machine details",
    operator: "Operator",
    brand: "Brand",
    workTime: "Work time",
    status: "Status",
    normal: "Normal",
    broken: "Breakdown",
    downTime: "Down time",
    rotate: "Rotate",
    viewSection: "View section",
    sectionCaption: "Side section showing compaction layers above sea level up to final elevation +3.0m",
    mapTitle: "F2 Site Map",
    mapSub: "Track compaction zones, machine positions, and red sand truck route",
    live: "Live simulation",
    summary: "Today overview",
    overall: "Overall progress",
    volume: "Sand received",
    activeMachines: "Active machines",
    hours: "Total hours",
    layers: "Compaction layers",
    machineFleet: "Machine fleet",
    dailyUpdate: "Daily update",
    truckTrips: "Red truck trips",
    shiftNote: "Shift note",
    saveUpdate: "Save update",
    footer: "F2 Onshore Compaction after Cutter Suction Dredging Reclamation",
    target: "Target elevation",
    progress: "Progress",
    count: "Total",
    active: "Active",
    workHours: "hrs",
    notePlaceholder: "Example: roller is closing the 2.4m layer on the east side, waiting for afternoon sand trucks",
    saved: "Saved",
    excavator: "Excavator",
    dozer: "Bulldozer",
    grader: "Motor grader",
    roller: "Pneumatic roller",
  },
  zh: {
    eyebrow: "陆上压实控制",
    title: "F2 进度与机械计划",
    language: "语言",
    reset: "重置数据",
    resetView: "重置视图",
    adminMode: "管理员拖动模式",
    dragHint: "滚轮缩放，拖动地图平移，拖动机械更新坐标",
    adminTools: "管理员工具",
    editMode: "编辑模式",
    modeMachine: "移动机械",
    modeRoute: "编辑卡车路线",
    modeBoundary: "编辑 F2 边界",
    modePlot: "Inspection 分区",
    modeGrid: "调整 STA/Offset 网格",
    addRoutePoint: "添加路线点",
    addPlot: "添加分区",
    resetMapEdit: "重置边界/路线/分区",
    showStaGrid: "显示 STA/Offset 网格",
    showBoundary: "显示 F2 边界",
    showStatusBadge: "显示状态 ✓/×",
    machineVisibility: "显示机械",
    shareLink: "分享最新状态链接",
    lastUpdated: "最后更新",
    machinePhoto: "机械照片",
    reportDate: "报告日期",
    generateReport: "生成报告",
    saveImage: "保存每日图片",
    inspectionEditor: "Inspection 编辑器",
    selectPlot: "选择分区",
    plotLabel: "显示名称/日期",
    plotLevel: "分区标高",
    plotColor: "分区颜色",
    savePlot: "保存分区",
    deletePlot: "删除分区",
    machineDetails: "机械详情",
    operator: "司机",
    brand: "品牌",
    workTime: "工作时间",
    status: "状态",
    normal: "正常",
    broken: "故障",
    downTime: "故障时间",
    rotate: "旋转",
    viewSection: "查看剖面",
    sectionCaption: "侧面剖面显示海平面以上压实层，直到最终标高 +3.0m",
    mapTitle: "F2 现场地图",
    mapSub: "跟踪压实区域、机械位置和红色砂车路线",
    live: "模拟实时更新",
    summary: "今日总览",
    overall: "总体进度",
    volume: "进场砂量",
    activeMachines: "运行机械",
    hours: "总工时",
    layers: "压实层",
    machineFleet: "机械设备",
    dailyUpdate: "今日更新",
    truckTrips: "红色卡车车次",
    shiftNote: "班次记录",
    saveUpdate: "保存更新",
    footer: "F2 绞吸船吹填后陆上压实工程",
    target: "目标标高",
    progress: "进度",
    count: "总数",
    active: "运行",
    workHours: "小时",
    notePlaceholder: "例如：胶轮压路机正在东侧完成 2.4m 层，下午等待砂车补料",
    saved: "已保存",
    excavator: "挖掘机",
    dozer: "推土机",
    grader: "平地机",
    roller: "胶轮压路机",
  },
};

const machineDefaults = [
  { id: "m1", type: "excavator", x: 28, y: 32, angle: -8 },
  { id: "m2", type: "excavator", x: 40, y: 36, angle: 9 },
  { id: "m3", type: "excavator", x: 55, y: 41, angle: -14 },
  { id: "m4", type: "excavator", x: 70, y: 50, angle: 16 },
  { id: "m5", type: "dozer", x: 21, y: 49, angle: -3 },
  { id: "m6", type: "dozer", x: 33, y: 50, angle: 4 },
  { id: "m7", type: "dozer", x: 45, y: 50, angle: -6 },
  { id: "m8", type: "dozer", x: 57, y: 53, angle: 8 },
  { id: "m9", type: "dozer", x: 67, y: 49, angle: -10 },
  { id: "m10", type: "dozer", x: 77, y: 47, angle: 12 },
  { id: "m11", type: "dozer", x: 84, y: 57, angle: -7 },
  { id: "m12", type: "dozer", x: 28, y: 62, angle: 11 },
  { id: "m13", type: "grader", x: 51, y: 67, angle: -9 },
  { id: "m14", type: "roller", x: 42, y: 60, angle: 7 },
  { id: "m15", type: "roller", x: 62, y: 62, angle: -6 },
];

const defaultMachinePositions = Object.fromEntries(
  machineDefaults.map((machine) => [machine.id, { x: machine.x, y: machine.y, angle: machine.angle }])
);

const defaultBoundaryPoints = [
  { x: 96, y: 184 },
  { x: 910, y: 188 },
  { x: 915, y: 474 },
  { x: 866, y: 548 },
  { x: 638, y: 604 },
  { x: 244, y: 608 },
  { x: 94, y: 536 },
  { x: 75, y: 360 },
];

const defaultRoutePoints = [
  { x: 87, y: 549 },
  { x: 190, y: 514 },
  { x: 309, y: 476 },
  { x: 436, y: 447 },
  { x: 590, y: 412 },
  { x: 731, y: 368 },
  { x: 897, y: 294 },
];

const defaultInspectionPlots = [
  { id: "F2-A1", label: "2026-06-25", level: "2.0m", color: "#1577b8", x: 140, y: 225, w: 185, h: 92 },
  { id: "F2-B1", label: "2026-06-25", level: "2.0m", color: "#1f9d55", x: 365, y: 225, w: 205, h: 92 },
  { id: "F2-C1", label: "2026-06-25", level: "2.4m", color: "#d69214", x: 610, y: 225, w: 220, h: 92 },
];

const defaultGridFrame = [
  { x: 80, y: 190 },
  { x: 930, y: 190 },
  { x: 930, y: 595 },
  { x: 80, y: 595 },
];

const defaultMachineDetails = Object.fromEntries(
  machineDefaults.map((machine) => [
    machine.id,
    {
      operator: "",
      brand: machine.type === "excavator" ? "SANY" : "",
      workTime: "08:00-17:00",
      status: "normal",
      downTime: "",
    },
  ])
);

const defaultState = {
  language: "th",
  truckTrips: 72,
  shiftNote: "",
  reportDate: new Date().toISOString().slice(0, 10),
  view: { zoom: 1, panX: 0, panY: 0 },
  machinePositions: defaultMachinePositions,
  editMode: "machine",
  boundaryPoints: defaultBoundaryPoints,
  routePoints: defaultRoutePoints,
  inspectionPlots: defaultInspectionPlots,
  selectedPlotId: "F2-A1",
  showStaGrid: true,
  showBoundary: true,
  showStatusBadge: true,
  machineTypeVisibility: { grader: true, excavator: true, dozer: true, roller: true },
  gridFrame: defaultGridFrame,
  machineDetails: defaultMachineDetails,
  activeMachineId: "m1",
  lastUpdated: new Date().toISOString(),
  layers: [
    { id: "zone-a", elevation: "1.6m", progress: 84 },
    { id: "zone-b", elevation: "2.0m", progress: 62 },
    { id: "zone-c", elevation: "2.4m", progress: 38 },
    { id: "zone-d", elevation: "3.0m", progress: 14 },
  ],
  fleet: [
    { id: "excavator", count: 4, active: 4, hours: 8.5 },
    { id: "dozer", count: 8, active: 7, hours: 9 },
    { id: "grader", count: 1, active: 1, hours: 6.5 },
    { id: "roller", count: 2, active: 2, hours: 7.5 },
  ],
};

const storageKey = "f2-compaction-dashboard-state";
let state = loadState();

const languageSelect = document.querySelector("#languageSelect");
const layerList = document.querySelector("#layerList");
const fleetList = document.querySelector("#fleetList");
const truckTripsInput = document.querySelector("#truckTripsInput");
const shiftNoteInput = document.querySelector("#shiftNoteInput");
const updateForm = document.querySelector("#updateForm");
const resetButton = document.querySelector("#resetButton");
const shareLinkButton = document.querySelector("#shareLinkButton");
const mapFrame = document.querySelector("#mapFrame");
const mapContent = document.querySelector("#mapContent");
const machineLayer = document.querySelector("#machineLayer");
const zoomRange = document.querySelector("#zoomRange");
const zoomInButton = document.querySelector("#zoomInButton");
const zoomOutButton = document.querySelector("#zoomOutButton");
const resetViewButton = document.querySelector("#resetViewButton");
const editModeSelect = document.querySelector("#editModeSelect");
const addRoutePointButton = document.querySelector("#addRoutePointButton");
const addPlotButton = document.querySelector("#addPlotButton");
const addPlotEditorButton = document.querySelector("#addPlotEditorButton");
const resetMapEditButton = document.querySelector("#resetMapEditButton");
const f2Boundary = document.querySelector("#f2Boundary");
const truckRoute = document.querySelector("#truckRoute");
const inspectionLayer = document.querySelector("#inspectionLayer");
const editorHandles = document.querySelector("#editorHandles");
const sectionModal = document.querySelector("#sectionModal");
const sectionTitle = document.querySelector("#sectionTitle");
const sectionCaption = document.querySelector("#sectionCaption");
const sectionVisual = document.querySelector("#sectionVisual");
const closeSectionButton = document.querySelector("#closeSectionButton");
const staGridLayer = document.querySelector("#staGridLayer");
const showStaGridInput = document.querySelector("#showStaGridInput");
const showBoundaryInput = document.querySelector("#showBoundaryInput");
const showStatusBadgeInput = document.querySelector("#showStatusBadgeInput");
const plotSelect = document.querySelector("#plotSelect");
const plotLabelInput = document.querySelector("#plotLabelInput");
const plotLevelSelect = document.querySelector("#plotLevelSelect");
const plotColorInput = document.querySelector("#plotColorInput");
const savePlotButton = document.querySelector("#savePlotButton");
const deletePlotButton = document.querySelector("#deletePlotButton");
const machineEditor = document.querySelector("#machineEditor");
const machineTypeToggles = document.querySelectorAll("[data-machine-type-toggle]");
const reportDateInput = document.querySelector("#reportDateInput");
const generateReportButton = document.querySelector("#generateReportButton");
const saveImageButton = document.querySelector("#saveImageButton");
const reportOutput = document.querySelector("#reportOutput");

function loadState() {
  const shared = readSharedState();
  if (shared) return normalizeState(shared);

  const saved = localStorage.getItem(storageKey);
  if (!saved) return structuredClone(defaultState);

  try {
    return normalizeState(JSON.parse(saved));
  } catch {
    return structuredClone(defaultState);
  }
}

function readSharedState() {
  const marker = "#state=";
  if (!window.location.hash.startsWith(marker)) return null;
  try {
    const encoded = window.location.hash.slice(marker.length);
    const json = decodeURIComponent(escape(atob(encoded)));
    const shared = JSON.parse(json);
    localStorage.setItem(storageKey, JSON.stringify(shared));
    return shared;
  } catch {
    return null;
  }
}

function buildShareLink() {
  const shareState = structuredClone(state);
  Object.values(shareState.machineDetails || {}).forEach((details) => {
    delete details.photo;
  });
  const json = JSON.stringify(shareState);
  const encoded = btoa(unescape(encodeURIComponent(json)));
  return `${window.location.href.split("#")[0]}#state=${encoded}`;
}

function normalizeState(saved) {
  const base = structuredClone(defaultState);
  return {
    ...base,
    ...saved,
    reportDate: saved.reportDate || base.reportDate,
    view: { ...base.view, ...(saved.view || {}) },
    machinePositions: { ...base.machinePositions, ...(saved.machinePositions || {}) },
    editMode: saved.editMode || base.editMode,
    boundaryPoints: saved.boundaryPoints || base.boundaryPoints,
    routePoints: saved.routePoints || base.routePoints,
    inspectionPlots: saved.inspectionPlots || base.inspectionPlots,
    selectedPlotId: saved.selectedPlotId || base.selectedPlotId,
    showStaGrid: saved.showStaGrid ?? base.showStaGrid,
    showBoundary: saved.showBoundary ?? base.showBoundary,
    showStatusBadge: saved.showStatusBadge ?? base.showStatusBadge,
    machineTypeVisibility: { ...base.machineTypeVisibility, ...(saved.machineTypeVisibility || {}) },
    gridFrame: saved.gridFrame || base.gridFrame,
    machineDetails: { ...base.machineDetails, ...(saved.machineDetails || {}) },
    activeMachineId: saved.activeMachineId || base.activeMachineId,
    lastUpdated: saved.lastUpdated || base.lastUpdated,
    layers: saved.layers || base.layers,
    fleet: saved.fleet || base.fleet,
  };
}

function saveState() {
  state.lastUpdated = new Date().toISOString();
  localStorage.setItem(storageKey, JSON.stringify(state));
  updateLastUpdated();
}

function touchState() {
  state.lastUpdated = new Date().toISOString();
  saveState();
  updateLastUpdated();
}

function updateLastUpdated() {
  const node = document.querySelector("#lastUpdatedText");
  if (!node) return;
  const date = state.lastUpdated ? new Date(state.lastUpdated) : new Date();
  node.textContent = date.toLocaleString("th-TH", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function t(key) {
  return dictionaries[state.language][key] || dictionaries.th[key] || key;
}

function applyLanguage() {
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  shiftNoteInput.placeholder = t("notePlaceholder");
  languageSelect.value = state.language;
}

function renderLayers() {
  layerList.innerHTML = "";
  state.layers.forEach((layer, index) => {
    const card = document.createElement("div");
    card.className = "layer-card";
    card.innerHTML = `
      <div class="layer-main">
        <div class="layer-title">
          <span>${t("target")} ${layer.elevation}</span>
          <small>${t("progress")} ${layer.progress}%</small>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="--progress: ${layer.progress}%"></div>
        </div>
      </div>
      <button class="section-button" type="button" data-layer-index="${index}">${t("viewSection")}</button>
      <input aria-label="${layer.elevation} progress" type="range" min="0" max="100" value="${layer.progress}" data-layer-index="${index}">
    `;
    layerList.appendChild(card);
  });
}

function renderFleet() {
  fleetList.innerHTML = "";
  state.fleet.forEach((machine, index) => {
    const row = document.createElement("div");
    row.className = "fleet-row";
    row.innerHTML = `
      <div class="fleet-name">
        <strong>${t(machine.id)}</strong>
        <span>${t("count")}: ${machine.count}</span>
      </div>
      <div class="fleet-controls">
        <label>
          <span>${t("active")}</span>
          <input aria-label="${machine.id} active" type="number" min="0" max="${machine.count}" value="${machine.active}" data-fleet-index="${index}" data-field="active">
        </label>
        <label>
          <span>${t("workHours")}</span>
          <input aria-label="${machine.id} hours" type="number" min="0" step="0.5" value="${machine.hours}" data-fleet-index="${index}" data-field="hours">
        </label>
      </div>
    `;
    fleetList.appendChild(row);
  });
}

function renderMachineEditor() {
  machineEditor.innerHTML = "";
  machineTypeToggles.forEach((toggle) => {
    toggle.checked = state.machineTypeVisibility[toggle.dataset.machineTypeToggle] !== false;
  });
  machineDefaults.forEach((machine) => {
    const details = state.machineDetails[machine.id] || {};
    const card = document.createElement("div");
    card.className = "machine-card";
    card.innerHTML = `
      <div class="machine-card-head">
        <span>${machine.id.toUpperCase()} · ${t(machine.type)}</span>
        <span>${details.status === "broken" ? "×" : "✓"}</span>
      </div>
      <div class="machine-form-grid">
        <label>
          <span>${t("operator")}</span>
          <input data-machine-detail="${machine.id}" data-field="operator" type="text" value="${details.operator || ""}">
        </label>
        <label>
          <span>${t("brand")}</span>
          <input data-machine-detail="${machine.id}" data-field="brand" type="text" value="${details.brand || ""}">
        </label>
        <label>
          <span>${t("workTime")}</span>
          <input data-machine-detail="${machine.id}" data-field="workTime" type="text" value="${details.workTime || ""}" placeholder="08:00-17:00">
        </label>
        <label>
          <span>${t("status")}</span>
          <select data-machine-detail="${machine.id}" data-field="status">
            <option value="normal" ${details.status !== "broken" ? "selected" : ""}>✓ ${t("normal")}</option>
            <option value="broken" ${details.status === "broken" ? "selected" : ""}>× ${t("broken")}</option>
          </select>
        </label>
        <label>
          <span>${t("downTime")}</span>
          <input data-machine-detail="${machine.id}" data-field="downTime" type="text" value="${details.downTime || ""}" placeholder="14:00-15:00">
        </label>
        <label>
          <span>${t("rotate")}</span>
          <input data-machine-angle="${machine.id}" type="number" min="-180" max="180" step="5" value="${(state.machinePositions[machine.id] || machine).angle || 0}">
        </label>
        <label>
          <span>${t("machinePhoto")}</span>
          <input data-machine-photo="${machine.id}" type="file" accept="image/*">
        </label>
      </div>
      ${details.photo ? `<img class="machine-photo-preview" src="${details.photo}" alt="${machine.id} photo">` : ""}
    `;
    machineEditor.appendChild(card);
  });
}

function renderMachines() {
  machineLayer.innerHTML = "";
  machineLayer.classList.toggle("hide-status-badges", !state.showStatusBadge);
  machineDefaults.forEach((machine) => {
    if (state.machineTypeVisibility[machine.type] === false) return;
    const position = state.machinePositions[machine.id] || machine;
    const details = state.machineDetails[machine.id] || {};
    const marker = document.createElement("button");
    marker.type = "button";
    marker.className = `machine ${machine.type} ${details.status === "broken" ? "broken" : ""} ${
      state.activeMachineId === machine.id ? "active-machine" : ""
    }`;
    marker.dataset.machineId = machine.id;
    marker.dataset.kind = `${t(machine.type)} ${machine.id.toUpperCase()}`;
    marker.style.setProperty("--x", `${position.x}%`);
    marker.style.setProperty("--y", `${position.y}%`);
    marker.style.setProperty("--angle", `${position.angle || 0}deg`);
    marker.setAttribute("aria-label", marker.dataset.kind);
    marker.innerHTML = `
      <span class="machine-visual"><span class="work-effect"></span></span>
      <span class="status-badge ${details.status === "broken" ? "broken" : ""}">${details.status === "broken" ? "×" : "✓"}</span>
      <span class="machine-label">${machine.id.toUpperCase()} ${details.operator || ""}</span>
      <span class="rotate-handle" title="${t("rotate")}"></span>
    `;
    machineLayer.appendChild(marker);
  });
}

function applyMapView() {
  const { zoom, panX, panY } = state.view;
  mapContent.style.setProperty("--zoom", zoom);
  mapContent.style.setProperty("--pan-x", `${panX}px`);
  mapContent.style.setProperty("--pan-y", `${panY}px`);
  zoomRange.value = zoom;
}

function setZoom(nextZoom, originX = mapFrame.clientWidth / 2, originY = mapFrame.clientHeight / 2) {
  const currentZoom = state.view.zoom;
  const zoom = Math.min(3.5, Math.max(1, Number(nextZoom)));
  const mapX = (originX - state.view.panX) / currentZoom;
  const mapY = (originY - state.view.panY) / currentZoom;

  state.view.zoom = zoom;
  state.view.panX = originX - mapX * zoom;
  state.view.panY = originY - mapY * zoom;
  clampPan();
  saveState();
  applyMapView();
}

function clampPan() {
  const { zoom } = state.view;
  const width = mapFrame.clientWidth;
  const height = mapFrame.clientHeight;
  const minX = width - width * zoom;
  const minY = height - height * zoom;
  state.view.panX = zoom === 1 ? 0 : Math.min(0, Math.max(minX, state.view.panX));
  state.view.panY = zoom === 1 ? 0 : Math.min(0, Math.max(minY, state.view.panY));
}

function pointToMapPercent(clientX, clientY) {
  const rect = mapFrame.getBoundingClientRect();
  const x = ((clientX - rect.left - state.view.panX) / state.view.zoom / rect.width) * 100;
  const y = ((clientY - rect.top - state.view.panY) / state.view.zoom / rect.height) * 100;
  return {
    x: Math.min(96, Math.max(4, x)),
    y: Math.min(94, Math.max(6, y)),
  };
}

function svgPoints(points) {
  return points.map((point) => `${point.x},${point.y}`).join(" ");
}

function clientToSvgPoint(clientX, clientY) {
  const rect = mapFrame.getBoundingClientRect();
  return {
    x: Math.min(1000, Math.max(0, ((clientX - rect.left - state.view.panX) / state.view.zoom / rect.width) * 1000)),
    y: Math.min(700, Math.max(0, ((clientY - rect.top - state.view.panY) / state.view.zoom / rect.height) * 700)),
  };
}

function renderMapEditor() {
  f2Boundary.setAttribute("points", svgPoints(state.boundaryPoints));
  f2Boundary.style.display = state.showBoundary ? "" : "none";
  truckRoute.setAttribute("points", svgPoints(state.routePoints));
  renderStaGrid();
  renderInspectionPlots();
  renderPlotEditor();
  renderEditorHandles();
  editModeSelect.value = state.editMode;
  showStaGridInput.checked = state.showStaGrid;
  showBoundaryInput.checked = state.showBoundary;
  showStatusBadgeInput.checked = state.showStatusBadge;
}

function lerpPoint(a, b, t) {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

function gridPoint(u, v) {
  const [tl, tr, br, bl] = state.gridFrame;
  const top = lerpPoint(tl, tr, u);
  const bottom = lerpPoint(bl, br, u);
  return lerpPoint(top, bottom, v);
}

function renderStaGrid() {
  staGridLayer.innerHTML = "";
  if (!state.showStaGrid) return;

  const stations = [];
  for (let sta = 1050; sta <= 1975; sta += 25) stations.push(sta);
  stations.push(1985);
  const offsets = [];
  for (let offset = 0; offset <= 360; offset += 20) offsets.push(offset);

  stations.forEach((sta, index) => {
    const u = 1 - index / (stations.length - 1);
    const a = gridPoint(u, 0);
    const b = gridPoint(u, 1);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("class", "sta-grid-line");
    line.setAttribute("x1", a.x);
    line.setAttribute("y1", a.y);
    line.setAttribute("x2", b.x);
    line.setAttribute("y2", b.y);
    staGridLayer.appendChild(line);

    if (index % 2 === 0 || sta === 1985) {
      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.setAttribute("class", "sta-grid-label");
      label.setAttribute("x", a.x - 8);
      label.setAttribute("y", a.y - 10);
      label.setAttribute("transform", `rotate(-90 ${a.x - 8} ${a.y - 10})`);
      label.textContent = `STA.1+${String(sta).slice(1)}`;
      staGridLayer.appendChild(label);
    }
  });

  offsets.forEach((offset, index) => {
    const v = 1 - index / (offsets.length - 1);
    const a = gridPoint(0, v);
    const b = gridPoint(1, v);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("class", "sta-offset-line");
    line.setAttribute("x1", a.x);
    line.setAttribute("y1", a.y);
    line.setAttribute("x2", b.x);
    line.setAttribute("y2", b.y);
    staGridLayer.appendChild(line);

    if (index % 2 === 0) {
      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.setAttribute("class", "sta-grid-label");
      label.setAttribute("x", b.x + 8);
      label.setAttribute("y", b.y + 4);
      label.textContent = String(offset);
      staGridLayer.appendChild(label);
    }
  });
}

function renderInspectionPlots() {
  inspectionLayer.innerHTML = "";
  state.inspectionPlots.forEach((plot) => {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("class", "inspection-plot");
    rect.setAttribute("x", plot.x);
    rect.setAttribute("y", plot.y);
    rect.setAttribute("width", plot.w);
    rect.setAttribute("height", plot.h);
    rect.style.setProperty("--plot-color", plot.color || "#1577b8");
    rect.dataset.plotId = plot.id;
    inspectionLayer.appendChild(rect);

    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("class", "plot-label");
    label.setAttribute("x", plot.x + 12);
    label.setAttribute("y", plot.y + 24);
    label.textContent = plot.label || plot.id;
    inspectionLayer.appendChild(label);

    const level = document.createElementNS("http://www.w3.org/2000/svg", "text");
    level.setAttribute("class", "plot-level-label");
    level.setAttribute("x", plot.x + 12);
    level.setAttribute("y", plot.y + 43);
    level.textContent = plot.level || "2.0m";
    inspectionLayer.appendChild(level);
  });
}

function renderPlotEditor() {
  plotSelect.innerHTML = "";
  state.inspectionPlots.forEach((plot) => {
    const option = document.createElement("option");
    option.value = plot.id;
    option.textContent = `${plot.id} · ${plot.label || ""}`;
    plotSelect.appendChild(option);
  });

  if (!state.inspectionPlots.some((plot) => plot.id === state.selectedPlotId)) {
    state.selectedPlotId = state.inspectionPlots[0]?.id || "";
  }

  const selected = state.inspectionPlots.find((plot) => plot.id === state.selectedPlotId);
  plotSelect.value = state.selectedPlotId;
  plotLabelInput.value = selected?.label || "";
  plotLevelSelect.value = selected?.level || "2.0m";
  plotColorInput.value = selected?.color || "#1577b8";
}

function renderEditorHandles() {
  editorHandles.innerHTML = "";
  if (state.editMode === "boundary") {
    state.boundaryPoints.forEach((point, index) => {
      editorHandles.appendChild(makeHandle(point, "boundary", index));
    });
  }
  if (state.editMode === "route") {
    state.routePoints.forEach((point, index) => {
      editorHandles.appendChild(makeHandle(point, "route", index));
    });
  }
  if (state.editMode === "plot") {
    state.inspectionPlots.forEach((plot, index) => {
      editorHandles.appendChild(makeHandle({ x: plot.x, y: plot.y }, "plot-move", index));
      editorHandles.appendChild(makeHandle({ x: plot.x + plot.w, y: plot.y + plot.h }, "plot-resize", index));
    });
  }
  if (state.editMode === "grid") {
    state.gridFrame.forEach((point, index) => {
      editorHandles.appendChild(makeHandle(point, "grid", index));
    });
  }
}

function makeHandle(point, type, index) {
  const handle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  handle.setAttribute("class", `editor-handle ${type.includes("route") ? "route" : type.includes("plot") ? "plot" : ""}`);
  handle.setAttribute("cx", point.x);
  handle.setAttribute("cy", point.y);
  handle.setAttribute("r", type.includes("plot") ? 9 : 8);
  handle.dataset.handleType = type;
  handle.dataset.index = index;
  return handle;
}

function interpolateRoute(progress) {
  const points = state.routePoints;
  if (points.length < 2) return { x: 50, y: 50, angle: 0 };
  const segments = [];
  let total = 0;
  for (let index = 0; index < points.length - 1; index += 1) {
    const start = points[index];
    const end = points[index + 1];
    const length = Math.hypot(end.x - start.x, end.y - start.y);
    segments.push({ start, end, length });
    total += length;
  }

  let distance = (progress % 1) * total;
  const segment = segments.find((item) => {
    if (distance <= item.length) return true;
    distance -= item.length;
    return false;
  }) || segments[segments.length - 1];

  const ratio = segment.length ? distance / segment.length : 0;
  const x = segment.start.x + (segment.end.x - segment.start.x) * ratio;
  const y = segment.start.y + (segment.end.y - segment.start.y) * ratio;
  const angle = Math.atan2(segment.end.y - segment.start.y, segment.end.x - segment.start.x) * (180 / Math.PI);
  return { x, y, angle };
}

function animateTrucks(timestamp = 0) {
  document.querySelectorAll(".truck").forEach((truck, index) => {
    const point = interpolateRoute(timestamp / 15000 + index * 0.5);
    truck.style.left = `${point.x / 10}%`;
    truck.style.top = `${point.y / 7}%`;
    truck.style.transform = `translate(-50%, -50%) rotate(${point.angle}deg)`;
  });
  requestAnimationFrame(animateTrucks);
}

function buildMachineReport() {
  const date = reportDateInput.value || new Date().toISOString().slice(0, 10);
  const mapImageHref = document.querySelector(".map-content img")?.src || "assets/F2.jpg";
  const sandVolume = Number(state.truckTrips) * 30;
  const broken = machineDefaults.filter((machine) => state.machineDetails[machine.id]?.status === "broken");
  const normal = machineDefaults.length - broken.length;
  const lines = [
    `F2 Compaction Daily Report`,
    `Date: ${date}`,
    `Sand truck trips: ${state.truckTrips} trips (${sandVolume.toLocaleString()} m3)`,
    `Machine status: ${normal}/${machineDefaults.length} normal, ${broken.length} breakdown`,
    ``,
    `Machine details:`,
  ];

  machineDefaults.forEach((machine) => {
    const details = state.machineDetails[machine.id] || {};
    const position = state.machinePositions[machine.id] || {};
    const status = details.status === "broken" ? "BREAKDOWN" : "NORMAL";
    lines.push(
      `- ${machine.id.toUpperCase()} ${t(machine.type)} | ${status} | operator: ${details.operator || "-"} | brand: ${
        details.brand || "-"
      } | work: ${details.workTime || "-"} | down: ${details.downTime || "-"} | angle: ${position.angle || 0}°`
    );
  });

  lines.push(``, `Inspection plots:`);
  state.inspectionPlots.forEach((plot) => {
    lines.push(`- ${plot.id}: ${plot.label || "-"} | level ${plot.level || "-"} | x ${Math.round(plot.x)}, y ${Math.round(plot.y)}`);
  });

  if (state.shiftNote) {
    lines.push(``, `Shift note:`, state.shiftNote);
  }

  return lines.join("\n");
}

function downloadText(filename, text, type = "text/plain") {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function buildMapSnapshotSvg() {
  const date = reportDateInput.value || new Date().toISOString().slice(0, 10);
  const escape = (value) =>
    String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  const route = svgPoints(state.routePoints);
  const boundary = svgPoints(state.boundaryPoints);
  const machines = machineDefaults
    .map((machine) => {
      const pos = state.machinePositions[machine.id] || machine;
      const detail = state.machineDetails[machine.id] || {};
      const color = detail.status === "broken" ? "#d81f1f" : "#1f9d55";
      return `<g transform="translate(${pos.x * 10} ${pos.y * 7}) rotate(${pos.angle || 0})">
        <rect x="-13" y="-8" width="26" height="16" rx="4" fill="${machine.type === "dozer" ? "#f08f24" : machine.type === "roller" ? "#6c757d" : machine.type === "grader" ? "#2f7fc1" : "#f4ba24"}" stroke="#fff" stroke-width="2"/>
        ${state.showStatusBadge ? `<circle cx="0" cy="-17" r="9" fill="${color}" stroke="#fff" stroke-width="2"/><text x="0" y="-13" text-anchor="middle" font-size="11" font-weight="900" fill="#fff">${detail.status === "broken" ? "×" : "✓"}</text>` : ""}
        <text x="0" y="24" text-anchor="middle" font-size="10" font-weight="800" fill="#18201d" stroke="#fff" stroke-width="3" paint-order="stroke">${machine.id.toUpperCase()}</text>
      </g>`;
    })
    .join("");
  const plots = state.inspectionPlots
    .map(
      (plot) =>
        `<g><rect x="${plot.x}" y="${plot.y}" width="${plot.w}" height="${plot.h}" fill="${escape(plot.color || "#1577b8")}" fill-opacity=".22" stroke="${escape(plot.color || "#1577b8")}" stroke-width="3" stroke-dasharray="7 5"/><text x="${plot.x + 10}" y="${plot.y + 22}" font-size="16" font-weight="900" fill="#fff" stroke="#18201d" stroke-width="3" paint-order="stroke">${escape(plot.label || plot.id)}</text><text x="${plot.x + 10}" y="${plot.y + 41}" font-size="12" font-weight="900" fill="#d81f1f" stroke="#fff" stroke-width="3" paint-order="stroke">${escape(plot.level || "")}</text></g>`
    )
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1120" viewBox="0 0 1000 700">
    <image href="${escape(mapImageHref)}" x="0" y="0" width="1000" height="700" preserveAspectRatio="xMidYMid slice"/>
    <rect width="1000" height="700" fill="rgba(255,255,255,.08)"/>
    <text x="24" y="36" font-size="26" font-weight="900" fill="#18201d">F2 Daily Snapshot ${escape(date)}</text>
    ${state.showBoundary ? `<polygon points="${boundary}" fill="rgba(34,197,94,.10)" stroke="#fff" stroke-width="5" stroke-dasharray="12 8"/>` : ""}
    <polyline points="${route}" fill="none" stroke="#b93422" stroke-width="5" stroke-dasharray="10 10"/>
    ${plots}
    ${machines}
  </svg>`;
}

function updateZoneOpacity() {
  state.layers.forEach((layer) => {
    const zone = document.querySelector(`.${layer.id}`);
    if (zone) {
      const opacity = 0.08 + (layer.progress / 100) * 0.28;
      zone.style.setProperty("--zone-opacity", opacity.toFixed(2));
    }
  });
}

function updateMetrics() {
  const totalProgress = Math.round(
    state.layers.reduce((sum, layer) => sum + Number(layer.progress), 0) / state.layers.length
  );
  const totalCount = machineDefaults.length;
  const activeCount = machineDefaults.filter((machine) => state.machineDetails[machine.id]?.status !== "broken").length;
  const totalHours = state.fleet.reduce((sum, item) => sum + Number(item.hours), 0);
  const sandVolume = Number(state.truckTrips) * 30;

  document.querySelector("#overallProgress").textContent = `${totalProgress}%`;
  document.querySelector("#sandVolume").textContent = `${sandVolume.toLocaleString()} m3`;
  document.querySelector("#activeMachines").textContent = `${activeCount}/${totalCount}`;
  document.querySelector("#totalHours").textContent = `${totalHours.toFixed(1)}h`;
  document.querySelector("#todayText").textContent = new Date().toISOString().slice(0, 10);
}

function render() {
  applyLanguage();
  reportDateInput.value = state.reportDate || new Date().toISOString().slice(0, 10);
  truckTripsInput.value = state.truckTrips;
  shiftNoteInput.value = state.shiftNote;
  renderLayers();
  renderFleet();
  renderMachineEditor();
  renderMachines();
  renderMapEditor();
  updateZoneOpacity();
  updateMetrics();
  applyMapView();
  updateLastUpdated();
}

languageSelect.addEventListener("change", (event) => {
  state.language = event.target.value;
  saveState();
  render();
});

layerList.addEventListener("input", (event) => {
  const input = event.target.closest("input[type='range']");
  if (!input) return;
  state.layers[Number(input.dataset.layerIndex)].progress = Number(input.value);
  saveState();
  renderLayers();
  updateZoneOpacity();
  updateMetrics();
});

layerList.addEventListener("click", (event) => {
  const button = event.target.closest(".section-button");
  if (!button) return;
  openSectionModal(state.layers[Number(button.dataset.layerIndex)]);
});

fleetList.addEventListener("input", (event) => {
  const input = event.target.closest("input");
  if (!input) return;
  const machine = state.fleet[Number(input.dataset.fleetIndex)];
  const value = Number(input.value);
  machine[input.dataset.field] = input.dataset.field === "active" ? Math.min(value, machine.count) : value;
  saveState();
  updateMetrics();
});

updateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.reportDate = reportDateInput.value || new Date().toISOString().slice(0, 10);
  state.truckTrips = Math.max(0, Number(truckTripsInput.value) || 0);
  state.shiftNote = shiftNoteInput.value.trim();
  saveState();
  updateMetrics();

  const button = updateForm.querySelector("button");
  const original = t("saveUpdate");
  button.textContent = t("saved");
  window.setTimeout(() => {
    button.textContent = original;
  }, 1200);
});

reportDateInput.addEventListener("change", (event) => {
  state.reportDate = event.target.value;
  saveState();
});

generateReportButton.addEventListener("click", () => {
  state.reportDate = reportDateInput.value || new Date().toISOString().slice(0, 10);
  saveState();
  const report = buildMachineReport();
  reportOutput.value = report;
  downloadText(`F2-machine-report-${state.reportDate}.txt`, report);
});

saveImageButton.addEventListener("click", () => {
  state.reportDate = reportDateInput.value || new Date().toISOString().slice(0, 10);
  saveState();
  downloadText(`F2-map-snapshot-${state.reportDate}.svg`, buildMapSnapshotSvg(), "image/svg+xml");
});

zoomRange.addEventListener("input", (event) => {
  setZoom(Number(event.target.value));
});

zoomInButton.addEventListener("click", () => {
  setZoom(state.view.zoom + 0.25);
});

zoomOutButton.addEventListener("click", () => {
  setZoom(state.view.zoom - 0.25);
});

resetViewButton.addEventListener("click", () => {
  state.view = { zoom: 1, panX: 0, panY: 0 };
  saveState();
  applyMapView();
});

editModeSelect.addEventListener("change", (event) => {
  state.editMode = event.target.value;
  saveState();
  renderMapEditor();
});

addRoutePointButton.addEventListener("click", () => {
  const last = state.routePoints[state.routePoints.length - 1] || { x: 500, y: 350 };
  state.routePoints.push({ x: Math.min(960, last.x + 46), y: Math.max(40, last.y - 28) });
  state.editMode = "route";
  saveState();
  renderMapEditor();
});

addPlotButton.addEventListener("click", () => {
  addInspectionPlot();
});

addPlotEditorButton.addEventListener("click", () => {
  addInspectionPlot();
});

function addInspectionPlot() {
  const number = state.inspectionPlots.length + 1;
  const id = `F2-${number}`;
  state.inspectionPlots.push({
    id,
    label: new Date().toISOString().slice(0, 10),
    level: "2.0m",
    color: "#1577b8",
    x: 420,
    y: 360,
    w: 160,
    h: 90,
  });
  state.selectedPlotId = id;
  state.editMode = "plot";
  saveState();
  renderMapEditor();
}

resetMapEditButton.addEventListener("click", () => {
  state.boundaryPoints = structuredClone(defaultBoundaryPoints);
  state.routePoints = structuredClone(defaultRoutePoints);
  state.inspectionPlots = structuredClone(defaultInspectionPlots);
  state.gridFrame = structuredClone(defaultGridFrame);
  saveState();
  renderMapEditor();
});

showStaGridInput.addEventListener("change", (event) => {
  state.showStaGrid = event.target.checked;
  saveState();
  renderMapEditor();
});

showBoundaryInput.addEventListener("change", (event) => {
  state.showBoundary = event.target.checked;
  saveState();
  renderMapEditor();
});

showStatusBadgeInput.addEventListener("change", (event) => {
  state.showStatusBadge = event.target.checked;
  saveState();
  renderMachines();
  renderMapEditor();
});

machineTypeToggles.forEach((toggle) => {
  toggle.addEventListener("change", (event) => {
    state.machineTypeVisibility[event.target.dataset.machineTypeToggle] = event.target.checked;
    saveState();
    renderMachines();
    renderMachineEditor();
  });
});

shareLinkButton.addEventListener("click", async () => {
  const link = buildShareLink();
  try {
    await navigator.clipboard.writeText(link);
    shareLinkButton.textContent = "Copied";
    window.setTimeout(() => {
      shareLinkButton.textContent = t("shareLink");
    }, 1200);
  } catch {
    window.prompt(t("shareLink"), link);
  }
});

plotSelect.addEventListener("change", (event) => {
  state.selectedPlotId = event.target.value;
  saveState();
  renderPlotEditor();
});

savePlotButton.addEventListener("click", () => {
  const plot = state.inspectionPlots.find((item) => item.id === state.selectedPlotId);
  if (!plot) return;
  plot.label = plotLabelInput.value.trim() || plot.id;
  plot.level = plotLevelSelect.value;
  plot.color = plotColorInput.value || "#1577b8";
  saveState();
  renderMapEditor();
});

deletePlotButton.addEventListener("click", () => {
  if (!state.selectedPlotId) return;
  state.inspectionPlots = state.inspectionPlots.filter((plot) => plot.id !== state.selectedPlotId);
  state.selectedPlotId = state.inspectionPlots[0]?.id || "";
  saveState();
  renderMapEditor();
});

function handleMachineEditorChange(event) {
  const detailInput = event.target.closest("[data-machine-detail]");
  const angleInput = event.target.closest("[data-machine-angle]");

  if (detailInput) {
    const machineId = detailInput.dataset.machineDetail;
    const field = detailInput.dataset.field;
    state.machineDetails[machineId] = {
      ...(state.machineDetails[machineId] || {}),
      [field]: detailInput.value,
    };
    saveState();
    renderMachines();
    updateMetrics();
  }

  if (angleInput) {
    const machineId = angleInput.dataset.machineAngle;
    const current = state.machinePositions[machineId] || {};
    state.machinePositions[machineId] = { ...current, angle: Number(angleInput.value) || 0 };
    saveState();
    renderMachines();
  }
}

machineEditor.addEventListener("input", handleMachineEditorChange);
machineEditor.addEventListener("change", handleMachineEditorChange);

machineEditor.addEventListener("change", (event) => {
  const fileInput = event.target.closest("[data-machine-photo]");
  if (!fileInput || !fileInput.files?.[0]) return;
  const machineId = fileInput.dataset.machinePhoto;
  resizeImageFile(fileInput.files[0], 420, 260).then((dataUrl) => {
    state.machineDetails[machineId] = {
      ...(state.machineDetails[machineId] || {}),
      photo: dataUrl,
    };
    saveState();
    renderMachineEditor();
  });
});

function resizeImageFile(file, maxWidth, maxHeight) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const scale = Math.min(1, maxWidth / img.width, maxHeight / img.height);
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        const context = canvas.getContext("2d");
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.76));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

mapFrame.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
    const rect = mapFrame.getBoundingClientRect();
    const zoomStep = event.deltaY > 0 ? -0.18 : 0.18;
    setZoom(state.view.zoom + zoomStep, event.clientX - rect.left, event.clientY - rect.top);
  },
  { passive: false }
);

let panStart = null;

mapFrame.addEventListener("pointerdown", (event) => {
  if (event.target.closest(".map-label")) return;
  if (event.target.closest(".machine")) return;
  panStart = {
    pointerId: event.pointerId,
    x: event.clientX,
    y: event.clientY,
    panX: state.view.panX,
    panY: state.view.panY,
  };
  mapFrame.classList.add("is-panning");
  mapFrame.setPointerCapture(event.pointerId);
});

mapFrame.addEventListener("click", (event) => {
  const label = event.target.closest(".map-label");
  if (!label) return;
  const layer = state.layers.find((item) => item.elevation === label.dataset.elevation);
  if (layer) openSectionModal(layer);
});

mapFrame.addEventListener("pointermove", (event) => {
  if (!panStart || event.pointerId !== panStart.pointerId) return;
  state.view.panX = panStart.panX + event.clientX - panStart.x;
  state.view.panY = panStart.panY + event.clientY - panStart.y;
  clampPan();
  applyMapView();
});

mapFrame.addEventListener("pointerup", (event) => {
  if (!panStart || event.pointerId !== panStart.pointerId) return;
  panStart = null;
  mapFrame.classList.remove("is-panning");
  saveState();
});

mapFrame.addEventListener("pointercancel", () => {
  panStart = null;
  mapFrame.classList.remove("is-panning");
});

machineLayer.addEventListener("pointerdown", (event) => {
  if (state.editMode !== "machine") return;
  const marker = event.target.closest(".machine");
  if (!marker) return;
  event.stopPropagation();
  const machineId = marker.dataset.machineId;
  state.activeMachineId = machineId;
  saveState();
  machineLayer.querySelectorAll(".machine").forEach((item) => {
    item.classList.toggle("active-machine", item.dataset.machineId === machineId);
  });

  if (event.target.closest(".rotate-handle")) {
    marker.setPointerCapture(event.pointerId);
    const rotateMachine = (moveEvent) => {
      const position = state.machinePositions[machineId];
      const rect = mapFrame.getBoundingClientRect();
      const centerX = rect.left + state.view.panX + (position.x / 100) * rect.width * state.view.zoom;
      const centerY = rect.top + state.view.panY + (position.y / 100) * rect.height * state.view.zoom;
      const angle = Math.round(Math.atan2(moveEvent.clientY - centerY, moveEvent.clientX - centerX) * (180 / Math.PI));
      state.machinePositions[machineId] = { ...position, angle };
      marker.style.setProperty("--angle", `${angle}deg`);
    };
    const stopRotate = () => {
      marker.removeEventListener("pointermove", rotateMachine);
      marker.removeEventListener("pointerup", stopRotate);
      marker.removeEventListener("pointercancel", stopRotate);
      saveState();
      renderMachineEditor();
    };
    marker.addEventListener("pointermove", rotateMachine);
    marker.addEventListener("pointerup", stopRotate);
    marker.addEventListener("pointercancel", stopRotate);
    return;
  }

  marker.classList.add("is-dragging");
  marker.setPointerCapture(event.pointerId);

  const moveMachine = (moveEvent) => {
    const point = pointToMapPercent(moveEvent.clientX, moveEvent.clientY);
    const current = state.machinePositions[machineId] || { angle: 0 };
    state.machinePositions[machineId] = { ...current, ...point };
    marker.style.setProperty("--x", `${point.x}%`);
    marker.style.setProperty("--y", `${point.y}%`);
  };

  const stopDrag = () => {
    marker.classList.remove("is-dragging");
    marker.removeEventListener("pointermove", moveMachine);
    marker.removeEventListener("pointerup", stopDrag);
    marker.removeEventListener("pointercancel", stopDrag);
    saveState();
  };

  marker.addEventListener("pointermove", moveMachine);
  marker.addEventListener("pointerup", stopDrag);
  marker.addEventListener("pointercancel", stopDrag);
});

editorHandles.addEventListener("pointerdown", (event) => {
  const handle = event.target.closest(".editor-handle");
  if (!handle) return;
  event.stopPropagation();
  handle.setPointerCapture(event.pointerId);
  const type = handle.dataset.handleType;
  const index = Number(handle.dataset.index);
  const plotStart = state.inspectionPlots[index] ? { ...state.inspectionPlots[index] } : null;
  const startPoint = clientToSvgPoint(event.clientX, event.clientY);

  const moveHandle = (moveEvent) => {
    const point = clientToSvgPoint(moveEvent.clientX, moveEvent.clientY);
    if (type === "boundary") {
      state.boundaryPoints[index] = point;
    } else if (type === "route") {
      state.routePoints[index] = point;
    } else if (type === "grid") {
      state.gridFrame[index] = point;
    } else if (type === "plot-move" && plotStart) {
      const dx = point.x - startPoint.x;
      const dy = point.y - startPoint.y;
      state.inspectionPlots[index] = {
        ...plotStart,
        x: Math.min(980 - plotStart.w, Math.max(0, plotStart.x + dx)),
        y: Math.min(680 - plotStart.h, Math.max(0, plotStart.y + dy)),
      };
    } else if (type === "plot-resize" && plotStart) {
      state.inspectionPlots[index] = {
        ...plotStart,
        w: Math.max(45, point.x - plotStart.x),
        h: Math.max(35, point.y - plotStart.y),
      };
    }
    renderMapEditor();
  };

  const stopHandle = () => {
    window.removeEventListener("pointermove", moveHandle);
    window.removeEventListener("pointerup", stopHandle);
    window.removeEventListener("pointercancel", stopHandle);
    saveState();
  };

  window.addEventListener("pointermove", moveHandle);
  window.addEventListener("pointerup", stopHandle);
  window.addEventListener("pointercancel", stopHandle);
});

function openSectionModal(layer) {
  sectionTitle.textContent = `${t("target")} ${layer.elevation}`;
  sectionCaption.textContent = t("sectionCaption");
  const bottomByElevation = {
    "1.6m": "52%",
    "2.0m": "60%",
    "2.4m": "68%",
    "3.0m": "80%",
  };
  sectionVisual.style.setProperty("--side-bottom", bottomByElevation[layer.elevation] || "52%");
  sectionModal.showModal();
}

closeSectionButton.addEventListener("click", () => {
  sectionModal.close();
});

resetButton.addEventListener("click", () => {
  state = structuredClone(defaultState);
  saveState();
  render();
});

render();
requestAnimationFrame(animateTrucks);

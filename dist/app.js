const CANVAS_FONT = '"Yu Gothic", "Meiryo", "Noto Sans JP", "Segoe UI", sans-serif';
const DEFAULT_COLORS = ["#0f766e", "#2563eb", "#c2410c", "#7c3aed", "#be123c", "#15803d", "#a16207", "#0369a1"];
const THEMES = {
  presentation: {
    appBackground: "#eef1f4",
    panelBackground: "#f7f9fb",
    cardBackground: "#ffffff",
    chartBackground: "#ffffff",
    textColor: "#17202a",
    mutedTextColor: "#647184",
    borderColor: "#d7dee8",
    gridColor: "#e3e8ef",
    axisColor: "#9aa7b5",
    buttonPrimaryBackground: "#0f766e",
    buttonPrimaryText: "#ffffff",
    buttonSecondaryBackground: "#ffffff",
    buttonSecondaryText: "#17202a",
    inputBackground: "#ffffff",
    inputTextColor: "#17202a",
    inputBorderColor: "#d7dee8",
    seriesColors: ["#0f766e", "#2563eb", "#b45309", "#be123c", "#6d28d9", "#15803d"],
  },
  dark: {
    appBackground: "#070b14",
    panelBackground: "#101827",
    cardBackground: "#0b1220",
    chartBackground: "#0f172a",
    textColor: "#f8fafc",
    mutedTextColor: "#aab7c7",
    borderColor: "#273449",
    gridColor: "#26344d",
    axisColor: "#64748b",
    buttonPrimaryBackground: "#22d3ee",
    buttonPrimaryText: "#07111f",
    buttonSecondaryBackground: "#172033",
    buttonSecondaryText: "#e5edf7",
    inputBackground: "#0b1220",
    inputTextColor: "#f8fafc",
    inputBorderColor: "#334155",
    seriesColors: ["#22d3ee", "#a78bfa", "#fb7185", "#facc15", "#34d399", "#60a5fa"],
  },
  newspaper: {
    appBackground: "#e7dfcf",
    panelBackground: "#f3ecdd",
    cardBackground: "#fbf6ea",
    chartBackground: "#fffaf0",
    textColor: "#1c1917",
    mutedTextColor: "#6d6255",
    borderColor: "#cfc2ae",
    gridColor: "#d8cdbb",
    axisColor: "#9a8f80",
    buttonPrimaryBackground: "#1e3a8a",
    buttonPrimaryText: "#ffffff",
    buttonSecondaryBackground: "#fffaf0",
    buttonSecondaryText: "#1c1917",
    inputBackground: "#fffaf0",
    inputTextColor: "#1c1917",
    inputBorderColor: "#cfc2ae",
    seriesColors: ["#1e3a8a", "#991b1b", "#166534", "#b45309", "#334155", "#7c2d12"],
  },
};

const SAMPLE_DATASETS = {
  gdp: {
    fileName: "worldbank-gdp-constant-2015-usd.csv",
    title: "日本・米国・中国の実質GDP",
    subtitle: "世界銀行 NY.GDP.MKTP.KD、2015年価格US$",
    unit: "兆US$",
    note: "実質GDPを兆US$に換算。",
    source: "World Bank, NY.GDP.MKTP.KD（最終更新: 2026-04-08）",
    rows: [
      ["年", "日本", "米国", "中国"],
      ["2000", "3.99", "13.65", "2.83"],
      ["2001", "4.00", "13.78", "3.06"],
      ["2002", "4.00", "14.02", "3.34"],
      ["2003", "4.07", "14.41", "3.68"],
      ["2004", "4.15", "14.96", "4.05"],
      ["2005", "4.23", "15.48", "4.52"],
      ["2006", "4.29", "15.91", "5.09"],
      ["2007", "4.35", "16.23", "5.81"],
      ["2008", "4.30", "16.25", "6.37"],
      ["2009", "4.05", "15.83", "6.97"],
      ["2010", "4.22", "16.26", "7.71"],
      ["2011", "4.22", "16.51", "8.44"],
      ["2012", "4.28", "16.89", "9.10"],
      ["2013", "4.36", "17.25", "9.81"],
      ["2014", "4.38", "17.69", "10.54"],
      ["2015", "4.44", "18.21", "11.28"],
      ["2016", "4.48", "18.54", "12.05"],
      ["2017", "4.55", "18.99", "12.88"],
      ["2018", "4.58", "19.56", "13.75"],
      ["2019", "4.56", "20.06", "14.58"],
      ["2020", "4.37", "19.63", "14.92"],
      ["2021", "4.49", "20.82", "16.20"],
      ["2022", "4.53", "21.34", "16.71"],
      ["2023", "4.60", "21.96", "17.61"],
      ["2024", "4.61", "22.57", "18.49"],
    ],
  },
  population: {
    fileName: "worldbank-population.csv",
    title: "日本・米国・中国の人口推移",
    subtitle: "世界銀行 SP.POP.TOTL",
    unit: "百万人",
    note: "総人口を百万人に換算。",
    source: "World Bank, SP.POP.TOTL（最終更新: 2026-04-08）",
    rows: [
      ["年", "日本", "米国", "中国"],
      ["2000", "126.8", "282.2", "1262.6"],
      ["2001", "127.1", "285.0", "1271.9"],
      ["2002", "127.4", "287.6", "1280.4"],
      ["2003", "127.7", "290.1", "1288.4"],
      ["2004", "127.8", "292.8", "1296.1"],
      ["2005", "127.8", "295.5", "1303.7"],
      ["2006", "127.9", "298.4", "1311.0"],
      ["2007", "128.0", "301.2", "1317.9"],
      ["2008", "128.1", "304.1", "1324.7"],
      ["2009", "128.0", "306.8", "1331.3"],
      ["2010", "128.1", "309.4", "1337.7"],
      ["2011", "127.8", "311.8", "1345.0"],
      ["2012", "127.6", "314.3", "1354.2"],
      ["2013", "127.4", "316.7", "1363.2"],
      ["2014", "127.3", "319.3", "1371.9"],
      ["2015", "127.1", "321.8", "1379.9"],
      ["2016", "127.1", "324.4", "1387.8"],
      ["2017", "127.0", "326.6", "1396.2"],
      ["2018", "126.8", "328.5", "1402.8"],
      ["2019", "126.6", "330.2", "1407.7"],
      ["2020", "126.3", "331.6", "1411.1"],
      ["2021", "125.7", "332.1", "1412.4"],
      ["2022", "125.1", "334.0", "1412.2"],
      ["2023", "124.5", "336.8", "1410.7"],
      ["2024", "124.0", "340.1", "1409.0"],
    ],
  },
  sales: {
    fileName: "worldbank-gdp-per-capita.csv",
    title: "1人あたり実質GDPの推移",
    subtitle: "世界銀行 NY.GDP.PCAP.KD、2015年価格US$",
    unit: "US$",
    note: "2015年価格US$。",
    source: "World Bank, NY.GDP.PCAP.KD（最終更新: 2026-04-08）",
    rows: [
      ["年", "日本", "米国", "中国"],
      ["2000", "31431", "48380", "2237"],
      ["2001", "31476", "48361", "2406"],
      ["2002", "31416", "48729", "2611"],
      ["2003", "31830", "49663", "2857"],
      ["2004", "32515", "51099", "3128"],
      ["2005", "33099", "52393", "3466"],
      ["2006", "33532", "53336", "3883"],
      ["2007", "33990", "53889", "4410"],
      ["2008", "33558", "53443", "4811"],
      ["2009", "31651", "51611", "5238"],
      ["2010", "32942", "52556", "5765"],
      ["2011", "33011", "52957", "6276"],
      ["2012", "33518", "53738", "6723"],
      ["2013", "34240", "54463", "7198"],
      ["2014", "34387", "55394", "7687"],
      ["2015", "34961", "56573", "8175"],
      ["2016", "35242", "57151", "8679"],
      ["2017", "35862", "58152", "9222"],
      ["2018", "36139", "59527", "9799"],
      ["2019", "36044", "60751", "10356"],
      ["2020", "34643", "59195", "10574"],
      ["2021", "35741", "62680", "11470"],
      ["2022", "36238", "63886", "11831"],
      ["2023", "36953", "65187", "12484"],
      ["2024", "37153", "66356", "13122"],
    ],
  },
  ranking: {
    fileName: "worldbank-life-expectancy.csv",
    title: "平均寿命の推移",
    subtitle: "世界銀行 SP.DYN.LE00.IN",
    unit: "年",
    note: "出生時平均寿命。",
    source: "World Bank, SP.DYN.LE00.IN（最終更新: 2026-04-08）",
    rows: [
      ["年", "日本", "米国", "中国"],
      ["2000", "81.1", "76.6", "72.3"],
      ["2001", "81.4", "76.8", "72.7"],
      ["2002", "81.7", "76.9", "73.0"],
      ["2003", "81.8", "77.0", "73.4"],
      ["2004", "82.0", "77.5", "73.7"],
      ["2005", "82.0", "77.5", "74.1"],
      ["2006", "82.3", "77.7", "74.4"],
      ["2007", "82.5", "78.0", "74.8"],
      ["2008", "82.6", "78.0", "74.8"],
      ["2009", "82.9", "78.4", "75.3"],
      ["2010", "82.8", "78.5", "75.7"],
      ["2011", "82.6", "78.6", "75.9"],
      ["2012", "83.1", "78.7", "76.2"],
      ["2013", "83.3", "78.7", "76.5"],
      ["2014", "83.6", "78.8", "76.7"],
      ["2015", "83.8", "78.7", "77.0"],
      ["2016", "84.0", "78.5", "77.2"],
      ["2017", "84.1", "78.5", "77.2"],
      ["2018", "84.2", "78.6", "77.7"],
      ["2019", "84.4", "78.8", "77.9"],
      ["2020", "84.6", "77.0", "78.0"],
      ["2021", "84.4", "76.3", "78.1"],
      ["2022", "84.0", "77.4", "78.2"],
      ["2023", "84.0", "78.4", "78.0"],
      ["2024", "84.0", "78.9", "78.0"],
    ],
  },
  stock: {
    fileName: "worldbank-gdp-growth.csv",
    title: "実質GDP成長率の推移",
    subtitle: "世界銀行 NY.GDP.MKTP.KD.ZG",
    unit: "%",
    note: "年率成長率。マイナス値を含むため対数スケールには向きません。",
    source: "World Bank, NY.GDP.MKTP.KD.ZG（最終更新: 2026-04-08）",
    rows: [
      ["年", "日本", "米国", "中国"],
      ["2000", "2.8", "4.1", "8.6"],
      ["2001", "0.4", "1.0", "8.3"],
      ["2002", "0.0", "1.7", "9.2"],
      ["2003", "1.5", "2.8", "10.1"],
      ["2004", "2.2", "3.8", "10.1"],
      ["2005", "1.8", "3.5", "11.5"],
      ["2006", "1.4", "2.8", "12.7"],
      ["2007", "1.5", "2.0", "14.1"],
      ["2008", "-1.2", "0.1", "9.7"],
      ["2009", "-5.7", "-2.6", "9.4"],
      ["2010", "4.1", "2.7", "10.6"],
      ["2011", "0.0", "1.6", "9.5"],
      ["2012", "1.4", "2.3", "7.9"],
      ["2013", "2.0", "2.1", "7.8"],
      ["2014", "0.3", "2.5", "7.5"],
      ["2015", "1.6", "2.9", "7.0"],
      ["2016", "0.8", "1.8", "6.8"],
      ["2017", "1.7", "2.5", "6.9"],
      ["2018", "0.6", "3.0", "6.8"],
      ["2019", "-0.4", "2.6", "6.1"],
      ["2020", "-4.2", "-2.2", "2.3"],
      ["2021", "2.7", "6.1", "8.6"],
      ["2022", "0.9", "2.5", "3.1"],
      ["2023", "1.5", "2.9", "5.4"],
      ["2024", "0.1", "2.8", "5.0"],
    ],
  },
};

const state = {
  fileName: "",
  headers: [],
  rows: [],
  selected: new Set(),
  sort: { column: null, direction: "asc" },
  query: "",
  mode: "chart",
  chart: {
    timeColumn: 0,
    valueColumns: [],
    title: "時系列グラフ",
    subtitle: "",
    xAxisName: "年",
    yAxisName: "値",
    unit: "",
    note: "",
    source: "",
    yMode: "zero",
    logScale: false,
    missingMode: "skip",
    indexBase: false,
    showEndLabels: true,
    showGrowth: true,
    showPoints: true,
    aspectRatio: "16:9",
    periodStart: "",
    periodEnd: "",
    videoDuration: 10,
    startHold: 1,
    endHold: 2,
    theme: "presentation",
    backgroundColor: THEMES.presentation.chartBackground,
    textColor: THEMES.presentation.textColor,
    gridColor: THEMES.presentation.gridColor,
    axisColor: THEMES.presentation.axisColor,
    colors: [...THEMES.presentation.seriesColors],
    pointColors: [...THEMES.presentation.seriesColors],
    displayNames: {},
    progress: 1,
    animationId: null,
    startedAt: 0,
    isRecording: false,
    hoverIndex: null,
    layout: null,
  },
};

const els = {
  fileInput: document.querySelector("#fileInput"),
  fileStatus: document.querySelector("#fileStatus"),
  sampleSelect: document.querySelector("#sampleSelect"),
  newFileButton: document.querySelector("#newFileButton"),
  exportButton: document.querySelector("#exportButton"),
  editModeButton: document.querySelector("#editModeButton"),
  chartModeButton: document.querySelector("#chartModeButton"),
  editToolbar: document.querySelector("#editToolbar"),
  addRowButton: document.querySelector("#addRowButton"),
  addColumnButton: document.querySelector("#addColumnButton"),
  deleteSelectedButton: document.querySelector("#deleteSelectedButton"),
  searchInput: document.querySelector("#searchInput"),
  tableHost: document.querySelector("#tableHost"),
  chartHost: document.querySelector("#chartHost"),
  chartEmpty: document.querySelector("#chartEmpty"),
  chartPanel: document.querySelector("#chartPanel"),
  chartTitle: document.querySelector("#chartTitle"),
  chartCurrent: document.querySelector("#chartCurrent"),
  chartTooltip: document.querySelector("#chartTooltip"),
  timeColumnSelect: document.querySelector("#timeColumnSelect"),
  valueColumnList: document.querySelector("#valueColumnList"),
  chartTitleInput: document.querySelector("#chartTitleInput"),
  subtitleInput: document.querySelector("#subtitleInput"),
  xAxisInput: document.querySelector("#xAxisInput"),
  yAxisInput: document.querySelector("#yAxisInput"),
  unitInput: document.querySelector("#unitInput"),
  noteInput: document.querySelector("#noteInput"),
  sourceInput: document.querySelector("#sourceInput"),
  yModeSelect: document.querySelector("#yModeSelect"),
  logScaleInput: document.querySelector("#logScaleInput"),
  logWarning: document.querySelector("#logWarning"),
  indexWarning: document.querySelector("#indexWarning"),
  startPeriodInput: document.querySelector("#startPeriodInput"),
  endPeriodInput: document.querySelector("#endPeriodInput"),
  missingModeSelect: document.querySelector("#missingModeSelect"),
  indexBaseInput: document.querySelector("#indexBaseInput"),
  showEndLabelsInput: document.querySelector("#showEndLabelsInput"),
  showGrowthInput: document.querySelector("#showGrowthInput"),
  showPointsInput: document.querySelector("#showPointsInput"),
  themeSelect: document.querySelector("#themeSelect"),
  aspectRatioSelect: document.querySelector("#aspectRatioSelect"),
  backgroundColorInput: document.querySelector("#backgroundColorInput"),
  textColorInput: document.querySelector("#textColorInput"),
  gridColorInput: document.querySelector("#gridColorInput"),
  seriesColorList: document.querySelector("#seriesColorList"),
  playChartButton: document.querySelector("#playChartButton"),
  recordChartButton: document.querySelector("#recordChartButton"),
  savePngTopButton: document.querySelector("#savePngTopButton"),
  savePngButton: document.querySelector("#savePngButton"),
  videoDurationSelect: document.querySelector("#videoDurationSelect"),
  startHoldInput: document.querySelector("#startHoldInput"),
  endHoldInput: document.querySelector("#endHoldInput"),
  diagnosticsPanel: document.querySelector("#diagnosticsPanel"),
  speedRange: document.querySelector("#speedRange"),
  canvas: document.querySelector("#timeSeriesCanvas"),
};

els.fileInput.addEventListener("change", handleFileLoad);
els.sampleSelect.addEventListener("change", () => {
  if (els.sampleSelect.value) createNewFile();
});
els.newFileButton.addEventListener("click", createNewFile);
els.exportButton.addEventListener("click", exportCsv);
els.editModeButton.addEventListener("click", () => setMode("edit"));
els.chartModeButton.addEventListener("click", () => setMode("chart"));
els.addRowButton.addEventListener("click", addRow);
els.addColumnButton.addEventListener("click", addColumn);
els.deleteSelectedButton.addEventListener("click", deleteSelectedRows);
els.playChartButton.addEventListener("click", () => playChartAnimation());
els.recordChartButton.addEventListener("click", recordChartAnimation);
els.savePngTopButton.addEventListener("click", savePng);
els.savePngButton?.addEventListener("click", savePng);
els.timeColumnSelect.addEventListener("change", () => {
  state.chart.timeColumn = Number(els.timeColumnSelect.value);
  renderChart();
});
els.chartTitleInput.addEventListener("input", syncChartText);
els.subtitleInput.addEventListener("input", syncChartText);
els.xAxisInput.addEventListener("input", syncChartText);
els.yAxisInput.addEventListener("input", syncChartText);
els.unitInput.addEventListener("input", syncChartText);
els.noteInput.addEventListener("input", syncChartText);
els.sourceInput.addEventListener("input", syncChartText);
els.yModeSelect.addEventListener("change", () => {
  state.chart.yMode = els.yModeSelect.value;
  renderChart();
});
els.logScaleInput.addEventListener("change", () => {
  state.chart.logScale = els.logScaleInput.checked;
  renderChart();
});
els.startPeriodInput.addEventListener("input", () => {
  state.chart.periodStart = els.startPeriodInput.value.trim();
  renderChart();
});
els.endPeriodInput.addEventListener("input", () => {
  state.chart.periodEnd = els.endPeriodInput.value.trim();
  renderChart();
});
els.missingModeSelect.addEventListener("change", () => {
  state.chart.missingMode = els.missingModeSelect.value;
  renderChart();
});
els.indexBaseInput.addEventListener("change", () => {
  state.chart.indexBase = els.indexBaseInput.checked;
  if (state.chart.indexBase && !state.chart.unit) {
    state.chart.unit = "指数";
    els.unitInput.value = "指数";
  }
  renderChart();
});
els.showEndLabelsInput.addEventListener("change", () => {
  state.chart.showEndLabels = els.showEndLabelsInput.checked;
  renderChart();
});
els.showGrowthInput.addEventListener("change", () => {
  state.chart.showGrowth = els.showGrowthInput.checked;
  renderChart();
});
els.showPointsInput.addEventListener("change", () => {
  state.chart.showPoints = els.showPointsInput.checked;
  renderChart();
});
els.themeSelect.addEventListener("change", () => {
  applyTheme(els.themeSelect.value);
  renderSeriesCheckboxes();
  renderChart();
});
els.aspectRatioSelect.addEventListener("change", () => {
  state.chart.aspectRatio = els.aspectRatioSelect.value;
  renderChart();
});
els.backgroundColorInput.addEventListener("input", () => {
  state.chart.backgroundColor = els.backgroundColorInput.value;
  renderChart();
});
els.textColorInput.addEventListener("input", () => {
  state.chart.textColor = els.textColorInput.value;
  renderChart();
});
els.gridColorInput.addEventListener("input", () => {
  state.chart.gridColor = els.gridColorInput.value;
  renderChart();
});
els.videoDurationSelect.addEventListener("change", () => {
  state.chart.videoDuration = Number(els.videoDurationSelect.value);
});
els.startHoldInput.addEventListener("input", () => {
  state.chart.startHold = Number(els.startHoldInput.value || 0);
});
els.endHoldInput.addEventListener("input", () => {
  state.chart.endHold = Number(els.endHoldInput.value || 0);
});
els.speedRange.addEventListener("input", () => {
  if (state.mode === "chart" && !state.chart.isRecording) playChartAnimation();
});
els.canvas.addEventListener("mousemove", handleCanvasHover);
els.canvas.addEventListener("mouseleave", clearCanvasHover);
window.addEventListener("resize", () => {
  if (state.mode === "chart") drawChart(getChartData(), state.chart.progress);
});
els.searchInput.addEventListener("input", () => {
  state.query = els.searchInput.value.trim().toLowerCase();
  renderTable();
});

render();

function handleFileLoad(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const parsed = parseCsv(String(reader.result ?? ""));
    loadData(file.name, parsed);
  };
  reader.readAsText(file, "utf-8");
}

function createNewFile() {
  const key = els.sampleSelect.value || "gdp";
  const sample = SAMPLE_DATASETS[key] || SAMPLE_DATASETS.gdp;
  state.chart.title = sample.title;
  state.chart.subtitle = sample.subtitle || "";
  state.chart.unit = sample.unit || "";
  state.chart.note = sample.note || "";
  state.chart.source = sample.source || "サンプルデータ";
  loadData(sample.fileName, sample.rows);
  els.sampleSelect.value = key;
  setMode("chart");
}

function loadData(fileName, matrix) {
  const headers = matrix[0]?.map((value, index) => value || `列${index + 1}`) ?? ["列1"];
  const rows = matrix.slice(1).map((row) => normalizeRow(row, headers.length));

  stopChart();
  state.fileName = fileName;
  state.headers = headers;
  state.rows = rows;
  state.selected.clear();
  state.sort = { column: null, direction: "asc" };
  state.query = "";
  state.chart.isRecording = false;
  state.chart.hoverIndex = null;
  state.chart.displayNames = {};
  els.searchInput.value = "";
  guessChartColumns();
  hydrateChartInputs();
  setMode("chart");
}

function normalizeRow(row, length) {
  return Array.from({ length }, (_, index) => row[index] ?? "");
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && inQuotes && next === '"') {
      value += '"';
      index += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(value);
      value = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(value);
      if (row.some((cell) => cell !== "") || rows.length > 0) rows.push(row);
      row = [];
      value = "";
    } else {
      value += char;
    }
  }

  row.push(value);
  if (row.some((cell) => cell !== "") || rows.length === 0) rows.push(row);
  return rows;
}

function toCsv(headers, rows) {
  return [headers, ...rows]
    .map((row) => row.map(escapeCsvValue).join(","))
    .join("\r\n");
}

function escapeCsvValue(value) {
  const text = String(value ?? "");
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function setMode(mode) {
  if (mode === "chart" && state.headers.length === 0) mode = "chart";
  state.mode = mode;
  render();
  if (mode === "chart" && getChartData().points.length >= 2) drawChart(getChartData(), state.chart.progress);
}

function syncChartText() {
  state.chart.title = els.chartTitleInput.value || "時系列グラフ";
  state.chart.subtitle = els.subtitleInput.value;
  state.chart.xAxisName = els.xAxisInput.value;
  state.chart.yAxisName = els.yAxisInput.value;
  state.chart.unit = els.unitInput.value;
  state.chart.note = els.noteInput.value;
  state.chart.source = els.sourceInput.value;
  renderChart();
}

function hydrateChartInputs() {
  els.chartTitleInput.value = state.chart.title;
  els.subtitleInput.value = state.chart.subtitle;
  els.xAxisInput.value = state.chart.xAxisName;
  els.yAxisInput.value = state.chart.yAxisName;
  els.unitInput.value = state.chart.unit;
  els.noteInput.value = state.chart.note;
  els.sourceInput.value = state.chart.source;
  els.yModeSelect.value = state.chart.yMode;
  els.logScaleInput.checked = state.chart.logScale;
  els.startPeriodInput.value = state.chart.periodStart;
  els.endPeriodInput.value = state.chart.periodEnd;
  els.missingModeSelect.value = state.chart.missingMode;
  els.indexBaseInput.checked = state.chart.indexBase;
  els.showEndLabelsInput.checked = state.chart.showEndLabels;
  els.showGrowthInput.checked = state.chart.showGrowth;
  els.showPointsInput.checked = state.chart.showPoints;
  els.themeSelect.value = state.chart.theme;
  els.aspectRatioSelect.value = state.chart.aspectRatio;
  els.backgroundColorInput.value = state.chart.backgroundColor;
  els.textColorInput.value = state.chart.textColor;
  els.gridColorInput.value = state.chart.gridColor;
  els.videoDurationSelect.value = String(state.chart.videoDuration);
  els.startHoldInput.value = String(state.chart.startHold);
  els.endHoldInput.value = String(state.chart.endHold);
}

function render() {
  applyCssTheme(THEMES[state.chart.theme] || THEMES.presentation);
  updateButtons();
  els.editModeButton.classList.toggle("active", state.mode === "edit");
  els.chartModeButton.classList.toggle("active", state.mode === "chart");
  els.chartHost.hidden = state.mode !== "chart";
  els.tableHost.hidden = state.mode !== "edit";
  els.editToolbar.hidden = state.mode !== "edit";
  els.fileStatus.textContent = state.headers.length
    ? `${state.fileName} / ${state.rows.length}行 ${state.headers.length}列`
    : "CSVから時系列グラフ動画を作るツールです。CSVを読み込むか、サンプルを開いて始めてください。";

  renderChartControls();
  renderChart();
  renderTable();
  renderDiagnostics();
}

function getVisibleRows() {
  const indexed = state.rows.map((row, index) => ({ row, index }));
  const filtered = state.query
    ? indexed.filter(({ row }) => row.some((cell) => String(cell).toLowerCase().includes(state.query)))
    : indexed;

  if (state.sort.column === null) return filtered;

  const direction = state.sort.direction === "asc" ? 1 : -1;
  return [...filtered].sort((a, b) => {
    const left = a.row[state.sort.column] ?? "";
    const right = b.row[state.sort.column] ?? "";
    return left.localeCompare(right, "ja", { numeric: true }) * direction;
  });
}

function renderTable() {
  if (state.headers.length === 0) {
    els.tableHost.innerHTML = `
      <div class="empty-state">
        <h2>CSVを読み込むとデータを確認できます</h2>
        <p>グラフ作成に使う列を確認し、必要に応じてセルを編集できます。</p>
      </div>
    `;
    return;
  }

  const visibleRows = getVisibleRows();
  els.tableHost.replaceChildren(buildTable(visibleRows), buildCount(visibleRows.length));
}

function renderDiagnostics() {
  if (!els.diagnosticsPanel) return;
  if (state.headers.length === 0) {
    els.diagnosticsPanel.innerHTML = `
      <strong>データ診断</strong>
      <p>CSVを読み込むと、行数・列数・数値列候補・欠損値を確認できます。</p>
    `;
    return;
  }

  const timeCandidate = state.headers[state.chart.timeColumn] || "-";
  const numericColumns = state.headers
    .map((header, index) => ({ header, index }))
    .filter((item) => item.index !== state.chart.timeColumn)
    .filter((item) => state.rows.some((row) => parseNumber(row[item.index]) !== null));
  let missing = 0;
  let mixed = 0;
  state.rows.forEach((row) => {
    numericColumns.forEach((item) => {
      const raw = String(row[item.index] ?? "").trim();
      if (!raw) missing += 1;
      if (raw && parseNumber(raw) === null) mixed += 1;
    });
  });

  els.diagnosticsPanel.innerHTML = `
    <strong>データ診断</strong>
    <p>${state.rows.length}行 ${state.headers.length}列を読み込みました</p>
    <p>時系列列候補: ${escapeHtml(timeCandidate)}</p>
    <p>数値列候補: ${escapeHtml(numericColumns.slice(0, 3).map((item) => item.header).join("、") || "なし")}${numericColumns.length > 3 ? ` ほか${numericColumns.length - 3}列` : ""}</p>
    <p>欠損値: ${missing}件 / 文字列が混じる数値: ${mixed}件</p>
  `;
}

function buildTable(visibleRows) {
  const table = document.createElement("table");
  const thead = table.createTHead();
  const headerRow = thead.insertRow();
  const selectHeader = document.createElement("th");
  selectHeader.textContent = "";
  headerRow.append(selectHeader);

  state.headers.forEach((header, columnIndex) => {
    const th = document.createElement("th");
    const wrapper = document.createElement("div");
    wrapper.className = "header-control";

    const input = document.createElement("input");
    input.value = header;
    input.ariaLabel = `${columnIndex + 1}列目の名前`;
    input.addEventListener("input", () => {
      state.headers[columnIndex] = input.value;
      renderChartControls();
      renderChart();
      updateButtons();
    });

    const sortButton = document.createElement("button");
    sortButton.type = "button";
    sortButton.className = "sort-button";
    sortButton.title = "並び替え";
    sortButton.textContent = getSortMark(columnIndex) || "↕";
    sortButton.addEventListener("click", () => sortByColumn(columnIndex));

    wrapper.append(input, sortButton);
    th.append(wrapper);
    headerRow.append(th);
  });

  const deleteHeader = document.createElement("th");
  deleteHeader.textContent = "";
  headerRow.append(deleteHeader);

  const tbody = table.createTBody();
  visibleRows.forEach(({ row, index }) => {
    const tr = tbody.insertRow();
    const checkCell = tr.insertCell();
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "row-check";
    checkbox.checked = state.selected.has(index);
    checkbox.ariaLabel = `${index + 1}行目を選択`;
    checkbox.addEventListener("change", () => {
      checkbox.checked ? state.selected.add(index) : state.selected.delete(index);
      updateButtons();
    });
    checkCell.append(checkbox);

    row.forEach((cell, columnIndex) => {
      const td = tr.insertCell();
      td.contentEditable = "true";
      td.textContent = cell;
      td.addEventListener("input", () => {
        state.rows[index][columnIndex] = td.textContent;
        renderChart();
        updateButtons();
      });
    });

    const deleteCell = tr.insertCell();
    deleteCell.className = "danger-cell";
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "削除";
    deleteButton.addEventListener("click", () => {
      state.rows.splice(index, 1);
      state.selected.delete(index);
      state.selected = reindexSelectionAfterDelete(state.selected, index);
      render();
    });
    deleteCell.append(deleteButton);
  });

  return table;
}

function buildCount(visibleCount) {
  const count = document.createElement("div");
  count.className = "count";
  count.textContent = state.query
    ? `${visibleCount}件を表示中 / 全${state.rows.length}件`
    : `全${state.rows.length}件`;
  return count;
}

function sortByColumn(columnIndex) {
  if (state.sort.column === columnIndex) {
    state.sort.direction = state.sort.direction === "asc" ? "desc" : "asc";
  } else {
    state.sort = { column: columnIndex, direction: "asc" };
  }
  renderTable();
}

function getSortMark(columnIndex) {
  if (state.sort.column !== columnIndex) return "";
  return state.sort.direction === "asc" ? "↑" : "↓";
}

function addRow() {
  state.rows.push(Array.from({ length: state.headers.length }, () => ""));
  render();
}

function addColumn() {
  state.headers.push(`列${state.headers.length + 1}`);
  state.rows = state.rows.map((row) => [...row, ""]);
  render();
}

function deleteSelectedRows() {
  state.rows = state.rows.filter((_, index) => !state.selected.has(index));
  state.selected.clear();
  render();
}

function reindexSelectionAfterDelete(selection, deletedIndex) {
  const next = new Set();
  selection.forEach((index) => {
    if (index < deletedIndex) next.add(index);
    if (index > deletedIndex) next.add(index - 1);
  });
  return next;
}

function exportCsv() {
  const csv = toCsv(state.headers, state.rows);
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  downloadBlob(blob, state.fileName || "data.csv");
}

function updateButtons() {
  const hasData = state.headers.length > 0;
  const hasChart = hasData && getChartData().points.length >= 2 && getSeriesConfig().length > 0;
  const busy = state.chart.isRecording;
  els.exportButton.disabled = !hasData || busy;
  els.addRowButton.disabled = !hasData || busy;
  els.addColumnButton.disabled = !hasData || busy;
  els.chartModeButton.disabled = !hasData;
  els.deleteSelectedButton.disabled = !hasData || busy || state.selected.size === 0;
  els.playChartButton.disabled = !hasChart || busy;
  els.recordChartButton.disabled = !hasChart || busy || !canRecordCanvas();
  if (els.savePngButton) els.savePngButton.disabled = !hasChart || busy;
  els.savePngTopButton.disabled = !hasChart || busy;
  els.recordChartButton.textContent = busy ? "録画中" : "動画保存（WebM）";
}

function guessChartColumns() {
  const timeNames = ["年", "年度", "日付", "年月", "date", "time", "year", "month"];
  const timeIndex = state.headers.findIndex((header) => {
    const lower = String(header).toLowerCase();
    return timeNames.some((name) => lower.includes(name));
  });
  state.chart.timeColumn = timeIndex >= 0 ? timeIndex : 0;

  const numericColumns = state.headers
    .map((_, columnIndex) => columnIndex)
    .filter((columnIndex) => columnIndex !== state.chart.timeColumn)
    .filter((columnIndex) => state.rows.some((row) => parseNumber(row[columnIndex]) !== null));
  state.chart.valueColumns = numericColumns.slice(0, Math.max(1, Math.min(3, numericColumns.length)));
}

function renderChartControls() {
  const options = state.headers
    .map((header, index) => `<option value="${index}">${escapeHtml(header || `列${index + 1}`)}</option>`)
    .join("");
  els.timeColumnSelect.innerHTML = options;
  els.timeColumnSelect.value = String(state.chart.timeColumn);
  renderSeriesCheckboxes();
  renderSeriesColors();
}

function renderSeriesCheckboxes() {
  els.valueColumnList.replaceChildren();
  if (state.headers.length === 0) {
    els.valueColumnList.innerHTML = `<p class="muted">CSVを読み込んでください。</p>`;
    return;
  }

  state.headers.forEach((header, columnIndex) => {
    if (columnIndex === state.chart.timeColumn) return;
    const numericCandidate = state.rows.some((row) => parseNumber(row[columnIndex]) !== null);
    if (!numericCandidate) return;
    const row = document.createElement("div");
    row.className = "series-config-row";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = state.chart.valueColumns.includes(columnIndex);
    checkbox.ariaLabel = `${header || `列${columnIndex + 1}`}を表示`;
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        state.chart.valueColumns.push(columnIndex);
      } else {
        state.chart.valueColumns = state.chart.valueColumns.filter((index) => index !== columnIndex);
      }
      renderSeriesColors();
      renderChart();
      updateButtons();
    });

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = state.chart.displayNames[columnIndex] || header || `列${columnIndex + 1}`;
    nameInput.ariaLabel = `${header || `列${columnIndex + 1}`}の表示名`;
    nameInput.addEventListener("input", () => {
      state.chart.displayNames[columnIndex] = nameInput.value;
      renderChart();
    });

    const lineColor = document.createElement("input");
    lineColor.type = "color";
    lineColor.value = state.chart.colors[columnIndex] || DEFAULT_COLORS[columnIndex % DEFAULT_COLORS.length];
    lineColor.ariaLabel = `${nameInput.value}の線色`;
    lineColor.addEventListener("input", () => {
      state.chart.colors[columnIndex] = lineColor.value;
      if (!state.chart.pointColors[columnIndex]) state.chart.pointColors[columnIndex] = lineColor.value;
      renderChart();
    });

    const pointColor = document.createElement("input");
    pointColor.type = "color";
    pointColor.value = state.chart.pointColors[columnIndex] || lineColor.value;
    pointColor.ariaLabel = `${nameInput.value}の点色`;
    pointColor.addEventListener("input", () => {
      state.chart.pointColors[columnIndex] = pointColor.value;
      renderChart();
    });

    row.append(checkbox, nameInput, lineColor, pointColor);
    els.valueColumnList.append(row);
  });
}

function renderSeriesColors() {
  if (!els.seriesColorList) return;
  els.seriesColorList.replaceChildren();
  const series = getSeriesConfig();
  if (series.length === 0) {
    els.seriesColorList.innerHTML = `<p class="muted">系列を選択してください。</p>`;
    return;
  }

  series.forEach((item) => {
    const row = document.createElement("div");
    row.className = "series-style-row";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = item.name;
    nameInput.ariaLabel = `${item.originalName}の表示名`;
    nameInput.addEventListener("input", () => {
      state.chart.displayNames[item.column] = nameInput.value;
      renderChart();
    });

    const lineColor = document.createElement("input");
    lineColor.type = "color";
    lineColor.value = item.color;
    lineColor.ariaLabel = `${item.name}の線色`;
    lineColor.addEventListener("input", () => {
      state.chart.colors[item.column] = lineColor.value;
      renderChart();
    });

    const pointColor = document.createElement("input");
    pointColor.type = "color";
    pointColor.value = item.pointColor;
    pointColor.ariaLabel = `${item.name}の点色`;
    pointColor.addEventListener("input", () => {
      state.chart.pointColors[item.column] = pointColor.value;
      renderChart();
    });

    row.append(nameInput, lineColor, pointColor);
    els.seriesColorList.append(row);
  });
}

function getSeriesConfig() {
  return state.chart.valueColumns
    .filter((column) => column !== state.chart.timeColumn && state.headers[column] !== undefined)
    .map((column, order) => ({
      column,
      originalName: state.headers[column] || `列${column + 1}`,
      name: state.chart.displayNames[column] || state.headers[column] || `列${column + 1}`,
      color: state.chart.colors[column] || DEFAULT_COLORS[order % DEFAULT_COLORS.length],
      pointColor: state.chart.pointColors[column] || state.chart.colors[column] || DEFAULT_COLORS[order % DEFAULT_COLORS.length],
    }));
}

function renderChart() {
  const data = getChartData();
  const hasChart = data.points.length >= 2 && data.series.length > 0;
  els.chartEmpty.hidden = hasChart;
  els.chartPanel.hidden = !hasChart;
  els.chartTitle.textContent = state.chart.title;
  els.logWarning.hidden = !(state.chart.logScale && hasNonPositiveValues(data.points, data.series));
  els.indexWarning.hidden = !(state.chart.indexBase && hasInvalidIndexBase());
  updateButtons();

  if (!hasChart) {
    stopChart();
    clearCanvasHover();
    return;
  }

  state.chart.progress = Math.min(1, Math.max(state.chart.progress, 1));
  drawChart(data, state.chart.progress);
}

function hasNonPositiveValues(points, series) {
  return points.some((point) =>
    series.some((item) => {
      const value = point.values[item.column];
      return value !== null && value <= 0;
    })
  );
}

function hasInvalidIndexBase() {
  const series = getSeriesConfig();
  const start = parsePeriodBoundary(state.chart.periodStart);
  const end = parsePeriodBoundary(state.chart.periodEnd);
  return series.some((item) => {
    const first = state.rows
      .map((row) => ({ time: parseTime(row[state.chart.timeColumn]), value: parseNumber(row[item.column]) }))
      .filter((point) => point.time !== null)
      .filter((point) => start === null || point.time >= start)
      .filter((point) => end === null || point.time <= end)
      .sort((a, b) => a.time - b.time)[0];
    return !first || !Number.isFinite(first.value) || first.value === 0;
  });
}

function getChartData() {
  const series = getSeriesConfig();
  let points = state.rows
    .map((row) => {
      const time = parseTime(row[state.chart.timeColumn]);
      if (time === null) return null;
      const values = {};
      series.forEach((item) => {
        values[item.column] = parseNumber(row[item.column]);
      });
      return {
        time,
        values,
        label: String(row[state.chart.timeColumn] ?? ""),
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.time - b.time);

  const start = parsePeriodBoundary(state.chart.periodStart);
  const end = parsePeriodBoundary(state.chart.periodEnd);
  points = points.filter((point) => {
    if (start !== null && point.time < start) return false;
    if (end !== null && point.time > end) return false;
    return true;
  });

  points = applyMissingMode(points, series);
  if (state.chart.indexBase) points = indexBase100(points, series);
  points = points.filter((point) => Object.values(point.values).some((value) => value !== null));

  return { series, points };
}

function parsePeriodBoundary(value) {
  const text = String(value ?? "").trim();
  if (!text) return null;
  return parseTime(text);
}

function applyMissingMode(points, series) {
  if (state.chart.missingMode === "skip" || state.chart.missingMode === "connect") return points;
  const previous = {};
  return points.map((point) => {
    const values = { ...point.values };
    series.forEach((item) => {
      if (values[item.column] === null) {
        if (state.chart.missingMode === "previous" && previous[item.column] !== undefined) {
          values[item.column] = previous[item.column];
        }
        if (state.chart.missingMode === "zero") values[item.column] = 0;
      }
      if (values[item.column] !== null) previous[item.column] = values[item.column];
    });
    return { ...point, values };
  });
}

function indexBase100(points, series) {
  const baseValues = {};
  series.forEach((item) => {
    const basePoint = points.find((point) => {
      const value = point.values[item.column];
      return Number.isFinite(value) && value !== 0;
    });
    if (basePoint) baseValues[item.column] = basePoint.values[item.column];
  });

  return points.map((point) => {
    const values = { ...point.values };
    series.forEach((item) => {
      const base = baseValues[item.column];
      const value = values[item.column];
      values[item.column] = Number.isFinite(value) && Number.isFinite(base) ? (value / base) * 100 : null;
    });
    return { ...point, values };
  });
}

function parseTime(value) {
  const text = String(value ?? "").trim();
  if (!text) return null;
  if (/^\d{4}$/.test(text)) return Number(text);
  if (/^\d{4}[-/]\d{1,2}$/.test(text)) {
    const [year, month] = text.split(/[-/]/).map(Number);
    return year + (month - 1) / 12;
  }
  const parsedDate = Date.parse(text);
  if (!Number.isNaN(parsedDate)) return parsedDate;
  const numeric = Number(text.replaceAll(",", ""));
  return Number.isFinite(numeric) ? numeric : null;
}

function parseNumber(value) {
  const text = String(value ?? "").trim().replaceAll(",", "");
  if (!text) return null;
  const numeric = Number(text);
  return Number.isFinite(numeric) ? numeric : null;
}

function playChartAnimation() {
  if (state.mode !== "chart") {
    state.mode = "chart";
    render();
  }
  return runChartAnimation();
}

function runChartAnimation({ onComplete } = {}) {
  const data = getChartData();
  if (data.points.length < 2 || data.series.length === 0) {
    renderChart();
    return Promise.resolve(false);
  }

  stopChart();
  state.chart.progress = 0;
  state.chart.startedAt = performance.now();
  const totalDuration = Number(state.chart.videoDuration || 10) * 1000;
  const startHold = Number(state.chart.startHold || 0) * 1000;
  const endHold = Number(state.chart.endHold || 0) * 1000;
  const speedAdjusted = Math.max(1200, totalDuration - startHold - endHold) / Number(els.speedRange.value || 1);
  drawChart(data, 0);

  return new Promise((resolve) => {
    const step = (now) => {
      const elapsed = now - state.chart.startedAt;
      state.chart.progress = clamp((elapsed - startHold) / speedAdjusted, 0, 1);
      drawChart(data, state.chart.progress);
      if (elapsed < startHold + speedAdjusted + endHold) {
        state.chart.animationId = requestAnimationFrame(step);
        return;
      }
      state.chart.animationId = null;
      onComplete?.();
      resolve(true);
    };

    state.chart.animationId = requestAnimationFrame(step);
  });
}

async function recordChartAnimation() {
  if (state.chart.isRecording) return;
  if (!canRecordCanvas()) {
    alert("このブラウザはCanvas録画に対応していません。ChromeまたはEdgeでお試しください。");
    return;
  }

  const data = getChartData();
  if (data.points.length < 2 || data.series.length === 0) return;
  if (state.mode !== "chart") {
    state.mode = "chart";
    render();
  }

  state.chart.isRecording = true;
  clearCanvasHover();
  updateButtons();
  renderChart();

  let stream;
  try {
    stream = els.canvas.captureStream(60);
    const chunks = [];
    const recorder = new MediaRecorder(stream, { mimeType: getSupportedWebmType() });

    recorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) chunks.push(event.data);
    });

    const stopped = new Promise((resolve) => {
      recorder.addEventListener("stop", resolve, { once: true });
    });

    recorder.start();
    await runChartAnimation({
      onComplete: () => {
        setTimeout(() => recorder.stop(), 180);
      },
    });
    await stopped;

    const blob = new Blob(chunks, { type: "video/webm" });
    downloadBlob(blob, getVideoFileName());
  } catch (error) {
    alert(`動画保存に失敗しました。${error?.message || "ブラウザの保存機能を確認してください。"}`);
  } finally {
    stream?.getTracks().forEach((track) => track.stop());
    state.chart.isRecording = false;
    updateButtons();
  }
}

function stopChart() {
  if (state.chart.animationId !== null) {
    cancelAnimationFrame(state.chart.animationId);
    state.chart.animationId = null;
  }
}

function savePng() {
  const data = getChartData();
  if (data.points.length < 2 || data.series.length === 0) return;
  clearCanvasHover();
  drawChart(data, 1);
  try {
    els.canvas.toBlob((blob) => {
      if (!blob) {
        alert("PNG保存に失敗しました。画像データを作成できませんでした。");
        return;
      }
      downloadBlob(blob, getPngFileName());
    }, "image/png");
  } catch (error) {
    alert(`PNG保存に失敗しました。${error?.message || "ブラウザの保存機能を確認してください。"}`);
  }
}

function drawChart(data, progress) {
  const { points, series } = data;
  if (points.length < 2 || series.length === 0) return;
  const safeProgress = clamp(progress, 0, 1);

  const canvas = els.canvas;
  const frameWidth = canvas.parentElement?.clientWidth || 900;
  const ratioValue = getAspectRatioValue();
  let cssWidth = Math.max(360, Math.min(1280, frameWidth));
  let cssHeight = Math.round(cssWidth / ratioValue);
  if (state.chart.aspectRatio === "9:16") {
    cssHeight = Math.min(820, Math.max(560, cssHeight));
    cssWidth = Math.round(cssHeight * ratioValue);
  }
  if (state.chart.aspectRatio === "1:1") {
    cssWidth = Math.min(cssWidth, 760);
    cssHeight = cssWidth;
  }
  const ratio = window.devicePixelRatio || 1;
  canvas.style.width = `${cssWidth}px`;
  canvas.style.height = `${cssHeight}px`;
  canvas.width = Math.round(cssWidth * ratio);
  canvas.height = Math.round(cssHeight * ratio);

  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, cssWidth, cssHeight);

  const colors = getChartColors();
  ctx.fillStyle = colors.background;
  ctx.fillRect(0, 0, cssWidth, cssHeight);

  const padding = { top: 92, right: 42, bottom: 78, left: 86 };
  const plotWidth = cssWidth - padding.left - padding.right;
  const plotHeight = cssHeight - padding.top - padding.bottom;
  const times = points.map((point) => point.time);
  const minTime = Math.min(...times);
  const maxTime = Math.max(...times);
  const scale = getYScale(points, series);
  const xFor = (time) => padding.left + ((time - minTime) / (maxTime - minTime || 1)) * plotWidth;
  const yFor = (value) => {
    if (value === null || value === undefined) return null;
    if (state.chart.logScale) {
      if (value <= 0) return null;
      const logValue = Math.log10(value);
      return padding.top + (1 - (logValue - scale.logMin) / (scale.logMax - scale.logMin || 1)) * plotHeight;
    }
    return padding.top + (1 - (value - scale.min) / (scale.max - scale.min || 1)) * plotHeight;
  };

  drawChartFrame(ctx, { cssWidth, cssHeight, padding, plotWidth, plotHeight, points, series, xFor, yFor, scale, colors });
  drawSeries(ctx, { points, series, xFor, yFor, progress: safeProgress, padding, plotWidth });
  drawHover(ctx, { points, series, xFor, yFor, padding, plotHeight, colors });

  const latest = getVisiblePoint(points, safeProgress);
  els.chartCurrent.textContent = `${formatTimeLabel(latest.label, latest.time)} / ${series.length}系列`;
  state.chart.layout = { padding, plotWidth, plotHeight, xFor, yFor, points, series, cssWidth, cssHeight };
}

function drawChartFrame(ctx, area) {
  const { cssWidth, padding, plotWidth, plotHeight, points, series, xFor, yFor, scale, colors } = area;
  ctx.fillStyle = colors.text;
  ctx.font = `700 24px ${CANVAS_FONT}`;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText(state.chart.title, padding.left, 24);

  ctx.font = `13px ${CANVAS_FONT}`;
  ctx.fillStyle = colors.muted;
  ctx.fillText(state.chart.subtitle || (state.chart.unit ? `単位: ${state.chart.unit}` : ""), padding.left, 56);

  drawLegend(ctx, series, cssWidth, padding, colors);

  ctx.strokeStyle = colors.axis;
  ctx.lineWidth = 1;
  ctx.strokeRect(padding.left, padding.top, plotWidth, plotHeight);

  ctx.font = `12px ${CANVAS_FONT}`;
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  scale.ticks.forEach((value) => {
    const y = yFor(value);
    if (y === null) return;
    ctx.strokeStyle = value === 0 ? colors.axis : colors.grid;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(padding.left + plotWidth, y);
    ctx.stroke();
    ctx.fillStyle = colors.muted;
    ctx.fillText(formatNumber(value), padding.left - 10, y);
  });

  const labelIndexes = getLabelIndexes(points.length);
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  labelIndexes.forEach((index) => {
    const point = points[index];
    const x = xFor(point.time);
    ctx.strokeStyle = colors.grid;
    ctx.beginPath();
    ctx.moveTo(x, padding.top);
    ctx.lineTo(x, padding.top + plotHeight);
    ctx.stroke();
    ctx.fillStyle = colors.muted;
    ctx.fillText(formatTimeLabel(point.label, point.time), x, padding.top + plotHeight + 12);
  });

  ctx.fillStyle = colors.text;
  ctx.font = `13px ${CANVAS_FONT}`;
  ctx.textAlign = "center";
  ctx.fillText(state.chart.xAxisName, padding.left + plotWidth / 2, padding.top + plotHeight + 44);

  ctx.save();
  ctx.translate(24, padding.top + plotHeight / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(state.chart.yAxisName, 0, 0);
  ctx.restore();

  ctx.font = `12px ${CANVAS_FONT}`;
  ctx.textAlign = "left";
  ctx.textBaseline = "bottom";
  ctx.fillStyle = colors.muted;
  const footer = [state.chart.note, state.chart.source ? `出典: ${state.chart.source}` : ""].filter(Boolean).join(" / ");
  if (footer) ctx.fillText(footer, padding.left, area.cssHeight - 14);

  if (state.chart.showGrowth) drawGrowthSummary(ctx, area);
}

function drawLegend(ctx, series, cssWidth, padding, colors) {
  let x = padding.left + 260;
  let y = 30;
  ctx.font = `12px ${CANVAS_FONT}`;
  series.forEach((item) => {
    const width = Math.min(180, ctx.measureText(item.name).width + 34);
    if (x + width > cssWidth - padding.right) {
      x = padding.left;
      y += 22;
    }
    ctx.fillStyle = item.color;
    ctx.fillRect(x, y + 3, 18, 3);
    ctx.fillStyle = colors.text;
    ctx.fillText(item.name, x + 26, y);
    x += width + 16;
  });
}

function drawSeries(ctx, area) {
  const { points, series, xFor, yFor, progress } = area;
  const visibleEnd = progress * (points.length - 1);
  const fullIndex = Math.floor(visibleEnd);
  const partial = visibleEnd - fullIndex;

  series.forEach((item) => {
    ctx.strokeStyle = item.color;
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.beginPath();
    let hasActivePath = false;

    for (let index = 0; index <= fullIndex; index += 1) {
      const value = points[index]?.values[item.column];
      if (value === null || value === undefined) {
        if (state.chart.missingMode !== "connect") hasActivePath = false;
        continue;
      }
      const x = xFor(points[index].time);
      const y = yFor(value);
      if (y === null) {
        hasActivePath = false;
        continue;
      }
      hasActivePath ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      hasActivePath = true;
    }

    if (partial > 0 && points[fullIndex] && points[fullIndex + 1]) {
      const from = points[fullIndex].values[item.column];
      const to = points[fullIndex + 1].values[item.column];
      if (from !== null && from !== undefined && to !== null && to !== undefined) {
        const time = points[fullIndex].time + (points[fullIndex + 1].time - points[fullIndex].time) * partial;
        const value = from + (to - from) * partial;
        const x = xFor(time);
        const y = yFor(value);
        if (y !== null) hasActivePath ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
    }

    ctx.stroke();

    if (state.chart.showPoints) {
      for (let index = 0; index <= fullIndex; index += 1) {
        const value = points[index]?.values[item.column];
        if (value === null || value === undefined) continue;
        const y = yFor(value);
        if (y === null) continue;
        ctx.fillStyle = item.pointColor;
        ctx.beginPath();
        ctx.arc(xFor(points[index].time), y, 3.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  });

  if (state.chart.showEndLabels) drawEndLabels(ctx, area);
}

function getAspectRatioValue() {
  if (state.chart.aspectRatio === "1:1") return 1;
  if (state.chart.aspectRatio === "9:16") return 9 / 16;
  return 16 / 9;
}

function drawHover(ctx, area) {
  const { points, series, xFor, yFor, padding, plotHeight, colors } = area;
  if (state.chart.hoverIndex === null || !points[state.chart.hoverIndex]) return;
  const point = points[state.chart.hoverIndex];
  const x = xFor(point.time);
  ctx.strokeStyle = colors.focus;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(x, padding.top);
  ctx.lineTo(x, padding.top + plotHeight);
  ctx.stroke();

  series.forEach((item) => {
    const value = point.values[item.column];
    if (value === null || value === undefined) return;
    const y = yFor(value);
    if (y === null) return;
    ctx.fillStyle = item.pointColor;
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
  });
}

function getVisiblePoint(points, progress) {
  const index = Math.min(points.length - 1, Math.max(0, Math.floor(progress * (points.length - 1))));
  return points[index];
}

function drawEndLabels(ctx, area) {
  const { points, series, xFor, yFor, padding, plotWidth, colors } = area;
  const latestVisibleIndex = Math.min(points.length - 1, Math.max(0, Math.floor(area.progress * (points.length - 1))));
  const labelPoints = series
    .map((item) => {
      for (let index = latestVisibleIndex; index >= 0; index -= 1) {
        const value = points[index].values[item.column];
        const y = yFor(value);
        if (value !== null && y !== null) {
          return { item, point: points[index], value, x: xFor(points[index].time), y };
        }
      }
      return null;
    })
    .filter(Boolean)
    .sort((a, b) => a.y - b.y);

  let lastY = -Infinity;
  ctx.font = `12px ${CANVAS_FONT}`;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  labelPoints.forEach((label) => {
    const y = Math.max(label.y, lastY + 16);
    lastY = y;
    const x = Math.min(label.x + 10, padding.left + plotWidth - 120);
    ctx.fillStyle = label.item.color;
    ctx.fillText(`${label.item.name} ${formatValue(label.value)}`, x, y);
  });
}

function drawGrowthSummary(ctx, area) {
  const { points, series, padding, colors } = area;
  const rows = series.map((item) => {
    const valid = points.filter((point) => Number.isFinite(point.values[item.column]) && point.values[item.column] > 0);
    if (valid.length < 2) return null;
    const first = valid[0];
    const last = valid[valid.length - 1];
    const multiple = last.values[item.column] / first.values[item.column];
    const years = Math.max(1, last.time - first.time);
    const cagr = (multiple ** (1 / years) - 1) * 100;
    return `${item.name}: ${formatNumber(multiple)}倍 / 年平均${formatNumber(cagr)}%`;
  }).filter(Boolean);

  if (rows.length === 0) return;
  ctx.font = `12px ${CANVAS_FONT}`;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillStyle = colors.muted;
  rows.slice(0, 3).forEach((row, index) => {
    ctx.fillText(row, padding.left, 72 + index * 17);
  });
}

function getYScale(points, series) {
  const values = [];
  points.forEach((point) => {
    series.forEach((item) => {
      const value = point.values[item.column];
      if (Number.isFinite(value) && (!state.chart.logScale || value > 0)) values.push(value);
    });
  });

  if (values.length === 0) return { min: 0, max: 10, ticks: [0, 2, 4, 6, 8, 10] };
  if (state.chart.logScale) {
    const min = Math.min(...values);
    const max = Math.max(...values);
    const minPow = Math.floor(Math.log10(min));
    const maxPow = Math.ceil(Math.log10(max));
    const ticks = [];
    for (let power = minPow; power <= maxPow; power += 1) {
      [1, 2, 5].forEach((factor) => {
        const value = factor * 10 ** power;
        if (value >= min / 1.1 && value <= max * 1.1) ticks.push(value);
      });
    }
    const minTick = ticks[0] || min;
    const maxTick = ticks[ticks.length - 1] || max;
    return {
      min: minTick,
      max: maxTick,
      logMin: Math.log10(minTick),
      logMax: Math.log10(maxTick),
      ticks,
    };
  }
  const rawMin = Math.min(...values);
  const rawMax = Math.max(...values);
  const paddedMin = state.chart.yMode === "zero" ? 0 : rawMin - (rawMax - rawMin || 1) * 0.08;
  const paddedMax = rawMax + (rawMax - rawMin || 1) * 0.12;
  return niceScale(paddedMin, paddedMax, 5, state.chart.yMode === "zero");
}

function niceScale(minValue, maxValue, tickCount, forceZero) {
  let min = forceZero ? 0 : minValue;
  let max = maxValue;
  if (min === max) {
    min = forceZero ? 0 : min - 1;
    max += 1;
  }
  const roughStep = Math.max(1, (max - min) / tickCount);
  const step = niceStep(roughStep);
  const niceMin = forceZero ? 0 : Math.floor(min / step) * step;
  const niceMax = Math.ceil(max / step) * step;
  const ticks = [];
  for (let value = niceMin; value <= niceMax + step * 0.5; value += step) {
    ticks.push(Math.round(value));
  }
  return { min: niceMin, max: niceMax, ticks };
}

function niceStep(value) {
  const exponent = Math.floor(Math.log10(value));
  const base = 10 ** exponent;
  const fraction = value / base;
  if (fraction <= 1) return base;
  if (fraction <= 2) return 2 * base;
  if (fraction <= 5) return 5 * base;
  return 10 * base;
}

function handleCanvasHover(event) {
  const layout = state.chart.layout;
  if (!layout || state.chart.isRecording) return;
  const rect = els.canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const { padding, plotWidth, plotHeight, points } = layout;

  if (x < padding.left || x > padding.left + plotWidth || y < padding.top || y > padding.top + plotHeight) {
    clearCanvasHover();
    return;
  }

  let nearestIndex = 0;
  let nearestDistance = Infinity;
  points.forEach((point, index) => {
    const distance = Math.abs(layout.xFor(point.time) - x);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestIndex = index;
    }
  });

  state.chart.hoverIndex = nearestIndex;
  drawChart(getChartData(), state.chart.progress);
  showTooltip(event, points[nearestIndex], layout.series);
}

function showTooltip(event, point, series) {
  const rows = series
    .map((item) => {
      const value = point.values[item.column];
      if (value === null || value === undefined) return "";
      return `<div><span style="background:${item.color}"></span>${escapeHtml(item.name)}: ${formatValue(value)}</div>`;
    })
    .filter(Boolean)
    .join("");
  els.chartTooltip.innerHTML = `<strong>${escapeHtml(formatTimeLabel(point.label, point.time))}</strong>${rows}`;
  els.chartTooltip.hidden = false;
  const frameRect = els.canvas.parentElement.getBoundingClientRect();
  els.chartTooltip.style.left = `${event.clientX - frameRect.left + 14}px`;
  els.chartTooltip.style.top = `${event.clientY - frameRect.top + 14}px`;
}

function clearCanvasHover() {
  state.chart.hoverIndex = null;
  els.chartTooltip.hidden = true;
  if (state.chart.layout) drawChart(getChartData(), state.chart.progress);
}

function getChartColors() {
  const theme = THEMES[state.chart.theme] || THEMES.presentation;
  const text = state.chart.textColor || theme.textColor;
  return {
    background: state.chart.backgroundColor || theme.chartBackground,
    text,
    muted: withAlpha(text, 0.68),
    grid: state.chart.gridColor || theme.gridColor,
    axis: state.chart.axisColor || theme.axisColor,
    focus: withAlpha(text, 0.45),
  };
}

function applyTheme(themeName) {
  const theme = THEMES[themeName] || THEMES.presentation;
  state.chart.theme = themeName;
  state.chart.backgroundColor = theme.chartBackground;
  state.chart.textColor = theme.textColor;
  state.chart.gridColor = theme.gridColor;
  state.chart.axisColor = theme.axisColor;
  state.chart.colors = [...theme.seriesColors];
  state.chart.pointColors = [...theme.seriesColors];
  els.backgroundColorInput.value = state.chart.backgroundColor;
  els.textColorInput.value = state.chart.textColor;
  els.gridColorInput.value = state.chart.gridColor;
  applyCssTheme(theme);
}

function applyCssTheme(theme) {
  const root = document.documentElement;
  const cssVars = {
    "--bg": theme.appBackground,
    "--panel": theme.panelBackground,
    "--card": theme.cardBackground,
    "--chart-bg": theme.chartBackground,
    "--ink": theme.textColor,
    "--muted": theme.mutedTextColor,
    "--line": theme.borderColor,
    "--grid": theme.gridColor,
    "--axis": theme.axisColor,
    "--accent": theme.buttonPrimaryBackground,
    "--accent-strong": theme.buttonPrimaryBackground,
    "--button-primary-text": theme.buttonPrimaryText,
    "--button-bg": theme.buttonSecondaryBackground,
    "--button-text": theme.buttonSecondaryText,
    "--input-bg": theme.inputBackground,
    "--input-text": theme.inputTextColor,
    "--input-border": theme.inputBorderColor,
    "--tooltip-bg": withAlpha(theme.cardBackground, 0.96),
    "--panel-soft": withAlpha(theme.panelBackground, 0.72),
  };

  Object.entries(cssVars).forEach(([name, value]) => {
    root.style.setProperty(name, value);
  });
}

function withAlpha(hex, alpha) {
  const normalized = hex.replace("#", "");
  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function getLabelIndexes(length) {
  if (length <= 5) return Array.from({ length }, (_, index) => index);
  const indexes = new Set([0, length - 1]);
  for (let step = 1; step <= 3; step += 1) {
    indexes.add(Math.round(((length - 1) * step) / 4));
  }
  return [...indexes].sort((a, b) => a - b);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function canRecordCanvas() {
  return Boolean(
    window.MediaRecorder &&
      typeof HTMLCanvasElement !== "undefined" &&
      HTMLCanvasElement.prototype.captureStream
  );
}

function getSupportedWebmType() {
  const types = [
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm",
  ];
  return types.find((type) => MediaRecorder.isTypeSupported(type)) || "video/webm";
}

function getVideoFileName() {
  return `timeseries-animation-${getDateStamp()}.webm`;
}

function getPngFileName() {
  const slug = slugify(state.chart.title || "timeseries-chart");
  return `${slug}-${getDateStamp()}.png`;
}

function getDateStamp() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

function downloadBlob(blob, fileName) {
  let url = "";
  try {
    url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.append(link);
    link.click();
    link.remove();
  } catch (error) {
    alert(`保存に失敗しました。${error?.message || "ブラウザの保存機能を確認してください。"}`);
  } finally {
    if (url) URL.revokeObjectURL(url);
  }
}

function slugify(value) {
  const ascii = String(value)
    .trim()
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
  return ascii || "timeseries-chart";
}

function formatTimeLabel(label, time) {
  if (label) return String(label);
  return Number.isInteger(time) && time > 1000 && time < 3000 ? `${time}` : formatNumber(time);
}

function formatValue(value) {
  const suffix = state.chart.unit ? ` ${state.chart.unit}` : "";
  return `${formatNumber(value)}${suffix}`;
}

function formatNumber(value) {
  return new Intl.NumberFormat("ja-JP", { maximumFractionDigits: 1 }).format(value);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

const CANVAS_FONT = '"Yu Gothic", "Meiryo", "Noto Sans JP", "Segoe UI", sans-serif';
const DEFAULT_COLORS = ["#0f766e", "#2563eb", "#c2410c", "#7c3aed", "#be123c", "#15803d", "#a16207", "#0369a1"];
const PLAN_STORAGE_KEY = "timecsv-plan-mode";
const GUIDE_STORAGE_KEY = "timeseries-guide-seen";
const GUIDE_SAMPLE_KEY = "raceCountryGdp";
const FEATURE_FLAGS = {
  barChartRaceFree: true,
  barChartRaceMaxItemsFree: 10,
  barChartRaceMaxItemsPro: 20,
};
const FREE_THEME_KEYS = ["presentation", "dark", "newspaper"];
const PRO_THEME_KEYS = ["youtube", "article", "finance", "classroom", "ir", "verticalSns", "luxury"];
const THEMES = {
  presentation: {
    appBackground: "#eef5f8",
    panelBackground: "#f7fbfd",
    cardBackground: "#ffffff",
    chartBackground: "#ffffff",
    textColor: "#102033",
    mutedTextColor: "#65768a",
    borderColor: "#d3e1ea",
    gridColor: "#e4edf3",
    axisColor: "#9bb0c0",
    buttonPrimaryBackground: "#2f84b8",
    buttonPrimaryText: "#ffffff",
    buttonSecondaryBackground: "#ffffff",
    buttonSecondaryText: "#102033",
    inputBackground: "#ffffff",
    inputTextColor: "#102033",
    inputBorderColor: "#d3e1ea",
    seriesColors: ["#2f84b8", "#1f5f97", "#b45309", "#be123c", "#6d28d9", "#15803d"],
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
  youtube: {
    appBackground: "#101010",
    panelBackground: "#171717",
    cardBackground: "#202020",
    chartBackground: "#0f1115",
    textColor: "#ffffff",
    mutedTextColor: "#c7c7c7",
    borderColor: "#333333",
    gridColor: "#30343b",
    axisColor: "#6b7280",
    buttonPrimaryBackground: "#ef4444",
    buttonPrimaryText: "#ffffff",
    buttonSecondaryBackground: "#262626",
    buttonSecondaryText: "#ffffff",
    inputBackground: "#121212",
    inputTextColor: "#ffffff",
    inputBorderColor: "#3f3f46",
    seriesColors: ["#ef4444", "#38bdf8", "#facc15", "#22c55e", "#f472b6", "#a78bfa"],
  },
  article: {
    appBackground: "#ece7dc",
    panelBackground: "#f7f2e8",
    cardBackground: "#fffaf0",
    chartBackground: "#fffdf7",
    textColor: "#1f2933",
    mutedTextColor: "#6b6258",
    borderColor: "#cfc5b4",
    gridColor: "#ddd3c2",
    axisColor: "#988d7f",
    buttonPrimaryBackground: "#111827",
    buttonPrimaryText: "#ffffff",
    buttonSecondaryBackground: "#fffdf7",
    buttonSecondaryText: "#1f2933",
    inputBackground: "#fffdf7",
    inputTextColor: "#1f2933",
    inputBorderColor: "#cfc5b4",
    seriesColors: ["#111827", "#b91c1c", "#1d4ed8", "#047857", "#b45309", "#6d28d9"],
  },
  finance: {
    appBackground: "#e9eef3",
    panelBackground: "#f7fafc",
    cardBackground: "#ffffff",
    chartBackground: "#ffffff",
    textColor: "#111827",
    mutedTextColor: "#526173",
    borderColor: "#cbd5e1",
    gridColor: "#dbe4ee",
    axisColor: "#94a3b8",
    buttonPrimaryBackground: "#0f3d5e",
    buttonPrimaryText: "#ffffff",
    buttonSecondaryBackground: "#ffffff",
    buttonSecondaryText: "#0f172a",
    inputBackground: "#ffffff",
    inputTextColor: "#111827",
    inputBorderColor: "#cbd5e1",
    seriesColors: ["#0f3d5e", "#b91c1c", "#047857", "#b45309", "#4338ca", "#64748b"],
  },
  classroom: {
    appBackground: "#eef6ff",
    panelBackground: "#f8fbff",
    cardBackground: "#ffffff",
    chartBackground: "#ffffff",
    textColor: "#18212f",
    mutedTextColor: "#617187",
    borderColor: "#c9d8eb",
    gridColor: "#dbeafe",
    axisColor: "#93a9c5",
    buttonPrimaryBackground: "#2563eb",
    buttonPrimaryText: "#ffffff",
    buttonSecondaryBackground: "#ffffff",
    buttonSecondaryText: "#18212f",
    inputBackground: "#ffffff",
    inputTextColor: "#18212f",
    inputBorderColor: "#c9d8eb",
    seriesColors: ["#2563eb", "#f97316", "#16a34a", "#dc2626", "#7c3aed", "#0891b2"],
  },
  ir: {
    appBackground: "#edf0f4",
    panelBackground: "#f9fafb",
    cardBackground: "#ffffff",
    chartBackground: "#ffffff",
    textColor: "#111827",
    mutedTextColor: "#5b6675",
    borderColor: "#d1d9e3",
    gridColor: "#e5eaf0",
    axisColor: "#98a2b3",
    buttonPrimaryBackground: "#0b5a5a",
    buttonPrimaryText: "#ffffff",
    buttonSecondaryBackground: "#ffffff",
    buttonSecondaryText: "#111827",
    inputBackground: "#ffffff",
    inputTextColor: "#111827",
    inputBorderColor: "#d1d9e3",
    seriesColors: ["#0b5a5a", "#334155", "#0f766e", "#b45309", "#2563eb", "#be123c"],
  },
  verticalSns: {
    appBackground: "#160f24",
    panelBackground: "#21172f",
    cardBackground: "#2b1f3d",
    chartBackground: "#17111f",
    textColor: "#fff7ed",
    mutedTextColor: "#d6c6e6",
    borderColor: "#4c3a64",
    gridColor: "#3b2f4f",
    axisColor: "#8b78a8",
    buttonPrimaryBackground: "#f97316",
    buttonPrimaryText: "#1f1308",
    buttonSecondaryBackground: "#312343",
    buttonSecondaryText: "#fff7ed",
    inputBackground: "#17111f",
    inputTextColor: "#fff7ed",
    inputBorderColor: "#4c3a64",
    seriesColors: ["#f97316", "#22d3ee", "#e879f9", "#a3e635", "#fb7185", "#facc15"],
  },
  luxury: {
    appBackground: "#11100e",
    panelBackground: "#181613",
    cardBackground: "#211f1b",
    chartBackground: "#181613",
    textColor: "#f7f3ea",
    mutedTextColor: "#c8bda9",
    borderColor: "#4d4233",
    gridColor: "#3d352b",
    axisColor: "#9b8d78",
    buttonPrimaryBackground: "#b08d57",
    buttonPrimaryText: "#18120a",
    buttonSecondaryBackground: "#2a251e",
    buttonSecondaryText: "#f7f3ea",
    inputBackground: "#211f1b",
    inputTextColor: "#f7f3ea",
    inputBorderColor: "#4d4233",
    seriesColors: ["#9a6b24", "#1f2937", "#7f1d1d", "#14532d", "#312e81", "#854d0e"],
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
  companySales: {
    fileName: "sample-company-sales.csv",
    title: "会社売上の推移",
    subtitle: "事業別の売上成長サンプル",
    unit: "百万円",
    note: "架空データ",
    source: "サンプルデータ",
    rows: [
      ["年", "国内事業", "海外事業", "新規事業"],
      ["2018", "820", "240", "30"],
      ["2019", "910", "310", "55"],
      ["2020", "870", "380", "96"],
      ["2021", "980", "520", "150"],
      ["2022", "1160", "760", "230"],
      ["2023", "1320", "980", "360"],
      ["2024", "1510", "1240", "540"],
    ],
  },
  storeSales: {
    fileName: "sample-store-sales.csv",
    title: "店舗別売上推移",
    subtitle: "主要店舗の月次売上サンプル",
    unit: "万円",
    note: "架空データ",
    source: "サンプルデータ",
    rows: [
      ["年", "東京店", "大阪店", "福岡店", "札幌店"],
      ["2019", "420", "360", "210", "180"],
      ["2020", "390", "330", "240", "200"],
      ["2021", "470", "380", "290", "230"],
      ["2022", "560", "450", "340", "260"],
      ["2023", "690", "540", "410", "320"],
      ["2024", "780", "620", "480", "390"],
    ],
  },
  snsFollowers: {
    fileName: "sample-sns-followers.csv",
    title: "SNSフォロワー推移",
    subtitle: "媒体別フォロワー数サンプル",
    unit: "人",
    note: "架空データ",
    source: "サンプルデータ",
    rows: [
      ["年", "Instagram", "X", "TikTok"],
      ["2020", "1200", "900", "300"],
      ["2021", "2600", "1500", "1800"],
      ["2022", "5200", "2400", "6200"],
      ["2023", "9800", "3900", "15400"],
      ["2024", "16200", "6200", "28600"],
      ["2025", "24100", "8400", "45200"],
    ],
  },
  youtubeViews: {
    fileName: "sample-youtube-views.csv",
    title: "YouTube再生数推移",
    subtitle: "チャンネル別累計再生数サンプル",
    unit: "万回",
    note: "架空データ",
    source: "サンプルデータ",
    rows: [
      ["年", "解説動画", "ショート", "ライブ配信"],
      ["2020", "80", "20", "12"],
      ["2021", "160", "90", "38"],
      ["2022", "310", "280", "76"],
      ["2023", "520", "760", "150"],
      ["2024", "820", "1480", "260"],
      ["2025", "1160", "2360", "410"],
    ],
  },
  countryGdp: {
    fileName: "sample-country-gdp.csv",
    title: "国別GDP比較サンプル",
    subtitle: "初年度を100にした比較向けサンプル",
    unit: "指数",
    note: "架空データ",
    source: "サンプルデータ",
    rows: [
      ["年", "日本", "米国", "中国", "インド"],
      ["2010", "100", "100", "100", "100"],
      ["2012", "103", "106", "120", "116"],
      ["2014", "106", "113", "143", "135"],
      ["2016", "109", "121", "169", "158"],
      ["2018", "112", "131", "198", "184"],
      ["2020", "108", "128", "215", "194"],
      ["2022", "113", "141", "246", "225"],
      ["2024", "117", "152", "278", "258"],
    ],
  },
  stockIndex: {
    fileName: "sample-stock-index.csv",
    title: "株価指数比較サンプル",
    subtitle: "2019年=100",
    unit: "指数",
    note: "架空データ",
    source: "サンプルデータ",
    rows: [
      ["年", "Index A", "Index B", "Index C"],
      ["2019", "100", "100", "100"],
      ["2020", "118", "92", "110"],
      ["2021", "146", "126", "134"],
      ["2022", "132", "119", "151"],
      ["2023", "168", "142", "178"],
      ["2024", "205", "166", "214"],
      ["2025", "238", "182", "249"],
    ],
  },
  rankingTrend: {
    fileName: "sample-ranking-trend.csv",
    title: "ランキング指標の推移",
    subtitle: "スコアが大きいほど上位",
    unit: "pt",
    note: "架空データ",
    source: "サンプルデータ",
    rows: [
      ["年", "Alpha", "Beta", "Gamma", "Delta"],
      ["2020", "45", "52", "31", "24"],
      ["2021", "53", "55", "38", "29"],
      ["2022", "61", "58", "47", "37"],
      ["2023", "72", "63", "54", "46"],
      ["2024", "84", "69", "62", "58"],
      ["2025", "93", "75", "71", "66"],
    ],
  },
  raceCountryGdp: {
    graphMode: "barRace",
    fileName: "sample-race-country-gdp.csv",
    title: "国別GDPランキング推移",
    subtitle: "バーチャートレース用サンプル",
    unit: "兆ドル",
    note: "架空データ",
    source: "サンプルデータ",
    rows: [
      ["年", "アメリカ", "中国", "日本", "ドイツ", "インド", "イギリス", "フランス", "ブラジル", "カナダ", "韓国", "豪州", "メキシコ"],
      ["2000", "10.3", "1.2", "4.9", "1.9", "0.5", "1.6", "1.4", "0.7", "0.8", "0.6", "0.4", "0.5"],
      ["2005", "13.1", "2.3", "4.8", "2.6", "0.8", "2.2", "2.0", "1.1", "1.2", "0.9", "0.7", "0.8"],
      ["2010", "15.0", "6.1", "5.7", "3.4", "1.7", "2.5", "2.6", "2.2", "1.6", "1.1", "1.1", "1.1"],
      ["2015", "18.2", "11.1", "4.4", "3.4", "2.1", "2.9", "2.4", "1.8", "1.6", "1.4", "1.3", "1.2"],
      ["2020", "21.0", "14.7", "5.0", "3.9", "2.7", "2.7", "2.6", "1.5", "1.6", "1.6", "1.4", "1.1"],
      ["2025", "27.0", "20.5", "4.9", "4.5", "4.0", "3.4", "3.0", "2.3", "2.1", "2.0", "1.8", "1.7"],
    ],
  },
  racePrefPopulation: {
    graphMode: "barRace",
    fileName: "sample-race-pref-population.csv",
    title: "都道府県人口ランキング推移",
    subtitle: "人口変化が見える架空サンプル",
    unit: "万人",
    note: "架空データ",
    source: "サンプルデータ",
    rows: [
      ["年", "東京", "神奈川", "大阪", "愛知", "埼玉", "千葉", "兵庫", "福岡", "北海道", "沖縄"],
      ["2000", "1200", "850", "880", "700", "690", "590", "555", "500", "570", "130"],
      ["2005", "1260", "875", "882", "725", "705", "605", "560", "505", "560", "136"],
      ["2010", "1320", "905", "886", "742", "720", "620", "558", "510", "550", "140"],
      ["2015", "1360", "915", "884", "750", "725", "625", "552", "515", "540", "143"],
      ["2020", "1400", "925", "880", "755", "735", "630", "545", "525", "528", "146"],
      ["2025", "1420", "930", "872", "760", "738", "632", "536", "535", "510", "149"],
    ],
  },
  raceCompanySales: {
    graphMode: "barRace",
    fileName: "sample-race-company-sales.csv",
    title: "企業売上ランキング推移",
    subtitle: "成長企業の順位入れ替わりサンプル",
    unit: "億円",
    note: "架空データ",
    source: "サンプルデータ",
    rows: [
      ["年", "Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Kappa", "Nova", "Orion", "Pulse"],
      ["2018", "820", "760", "610", "540", "320", "260", "180", "120", "90", "60"],
      ["2019", "880", "790", "660", "590", "410", "300", "230", "190", "140", "100"],
      ["2020", "840", "820", "710", "650", "560", "420", "310", "280", "230", "180"],
      ["2021", "960", "850", "780", "760", "820", "610", "420", "460", "350", "290"],
      ["2022", "1100", "920", "880", "930", "1180", "830", "620", "710", "540", "460"],
      ["2023", "1280", "1040", "970", "1160", "1560", "1080", "850", "980", "760", "690"],
      ["2024", "1450", "1180", "1120", "1380", "1980", "1320", "1090", "1270", "990", "910"],
    ],
  },
  raceSnsFollowers: {
    graphMode: "barRace",
    fileName: "sample-race-sns-followers.csv",
    title: "SNSフォロワー数ランキング推移",
    subtitle: "媒体・アカウント別の伸び方サンプル",
    unit: "人",
    note: "架空データ",
    source: "サンプルデータ",
    rows: [
      ["年", "Travel JP", "Food Lab", "Study Hub", "Game Now", "Beauty Box", "Finance Note", "Local News", "Music Clip", "Fit Life", "DIY Room"],
      ["2020", "12000", "18000", "9000", "15000", "22000", "6000", "8000", "5000", "7000", "4000"],
      ["2021", "22000", "26000", "18000", "31000", "30000", "12000", "14000", "16000", "13000", "10000"],
      ["2022", "41000", "38000", "33000", "62000", "43000", "26000", "22000", "36000", "28000", "24000"],
      ["2023", "76000", "56000", "62000", "112000", "68000", "52000", "33000", "71000", "54000", "50000"],
      ["2024", "124000", "82000", "102000", "185000", "96000", "93000", "47000", "126000", "88000", "91000"],
      ["2025", "190000", "118000", "161000", "276000", "132000", "151000", "63000", "210000", "139000", "148000"],
    ],
  },
  raceYoutubeViews: {
    graphMode: "barRace",
    fileName: "sample-race-youtube-views.csv",
    title: "YouTube再生数ランキング推移",
    subtitle: "チャンネル別累計再生数サンプル",
    unit: "万回",
    note: "架空データ",
    source: "サンプルデータ",
    rows: [
      ["年", "News Talk", "Study Tube", "Short Lab", "Game Cast", "Cooking Pro", "Travel Log", "Money School", "Music Studio", "Kids Fun", "Tech Review"],
      ["2020", "120", "80", "30", "160", "90", "70", "40", "60", "110", "50"],
      ["2021", "260", "180", "210", "340", "170", "150", "110", "180", "220", "130"],
      ["2022", "430", "360", "780", "620", "310", "290", "260", "420", "360", "300"],
      ["2023", "690", "620", "1680", "960", "530", "520", "540", "880", "570", "610"],
      ["2024", "980", "1040", "3100", "1450", "860", "920", "1060", "1540", "840", "1150"],
      ["2025", "1320", "1680", "5200", "2100", "1280", "1480", "1840", "2580", "1220", "1900"],
    ],
  },
  raceProductSales: {
    graphMode: "barRace",
    fileName: "sample-race-product-sales.csv",
    title: "商品別売上ランキング推移",
    subtitle: "カテゴリ別売上の入れ替わりサンプル",
    unit: "万円",
    note: "架空データ",
    source: "サンプルデータ",
    rows: [
      ["年", "Aセット", "Bドリンク", "C家電", "Dコスメ", "E教材", "F雑貨", "G食品", "Hアプリ"],
      ["2020", "520", "760", "430", "610", "240", "390", "700", "120"],
      ["2021", "610", "820", "590", "760", "360", "430", "780", "260"],
      ["2022", "720", "880", "810", "930", "540", "520", "820", "520"],
      ["2023", "860", "940", "1180", "1200", "820", "690", "910", "980"],
      ["2024", "1030", "990", "1540", "1580", "1160", "880", "970", "1640"],
      ["2025", "1220", "1050", "1960", "2030", "1580", "1120", "1040", "2520"],
    ],
  },
  raceStoreSales: {
    graphMode: "barRace",
    fileName: "sample-race-store-sales.csv",
    title: "店舗別売上ランキング推移",
    subtitle: "店舗別売上の成長サンプル",
    unit: "万円",
    note: "架空データ",
    source: "サンプルデータ",
    rows: [
      ["年", "東京店", "大阪店", "名古屋店", "福岡店", "札幌店", "仙台店", "広島店", "横浜店", "京都店", "神戸店"],
      ["2019", "420", "380", "260", "210", "180", "150", "130", "300", "220", "240"],
      ["2020", "390", "350", "280", "240", "200", "170", "150", "310", "210", "230"],
      ["2021", "470", "410", "330", "300", "230", "220", "190", "360", "260", "280"],
      ["2022", "560", "480", "410", "380", "270", "300", "260", "430", "330", "340"],
      ["2023", "690", "570", "520", "480", "340", "410", "360", "540", "430", "440"],
      ["2024", "820", "690", "660", "610", "430", "560", "500", "680", "560", "570"],
    ],
  },
};

const state = {
  plan: localStorage.getItem(PLAN_STORAGE_KEY) === "pro" ? "pro" : "free",
  fileName: "",
  headers: [],
  rows: [],
  selected: new Set(),
  sort: { column: null, direction: "asc" },
  query: "",
  mode: "chart",
  chart: {
    graphMode: "line",
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
    includeNarrationInPng: false,
    barTopN: 10,
    barSortOrder: "desc",
    barScaleMode: "global",
    barShowZero: false,
    barAllowNegative: false,
    barValueLabels: true,
    barRankLabels: true,
    barDecimalPlaces: 1,
    barYearPosition: "topRight",
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
  freeModeButton: document.querySelector("#freeModeButton"),
  proModeButton: document.querySelector("#proModeButton"),
  planNotice: document.querySelector("#planNotice"),
  toast: document.querySelector("#toast"),
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
  graphModeSelect: document.querySelector("#graphModeSelect"),
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
  qualityLabel: document.querySelector("#qualityLabel"),
  includeNarrationInput: document.querySelector("#includeNarrationInput"),
  batchExportButton: document.querySelector("#batchExportButton"),
  comparePlansButton: document.querySelector("#comparePlansButton"),
  planCompare: document.querySelector("#planCompare"),
  themeLockHint: document.querySelector("#themeLockHint"),
  barTopNSelect: document.querySelector("#barTopNSelect"),
  barSortOrderSelect: document.querySelector("#barSortOrderSelect"),
  barScaleModeSelect: document.querySelector("#barScaleModeSelect"),
  barDecimalSelect: document.querySelector("#barDecimalSelect"),
  barYearPositionSelect: document.querySelector("#barYearPositionSelect"),
  barShowZeroInput: document.querySelector("#barShowZeroInput"),
  barAllowNegativeInput: document.querySelector("#barAllowNegativeInput"),
  barValueLabelsInput: document.querySelector("#barValueLabelsInput"),
  barRankLabelsInput: document.querySelector("#barRankLabelsInput"),
  narrationText: document.querySelector("#narrationText"),
  narrationModeBadge: document.querySelector("#narrationModeBadge"),
  copyNarrationButton: document.querySelector("#copyNarrationButton"),
  videoDurationSelect: document.querySelector("#videoDurationSelect"),
  startHoldInput: document.querySelector("#startHoldInput"),
  endHoldInput: document.querySelector("#endHoldInput"),
  diagnosticsPanel: document.querySelector("#diagnosticsPanel"),
  speedRange: document.querySelector("#speedRange"),
  canvas: document.querySelector("#timeSeriesCanvas"),
  guideOverlay: document.querySelector("#guideOverlay"),
  guideHighlight: document.querySelector("#guideHighlight"),
  guideCard: document.querySelector("#guideCard"),
  guideStepLabel: document.querySelector("#guideStepLabel"),
  guideText: document.querySelector("#guideText"),
  guideNextButton: document.querySelector("#guideNextButton"),
  guideSkipButton: document.querySelector("#guideSkipButton"),
  guideCloseButton: document.querySelector("#guideCloseButton"),
  guideSampleButton: document.querySelector("#guideSampleButton"),
  guideImportButton: document.querySelector("#guideImportButton"),
  guideFileInput: document.querySelector("#guideFileInput"),
  restartGuideButton: document.querySelector("#restartGuideButton"),
  showCsvExampleButton: document.querySelector("#showCsvExampleButton"),
  csvExamplePanel: document.querySelector("#csvExamplePanel"),
  useSampleHelpButton: document.querySelector("#useSampleHelpButton"),
};

const guideState = {
  active: false,
  index: 0,
  steps: [],
  completion: false,
  completed: localStorage.getItem(GUIDE_STORAGE_KEY) === "true",
};

const DESKTOP_GUIDE_STEPS = [
  {
    selector: "#newFileButton",
    text: "まずは『サンプルを開く』を押して、グラフを表示してみましょう。",
  },
  {
    selector: "#sampleSelect",
    text: "別のデータを試すときは、『サンプルCSV』から用途に近いものを選びます。",
  },
  {
    selector: ".settings-panel .panel-section",
    text: "時系列列や表示する系列は、『基本設定』で選びます。",
  },
  {
    selector: ".preview-stage",
    text: "設定を変えたら、中央の『プレビュー』で見え方を確認します。",
  },
  {
    selector: "#playChartButton",
    text: "動きを確認したいときは、『アニメーション再生』を押します。CSVを開くと使えます。",
  },
  {
    selector: "#savePngTopButton",
    text: "静止画として資料に使う場合は、『PNG保存』を押します。CSVを開くと使えます。",
  },
  {
    selector: "#recordChartButton",
    text: "伸びるグラフ動画にしたい場合は、『動画保存』を押します。CSVを開くと使えます。",
  },
];

const MOBILE_GUIDE_STEPS = [
  {
    selector: "#newFileButton",
    text: "まずは『サンプルを開く』を押して、グラフを表示してみましょう。",
  },
  {
    selector: ".preview-stage",
    text: "中央の『プレビュー』で、グラフの見え方を確認します。",
  },
  {
    selector: "#recordChartButton",
    text: "使いたい形にできたら、『PNG保存』または『動画保存』で書き出します。",
  },
];

els.fileInput.addEventListener("change", handleFileLoad);
els.guideFileInput?.addEventListener("change", handleFileLoad);
els.freeModeButton.addEventListener("click", (event) => {
  event.preventDefault();
  setPlanMode("free");
});
els.proModeButton.addEventListener("click", (event) => {
  event.preventDefault();
  setPlanMode("pro");
});
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
els.graphModeSelect.addEventListener("change", () => {
  state.chart.graphMode = els.graphModeSelect.value;
  if (state.chart.graphMode === "barRace") {
    enforceBarRaceTopLimit();
  }
  render();
});
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
  if (isProTheme(els.themeSelect.value) && state.plan !== "pro") {
    showNotice("このテンプレートは課金版機能です。課金版プレビューに切り替えると使用できます。");
    els.themeSelect.value = state.chart.theme;
    return;
  }
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
els.includeNarrationInput.addEventListener("change", () => {
  if (state.plan !== "pro") {
    els.includeNarrationInput.checked = false;
    state.chart.includeNarrationInPng = false;
    showNotice("この機能は課金版で利用できます。課金版プレビューに切り替えると試せます。");
    return;
  }
  state.chart.includeNarrationInPng = els.includeNarrationInput.checked;
  renderChart();
});
els.barTopNSelect.addEventListener("change", () => {
  state.chart.barTopN = Number(els.barTopNSelect.value);
  enforceBarRaceTopLimit();
  renderChart();
});
els.barSortOrderSelect.addEventListener("change", () => {
  state.chart.barSortOrder = els.barSortOrderSelect.value;
  renderChart();
});
els.barScaleModeSelect.addEventListener("change", () => {
  state.chart.barScaleMode = els.barScaleModeSelect.value;
  renderChart();
});
els.barDecimalSelect.addEventListener("change", () => {
  state.chart.barDecimalPlaces = Number(els.barDecimalSelect.value);
  renderChart();
});
els.barYearPositionSelect.addEventListener("change", () => {
  state.chart.barYearPosition = els.barYearPositionSelect.value;
  renderChart();
});
els.barShowZeroInput.addEventListener("change", () => {
  state.chart.barShowZero = els.barShowZeroInput.checked;
  renderChart();
});
els.barAllowNegativeInput.addEventListener("change", () => {
  state.chart.barAllowNegative = els.barAllowNegativeInput.checked;
  renderChart();
});
els.barValueLabelsInput.addEventListener("change", () => {
  state.chart.barValueLabels = els.barValueLabelsInput.checked;
  renderChart();
});
els.barRankLabelsInput.addEventListener("change", () => {
  state.chart.barRankLabels = els.barRankLabelsInput.checked;
  renderChart();
});
els.batchExportButton.addEventListener("click", batchExportMaterials);
els.comparePlansButton.addEventListener("click", () => {
  els.planCompare.hidden = !els.planCompare.hidden;
});
els.copyNarrationButton.addEventListener("click", copyNarration);
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
els.guideNextButton?.addEventListener("click", showNextGuideStep);
els.guideSkipButton?.addEventListener("click", () => finishGuideTour(true));
els.guideCloseButton?.addEventListener("click", () => finishGuideTour(true));
els.restartGuideButton?.addEventListener("click", () => startGuideTour({ force: true }));
els.guideSampleButton?.addEventListener("click", () => {
  finishGuideTour(true);
  openGuideSample();
});
els.showCsvExampleButton?.addEventListener("click", () => {
  els.csvExamplePanel.hidden = !els.csvExamplePanel.hidden;
});
els.useSampleHelpButton?.addEventListener("click", openGuideSample);
document.addEventListener("keydown", (event) => {
  if (!guideState.active) return;
  if (event.key === "Escape") finishGuideTour(true);
  if (event.key === "Enter") showNextGuideStep();
});
document.addEventListener("click", handleGuideTargetClick, true);
window.addEventListener("resize", updateGuidePosition);
document.addEventListener("scroll", updateGuidePosition, true);

render();
window.setTimeout(startInitialGuideTour, 450);

function startInitialGuideTour() {
  if (localStorage.getItem(GUIDE_STORAGE_KEY) === "true") return;
  startGuideTour();
}

function startGuideTour(options = {}) {
  if (!els.guideOverlay || !els.guideHighlight || !els.guideCard) return;
  if (options.force) {
    localStorage.removeItem(GUIDE_STORAGE_KEY);
    guideState.completed = false;
    if (state.mode !== "chart") setMode("chart");
  }
  trackGuideEvent("tour_started");
  guideState.active = true;
  guideState.index = 0;
  guideState.completion = false;
  guideState.steps = window.matchMedia("(max-width: 720px)").matches
    ? MOBILE_GUIDE_STEPS
    : DESKTOP_GUIDE_STEPS;
  document.body.classList.add("guide-active");
  showGuideStep();
}

function showNextGuideStep() {
  guideState.index += 1;
  showGuideStep();
}

function showGuideStep() {
  if (!guideState.active) return;
  guideState.completion = false;
  setGuideCompletionActions(false);

  const step = guideState.steps[guideState.index];
  const target = step ? document.querySelector(step.selector) : null;
  if (target) revealGuideTarget(target);

  if (!step) {
    showGuideCompletion();
    return;
  }
  if (!target || !isGuideTargetVisible(target)) {
    showGuideFallback();
    return;
  }

  els.guideOverlay.hidden = false;
  els.guideHighlight.hidden = false;
  els.guideCard.hidden = false;
  els.guideStepLabel.textContent = `${guideState.index + 1} / ${guideState.steps.length}`;
  els.guideText.textContent = step.text;
  els.guideNextButton.textContent = guideState.index === guideState.steps.length - 1 ? "完了" : "次へ";
  target.scrollIntoView({ block: "center", inline: "nearest", behavior: "smooth" });
  window.setTimeout(() => updateGuidePosition(target), 220);
  window.requestAnimationFrame(() => updateGuidePosition(target));
}

function showGuideCompletion() {
  guideState.completion = true;
  els.guideOverlay.hidden = false;
  els.guideHighlight.hidden = true;
  els.guideCard.hidden = false;
  els.guideStepLabel.textContent = "準備完了";
  els.guideText.textContent = "まずはサンプルで完成まで試すか、自分のCSVを読み込んで始めましょう。";
  els.guideNextButton.textContent = "閉じる";
  setGuideCompletionActions(true);
  const cardWidth = Math.min(360, window.innerWidth - 24);
  Object.assign(els.guideCard.style, {
    left: `${Math.max(12, (window.innerWidth - cardWidth) / 2)}px`,
    top: `${Math.max(12, Math.min(window.innerHeight - 220, window.innerHeight * 0.32))}px`,
  });
}

function updateGuidePosition(currentTarget = null) {
  if (!guideState.active || !els.guideCard || els.guideCard.hidden) return;
  if (guideState.completion) return;
  const step = guideState.steps[guideState.index];
  if (!step) {
    showGuideCompletion();
    return;
  }
  const target = currentTarget || document.querySelector(step.selector);
  if (!target || !isGuideTargetVisible(target)) {
    if (target) revealGuideTarget(target);
    showGuideFallback();
    return;
  }

  const rect = target.getBoundingClientRect();
  const padding = 8;
  const highlightLeft = Math.max(8, rect.left - padding);
  const highlightTop = Math.max(8, rect.top - padding);
  const highlightWidth = Math.min(window.innerWidth - highlightLeft - 8, rect.width + padding * 2);
  const highlightHeight = Math.min(window.innerHeight - highlightTop - 8, rect.height + padding * 2);

  Object.assign(els.guideHighlight.style, {
    left: `${highlightLeft}px`,
    top: `${highlightTop}px`,
    width: `${highlightWidth}px`,
    height: `${highlightHeight}px`,
  });

  const cardRect = els.guideCard.getBoundingClientRect();
  const gap = 14;
  const cardWidth = Math.min(cardRect.width || 320, window.innerWidth - 24);
  let left = rect.left;
  let top = rect.bottom + gap;

  if (top + cardRect.height > window.innerHeight - 12) {
    top = rect.top - cardRect.height - gap;
  }
  if (top < 12) {
    top = Math.min(window.innerHeight - cardRect.height - 12, rect.bottom + gap);
  }
  if (left + cardWidth > window.innerWidth - 12) {
    left = window.innerWidth - cardWidth - 12;
  }

  Object.assign(els.guideCard.style, {
    left: `${Math.max(12, left)}px`,
    top: `${Math.max(12, top)}px`,
  });
}

function showGuideFallback() {
  guideState.completion = false;
  els.guideOverlay.hidden = false;
  els.guideHighlight.hidden = true;
  els.guideCard.hidden = false;
  els.guideStepLabel.textContent = `${Math.min(guideState.index + 1, guideState.steps.length)} / ${guideState.steps.length}`;
  els.guideText.textContent = guideState.steps[guideState.index]?.text || "画面の案内に沿って、サンプルCSVから試してみましょう。";
  setGuideCompletionActions(false);
  Object.assign(els.guideCard.style, {
    left: "12px",
    top: `${Math.max(12, window.innerHeight - 190)}px`,
  });
}

function finishGuideTour(remember) {
  const wasComplete = guideState.completion || guideState.index >= guideState.steps.length;
  guideState.active = false;
  guideState.completion = false;
  document.body.classList.remove("guide-active");
  if (els.guideOverlay) els.guideOverlay.hidden = true;
  if (els.guideHighlight) els.guideHighlight.hidden = true;
  if (els.guideCard) els.guideCard.hidden = true;
  setGuideCompletionActions(false);
  if (remember) {
    localStorage.setItem(GUIDE_STORAGE_KEY, "true");
    guideState.completed = true;
    trackGuideEvent(wasComplete ? "tour_completed" : "tour_skipped");
  }
}

function setGuideCompletionActions(show) {
  if (els.guideSampleButton) els.guideSampleButton.hidden = !show;
  if (els.guideImportButton) els.guideImportButton.hidden = !show;
  if (els.guideSkipButton) els.guideSkipButton.hidden = show;
}

function isGuideTargetVisible(target) {
  const rect = target.getBoundingClientRect();
  const style = window.getComputedStyle(target);
  return rect.width > 0 && rect.height > 0 && style.visibility !== "hidden" && style.display !== "none";
}

function revealGuideTarget(target) {
  target.closest("details:not([open])")?.setAttribute("open", "");
}

function handleGuideTargetClick(event) {
  if (!guideState.active || guideState.completion) return;
  const step = guideState.steps[guideState.index];
  const target = step ? document.querySelector(step.selector) : null;
  if (!target || !target.contains(event.target)) return;
  window.setTimeout(showNextGuideStep, 260);
}

function openGuideSample() {
  els.sampleSelect.value = GUIDE_SAMPLE_KEY;
  trackGuideEvent("sample_opened_after_tour");
  createNewFile();
  setMode("chart");
}

function trackGuideEvent(name, detail = {}) {
  const event = {
    name,
    detail,
    at: new Date().toISOString(),
  };
  window.timeSeriesGuideEvents = window.timeSeriesGuideEvents || [];
  window.timeSeriesGuideEvents.push(event);
  if (window.console?.debug) console.debug("[guide]", name, detail);
}

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
  state.chart.graphMode = sample.graphMode || "line";
  if (state.chart.graphMode === "barRace") {
    state.chart.barTopN = Math.min(10, getBarRaceTopLimit());
  }
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
  els.graphModeSelect.value = state.chart.graphMode;
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
  els.includeNarrationInput.checked = state.chart.includeNarrationInPng;
  els.barTopNSelect.value = String(state.chart.barTopN);
  els.barSortOrderSelect.value = state.chart.barSortOrder;
  els.barScaleModeSelect.value = state.chart.barScaleMode;
  els.barDecimalSelect.value = String(state.chart.barDecimalPlaces);
  els.barYearPositionSelect.value = state.chart.barYearPosition;
  els.barShowZeroInput.checked = state.chart.barShowZero;
  els.barAllowNegativeInput.checked = state.chart.barAllowNegative;
  els.barValueLabelsInput.checked = state.chart.barValueLabels;
  els.barRankLabelsInput.checked = state.chart.barRankLabels;
  els.startHoldInput.value = String(state.chart.startHold);
  els.endHoldInput.value = String(state.chart.endHold);
}

function render() {
  applyCssTheme(THEMES[state.chart.theme] || THEMES.presentation);
  renderPlanUi();
  renderThemeOptions();
  updateButtons();
  els.editModeButton.classList.toggle("active", state.mode === "edit");
  els.chartModeButton.classList.toggle("active", state.mode === "chart");
  els.chartHost.hidden = state.mode !== "chart";
  els.chartHost.dataset.graphMode = state.chart.graphMode;
  els.tableHost.hidden = state.mode !== "edit";
  els.editToolbar.hidden = state.mode !== "edit";
  els.fileStatus.textContent = state.headers.length
    ? `${state.fileName} / ${state.rows.length}行 ${state.headers.length}列`
    : "CSVを読み込むか、サンプルを開いて始めてください。";

  renderChartControls();
  renderChart();
  renderTable();
  renderDiagnostics();
  renderNarration();
}

function setPlanMode(plan) {
  state.plan = plan === "pro" ? "pro" : "free";
  localStorage.setItem(PLAN_STORAGE_KEY, state.plan);
  if (state.plan !== "pro" && isProTheme(state.chart.theme)) {
    applyTheme("presentation");
    showNotice("無料版では基本テーマに戻ります。Proテンプレートは課金版プレビューで利用できます。");
  } else {
    showNotice(
      state.plan === "pro"
        ? "課金版プレビュー中：透かしなし・1080p・追加テンプレート・解説文生成・商用利用OK表示が利用できます。"
        : "無料版に切り替えました。720p・透かしありで保存されます。"
    );
  }
  if (state.chart.graphMode === "barRace") enforceBarRaceTopLimit();
  render();
}

function renderPlanUi() {
  const isPro = state.plan === "pro";
  document.body.classList.toggle("pro-mode", isPro);
  els.freeModeButton.classList.toggle("active", !isPro);
  els.proModeButton.classList.toggle("active", isPro);
  els.freeModeButton.setAttribute("aria-pressed", String(!isPro));
  els.proModeButton.setAttribute("aria-pressed", String(isPro));
  els.planNotice.textContent = isPro
    ? "課金版プレビュー中：透かしなし・1080p・追加テンプレート・解説文生成・商用利用OK表示が利用できます。現在は課金テスト中です。"
    : "無料版：720p / 透かしあり。課金テスト中のため決済は発生しません。";
  els.qualityLabel.textContent = getQualityLabel();
  els.includeNarrationInput.disabled = !isPro;
  if (!isPro) {
    els.includeNarrationInput.checked = false;
    state.chart.includeNarrationInPng = false;
  } else {
    els.includeNarrationInput.checked = state.chart.includeNarrationInPng;
  }
}

function renderThemeOptions() {
  [...els.themeSelect.options].forEach((option) => {
    option.textContent = getThemeOptionLabel(option.value);
  });
  els.themeSelect.value = state.chart.theme;
}

function getThemeOptionLabel(themeName) {
  const labels = {
    presentation: "白背景プレゼン",
    dark: "ダークSNS",
    newspaper: "経済レポート",
    youtube: "YouTube解説風",
    article: "新聞記事風",
    finance: "金融レポート風",
    classroom: "授業スライド風",
    ir: "企業IR風",
    verticalSns: "SNS縦動画風",
    luxury: "ミニマル高級感",
  };
  const label = labels[themeName] || themeName;
  return isProTheme(themeName) && state.plan !== "pro" ? `${label} 🔒 Pro` : label;
}

function isProTheme(themeName) {
  return PRO_THEME_KEYS.includes(themeName);
}

function isProPlan() {
  return state.plan === "pro";
}

function getQualityLabel() {
  return isProPlan() ? "課金版：1080p / 透かしなし" : "無料版：720p / 透かしあり";
}

function getBarRaceTopLimit() {
  return isProPlan() ? FEATURE_FLAGS.barChartRaceMaxItemsPro : FEATURE_FLAGS.barChartRaceMaxItemsFree;
}

function enforceBarRaceTopLimit() {
  const limit = getBarRaceTopLimit();
  if (state.chart.barTopN > limit) {
    state.chart.barTopN = limit;
    els.barTopNSelect.value = String(limit);
    showNotice("無料版ではTop 10まで表示できます。課金版プレビューではTop 20まで利用できます。");
  }
}

let noticeTimer = null;
function showNotice(message) {
  els.toast.textContent = message;
  els.toast.hidden = false;
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => {
    els.toast.hidden = true;
  }, 4200);
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

function renderNarration() {
  if (!els.narrationText) return;
  const isPro = isProPlan();
  els.narrationModeBadge.textContent = isPro ? "詳細版 Pro" : "簡易版";
  els.narrationText.textContent = generateNarration(isPro ? "pro" : "free");
}

function generateNarration(mode = state.plan) {
  const data = getChartData();
  if (state.chart.graphMode === "barRace") return generateBarRaceNarration(data, mode);
  if (data.points.length < 2 || data.series.length === 0) {
    return "CSVを読み込むと、グラフの要点を自動で表示します。";
  }
  const metrics = getSeriesMetrics(data.points, data.series).filter(Boolean);
  if (metrics.length === 0) {
    return "選択された期間では、解説文を作成できる有効な数値が不足しています。";
  }
  const startYear = formatTimeLabel(data.points[0].label, data.points[0].time);
  const endPoint = data.points[data.points.length - 1];
  const endYear = formatTimeLabel(endPoint.label, endPoint.time);
  if (mode !== "pro") {
    const direction = metrics.some((item) => item.multiple >= 1) ? "上昇" : "変化";
    return `${startYear}から${endYear}にかけて、選択された系列は長期的に${direction}しています。詳しい要因分析や系列間比較は課金版プレビューで確認できます。`;
  }

  const best = [...metrics].sort((a, b) => b.multiple - a.multiple)[0];
  const slowest = [...metrics].sort((a, b) => a.multiple - b.multiple)[0];
  const lead = metrics[0];
  const parts = [
    `${startYear}から${endYear}にかけて、${lead.name}は${formatValue(lead.firstValue)}から${formatValue(lead.lastValue)}へ変化しました。初年度比では約${formatNumber(lead.multiple)}倍、年平均成長率は約${formatNumber(lead.cagr)}%です。`,
  ];
  if (metrics.length > 1) {
    parts.push(`複数系列の中では${best.name}の伸びが最も大きく、約${formatNumber(best.multiple)}倍でした。一方、伸びが最も小さいのは${slowest.name}で、約${formatNumber(slowest.multiple)}倍です。`);
  }
  if (lead.maxRise) parts.push(`${lead.name}の最大上昇は${formatTimeLabel(String(lead.maxRise.year), lead.maxRise.year)}で、前年差は${formatValue(lead.maxRise.diff)}でした。`);
  if (lead.maxFall) parts.push(`最大下落は${formatTimeLabel(String(lead.maxFall.year), lead.maxFall.year)}で、前年差は${formatValue(lead.maxFall.diff)}でした。`);
  return parts.join("");
}

function generateBarRaceNarration(data, mode = state.plan) {
  if (data.points.length < 2 || data.series.length < 2) {
    return "バーチャートレースには複数の数値系列が必要です。";
  }
  const firstRanks = getBarRaceRanksForPoint(data.points[0], data.series);
  const lastPoint = data.points[data.points.length - 1];
  const lastRanks = getBarRaceRanksForPoint(lastPoint, data.series);
  if (firstRanks.length === 0 || lastRanks.length === 0) return "表示できるランキングデータがありません。";
  if (mode !== "pro") {
    return "期間中、各系列の順位が変化し、上位の構成が変わっています。詳細な順位変動や成長率の分析は課金版プレビューで確認できます。";
  }
  const firstTop = firstRanks[0];
  const lastTop = lastRanks[0];
  const lastTop3 = lastRanks.slice(0, 3).map((item) => item.name).join("、");
  const firstMap = new Map(firstRanks.map((item, index) => [item.column, index + 1]));
  const lastMap = new Map(lastRanks.map((item, index) => [item.column, index + 1]));
  const movements = data.series.map((item) => ({
    name: item.name,
    move: (firstMap.get(item.column) || data.series.length + 1) - (lastMap.get(item.column) || data.series.length + 1),
  }));
  const up = movements.reduce((a, b) => (b.move > a.move ? b : a), movements[0]);
  const down = movements.reduce((a, b) => (b.move < a.move ? b : a), movements[0]);
  const growth = data.series.map((item) => {
    const first = data.points[0].values[item.column];
    const last = lastPoint.values[item.column];
    return { name: item.name, rate: first > 0 && Number.isFinite(last) ? last / first : 0 };
  }).sort((a, b) => b.rate - a.rate)[0];
  const gap = lastRanks[1] ? lastTop.value - lastRanks[1].value : 0;
  return `${formatTimeLabel(data.points[0].label, data.points[0].time)}時点では${firstTop.name}が1位でした。最終時点では${lastTop.name}が1位で、上位3系列は${lastTop3}です。期間中に最も順位を上げたのは${up.name}、最も順位を下げたのは${down.name}です。最大成長率は${growth.name}で、最終時点の首位と2位の差は${formatBarRaceValue(gap)}です。`;
}

function getBarRaceRanksForPoint(point, series) {
  const orderFactor = state.chart.barSortOrder === "asc" ? 1 : -1;
  return series
    .map((item) => ({
      column: item.column,
      name: item.name,
      value: normalizeBarRaceValue(point.values[item.column]),
    }))
    .filter((row) => shouldShowBarRaceValue(row.value))
    .sort((a, b) => (a.value - b.value) * orderFactor);
}

function getSeriesMetrics(points, series) {
  return series.map((item) => {
    const valid = points
      .map((point) => ({ time: point.time, label: point.label, value: point.values[item.column] }))
      .filter((point) => Number.isFinite(point.value));
    if (valid.length < 2) return null;
    const first = valid[0];
    const last = valid[valid.length - 1];
    const years = Math.max(1, last.time - first.time);
    const multiple = first.value !== 0 ? last.value / first.value : 0;
    const cagr = first.value > 0 && last.value > 0 ? (multiple ** (1 / years) - 1) * 100 : 0;
    const max = valid.reduce((a, b) => (b.value > a.value ? b : a), valid[0]);
    const min = valid.reduce((a, b) => (b.value < a.value ? b : a), valid[0]);
    let maxRise = null;
    let maxFall = null;
    for (let index = 1; index < valid.length; index += 1) {
      const diff = valid[index].value - valid[index - 1].value;
      if (!maxRise || diff > maxRise.diff) maxRise = { year: valid[index].time, diff };
      if (!maxFall || diff < maxFall.diff) maxFall = { year: valid[index].time, diff };
    }
    return {
      name: item.name,
      firstValue: first.value,
      lastValue: last.value,
      multiple,
      cagr,
      max,
      min,
      maxRise,
      maxFall,
    };
  });
}

async function copyNarration() {
  const text = els.narrationText.textContent || "";
  try {
    await navigator.clipboard.writeText(text);
    showNotice("解説文をコピーしました。");
  } catch {
    showNotice("コピーできませんでした。ブラウザの権限を確認してください。");
  }
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
  const data = getChartData();
  const minSeries = state.chart.graphMode === "barRace" ? 2 : 1;
  const hasChart = hasData && data.points.length >= 2 && data.series.length >= minSeries;
  const busy = state.chart.isRecording;
  const pngLabel = isProPlan() ? "PNG保存（1080p・透かしなし）" : "PNG保存（720p・透かしあり）";
  const webmLabel = isProPlan()
    ? "動画保存（WebM・1080p・透かしなし）"
    : "動画保存（WebM・720p・透かしあり）";
  els.exportButton.disabled = !hasData || busy;
  els.addRowButton.disabled = !hasData || busy;
  els.addColumnButton.disabled = !hasData || busy;
  els.chartModeButton.disabled = busy;
  els.deleteSelectedButton.disabled = !hasData || busy || state.selected.size === 0;
  els.playChartButton.disabled = !hasChart || busy;
  els.recordChartButton.disabled = !hasChart || busy || !canRecordCanvas();
  if (els.savePngButton) els.savePngButton.disabled = !hasChart || busy;
  els.savePngTopButton.disabled = !hasChart || busy;
  els.savePngTopButton.textContent = "PNG保存";
  els.savePngTopButton.title = pngLabel;
  els.savePngTopButton.setAttribute("aria-label", pngLabel);
  els.recordChartButton.textContent = busy
    ? "録画中"
    : "動画保存";
  els.recordChartButton.title = webmLabel;
  els.recordChartButton.setAttribute("aria-label", webmLabel);
  els.batchExportButton.disabled = busy;
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
  const defaultCount = state.chart.graphMode === "barRace"
    ? Math.min(getBarRaceTopLimit(), numericColumns.length)
    : Math.max(1, Math.min(3, numericColumns.length));
  state.chart.valueColumns = numericColumns.slice(0, defaultCount);
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
  const minSeries = state.chart.graphMode === "barRace" ? 2 : 1;
  const hasChart = data.points.length >= 2 && data.series.length >= minSeries;
  els.chartEmpty.hidden = hasChart;
  els.chartPanel.hidden = !hasChart;
  els.chartTitle.textContent = state.chart.title;
  els.logWarning.hidden = !(state.chart.logScale && hasNonPositiveValues(data.points, data.series));
  els.indexWarning.hidden = !(state.chart.indexBase && hasInvalidIndexBase());
  updateButtons();

  if (!hasChart) {
    stopChart();
    clearCanvasHover();
    if (state.chart.graphMode === "barRace" && state.headers.length > 0 && data.series.length < 2) {
      showNotice("バーチャートレースには複数の数値系列が必要です。");
    }
    return;
  }

  state.chart.progress = Math.min(1, Math.max(state.chart.progress, 1));
  drawChart(data, state.chart.progress);
  renderNarration();
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

function runChartAnimation({ onComplete, exportSize } = {}) {
  const data = getChartData();
  const minSeries = state.chart.graphMode === "barRace" ? 2 : 1;
  if (data.points.length < 2 || data.series.length < minSeries) {
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
  drawChart(data, 0, { exportSize });

  return new Promise((resolve) => {
    const step = (now) => {
      const elapsed = now - state.chart.startedAt;
      state.chart.progress = clamp((elapsed - startHold) / speedAdjusted, 0, 1);
      drawChart(data, state.chart.progress, { exportSize });
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

async function recordChartAnimation(options = {}) {
  if (state.chart.isRecording) return;
  if (!canRecordCanvas()) {
    alert("このブラウザはCanvas録画に対応していません。ChromeまたはEdgeでお試しください。");
    return;
  }

  const originalRatio = state.chart.aspectRatio;
  if (options.aspectRatio) {
    state.chart.aspectRatio = options.aspectRatio;
    els.aspectRatioSelect.value = options.aspectRatio;
  }
  const data = getChartData();
  const minSeries = state.chart.graphMode === "barRace" ? 2 : 1;
  if (data.points.length < 2 || data.series.length < minSeries) {
    if (options.aspectRatio) {
      state.chart.aspectRatio = originalRatio;
      els.aspectRatioSelect.value = originalRatio;
    }
    return;
  }
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
    const exportSize = getOutputCanvasSize();
    drawChart(data, 0, { exportSize });
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
      exportSize,
      onComplete: () => {
        setTimeout(() => recorder.stop(), 180);
      },
    });
    await stopped;

    const blob = new Blob(chunks, { type: "video/webm" });
    downloadBlob(blob, getVideoFileName());
    trackExportAfterTour("webm");
    showFreeExportNoticeOnce();
  } catch (error) {
    alert(`動画保存に失敗しました。${error?.message || "ブラウザの保存機能を確認してください。"}`);
  } finally {
    stream?.getTracks().forEach((track) => track.stop());
    state.chart.isRecording = false;
    if (options.aspectRatio) {
      state.chart.aspectRatio = originalRatio;
      els.aspectRatioSelect.value = originalRatio;
    }
    updateButtons();
    renderChart();
  }
}

function stopChart() {
  if (state.chart.animationId !== null) {
    cancelAnimationFrame(state.chart.animationId);
    state.chart.animationId = null;
  }
}

function showFreeExportNoticeOnce() {
  if (isProPlan()) return;
  if (sessionStorage.getItem("timeseries-free-export-notice") === "true") return;
  sessionStorage.setItem("timeseries-free-export-notice", "true");
  showNotice("保存できました。無料版では720p・透かしありで出力されます。仕上がりを比較したい場合は、課金版プレビューで1080p・透かしなし出力を試せます。");
}

function trackExportAfterTour(format) {
  if (!guideState.completed && localStorage.getItem(GUIDE_STORAGE_KEY) !== "true") return;
  trackGuideEvent("export_clicked_after_tour", { format });
}

function savePng() {
  const data = getChartData();
  const minSeries = state.chart.graphMode === "barRace" ? 2 : 1;
  if (data.points.length < 2 || data.series.length < minSeries) return;
  clearCanvasHover();
  drawChart(data, 1, { exportSize: getOutputCanvasSize() });
  try {
    els.canvas.toBlob((blob) => {
      if (!blob) {
        alert("PNG保存に失敗しました。画像データを作成できませんでした。");
        return;
      }
      downloadBlob(blob, getPngFileName());
      trackExportAfterTour("png");
      showFreeExportNoticeOnce();
      renderChart();
    }, "image/png");
  } catch (error) {
    alert(`PNG保存に失敗しました。${error?.message || "ブラウザの保存機能を確認してください。"}`);
    renderChart();
  }
}

async function batchExportMaterials() {
  if (!isProPlan()) {
    showNotice("資料セット出力は課金版機能です。課金版プレビューに切り替えると試せます。");
    return;
  }
  const data = getChartData();
  const minSeries = state.chart.graphMode === "barRace" ? 2 : 1;
  if (data.points.length < 2 || data.series.length < minSeries) return;
  const originalRatio = state.chart.aspectRatio;
  const ratios = ["16:9", "1:1", "9:16"];
  try {
    ratios.forEach((ratio) => {
      state.chart.aspectRatio = ratio;
      drawChart(data, 1, { exportSize: getOutputCanvasSize() });
      els.canvas.toBlob((blob) => {
        if (blob) downloadBlob(blob, `${slugify(state.chart.title || "timeseries-chart")}-${ratio.replace(":", "x")}-${getDateStamp()}.png`);
      }, "image/png");
    });
    const textBlob = new Blob([generateNarration("pro")], { type: "text/plain;charset=utf-8" });
    downloadBlob(textBlob, `${slugify(state.chart.title || "timeseries-chart")}-commentary-${getDateStamp()}.txt`);
    await recordChartAnimation({ aspectRatio: "16:9" });
    await recordChartAnimation({ aspectRatio: "9:16" });
    showNotice("資料セットを書き出しました。PNG、WebM、解説文テキストを個別ダウンロードします。");
  } catch (error) {
    showNotice(`資料セット出力に失敗しました。${error?.message || "ブラウザの保存機能を確認してください。"}`);
  } finally {
    state.chart.aspectRatio = originalRatio;
    els.aspectRatioSelect.value = originalRatio;
    renderChart();
  }
}

function drawChart(data, progress, options = {}) {
  const { points, series } = data;
  if (points.length < 2 || series.length === 0) return;
  const safeProgress = clamp(progress, 0, 1);

  const canvas = els.canvas;
  const previewSize = getPreviewCanvasSize(canvas);
  const exportSize = options.exportSize || null;
  const cssWidth = exportSize?.width || previewSize.width;
  const cssHeight = exportSize?.height || previewSize.height;
  const ratio = exportSize ? 1 : window.devicePixelRatio || 1;
  canvas.style.width = `${previewSize.width}px`;
  canvas.style.height = `${previewSize.height}px`;
  canvas.width = Math.round(cssWidth * ratio);
  canvas.height = Math.round(cssHeight * ratio);

  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, cssWidth, cssHeight);

  const colors = getChartColors();
  ctx.fillStyle = colors.background;
  ctx.fillRect(0, 0, cssWidth, cssHeight);

  if (state.chart.graphMode === "barRace") {
    drawBarChartRace(ctx, { cssWidth, cssHeight, points, series, progress: safeProgress, colors, exportSize: options.exportSize });
    if (options.exportSize && isProPlan() && state.chart.includeNarrationInPng) {
      drawNarrationOnCanvas(ctx, { cssWidth, cssHeight, padding: { left: 56 }, colors });
    }
    if (!isProPlan()) drawWatermark(ctx, { cssWidth, cssHeight, colors });
    const latest = getVisiblePoint(points, safeProgress);
    els.chartCurrent.textContent = `${formatTimeLabel(latest.label, latest.time)} / Top ${Math.min(state.chart.barTopN, series.length)}`;
    return;
  }

  const header = getCanvasHeaderLayout(ctx, cssWidth, series, points);
  const padding = { top: header.plotTop, right: 42, bottom: 78, left: 86 };
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

  drawChartFrame(ctx, { cssWidth, cssHeight, padding, plotWidth, plotHeight, points, series, xFor, yFor, scale, colors, header });
  drawSeries(ctx, { points, series, xFor, yFor, progress: safeProgress, padding, plotWidth });
  drawHover(ctx, { points, series, xFor, yFor, padding, plotHeight, colors });
  if (options.exportSize && isProPlan() && state.chart.includeNarrationInPng) {
    drawNarrationOnCanvas(ctx, { cssWidth, cssHeight, padding, colors });
  }
  if (!isProPlan()) drawWatermark(ctx, { cssWidth, cssHeight, colors });

  const latest = getVisiblePoint(points, safeProgress);
  els.chartCurrent.textContent = `${formatTimeLabel(latest.label, latest.time)} / ${series.length}系列`;
  state.chart.layout = { padding, plotWidth, plotHeight, xFor, yFor, points, series, cssWidth, cssHeight };
}

function getPreviewCanvasSize(canvas) {
  const frameWidth = canvas.parentElement?.clientWidth || 900;
  const ratioValue = getAspectRatioValue();
  let width = Math.max(320, Math.min(1280, frameWidth));
  let height = Math.round(width / ratioValue);
  if (state.chart.aspectRatio === "9:16") {
    height = Math.min(820, Math.max(520, height));
    width = Math.round(height * ratioValue);
  }
  if (state.chart.aspectRatio === "1:1") {
    width = Math.min(width, 760);
    height = width;
  }
  return { width, height };
}

function getOutputCanvasSize() {
  if (isProPlan()) {
    if (state.chart.aspectRatio === "1:1") return { width: 1080, height: 1080 };
    if (state.chart.aspectRatio === "9:16") return { width: 1080, height: 1920 };
    return { width: 1920, height: 1080 };
  }
  if (state.chart.aspectRatio === "1:1") return { width: 720, height: 720 };
  if (state.chart.aspectRatio === "9:16") return { width: 720, height: 1280 };
  return { width: 1280, height: 720 };
}

function drawWatermark(ctx, area) {
  const text = "時系列データアニメーター";
  ctx.save();
  ctx.font = `700 ${Math.max(12, Math.round(area.cssWidth * 0.014))}px ${CANVAS_FONT}`;
  ctx.textAlign = "right";
  ctx.textBaseline = "bottom";
  ctx.fillStyle = withAlpha(area.colors.text, 0.36);
  ctx.fillText(text, area.cssWidth - 18, area.cssHeight - 14);
  ctx.restore();
}

function drawNarrationOnCanvas(ctx, area) {
  const text = generateNarration("pro");
  if (!text) return;
  const lines = wrapCanvasText(ctx, text, area.cssWidth - area.padding.left * 2, 2);
  ctx.save();
  ctx.font = `15px ${CANVAS_FONT}`;
  ctx.textAlign = "left";
  ctx.textBaseline = "bottom";
  ctx.fillStyle = withAlpha(area.colors.text, 0.8);
  lines.forEach((line, index) => {
    ctx.fillText(line, area.padding.left, area.cssHeight - 42 + index * 18);
  });
  ctx.restore();
}

function wrapCanvasText(ctx, text, maxWidth, maxLines) {
  const chars = [...text];
  const lines = [];
  let line = "";
  chars.forEach((char) => {
    const next = `${line}${char}`;
    if (line && ctx.measureText(next).width > maxWidth) {
      lines.push(line);
      line = char;
    } else {
      line = next;
    }
  });
  if (line) lines.push(line);
  return lines.slice(0, maxLines).map((value, index) => {
    if (index === maxLines - 1 && lines.length > maxLines) return `${value.slice(0, -1)}…`;
    return value;
  });
}

function drawBarChartRace(ctx, area) {
  const frame = prepareBarChartRaceFrame(area.points, area.series, area.progress);
  const { cssWidth, cssHeight, colors } = area;
  if (frame.items.length === 0) {
    showNotice("表示できるランキングデータがありません。");
    return;
  }

  const margin = {
    left: cssWidth < 760 ? 56 : 92,
    right: cssWidth < 760 ? 54 : 120,
    top: cssHeight < 720 ? 118 : 142,
    bottom: 70,
  };
  const titleWidth = cssWidth - margin.left - margin.right;
  ctx.fillStyle = colors.text;
  ctx.font = `700 ${cssWidth < 760 ? 22 : 30}px ${CANVAS_FONT}`;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText(truncateCanvasText(ctx, state.chart.title, titleWidth), margin.left, 28);
  ctx.font = `14px ${CANVAS_FONT}`;
  ctx.fillStyle = colors.muted;
  ctx.fillText(truncateCanvasText(ctx, state.chart.subtitle || (state.chart.unit ? `単位: ${state.chart.unit}` : ""), titleWidth), margin.left, 68);

  drawBarRaceYear(ctx, frame.label, { cssWidth, cssHeight, margin, colors });

  const maxRows = Math.min(state.chart.barTopN, frame.items.length);
  if (state.chart.barTopN > maxRows && frame.items.length > 0) {
    showNotice("表示件数が多すぎるため、自動で棒の高さを調整します。");
  }
  const availableHeight = cssHeight - margin.top - margin.bottom;
  const gap = Math.max(5, Math.min(12, availableHeight / Math.max(1, maxRows) * 0.14));
  const barHeight = Math.max(16, Math.min(42, (availableHeight - gap * (maxRows - 1)) / Math.max(1, maxRows)));
  const nameWidth = cssWidth < 760 ? 96 : 150;
  const rankWidth = state.chart.barRankLabels ? 34 : 0;
  const barLeft = margin.left + rankWidth + nameWidth;
  const maxBarWidth = Math.max(120, cssWidth - barLeft - margin.right);
  const scaleMax = Math.max(1, state.chart.barScaleMode === "frame" ? frame.currentMax : frame.globalMax);
  const radius = Math.min(10, barHeight / 2);
  const hitItems = [];

  frame.items.slice(0, maxRows).forEach((item, displayIndex) => {
    const y = margin.top + item.y * (barHeight + gap);
    const width = Math.max(2, Math.abs(item.value) / scaleMax * maxBarWidth);
    const alpha = item.alpha ?? 1;

    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.font = `700 ${Math.max(12, Math.min(16, barHeight * 0.42))}px ${CANVAS_FONT}`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "right";
    ctx.fillStyle = colors.muted;
    if (state.chart.barRankLabels) ctx.fillText(`${displayIndex + 1}`, margin.left + rankWidth - 10, y + barHeight / 2);

    ctx.textAlign = "left";
    ctx.fillStyle = colors.text;
    ctx.fillText(truncateCanvasText(ctx, item.name, nameWidth - 12), margin.left + rankWidth, y + barHeight / 2);

    ctx.fillStyle = item.color;
    roundRect(ctx, barLeft, y, width, barHeight, radius);
    ctx.fill();

    if (state.chart.barValueLabels) {
      ctx.font = `700 ${Math.max(12, Math.min(16, barHeight * 0.4))}px ${CANVAS_FONT}`;
      ctx.fillStyle = colors.text;
      ctx.textAlign = "left";
      ctx.fillText(formatBarRaceValue(item.value), Math.min(barLeft + width + 10, cssWidth - margin.right + 4), y + barHeight / 2);
    }
    ctx.restore();
    hitItems.push({ ...item, rank: displayIndex + 1, x: barLeft, y, width, height: barHeight });
  });

  ctx.font = `12px ${CANVAS_FONT}`;
  ctx.textAlign = "left";
  ctx.textBaseline = "bottom";
  ctx.fillStyle = colors.muted;
  const footer = [state.chart.note, state.chart.source ? `出典: ${state.chart.source}` : ""].filter(Boolean).join(" / ");
  if (footer) ctx.fillText(truncateCanvasText(ctx, footer, cssWidth - margin.left - margin.right), margin.left, cssHeight - 16);

  state.chart.layout = {
    graphMode: "barRace",
    cssWidth,
    cssHeight,
    points: area.points,
    series: area.series,
    barItems: hitItems,
    currentLabel: frame.label,
  };
}

function prepareBarChartRaceFrame(points, series, progress) {
  const visibleEnd = clamp(progress, 0, 1) * (points.length - 1);
  const fromIndex = Math.floor(visibleEnd);
  const toIndex = Math.min(points.length - 1, fromIndex + 1);
  const partial = visibleEnd - fromIndex;
  const from = points[fromIndex] || points[0];
  const to = points[toIndex] || from;
  const topLimit = Math.min(state.chart.barTopN, getBarRaceTopLimit(), series.length);
  const orderFactor = state.chart.barSortOrder === "asc" ? 1 : -1;

  const globalValues = [];
  points.forEach((point) => {
    series.forEach((item) => {
      const value = point.values[item.column];
      if (Number.isFinite(value)) globalValues.push(Math.abs(value));
    });
  });
  const globalMax = Math.max(1, ...globalValues);

  const rankAt = (point) => series
    .map((item) => ({ item, value: normalizeBarRaceValue(point.values[item.column]) }))
    .filter((row) => shouldShowBarRaceValue(row.value))
    .sort((a, b) => (a.value - b.value) * orderFactor)
    .map((row, index) => [row.item.column, index]);
  const fromRanks = new Map(rankAt(from));
  const toRanks = new Map(rankAt(to));

  const rows = series
    .map((item) => {
      const startValue = normalizeBarRaceValue(from.values[item.column]);
      const endValue = normalizeBarRaceValue(to.values[item.column]);
      const value = startValue + (endValue - startValue) * partial;
      if (!shouldShowBarRaceValue(value)) return null;
      const startRank = fromRanks.has(item.column) ? fromRanks.get(item.column) : topLimit + 1;
      const endRank = toRanks.has(item.column) ? toRanks.get(item.column) : topLimit + 1;
      return {
        column: item.column,
        name: item.name,
        color: item.color,
        value,
        y: startRank + (endRank - startRank) * partial,
        alpha: startRank <= topLimit || endRank <= topLimit ? 1 : 0.35,
      };
    })
    .filter(Boolean)
    .sort((a, b) => (a.value - b.value) * orderFactor);

  const currentMax = Math.max(1, ...rows.map((row) => Math.abs(row.value)));
  const label = formatInterpolatedTime(from, to, partial);
  return { items: rows.slice(0, topLimit + 2), currentMax, globalMax, label };
}

function normalizeBarRaceValue(value) {
  if (!Number.isFinite(value)) return 0;
  if (!state.chart.barAllowNegative && value < 0) return 0;
  return value;
}

function shouldShowBarRaceValue(value) {
  if (!Number.isFinite(value)) return false;
  if (state.chart.barShowZero) return true;
  return value !== 0;
}

function formatInterpolatedTime(from, to, progress) {
  const time = from.time + (to.time - from.time) * progress;
  if (Number.isFinite(time) && Math.abs(time - Math.round(time)) < 0.08) return String(Math.round(time));
  return formatTimeLabel(from.label, from.time);
}

function drawBarRaceYear(ctx, label, area) {
  const { cssWidth, cssHeight, margin, colors } = area;
  ctx.save();
  ctx.font = `800 ${Math.max(44, Math.round(cssWidth * 0.09))}px ${CANVAS_FONT}`;
  ctx.fillStyle = state.chart.barYearPosition === "center" ? withAlpha(colors.text, 0.12) : withAlpha(colors.text, 0.28);
  ctx.textBaseline = "top";
  if (state.chart.barYearPosition === "center") {
    ctx.textAlign = "center";
    ctx.fillText(label, cssWidth / 2, cssHeight * 0.42);
  } else if (state.chart.barYearPosition === "bottomRight") {
    ctx.textAlign = "right";
    ctx.textBaseline = "bottom";
    ctx.fillText(label, cssWidth - margin.right, cssHeight - margin.bottom + 6);
  } else if (state.chart.barYearPosition === "topLeft") {
    ctx.textAlign = "left";
    ctx.fillText(label, margin.left, 92);
  } else {
    ctx.textAlign = "right";
    ctx.fillText(label, cssWidth - margin.right, 86);
  }
  ctx.restore();
}

function formatBarRaceValue(value) {
  const digits = state.chart.barDecimalPlaces;
  return `${Number(value).toLocaleString("ja-JP", { minimumFractionDigits: digits, maximumFractionDigits: digits })}${state.chart.unit ? state.chart.unit : ""}`;
}

function roundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, Math.abs(width) / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
}

function drawChartFrame(ctx, area) {
  const { cssWidth, padding, plotWidth, plotHeight, points, series, xFor, yFor, scale, colors, header } = area;
  ctx.fillStyle = colors.text;
  ctx.font = `700 24px ${CANVAS_FONT}`;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText(truncateCanvasText(ctx, state.chart.title, plotWidth), padding.left, 24);

  ctx.font = `13px ${CANVAS_FONT}`;
  ctx.fillStyle = colors.muted;
  ctx.fillText(truncateCanvasText(ctx, state.chart.subtitle || (state.chart.unit ? `単位: ${state.chart.unit}` : ""), plotWidth), padding.left, 56);

  drawLegend(ctx, series, cssWidth, padding, colors, header.legendY);

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

  if (state.chart.showGrowth) drawGrowthSummary(ctx, area, header.growthRows, header.growthY);
}

function getCanvasHeaderLayout(ctx, cssWidth, series, points) {
  const paddingLeft = 86;
  const paddingRight = 42;
  const plotWidth = cssWidth - paddingLeft - paddingRight;
  const legendY = 80;
  const legendRows = Math.max(1, countLegendRows(ctx, series, cssWidth, paddingLeft, paddingRight));
  const growthRows = state.chart.showGrowth ? getGrowthSummaryRows(points, series).slice(0, 3) : [];
  const growthY = legendY + legendRows * 22 + 8;
  const plotTop = Math.max(118, growthY + growthRows.length * 17 + 20);
  return { legendY, legendRows, growthY, growthRows, plotTop, plotWidth };
}

function countLegendRows(ctx, series, cssWidth, paddingLeft, paddingRight) {
  let rows = 1;
  let x = paddingLeft;
  ctx.font = `12px ${CANVAS_FONT}`;
  series.forEach((item) => {
    const width = Math.min(180, ctx.measureText(item.name).width + 34);
    if (x > paddingLeft && x + width > cssWidth - paddingRight) {
      rows += 1;
      x = paddingLeft;
    }
    x += width + 16;
  });
  return rows;
}

function truncateCanvasText(ctx, text, maxWidth) {
  const value = text || "";
  if (ctx.measureText(value).width <= maxWidth) return value;
  let clipped = value;
  while (clipped.length > 1 && ctx.measureText(`${clipped}...`).width > maxWidth) {
    clipped = clipped.slice(0, -1);
  }
  return `${clipped}...`;
}

function drawLegend(ctx, series, cssWidth, padding, colors, startY) {
  let x = padding.left;
  let y = startY;
  ctx.font = `12px ${CANVAS_FONT}`;
  series.forEach((item) => {
    const width = Math.min(180, ctx.measureText(item.name).width + 34);
    if (x > padding.left && x + width > cssWidth - padding.right) {
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

function getGrowthSummaryRows(points, series) {
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
  return rows;
}

function drawGrowthSummary(ctx, area, rows, startY) {
  const { padding, plotWidth, colors } = area;

  if (rows.length === 0) return;
  ctx.font = `12px ${CANVAS_FONT}`;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillStyle = colors.muted;
  rows.slice(0, 3).forEach((row, index) => {
    ctx.fillText(truncateCanvasText(ctx, row, plotWidth), padding.left, startY + index * 17);
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
  if (layout.graphMode === "barRace") {
    const scaleX = layout.cssWidth / rect.width;
    const scaleY = layout.cssHeight / rect.height;
    const canvasX = x * scaleX;
    const canvasY = y * scaleY;
    const hit = layout.barItems?.find((item) =>
      canvasX >= item.x && canvasX <= item.x + item.width && canvasY >= item.y && canvasY <= item.y + item.height
    );
    if (!hit) {
      clearCanvasHover();
      return;
    }
    showBarRaceTooltip(event, hit, layout.currentLabel);
    return;
  }
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

function showBarRaceTooltip(event, item, label) {
  els.chartTooltip.innerHTML = `
    <strong>${escapeHtml(label)}</strong>
    <div><span style="background:${item.color}"></span>${item.rank}位: ${escapeHtml(item.name)}</div>
    <div>${escapeHtml(formatBarRaceValue(item.value))}</div>
  `;
  els.chartTooltip.hidden = false;
  const frameRect = els.canvas.parentElement.getBoundingClientRect();
  els.chartTooltip.style.left = `${Math.min(event.clientX - frameRect.left + 14, frameRect.width - 260)}px`;
  els.chartTooltip.style.top = `${Math.min(event.clientY - frameRect.top + 14, frameRect.height - 120)}px`;
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

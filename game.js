const TYPES = {
  tuna: { name: "三文鱼", asset: "sushi-salmon.png" },
  salmon: { name: "海胆", asset: "sushi-uni.png" },
  uni: { name: "鳗鱼寿司", asset: "sushi-eel.png" },
  shrimp: { name: "甜虾寿司", asset: "sushi-sweet-shrimp.png" },
  eel: { name: "虎虾寿司", asset: "sushi-tiger-shrimp.png" },
  tamago: { name: "牛油果寿司", asset: "sushi-avocado.png" },
  ikura: { name: "小肌鱼寿司", asset: "sushi-kohada.png" },
  scallop: { name: "蟹柳寿司", asset: "sushi-crab-stick.png" }
};

const LEVELS = [
  {
    name: "试营业",
    types: ["tuna"],
    tools: { undo: 1, rotate: 1 },
    orders: [{ pattern: ["tuna"], orientation: "h", count: 3 }]
  },
  {
    name: "双拼练习",
    types: ["tuna", "salmon"],
    tools: { undo: 1, rotate: 1 },
    orders: [{ pattern: ["tuna", "salmon"], orientation: "h", count: 3 }]
  },
  {
    name: "三味配平",
    types: ["tuna", "salmon", "uni"],
    tools: { undo: 1, rotate: 1 },
    orders: [
      { pattern: ["tuna", "salmon"], orientation: "h", count: 2 },
      { pattern: ["tuna"], orientation: "h", count: 1 },
      { pattern: ["salmon"], orientation: "h", count: 1 },
      { pattern: ["uni"], orientation: "h", count: 3 }
    ]
  },
  {
    name: "四味搭桥",
    types: ["tuna", "salmon", "uni", "shrimp"],
    tools: { undo: 1, rotate: 1 },
    orders: [
      { pattern: ["tuna", "salmon"], orientation: "h", count: 2 },
      { pattern: ["uni", "shrimp"], orientation: "h", count: 2 },
      { pattern: ["tuna", "uni"], orientation: "v", count: 1 },
      { pattern: ["salmon", "shrimp"], orientation: "v", count: 1 }
    ]
  },
  {
    name: "五味交错",
    types: ["tuna", "salmon", "uni", "shrimp", "eel"],
    tools: { undo: 1, rotate: 1 },
    orders: [
      { pattern: ["tuna", "salmon", "uni"], orientation: "h", count: 2 },
      { pattern: ["shrimp", "eel"], orientation: "h", count: 2 },
      { pattern: ["tuna", "shrimp"], orientation: "v", count: 1 },
      { pattern: ["salmon", "eel"], orientation: "v", count: 1 },
      { pattern: ["uni"], orientation: "h", count: 1 }
    ]
  },
  {
    name: "六味桥阵",
    types: ["tuna", "salmon", "uni", "shrimp", "eel", "tamago"],
    tools: { undo: 1, rotate: 1 },
    orders: [
      { pattern: ["tuna", "salmon", "uni"], orientation: "h", count: 2 },
      { pattern: ["shrimp", "eel", "tamago"], orientation: "h", count: 2 },
      { pattern: ["tuna", "shrimp"], orientation: "v", count: 1 },
      { pattern: ["salmon", "eel"], orientation: "v", count: 1 },
      { pattern: ["uni", "tamago"], orientation: "v", count: 1 }
    ]
  },
  {
    name: "主厨排单",
    types: ["tuna", "salmon", "uni", "shrimp", "eel", "tamago", "ikura"],
    tools: { undo: 1, rotate: 1 },
    orders: [
      { pattern: ["tuna", "salmon", "uni", "shrimp"], orientation: "h", count: 2 },
      { pattern: ["eel", "tamago", "ikura"], orientation: "h", count: 2 },
      { pattern: ["tuna", "eel"], orientation: "v", count: 1 },
      { pattern: ["salmon", "tamago"], orientation: "v", count: 1 },
      { pattern: ["uni", "ikura"], orientation: "v", count: 1 },
      { pattern: ["shrimp"], orientation: "h", count: 1 }
    ]
  },
  {
    name: "满席终局",
    types: ["tuna", "salmon", "uni", "shrimp", "eel", "tamago", "ikura", "scallop"],
    tools: { undo: 1, rotate: 1 },
    orders: [
      { pattern: ["tuna", "salmon", "uni", "shrimp"], orientation: "h", count: 2 },
      { pattern: ["eel", "tamago", "ikura", "scallop"], orientation: "h", count: 2 },
      { pattern: ["tuna", "eel"], orientation: "v", count: 1 },
      { pattern: ["salmon", "tamago"], orientation: "v", count: 1 },
      { pattern: ["uni", "ikura"], orientation: "v", count: 1 },
      { pattern: ["shrimp", "scallop"], orientation: "v", count: 1 }
    ]
  },
  {
    name: "回转双线",
    types: ["tuna", "salmon", "uni", "shrimp", "eel", "tamago", "ikura", "scallop"],
    tools: { undo: 1, rotate: 1 },
    orders: [
      { pattern: ["tuna", "salmon", "uni", "shrimp"], orientation: "h", count: 1 },
      { pattern: ["eel", "tamago", "ikura", "scallop"], orientation: "h", count: 1 },
      { pattern: ["tuna", "eel"], orientation: "v", count: 1 },
      { pattern: ["salmon", "tamago"], orientation: "v", count: 1 },
      { pattern: ["uni", "ikura"], orientation: "v", count: 1 },
      { pattern: ["shrimp", "scallop"], orientation: "v", count: 1 },
      { pattern: ["tuna", "salmon", "uni", "shrimp"], orientation: "v", count: 1 },
      { pattern: ["eel", "tamago", "ikura", "scallop"], orientation: "v", count: 1 }
    ]
  },
  {
    name: "错位三拼",
    types: ["tuna", "salmon", "uni", "shrimp", "eel", "tamago", "ikura", "scallop"],
    tools: { undo: 1, rotate: 1 },
    orders: [
      { pattern: ["tuna", "uni", "eel"], orientation: "h", count: 2 },
      { pattern: ["salmon", "shrimp", "tamago"], orientation: "v", count: 2 },
      { pattern: ["ikura", "scallop"], orientation: "h", count: 2 },
      { pattern: ["tuna", "salmon", "ikura"], orientation: "v", count: 1 },
      { pattern: ["uni", "shrimp", "scallop"], orientation: "h", count: 1 },
      { pattern: ["eel", "tamago"], orientation: "v", count: 1 }
    ]
  },
  {
    name: "单点补位",
    types: ["tuna", "salmon", "uni", "shrimp", "eel", "tamago", "ikura", "scallop"],
    tools: { undo: 1, rotate: 1 },
    orders: [
      { pattern: ["tuna", "salmon", "uni", "shrimp"], orientation: "h", count: 2 },
      { pattern: ["eel", "tamago", "ikura", "scallop"], orientation: "v", count: 2 },
      { pattern: ["tuna", "eel"], orientation: "h", count: 1 },
      { pattern: ["tuna", "tamago"], orientation: "v", count: 1 },
      { pattern: ["tuna", "ikura", "scallop"], orientation: "h", count: 1 },
      { pattern: ["salmon", "uni", "shrimp"], orientation: "v", count: 1 },
      { pattern: ["tuna"], orientation: "h", count: 1 }
    ]
  },
  {
    name: "双主料压盘",
    types: ["tuna", "salmon", "uni", "shrimp", "eel", "tamago", "ikura", "scallop"],
    tools: { undo: 1, rotate: 1 },
    orders: [
      { pattern: ["tuna", "uni", "eel"], orientation: "h", count: 2 },
      { pattern: ["salmon", "shrimp", "tamago"], orientation: "v", count: 2 },
      { pattern: ["ikura", "scallop"], orientation: "h", count: 2 },
      { pattern: ["tuna", "salmon", "ikura"], orientation: "v", count: 1 },
      { pattern: ["uni", "shrimp", "scallop"], orientation: "h", count: 1 },
      { pattern: ["eel", "tamago"], orientation: "v", count: 1 },
      { pattern: ["tuna", "salmon"], orientation: "h", count: 3 }
    ]
  },
  {
    name: "中段夹击",
    types: ["tuna", "salmon", "uni", "shrimp", "eel", "tamago", "ikura", "scallop"],
    tools: { undo: 1, rotate: 1 },
    orders: [
      { pattern: ["tuna", "salmon", "uni", "shrimp"], orientation: "h", count: 1 },
      { pattern: ["eel", "tamago", "ikura", "scallop"], orientation: "h", count: 1 },
      { pattern: ["tuna", "eel"], orientation: "v", count: 1 },
      { pattern: ["salmon", "tamago"], orientation: "v", count: 1 },
      { pattern: ["uni", "ikura"], orientation: "v", count: 1 },
      { pattern: ["shrimp", "scallop"], orientation: "v", count: 1 },
      { pattern: ["tuna", "salmon", "uni", "shrimp"], orientation: "v", count: 1 },
      { pattern: ["eel", "tamago", "ikura", "scallop"], orientation: "v", count: 1 },
      { pattern: ["uni", "shrimp"], orientation: "v", count: 3 }
    ]
  },
  {
    name: "三料加压",
    types: ["tuna", "salmon", "uni", "shrimp", "eel", "tamago", "ikura", "scallop"],
    tools: { undo: 1, rotate: 1 },
    orders: [
      { pattern: ["tuna", "salmon", "uni", "shrimp"], orientation: "h", count: 1 },
      { pattern: ["eel", "tamago", "ikura", "scallop"], orientation: "h", count: 1 },
      { pattern: ["tuna", "eel"], orientation: "v", count: 1 },
      { pattern: ["salmon", "tamago"], orientation: "v", count: 1 },
      { pattern: ["uni", "ikura"], orientation: "v", count: 1 },
      { pattern: ["shrimp", "scallop"], orientation: "v", count: 1 },
      { pattern: ["tuna", "salmon", "uni", "shrimp"], orientation: "v", count: 1 },
      { pattern: ["eel", "tamago", "ikura", "scallop"], orientation: "v", count: 1 },
      { pattern: ["tuna", "salmon", "uni"], orientation: "h", count: 3 }
    ]
  },
  {
    name: "深盘折返",
    types: ["tuna", "salmon", "uni", "shrimp", "eel", "tamago", "ikura", "scallop"],
    tools: { undo: 1, rotate: 1 },
    orders: [
      { pattern: ["tuna", "uni", "eel"], orientation: "h", count: 2 },
      { pattern: ["salmon", "shrimp", "tamago"], orientation: "v", count: 2 },
      { pattern: ["ikura", "scallop"], orientation: "h", count: 2 },
      { pattern: ["tuna", "salmon", "ikura"], orientation: "v", count: 1 },
      { pattern: ["uni", "shrimp", "scallop"], orientation: "h", count: 1 },
      { pattern: ["eel", "tamago"], orientation: "v", count: 1 },
      { pattern: ["shrimp", "eel", "tamago"], orientation: "v", count: 3 }
    ]
  },
  {
    name: "半盘满载",
    types: ["tuna", "salmon", "uni", "shrimp", "eel", "tamago", "ikura", "scallop"],
    tools: { undo: 1, rotate: 1 },
    orders: [
      { pattern: ["tuna", "salmon", "uni", "shrimp"], orientation: "h", count: 1 },
      { pattern: ["eel", "tamago", "ikura", "scallop"], orientation: "h", count: 1 },
      { pattern: ["tuna", "eel"], orientation: "v", count: 1 },
      { pattern: ["salmon", "tamago"], orientation: "v", count: 1 },
      { pattern: ["uni", "ikura"], orientation: "v", count: 1 },
      { pattern: ["shrimp", "scallop"], orientation: "v", count: 1 },
      { pattern: ["tuna", "salmon", "uni", "shrimp"], orientation: "v", count: 1 },
      { pattern: ["eel", "tamago", "ikura", "scallop"], orientation: "v", count: 1 },
      { pattern: ["tuna", "salmon", "uni", "shrimp"], orientation: "h", count: 3 }
    ]
  },
  {
    name: "后厨满单",
    types: ["tuna", "salmon", "uni", "shrimp", "eel", "tamago", "ikura", "scallop"],
    tools: { undo: 1, rotate: 1 },
    orders: [
      { pattern: ["tuna", "uni", "eel"], orientation: "h", count: 2 },
      { pattern: ["salmon", "shrimp", "tamago"], orientation: "v", count: 2 },
      { pattern: ["ikura", "scallop"], orientation: "h", count: 2 },
      { pattern: ["tuna", "salmon", "ikura"], orientation: "v", count: 1 },
      { pattern: ["uni", "shrimp", "scallop"], orientation: "h", count: 1 },
      { pattern: ["eel", "tamago"], orientation: "v", count: 1 },
      { pattern: ["eel", "tamago", "ikura", "scallop"], orientation: "h", count: 3 }
    ]
  },
  {
    name: "四色锁盘",
    types: ["tuna", "salmon", "uni", "shrimp", "eel", "tamago", "ikura", "scallop"],
    tools: { undo: 1, rotate: 1 },
    orders: [
      { pattern: ["tuna", "salmon", "uni", "shrimp"], orientation: "h", count: 1 },
      { pattern: ["eel", "tamago", "ikura", "scallop"], orientation: "h", count: 1 },
      { pattern: ["tuna", "eel"], orientation: "v", count: 1 },
      { pattern: ["salmon", "tamago"], orientation: "v", count: 1 },
      { pattern: ["uni", "ikura"], orientation: "v", count: 1 },
      { pattern: ["shrimp", "scallop"], orientation: "v", count: 1 },
      { pattern: ["tuna", "salmon", "uni", "shrimp"], orientation: "v", count: 1 },
      { pattern: ["eel", "tamago", "ikura", "scallop"], orientation: "v", count: 1 },
      { pattern: ["tuna", "uni", "eel", "ikura"], orientation: "h", count: 3 }
    ]
  },
  {
    name: "交叉锁盘",
    types: ["tuna", "salmon", "uni", "shrimp", "eel", "tamago", "ikura", "scallop"],
    tools: { undo: 1, rotate: 1 },
    orders: [
      { pattern: ["tuna", "uni", "eel"], orientation: "h", count: 2 },
      { pattern: ["salmon", "shrimp", "tamago"], orientation: "v", count: 2 },
      { pattern: ["ikura", "scallop"], orientation: "h", count: 2 },
      { pattern: ["tuna", "salmon", "ikura"], orientation: "v", count: 1 },
      { pattern: ["uni", "shrimp", "scallop"], orientation: "h", count: 1 },
      { pattern: ["eel", "tamago"], orientation: "v", count: 1 },
      { pattern: ["salmon", "shrimp", "tamago", "scallop"], orientation: "v", count: 3 }
    ]
  },
  {
    name: "极限满席",
    types: ["tuna", "salmon", "uni", "shrimp", "eel", "tamago", "ikura", "scallop"],
    tools: { undo: 1, rotate: 1 },
    orders: [
      { pattern: ["tuna", "salmon", "uni", "shrimp"], orientation: "h", count: 1 },
      { pattern: ["eel", "tamago", "ikura", "scallop"], orientation: "h", count: 1 },
      { pattern: ["tuna", "eel"], orientation: "v", count: 1 },
      { pattern: ["salmon", "tamago"], orientation: "v", count: 1 },
      { pattern: ["uni", "ikura"], orientation: "v", count: 1 },
      { pattern: ["shrimp", "scallop"], orientation: "v", count: 1 },
      { pattern: ["tuna", "salmon", "uni", "shrimp"], orientation: "v", count: 1 },
      { pattern: ["eel", "tamago", "ikura", "scallop"], orientation: "v", count: 1 },
      { pattern: ["tuna", "shrimp", "tamago", "scallop"], orientation: "h", count: 3 }
    ]
  }
];

const SIZE = 6;
const CELLS = SIZE * SIZE;
const BEST_KEY = "sushi-eliminate-best";
const UNLOCKED_LEVEL_KEY = "sushi-eliminate-unlocked-level";
const SETTINGS_KEY = "sushi-eliminate-settings";
const UI_ASSET_PATH = "./assets/ui/";
const SUSHI_ASSET_PATH = "./assets/sushi/";
const AUDIO_ASSET_PATH = "./assets/audio/";
const AUDIO_EXTENSIONS = ["mp3", "wav", "m4a", "ogg"];
const SOUND_FILES = {
  clear: ["寿司消除的音效", "sushi-clear"],
  undo: ["铲子清除的声音", "undo-shovel"],
  rotate: ["寿司消除的音效", "sushi-clear"],
  restart: ["寿司消除的音效", "sushi-clear"],
  select: ["寿司消除的音效", "sushi-clear"],
  place: ["寿司消除的音效", "sushi-clear"],
  invalid: ["寿司放不下的音效，可能就是放到外面去了", "invalid"],
  fail: ["挑战失败的音效", "fail-voice"],
  success: ["挑战成功的音效", "success-voice"]
};

const elements = {
  loadingScreen: document.getElementById("loadingScreen"),
  homeScreen: document.getElementById("homeScreen"),
  game: document.getElementById("game"),
  loadingBar: document.getElementById("loadingBar"),
  homeProgress: document.getElementById("homeProgress"),
  continueBtn: document.getElementById("continueBtn"),
  startOverBtn: document.getElementById("startOverBtn"),
  helpBtn: document.getElementById("helpBtn"),
  helpModal: document.getElementById("helpModal"),
  helpCloseBtn: document.getElementById("helpCloseBtn"),
  resetModal: document.getElementById("resetModal"),
  cancelResetBtn: document.getElementById("cancelResetBtn"),
  confirmResetBtn: document.getElementById("confirmResetBtn"),
  homeSoundBtn: document.getElementById("homeSoundBtn"),
  homeVibrateBtn: document.getElementById("homeVibrateBtn"),
  board: document.getElementById("board"),
  orders: document.getElementById("orders"),
  tray: document.getElementById("tray"),
  message: document.getElementById("message"),
  levelLabel: document.getElementById("levelLabel"),
  levelName: document.getElementById("levelName"),
  scoreLabel: document.getElementById("scoreLabel"),
  bestLabel: document.getElementById("bestLabel"),
  remainingLabel: document.getElementById("remainingLabel"),
  undoBtn: document.getElementById("undoBtn"),
  rotateBtn: document.getElementById("rotateBtn"),
  restartBtn: document.getElementById("restartBtn"),
  exitBtn: document.getElementById("exitBtn"),
  soundBtn: document.getElementById("soundBtn"),
  vibrateBtn: document.getElementById("vibrateBtn"),
  resultModal: document.getElementById("resultModal"),
  resultTitle: document.getElementById("resultTitle"),
  resultText: document.getElementById("resultText"),
  retryBtn: document.getElementById("retryBtn"),
  nextBtn: document.getElementById("nextBtn")
};

const state = {
  levelIndex: 0,
  unlockedLevelIndex: readStorageNumber(UNLOCKED_LEVEL_KEY, 0),
  board: Array(CELLS).fill(null),
  remaining: [],
  tools: { undo: 0, rotate: 0 },
  active: null,
  score: 0,
  levelStartScore: 0,
  moves: 0,
  history: [],
  sound: readSettings().sound,
  vibrate: readSettings().vibrate,
  message: "",
  homeNotice: "",
  best: readStorageNumber(BEST_KEY, 0)
};

let audioContext = null;
let dragGhost = null;
const audioCache = new Map();
const failedAudioUrls = new Set();
const unavailableSoundKeys = new Set();

function init() {
  elements.continueBtn.addEventListener("click", continueChallenge);
  elements.startOverBtn.addEventListener("click", openResetModal);
  elements.helpBtn.addEventListener("click", openHelpModal);
  elements.helpCloseBtn.addEventListener("click", closeHelpModal);
  elements.cancelResetBtn.addEventListener("click", closeResetModal);
  elements.confirmResetBtn.addEventListener("click", confirmStartOver);
  elements.homeSoundBtn.addEventListener("click", toggleSound);
  elements.homeVibrateBtn.addEventListener("click", toggleVibration);
  elements.undoBtn.addEventListener("click", undoMove);
  elements.rotateBtn.addEventListener("click", rotateActive);
  elements.restartBtn.addEventListener("click", restartCurrentLevel);
  elements.exitBtn.addEventListener("click", exitToHome);
  elements.soundBtn.addEventListener("click", toggleSound);
  elements.vibrateBtn.addEventListener("click", toggleVibration);
  elements.tray.addEventListener("pointerdown", startDrag);
  elements.retryBtn.addEventListener("click", restartCurrentLevel);
  elements.nextBtn.addEventListener("click", () => {
    closeResult();
    if (state.levelIndex >= LEVELS.length - 1) {
      startLevel(0, true);
    } else {
      startLevel(state.levelIndex + 1, false);
    }
  });
  state.unlockedLevelIndex = clampLevelIndex(state.unlockedLevelIndex);
  validateLevelBalance();
  startLevel(state.unlockedLevelIndex, true);
  renderHome();
  setTimeout(showHomeScreen, 1050);
}

function readStorageNumber(key, fallback) {
  const value = Number(localStorage.getItem(key));
  return Number.isFinite(value) ? value : fallback;
}

function readSettings() {
  try {
    const settings = JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}");
    return {
      sound: settings.sound !== false,
      vibrate: settings.vibrate !== false
    };
  } catch (error) {
    return { sound: true, vibrate: true };
  }
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify({
    sound: state.sound,
    vibrate: state.vibrate
  }));
}

function saveProgress() {
  localStorage.setItem(UNLOCKED_LEVEL_KEY, String(state.unlockedLevelIndex));
  localStorage.setItem(BEST_KEY, String(state.best));
}

function clampLevelIndex(index) {
  return Math.min(Math.max(Number(index) || 0, 0), LEVELS.length - 1);
}

function renderHome() {
  elements.homeProgress.textContent = state.homeNotice || `已解锁第 ${state.unlockedLevelIndex + 1} 关`;
  elements.homeSoundBtn.setAttribute("aria-pressed", String(state.sound));
  elements.homeVibrateBtn.setAttribute("aria-pressed", String(state.vibrate));
  elements.soundBtn.setAttribute("aria-pressed", String(state.sound));
  elements.vibrateBtn.setAttribute("aria-pressed", String(state.vibrate));
}

function showHomeScreen() {
  elements.loadingScreen.hidden = true;
  elements.homeScreen.hidden = false;
  elements.game.hidden = true;
  renderHome();
}

function showGameScreen() {
  elements.loadingScreen.hidden = true;
  elements.homeScreen.hidden = true;
  elements.game.hidden = false;
}

function continueChallenge() {
  state.homeNotice = "";
  startLevel(state.unlockedLevelIndex, true);
  showGameScreen();
  feedback("select", 12, 320, 0.03);
}

function exitToHome() {
  state.unlockedLevelIndex = Math.max(state.unlockedLevelIndex, state.levelIndex);
  state.homeNotice = `当前第 ${state.levelIndex + 1} 关已保存`;
  saveProgress();
  closeResult();
  showHomeScreen();
  feedback("select", 12, 320, 0.03);
}

function openHelpModal() {
  elements.helpModal.hidden = false;
  feedback("select", 8, 320, 0.03);
}

function closeHelpModal() {
  elements.helpModal.hidden = true;
}

function openResetModal() {
  elements.resetModal.hidden = false;
  feedback("restart", 16, 180, 0.04);
}

function closeResetModal() {
  elements.resetModal.hidden = true;
}

function confirmStartOver() {
  state.unlockedLevelIndex = 0;
  state.score = 0;
  state.levelStartScore = 0;
  state.homeNotice = "";
  saveProgress();
  closeResetModal();
  renderHome();
  startLevel(0, true);
  showGameScreen();
  feedback("restart", 22, 180, 0.05);
}

function validateLevelBalance() {
  const warnings = [];
  LEVELS.forEach((level, levelIndex) => {
    const totals = {};
    let totalPieces = 0;
    level.orders.forEach((order) => {
      order.pattern.forEach((type) => {
        totals[type] = (totals[type] || 0) + order.count;
        totalPieces += order.count;
      });
    });

    Object.entries(totals).forEach(([type, total]) => {
      if (total % 3 !== 0) {
        warnings.push(`第 ${levelIndex + 1} 关 ${TYPES[type].name} 总数为 ${total}`);
      }
    });

    if (totalPieces > CELLS) {
      warnings.push(`第 ${levelIndex + 1} 关总寿司数 ${totalPieces} 超过盘面容量`);
    }
  });

  if (warnings.length > 0) {
    console.warn(`关卡配平需要检查：\n${warnings.join("\n")}`);
  }
}

function startLevel(index, resetScore, keepLevelStartScore = false) {
  const levelIndex = clampLevelIndex(index);
  const level = LEVELS[levelIndex];
  state.levelIndex = levelIndex;
  state.board = Array(CELLS).fill(null);
  state.remaining = level.orders.map((order) => order.count);
  state.tools = { undo: 0, rotate: 0, ...level.tools, ...progressiveTools(levelIndex) };
  state.active = null;
  state.moves = 0;
  state.history = [];
  state.message = "";
  if (resetScore) {
    state.score = 0;
  }
  if (!keepLevelStartScore) {
    state.levelStartScore = state.score;
  }
  selectFirstAvailable();
  render();
}

function restartCurrentLevel() {
  closeResult();
  state.score = state.levelStartScore;
  startLevel(state.levelIndex, false, true);
  feedback("restart", 22, 180, 0.05);
}

function selectFirstAvailable() {
  const first = state.remaining.findIndex((count) => count > 0);
  if (first >= 0) {
    selectOrder(first, false);
  }
}

function currentLevel() {
  return LEVELS[state.levelIndex];
}

function progressiveTools(index) {
  const levelNumber = index + 1;
  if (levelNumber >= 15) {
    return { undo: 1, rotate: 3 };
  }
  if (levelNumber >= 9) {
    return { undo: 1, rotate: 2 };
  }
  return { undo: 1, rotate: 1 };
}

function render() {
  renderStatus();
  renderBoard();
  renderOrders();
  renderTray();
  renderTools();
}

function renderStatus() {
  const level = currentLevel();
  const remainingPieces = state.remaining.reduce((sum, count) => sum + count, 0);
  elements.levelLabel.textContent = `${state.levelIndex + 1}/${LEVELS.length}`;
  elements.levelName.textContent = level.name;
  elements.scoreLabel.textContent = String(state.score);
  elements.bestLabel.textContent = String(state.best);
  elements.remainingLabel.textContent = `剩 ${remainingPieces}`;
  elements.message.textContent = state.message;
  elements.soundBtn.setAttribute("aria-pressed", String(state.sound));
  elements.vibrateBtn.setAttribute("aria-pressed", String(state.vibrate));
  elements.homeSoundBtn.setAttribute("aria-pressed", String(state.sound));
  elements.homeVibrateBtn.setAttribute("aria-pressed", String(state.vibrate));
}

function renderBoard() {
  elements.board.innerHTML = "";
  for (let index = 0; index < CELLS; index += 1) {
    const cell = document.createElement("button");
    const type = state.board[index];
    cell.type = "button";
    cell.className = "plate-cell";
    cell.dataset.index = String(index);
    cell.setAttribute("aria-label", type ? `${cellName(index)} ${TYPES[type].name}` : `${cellName(index)} 空`);
    cell.addEventListener("click", () => tryPlaceAt(index));
    if (type) {
      cell.appendChild(makeSushiToken(type));
    }
    elements.board.appendChild(cell);
  }
}

function renderOrders() {
  const level = currentLevel();
  elements.orders.innerHTML = "";
  const groups = [
    { key: "single", label: "1个寿司组合", matches: (order) => order.pattern.length === 1 },
    { key: "double", label: "2个寿司组合", matches: (order) => order.pattern.length === 2 },
    { key: "long", label: "3到4个寿司组合", matches: (order) => order.pattern.length >= 3 }
  ].map((group) => ({
    ...group,
    items: level.orders
      .map((order, index) => ({ order, index }))
      .filter(({ order }) => group.matches(order))
  })).filter((group) => group.items.length > 0);

  elements.orders.dataset.layout = groups.map((group) => group.key).join("-");

  groups.forEach((group) => {
    const column = document.createElement("div");
    column.className = `order-column order-column-${group.key}`;
    column.setAttribute("aria-label", group.label);

    group.items.forEach(({ order, index }) => {
      const button = document.createElement("button");
      const remaining = state.remaining[index];
      const active = state.active && state.active.kind === "order" && state.active.orderIndex === index;
      button.type = "button";
      button.className = "order-card";
      button.dataset.length = String(order.pattern.length);
      button.dataset.orientation = order.orientation;
      button.disabled = remaining <= 0;
      button.setAttribute("aria-pressed", String(Boolean(active)));
      button.addEventListener("click", () => selectOrder(index, true));

      const count = document.createElement("span");
      count.className = "order-count";
      count.textContent = `×${remaining}`;
      button.setAttribute("aria-label", orderTitle(order, remaining));
      button.append(makePiecePreview(order.pattern, order.orientation), count);
      column.appendChild(button);
    });

    elements.orders.appendChild(column);
  });
}

function renderTray() {
  elements.tray.innerHTML = "";
  if (!state.active) {
    elements.tray.disabled = true;
    const empty = document.createElement("span");
    empty.className = "tray-empty";
    empty.textContent = "待出餐";
    elements.tray.appendChild(empty);
    return;
  }

  elements.tray.disabled = false;
  const content = document.createElement("span");
  content.className = "tray-content";
  content.append(makePiecePreview(state.active.pattern, state.active.orientation, "tray-preview"));
  elements.tray.setAttribute("aria-label", activeTitle());
  elements.tray.appendChild(content);
}

function renderTools() {
  elements.undoBtn.innerHTML = toolMarkup(imageIcon("tool-spatula-undo.png"), "撤回", state.tools.undo);
  elements.rotateBtn.innerHTML = toolMarkup(imageIcon("tool-rotate-arrows.png"), "旋转", state.tools.rotate);
  elements.restartBtn.innerHTML = toolMarkup(imageIcon("tool-restart.png"), "重来", "本关");
  elements.undoBtn.disabled = state.tools.undo <= 0 || state.history.length === 0;
  elements.rotateBtn.disabled = state.tools.rotate <= 0 || !state.active || state.active.pattern.length < 2;
  elements.restartBtn.disabled = false;
}

function toolMarkup(icon, label, detail) {
  const detailText = typeof detail === "number" ? `×${detail}` : detail;
  return `<span class="tool-icon" aria-hidden="true">${icon}</span><span class="tool-text"><span>${label}</span><b>${detailText}</b></span>`;
}

function imageIcon(fileName) {
  return `<img src="${UI_ASSET_PATH}${fileName}" alt="">`;
}

function makeSushiToken(type) {
  const token = document.createElement("span");
  const image = document.createElement("img");
  token.className = `sushi-token sushi-${type}`;
  image.src = `${SUSHI_ASSET_PATH}${TYPES[type].asset}`;
  image.alt = "";
  image.addEventListener("load", () => {
    token.classList.add("has-art");
  });
  image.addEventListener("error", () => {
    image.hidden = true;
  });
  token.appendChild(image);
  return token;
}

function makePiecePreview(pattern, orientation, extraClass = "") {
  const preview = document.createElement("span");
  preview.className = `piece-preview ${orientation === "v" ? "vertical" : ""} ${extraClass}`.trim();
  preview.style.setProperty("--piece-len", String(pattern.length));
  pattern.forEach((type) => {
    const mini = document.createElement("span");
    mini.className = "mini-cell";
    mini.appendChild(makeSushiToken(type));
    preview.appendChild(mini);
  });
  return preview;
}

function selectOrder(index, shouldRender) {
  const level = currentLevel();
  if (!level.orders[index] || state.remaining[index] <= 0) {
    return;
  }
  const order = level.orders[index];
  state.active = {
    kind: "order",
    orderIndex: index,
    pattern: [...order.pattern],
    orientation: order.orientation
  };
  state.message = "";
  if (shouldRender) {
    feedback("select", 10, 320, 0.03);
    render();
  }
}

function rotateActive() {
  if (!state.active || state.active.pattern.length < 2) {
    setMessage("当前组合无需旋转");
    return;
  }
  if (state.tools.rotate <= 0) {
    setMessage("旋转次数用完了");
    return;
  }
  state.active.orientation = state.active.orientation === "h" ? "v" : "h";
  state.tools.rotate -= 1;
  setMessage("已旋转当前组合");
  feedback("rotate", 18, 280, 0.04);
  render();
}

function undoMove() {
  if (state.tools.undo <= 0) {
    setMessage("撤回次数用完了");
    return;
  }
  if (state.history.length === 0) {
    setMessage("还没有可撤回的出餐");
    return;
  }
  const undoLeft = state.tools.undo - 1;
  const snapshot = state.history.pop();
  state.board = [...snapshot.board];
  state.remaining = [...snapshot.remaining];
  state.tools = { ...snapshot.tools, undo: undoLeft };
  state.active = snapshot.active ? cloneActive(snapshot.active) : null;
  state.score = snapshot.score;
  state.moves = snapshot.moves;
  setMessage("已撤回上一道寿司");
  feedback("undo", 18, 210, 0.05);
  render();
}

function tryPlaceAt(startIndex) {
  if (!state.active) {
    setMessage("先选择今日待出餐");
    return false;
  }
  const indexes = getPlacementIndexes(startIndex, state.active.pattern, state.active.orientation, true);
  if (!indexes) {
    setMessage("这里放不下");
    feedback("invalid", 14, 130, 0.03);
    render();
    return false;
  }

  pushHistory();
  indexes.forEach((index, offset) => {
    state.board[index] = state.active.pattern[offset];
  });
  consumeActive();
  state.moves += 1;
  const cleared = clearMatches();
  if (cleared === 0) {
    setMessage("已放入寿司盘");
    feedback("place", 18, 220, 0.03);
  }
  if (!state.active) {
    selectFirstAvailable();
  }
  render();
  checkEndState();
  return true;
}

function consumeActive() {
  if (state.active.kind === "order") {
    const index = state.active.orderIndex;
    state.remaining[index] -= 1;
    if (state.remaining[index] <= 0) {
      state.active = null;
    }
  } else {
    state.active = null;
  }
}

function pushHistory() {
  state.history.push({
    board: [...state.board],
    remaining: [...state.remaining],
    tools: { ...state.tools },
    active: state.active ? cloneActive(state.active) : null,
    score: state.score,
    moves: state.moves
  });
  if (state.history.length > 30) {
    state.history.shift();
  }
}

function clearMatches() {
  const matches = findMatches();
  if (matches.size === 0) {
    return 0;
  }
  matches.forEach((index) => {
    state.board[index] = null;
  });
  const gained = matches.size * 10 + Math.max(0, matches.size - 3) * 4;
  state.score += gained;
  setMessage(`消除 ${matches.size} 个寿司 +${gained}`);
  feedback("clear", [18, 24, 18], 560, 0.07);
  return matches.size;
}

function findMatches() {
  const matches = new Set();
  for (let row = 0; row < SIZE; row += 1) {
    scanLine(matches, Array.from({ length: SIZE }, (_, col) => row * SIZE + col));
  }
  for (let col = 0; col < SIZE; col += 1) {
    scanLine(matches, Array.from({ length: SIZE }, (_, row) => row * SIZE + col));
  }
  return matches;
}

function scanLine(matches, indexes) {
  let runType = null;
  let run = [];
  indexes.forEach((index) => {
    const type = state.board[index];
    if (type && type === runType) {
      run.push(index);
    } else {
      collectRun(matches, run);
      runType = type;
      run = type ? [index] : [];
    }
  });
  collectRun(matches, run);
}

function collectRun(matches, run) {
  if (run.length >= 3) {
    run.forEach((index) => matches.add(index));
  }
}

function getPlacementIndexes(startIndex, pattern, orientation, requireEmpty) {
  const row = Math.floor(startIndex / SIZE);
  const col = startIndex % SIZE;
  const indexes = [];
  for (let offset = 0; offset < pattern.length; offset += 1) {
    const nextRow = orientation === "h" ? row : row + offset;
    const nextCol = orientation === "h" ? col + offset : col;
    if (nextRow >= SIZE || nextCol >= SIZE) {
      return null;
    }
    const index = nextRow * SIZE + nextCol;
    if (requireEmpty && state.board[index]) {
      return null;
    }
    indexes.push(index);
  }
  return indexes;
}

function checkEndState() {
  const allOrdersDone = state.remaining.every((count) => count <= 0);
  const boardEmpty = state.board.every((type) => !type);
  if (allOrdersDone && boardEmpty) {
    finishLevel();
    return;
  }
  if (allOrdersDone && !boardEmpty) {
    feedback("fail", 60, 140, 0.05);
    showResult("盘面未清空", "还有寿司没有抵消，重新排一次会更稳。", "再来一局", true);
    return;
  }
  if (!allOrdersDone && !hasAnyMove()) {
    feedback("fail", 60, 140, 0.05);
    showResult("盘子满了", "当前组合已经没有合适位置。", "重试本关", true);
  }
}

function hasAnyMove() {
  const level = currentLevel();
  return level.orders.some((order, index) => {
    if (state.remaining[index] <= 0) {
      return false;
    }
    const orientations = state.tools.rotate > 0 && order.pattern.length > 1
      ? [order.orientation, order.orientation === "h" ? "v" : "h"]
      : [order.orientation];
    return orientations.some((orientation) => canFit(order.pattern, orientation));
  });
}

function canFit(pattern, orientation) {
  for (let index = 0; index < CELLS; index += 1) {
    if (getPlacementIndexes(index, pattern, orientation, true)) {
      return true;
    }
  }
  return false;
}

function finishLevel() {
  const bonus = 100 + (state.levelIndex + 1) * 25;
  state.score += bonus;
  state.best = Math.max(state.best, state.score);
  state.unlockedLevelIndex = Math.max(
    state.unlockedLevelIndex,
    Math.min(state.levelIndex + 1, LEVELS.length - 1)
  );
  saveProgress();
  renderStatus();
  const finalLevel = state.levelIndex >= LEVELS.length - 1;
  feedback("success", [28, 30, 28], 660, 0.08);
  showResult(
    finalLevel ? "全部完成" : "本关完成",
    `本关奖励 +${bonus}，当前分数 ${state.score}。`,
    finalLevel ? "从头开始" : "下一关",
    false
  );
}

function showResult(title, text, nextLabel, hideNext) {
  elements.resultTitle.textContent = title;
  elements.resultText.textContent = text;
  elements.nextBtn.textContent = nextLabel;
  elements.nextBtn.hidden = hideNext;
  elements.resultModal.hidden = false;
}

function closeResult() {
  elements.resultModal.hidden = true;
  elements.nextBtn.hidden = false;
}

function startDrag(event) {
  if (!state.active) {
    setMessage("先选择今日待出餐");
    return;
  }
  if (event.button !== undefined && event.button !== 0) {
    return;
  }
  event.preventDefault();
  clearPreview();
  dragGhost = document.createElement("div");
  dragGhost.className = "drag-ghost";
  dragGhost.appendChild(makePiecePreview(state.active.pattern, state.active.orientation, "drag-preview"));
  document.body.appendChild(dragGhost);
  moveDrag(event);
  document.addEventListener("pointermove", moveDrag);
  document.addEventListener("pointerup", endDrag, { once: true });
}

function moveDrag(event) {
  if (!dragGhost) {
    return;
  }
  dragGhost.style.transform = `translate(${event.clientX - 24}px, ${event.clientY - 24}px)`;
  clearPreview();
  const cell = cellFromPoint(event.clientX, event.clientY);
  if (!cell || !state.active) {
    return;
  }
  const startIndex = Number(cell.dataset.index);
  const footprint = getPlacementIndexes(startIndex, state.active.pattern, state.active.orientation, false);
  const fits = Boolean(getPlacementIndexes(startIndex, state.active.pattern, state.active.orientation, true));
  if (footprint) {
    footprint.forEach((index) => {
      const target = elements.board.querySelector(`[data-index="${index}"]`);
      if (target) {
        target.classList.add(fits ? "preview-good" : "preview-bad");
      }
    });
  } else {
    cell.classList.add("preview-bad");
  }
}

function endDrag(event) {
  document.removeEventListener("pointermove", moveDrag);
  const cell = cellFromPoint(event.clientX, event.clientY);
  if (dragGhost) {
    dragGhost.remove();
    dragGhost = null;
  }
  clearPreview();
  if (cell) {
    tryPlaceAt(Number(cell.dataset.index));
  } else {
    setMessage("未放入寿司盘");
    render();
  }
}

function cellFromPoint(x, y) {
  const element = document.elementFromPoint(x, y);
  return element ? element.closest(".plate-cell") : null;
}

function clearPreview() {
  elements.board.querySelectorAll(".preview-good, .preview-bad").forEach((cell) => {
    cell.classList.remove("preview-good", "preview-bad");
  });
}

function toggleSound() {
  state.sound = !state.sound;
  saveSettings();
  renderHome();
  renderStatus();
  if (state.sound) {
    feedback("select", 8, 320, 0.03);
  }
}

function toggleVibration() {
  state.vibrate = !state.vibrate;
  saveSettings();
  renderHome();
  renderStatus();
  if (state.vibrate && navigator.vibrate) {
    navigator.vibrate(28);
  }
}

function feedback(soundKey, vibration = 18, fallbackFrequency = 240, fallbackDuration = 0.04) {
  if (state.vibrate && navigator.vibrate) {
    navigator.vibrate(vibration);
  }
  if (!state.sound) {
    return;
  }
  playSound(soundKey);
}

async function playSound(soundKey) {
  if (!soundKey || unavailableSoundKeys.has(soundKey)) {
    return false;
  }
  const urls = soundUrls(soundKey);
  for (const url of urls) {
    if (failedAudioUrls.has(url)) {
      continue;
    }
    try {
      const audio = audioCache.get(url) || new Audio(url);
      audioCache.set(url, audio);
      audio.currentTime = 0;
      audio.volume = 0.72;
      await audio.play();
      return true;
    } catch (error) {
      failedAudioUrls.add(url);
    }
  }
  unavailableSoundKeys.add(soundKey);
  return false;
}

function soundUrls(soundKey) {
  const names = SOUND_FILES[soundKey] || [];
  return names.flatMap((name) => AUDIO_EXTENSIONS.map((extension) => `${AUDIO_ASSET_PATH}${name}.${extension}`));
}

function playTone(frequency, duration) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) {
      return;
    }
    audioContext = audioContext || new AudioContext();
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.frequency.value = frequency;
    gain.gain.value = 0.0001;
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.05, audioContext.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);
    osc.stop(audioContext.currentTime + duration + 0.02);
  } catch (error) {
    state.sound = false;
    saveSettings();
  }
}

function setMessage(message) {
  state.message = message;
  elements.message.textContent = message;
}

function orderTitle(order, remaining) {
  const names = order.pattern.map((type) => TYPES[type].name).join("+");
  return order.pattern.length > 1 ? `(${names}) × ${remaining}` : `${names} × ${remaining}`;
}

function activeTitle() {
  const names = state.active.pattern.map((type) => TYPES[type].name).join("+");
  const direction = state.active.orientation === "v" ? "竖" : "横";
  return `${names} · ${direction}`;
}

function cellName(index) {
  return `第 ${Math.floor(index / SIZE) + 1} 行第 ${index % SIZE + 1} 列`;
}

function cloneActive(active) {
  return {
    kind: active.kind,
    orderIndex: active.orderIndex,
    pattern: [...active.pattern],
    orientation: active.orientation
  };
}

init();

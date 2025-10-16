const TRANSLATIONS = {
  en: {
    siteTitle: "ECOLUD",
    tagline: "Assemble eco-friendly puzzles, learn planet-saving tips, and celebrate every win!",
    languageLabel: "Language",
    playMusic: "Play Music",
    pauseMusic: "Pause Music",
    chooseAdventure: "Choose Your Eco Mission",
    startPuzzle: "Start Puzzle",
    backToPuzzles: "Back to Puzzles",
    restart: "Restart",
    useHint: "Use Hint",
    ecoFact: "Eco Fact",
    progress: "Progress",
    achievements: "Achievements",
    stats: "Stats",
    totalCompleted: "Total completed:",
    uniqueThemes: "Unique themes:",
    hintsUsed: "Hints used:",
    pieceTray: "Puzzle Pieces",
    hintReminder: "Need help? Use a hint to peek at the finished art for a moment!",
    factPrompt: "Select a puzzle and press \"Eco Fact\" to learn something new!",
    factPromptActive: "Tap the Eco Fact button to discover a green tip!",
    factJournal: "Fact Journal",
    close: "Close",
    puzzleComplete: "Puzzle Complete!",
    chooseAnother: "Choose Another Puzzle",
    puzzleHeading: "Puzzle",
    puzzleIntro: "Assemble the pieces to reveal the eco scene.",
    progressPercent: "{percent}% complete",
    piecesDisplay: "{correct} / {total} {word}",
    hintsDisplay: "Hints: {count}",
    timeDisplay: "Time: {time}",
    difficultyLabel: "Difficulty: {label}",
    completionSummary: "You finished in {time} with {count} {word}!",
    factHistoryTime: "{time}",
    piecesUnitSingular: "piece",
    piecesUnitPlural: "pieces",
    hintsWordSingular: "hint",
    hintsWordPlural: "hints",
    difficulties: {
      easy: "Easy",
      medium: "Medium",
      hard: "Hard",
    },
    achievement: {
      first: {
        title: "Eco Explorer",
        description: "Complete your first puzzle!",
      },
      speed: {
        title: "Speedy Saver",
        description: "Finish a puzzle in under 4 minutes.",
      },
      hintfree: {
        title: "Green Genius",
        description: "Complete a puzzle without using hints.",
      },
      collector: {
        title: "Planet Protector",
        description: "Complete three different themes.",
      },
      factfan: {
        title: "Eco Fact Fan",
        description: "Discover ten eco facts.",
      },
    },
    languageNames: {
      en: "English",
      fr: "Français",
    },
  },
  fr: {
    siteTitle: "ECOLUD",
    tagline: "Assemble des puzzles écologiques, découvre des gestes pour la planète et fête chaque réussite !",
    languageLabel: "Langue",
    playMusic: "Activer la musique",
    pauseMusic: "Mettre la musique en pause",
    chooseAdventure: "Choisis ta mission écolo",
    startPuzzle: "Commencer le puzzle",
    backToPuzzles: "Retour aux puzzles",
    restart: "Recommencer",
    useHint: "Utiliser un indice",
    ecoFact: "Éco-info",
    progress: "Progression",
    achievements: "Trophées",
    stats: "Statistiques",
    totalCompleted: "Total terminé :",
    uniqueThemes: "Thèmes uniques :",
    hintsUsed: "Indices utilisés :",
    pieceTray: "Pièces du puzzle",
    hintReminder: "Besoin d'aide ? Utilise un indice pour voir l'image finale quelques secondes !",
    factPrompt: "Choisis un puzzle et appuie sur « Éco-info » pour apprendre quelque chose de nouveau !",
    factPromptActive: "Appuie sur Éco-info pour découvrir une astuce verte !",
    factJournal: "Carnet d'infos",
    close: "Fermer",
    puzzleComplete: "Puzzle terminé !",
    chooseAnother: "Choisir un autre puzzle",
    puzzleHeading: "Puzzle",
    puzzleIntro: "Assemble les pièces pour révéler la scène écolo.",
    progressPercent: "{percent} % terminé",
    piecesDisplay: "{correct} / {total} {word}",
    hintsDisplay: "Indices : {count}",
    timeDisplay: "Temps : {time}",
    difficultyLabel: "Difficulté : {label}",
    completionSummary: "Tu as terminé en {time} avec {count} {word} !",
    factHistoryTime: "{time}",
    piecesUnitSingular: "pièce",
    piecesUnitPlural: "pièces",
    hintsWordSingular: "indice",
    hintsWordPlural: "indices",
    difficulties: {
      easy: "Facile",
      medium: "Moyen",
      hard: "Difficile",
    },
    achievement: {
      first: {
        title: "Explorateur écolo",
        description: "Termine ton premier puzzle !",
      },
      speed: {
        title: "Sauveur rapide",
        description: "Termine un puzzle en moins de 4 minutes.",
      },
      hintfree: {
        title: "Génie vert",
        description: "Termine un puzzle sans utiliser d'indice.",
      },
      collector: {
        title: "Protecteur de la planète",
        description: "Termine trois thèmes différents.",
      },
      factfan: {
        title: "Fan d'éco-infos",
        description: "Découvre dix éco-infos.",
      },
    },
    languageNames: {
      en: "English",
      fr: "Français",
    },
  },
};

const LANGUAGE_ORDER = ["fr", "en"];

const PUZZLES = [
  {
    id: "forest",
    accent: "#3bb273",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    name: {
      en: "Forest Biodiversity",
      fr: "Biodiversité de la forêt",
    },
    description: {
      en: "Walk through a lush woodland and meet the animals that keep forests thriving.",
      fr: "Parcours une forêt verdoyante et rencontre les animaux qui la font vivre.",
    },
    facts: {
      en: [
        "Trees share food through underground roots and fungal networks called the wood wide web.",
        "More than 80% of land animals depend on forests for their homes.",
        "Leaving fallen leaves can create cozy shelters for insects and hedgehogs.",
      ],
      fr: [
        "Les arbres s'entraident grâce à des réseaux de racines et de champignons appelés le \"wood wide web\".",
        "Plus de 80 % des animaux terrestres vivent grâce aux forêts.",
        "Laisser des feuilles au sol crée des abris douillets pour les insectes et les hérissons.",
      ],
    },
  },
  {
    id: "ocean",
    accent: "#0099f7",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    name: {
      en: "Ocean Guardians",
      fr: "Gardiens de l'océan",
    },
    description: {
      en: "Swim beside vibrant corals and discover how we can keep oceans clean.",
      fr: "Nage près des coraux colorés et découvre comment garder l'océan propre.",
    },
    facts: {
      en: [
        "Sea turtles have explored the oceans for over 100 million years.",
        "Coral reefs protect coasts by slowing down powerful waves.",
        "Reusable bottles help keep plastic out of the sea.",
      ],
      fr: [
        "Les tortues marines voyagent dans les océans depuis plus de 100 millions d'années.",
        "Les récifs coralliens protègent les côtes en ralentissant les vagues.",
        "Utiliser une gourde évite que du plastique n'arrive dans la mer.",
      ],
    },
  },
  {
    id: "recycling",
    accent: "#00a896",
    image: "https://images.unsplash.com/photo-1528323273322-d81458248d40?auto=format&fit=crop&w=1200&q=80",
    name: {
      en: "Recycling Heroes",
      fr: "Héros du tri",
    },
    description: {
      en: "Sort colorful materials and celebrate the power of everyday eco-actions.",
      fr: "Trie des matériaux colorés et découvre la force des gestes du quotidien.",
    },
    facts: {
      en: [
        "Recycling one aluminum can saves enough energy to run a TV for three hours.",
        "Rinsing jars before recycling keeps the whole batch clean.",
        "A sturdy tote bag can replace hundreds of plastic bags.",
      ],
      fr: [
        "Recycler une canette en aluminium économise l'énergie nécessaire pour faire fonctionner une télé pendant trois heures.",
        "Rincer les bocaux avant de les recycler garde la benne propre.",
        "Un sac réutilisable peut remplacer des centaines de sacs plastiques.",
      ],
    },
  },
  {
    id: "renewable",
    accent: "#ff6f3c",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
    name: {
      en: "Renewable Energy",
      fr: "Énergie renouvelable",
    },
    description: {
      en: "Capture sunshine and wind power to light up a future-ready eco city.",
      fr: "Capte le soleil et le vent pour illuminer une ville durable.",
    },
    facts: {
      en: [
        "The sun provides enough energy in one hour to power Earth for a year.",
        "Wind turbines work best where breezes are steady and strong.",
        "Switching off electronics saves energy and gives them a rest.",
      ],
      fr: [
        "Le soleil fournit en une heure assez d'énergie pour alimenter la Terre pendant un an.",
        "Les éoliennes fonctionnent mieux là où le vent est régulier et puissant.",
        "Éteindre les appareils quand on ne les utilise pas économise de l'énergie.",
      ],
    },
  },
];

const DIFFICULTIES = {
  easy: { rows: 2, cols: 5 },
  medium: { rows: 4, cols: 5 },
  hard: { rows: 5, cols: 6 },
};

const MAX_HINTS = 3;

const ACHIEVEMENTS = [
  {
    id: "first",
    titleKey: "achievement.first.title",
    descriptionKey: "achievement.first.description",
    check: (stats) => stats.totalCompleted >= 1,
    icon: "🌱",
  },
  {
    id: "speed",
    titleKey: "achievement.speed.title",
    descriptionKey: "achievement.speed.description",
    check: (stats) => stats.lastCompletionTime > 0 && stats.lastCompletionTime <= 240,
    icon: "⚡",
  },
  {
    id: "hintfree",
    titleKey: "achievement.hintfree.title",
    descriptionKey: "achievement.hintfree.description",
    check: (stats) => stats.lastHintsUsed === 0 && stats.lastCompletionTime > 0,
    icon: "🧠",
  },
  {
    id: "collector",
    titleKey: "achievement.collector.title",
    descriptionKey: "achievement.collector.description",
    check: (stats) => stats.uniqueThemes.size >= 3,
    icon: "🌍",
  },
  {
    id: "factfan",
    titleKey: "achievement.factfan.title",
    descriptionKey: "achievement.factfan.description",
    check: (stats) => stats.totalFacts >= 10,
    icon: "📚",
  },
];

const state = {
  language: LANGUAGE_ORDER[0],
  currentPuzzle: null,
  difficultyKey: null,
  rows: 0,
  cols: 0,
  totalPieces: 0,
  boardSlots: [],
  pieces: [],
  pieceOrder: [],
  pieceLocations: new Map(),
  hintsRemaining: 3,
  hintsUsed: 0,
  timerId: null,
  startTime: 0,
  isPlaying: false,
  stats: {
    totalCompleted: 0,
    uniqueThemes: new Set(),
    totalHintsUsed: 0,
    totalFacts: 0,
    lastCompletionTime: 0,
    lastHintsUsed: 0,
  },
  unlockedAchievements: new Set(),
  factHistory: [],
  musicEnabled: false,
  audioContext: null,
  ambientNodes: null,
};

const elements = {
  languageSelect: document.getElementById("language-select"),
  puzzleGrid: document.getElementById("puzzle-grid"),
  puzzleTemplate: document.getElementById("puzzle-card-template"),
  homeView: document.getElementById("home-view"),
  gameView: document.getElementById("game-view"),
  backButton: document.getElementById("back-button"),
  restartButton: document.getElementById("restart-button"),
  timerDisplay: document.getElementById("timer-display"),
  pieceDisplay: document.getElementById("piece-display"),
  hintDisplay: document.getElementById("hint-display"),
  hintButton: document.getElementById("hint-button"),
  factButton: document.getElementById("fact-button"),
  progressFill: document.getElementById("progress-fill"),
  progressText: document.getElementById("progress-text"),
  achievementList: document.getElementById("achievement-list"),
  statsCompleted: document.getElementById("stats-completed"),
  statsThemes: document.getElementById("stats-themes"),
  statsHints: document.getElementById("stats-hints"),
  puzzleTitle: document.getElementById("puzzle-title"),
  puzzleDescription: document.getElementById("puzzle-description"),
  difficultyLabel: document.getElementById("difficulty-label"),
  puzzleBoard: document.getElementById("puzzle-board"),
  piecePool: document.getElementById("piece-pool"),
  hintOverlay: document.getElementById("hint-overlay"),
  factText: document.getElementById("fact-text"),
  factHistory: document.getElementById("fact-history"),
  modalLayer: document.getElementById("modal-layer"),
  modalTitle: document.getElementById("modal-title"),
  modalBody: document.getElementById("modal-body"),
  modalClose: document.getElementById("modal-close"),
  completionLayer: document.getElementById("completion-layer"),
  completionTitle: document.getElementById("completion-title"),
  completionSummary: document.getElementById("completion-summary"),
  completionAchievements: document.getElementById("completion-achievements"),
  celebrationClose: document.getElementById("celebration-close"),
  musicToggle: document.getElementById("music-toggle"),
};

function translate(key, variables = {}) {
  const parts = key.split(".");
  let value = TRANSLATIONS[state.language];
  for (const part of parts) {
    value = value?.[part];
    if (value === undefined) {
      return key;
    }
  }
  if (typeof value !== "string") {
    return key;
  }
  return Object.entries(variables).reduce(
    (acc, [token, replacement]) => acc.replaceAll(`{${token}}`, replacement),
    value,
  );
}

function populateLanguageSelect() {
  elements.languageSelect.innerHTML = "";
  LANGUAGE_ORDER.forEach((code) => {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = TRANSLATIONS[state.language].languageNames[code];
    if (code === state.language) {
      option.selected = true;
    }
    elements.languageSelect.append(option);
  });
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = translate(key);
  });

  populateLanguageSelect();
  updateToolbarDisplays();
  updateDifficultyLabel();
  renderAchievements();
  renderPuzzleCards();
  updateFactPrompt();
  elements.musicToggle.textContent = translate(state.musicEnabled ? "pauseMusic" : "playMusic");
  elements.musicToggle.setAttribute(
    "aria-label",
    translate(state.musicEnabled ? "pauseMusic" : "playMusic"),
  );
  document.documentElement.lang = state.language;
  if (!state.currentPuzzle) {
    elements.puzzleTitle.textContent = translate("puzzleHeading");
    elements.puzzleDescription.textContent = translate("puzzleIntro");
  }
}

function setLanguage(code) {
  if (!TRANSLATIONS[code]) {
    return;
  }
  state.language = code;
  applyTranslations();
  if (state.currentPuzzle) {
    updatePuzzleHeader();
  }
}

function renderPuzzleCards() {
  if (!elements.puzzleTemplate) {
    return;
  }
  const currentCards = Array.from(elements.puzzleGrid.children);
  currentCards.forEach((card) => card.remove());

  PUZZLES.forEach((puzzle) => {
    const fragment = elements.puzzleTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".puzzle-card");
    const image = fragment.querySelector(".puzzle-image");
    const title = fragment.querySelector(".puzzle-title");
    const description = fragment.querySelector(".puzzle-description");
    const fieldset = fragment.querySelector(".difficulty-group");
    const button = fragment.querySelector(".start-button");

    card.style.setProperty("--accent", puzzle.accent);
    image.src = puzzle.image;
    image.alt = puzzle.name[state.language];
    title.textContent = puzzle.name[state.language];
    description.textContent = puzzle.description[state.language];
    fieldset.innerHTML = "";

    Object.entries(DIFFICULTIES).forEach(([key, config], index) => {
      const label = document.createElement("label");
      label.className = "difficulty-option";
      label.style.borderColor = puzzle.accent;

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `difficulty-${puzzle.id}`;
      input.value = key;
      input.checked = index === 0;

      const span = document.createElement("span");
      const pieces = config.rows * config.cols;
      const word = pieces === 1 ? translate("piecesUnitSingular") : translate("piecesUnitPlural");
      span.textContent = `${translate(`difficulties.${key}`)} · ${pieces} ${word}`;

      label.append(input, span);
      fieldset.append(label);
    });

    const buttonLabel = translate("startPuzzle");
    button.textContent = buttonLabel;
    button.setAttribute("aria-label", buttonLabel);

    button.addEventListener("click", () => {
      const selected = fieldset.querySelector("input:checked");
      const choice = selected ? selected.value : "easy";
      startPuzzle(puzzle, choice);
    });

    elements.puzzleGrid.append(fragment);
  });
}

function showView(view) {
  const isGame = view === "game";
  elements.homeView.hidden = isGame;
  elements.gameView.hidden = !isGame;
}

function startPuzzle(puzzle, difficultyKey) {
  const config = DIFFICULTIES[difficultyKey] || DIFFICULTIES.easy;
  state.currentPuzzle = puzzle;
  state.difficultyKey = difficultyKey;
  state.rows = config.rows;
  state.cols = config.cols;
  state.totalPieces = config.rows * config.cols;
  state.boardSlots = new Array(state.totalPieces).fill(null);
  state.pieceLocations = new Map();
  state.hintsRemaining = MAX_HINTS;
  state.hintsUsed = 0;
  state.startTime = Date.now();
  state.isPlaying = true;
  state.pieces = createPieces(puzzle);
  state.pieceOrder = shuffleArray(state.pieces.map((piece) => piece.id));
  state.factHistory = [];

  createBoardStructure();
  renderPieces();
  updatePuzzleHeader();
  updateToolbarDisplays();
  updateProgress();
  updateFactHistory();
  updateFactPrompt();
  setupHintOverlay();
  stopTimer();
  startTimer();
  showView("game");
  playSound("start");
}

function createPieces(puzzle) {
  const pieces = [];
  let index = 0;
  for (let row = 0; row < state.rows; row += 1) {
    for (let col = 0; col < state.cols; col += 1) {
      const id = `${puzzle.id}-${index}`;
      pieces.push({ id, index, row, col });
      state.pieceLocations.set(id, { type: "pool" });
      index += 1;
    }
  }
  return pieces;
}

function shuffleArray(list) {
  const array = [...list];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createBoardStructure() {
  elements.puzzleBoard.innerHTML = "";
  elements.puzzleBoard.dataset.ready = "true";
  elements.puzzleBoard.style.setProperty("--rows", state.rows);
  elements.puzzleBoard.style.setProperty("--cols", state.cols);

  for (let slotIndex = 0; slotIndex < state.totalPieces; slotIndex += 1) {
    const slot = document.createElement("div");
    slot.className = "puzzle-slot";
    slot.dataset.index = String(slotIndex);
    slot.setAttribute("role", "gridcell");
    slot.addEventListener("dragover", (event) => event.preventDefault());
    slot.addEventListener("drop", (event) => {
      event.preventDefault();
      const pieceId = event.dataTransfer.getData("text/plain");
      if (pieceId) {
        placePieceInSlot(pieceId, slotIndex);
      }
    });
    elements.puzzleBoard.append(slot);
  }

  elements.piecePool.innerHTML = "";
}

function createPieceNode(piece) {
  const node = document.createElement("div");
  node.className = "puzzle-piece";
  node.draggable = true;
  node.dataset.id = piece.id;
  node.style.backgroundImage = `url(${state.currentPuzzle.image})`;
  node.style.setProperty("--rows", state.rows);
  node.style.setProperty("--cols", state.cols);
  node.style.backgroundPosition = `${(piece.col / (state.cols - 1 || 1)) * 100}% ${(piece.row / (state.rows - 1 || 1)) * 100}%`;

  node.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", piece.id);
    playSound("grab");
  });

  node.addEventListener("dragend", () => {
    playSound("drop");
  });

  return node;
}

function renderPieces() {
  elements.piecePool.innerHTML = "";
  const slots = elements.puzzleBoard.querySelectorAll(".puzzle-slot");
  slots.forEach((slot) => {
    slot.innerHTML = "";
  });

  state.boardSlots.forEach((pieceId, index) => {
    if (!pieceId) {
      return;
    }
    const piece = state.pieces.find((item) => item.id === pieceId);
    if (!piece) {
      return;
    }
    const slotElement = elements.puzzleBoard.querySelector(`.puzzle-slot[data-index="${index}"]`);
    if (slotElement) {
      const node = createPieceNode(piece);
      slotElement.append(node);
      state.pieceLocations.set(pieceId, { type: "slot", index });
    }
  });

  state.pieceOrder.forEach((pieceId) => {
    if (state.boardSlots.includes(pieceId)) {
      return;
    }
    const piece = state.pieces.find((item) => item.id === pieceId);
    if (!piece) {
      return;
    }
    const node = createPieceNode(piece);
    elements.piecePool.append(node);
    state.pieceLocations.set(pieceId, { type: "pool" });
  });
}

function placePieceInSlot(pieceId, slotIndex) {
  const existingPieceId = state.boardSlots[slotIndex];
  if (existingPieceId === pieceId) {
    return;
  }

  if (existingPieceId) {
    state.pieceLocations.set(existingPieceId, { type: "pool" });
  }

  const previousLocation = state.pieceLocations.get(pieceId);
  if (previousLocation && previousLocation.type === "slot") {
    state.boardSlots[previousLocation.index] = null;
  }

  state.boardSlots[slotIndex] = pieceId;
  state.pieceLocations.set(pieceId, { type: "slot", index: slotIndex });
  renderPieces();
  updateProgress();
  checkForCompletion();
}

function returnPieceToPool(pieceId) {
  const previousLocation = state.pieceLocations.get(pieceId);
  if (previousLocation && previousLocation.type === "slot") {
    state.boardSlots[previousLocation.index] = null;
  }
  state.pieceLocations.set(pieceId, { type: "pool" });
  renderPieces();
  updateProgress();
}

function updatePuzzleHeader() {
  elements.puzzleTitle.textContent = state.currentPuzzle.name[state.language];
  elements.puzzleDescription.textContent = state.currentPuzzle.description[state.language];
  updateDifficultyLabel();
}

function updateDifficultyLabel() {
  if (!state.currentPuzzle) {
    elements.difficultyLabel.textContent = translate("difficultyLabel", { label: translate("difficulties.easy") });
    return;
  }
  const label = translate(`difficulties.${state.difficultyKey}`);
  elements.difficultyLabel.textContent = translate("difficultyLabel", { label });
}

function updateToolbarDisplays() {
  const correctPieces = countCorrectPieces();
  const piecesWord = state.totalPieces === 1 ? translate("piecesUnitSingular") : translate("piecesUnitPlural");
  elements.pieceDisplay.textContent = translate("piecesDisplay", {
    correct: correctPieces,
    total: state.totalPieces,
    word: piecesWord,
  });
  elements.hintDisplay.textContent = translate("hintsDisplay", { count: state.hintsRemaining });
  const time = formatTime(getElapsedSeconds());
  elements.timerDisplay.textContent = translate("timeDisplay", { time });
}

function updateProgress() {
  const placedPieces = state.boardSlots.filter((slot) => slot !== null).length;
  const correctPieces = countCorrectPieces();
  const percent = state.totalPieces ? Math.round((correctPieces / state.totalPieces) * 100) : 0;
  elements.progressFill.style.width = `${percent}%`;
  elements.progressFill.parentElement?.setAttribute("aria-valuenow", String(percent));
  elements.progressText.textContent = translate("progressPercent", { percent });
  const piecesWord = state.totalPieces === 1 ? translate("piecesUnitSingular") : translate("piecesUnitPlural");
  elements.pieceDisplay.textContent = translate("piecesDisplay", {
    correct: correctPieces,
    total: state.totalPieces,
    word: piecesWord,
  });
  if (placedPieces > 0) {
    elements.factText.textContent = translate("factPromptActive");
  } else {
    elements.factText.textContent = translate("factPrompt");
  }
}

function countCorrectPieces() {
  let correct = 0;
  state.boardSlots.forEach((pieceId, index) => {
    if (!pieceId) {
      return;
    }
    const piece = state.pieces.find((item) => item.id === pieceId);
    if (piece && piece.index === index) {
      correct += 1;
    }
  });
  return correct;
}

function checkForCompletion() {
  if (!state.isPlaying) {
    return;
  }
  if (state.boardSlots.some((slot) => slot === null)) {
    return;
  }
  if (countCorrectPieces() !== state.totalPieces) {
    return;
  }
  finishPuzzle();
}

function finishPuzzle() {
  state.isPlaying = false;
  stopTimer();
  const elapsedSeconds = getElapsedSeconds();
  state.stats.totalCompleted += 1;
  state.stats.uniqueThemes.add(state.currentPuzzle.id);
  state.stats.lastCompletionTime = elapsedSeconds;
  state.stats.lastHintsUsed = state.hintsUsed;
  updateStatsPanel();
  updateAchievements();
  showCompletionModal(elapsedSeconds);
  playSound("complete");
}

function updateStatsPanel() {
  elements.statsCompleted.textContent = String(state.stats.totalCompleted);
  elements.statsThemes.textContent = String(state.stats.uniqueThemes.size);
  elements.statsHints.textContent = String(state.stats.totalHintsUsed);
  renderAchievements();
}

function updateAchievements() {
  ACHIEVEMENTS.forEach((achievement) => {
    if (achievement.check(state.stats)) {
      state.unlockedAchievements.add(achievement.id);
    }
  });
}

function renderAchievements() {
  elements.achievementList.innerHTML = "";
  ACHIEVEMENTS.forEach((achievement) => {
    const li = document.createElement("li");
    li.className = "achievement-item";
    const unlocked = state.unlockedAchievements.has(achievement.id);
    if (!unlocked) {
      li.classList.add("locked");
    }
    const icon = document.createElement("span");
    icon.textContent = achievement.icon;
    const content = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = translate(achievement.titleKey);
    const description = document.createElement("p");
    description.textContent = translate(achievement.descriptionKey);
    description.style.margin = "4px 0 0";
    description.style.fontSize = "0.9rem";
    description.style.color = "var(--muted)";
    content.append(title, description);
    li.append(icon, content);
    elements.achievementList.append(li);
  });
}

function setupHintOverlay() {
  elements.hintOverlay.style.backgroundImage = `url(${state.currentPuzzle.image})`;
  elements.hintOverlay.hidden = true;
  elements.hintOverlay.classList.remove("visible");
}

function useHint() {
  if (!state.isPlaying || state.hintsRemaining <= 0) {
    playSound("error");
    return;
  }
  state.hintsRemaining -= 1;
  state.hintsUsed += 1;
  state.stats.totalHintsUsed += 1;
  elements.hintDisplay.textContent = translate("hintsDisplay", { count: state.hintsRemaining });
  elements.statsHints.textContent = String(state.stats.totalHintsUsed);
  showHintOverlay();
  playSound("hint");
}

function showHintOverlay() {
  elements.hintOverlay.hidden = false;
  requestAnimationFrame(() => {
    elements.hintOverlay.classList.add("visible");
  });
  setTimeout(() => {
    elements.hintOverlay.classList.remove("visible");
    setTimeout(() => {
      elements.hintOverlay.hidden = true;
    }, 400);
  }, 3000);
}

function updateFactPrompt() {
  if (!state.currentPuzzle || state.boardSlots.every((slot) => slot === null)) {
    elements.factText.textContent = translate("factPrompt");
  } else {
    elements.factText.textContent = translate("factPromptActive");
  }
}

function showFact() {
  if (!state.currentPuzzle) {
    playSound("error");
    return;
  }
  const facts = state.currentPuzzle.facts[state.language];
  if (!facts?.length) {
    return;
  }
  const fact = facts[Math.floor(Math.random() * facts.length)];
  state.stats.totalFacts += 1;
  state.factHistory.unshift({
    text: fact,
    time: new Date(),
  });
  if (state.factHistory.length > 8) {
    state.factHistory.pop();
  }
  updateFactHistory();
  updateAchievements();
  renderAchievements();
  openModal(translate("ecoFact"), fact);
  playSound("fact");
}

function updateFactHistory() {
  elements.factHistory.innerHTML = "";
  state.factHistory.forEach((entry) => {
    const li = document.createElement("li");
    const timeFormatter = new Intl.DateTimeFormat(state.language === "fr" ? "fr-FR" : "en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const stamp = timeFormatter.format(entry.time);
    const label = translate("factHistoryTime", { time: stamp });
    li.innerHTML = `<strong>${label}</strong><br>${entry.text}`;
    elements.factHistory.append(li);
  });
}

function openModal(title, body) {
  elements.modalTitle.textContent = title;
  elements.modalBody.textContent = body;
  elements.modalLayer.hidden = false;
}

function closeModal() {
  elements.modalLayer.hidden = true;
}

function showCompletionModal(elapsedSeconds) {
  const time = formatTime(elapsedSeconds);
  const hintsWord = state.hintsUsed === 1 ? translate("hintsWordSingular") : translate("hintsWordPlural");
  elements.completionSummary.textContent = translate("completionSummary", {
    time,
    count: state.hintsUsed,
    word: hintsWord,
  });
  elements.completionAchievements.innerHTML = "";

  ACHIEVEMENTS.forEach((achievement) => {
    if (state.unlockedAchievements.has(achievement.id)) {
      const li = document.createElement("li");
      li.className = "achievement-item";
      const icon = document.createElement("span");
      icon.textContent = achievement.icon;
      const content = document.createElement("div");
      const title = document.createElement("strong");
      title.textContent = translate(achievement.titleKey);
      const description = document.createElement("p");
      description.textContent = translate(achievement.descriptionKey);
      description.style.margin = "4px 0 0";
      description.style.fontSize = "0.9rem";
      description.style.color = "var(--muted)";
      content.append(title, description);
      li.append(icon, content);
      elements.completionAchievements.append(li);
    }
  });

  elements.completionLayer.hidden = false;
}

function goHome() {
  showView("home");
  stopTimer();
  state.isPlaying = false;
  state.currentPuzzle = null;
  state.boardSlots = [];
  state.pieces = [];
  state.pieceOrder = [];
  state.pieceLocations.clear();
  state.totalPieces = 0;
  state.hintsRemaining = MAX_HINTS;
  state.hintsUsed = 0;
  state.factHistory = [];
  elements.puzzleBoard.innerHTML = "";
  elements.piecePool.innerHTML = "";
  elements.progressFill.style.width = "0%";
  elements.progressFill.parentElement?.setAttribute("aria-valuenow", "0");
  elements.progressText.textContent = translate("progressPercent", { percent: 0 });
  elements.pieceDisplay.textContent = translate("piecesDisplay", {
    correct: 0,
    total: 0,
    word: translate("piecesUnitPlural"),
  });
  elements.hintDisplay.textContent = translate("hintsDisplay", { count: MAX_HINTS });
  elements.puzzleTitle.textContent = translate("puzzleHeading");
  elements.puzzleDescription.textContent = translate("puzzleIntro");
  updateFactPrompt();
  updateFactHistory();
}

function restartPuzzle() {
  if (!state.currentPuzzle) {
    return;
  }
  startPuzzle(state.currentPuzzle, state.difficultyKey);
}

function startTimer() {
  state.startTime = Date.now();
  updateTimerDisplay();
  state.timerId = setInterval(updateTimerDisplay, 1000);
}

function stopTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function getElapsedSeconds() {
  if (!state.startTime) {
    return 0;
  }
  return Math.floor((Date.now() - state.startTime) / 1000);
}

function updateTimerDisplay() {
  const time = formatTime(getElapsedSeconds());
  elements.timerDisplay.textContent = translate("timeDisplay", { time });
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function playSound(type) {
  try {
    const ctx = ensureAudioContext();
    const now = ctx.currentTime;
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    let frequency = 440;
    switch (type) {
      case "start":
        frequency = 660;
        break;
      case "grab":
        frequency = 520;
        break;
      case "drop":
        frequency = 360;
        break;
      case "hint":
        frequency = 780;
        break;
      case "fact":
        frequency = 500;
        break;
      case "complete":
        frequency = 880;
        break;
      case "error":
        frequency = 220;
        break;
      default:
        break;
    }

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, now);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    oscillator.connect(gain).connect(ctx.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.3);
  } catch (error) {
    // Audio might fail silently if the browser blocks it before interaction.
  }
}

function ensureAudioContext() {
  if (!state.audioContext) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) {
      throw new Error("AudioContext not supported");
    }
    state.audioContext = new Ctx();
  }
  return state.audioContext;
}

function toggleMusic() {
  state.musicEnabled = !state.musicEnabled;
  elements.musicToggle.setAttribute("aria-pressed", String(state.musicEnabled));
  const label = translate(state.musicEnabled ? "pauseMusic" : "playMusic");
  elements.musicToggle.textContent = label;
  elements.musicToggle.setAttribute("aria-label", label);
  if (state.musicEnabled) {
    startAmbientMusic();
  } else {
    stopAmbientMusic();
  }
}

function startAmbientMusic() {
  try {
    const ctx = ensureAudioContext();
    if (ctx.state === "suspended") {
      ctx.resume();
    }
    stopAmbientMusic();
    const masterGain = ctx.createGain();
    masterGain.gain.value = 0.04;
    masterGain.connect(ctx.destination);

    const createPad = (frequency) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = frequency;
      gain.gain.value = 0.0001;
      gain.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 2);
      osc.connect(gain).connect(masterGain);
      osc.start();
      return { osc, gain };
    };

    const chords = [createPad(220), createPad(275), createPad(330)];
    state.ambientNodes = { masterGain, chords };
  } catch (error) {
    state.musicEnabled = false;
    elements.musicToggle.setAttribute("aria-pressed", "false");
    elements.musicToggle.textContent = translate("playMusic");
  }
}

function stopAmbientMusic() {
  if (!state.ambientNodes || !state.audioContext) {
    return;
  }
  const ctx = state.audioContext;
  state.ambientNodes.chords.forEach(({ osc, gain }) => {
    gain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
    osc.stop(ctx.currentTime + 0.6);
  });
  state.ambientNodes.masterGain.disconnect();
  state.ambientNodes = null;
}

function attachEventListeners() {
  elements.languageSelect.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });

  elements.backButton.addEventListener("click", () => {
    goHome();
  });

  elements.restartButton.addEventListener("click", () => {
    restartPuzzle();
  });

  elements.hintButton.addEventListener("click", () => {
    useHint();
  });

  elements.factButton.addEventListener("click", () => {
    showFact();
  });

  elements.piecePool.addEventListener("dragover", (event) => {
    if (!state.currentPuzzle) {
      return;
    }
    event.preventDefault();
  });

  elements.piecePool.addEventListener("drop", (event) => {
    if (!state.currentPuzzle) {
      return;
    }
    event.preventDefault();
    const pieceId = event.dataTransfer.getData("text/plain");
    if (pieceId) {
      returnPieceToPool(pieceId);
    }
  });

  elements.modalClose.addEventListener("click", () => {
    closeModal();
  });

  elements.modalLayer.addEventListener("click", (event) => {
    if (event.target === elements.modalLayer) {
      closeModal();
    }
  });

  elements.celebrationClose.addEventListener("click", () => {
    elements.completionLayer.hidden = true;
    goHome();
  });

  elements.completionLayer.addEventListener("click", (event) => {
    if (event.target === elements.completionLayer) {
      elements.completionLayer.hidden = true;
      goHome();
    }
  });

  elements.musicToggle.addEventListener("click", () => {
    toggleMusic();
  });
}

function init() {
  applyTranslations();
  attachEventListeners();
  showView("home");
  updateStatsPanel();
}

document.addEventListener("DOMContentLoaded", init);

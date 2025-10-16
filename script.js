const TRANSLATIONS = {
  en: {
    siteTitle: "ECOLUD",
    tagline: "Assemble eco-friendly puzzles, learn planet-saving tips, and celebrate every win!",
    languageLabel: "Language",
    playMusic: "Play Music",
    pauseMusic: "Pause Music",
    chooseAdventure: "Choose Your Eco Mission",
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
    hintReminder: "Need help? Use a hint to peek at the finished art for a moment!",
    factPrompt: "Select a puzzle and press \"Eco Fact\" to learn something new!",
    factPromptActive: "Tap the Eco Fact button to discover a green tip!",
    factJournal: "Fact Journal",
    close: "Close",
    puzzleComplete: "Puzzle Complete!",
    chooseAnother: "Choose Another Puzzle",
    startPuzzle: "Start Puzzle",
    puzzleHeading: "Puzzle",
    puzzleIntro: "Assemble the pieces to reveal the eco scene.",
    photoAlt: "{title} photo",
    progressPercent: "{percent}% complete",
    piecesDisplay: "{correct} / {total} {word}",
    hintsDisplay: "Hints: {count}",
    timeDisplay: "Time: {time}",
    difficultyLabel: "Difficulty: {label}",
    piecesUnitSingular: "piece",
    piecesUnitPlural: "pieces",
    hintsWordSingular: "hint",
    hintsWordPlural: "hints",
    completionSummary: "You finished in {time} with {count} {word}!",
    celebrationDefaultTitle: "Great Work!",
    celebrationDefaultBody: "Keep solving puzzles to unlock more eco achievements.",
    factHistoryTime: "{time}",
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
    hintReminder: "Besoin d'aide ? Utilise un indice pour voir l'image finale quelques secondes !",
    factPrompt: "Choisis un puzzle et appuie sur « Éco-info » pour apprendre quelque chose de nouveau !",
    factPromptActive: "Appuie sur Éco-info pour découvrir une astuce verte !",
    factJournal: "Carnet d'infos",
    close: "Fermer",
    puzzleComplete: "Puzzle terminé !",
    chooseAnother: "Choisir un autre puzzle",
    startPuzzle: "Commencer le puzzle",
    puzzleHeading: "Puzzle",
    puzzleIntro: "Assemble les pièces pour révéler la scène écolo.",
    photoAlt: "{title}, photo écologique",
    progressPercent: "{percent} % terminé",
    piecesDisplay: "{correct} / {total} {word}",
    hintsDisplay: "Indices : {count}",
    timeDisplay: "Temps : {time}",
    difficultyLabel: "Difficulté : {label}",
    piecesUnitSingular: "pièce",
    piecesUnitPlural: "pièces",
    hintsWordSingular: "indice",
    hintsWordPlural: "indices",
    completionSummary: "Tu as terminé en {time} avec {count} {word} !",
    celebrationDefaultTitle: "Bravo !",
    celebrationDefaultBody: "Continue les puzzles pour gagner encore plus de trophées écolos.",
    factHistoryTime: "{time}",
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

const LANGUAGE_ORDER = ["en", "fr"];

const LOCALE_MAP = {
  en: "en-US",
  fr: "fr-FR",
};

const PUZZLE_DATA = [
  {
    id: "forest",
    accent: "#3bb273",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
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
    difficulties: {
      easy: { rows: 2, cols: 5 },
      medium: { rows: 4, cols: 5 },
      hard: { rows: 5, cols: 6 },
    },
  },
  {
    id: "ocean",
    accent: "#0099f7",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
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
    difficulties: {
      easy: { rows: 2, cols: 5 },
      medium: { rows: 4, cols: 5 },
      hard: { rows: 5, cols: 6 },
    },
  },
  {
    id: "recycling",
    accent: "#00a896",
    image:
      "https://images.unsplash.com/photo-1528323273322-d81458248d40?auto=format&fit=crop&w=1200&q=80",
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
    difficulties: {
      easy: { rows: 2, cols: 5 },
      medium: { rows: 4, cols: 5 },
      hard: { rows: 5, cols: 6 },
    },
  },
  {
    id: "renewable",
    accent: "#ff6f3c",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
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
    difficulties: {
      easy: { rows: 2, cols: 5 },
      medium: { rows: 4, cols: 5 },
      hard: { rows: 5, cols: 6 },
    },
  },
];

const ACHIEVEMENTS = [
  {
    id: "first-completion",
    titleKey: "achievement.first.title",
    descriptionKey: "achievement.first.description",
    icon: "🌱",
    condition: (stats) => stats.totalCompleted >= 1,
  },
  {
    id: "speedster",
    titleKey: "achievement.speed.title",
    descriptionKey: "achievement.speed.description",
    icon: "⚡",
    condition: (stats) => stats.lastCompletionTime > 0 && stats.lastCompletionTime <= 240,
  },
  {
    id: "hint-free",
    titleKey: "achievement.hintfree.title",
    descriptionKey: "achievement.hintfree.description",
    icon: "🧠",
    condition: (stats) => stats.lastHintsUsed === 0 && stats.lastCompletionTime > 0,
  },
  {
    id: "collector",
    titleKey: "achievement.collector.title",
    descriptionKey: "achievement.collector.description",
    icon: "🌍",
    condition: (stats) => stats.uniqueThemes.size >= 3,
  },
  {
    id: "fact-fan",
    titleKey: "achievement.factfan.title",
    descriptionKey: "achievement.factfan.description",
    icon: "📚",
    condition: (stats) => stats.totalFacts >= 10,
  },
];

const state = {
  language: LANGUAGE_ORDER[0],
  currentPuzzle: null,
  difficultyKey: null,
  rows: 0,
  cols: 0,
  totalPieces: 0,
  startTime: 0,
  timerInterval: null,
  hintsRemaining: 3,
  hintsUsed: 0,
  moves: 0,
  isPlaying: false,
  pieces: [],
  stats: {
    totalCompleted: 0,
    uniqueThemes: new Set(),
    lastCompletionTime: 0,
    lastHintsUsed: 0,
    totalHintsUsed: 0,
    totalFacts: 0,
  },
  unlocked: new Set(),
  factHistory: [],
  lastCelebrationUnlocks: [],
  backgroundMusic: null,
  musicEnabled: false,
  audioContext: null,
};

const elements = {
  puzzleList: document.getElementById("puzzle-list"),
  puzzleTemplate: document.getElementById("puzzle-card-template"),
  homeView: document.getElementById("home-view"),
  gameView: document.getElementById("game-view"),
  backButton: document.getElementById("back-button"),
  restartButton: document.getElementById("restart-button"),
  hintButton: document.getElementById("hint-button"),
  hintDisplay: document.getElementById("hint-display"),
  factButton: document.getElementById("fact-button"),
  timerDisplay: document.getElementById("timer-display"),
  pieceDisplay: document.getElementById("piece-display"),
  progressFill: document.getElementById("progress-fill"),
  progressText: document.getElementById("progress-text"),
  puzzleBoard: document.getElementById("puzzle-board"),
  puzzleTitle: document.getElementById("puzzle-title"),
  puzzleDescription: document.getElementById("puzzle-description"),
  difficultyLabel: document.getElementById("difficulty-label"),
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
  achievementList: document.getElementById("achievement-list"),
  statsCompleted: document.getElementById("stats-completed"),
  statsThemes: document.getElementById("stats-themes"),
  statsHints: document.getElementById("stats-hints"),
  hintOverlay: document.getElementById("hint-overlay"),
  musicToggle: document.getElementById("music-toggle"),
  languageSelect: document.getElementById("language-select"),
};

function getNestedTranslation(lang, key) {
  return key.split(".").reduce((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) {
      return acc[part];
    }
    return undefined;
  }, TRANSLATIONS[lang]);
}

function translate(key, vars = {}) {
  const langValue = getNestedTranslation(state.language, key);
  const fallbackValue = getNestedTranslation(LANGUAGE_ORDER[0], key);
  const template = langValue ?? fallbackValue ?? key;
  if (typeof template !== "string") {
    return template;
  }
  return template.replace(/\{(\w+)\}/g, (_, token) => {
    if (Object.prototype.hasOwnProperty.call(vars, token)) {
      return String(vars[token]);
    }
    return `{${token}}`;
  });
}

function getPuzzleName(puzzle) {
  if (!puzzle) return "";
  if (typeof puzzle.name === "string") {
    return puzzle.name;
  }
  return puzzle.name[state.language] ?? puzzle.name[LANGUAGE_ORDER[0]] ?? "";
}

function getPuzzleDescription(puzzle) {
  if (!puzzle) return "";
  if (typeof puzzle.description === "string") {
    return puzzle.description;
  }
  return puzzle.description[state.language] ?? puzzle.description[LANGUAGE_ORDER[0]] ?? "";
}

function getPuzzleFacts(puzzle) {
  if (!puzzle) return [];
  const facts = puzzle.facts?.[state.language] ?? puzzle.facts?.[LANGUAGE_ORDER[0]] ?? [];
  return Array.isArray(facts) ? facts : [];
}

function getPuzzleById(id) {
  return PUZZLE_DATA.find((item) => item.id === id) ?? null;
}

function getPiecesWord(count) {
  return translate(count === 1 ? "piecesUnitSingular" : "piecesUnitPlural");
}

function getHintsWord(count) {
  return translate(count === 1 ? "hintsWordSingular" : "hintsWordPlural");
}

function getCorrectPiecesCount() {
  let correct = 0;
  elements.puzzleBoard.querySelectorAll(".drop-zone").forEach((zone) => {
    const piece = zone.querySelector(".puzzle-piece");
    if (piece && zone.dataset.index === piece.dataset.index) {
      correct += 1;
    }
  });
  return correct;
}

function populateLanguageSelect() {
  elements.languageSelect.innerHTML = "";
  LANGUAGE_ORDER.forEach((code) => {
    const option = document.createElement("option");
    option.value = code;
    const nativeName = TRANSLATIONS[code]?.languageNames?.[code] ?? code;
    option.textContent = nativeName;
    elements.languageSelect.appendChild(option);
  });
  elements.languageSelect.value = state.language;
  elements.languageSelect.setAttribute("aria-label", translate("languageLabel"));
}

function setLanguage(code) {
  const next = LANGUAGE_ORDER.includes(code) ? code : LANGUAGE_ORDER[0];
  state.language = next;
  document.documentElement.lang = next;
  if (elements.languageSelect.value !== next) {
    elements.languageSelect.value = next;
  }
  applyTranslations();
}

function applyTranslations() {
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (!key) return;
    if (el === elements.musicToggle) {
      return;
    }
    el.textContent = translate(key);
  });

  const musicLabel = state.musicEnabled ? translate("pauseMusic") : translate("playMusic");
  elements.musicToggle.textContent = musicLabel;
  elements.musicToggle.setAttribute("aria-label", musicLabel);

  elements.languageSelect.setAttribute("aria-label", translate("languageLabel"));

  renderPuzzleCards();
  renderAchievements();
  renderFactHistory();

  if (state.currentPuzzle && state.isPlaying) {
    elements.puzzleTitle.textContent = getPuzzleName(state.currentPuzzle);
    elements.puzzleDescription.textContent = getPuzzleDescription(state.currentPuzzle);
    elements.difficultyLabel.textContent = translate("difficultyLabel", {
      label: translate(`difficulties.${state.difficultyKey}`),
    });
    const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
    elements.timerDisplay.textContent = translate("timeDisplay", {
      time: formatTime(elapsed),
    });
    const correct = getCorrectPiecesCount();
    updatePieceDisplay(correct);
    const percent = state.totalPieces ? (correct / state.totalPieces) * 100 : 0;
    updateProgress(percent);
    updateHintDisplay();
    elements.factText.textContent = translate("factPromptActive");
  } else {
    elements.timerDisplay.textContent = translate("timeDisplay", { time: "00:00" });
    elements.pieceDisplay.textContent = translate("piecesDisplay", {
      correct: 0,
      total: 0,
      word: getPiecesWord(0),
    });
    elements.progressFill.style.width = "0%";
    elements.progressFill.parentElement.setAttribute("aria-valuenow", "0");
    elements.progressText.textContent = translate("progressPercent", { percent: 0 });
    updateHintDisplay();
    elements.factText.textContent = translate("factPrompt");
    elements.puzzleTitle.textContent = translate("puzzleHeading");
    elements.puzzleDescription.textContent = translate("puzzleIntro");
    elements.difficultyLabel.textContent = translate("difficultyLabel", {
      label: translate("difficulties.easy"),
    });
  }

  if (!elements.completionLayer.hidden) {
    const elapsed = state.stats.lastCompletionTime;
    const word = getHintsWord(state.stats.lastHintsUsed);
    elements.completionSummary.textContent = translate("completionSummary", {
      time: formatTime(elapsed),
      count: state.stats.lastHintsUsed,
      word,
    });
    elements.completionAchievements.innerHTML = "";
    if (state.lastCelebrationUnlocks.length) {
      state.lastCelebrationUnlocks.forEach((id) => {
        const achievement = ACHIEVEMENTS.find((item) => item.id === id);
        if (!achievement) return;
        const li = document.createElement("li");
        li.className = "achievement-item unlocked";
        li.innerHTML = `<span class="achievement-icon">${achievement.icon}</span>
          <div class="achievement-text">
            <strong>${translate(achievement.titleKey)}</strong><br />
            <span>${translate(achievement.descriptionKey)}</span>
          </div>`;
        elements.completionAchievements.appendChild(li);
      });
    } else {
      const li = document.createElement("li");
      li.className = "achievement-item";
      li.innerHTML = `<span class="achievement-icon">🎉</span>
        <div class="achievement-text">
          <strong>${translate("celebrationDefaultTitle")}</strong><br />
          <span>${translate("celebrationDefaultBody")}</span>
        </div>`;
      elements.completionAchievements.appendChild(li);
    }
  }
}

function renderPuzzleCards() {
  elements.puzzleList.innerHTML = "";
  PUZZLE_DATA.forEach((puzzle) => {
    const fragment = elements.puzzleTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".puzzle-card");
    const image = fragment.querySelector(".puzzle-image");
    const title = fragment.querySelector("h3");
    const description = fragment.querySelector(".puzzle-description");
    const difficultyGroup = fragment.querySelector(".difficulty-group");
    const startButton = fragment.querySelector(".start-button");

    card.dataset.id = puzzle.id;
    image.src = puzzle.image;
    const puzzleName = getPuzzleName(puzzle);
    image.alt = translate("photoAlt", { title: puzzleName });
    title.textContent = puzzleName;
    description.textContent = getPuzzleDescription(puzzle);
    startButton.textContent = translate("startPuzzle");

    difficultyGroup.innerHTML = "";
    Object.entries(puzzle.difficulties).forEach(([key, diff], index) => {
      const label = document.createElement("label");
      label.className = "difficulty-option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `${puzzle.id}-difficulty`;
      input.value = key;
      input.required = true;
      if (index === 0) {
        input.checked = true;
      }

      const span = document.createElement("span");
      const pieces = diff.rows * diff.cols;
      const piecesWord = getPiecesWord(pieces);
      span.innerHTML = `<strong>${translate(`difficulties.${key}`)}</strong> · ${pieces} ${piecesWord}`;

      label.append(input, span);
      difficultyGroup.appendChild(label);
    });

    startButton.addEventListener("click", () => {
      const selected = difficultyGroup.querySelector("input:checked");
      if (!selected) return;
      startPuzzle(puzzle.id, selected.value);
    });

    elements.puzzleList.appendChild(fragment);
  });
}

function startPuzzle(puzzleId, difficultyKey) {
  const puzzle = PUZZLE_DATA.find((item) => item.id === puzzleId);
  if (!puzzle) return;

  state.currentPuzzle = puzzle;
  state.difficultyKey = difficultyKey;
  const config = puzzle.difficulties[difficultyKey];
  if (!config) return;
  state.rows = config.rows;
  state.cols = config.cols;
  state.totalPieces = config.rows * config.cols;
  state.hintsRemaining = 3;
  state.hintsUsed = 0;
  state.moves = 0;
  state.pieces = [];
  state.isPlaying = true;

  updateHintDisplay();
  updatePieceDisplay();
  updateProgress(0);

  elements.puzzleBoard.style.setProperty("--rows", state.rows);
  elements.puzzleBoard.style.setProperty("--cols", state.cols);
  elements.hintOverlay.style.backgroundImage = `url(${puzzle.image})`;
  elements.hintOverlay.classList.remove("visible");
  elements.hintOverlay.hidden = true;

  elements.puzzleTitle.textContent = getPuzzleName(puzzle);
  elements.puzzleDescription.textContent = getPuzzleDescription(puzzle);
  elements.difficultyLabel.textContent = translate("difficultyLabel", {
    label: translate(`difficulties.${difficultyKey}`),
  });
  elements.factText.textContent = translate("factPromptActive");
  elements.puzzleBoard.innerHTML = "";

  const indexes = Array.from({ length: state.totalPieces }, (_, index) => index);
  const shuffled = shuffleArray([...indexes]);

  indexes.forEach((correctIndex) => {
    const zone = document.createElement("div");
    zone.className = "drop-zone";
    zone.dataset.index = String(correctIndex);

    const piece = document.createElement("div");
    piece.className = "puzzle-piece";
    piece.draggable = true;
    piece.dataset.index = String(correctIndex);
    piece.style.backgroundImage = `url(${puzzle.image})`;
    piece.style.setProperty("--rows", state.rows);
    piece.style.setProperty("--cols", state.cols);

    const col = correctIndex % state.cols;
    const row = Math.floor(correctIndex / state.cols);
    piece.style.backgroundSize = `${state.cols * 100}% ${state.rows * 100}%`;
    piece.style.backgroundPosition = `${(col / (state.cols - 1 || 1)) * 100}% ${(row / (state.rows - 1 || 1)) * 100}%`;

    zone.appendChild(piece);
    elements.puzzleBoard.appendChild(zone);
  });

  const zones = Array.from(elements.puzzleBoard.querySelectorAll(".drop-zone"));
  shuffled.forEach((pieceIndex, i) => {
    const zone = zones[i];
    const correctZone = zones[pieceIndex];
    const piece = correctZone.querySelector(".puzzle-piece");
    if (zone && piece) {
      zone.appendChild(piece);
    }
  });

  attachDragHandlers();
  updateBoardStatus();
  switchView(elements.gameView);
  startTimer();
  updateStatsPanel();
  playSound("start");
}

function attachDragHandlers() {
  let draggedPiece = null;
  let sourceZone = null;

  elements.puzzleBoard.querySelectorAll(".puzzle-piece").forEach((piece) => {
    piece.addEventListener("dragstart", (event) => {
      draggedPiece = piece;
      sourceZone = piece.parentElement;
      piece.classList.add("dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", piece.dataset.index);
      playSound("grab");
    });

    piece.addEventListener("dragend", () => {
      piece.classList.remove("dragging");
      draggedPiece = null;
      sourceZone = null;
    });
  });

  elements.puzzleBoard.querySelectorAll(".drop-zone").forEach((zone) => {
    zone.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    });

    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      if (!draggedPiece || !sourceZone) return;

      const targetPiece = zone.querySelector(".puzzle-piece");
      if (targetPiece && targetPiece !== draggedPiece) {
        sourceZone.appendChild(targetPiece);
      }
      zone.appendChild(draggedPiece);
      state.moves += 1;
      updateBoardStatus();
      playSound("drop");
    });
  });
}

function updateBoardStatus() {
  let correct = 0;
  elements.puzzleBoard.querySelectorAll(".drop-zone").forEach((zone) => {
    const piece = zone.querySelector(".puzzle-piece");
    if (!piece) return;
    const isCorrect = zone.dataset.index === piece.dataset.index;
    piece.classList.toggle("correct", isCorrect);
    if (isCorrect) correct += 1;
  });
  updateProgress((correct / state.totalPieces) * 100);
  updatePieceDisplay(correct);
  if (correct === state.totalPieces) {
    handleCompletion();
  }
}

function updateProgress(percent) {
  const rounded = Math.round(percent);
  elements.progressFill.style.width = `${rounded}%`;
  elements.progressFill.parentElement.setAttribute("aria-valuenow", String(rounded));
  elements.progressText.textContent = translate("progressPercent", { percent: rounded });
}

function updatePieceDisplay(correctCount = 0) {
  const piecesWord = getPiecesWord(state.totalPieces);
  elements.pieceDisplay.textContent = translate("piecesDisplay", {
    correct: correctCount,
    total: state.totalPieces,
    word: piecesWord,
  });
}

function updateHintDisplay() {
  elements.hintDisplay.textContent = translate("hintsDisplay", {
    count: state.hintsRemaining,
  });
}

function startTimer() {
  state.startTime = Date.now();
  clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
    elements.timerDisplay.textContent = translate("timeDisplay", {
      time: formatTime(elapsed),
    });
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timerInterval);
  state.timerInterval = null;
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

function useHint() {
  if (!state.isPlaying || state.hintsRemaining <= 0) {
    playSound("error");
    return;
  }
  state.hintsRemaining -= 1;
  state.hintsUsed += 1;
  state.stats.totalHintsUsed += 1;
  updateHintDisplay();
  elements.hintOverlay.hidden = false;
  requestAnimationFrame(() => elements.hintOverlay.classList.add("visible"));
  setTimeout(() => {
    elements.hintOverlay.classList.remove("visible");
    setTimeout(() => {
      elements.hintOverlay.hidden = true;
    }, 400);
  }, 4000);
  playSound("hint");
  updateStatsPanel();
}

function showFact() {
  if (!state.currentPuzzle) return;
  const facts = getPuzzleFacts(state.currentPuzzle);
  if (!facts.length) return;
  const fact = pickRandom(facts);
  state.stats.totalFacts += 1;
  state.factHistory.unshift({ fact, puzzleId: state.currentPuzzle.id, time: new Date() });
  state.factHistory = state.factHistory.slice(0, 20);
  renderFactHistory();
  elements.factText.textContent = fact;
  openModal(translate("ecoFact"), fact);
  updateStatsPanel();
  playSound("fact");
}

function renderFactHistory() {
  elements.factHistory.innerHTML = "";
  state.factHistory.forEach((entry) => {
    const li = document.createElement("li");
    const puzzle = getPuzzleById(entry.puzzleId);
    const title = document.createElement("strong");
    title.textContent = getPuzzleName(puzzle);

    const locale = LOCALE_MAP[state.language] ?? LOCALE_MAP[LANGUAGE_ORDER[0]];
    const time = entry.time.toLocaleTimeString(locale ? [locale] : undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });

    const meta = document.createElement("span");
    meta.className = "fact-meta";
    meta.textContent = ` · ${translate("factHistoryTime", { time })}`;

    const header = document.createElement("div");
    header.className = "fact-header";
    header.append(title, meta);

    const body = document.createElement("p");
    body.textContent = entry.fact;

    li.append(header, body);
    elements.factHistory.appendChild(li);
  });
}

function handleCompletion() {
  if (!state.isPlaying) return;
  state.isPlaying = false;
  stopTimer();
  const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
  state.stats.lastCompletionTime = elapsed;
  state.stats.lastHintsUsed = state.hintsUsed;
  state.stats.totalCompleted += 1;
  state.stats.uniqueThemes.add(state.currentPuzzle.id);
  updateStatsPanel();
  const unlockedNow = evaluateAchievements();
  openCelebration(elapsed, unlockedNow);
  playSound("complete");
}

function evaluateAchievements() {
  const newlyUnlocked = [];
  ACHIEVEMENTS.forEach((achievement) => {
    if (!state.unlocked.has(achievement.id) && achievement.condition(state.stats)) {
      state.unlocked.add(achievement.id);
      newlyUnlocked.push(achievement);
    }
  });
  renderAchievements();
  return newlyUnlocked;
}

function renderAchievements() {
  elements.achievementList.innerHTML = "";
  ACHIEVEMENTS.forEach((achievement) => {
    const li = document.createElement("li");
    li.className = "achievement-item";
    if (state.unlocked.has(achievement.id)) {
      li.classList.add("unlocked");
    }
    const title = translate(achievement.titleKey);
    const description = translate(achievement.descriptionKey);
    li.innerHTML = `<span class="achievement-icon">${achievement.icon}</span>
      <div class="achievement-text">
        <strong>${title}</strong><br />
        <span>${description}</span>
      </div>`;
    elements.achievementList.appendChild(li);
  });
}

function openCelebration(elapsed, unlockedAchievements) {
  const timeText = formatTime(elapsed);
  const word = getHintsWord(state.hintsUsed);
  elements.completionSummary.textContent = translate("completionSummary", {
    time: timeText,
    count: state.hintsUsed,
    word,
  });
  elements.completionAchievements.innerHTML = "";
  state.lastCelebrationUnlocks = unlockedAchievements.map((ach) => ach.id);
  if (unlockedAchievements.length) {
    unlockedAchievements.forEach((ach) => {
      const title = translate(ach.titleKey);
      const description = translate(ach.descriptionKey);
      const li = document.createElement("li");
      li.className = "achievement-item unlocked";
      li.innerHTML = `<span class="achievement-icon">${ach.icon}</span>
        <div class="achievement-text">
          <strong>${title}</strong><br />
          <span>${description}</span>
        </div>`;
      elements.completionAchievements.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.className = "achievement-item";
    li.innerHTML = `<span class="achievement-icon">🎉</span>
      <div class="achievement-text">
        <strong>${translate("celebrationDefaultTitle")}</strong><br />
        <span>${translate("celebrationDefaultBody")}</span>
      </div>`;
    elements.completionAchievements.appendChild(li);
    state.lastCelebrationUnlocks = [];
  }
  elements.completionLayer.hidden = false;
}

function openModal(title, body) {
  elements.modalTitle.textContent = title;
  elements.modalBody.textContent = body;
  elements.modalLayer.hidden = false;
}

function closeModal() {
  elements.modalLayer.hidden = true;
}

function switchView(view) {
  elements.homeView.hidden = view !== elements.homeView;
  elements.gameView.hidden = view !== elements.gameView;
}

function restartPuzzle() {
  if (!state.currentPuzzle || !state.difficultyKey) return;
  startPuzzle(state.currentPuzzle.id, state.difficultyKey);
}

function goHome() {
  stopTimer();
  state.isPlaying = false;
  state.hintsRemaining = 3;
  state.hintsUsed = 0;
  state.totalPieces = 0;
  switchView(elements.homeView);
  elements.timerDisplay.textContent = translate("timeDisplay", { time: "00:00" });
  elements.pieceDisplay.textContent = translate("piecesDisplay", {
    correct: 0,
    total: 0,
    word: getPiecesWord(0),
  });
  elements.progressFill.style.width = "0%";
  elements.progressFill.parentElement.setAttribute("aria-valuenow", "0");
  elements.progressText.textContent = translate("progressPercent", { percent: 0 });
  elements.factText.textContent = translate("factPrompt");
  elements.puzzleTitle.textContent = translate("puzzleHeading");
  elements.puzzleDescription.textContent = translate("puzzleIntro");
  elements.difficultyLabel.textContent = translate("difficultyLabel", {
    label: translate("difficulties.easy"),
  });
  updateHintDisplay();
}

function updateStatsPanel() {
  elements.statsCompleted.textContent = String(state.stats.totalCompleted);
  elements.statsThemes.textContent = String(state.stats.uniqueThemes.size);
  elements.statsHints.textContent = String(state.stats.totalHintsUsed);
  renderAchievements();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function playSound(type) {
  try {
    const ctx = ensureAudioContext();
    const now = ctx.currentTime;
    const duration = 0.25;
    let frequency = 440;
    let gain = 0.08;

    switch (type) {
      case "start":
        frequency = 620;
        break;
      case "grab":
        frequency = 520;
        gain = 0.06;
        break;
      case "drop":
        frequency = 380;
        break;
      case "hint":
        frequency = 760;
        gain = 0.1;
        break;
      case "fact":
        frequency = 480;
        break;
      case "complete":
        frequency = 820;
        gain = 0.12;
        break;
      case "error":
        frequency = 220;
        break;
      default:
        break;
    }

    const oscillator = ctx.createOscillator();
    const envelope = ctx.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, now);
    envelope.gain.setValueAtTime(gain, now);
    envelope.gain.exponentialRampToValueAtTime(0.001, now + duration);
    oscillator.connect(envelope).connect(ctx.destination);
    oscillator.start(now);
    oscillator.stop(now + duration);
  } catch (error) {
    console.warn("Audio playback skipped", error);
  }
}

function ensureAudioContext() {
  if (!state.audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    state.audioContext = new AudioContextClass();
  }
  return state.audioContext;
}

function toggleMusic() {
  state.musicEnabled = !state.musicEnabled;
  const label = state.musicEnabled ? translate("pauseMusic") : translate("playMusic");
  elements.musicToggle.textContent = label;
  elements.musicToggle.setAttribute("aria-label", label);
  elements.musicToggle.setAttribute("aria-pressed", state.musicEnabled.toString());
  if (state.musicEnabled) {
    const ctx = ensureAudioContext();
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }
    startBackgroundMusic();
  } else {
    stopBackgroundMusic();
  }
}

function startBackgroundMusic() {
  const ctx = ensureAudioContext();
  stopBackgroundMusic();
  const masterGain = ctx.createGain();
  masterGain.gain.value = 0.03;
  masterGain.connect(ctx.destination);

  const createPad = (frequency) => {
    const osc = ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.value = frequency;
    const gain = ctx.createGain();
    gain.gain.value = 0.0001;
    gain.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 2);
    osc.connect(gain).connect(masterGain);
    osc.start();
    return { osc, gain };
  };

  const chords = [
    createPad(220),
    createPad(275),
    createPad(330),
  ];

  state.backgroundMusic = { masterGain, chords };
}

function stopBackgroundMusic() {
  if (state.backgroundMusic) {
    state.backgroundMusic.chords.forEach(({ osc, gain }) => {
      gain.gain.linearRampToValueAtTime(0.0001, ensureAudioContext().currentTime + 0.5);
      osc.stop(ensureAudioContext().currentTime + 0.6);
    });
    state.backgroundMusic.masterGain.disconnect();
    state.backgroundMusic = null;
  }
}

function setupEventListeners() {
  elements.backButton.addEventListener("click", goHome);
  elements.restartButton.addEventListener("click", restartPuzzle);
  elements.hintButton.addEventListener("click", useHint);
  elements.factButton.addEventListener("click", showFact);
  elements.modalClose.addEventListener("click", closeModal);
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
  elements.languageSelect.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });
}

function init() {
  populateLanguageSelect();
  setupEventListeners();
  applyTranslations();
  goHome();
}

document.addEventListener("DOMContentLoaded", init);

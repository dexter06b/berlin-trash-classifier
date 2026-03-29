const ROUND_SIZE = 5;
const ANSWER_KEYS = ["paper", "packaging", "bio", "residual"];

function createInitialProgress(progress) {
  return {
    roundsCompleted: progress?.roundsCompleted ?? 0,
    correctAnswers: progress?.correctAnswers ?? 0,
    questionsAnswered: progress?.questionsAnswered ?? 0
  };
}

function selectRoundItems(items) {
  const eligible = items.filter((item) => item.active && ANSWER_KEYS.includes(item.primary_outcome));
  return eligible.slice(0, Math.min(ROUND_SIZE, eligible.length));
}

export function createQuizState(items, progress) {
  const roundItems = selectRoundItems(items);

  return {
    items: roundItems,
    progress: createInitialProgress(progress),
    currentIndex: 0,
    roundCorrect: 0,
    answered: false,
    selectedOutcome: null,
    status: roundItems.length ? "ready" : "empty"
  };
}

export function getAnswerOptions(outcomes) {
  return ANSWER_KEYS.map((key) => outcomes.find((outcome) => outcome.key === key)).filter(Boolean);
}

export function getCurrentItem(state) {
  return state.items[state.currentIndex] ?? null;
}

export function getProgressPercent(state) {
  if (!state.items.length) return 0;
  return ((state.currentIndex + 1) / state.items.length) * 100;
}

export function submitAnswer(state, outcomeKey) {
  const item = getCurrentItem(state);
  if (!item || state.answered) return state;

  state.answered = true;
  state.selectedOutcome = outcomeKey;
  state.progress.questionsAnswered += 1;

  if (item.primary_outcome === outcomeKey) {
    state.roundCorrect += 1;
    state.progress.correctAnswers += 1;
  }

  return state;
}

export function advanceQuiz(state) {
  if (!state.answered) return state;

  const nextIndex = state.currentIndex + 1;
  if (nextIndex >= state.items.length) {
    state.status = "complete";
    state.progress.roundsCompleted += 1;
    return state;
  }

  state.currentIndex = nextIndex;
  state.answered = false;
  state.selectedOutcome = null;
  return state;
}

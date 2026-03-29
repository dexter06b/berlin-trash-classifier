const STORAGE_KEY = "berlin-trash-classifier-progress";

const DEFAULT_PROGRESS = {
  roundsCompleted: 0,
  correctAnswers: 0,
  questionsAnswered: 0
};

export function readProgress() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? { ...DEFAULT_PROGRESS, ...JSON.parse(raw) } : { ...DEFAULT_PROGRESS };
  } catch {
    return { ...DEFAULT_PROGRESS };
  }
}

export function writeProgress(progress) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Ignore storage failures for MVP scaffold.
  }
}

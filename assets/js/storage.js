const STORAGE_KEY = "berlin-trash-classifier-progress";

export function readProgress() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { roundsCompleted: 0, correctAnswers: 0 };
  } catch {
    return { roundsCompleted: 0, correctAnswers: 0 };
  }
}

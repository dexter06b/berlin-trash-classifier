export function createQuizState(items, progress) {
  return {
    items,
    progress,
    status: "preview"
  };
}

import { loadDisposalItems } from "./data-loader.js";
import { readProgress } from "./storage.js";
import { createQuizState } from "./quiz.js";

async function init() {
  const items = await loadDisposalItems();
  const progress = readProgress();
  createQuizState(items, progress);
}

init().catch((error) => {
  console.error("Failed to initialize app shell", error);
});

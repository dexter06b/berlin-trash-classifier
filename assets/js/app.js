import { loadCatalog } from "./data-loader.js";
import { readProgress, writeProgress } from "./storage.js";
import {
  advanceQuiz,
  createQuizState,
  getAnswerOptions,
  getCurrentItem,
  getProgressPercent,
  submitAnswer
} from "./quiz.js";

const ANSWER_TILE_CLASS = {
  paper: "answer-tile--paper",
  packaging: "answer-tile--packaging",
  bio: "answer-tile--bio",
  residual: "answer-tile--residual"
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getOutcomeBadgeClass(outcomeKey) {
  return ANSWER_TILE_CLASS[outcomeKey]?.replace("answer-tile", "badge") || "badge--residual";
}

function formatOutcomeLabel(outcome) {
  if (!outcome) return "Unknown";
  return outcome.label_de ? `${outcome.label_en} (${outcome.label_de})` : outcome.label_en;
}

function updateSummary(state) {
  document.querySelector("#progress-summary").textContent = `${state.progress.roundsCompleted} rounds · ${state.progress.correctAnswers} correct`;
  document.querySelector("#score-pill").textContent = `Points ${state.roundCorrect * 10}`;
}

function renderCompleteState(state) {
  document.querySelector("#question-counter").textContent = `${state.items.length} / ${state.items.length}`;
  document.querySelector("#round-label").textContent = "Round complete";
  document.querySelector("#progress-fill").style.width = "100%";
  document.querySelector("#quiz-title").textContent = `Round complete — ${state.roundCorrect}/${state.items.length}`;
  document.querySelector("#item-caption").textContent = "Nice. You can replay by refreshing or move on to the next issue.";
  document.querySelector("#item-hint").textContent = "You just completed the current learning round.";
  document.querySelector("#answer-grid").innerHTML = '<a class="button button--primary" href="#quiz-preview">Great job</a>';

  const panel = document.querySelector("#feedback-panel");
  panel.hidden = false;
  panel.className = "feedback-panel feedback-panel--correct";
  panel.innerHTML = `<strong>Score</strong><p>You earned ${state.roundCorrect * 10} points this round.</p>`;
}

function renderQuestion(state, catalog) {
  if (state.status === "complete") {
    renderCompleteState(state);
    return;
  }

  const item = getCurrentItem(state);
  if (!item) return;

  const currentNumber = state.currentIndex + 1;
  document.querySelector("#question-counter").textContent = `Question ${currentNumber} of ${state.items.length}`;
  document.querySelector("#round-label").textContent = state.answered ? "Answer reviewed" : `${Math.round(getProgressPercent(state))}% complete`;
  document.querySelector("#progress-fill").style.width = `${getProgressPercent(state)}%`;
  document.querySelector("#quiz-title").textContent = item.question_prompt_en;
  document.querySelector("#item-caption").textContent = item.name_en;
  document.querySelector("#item-hint").textContent = item.source_note || "Choose the best Berlin disposal path.";
  updateSummary(state);

  const answerGrid = document.querySelector("#answer-grid");
  const feedbackPanel = document.querySelector("#feedback-panel");
  const options = getAnswerOptions(catalog.outcomes);

  if (!state.answered) {
    answerGrid.innerHTML = options
      .map(
        (option) => `
          <button class="answer-tile ${ANSWER_TILE_CLASS[option.key] ?? ""}" type="button" data-outcome-key="${option.key}">
            <span class="answer-tile__label">${escapeHtml(formatOutcomeLabel(option))}</span>
            <span class="answer-tile__hint">${escapeHtml(option.short_description_en)}</span>
          </button>
        `
      )
      .join("");

    answerGrid.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        submitAnswer(state, button.dataset.outcomeKey);
        writeProgress(state.progress);
        renderQuestion(state, catalog);
      });
    });

    feedbackPanel.hidden = true;
    feedbackPanel.innerHTML = "";
    return;
  }

  const outcome = catalog.outcomes.find((entry) => entry.key === item.primary_outcome);
  const correct = item.primary_outcome === state.selectedOutcome;

  answerGrid.innerHTML = '<button id="next-question" class="button button--primary" type="button">Next question</button>';
  document.querySelector("#next-question").addEventListener("click", () => {
    advanceQuiz(state);
    writeProgress(state.progress);
    renderQuestion(state, catalog);
  });

  feedbackPanel.hidden = false;
  feedbackPanel.className = `feedback-panel ${correct ? "feedback-panel--correct" : "feedback-panel--wrong"}`;
  feedbackPanel.innerHTML = `
    <strong>${correct ? "Correct!" : "Not quite"}</strong>
    <p>${escapeHtml(item.explanation_en)}</p>
    <p><span class="badge ${getOutcomeBadgeClass(item.primary_outcome)}">${escapeHtml(formatOutcomeLabel(outcome))}</span></p>
  `;
}

async function init() {
  const catalog = await loadCatalog();
  const progress = readProgress();
  const state = createQuizState(catalog.items, progress);

  if (state.status === "empty") {
    document.querySelector("#quiz-title").textContent = "No quiz items available yet";
    document.querySelector("#item-caption").textContent = "Add more active disposal items to start the quiz.";
    document.querySelector("#item-hint").textContent = "The quiz shell is ready for more content.";
    document.querySelector("#answer-grid").innerHTML = "";
    return;
  }

  renderQuestion(state, catalog);
}

init().catch((error) => {
  console.error("Failed to initialize app shell", error);
});

import { loadCatalog } from "./data-loader.js";

const BADGE_CLASS_BY_OUTCOME = {
  paper: "badge--paper",
  packaging: "badge--packaging",
  bio: "badge--bio",
  residual: "badge--residual",
  special: "badge--special"
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatOutcomeLabel(outcome) {
  if (!outcome) return "Unknown";
  return outcome.label_de ? `${outcome.label_en} (${outcome.label_de})` : outcome.label_en;
}

function renderCardsIndex(catalog) {
  const container = document.querySelector("#cards-grid");
  if (!container) return;

  const outcomeByKey = Object.fromEntries(catalog.outcomes.map((outcome) => [outcome.key, outcome]));
  const cards = catalog.items
    .filter((item) => item.active)
    .map((item) => {
      const outcome = outcomeByKey[item.primary_outcome];
      const badgeClass = BADGE_CLASS_BY_OUTCOME[item.primary_outcome] || "badge--residual";

      return `
        <article class="mini-card surface-panel">
          <span class="badge ${badgeClass}">${escapeHtml(formatOutcomeLabel(outcome))}</span>
          <h2>${escapeHtml(item.name_en)}</h2>
          <p>${escapeHtml(item.explanation_en)}</p>
          <a class="button button--tertiary" href="item.html?slug=${encodeURIComponent(item.slug)}">Open card</a>
        </article>
      `;
    })
    .join("");

  container.innerHTML = cards;
}

function renderCardDetail(catalog) {
  const container = document.querySelector("#card-detail");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const requestedSlug = params.get("slug");
  const item = catalog.items.find((entry) => entry.slug === requestedSlug) || catalog.items[0];
  const outcome = catalog.outcomes.find((entry) => entry.key === item.primary_outcome);
  const badgeClass = BADGE_CLASS_BY_OUTCOME[item.primary_outcome] || "badge--residual";
  const notes = item.rule_notes?.length
    ? `<div class="notes-stack">${item.rule_notes
        .map(
          (note) => `
            <div class="detail-note surface-panel surface-panel--nested">
              <strong>${escapeHtml(note.title_en)}</strong>
              <p>${escapeHtml(note.body_en)}</p>
            </div>
          `
        )
        .join("")}</div>`
    : "";

  container.innerHTML = `
    <span class="badge ${badgeClass}">${escapeHtml(formatOutcomeLabel(outcome))}</span>
    <h1>${escapeHtml(item.name_en)}</h1>
    <p class="lead">${escapeHtml(item.explanation_en)}</p>
    <div class="detail-note surface-panel surface-panel--nested">
      <strong>Why</strong>
      <p>${escapeHtml(outcome?.short_description_en || "")}</p>
    </div>
    ${notes}
    <a class="button button--tertiary" href="index.html">← Back to all cards</a>
  `;
}

async function init() {
  const page = document.body.dataset.page;
  const catalog = await loadCatalog();

  if (page === "cards-index") {
    renderCardsIndex(catalog);
    return;
  }

  if (page === "card-detail") {
    renderCardDetail(catalog);
  }
}

init().catch((error) => {
  console.error("Failed to render card views", error);
});

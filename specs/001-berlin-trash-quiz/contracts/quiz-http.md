# HTTP/UI Contract: Berlin Trash Quiz

## Public Pages

### `GET /`
- **Purpose**: Landing page with clear CTA into the quiz and learning cards.
- **Response**: Static HTML page.
- **Must include**:
  - Product explanation in English
  - Start quiz action
  - Browse cards action
  - Visible indication that no account is required

### `GET /quiz` or quiz state on the main app page
- **Purpose**: Start a new quiz round or resume an in-progress round.
- **Response**: Static HTML/JavaScript-rendered UI showing current question, progress indicator,
  answer options, item image, and score/points summary.

### `POST` not required
- **Purpose**: None for MVP.
- **Rule**: Answer evaluation must happen client-side in JavaScript; the static site must not depend
  on server-side form handling.

### `GET /cards/` or cards section on the main app page
- **Purpose**: Browse educational disposal cards.
- **Response**: Static HTML/JavaScript-rendered list of disposal items.

### `GET /cards/:slug` or client-side card detail state
- **Purpose**: Show a single item card.
- **Response**: Static HTML/JavaScript-rendered view with:
  - item name
  - optional image
  - disposal outcome
  - explanation
  - nuance notes if applicable

## Data Contract
- Curated disposal content must be loadable from a static JSON or JavaScript data file.
- Each item must expose enough data for quiz prompts, card rendering, explanatory feedback, and
  answer-grid labels.
- Browser-side progress storage must not require authentication.

## Quiz Layout Contract
- The quiz view must follow the provided visual reference closely:
  - top row with back control, centered product title, and floating points pill
  - visible question counter and thick rounded progress bar
  - large centered question heading
  - prominent rounded item image card below the question
  - 2×2 answer grid with large colorful category buttons
- The answer grid should prioritize the four main household disposal choices in a visually obvious,
  game-like arrangement.
- If special-disposal cases exist, they may use alternate quiz logic or contextual explanation, but
  the primary quiz layout should preserve the clean 2×2 structure whenever possible.

## UI Contract Rules
- The quiz interface must present answer options as large, high-contrast tappable cards.
- Feedback must use plain English and explain why the answer is correct.
- Use the supplied design system: no hard divider borders, tonal layering instead of boxed sections,
  thick rounded progress, gradient/glass accents where appropriate, and soft editorial spacing.
- Special-disposal answers must be visually distinct from normal household bins when shown.
- Mobile interaction must not require hover states or fine cursor precision.

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
  answer options, and optional score summary.

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
- Each item must expose enough data for quiz prompts, card rendering, and explanatory feedback.
- Browser-side progress storage must not require authentication.

## UI Contract Rules
- The quiz interface must present answer options as simple, high-contrast tappable cards.
- Feedback must use plain English and explain why the answer is correct.
- Special-disposal answers must be visually distinct from normal household bins.
- Mobile interaction must not require hover states or fine cursor precision.

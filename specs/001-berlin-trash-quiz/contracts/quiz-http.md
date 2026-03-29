# HTTP/UI Contract: Berlin Trash Quiz

## Public Routes

### `GET /`
- **Purpose**: Landing page with clear CTA into the quiz and learning cards.
- **Response**: HTML page.
- **Must include**:
  - Product explanation in English
  - Start quiz action
  - Browse cards action
  - Visible indication that no account is required

### `GET /quiz`
- **Purpose**: Start a new quiz round or resume an in-progress round.
- **Response**: HTML page showing current question, progress indicator, answer options, and optional
  score summary.

### `POST /quiz/answer`
- **Purpose**: Submit an answer for the current quiz question.
- **Request fields**:
  - `item_slug`
  - `selected_outcome_key`
- **Response**: HTML or Turbo response updating the current question area with:
  - correct/incorrect state
  - correct disposal outcome
  - explanation in English
  - action to continue

### `GET /cards`
- **Purpose**: Browse educational disposal cards.
- **Response**: HTML page listing disposal items.

### `GET /cards/:slug`
- **Purpose**: Show a single item card.
- **Response**: HTML page with:
  - item name
  - optional image
  - disposal outcome
  - explanation
  - nuance notes if applicable

## UI Contract Rules
- The quiz interface must present answer options as simple, high-contrast tappable cards.
- Feedback must use plain English and explain why the answer is correct.
- Special-disposal answers must be visually distinct from normal household bins.
- Mobile interaction must not require hover states or fine cursor precision.

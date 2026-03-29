# Research: Berlin Trash Quiz

## Decision 1: Build as a static GitHub Pages app with plain HTML, CSS, and JavaScript
- **Decision**: Use a simple static web app instead of a Rails application or frontend framework.
- **Rationale**: The MVP is content-driven, lightweight, and well suited to static hosting. This
  reduces implementation and deployment complexity while keeping the experience fast and easy to
  maintain.
- **Alternatives considered**:
  - Rails web app: rejected as unnecessary infrastructure for a quiz/cards MVP.
  - SPA framework: rejected because the interaction model is simple and does not justify extra
    tooling.

## Decision 2: Store curated content in static data files and progress in the browser
- **Decision**: Keep disposal items and outcomes in static JSON or JavaScript data files, while
  using cookies or localStorage for lightweight progress without accounts.
- **Rationale**: This matches GitHub Pages deployment and keeps the product easy to update without a
  backend.
- **Alternatives considered**:
  - SQLite-backed content: rejected because GitHub Pages cannot serve a dynamic database-backed app.
  - Cookie-only for all content: rejected because curated disposal content is easier to manage in
    structured static files.

## Decision 3: Treat Berlin disposal guidance as curated content with explicit nuance notes
- **Decision**: Model disposal answers with supporting explanatory notes so edge cases such as clean
  vs. greasy packaging can be taught correctly.
- **Rationale**: The educational value depends on explaining why an answer is correct, not only on
  showing a bin label.
- **Alternatives considered**:
  - Flat one-word answers only: rejected because it would fail ambiguous or contaminated-item cases.
  - Broad free-text explanations everywhere: rejected because consistent structured content is easier
    to maintain and test.

## Decision 4: Prioritize the quiz loop as the first fully testable slice
- **Decision**: Implement the quiz round before broader browsing and progress features.
- **Rationale**: The quiz loop is the main learning mechanism and the most demoable MVP outcome.
- **Alternatives considered**:
  - Item library first: rejected because it behaves more like a reference catalog than the intended
    learning-first product.

## Decision 5: Keep deployment path GitHub Pages-ready from the start
- **Decision**: Structure files and runtime assumptions around a static site published through
  GitHub Pages.
- **Rationale**: This aligns with the revised product direction and keeps deployment essentially
  frictionless.
- **Alternatives considered**:
  - Adding a backend later-first design: rejected because it would reintroduce unnecessary runtime
    assumptions into the MVP.

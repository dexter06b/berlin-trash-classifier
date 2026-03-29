# Research: Berlin Trash Quiz

## Decision 1: Build as a conventional Rails web app with server-rendered pages
- **Decision**: Use standard Rails controllers, views, and Hotwire enhancements rather than a
  heavier SPA architecture.
- **Rationale**: The MVP is content-driven, interaction-light, and benefits from Rails conventions,
  simple rendering, and lower deployment complexity.
- **Alternatives considered**:
  - Full SPA frontend: rejected as unnecessary complexity for an educational quiz/cards MVP.
  - API-only backend plus separate frontend: rejected because it adds coordination overhead without
    clear product benefit in v1.

## Decision 2: Use SQLite for curated content and cookies/session for lightweight progress
- **Decision**: Store disposal items and outcomes in app-managed data backed by SQLite, while using
  cookies or session storage for lightweight user progress without accounts.
- **Rationale**: This matches the small-scope MVP, keeps persistence simple, and avoids account or
  infrastructure overhead.
- **Alternatives considered**:
  - Cookie-only for all content: rejected because curated disposal content is easier to manage in
    structured app data.
  - External database: rejected as unnecessary for a small initial product.

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

## Decision 5: Keep deployment path Kamal-ready from the start
- **Decision**: Structure environment configuration and operational assumptions around a single Rails
  app deployed with Kamal.
- **Rationale**: This aligns with the project request and avoids rework later.
- **Alternatives considered**:
  - Platform-specific deployment shortcuts: rejected because they obscure the intended production
    path.

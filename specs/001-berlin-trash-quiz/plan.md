# Implementation Plan: Berlin Trash Quiz

**Branch**: `001-berlin-trash-quiz` | **Date**: 2026-03-29 | **Spec**: `/specs/001-berlin-trash-quiz/spec.md`
**Input**: Feature specification from `/specs/001-berlin-trash-quiz/spec.md`

## Summary

Build a small Rails web app for English-speaking Berlin expats to learn proper trash classification
through a quiz-first experience with supporting item cards. Use conventional Rails structure,
mobile-friendly server-rendered UI, lightweight local progress persistence, curated Berlin-specific
content, and a straightforward Kamal deployment path.

## Technical Context

**Language/Version**: Ruby 3.x, Ruby on Rails 8.x  
**Primary Dependencies**: Ruby on Rails, Hotwire (Turbo/Stimulus), Kamal  
**Storage**: SQLite for curated content and optional lightweight persisted stats; cookies/session
for device-local quiz progress  
**Testing**: Rails built-in test framework with system/integration tests  
**Target Platform**: Modern mobile and desktop browsers  
**Project Type**: Rails web application  
**Performance Goals**: First interactive quiz screen visible quickly on a modest mobile connection;
question transitions feel immediate for a small content set  
**Constraints**: English only for MVP, no accounts, mobile-friendly, easy content updates, simple
single-app deployment with Kamal  
**Scale/Scope**: Initial MVP with at least 20 curated disposal items, 4–6 main disposal outcomes,
and one quiz-centered product flow

## Constitution Check

- **Product Clarity First**: Pass — plan centers on a quiz loop and explanatory content for Berlin
  expats.
- **Simplicity Over Cleverness**: Pass — conventional Rails app, no accounts, no unnecessary
  services.
- **Testable Learning Loops**: Pass — system tests will target the quiz loop and card browsing.
- **Berlin Rule Fidelity**: Pass with validation requirement — content source review is needed for
  disposal guidance before release.
- **Deployability by Default**: Pass — Kamal-compatible single Rails app with low infrastructure
  complexity.

## Project Structure

### Documentation (this feature)

```text
specs/001-berlin-trash-quiz/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── quiz-http.md
└── tasks.md
```

### Source Code (repository root)

```text
app/
├── controllers/
├── models/
├── views/
├── javascript/controllers/
└── helpers/

config/
db/
test/
├── models/
├── system/
└── integration/

data/
└── disposal_items.yml
```

**Structure Decision**: Use a single Rails application with server-rendered views and small
Hotwire enhancements. Keep curated content close to the app so disposal rules are easy to review
and update.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |

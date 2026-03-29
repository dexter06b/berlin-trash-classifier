# Tasks: Berlin Trash Quiz

**Input**: Design documents from `/specs/001-berlin-trash-quiz/`  
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: Include lightweight automated tests for quiz logic and primary browser flows because the
constitution requires independently testable learning loops.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing
of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Static web app: `index.html`, `cards/`, `assets/css/`, `assets/js/`, `assets/data/`, `tests/`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and base project structure

- [ ] T001 Create static site structure and shared entry files in `index.html`, `assets/css/`,
      `assets/js/`, and `cards/`
- [ ] T002 Configure GitHub Pages publishing and static hosting documentation in `README.md` and
      `.github/workflows/` if needed
- [ ] T003 [P] Add local static-server setup instructions and project overview in `README.md`
- [ ] T004 [P] Implement design tokens and typography setup from the Urban Alchemist system in
      `assets/css/tokens.css` and `assets/css/base.css`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [ ] T005 Create static content schema for disposal outcomes, disposal items, and rule notes in
      `assets/data/disposal-items.json`
- [ ] T006 [P] Seed at least 20 curated Berlin disposal examples in `assets/data/disposal-items.json`
- [ ] T007 [P] Implement browser storage utilities for quiz/progress state in
      `assets/js/storage.js`
- [ ] T008 Define shared navigation, layout shell, and base styling for landing, quiz, and cards
      pages in `index.html`, `cards/`, `assets/css/components.css`, and `assets/css/pages.css`
- [ ] T009 Add lightweight test fixtures or quiz-logic harness in `tests/`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Quiz-based learning flow (Priority: P1) 🎯 MVP

**Goal**: Let a user complete a short quiz round with immediate explanatory feedback.

**Independent Test**: A user can start a quiz, answer questions, see explanations after each
answer, and finish the round with a score on mobile.

### Tests for User Story 1

- [ ] T010 [P] [US1] Add browser test or harness for starting and completing a quiz round in
      `tests/quiz-round/`
- [ ] T011 [P] [US1] Add automated coverage for answer evaluation and feedback rendering in
      `tests/quiz-logic/`

### Implementation for User Story 1

- [ ] T012 [P] [US1] Implement quiz question selection and answer evaluation logic in
      `assets/js/quiz.js`
- [ ] T013 [US1] Implement quiz page flow and state transitions in `index.html` and
      `assets/js/app.js`
- [ ] T014 [P] [US1] Build the reference-inspired quiz layout with centered question, large rounded
      image card, thick progress bar, floating points pill, and 2×2 answer grid in `index.html`,
      `assets/css/components.css`, and `assets/css/pages.css`
- [ ] T015 [US1] Style answer cards as colorful category tiles matching the reference and design
      system in `assets/css/components.css`
- [ ] T016 [US1] Add explanation rendering for nuanced Berlin disposal cases in
      `assets/js/quiz.js` and the quiz UI templates
- [ ] T017 [P] [US1] Implement glassmorphism feedback/points overlays and editorial spacing polish
      in `assets/css/components.css` and `assets/css/pages.css`

**Checkpoint**: User Story 1 is fully functional and independently testable

---

## Phase 4: User Story 2 - Educational item cards (Priority: P2)

**Goal**: Let a user browse item cards and read Berlin-specific disposal explanations outside the
quiz flow.

**Independent Test**: A user can browse cards, open a specific item, and understand the correct
Berlin disposal outcome without entering the quiz.

### Tests for User Story 2

- [ ] T018 [P] [US2] Add lightweight browser coverage for card browsing and item detail views in
      `tests/cards/`

### Implementation for User Story 2

- [ ] T019 [US2] Implement cards listing and item detail rendering in `cards/index.html`,
      `cards/item.html`, and `assets/js/cards.js`
- [ ] T020 [P] [US2] Build cards index and detail styling with the same tonal-layering design
      language in `assets/css/components.css` and `assets/css/pages.css`
- [ ] T021 [US2] Add reusable rendering helpers for disposal outcome badges and nuance notes in
      `assets/js/cards.js`

**Checkpoint**: User Stories 1 and 2 both work independently

---

## Phase 5: User Story 3 - Lightweight returning progress (Priority: P3)

**Goal**: Preserve lightweight progress on the user’s device without accounts.

**Independent Test**: A returning user can revisit the app in the same browser and still see saved
progress or score information.

### Tests for User Story 3

- [ ] T022 [P] [US3] Add automated coverage for progress persistence and restoration in
      `tests/storage/`

### Implementation for User Story 3

- [ ] T023 [US3] Implement cookie/localStorage-backed learning progress utilities in
      `assets/js/storage.js`
- [ ] T024 [US3] Surface saved progress summary on landing and quiz views in `index.html` and
      `assets/js/app.js`
- [ ] T025 [US3] Add reset/fresh-start handling for missing or cleared progress in
      `assets/js/app.js` and `assets/js/storage.js`

**Checkpoint**: All user stories are independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T026 [P] Review and refine English copy for Berlin expat clarity in `index.html`, `cards/`,
      and `assets/data/disposal-items.json`
- [ ] T027 Run responsive/mobile QA fixes across quiz and cards screens in `assets/css/` and HTML
      files
- [ ] T028 Validate Berlin disposal guidance sources and capture notes in
      `specs/001-berlin-trash-quiz/research.md` and `assets/data/disposal-items.json`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational completion
- **User Story 2 (Phase 4)**: Depends on Foundational completion; may reuse content and helpers from
  earlier phases
- **User Story 3 (Phase 5)**: Depends on Foundational completion and benefits from quiz flow being
  in place
- **Polish (Phase 6)**: Depends on desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: First MVP slice; no dependency on other stories
- **User Story 2 (P2)**: Can ship after foundational work and does not block User Story 1
- **User Story 3 (P3)**: Extends User Story 1 behavior with browser persistence but remains small
  and self-contained

### Parallel Opportunities

- T002, T003, and T004 can proceed alongside early setup work
- T006, T007, and T009 can proceed in parallel after the data/content shape is agreed
- T010 and T011 can be written in parallel for User Story 1
- T014 and T015 can proceed in parallel once quiz logic contracts are set
- T018 and T020 can proceed in parallel for the cards flow

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Setup
2. Complete Foundational phase
3. Complete User Story 1
4. Validate the quiz loop on mobile against the supplied reference
5. Publish the MVP slice to GitHub Pages

### Incremental Delivery

1. Ship quiz loop
2. Add learning cards
3. Add lightweight returning progress
4. Finish copy and content validation polish

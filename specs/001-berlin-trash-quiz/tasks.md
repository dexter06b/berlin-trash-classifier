# Tasks: Berlin Trash Quiz

**Input**: Design documents from `/specs/001-berlin-trash-quiz/`  
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: Include system and integration tests for the MVP quiz loop because the constitution
requires independently testable learning flows.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing
of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Rails application: `app/`, `config/`, `db/`, `test/`, `data/` at repository root

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and base project structure

- [ ] T001 Initialize Rails application skeleton and base dependencies in `Gemfile`, `config/`, and
      `bin/`
- [ ] T002 Configure Kamal deployment scaffolding and environment defaults in `config/deploy.yml`,
      `.dockerignore`, and related deployment files
- [ ] T003 [P] Add project README planning notes and local setup instructions in `README.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [ ] T004 Create content models and migrations for disposal outcomes, disposal items, and rule
      notes in `app/models/` and `db/migrate/`
- [ ] T005 [P] Seed at least 20 curated Berlin disposal examples in `db/seeds.rb` and
      `data/disposal_items.yml`
- [ ] T006 [P] Implement quiz session/progress persistence strategy in `app/controllers/concerns/`
      or `app/services/`
- [ ] T007 Define shared routes and layout shell for landing, quiz, and cards pages in
      `config/routes.rb` and `app/views/layouts/`
- [ ] T008 Add test helpers/fixtures for disposal content and quiz state in `test/fixtures/` and
      `test/test_helper.rb`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Quiz-based learning flow (Priority: P1) 🎯 MVP

**Goal**: Let a user complete a short quiz round with immediate explanatory feedback.

**Independent Test**: A user can start a quiz, answer questions, see explanations after each
answer, and finish the round with a score on mobile.

### Tests for User Story 1

- [ ] T009 [P] [US1] Add system test for starting and completing a quiz round in
      `test/system/quiz_round_test.rb`
- [ ] T010 [P] [US1] Add integration test for answer submission and feedback rendering in
      `test/integration/quiz_answers_test.rb`

### Implementation for User Story 1

- [ ] T011 [P] [US1] Implement quiz question selection and answer evaluation service in
      `app/services/quiz_round_builder.rb` and `app/services/quiz_answer_evaluator.rb`
- [ ] T012 [US1] Implement quiz controller actions for start, show, and answer flows in
      `app/controllers/quiz_controller.rb`
- [ ] T013 [P] [US1] Build quiz views with mobile-friendly answer cards, progress bar, and score UI
      in `app/views/quiz/`
- [ ] T014 [P] [US1] Add small Hotwire/Stimulus enhancements for answer transitions and progress UI
      in `app/javascript/controllers/`
- [ ] T015 [US1] Add explanation rendering for nuanced Berlin disposal cases in
      `app/helpers/quiz_helper.rb` and `app/views/quiz/`

**Checkpoint**: User Story 1 is fully functional and independently testable

---

## Phase 4: User Story 2 - Educational item cards (Priority: P2)

**Goal**: Let a user browse item cards and read Berlin-specific disposal explanations outside the
quiz flow.

**Independent Test**: A user can browse cards, open a specific item, and understand the correct
Berlin disposal outcome without entering the quiz.

### Tests for User Story 2

- [ ] T016 [P] [US2] Add system test for card browsing and item detail views in
      `test/system/disposal_cards_test.rb`

### Implementation for User Story 2

- [ ] T017 [US2] Implement cards controller and item detail actions in
      `app/controllers/cards_controller.rb`
- [ ] T018 [P] [US2] Build cards index and detail views in `app/views/cards/`
- [ ] T019 [US2] Add reusable presentation helpers for disposal outcome badges and nuance notes in
      `app/helpers/cards_helper.rb`

**Checkpoint**: User Stories 1 and 2 both work independently

---

## Phase 5: User Story 3 - Lightweight returning progress (Priority: P3)

**Goal**: Preserve lightweight progress on the user’s device without accounts.

**Independent Test**: A returning user can revisit the app on the same device and still see saved
progress or score information.

### Tests for User Story 3

- [ ] T020 [P] [US3] Add integration test for persisted progress restoration in
      `test/integration/learning_progress_test.rb`

### Implementation for User Story 3

- [ ] T021 [US3] Implement cookie/session-backed learning progress service in
      `app/services/learning_progress_store.rb`
- [ ] T022 [US3] Surface saved progress summary on landing and quiz pages in
      `app/controllers/home_controller.rb`, `app/views/home/`, and `app/views/quiz/`
- [ ] T023 [US3] Add reset/fresh-start handling for missing or cleared progress in
      `app/controllers/quiz_controller.rb` and `app/views/quiz/`

**Checkpoint**: All user stories are independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T024 [P] Review and refine English copy for Berlin expat clarity in `app/views/`,
      `db/seeds.rb`, and `data/disposal_items.yml`
- [ ] T025 Run responsive/mobile QA fixes across quiz and cards screens in `app/views/` and
      `app/assets/stylesheets/`
- [ ] T026 Validate Berlin disposal guidance sources and capture notes in
      `specs/001-berlin-trash-quiz/research.md` and content files

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
- **User Story 3 (P3)**: Extends User Story 1 behavior with persistence but remains small and
  self-contained

### Parallel Opportunities

- T002 and T003 can proceed alongside early setup work
- T005, T006, and T008 can proceed in parallel after the data/content shape is agreed
- T009 and T010 can be written in parallel for User Story 1
- T013 and T014 can proceed in parallel once controller/service contracts are set
- T016 and T018 can proceed in parallel for the cards flow

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Setup
2. Complete Foundational phase
3. Complete User Story 1
4. Validate the quiz loop on mobile
5. Demo or deploy the MVP slice

### Incremental Delivery

1. Ship quiz loop
2. Add learning cards
3. Add lightweight returning progress
4. Finish copy and content validation polish

# Feature Specification: Berlin Trash Quiz

**Feature Branch**: `001-berlin-trash-quiz`  
**Created**: 2026-03-29  
**Status**: Draft  
**Input**: User description: "Build an English-language web app for Berlin expats to learn correct trash classification and disposal through quiz cards and simple educational flows, with no accounts."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Learn disposal through a quiz round (Priority: P1)

As a Berlin expat, I want to answer short trash-sorting quiz questions in English so I can learn
which bin or disposal method applies to everyday items.

**Why this priority**: This is the core educational loop and the clearest MVP slice. If this works,
the product already delivers value.

**Independent Test**: Can be fully tested by starting a quiz round, answering several item prompts,
receiving immediate feedback, and completing a round with a visible score or progress result.

**Acceptance Scenarios**:

1. **Given** a user starts a quiz round, **When** the app shows a common item such as a greasy
   pizza box, **Then** the user can choose from clear disposal options and submit an answer.
2. **Given** a user submits an answer, **When** the answer is correct or incorrect, **Then** the
   app shows immediate feedback in English explaining the right Berlin-specific disposal choice.
3. **Given** a user completes the configured number of quiz questions, **When** the final question
   is answered, **Then** the app shows round completion status, score, and an invitation to keep
   learning.

---

### User Story 2 - Review item cards outside the quiz (Priority: P2)

As a Berlin expat, I want to browse simple educational item cards so I can learn disposal rules
without taking a full quiz.

**Why this priority**: Some users will want a reference-like experience before or after a quiz.
This extends learning value without changing the product’s core purpose.

**Independent Test**: Can be tested by browsing or filtering item cards, opening a card, and
reading the disposal explanation without starting a quiz.

**Acceptance Scenarios**:

1. **Given** a user opens the learning cards section, **When** they browse the available items,
   **Then** they can see item names and access an explanation in English.
2. **Given** a user opens an item card, **When** the card is displayed, **Then** it shows the
   correct bin or disposal method, a short explanation, and any nuance relevant to Berlin.

---

### User Story 3 - Continue progress without an account (Priority: P3)

As a returning user, I want the app to remember lightweight learning progress on my device so I
can continue practicing without creating an account.

**Why this priority**: Persistence is useful, but it is secondary to the actual learning flow.
Cookie-based or similarly lightweight storage is enough for the MVP.

**Independent Test**: Can be tested by completing part of a quiz flow, leaving the app, returning
on the same device, and confirming progress indicators or learning stats still appear.

**Acceptance Scenarios**:

1. **Given** a user has completed one or more quiz interactions, **When** they revisit the app on
   the same device, **Then** the app restores lightweight progress or learning stats.
2. **Given** local progress data is missing or reset, **When** the user opens the app,
   **Then** the app still works normally and starts fresh without requiring account recovery.

### Edge Cases

- What happens when an item’s disposal depends on contamination level, such as a clean vs. greasy
  pizza box?
- How does the system handle items that do not belong in one of the main household bins and instead
  require special disposal guidance?
- What happens when the local progress cookie is cleared or unavailable?
- How does the app present an answer when Berlin guidance needs a short explanation rather than a
  one-word bin label?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide an English-language quiz experience focused on Berlin trash
  classification and disposal.
- **FR-002**: System MUST present one item prompt at a time with clear answer options relevant to
  Berlin disposal categories.
- **FR-003**: System MUST provide immediate feedback after each answer, including the correct
  disposal outcome and a short explanation.
- **FR-004**: System MUST support quiz rounds with visible question progress and round completion.
- **FR-005**: System MUST track and display a lightweight score, points, or progress summary within
  a quiz round.
- **FR-006**: System MUST offer a card-based learning view for browsing disposal items outside the
  quiz flow.
- **FR-007**: System MUST store quiz content and disposal guidance in a form that can be updated as
  Berlin rules evolve.
- **FR-008**: System MUST handle nuanced cases where disposal depends on item condition and explain
  those cases in plain English.
- **FR-009**: System MUST allow a user to use the MVP without creating an account.
- **FR-010**: System MUST persist lightweight learning progress on the device without requiring user
  authentication.
- **FR-011**: System MUST remain usable on common mobile screen sizes.
- **FR-012**: System MUST clearly distinguish common household bin outcomes from special-disposal
  outcomes when an item should not go into a regular home bin.

### Key Entities *(include if feature involves data)*

- **Disposal Item**: A teachable object such as a pizza box, battery, glass bottle, or coffee cup,
  including English name, optional image, explanation, and disposal outcome.
- **Disposal Outcome**: The result for an item, such as paper bin, yellow bin, organic bin,
  residual waste, or special disposal, including display label and explanation.
- **Rule Note**: A short clarification tied to an item or outcome, used for condition-specific or
  Berlin-specific nuances.
- **Quiz Question**: A learning prompt composed from a disposal item, answer options, correct
  outcome, and feedback copy.
- **Learning Progress**: Device-local state such as score, streak, last seen items, or completed
  quiz rounds.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A first-time user can start a quiz round and submit an answer within 30 seconds of
  landing on the app.
- **SC-002**: At least 90% of quiz prompts in the MVP provide immediate explanatory feedback in
  plain English after the user answers.
- **SC-003**: A user can complete a full quiz round on a mobile device without layout breakage or
  blocked actions.
- **SC-004**: The MVP includes enough curated content to cover at least 20 common Berlin household
  disposal examples.
- **SC-005**: Returning users on the same device can see preserved lightweight progress without
  signing in.

## Assumptions

- The MVP is primarily for English-speaking Berlin expats rather than bilingual audiences.
- The initial release focuses on common household waste categories and a small curated set of
  tricky examples.
- Local device storage such as cookies is sufficient for MVP progress tracking.
- Content accuracy will be validated against Berlin-specific disposal guidance before publication.
- Administrative tooling for editing content is out of scope for the MVP; content can be managed
  through app data files or seeds during initial development.

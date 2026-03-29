<!--
Sync Impact Report
- Version change: 0.0.0 → 1.0.0
- Modified principles: template placeholders → Product Clarity First; Simplicity Over Cleverness; Testable Learning Loops; Berlin Rule Fidelity; Deployability by Default
- Added sections: Product Constraints; Delivery Workflow
- Removed sections: none
- Templates requiring updates: ✅ reviewed .specify/templates/plan-template.md; ✅ reviewed .specify/templates/spec-template.md; ✅ reviewed .specify/templates/tasks-template.md; ✅ reviewed command files via installed skills path; ⚠ no further template edits required for this project at v1
- Follow-up TODOs: none
-->

# Berlin Trash Classifier Constitution

## Core Principles

### I. Product Clarity First
Every feature MUST make the disposal decision clearer for an English-speaking Berlin expat.
Content, wording, and interaction design MUST reduce confusion rather than add novelty. If a
feature is clever but does not improve understanding of where an item belongs, it does not
belong in the MVP.

### II. Simplicity Over Cleverness
The product MUST stay lightweight, easy to maintain, and easy to deploy. Prefer standard Ruby on
Rails patterns, SQLite where persistence is actually needed, and cookie-based state for simple
progress tracking. New dependencies or architectural layers MUST be justified by a concrete user
need.

### III. Testable Learning Loops
Core user journeys MUST be independently testable end to end. The primary learning loop—see an
item, choose a disposal option, and receive immediate feedback—MUST be validated with automated
tests and clear acceptance criteria before expansion into secondary features.

### IV. Berlin Rule Fidelity
Disposal guidance MUST reflect Berlin-specific expectations and clearly explain ambiguous cases.
When rules vary by contamination level, material type, or collection method, the product MUST
surface that nuance in plain English. Unverified or uncertain disposal advice MUST not be shipped
as factual.

### V. Deployability by Default
Planning and implementation MUST preserve a straightforward deployment path with Kamal. The app
MUST remain operable as a small Rails web app without accounts, background complexity, or fragile
infrastructure assumptions in the MVP.

## Product Constraints

- Audience: English-speaking Berlin expats.
- Product type: educational quiz/cards web app.
- MVP excludes user accounts.
- Mobile-friendly UX is expected.
- Content should be easy to update as Berlin disposal guidance evolves.

## Delivery Workflow

- Specifications MUST describe the user problem, learning outcomes, and scope boundaries before
  implementation details.
- Plans MUST document Rails, SQLite/cookies, and Kamal decisions explicitly, including what is
  intentionally deferred.
- Tasks MUST be organized into independently testable user stories, with the quiz loop treated as
  the first MVP slice.
- Any content-heavy issue MUST identify its disposal-rule source or validation approach before
  implementation begins.

## Governance
This constitution supersedes ad hoc project preferences. All plans, tasks, and implementation work
MUST reference and satisfy these principles. Amendments require a documented reason, an update to
related planning artifacts, and a semantic version bump according to impact: MAJOR for breaking
principle changes, MINOR for new or expanded guidance, PATCH for wording-only clarifications.
Compliance checks are required during planning and before major scope expansion.

**Version**: 1.0.0 | **Ratified**: 2026-03-29 | **Last Amended**: 2026-03-29

# Implementation Plan: Berlin Trash Quiz

**Branch**: `001-berlin-trash-quiz` | **Date**: 2026-03-29 | **Spec**: `/specs/001-berlin-trash-quiz/spec.md`
**Input**: Feature specification from `/specs/001-berlin-trash-quiz/spec.md`

## Summary

Build a small static web app for English-speaking Berlin expats to learn proper trash classification
through a quiz-first experience with supporting item cards. Use plain HTML, CSS, and JavaScript,
deploy with GitHub Pages, keep content in static data files, and store lightweight progress in the
browser. The visual system must follow the "Urban Alchemist" design language and the quiz screen
must resemble the supplied reference: centered editorial layout, prominent item image, thick rounded
progress bar, floating score chip, and a colorful 2×2 answer grid.

## Technical Context

**Language/Version**: HTML5, CSS3, vanilla JavaScript (ES modules)  
**Primary Dependencies**: No required frontend framework; optional lightweight test tooling only if
needed during implementation  
**Storage**: Static JSON or JavaScript data files for curated content; cookies or localStorage for
browser-side progress  
**Testing**: Browser-based manual verification plus lightweight automated tests for quiz logic and
UI flows  
**Target Platform**: Modern mobile and desktop browsers served as a static site on GitHub Pages  
**Project Type**: Static web application  
**Performance Goals**: Fast first load on mobile, instant answer feedback, and smooth card/quiz
transitions without a build-heavy stack  
**Constraints**: English only for MVP, no accounts, mobile-friendly, easy content updates, must be
hostable on GitHub Pages without server code, must follow the provided design system and quiz
reference layout  
**Scale/Scope**: Initial MVP with at least 20 curated disposal items, 4–6 main disposal outcomes,
and one quiz-centered product flow

## Constitution Check

- **Product Clarity First**: Pass — plan centers on a quiz loop and explanatory content for Berlin
  expats.
- **Simplicity Over Cleverness**: Pass — plain HTML/CSS/JS, no accounts, no framework or backend
  dependency.
- **Testable Learning Loops**: Pass — quiz logic and primary UI flows remain independently testable.
- **Berlin Rule Fidelity**: Pass with validation requirement — content source review is needed for
  disposal guidance before release.
- **Static Deployability by Default**: Pass — GitHub Pages-compatible static app with no server-side
  runtime.

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
index.html
cards/
├── index.html
└── item.html

assets/
├── css/
│   ├── tokens.css
│   ├── base.css
│   ├── components.css
│   └── pages.css
├── js/
│   ├── app.js
│   ├── quiz.js
│   ├── cards.js
│   ├── storage.js
│   └── data-loader.js
└── data/
    └── disposal-items.json

tests/
└── quiz-logic/
```

**Structure Decision**: Use a static multi-page or lightweight single-page structure with plain
JavaScript modules. Keep curated content close to the site as static data so disposal rules are
easy to review, update, and publish through GitHub Pages. Separate CSS into tokens/base/components/
pages layers so the design system can be enforced consistently.

## UX / Visual Direction

- Apply the provided "Urban Alchemist" design system as a hard implementation constraint.
- Use Plus Jakarta Sans for display/headline emphasis and Be Vietnam Pro for body/instructional
  copy.
- Enforce the no-line rule: no 1px borders for layout sectioning.
- Use tonal layering, soft ambient depth, and glassmorphism for floating quiz chrome.
- Make the quiz screen resemble the provided reference: centered question, large rounded image card,
  thick progress bar, floating points pill, and a 2×2 colorful answer-button grid.
- Answer options should feel like premium tactile cards rather than plain buttons.
- Maintain strong mobile-first spacing and editorial white space.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |

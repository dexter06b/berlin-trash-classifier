# Berlin Trash Classifier

A static GitHub Pages web app for helping Berlin expats learn proper trash classification through a quiz-first experience.

## Current status

This repository currently contains the planning baseline and the first implementation scaffold for:
- a static site structure
- Urban Alchemist design tokens and typography setup
- landing, quiz, and cards page shells
- JavaScript module entry points for future quiz/card logic
- a structured static disposal dataset with outcomes, items, and rule notes

## Local development

Because this is a static site, use a simple local web server instead of opening files directly.

### Python

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## GitHub Pages

This project is designed to be served as a static site.

For GitHub Pages:
- publish from GitHub Actions
- keep all runtime behavior client-side
- store content in static data files
- avoid any server-side dependencies

A workflow is included at `.github/workflows/pages.yml`.

## Data model snapshot

The current static content file is `assets/data/disposal-items.json`.

It now uses a reviewable catalog structure:

```json
{
  "schema_version": 1,
  "outcomes": [],
  "items": []
}
```

### Outcomes
Each outcome contains:
- `key`
- `label_en`
- `short_description_en`
- `special_handling`

### Items
Each item contains:
- `slug`
- `name_en`
- `question_prompt_en`
- `primary_outcome`
- `difficulty`
- `source_note`
- `active`
- `explanation_en`
- `rule_notes`

This keeps the file easy to review and update while preserving enough structure for future quiz and cards logic.

## Structure

```text
index.html
cards/
  index.html
  item.html
assets/
  css/
    tokens.css
    base.css
    components.css
    pages.css
  js/
    app.js
    quiz.js
    cards.js
    storage.js
    data-loader.js
  data/
    disposal-items.json
```

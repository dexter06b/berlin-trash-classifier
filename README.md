# Berlin Trash Classifier

A static GitHub Pages web app for helping Berlin expats learn proper trash classification through a quiz-first experience.

## Current status

This repository currently contains the planning baseline and the first implementation scaffold for:
- a static site structure
- Urban Alchemist design tokens and typography setup
- landing, quiz, and cards page shells
- JavaScript module entry points for future quiz/card logic

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

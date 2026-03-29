# Quickstart: Berlin Trash Quiz

## Goal
Run the static site locally, load curated disposal content, and verify the MVP quiz loop and
learning cards flow.

## Prerequisites
- A modern browser
- A simple static file server for local testing (for example Python’s built-in HTTP server)

## Setup
1. Serve the repository locally from the project root using a static file server.
2. Open the local site in a browser.
3. Confirm the disposal content file loads correctly.
4. Exercise the quiz and cards flows.

## Manual Verification

### Quiz loop
1. Open the home page on a mobile-sized viewport.
2. Start a quiz round.
3. Answer at least three questions.
4. Confirm each answer returns immediate English feedback and the correct disposal outcome.
5. Complete the round and confirm score/progress is displayed.

### Learning cards
1. Open the learning cards section.
2. Browse several items.
3. Open a card with a nuanced rule such as a greasy pizza box.
4. Confirm the explanation clearly states the Berlin-specific disposal answer and nuance.

### Returning progress
1. Complete at least one quiz round.
2. Refresh or revisit the app on the same browser.
3. Confirm lightweight progress or score data is still visible without signing in.

## Deployment Readiness
- Confirm the site works when hosted as static files on GitHub Pages.
- Confirm no account-related or server-side infrastructure is required for the MVP.
- Confirm content updates can be delivered by editing static data files.

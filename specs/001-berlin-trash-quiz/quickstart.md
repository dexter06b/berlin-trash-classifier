# Quickstart: Berlin Trash Quiz

## Goal
Run the Rails app locally, load curated disposal content, and verify the MVP quiz loop and learning
cards flow.

## Prerequisites
- Ruby and Rails installed locally
- SQLite available
- Bundler available

## Setup
1. Install dependencies with `bundle install`.
2. Prepare the database with `bin/rails db:prepare`.
3. Load curated disposal content through seeds or a structured import task.
4. Start the app with `bin/dev` or `bin/rails server`.

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
2. Refresh or revisit the app on the same device.
3. Confirm lightweight progress or score data is still visible without signing in.

## Deployment Readiness
- Confirm app configuration stays compatible with Kamal deployment.
- Confirm no account-related infrastructure is required for the MVP.
- Confirm content updates can be delivered through app-managed data.

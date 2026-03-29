import assert from "node:assert/strict";
import { advanceQuiz, createQuizState, submitAnswer } from "../../assets/js/quiz.js";

const items = [
  { slug: "clean-cardboard-box", active: true, primary_outcome: "paper" },
  { slug: "newspaper", active: true, primary_outcome: "paper" },
  { slug: "paper-egg-carton", active: true, primary_outcome: "paper" },
  { slug: "yogurt-cup", active: true, primary_outcome: "packaging" },
  { slug: "plastic-bottle-no-deposit", active: true, primary_outcome: "packaging" },
  { slug: "tin-can", active: true, primary_outcome: "packaging" },
  { slug: "banana-peel", active: true, primary_outcome: "bio" },
  { slug: "coffee-grounds", active: true, primary_outcome: "bio" },
  { slug: "used-tissue", active: true, primary_outcome: "residual" },
  { slug: "vacuum-dust", active: true, primary_outcome: "residual" },
  { slug: "cold-ash", active: true, primary_outcome: "residual" }
];

const initial = createQuizState(items, { roundsCompleted: 0, correctAnswers: 0, questionsAnswered: 0 });
assert.equal(initial.items.length, 10);
assert.equal(initial.status, "ready");

for (const item of initial.items) {
  submitAnswer(initial, item.primary_outcome);
  assert.equal(initial.answered, true);
  advanceQuiz(initial);
}

assert.equal(initial.status, "complete");
assert.equal(initial.progress.roundsCompleted, 1);
assert.equal(initial.roundCorrect, 10);
assert.equal(initial.progress.correctAnswers, 10);
assert.equal(initial.progress.questionsAnswered, 10);

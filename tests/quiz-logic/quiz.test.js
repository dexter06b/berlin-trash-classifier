import assert from "node:assert/strict";
import { advanceQuiz, createQuizState, submitAnswer } from "../../assets/js/quiz.js";

const items = [
  { slug: "clean-cardboard-box", active: true, primary_outcome: "paper" },
  { slug: "yogurt-cup", active: true, primary_outcome: "packaging" },
  { slug: "banana-peel", active: true, primary_outcome: "bio" },
  { slug: "used-tissue", active: true, primary_outcome: "residual" },
  { slug: "newspaper", active: true, primary_outcome: "paper" }
];

const initial = createQuizState(items, { roundsCompleted: 0, correctAnswers: 0, questionsAnswered: 0 });
assert.equal(initial.items.length, 5);
assert.equal(initial.status, "ready");

submitAnswer(initial, "paper");
assert.equal(initial.answered, true);
assert.equal(initial.roundCorrect, 1);
assert.equal(initial.progress.correctAnswers, 1);

advanceQuiz(initial);
assert.equal(initial.currentIndex, 1);
assert.equal(initial.answered, false);

submitAnswer(initial, "paper");
advanceQuiz(initial);
submitAnswer(initial, "bio");
advanceQuiz(initial);
submitAnswer(initial, "residual");
advanceQuiz(initial);
submitAnswer(initial, "paper");
advanceQuiz(initial);

assert.equal(initial.status, "complete");
assert.equal(initial.progress.roundsCompleted, 1);

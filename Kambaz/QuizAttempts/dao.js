import model from "./model.js"
import { v4 as uuidv4 } from "uuid"

export function fetchQuizAttempts(qid, uid) {
  return model.find({ quizID: qid, userID: uid });
};

export function createQuizAttempt(attempt) {
  const newAttempt = { ...attempt, _id: uuidv4() };
  return model.create(newAttempt);
};


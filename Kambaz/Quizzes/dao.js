import model from "./model.js"
import { v4 as uuidv4 } from "uuid"

export const findQuizzesForCourse = (cid) => {
  return model.find({ course: cid })
};

export const createQuizForCourse = (cid, quiz) => {
  const newQuiz = { ...quiz, course: cid, _id: uuidv4() };
  return model.create(newQuiz)
};

export const updateQuiz = (qid, quiz) => {
  return model.updateOne({ _id: qid }, { ...quiz, _id: qid });
};

export const deleteQuiz = (qid) => {
  return model.deleteOne({ _id: qid });
};
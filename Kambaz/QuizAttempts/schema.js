import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  title: String,
  points: Number,
  question: String,
  type: { type: String, required: true },
  multipleOpts: [{
    _id: String,
    value: String
  }],
  multipleAnswerID: String,
  boolAnswer: Boolean,
  fillAnswers: [String],
  fillBlanks: [{
    _id: String,
    label: String,
    answers: [String],
  }]
});

const answerSchema = new mongoose.Schema({
  questionID: String,
  multipleAnswerID: String,
  boolAnswer: Boolean,
  fillAnswer: String,
});

const quizAttemptSchema = new mongoose.Schema({
  _id: String,
  quizID: String,
  userID: String,
  attemptStartTime: String,
  attemptEndTime: String,
  originalQuestions: [questionSchema],
  answers: [answerSchema],
},
  { collection: "quizAttempts" }
);

export default quizAttemptSchema;
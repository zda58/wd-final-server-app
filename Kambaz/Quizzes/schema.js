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

const quizSchema = new mongoose.Schema({
  _id: String,
  title: String,
  course: String,
  published: Boolean,
  description: String,
  type: String,
  group: String,

  shuffleAnswers: Boolean,
  timeLimit: Boolean,
  mins: Number,
  multipleAttempts: Boolean,
  attempts: Number,

  showCorrect: String,
  showTime: String,

  oneQuestionAtTime: Boolean,
  requiredWebcam: Boolean,
  lockAfterAnswering: Boolean,  
  
  assignTo: [String],
  due: String,
  from: String,
  until: String,

  accessCode: String, //
  questions: [questionSchema],
},
  { collection: "quizzes" }
);

export default quizSchema;
import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
  _id: String,
  title: String,
  course: { type: String, ref: "CourseModel" },
  description: String,
  points: Number,
  group: String,
  display: String,
  submissionType: String,
  entryOptions: [String],
  assignTo: [String],
  due: String,
  from: String,
  until: String
}, { collection: "assignments" });
export default assignmentSchema;
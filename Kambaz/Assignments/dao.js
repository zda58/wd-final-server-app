import { v4 as uuidv4 } from "uuid";
//import Database from "../Database/index.js";
import model from "./model.js"

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: uuidv4() };
  return model.create(newAssignment);
}

export function getAssignmentsForCourse(courseId) {
  return model.find( { course: courseId });
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  return model.updateOne({ _id: assignmentId }, assignmentUpdates);
}

export function deleteAssignment(assignmentId) {
  return model.deleteOne({ _id: assignmentId });
}
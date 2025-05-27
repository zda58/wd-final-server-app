import { v4 as uuidv4 } from "uuid";
import Database from "../Database/index.js";

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: uuidv4() };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}

export function getAssignmentsForCourse(courseId) {
  const { assignments } = Database;
  return assignments.filter((assignment) => assignment.course === courseId);
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  const { assignments } = Database;
  const assignment = assignments.find((assignment) => assignment._id === assignmentId);
  if (!assignment) return assignment;
  Object.assign(assignment, assignmentUpdates);
  return assignment;
}

export function deleteAssignment(assignmentId) {
  const { assignments } = Database;
  const assignmentIdx = assignments.findIndex((assignment) => assignment._id === assignmentId);
  if (assignmentIdx != -1) {
    Database.assignments.splice(assignmentIdx, 1);
  }
  return assignmentIdx;
}
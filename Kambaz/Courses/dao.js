import { v4 as uuidv4 } from "uuid";
import model from "./model.js"

export function findAllCourses() {
  return model.find();
}

export function createCourse(course) {
  const newCourse = { ...course, _id: uuidv4() };
  return model.create(newCourse);
}

export function deleteCourse(courseId) {
  return model.deleteOne({ _id: courseId });
}

export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, { $set: courseUpdates });
}

export function enrollUserInCourse(user, course) {
 const newEnrollment = { user, course, _id: `${user}-${course}` };
 return model.create(newEnrollment);
}

export function unenrollUserFromCourse(user, course) {
 return model.deleteOne({ user, course });
}


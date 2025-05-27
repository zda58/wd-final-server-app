//import Database from "../Database/index.js";
import model from "./model.js"

import { v4 as uuidv4 } from "uuid";

export function createModule(module) {
  const newModule = { ...module, _id: uuidv4() };
  return model.create(newModule);
  //Database.modules = [...Database.modules, newModule];
  //return newModule;
}

export function findModulesForCourse(courseId) {
  return model.find({ course: courseId });
}

export function deleteModule(moduleId) {
  return model.deleteOne( {_id: moduleId} );
}

export function updateModule(moduleId, moduleUpdates) {
  return model.updateOne({ _id: moduleId }, moduleUpdates);
}

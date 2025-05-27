import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignment = {
      ...req.body,
      _id: assignmentId,
    };
    const updatedAssignment = await assignmentsDao.updateAssignment(assignmentId, assignment);
    if (!updatedAssignment) {
      res.sendStatus(404);
      return;
    }
    res.json(updatedAssignment);
  });

  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const deleteIdx = await assignmentsDao.deleteAssignment(assignmentId);
    if (deleteIdx === -1) {
      res.sendStatus(404);
      return;
    }
    res.sendStatus(200);
  });
}

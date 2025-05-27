import * as dao from "./dao.js";

export default function EnrollmentsRoutes(app) {
  app.delete("/api/enrollments/:enrollmentId", async (req, res) => {
    const { enrollmentId } = req.params;
    const status = await dao.deleteEnrollment(enrollmentId);
    res.send(status);
  });
}

import * as dao from "./dao.js"
import * as quizAttemptsDao from "../QuizAttempts/dao.js"

export default function QuizRoutes(app) {
  const deleteQuiz = async (req, res) => {
    const { qid } = req.params;
    try {
      const result = await dao.deleteQuiz(qid);
      if (result.deletedCount === 0) {
        res.sendStatus(404);
        return;
      }
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }
  app.delete("/api/quizzes/:qid", deleteQuiz);

  const updateQuiz = async (req, res) => {
    const { qid } = req.params;
    try {
      const quiz = req.body;
      const result = await dao.updateQuiz(qid, quiz);
      if (result.matchedCount === 0) {
        res.sendStatus(404);
        return;
      }
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  };
  app.put("/api/quizzes/:qid", updateQuiz);

  const getQuizAttemptsForUser = async (req, res) => {
    const { qid, uid } = req.params;
    return quizAttemptsDao.fetchQuizAttempts(qid, uid);
  };
  app.get("/api/quizzes/:qid/attempts/:uid", getQuizAttemptsForUser);

  const recordQuizAttempt = async(req, res) => {
    const { qid, uid } = req.params;
    const attempt = req.body;
    const newAttempt = { ...attempt, quizID: qid, userID: uid };
    return quizAttemptsDao.createQuizAttempt(newAttempt);
  }
  app.post("/api/quizzes/:qid/attempts/:uid", recordQuizAttempt);
}

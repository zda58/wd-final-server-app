import dao from "./dao.js"

export default function QuizRoutes(app) {
  const deleteQuiz = async (req, res) => {
    const { qid } = req.params;
    try {
      const result = await quizzesDao.deleteQuiz(qid);
      if (result.deletedCount === 0) {
        res.status(404);
        return;
      }
      res.status(200);
    } catch (error) {
      res.status(500);
    }
  }
  app.delete("/api/quizzes/:qid", deleteQuiz);

  const updateQuiz = async (req, res) => {
    const { qid } = req.params;
    try {
      const quiz = req.body;
      const result = await quizzesDao.updateQuiz(qid, quiz);
      if (result.matchedCount === 0) {
        res.status(404);
        return;
      }
      res.status(200);
    } catch (error) {
      res.status(500);
    }
  }
  app.put("/api/quizzes/:qid", updateQuiz);
}

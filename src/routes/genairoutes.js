import express from "express";
import { generateQuestion, evaluateAnswer } from "../controllers/genaiController.js";

const router = express.Router();

router.get("/generate_question", generateQuestion);
router.post("/evaluate_answer", evaluateAnswer);

export default router;

import genAI from "../config/googleAI.js";
import { successResponse, errorResponse } from "../utils/responseHelper.js";

// ✅ Generate a Learning Question
export const generateQuestion = async (req, res) => {
    try {
        const topic = req.query.topic || "math";
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const response = await model.generateContent(`Generate a ${topic} learning question.`);
        successResponse(res, "Question generated successfully", { question: response.response.text.trim() });
    } catch (error) {
        errorResponse(res, "Failed to generate question", 500);
    }
};

// ✅ Evaluate Answer
export const evaluateAnswer = async (req, res) => {
    try {
        const { question, answer } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `Here is a learning question: ${question}\nThe user's answer: ${answer}\nEvaluate the correctness and provide a helpful hint if incorrect.`;
        const response = await model.generateContent(prompt);

        successResponse(res, "Answer evaluated successfully", { feedback: response.response.text.trim() });
    } catch (error) {
        errorResponse(res, "Failed to evaluate answer", 500);
    }
};

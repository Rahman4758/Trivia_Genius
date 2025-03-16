import genAI from "../config/googleAI.js";
import { successResponse, errorResponse } from "../utils/responseHelper.js";

// ✅ Generate a Learning Question
// export const generateQuestion = async (req, res) => {
//     try {
//         const topic = req.query.topic || "math";
//         const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//         const response = await model.generateContent(`Generate a ${topic} learning question.`);
//         successResponse(res, "Question generated successfully", { question: response.response.text.trim() });
//     } catch (error) {
//         errorResponse(res, "Failed to generate question", 500);
//     }
// };
export const generateQuestion = async (req, res) => {
    try {
        const topic = req.query.topic || "math";
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const response = await model.generateContent(`Generate a ${topic} learning question.`);

        // 🔍 Log the full Gemini API response
        console.log("Full Gemini API Response:", JSON.stringify(response, null, 2));

        // ✅ Extract question correctly
        const question = response?.response?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "Failed to generate a question.";

        successResponse(res, "Question generated successfully", { question });
    } catch (error) {
        console.error("Generate Question Error:", error);
        res.status(500).json({ message: "Failed to generate question", error: error.message });
    }
};



// ✅ Evaluate Answer
export const evaluateAnswer = async (req, res) => {
    try {
        const { question, answer } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `Here is a learning question: ${question}\nThe user's answer: ${answer}\nEvaluate the correctness and provide a helpful hint if incorrect.`;
        const response = await model.generateContent(prompt);

        // ✅ Extract feedback properly
        const feedback = response.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "No feedback provided.";

        successResponse(res, "Answer evaluated successfully", { feedback });
    } catch (error) {
        console.error("Evaluate Answer Error:", error);
        res.status(500).json({ message: "Failed to evaluate answer", error: error.message });
    }
};

import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const GENAI_API_KEY = process.env.GENAI_API_KEY;
console.log("Render API Key:", process.env.GENAI_API_KEY || "API KEY NOT FOUND");

if (!GENAI_API_KEY) {
    console.error("❌ Google Gemini API key is missing!");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(GENAI_API_KEY);
export default genAI;

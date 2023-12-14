import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function executeMyTextCommand() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const promt = "How To test Gemini API";
  const result = await model.generateContent(promt);
  const response = await result.response;
  const text = response.text();
  console.log(`Result for ${promt}==> ${text}`);
}

executeMyTextCommand();

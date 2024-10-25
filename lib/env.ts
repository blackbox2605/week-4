import dotenv from "dotenv";

dotenv.config();

export const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID || "";
export const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

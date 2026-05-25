import dotenv from "dotenv";

dotenv.config();

const required = [
  "MONGO_URI",
  "JWT_SECRET",
  "STRIPE_SECRET_KEY",
  "REDIS_URL"
] as const;

required.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing environment variable: ${key}`);
  }
});

export const env = {
  PORT: Number(process.env.PORT) || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",

  MONGO_URI: process.env.MONGO_URI!,
  JWT_SECRET: process.env.JWT_SECRET!,

  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY!,
  REDIS_URL: process.env.REDIS_URL!,

  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:3000"
} as const;
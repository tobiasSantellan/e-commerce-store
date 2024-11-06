import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPTASH_REDIS_URL);
// key-value store (giant json)

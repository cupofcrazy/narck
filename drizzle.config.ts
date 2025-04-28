import * as dotenv from "dotenv";
import { defineConfig, type Config } from "drizzle-kit";

dotenv.config();

const config ={
  dialect: "turso",
  schema: "./db/schemas",
  out: "./db/migrations",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL as string,
    authToken: process.env.TURSO_AUTH_TOKEN as string,
  },
} satisfies Config

export default defineConfig(config)
import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/client";
import { schemas } from "@/db/schemas";


export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema: schemas
  }),
  emailVerification: {
    sendOnSignUp: true,
    autoSignUp: true,
  },
  account: {
    accountLinking: {
      enabled: true,
    }
  },
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    twitter: {
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
      scopes: ["tweet.read", "users.read", "offline.access", "users.email"],
    },
    twitch: {
      clientId: process.env.TWITCH_CLIENT_ID as string,
      clientSecret: process.env.TWITCH_CLIENT_SECRET as string,
      scopes: ["user:read:email", "user:read:follows", "user:read:subscriptions"],
    },
  },
  plugins: [nextCookies()]
});
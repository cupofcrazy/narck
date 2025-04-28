import { redirect } from "next/navigation"
import { authClient } from "@/lib/auth-client"


export const signInWithProvider = async (provider: "twitch" | "twitter" | "spotify") => {
  await authClient.signIn.social({
    provider,
    callbackURL: "/dashboard"
  })
}

export async function signInWithGithub() {
  await authClient.signIn.social({
    provider: "github",
    callbackURL: "/dashboard",
    errorCallbackURL: '/login'
  })
}

export async function signInWithTwitch() {
  await authClient.signIn.social({
    provider: "twitch",
    callbackURL: "/dashboard",
    errorCallbackURL: '/login'
  })
}

export async function signInWithTwitter() {
  await authClient.signIn.social({
    provider: "twitter",
    callbackURL: "/dashboard",
    errorCallbackURL: '/login',
    scopes: ["tweet.read", "users.read", "offline.access", "users.email"],
  })
}

export async function signOut() {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        redirect("/login")
      }
    }
  })
}
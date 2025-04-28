import Link from "next/link";
import { headers } from "next/headers";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { auth } from "@/lib/auth";


export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  

  

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl font-bold text-neutral-700 dark:text-neutral-200">Narck</h1>

      <div className="flex items-center gap-4">
        { !session?.user && <Link className="text-neutral-500 dark:text-neutral-200 hover:text-neutral-700 dark:hover:text-neutral-300" href="/login">Login</Link> }
        { session?.user && <Link className="text-neutral-500 dark:text-neutral-200 hover:text-neutral-700 dark:hover:text-neutral-300" href="/dashboard">Dashboard</Link> }
        { session?.user && <SignOutButton /> }
      </div>
    </div>
  );
}

'use client'

import { signOut } from "@/server/actions/auth"
import { Button } from "@/components/ui/button"

export function SignOutButton() {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="link"
        onClick={async () => {
        await signOut()
      }}>Sign out</Button>
    </div>
  )
}
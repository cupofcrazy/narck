'use client'

import { signOut } from "@/server/actions/auth";
import { HomeIcon, LinkIcon, UserIcon } from "@/components/icons";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useSession } from "@/lib/auth-client";

export function Sidebar() {
  const session = useSession()

  return (
    <div className="sticky top-0 flex flex-col h-screen border-r border-system-100 dark:border-system-800">
      <header className="p-2 flex justify-center">
        <div className="w-6 h-6 rounded-full bg-system-900 dark:bg-system-100"></div>
      </header>
      <div className="flex flex-col justify-between h-full p-2">
        <div>
          
        </div>

        <div>
          <Popover>
            <PopoverTrigger>
              <Avatar src={session?.data?.user?.image ?? ""} fallback={"AS"} size="md" />
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col gap-1 w-[150px]">
                <Button variant="primary" onClick={signOut}>Sign out</Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  )
}
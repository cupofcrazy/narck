import { Avatar } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { getUsers } from "@/server/actions/user";

export default async function Dashboard() {
  const users = await getUsers(10);

  return (
    <div className="p-3">
      <h1 className="font-medium text-system-700 dark:text-system-100 mb-2">Dashboard</h1>

      <div className="p-1 shadow-sm rounded-xl border border-system-200 dark:border-system-700 dark:bg-system-800 w-[300px] min-h-[200px] overflow-hidden">
        <div className="h-10 w-full rounded-t-lg rounded-b-sm bg-system-100 dark:bg-system-700 flex items-center justify-between px-3">
          <h2 className="text-sm font-medium text-system-500 dark:text-system-200">Registered Users</h2>
          <div className="px-2 py-1 flex items-center justify-center gap-1 rounded-full bg-white dark:bg-system-500">
            <p className="text-xs font-bold text-system-500 dark:text-system-200">{users.length.toString().padStart(2, "0")}</p>
          </div>
        </div>

        <div className="p-3">
          {users.map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <Tooltip delay={500}>
                <TooltipTrigger>
                  <Avatar size="lg" src={user.image ?? ""} fallback={user.name} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{user.name.toLowerCase()}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
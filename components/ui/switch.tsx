
import { Switch as SwitchPrimitive } from "@base-ui-components/react/switch";
import { cn } from "@/lib/utils";

type SwitchProps = React.ComponentPropsWithRef<typeof SwitchPrimitive.Root>


export function Switch({ className, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root className={cn("relative p-1 rounded-full w-11 h-6 bg-system-100 data-[checked]:bg-system-500 transition-all duration-200 data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed")} {...props}>
      <SwitchPrimitive.Thumb className="block rounded-full w-4 h-4 aspect-square bg-white shadow-sm transition-all duration-200 data-[checked]:translate-x-[calc(100%+3px)]" />
    </SwitchPrimitive.Root>
  )
}


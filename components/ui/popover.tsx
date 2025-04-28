import * as React from "react";
import { Popover as PopoverPrimitive } from "@base-ui-components/react/popover";
import { cn } from "@/lib/utils";


type PopoverProps = React.ComponentProps<typeof PopoverPrimitive.Root>
type PopoverTriggerProps = React.ComponentProps<typeof PopoverPrimitive.Trigger>
type PopoverContentProps = React.ComponentProps<typeof PopoverPrimitive.Popup> & {
  options?: React.ComponentProps<typeof PopoverPrimitive.Positioner>
}

type PopoverTitleProps = React.ComponentProps<typeof PopoverPrimitive.Title>
type PopoverDescriptionProps = React.ComponentProps<typeof PopoverPrimitive.Description>

const Popover = (props: PopoverProps) => {
  return <PopoverPrimitive.Root {...props} />
}

const PopoverTrigger = (props: PopoverTriggerProps) => {
  return <PopoverPrimitive.Trigger {...props} />
}

const PopoverTitle = (props: PopoverTitleProps) => {
  return <PopoverPrimitive.Title className="text-neutral-900 dark:text-neutral-50 mb-2" {...props} />
}

const PopoverDescription = (props: PopoverDescriptionProps) => {
  return <PopoverPrimitive.Description className="text-sm text-neutral-500 dark:text-neutral-300" {...props} />
}

const PopoverContent = (props: PopoverContentProps) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Backdrop />
      <PopoverPrimitive.Positioner sideOffset={8} {...props.options}>
        <PopoverPrimitive.Popup {...props} className={cn("bg-white dark:bg-neutral-800 rounded-2xl p-1 border border-neutral-200 dark:border-neutral-700 shadow-sm max-w-xs transition-[transform,scale,opacity] data-[ending-style]:scale-[0.95] data-[ending-style]:opacity-0 data-[starting-style]:scale-[0.95] data-[starting-style]:opacity-0", props.className)}  />
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  )
}

export { Popover, PopoverTrigger, PopoverContent, PopoverTitle, PopoverDescription };

import { Dialog as DialogBase } from '@base-ui-components/react/dialog'
import { cn } from '@/lib/utils'


type DialogProps = React.ComponentProps<typeof DialogBase.Root>
type DialogTriggerProps = React.ComponentProps<typeof DialogBase.Trigger>
type DialogPopupProps = React.ComponentProps<typeof DialogBase.Popup>
type DialogBackdropProps = React.ComponentProps<typeof DialogBase.Backdrop>
type DialogPortalProps = React.ComponentProps<typeof DialogBase.Portal>

export const Dialog = ({ children, ...props }: DialogProps) => {
  return (
    <DialogBase.Root {...props}>
      {children}
    </DialogBase.Root>
  )
}

export const DialogTrigger = (props: DialogTriggerProps) => {
  return (
    <DialogBase.Trigger {...props} />
  )
}

export const DialogPopup = (props: DialogPopupProps) => {
  return (
    <DialogBase.Popup className={cn("fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl p-4 w-full max-w-md h-[300px] overflow-y-auto shadow-lg", props.className)} {...props} />
  )
}

export const DialogBackdrop = (props: DialogBackdropProps) => {
  return (
    <DialogBase.Backdrop className={cn("fixed inset-0 bg-black/50", props.className)} {...props} />
  )
}

export const DialogPortal = (props: DialogPortalProps) => {
  return (
    <DialogBase.Portal {...props} />
  )
}

export const DialogNested = (props: DialogProps) => {
  return (
    <DialogBase.Root {...props} />
  )
}






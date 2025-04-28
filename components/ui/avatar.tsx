import { cva, type VariantProps } from 'cva'
import { Avatar as AvatarPrimitive } from '@base-ui-components/react/avatar'
import { cn } from '@/lib/utils'


type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Image> & VariantProps<typeof avatarVariants> & {
  fallback?: string
}

const avatarVariants = cva('w-10 h-10 rounded-full', {
  variants: {
    size: {
      sm: 'w-6 h-6',
      md: 'w-8 h-8',
      lg: 'w-10 h-10',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export function Avatar({ className, size, src, fallback, ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root>
      <AvatarPrimitive.Image src={src} className={cn(avatarVariants({ size, className }))} {...props} />
      <AvatarPrimitive.Fallback>{fallback}</AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}

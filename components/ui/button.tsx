import { cva, type VariantProps } from 'cva'
import { cn } from '@/lib/utils'

export type ButtonProps = VariantProps<typeof buttonVariants> & React.ComponentPropsWithRef<'button'>

const buttonVariants = cva('p-2 rounded-xl font-medium transition-colors', {
  variants: {
    type: {
      icon: 'w-10 h-10 rounded-xl',
      default: 'p-2 rounded-xl',
    },
    variant: {
      primary: 'bg-system-600 text-system-50 hover:bg-system-500',
      secondary: 'bg-system-50 text-system-600 hover:bg-system-100',
      outline: 'border border-system-200 dark:border-system-700 text-system-600 dark:text-system-200 hover:bg-system-50 dark:hover:bg-system-800',
      link: 'text-system-600 dark:text-system-200 hover:text-system-700 dark:hover:text-system-300 hover:underline',
      custom: 'bg-system-50 hover:bg-system-100 dark:bg-system-700 dark:hover:bg-system-700 outline-none focus:ring-2 focus:ring-system-200 text-system-600 dark:text-system-200 border border-system-200 dark:border-system-800 custom-button',
    },
    size: { 
      default: 'py-2 px-3',
      sm: 'p-1.5',
      lg: 'p-3',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: null,
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
    disabled: false,
    type: 'default',
  },
})

export function Button({ className, variant, size, disabled, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size, disabled, className }))} {...props} />
  )
}


import { cva, type VariantProps } from "cva";
import { cn } from "@/lib/utils";

type BadgeProps = React.ComponentPropsWithRef<'div'> & VariantProps<typeof badgeVariants>

const badgeVariants = cva("rounded-full px-2.5 py-1 font-medium inline-flex items-center justify-center gap-1", {
  variants: {
    variant: {
      primary: "bg-system-50 text-system-600",
      secondary: "bg-system-500 text-system-50",
      outline: "border border-system-100 text-system-600",
    }
  },
  defaultVariants: {
    variant: "primary",
  },
});

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, className }))} {...props} />;
}
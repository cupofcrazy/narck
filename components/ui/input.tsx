import * as React from "react";
import { cva, type VariantProps } from "cva";
import { Input as InputPrimitive } from "@base-ui-components/react/input";
import { cn } from "@/lib/utils";


type InputProps = React.ComponentProps<typeof InputPrimitive> & VariantProps<typeof inputVariants> & {
  icon?: React.ReactNode
}

const inputVariants = cva("rounded-xl py-2 px-3 outline-none", {
  variants: {
    variant: {
      default: "border-system-200 bg-system-50 text-system-700 placeholder:text-system-500 focus:ring-1 focus:ring-system-200 focus:ring-offset-2",
      outline: "border border-system-200 text-system-600 placeholder:text-system-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Input({ className, type, variant, icon, ...props }: InputProps) {

  return (
    <div className="relative">
      {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-system-500">{icon}</div>}
      <InputPrimitive
        type={type}
        data-slot="input"
        className={cn(inputVariants({ variant }), className, icon && "pl-8")}
        {...props}
      />
    </div>
  );
}

export { Input };
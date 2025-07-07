"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/utils";
import { tv, type VariantProps } from "tailwind-variants";

export const switchVariants = tv({
  base: [
    "peer inline-flex items-center h-5 w-[46px] shrink-0 rounded-full",
    "focus-visible:ring-[3px] focus-visible:ring-brand-primary",
    "data-[state=unchecked]:bg-fill-secondary outline-none",
    "transition-all disabled:cursor-not-allowed disabled:opacity-50 relative",
  ],
  variants: {
    variant: {
      primary: "data-[state=checked]:bg-brand-primary",
      success: "data-[state=checked]:bg-success-primary",
      error: "data-[state=checked]:bg-error-primary",
    },
  },
  defaultVariants: {
    variant: "success",
  },
});

type SwitchVariants = VariantProps<typeof switchVariants>;

type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root> &
  SwitchVariants & {
    withIcons?: boolean;
  };

function Switch({ className, variant, withIcons = false, ...props }: SwitchProps) {
  const thumbClassName = cn(
    "bg-neutral-white z-10 block h-[84%] w-6 rounded-full ring-0",
    "pointer-events-none transition-transform data-[state=unchecked]:translate-x-[1.62px]",
    "data-[state=checked]:translate-x-[calc(100%-3.42px)]",
  );

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(switchVariants({ variant, className }))}
      {...props}
    >
      {withIcons && (
        <span className="border-neutral-white absolute left-[8px] z-0 h-[6px] rounded-full border-l-[0.54px]" />
      )}
      <SwitchPrimitive.Thumb data-slot="switch-thumb" className={thumbClassName} />
      {withIcons && (
        <span className="border-neutral-white absolute right-[6px] z-0 size-[6px] rounded-full border" />
      )}
    </SwitchPrimitive.Root>
  );
}

export { Switch };

"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "../utils";
import { CheckmarkIcon } from "@diditui/icons-react";

type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root> & {
  size?: "xs" | "sm" | "default";
};

// "",

function Checkbox({ className, size = "default", ...props }: CheckboxProps) {
  const checkboxClassName = cn(
    "border-neutral-mid-soft data-[state=checked]:bg-brand-primary",
    "focus-visible:border-surface-brand-secondary focus-visible:ring-fill-primary focus-visible:ring-[3px]",
    "data-[state=checked]:gradient-brand-700-500 data-[state=checked]:text-neutral-white",
    "aria-invalid:ring-error-secondary data-[state=checked]:border-transparent",
    "aria-invalid:border-error-primary disabled:cursor-not-allowed disabled:opacity-50",
    "shadow-xs peer shrink-0 border outline-none transition-shadow",
    {
      "rounded-2xs size-4": size === "xs",
      "rounded-2xs size-5": size === "sm",
      "rounded-xs size-6": size === "default",
    },
    className,
  );
  return (
    <CheckboxPrimitive.Root data-slot="checkbox" className={checkboxClassName} {...props}>
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckmarkIcon className="size-full" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };

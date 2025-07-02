"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { IconCircle } from "@diditui/icons-react";

import { cn } from "@/utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  const itemClassName = cn(
    "border-fill-secondary text-primary focus-visible:border-brand-hover",
    "aria-invalid:ring-error-secondary dark:aria-invalid:ring-error-secondary",
    "aria-invalid:border-error-primary shadow-xs aspect-square size-4",
    "shrink-0 rounded-full border outline-none transition-[color,box-shadow]",
    "disabled:cursor-not-allowed disabled:opacity-50",
    className,
  );
  return (
    <RadioGroupPrimitive.Item data-slot="radio-group-item" className={itemClassName} {...props}>
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <IconCircle className="fill-brand-primary absolute left-1/2 top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 text-transparent" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };

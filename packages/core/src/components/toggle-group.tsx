"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

import { cn } from "@diditui/core";

function ToggleGroup({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root>) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      className={cn(
        "group/toggle-group bg-neutral-soft text-neutral-mid-high flex w-fit items-center rounded-[4px] p-0.5",
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Root>
  );
}

function ToggleGroupItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item>) {
  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      className={cn(
        "hover:text-brand-hover data-[state=on]:bg-neutral-white data-[state=on]:text-brand-primary",
        "focus-visible:ring-neutral-ultrasoft aria-invalid:ring-surface-error-secondary focus-visible:ring",
        "aria-invalid:border-error-primary inline-flex items-center justify-center rounded-[4px]",
        "outline-none transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        "h-[22px] w-7 shrink-0 focus:z-10 focus-visible:z-10",
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
}

export { ToggleGroup, ToggleGroupItem };

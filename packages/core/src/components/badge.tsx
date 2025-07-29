import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/utils";

const badgeVariants = tv({
  base: [
    "w-fit border px-2 py-1.5 shrink-0 inline-flex items-center justify-center",
    "uppercase whitespace-nowrap border-transparent",
    "focus-visible:ring-fill-primary focus-visible:ring-[3px]",
    "aria-invalid:ring-error-primary/20 dark:aria-invalid:ring-error-primary/40",
    "transition-[color,box-shadow] overflow-hidden rounded-lg",
  ],
  variants: {
    variant: {
      default:
        "bg-neutral-ultrasoft border-neutral-soft text-neutral-mid [a&]:hover:bg-neutral-ultrasoft/50",
      success:
        "bg-surface-success-secondary border-success-tertiary text-success-primary [a&]:hover:bg-surface-success-secondary/50",
      error:
        "bg-surface-error-secondary border-error-tertiary text-error-primary [a&]:hover:bg-surface-error-secondary/50",
      warning:
        "bg-surface-warning-secondary border-warning-tertiary text-warning-primary [a&]:hover:bg-surface-warning-secondary/50",
      primary:
        "bg-transparent border-surface-brand-secondary text-brand-primary [a&]:hover:bg-surface-brand-secondary",
    },
    rounded: {
      "xs": "rounded-xs",
      "sm": "rounded-sm",
      "md": "rounded-md",
      "lg": "rounded-lg",
      "xl": "rounded-xl",
      "2xl": "rounded-2xl",
      "full": "rounded-full",
    },
  },
  defaultVariants: {
    variant: "default",
    rounded: "lg",
  },
});

function Badge({
  className,
  variant,
  rounded,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, rounded }), className)}
      {...props}
    >
      <span className="text-label-inputs inline-flex items-center justify-center gap-1 [&>svg]:pointer-events-none [&>svg]:size-4">
        {children}
      </span>
    </Comp>
  );
}

export { Badge, badgeVariants };

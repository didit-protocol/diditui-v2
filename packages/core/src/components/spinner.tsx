"use client";

import { IconSpinner, type IconProps } from "@diditui/icons-react";

import { cn } from "@/utils";
import { tv, VariantProps } from "tailwind-variants";

const spinnerVariants = tv({
  base: "text-neutral-high animate-spin",
  variants: {
    size: {
      sm: "size-[18px]",
      md: "size-5",
      lg: "size-8",
      xl: "size-13",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type SpinnerVariants = VariantProps<typeof spinnerVariants>;

type SpinnerProps = IconProps & SpinnerVariants;

function Spinner({ className, size, ...props }: SpinnerProps) {
  return <IconSpinner className={cn(spinnerVariants({ className, size }))} {...props} />;
}

export { Spinner };

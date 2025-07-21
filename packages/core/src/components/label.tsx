"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/utils";
import { tv, VariantProps } from "tailwind-variants";

export const labelVariants = tv({
  base: [
    "flex select-none items-center gap-2 peer-disabled:cursor-not-allowed",
    "group-data-[disabled=true]:pointer-events-none peer-disabled:opacity-50",
    "group-data-[disabled=true]:opacity-50 font-inter",
  ],
  variants: {
    variant: {
      "large": "text-label-large",
      "mid": "text-label-mid",
      "small": "text-label-small",
      "extra-small": "text-label-extra-small",
      "styled": "text-label-styled",
      "bold": "text-label-bold",
      "input": "text-label-inputs",
    },
  },
});

type LabelVariants = VariantProps<typeof labelVariants>;

export type LabelProps = React.ComponentProps<typeof LabelPrimitive.Root> & LabelVariants;

function Label({ className, variant = "mid", ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(labelVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Label };

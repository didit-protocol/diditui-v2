"use client";

import { ReactNode } from "react";
import { cn } from "@/utils";
import { tv, type VariantProps } from "tailwind-variants";

import { Slot, Slottable } from "@radix-ui/react-slot";
import { IconSpinner } from "@diditui/icons-react";

export const buttonVariants = tv({
  base: [
    "flex items-center justify-center gap-2 max-w-[256px]",
    "text-link-button whitespace-nowrap cursor-pointer border border-transparent",
    "transition-colors duration-200 ease-in-out",
  ],
  variants: {
    size: {
      icon: "rounded-full size-8 [&>svg]:size-4.5",
      md: "rounded-full py-1.5 px-3 h-8 [&>svg]:size-4",
      lg: "py-2.5 px-3 h-12 rounded-sm [&>svg]:size-6",
    },
    variant: {
      primary:
        "text-neutral-white bg-brand-primary hover:bg-brand-hover focus:outline-1 focus:outline-brand-primary focus:border-neutral-white",
      secondary:
        "border-neutral-black text-neutral-black hover:bg-neutral-black hover:text-neutral-white focus:text-neutral-mid-high",
      tertiary:
        "bg-neutral-ultrasoft hover:bg-neutral-soft text-neutral-black focus:outline-1 focus:outline-neutral-mid-soft",
      destructive:
        "text-neutral-white bg-error-primary hover:bg-error-hover focus:outline-1 focus:outline-error-primary focus:border-neutral-white",
      destructive_secondary:
        "text-error-primary border-error-primary hover:bg-transparent-low-70 focus:border-neutral-white focus:outline-1 focus:outline-error-primary focus:bg-surface-error-secondary",
      success:
        "text-neutral-white bg-success-primary hover:bg-success-hover focus:outline-1 focus:outline-success-primary focus:border-neutral-white",
      ghost:
        "text-neutral-mid hover:bg-neutral-ultrasoft focus:outline-1 focus:outline-neutral-soft focus:border-neutral-white focus:bg-neutral-ultrasoft",
    },
    disabled: {
      true: "pointer-events-none opacity-50",
    },
    isLoading: {
      true: "pointer-events-none",
    },
  },
  compoundVariants: [
    {
      variant: ["primary", "tertiary"],
      disabled: true,
      class: "text-neutral-mid-soft bg-neutral-ultrasoft",
    },
    {
      variant: "secondary",
      disabled: true,
      class: "text-neutral-mid-soft bg-neutral-ultrasoft border-neutral-mid-soft",
    },
  ],
});

type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonProps = React.ComponentProps<"button"> &
  ButtonVariants & {
    asChild?: boolean;
  };

export const Button = ({
  size = "md",
  variant = "primary",
  disabled = false,
  className,
  asChild,
  isLoading = false,
  children,
  ...props
}: ButtonProps): ReactNode => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ size, variant, disabled, isLoading, className }))}
      {...props}
    >
      {size === "icon" && isLoading ? null : <Slottable>{children}</Slottable>}
      {isLoading && <IconSpinner className="animate-spin" />}
    </Comp>
  );
};

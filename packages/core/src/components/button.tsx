"use client";

import { forwardRef, Ref } from "react";
import { cn } from "@/utils";
import { tv, type VariantProps } from "tailwind-variants";

import { Slot, Slottable } from "@radix-ui/react-slot";
import { SpinnerIcon } from "@diditui/icons-react";

export const buttonVariants = tv({
  base: [
    "inline-flex items-center justify-center gap-2 max-w-[256px]",
    "text-link-button whitespace-nowrap cursor-pointer border-[1.4px] border-transparent",
    "transition-colors duration-200 ease-in-out shrink-0 [&_svg]:shrink-0",
    "disabled:pointer-events-none disabled:text-neutral-mid-soft disabled:bg-neutral-ultrasoft",
    "focus-visible:border-surface-brand-secondary focus-visible:ring-fill-primary focus-visible:ring-[3px]",
    "aria-invalid:ring-surface-error-secondary aria-invalid:border-error-primary [&_svg]:pointer-events-none",
  ],
  variants: {
    size: {
      icon: "rounded-full size-8 [&_svg:not([class*='size-'])]:size-4.5",
      md: "rounded-full py-1.5 px-3 h-8 [&_svg:not([class*='size-'])]:size-4",
      lg: "py-2.5 px-3 h-12 rounded-sm [&_svg:not([class*='size-'])]:size-6",
    },
    variant: {
      primary:
        "text-neutral-white bg-brand-primary hover:bg-brand-hover focus:outline-[1.4px] focus:outline-brand-primary focus:border-neutral-white",
      secondary:
        "border-neutral-black bg-fill-quaternary text-neutral-black hover:bg-neutral-black hover:text-neutral-white focus:text-neutral-mid-high focus:border-neutral-mid-high",
      tertiary: [
        "border-neutral-soft bg-neutral-white text-neutral-black",
        "hover:bg-neutral-soft focus:bg-neutral-ultrasoft focus:border-neutral-white",
        "focus:outline-[1.4px] focus:outline-neutral-mid-soft",
      ],
      destructive:
        "text-neutral-white bg-error-primary hover:bg-error-hover focus:outline-[1.4px] focus:outline-error-primary focus:border-neutral-white",
      destructive_secondary:
        "text-error-primary border-error-primary hover:bg-transparent-low-70 focus:border-neutral-white focus:outline-[1.4px] focus:outline-error-primary focus:bg-surface-error-secondary",
      success:
        "text-neutral-white bg-success-primary hover:bg-success-hover focus:outline-[1.4px] focus:outline-success-primary focus:border-neutral-white",
      ghost:
        "text-neutral-mid hover:bg-neutral-ultrasoft focus:outline-[1.4px] focus:outline-neutral-soft focus:border-neutral-white focus:bg-neutral-ultrasoft focus:text-neutral-mid-high",
    },
    disabled: {
      true: "pointer-events-none text-neutral-mid-soft bg-neutral-ultrasoft",
    },
    isLoading: {
      true: "pointer-events-none",
    },
  },
  compoundVariants: [
    {
      variant: ["secondary"],
      disabled: true,
      class: "border-neutral-mid-soft",
    },
    {
      variant: ["tertiary"],
      disabled: true,
      class: "text-neutral-mid",
    },
    {
      variant: "destructive_secondary",
      disabled: true,
      class: "bg-transparent text-surface-error-secondary border-surface-error-secondary",
    },
    {
      variant: ["ghost"],
      disabled: true,
      class: "bg-transparent",
    },
  ],
});

type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonProps = React.ComponentProps<"button"> &
  ButtonVariants & {
    asChild?: boolean;
  };

export const Button = forwardRef(
  (
    {
      size = "md",
      variant = "primary",
      className,
      disabled = false,
      asChild,
      isLoading = false,
      children,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref as Ref<HTMLButtonElement>}
        className={cn(buttonVariants({ size, variant, disabled, isLoading, className }))}
        {...props}
      >
        {size === "icon" && isLoading ? null : <Slottable>{children}</Slottable>}
        {isLoading && <SpinnerIcon className="animate-spin" />}
      </Comp>
    );
  },
);

Button.displayName = "Button";

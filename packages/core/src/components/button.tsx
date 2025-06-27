import { ReactNode } from "react";
import { cn } from "../utils";
import { tv, type VariantProps } from "tailwind-variants";
import { IconProps } from "@diditui/icons-react";

import { Slot } from "@radix-ui/react-slot";

export const buttonVariants = tv({
  base: [
    "flex flex-row-reverse items-center justify-center min-h-[40px] gap-2 max-w-[256px]",
    "text-link-button whitespace-nowrap cursor-pointer border border-transparent",
    "transition-colors duration-200 ease-in-out",
  ],
  variants: {
    size: {
      medium: "py-[6px] px-[24px]",
      large: "py-[11px] px-[24px]",
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
    rounded: {
      true: "rounded-full",
      false: "rounded-sm",
    },
    reversed: {
      true: "flex-row",
    },
    leftAlign: {
      true: "justify-start",
    },
    hasIcon: {
      true: "pl-3 pr-2",
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
    {
      hasIcon: true,
      reversed: true,
      class: "pr-3 pl-2",
    },
  ],
});

type ButtonVariants = Omit<VariantProps<typeof buttonVariants>, "hasIcon">;

type ButtonProps = React.ComponentProps<"button"> &
  ButtonVariants & {
    asChild?: boolean;
    label?: string;
    icon?: React.ComponentType<IconProps>;
  };

export const Button = ({
  label,
  size = "medium",
  variant = "primary",
  disabled = false,
  rounded = false,
  reversed = false,
  icon: Icon = undefined,
  className,
  asChild,
  ...props
}: ButtonProps): ReactNode => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-testid={`cta-button-${label}`}
      className={cn(
        buttonVariants({ size, variant, disabled, rounded, reversed, hasIcon: !!Icon, className }),
      )}
      {...props}
    >
      {Icon && <Icon className="size-6" />}
      {label || props.children}
    </Comp>
  );
};

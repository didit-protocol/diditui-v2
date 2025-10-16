import { ComponentProps, ElementType } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/utils";
import { CloseIcon } from "@diditui/icons-react";
import { Button } from "./button";

export const inputVariants = tv({
  base: [
    "w-full min-w-0 rounded-sm bg-transparent text-paragraph-mid",
    "border border-neutral-soft hover:border-neutral-high flex items-center",
    "placeholder:text-neutral-mid-soft outline-none",
    "[&:not(:placeholder-shown)]:hover:bg-neutral-ultrasoft",
    "selection:bg-fill-primary transition-all file:text-neutral-high",
    "file:font-semibold file:inline-flex file:border-0 file:bg-transparent",
    "disabled:pointer-events-none disabled:cursor-not-allowed",
    "disabled:bg-neutral-ultrasoft disabled:text-neutral-mid",
    "focus-visible:ring-neutral-black focus-visible:border-neutral-black",
    "focus-visible:ring focus-visible:bg-neutral-ultrasoft",
    "aria-invalid:focus-visible:ring-error-primary",
    "aria-invalid:border-error-primary aria-invalid:text-error-secondary",
  ],
  variants: {
    variant: {
      small: "h-10 p-2",
      large: "h-12 p-4",
    },
    withIcon: {
      true: "pl-11",
    },
  },
  defaultVariants: {
    variant: "small",
  },
  compoundVariants: [
    {
      variant: "large",
      withIcon: true,
      class: "pl-16",
    },
  ],
});

type InputVariants = VariantProps<typeof inputVariants>;

type InputProps = ComponentProps<"input"> &
  Omit<InputVariants, "withIcon"> & {
    icon?: ElementType;
    onClear?: () => void;
    containerClassName?: string;
    showClearButton?: boolean;
  };

const Input = function Input({
  className,
  type,
  variant = "small",
  icon: Icon,
  value,
  containerClassName,
  showClearButton = true,
  onChange,
  onClear,
  disabled,
  ...props
}: InputProps) {
  const inputClassName = cn(
    {
      "pr-9.5": showClearButton && value && variant === "small",
      "pr-12.5": showClearButton && value && variant === "large",
    },
    className,
  );

  const iconClassName = cn(
    "bg-fill-quaternary text-neutral-mid-high absolute flex items-center justify-center rounded-full",
    {
      "left-2 size-6 [&>svg]:size-3.5": variant === "small",
      "[&>svg]:size-4.5 left-4 size-8": variant === "large",
    },
  );

  const clearButtonClassName = cn(
    "hover:bg-fill-quaternary hover:text-neutral-mid-high size-6.5 absolute hidden",
    {
      "inline-flex": !!value,
      "right-1.5": variant === "small",
      "right-3": variant === "large",
      "hidden": disabled,
    },
  );

  return (
    <div className={cn("relative flex w-full items-center", containerClassName)}>
      {Icon && (
        <span className={iconClassName}>
          <Icon />
        </span>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(inputVariants({ variant, withIcon: !!Icon }), inputClassName)}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      {showClearButton && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className={clearButtonClassName}
          onClick={onClear}
        >
          <CloseIcon />
          <span className="sr-only">Clear</span>
        </Button>
      )}
    </div>
  );
};

export { Input };

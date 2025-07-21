"use client";

import { cn } from "@/utils";
import {
  CloseCircleIconBold,
  CloseIcon,
  InfoCircleIconBold,
  TickCircleIconBold,
} from "@diditui/icons-react";
import { toast as sonnerToast } from "sonner";
import { tv, type VariantProps } from "tailwind-variants";

export interface ToastBaseProps {
  id: string | number;
  title: string;
  description?: string;
}

export const toastVariants = tv({
  base: [
    "p-4 rounded-sm border border-transparent text-neutral-high w-[300px] sm:w-[356px]",
    "[&_svg[data-slot=icon]]:shrink-0 [&_svg[data-slot=icon]]:size-4 backdrop-blur-md",
  ],
  variants: {
    variant: {
      info: "bg-surface-brand-secondary border-brand-primary/10 [&_svg[data-slot=icon]]:text-brand-primary",
      warning:
        "border-warning-tertiary bg-surface-warning-secondary [&_svg[data-slot=icon]]:text-warning-primary",
      success:
        "border-success-tertiary bg-surface-success-secondary [&_svg[data-slot=icon]]:text-success-primary",
      error:
        "border-error-tertiary bg-surface-error-secondary [&_svg[data-slot=icon]]:text-error-primary",
    },
  },
});

type ToastVariants = VariantProps<typeof toastVariants>;
type ToastIcon = "info" | "warning" | "success" | "error";
type ToastProps = ToastBaseProps &
  ToastVariants & {
    className?: string;
  };

const ICONS_MAP: Record<ToastIcon, React.ReactNode> = {
  info: <InfoCircleIconBold data-slot="icon" />,
  warning: <InfoCircleIconBold data-slot="icon" />,
  success: <TickCircleIconBold data-slot="icon" />,
  error: <CloseCircleIconBold data-slot="icon" />,
};

/** A fully custom toast that still maintains the animations and interactions. */
function Toast(props: ToastProps) {
  const { title, description, id, variant = "info", className } = props;

  return (
    <div className={cn(toastVariants({ variant }), className)}>
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-2 overflow-hidden">
          {ICONS_MAP[variant]}
          <p className="text-paragraph-small truncate">{title}</p>
        </div>
        <button
          aria-label="Close"
          className="size-4.5 shrink-0 cursor-pointer"
          onClick={() => {
            sonnerToast.dismiss(id);
          }}
        >
          <CloseIcon className="size-full" />
        </button>
      </div>
      {description && (
        <p className="text-label-extra-small text-neutral-mid-high mt-2">{description}</p>
      )}
    </div>
  );
}

export { Toast };

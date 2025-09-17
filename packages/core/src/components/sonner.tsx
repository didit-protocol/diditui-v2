"use client";

import { cn } from "@/utils";
import { Toaster, ToasterProps } from "sonner";

const Sonner = ({ className, style, ...props }: ToasterProps) => {
  return (
    <Toaster
      className={cn("toaster group", className)}
      style={
        {
          "--normal-bg": "var(--color-neutral-ultrasoft)",
          "--normal-text": "var(--color-neutral-black)",
          "--normal-border": "var(--color-neutral-mid)",
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Sonner };

"use client";

import { cn } from "@/utils";
import { Toaster, ToasterProps } from "sonner";

const Sonner = ({ className, style, ...props }: ToasterProps) => {
  return (
    <Toaster
      className={cn("toaster group", className)}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Sonner };

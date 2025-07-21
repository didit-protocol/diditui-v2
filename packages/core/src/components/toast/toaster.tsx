"use client";

import { cn } from "@/utils";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ className, style, position = "top-center", ...props }: ToasterProps) => {
  return (
    <Sonner
      className={cn("toaster group", className)}
      style={style}
      position={position}
      {...props}
    />
  );
};

export { Toaster, type ToasterProps };

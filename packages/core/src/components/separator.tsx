"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/utils";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  const rootClassName = cn(
    "bg-neutral-soft shrink-0",
    "data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full",
    "data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px",
    className,
  );

  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={rootClassName}
      {...props}
    />
  );
}

export { Separator };

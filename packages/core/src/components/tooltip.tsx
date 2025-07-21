"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/utils";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

type TooltipContentProps = React.ComponentProps<typeof TooltipPrimitive.Content> & {
  variant?: "dark" | "light";
};

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  variant = "light",
  ...props
}: TooltipContentProps) {
  const contentClassName = cn(
    "animate-in fade-in-0 zoom-in-95",
    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
    "data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2",
    "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
    "data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)",
    "text-neutral-white text-paragraph-small z-50 w-fit text-balance rounded-[8px] px-3 py-1.5",
    {
      "text-neutral-white bg-neutral-high": variant === "dark",
      "text-neutral-black bg-[#F4F4F5]": variant === "light",
    },
    className,
  );

  const arrowClassName = cn(
    "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]",
    {
      "bg-neutral-high fill-neutral-high": variant === "dark",
      "bg-[#F4F4F5] fill-[#F4F4F5]": variant === "light",
    },
  );

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={contentClassName}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className={arrowClassName} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

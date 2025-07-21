"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/utils";

type ScrollAreaProps = React.ComponentProps<typeof ScrollAreaPrimitive.Root> & {
  fadeBottom?: boolean;
};

function ScrollArea({ className, fadeBottom = true, children, ...props }: ScrollAreaProps) {
  const viewportClassName = cn(
    "focus-visible:ring-fill-primary size-full rounded-[inherit] outline-none",
    "transition-[color,box-shadow] focus-visible:outline-1",
    "focus-visible:ring-[3px]",
    {
      "pb-10": fadeBottom,
    },
  );

  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative border-none", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport data-slot="scroll-area-viewport" className={viewportClassName}>
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
      {fadeBottom && (
        <div className="from-neutral-white absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t to-transparent" />
      )}
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none select-none p-px transition-colors",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-neutral-soft relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

export { ScrollArea, ScrollBar };

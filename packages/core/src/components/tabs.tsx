"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/utils";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef, Ref } from "react";

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn("inline-flex w-fit items-center justify-center gap-3", className)}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const triggerClassName = cn(
    "inline-flex min-h-8 flex-1 items-center gap-2 border border-transparent px-2 py-[7px]",
    "whitespace-nowrap rounded-lg transition-[color,box-shadow]",
    "hover:bg-neutral-ultrasoft hover:border-neutral-soft transition-colors",
    "data-[state=active]:bg-neutral-soft data-[state=active]:border-neutral-mid-soft",
    "focus-visible:ring-fill-primary outline-none focus-visible:ring-[3px]",
    "disabled:pointer-events-none disabled:opacity-50",
    "&_svg:not([class*='size-'])]:size-4.5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    "text-neutral-high text-label-inputs uppercase",
    className,
  );

  return <TabsPrimitive.Trigger data-slot="tabs-trigger" className={triggerClassName} {...props} />;
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  const contentClassName = cn("flex-1 outline-none", className);

  return <TabsPrimitive.Content data-slot="tabs-content" className={contentClassName} {...props} />;
}

type TabButtonProps = React.ComponentProps<"button"> & {
  asChild?: boolean;
  active?: boolean;
};

const TabButton = forwardRef(({ className, active, asChild, ...props }: TabButtonProps, ref) => {
  const triggerClassName = cn(
    "inline-flex min-h-8 flex-1 items-center gap-2 border border-transparent",
    "whitespace-nowrap rounded-lg px-2 py-[7px] transition-[color,box-shadow]",
    "hover:bg-neutral-ultrasoft hover:border-neutral-soft transition-colors",
    "focus-visible:ring-fill-primary outline-none focus-visible:ring-[3px]",
    "[&_svg:not([class*='size-'])]:size-4.5 disabled:pointer-events-none",
    "disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    "text-neutral-high text-label-inputs uppercase",
    {
      "bg-neutral-soft border-neutral-mid-soft": active,
    },
    className,
  );

  const Comp = asChild ? Slot : "button";

  return <Comp ref={ref as Ref<HTMLButtonElement>} className={triggerClassName} {...props} />;
});

TabButton.displayName = "TabButton";

export { Tabs, TabsList, TabsTrigger, TabsContent, TabButton };

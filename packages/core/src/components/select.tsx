"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { cn } from "@/utils";
import {
  ArrowDownIcon,
  ArrowUp1Icon,
  ChevronDownIcon,
  TickCircleIconBold,
} from "@diditui/icons-react";

function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default";
}) {
  const triggerClassName = cn(
    "data-[placeholder]:text-neutral-mid-soft text-neutral-black text-paragraph-mid font-normal",
    "focus-visible:border-neutral-mid-soft focus-visible:ring-fill-primary",
    "aria-invalid:ring-surface-error-secondary aria-invalid:border-error-primary",
    "border-neutral-soft flex w-fit items-center justify-between gap-6 rounded-sm border",
    "truncate whitespace-nowrap bg-transparent p-4 outline-none transition-[color,box-shadow]",
    "focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
    "*:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex",
    "*:data-[slot=select-value]:items-center",
    className,
  );
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={triggerClassName}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="text-neutral-black pointer-events-none size-5 shrink-0 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  const contentClassName = cn(
    "bg-neutral-white text-neutral-black data-[state=open]:animate-in data-[state=closed]:animate-out",
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95",
    "data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
    "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 max-h-(--radix-select-content-available-height)",
    "origin-(--radix-select-content-transform-origin) relative z-50 min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-lg shadow-md",
    {
      "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1":
        position === "popper",
    },
    className,
  );

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={contentClassName}
        position={position}
        align="end"
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn("p-2", {
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1":
              position === "popper",
          })}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn(
        "text-neutral-mid-soft text-label-styled mt-2 px-2 py-1.5 uppercase",
        className,
      )}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  const itemClassName = cn(
    "outline-hidden flex w-full items-center justify-between gap-2",
    "*:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
    "focus:bg-neutral-ultrasoft focus:text-neutral-high",
    "text-paragraph-small h-12 cursor-default select-none pl-4 pr-1 font-normal",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    className,
  );
  return (
    <SelectPrimitive.Item data-slot="select-item" className={itemClassName} {...props}>
      <SelectPrimitive.ItemText className="grow overflow-hidden truncate whitespace-nowrap">
        {children}
      </SelectPrimitive.ItemText>
      <span className="flex shrink-0 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <TickCircleIconBold className="text-brand-primary size-5" />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-neutral-ultrasoft pointer-events-none h-px", className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn("flex cursor-default items-center justify-center py-1", className)}
      {...props}
    >
      <ArrowUp1Icon className="text-neutral-mid-soft size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn("flex cursor-default items-center justify-center py-1", className)}
      {...props}
    >
      <ArrowDownIcon className="text-neutral-mid-soft size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};

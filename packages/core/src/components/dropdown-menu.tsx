"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ArrowRight1Icon, CircleIcon } from "@diditui/icons-react";
export type { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { cn } from "@/utils";
import { Checkbox } from "./checkbox";

function DropdownMenu({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  align = "end",
  side = "bottom",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  const contentClassName = cn(
    "bg-neutral-white text-neutral-black relative z-50 min-w-[8rem]",
    "overflow-y-auto overflow-x-hidden rounded-lg p-2 shadow-md",
    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
    "data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
    "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    "max-h-(--radix-dropdown-menu-content-available-height)",
    "origin-(--radix-dropdown-menu-content-transform-origin)",
    className,
  );
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={contentClassName}
        side={side}
        align={align}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  const itemClassName = cn(
    "outline-hidden text-paragraph-small-regular text-neutral-mid-high rounded-sm",
    "relative flex min-h-12 cursor-default select-none items-center justify-between gap-2 px-4",
    "focus:bg-neutral-ultrasoft focus:text-neutral-high data-[disabled]:pointer-events-none",
    "data-[variant=destructive]:text-error-primary data-[variant=destructive]:focus:bg-surface-error-secondary/50",
    "data-[variant=destructive]:focus:text-error-primary data-[variant=destructive]:*:[svg]:!text-error-primary",
    "data-[inset]:pl-8 data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-5",
    "truncate whitespace-nowrap [&_svg]:pointer-events-none [&_svg]:shrink-0",
    "[&_span]:truncate [&_span]:whitespace-nowrap",
    className,
  );
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={itemClassName}
      {...props}
    />
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  const checkboxItemClassName = cn(
    "focus:bg-neutral-ultrasoft focus:text-neutral-high outline-hidden relative flex",
    "h-12 cursor-default select-none items-center justify-between gap-2 px-4",
    "text-paragraph-small text-neutral-high data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    "truncate whitespace-nowrap [&_svg]:pointer-events-none [&_svg]:shrink-0",
    "[&_svg:not([class*='size-'])]:size-3",
    className,
  );

  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={checkboxItemClassName}
      checked={checked}
      {...props}
    >
      {children}
      <Checkbox className="pointer-events-none" size="xs" checked={checked} />
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return <DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
}

function DropdownMenuRadioItem({
  className,
  children,
  spellCheck,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  const radioItemClassName = cn(
    "focus:bg-neutral-ultrasoft focus:text-neutral-high outline-hidden relative flex",
    "h-12 cursor-default select-none items-center justify-between gap-2 px-4",
    "text-paragraph-small text-neutral-high data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    "truncate whitespace-nowrap [&_svg]:pointer-events-none [&_svg]:shrink-0",
    "[&_svg:not([class*='size-'])]:size-3",
    className,
  );

  const indicatorClassName = cn(
    "border-fill-secondary text-primary data-[state=checked]:border-brand-primary",
    "shadow-xs aspect-square size-4 shrink-0 rounded-full border-2 outline-none",
    "flex items-center justify-center transition-[color,box-shadow]",
  );
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={radioItemClassName}
      spellCheck={spellCheck}
      {...props}
    >
      {children}
      <span className={indicatorClassName}>
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="fill-brand-primary size-2.5 text-transparent" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
    </DropdownMenuPrimitive.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "text-neutral-mid-soft text-label-styled mt-2 px-2 py-1.5 uppercase",
        className,
      )}
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-neutral-ultrasoft pointer-events-none h-px", className)}
      {...props}
    />
  );
}

function DropdownMenuSub({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  const subTriggerClassName = cn(
    "text-paragraph-small-regular text-neutral-black flex items-center justify-between",
    "focus:bg-neutral-ultrasoft focus:text-neutral-high outline-hidden cursor-default",
    "data-[state=open]:bg-neutral-ultrasoft data-[state=open]:text-neutral-high",
    "h-12 select-none px-4 data-[inset]:pl-8",
    className,
  );
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={subTriggerClassName}
      {...props}
    >
      {children}
      <ArrowRight1Icon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  const subContentClassName = cn(
    "bg-neutral-white text-neutral-black data-[state=open]:animate-in",
    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
    "data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95",
    "data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2",
    "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
    "data-[side=top]:slide-in-from-bottom-2",
    "origin-(--radix-dropdown-menu-content-transform-origin)",
    "z-50 min-w-[8rem] overflow-hidden rounded-lg p-2 shadow-md",
    className,
  );

  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={subContentClassName}
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};

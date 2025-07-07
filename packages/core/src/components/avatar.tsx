"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/utils";

type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root> & {
  size?: "sm" | "md" | "lg";
  rounded?: boolean;
};

function Avatar({ className, size = "md", rounded = true, ...props }: AvatarProps) {
  const avatarClassName = cn(
    "relative flex size-10 shrink-0 overflow-hidden rounded-full text-sm uppercase",
    {
      "size-8 text-xs": size === "sm",
      "size-10 text-sm": size === "md",
      "size-12 text-base": size === "lg",
      "rounded-sm": !rounded,
    },
    className,
  );

  return <AvatarPrimitive.Root data-slot="avatar" className={avatarClassName} {...props} />;
}

function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn("bg-neutral-soft flex size-full items-center justify-center", className)}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };

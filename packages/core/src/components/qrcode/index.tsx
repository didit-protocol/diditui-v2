"use client";

import { cn } from "@/utils";
import { ComponentProps, ReactNode, useMemo } from "react";
import { QrCodeUtil } from "./generator";

type QrCodeProps = ComponentProps<"div"> & {
  uri: string;
  size?: "sm" | "md" | "lg" | "xl" | number;
  color?: string;
  cutoutElement: ReactNode;
};

const iconSizeMap = {
  sm: 120,
  md: 200,
  lg: 256,
  xl: 320,
};

function QrCode({ uri, size = "md", color, cutoutElement, className, ...props }: QrCodeProps) {
  const svgSize = typeof size === "number" ? size - 16 : iconSizeMap[size] - 16;
  const logoSize = !!cutoutElement ? svgSize / 4 : undefined;
  const dots = useMemo(
    () => QrCodeUtil.generate(uri, svgSize, color, logoSize),
    [uri, svgSize, color, logoSize],
  );

  const divClassNames = cn(
    [
      "flex size-fit items-center justify-center",
      "relative aspect-square overflow-hidden",
      "bg-neutral-ultrasoft rounded-md p-4 shadow-lg",
    ],
    className,
  );

  const cutoutClassName = cn([
    "absolute left-1/2 top-1/2 size-full",
    "-translate-x-1/2 -translate-y-1/2 scale-[0.25] transform",
    "border-error-primary overflow-hidden rounded-lg",
  ]);

  return (
    <div className={divClassNames} {...props}>
      <span className={cutoutClassName}>{cutoutElement && cutoutElement}</span>
      <svg width={svgSize} height={svgSize}>
        {dots}
      </svg>
    </div>
  );
}

export { QrCode };

"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/utils";
import { tv, type VariantProps } from "tailwind-variants";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

const thumbVariants = tv({
  base: [
    "bg-neutral-white focus-visible:outline-hidden block  shrink-0 rounded-full",
    "ring-fill-primary shadow-md transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  variants: {
    size: {
      sm: "w-[46px] h-8",
      md: "w-13 h-8",
    },
    tooltipBehavior: {
      visible: "",
      onDrag: "",
    },
    showLabels: {
      true: "",
    },
    isPercentage: {
      true: "",
    },
  },

  defaultVariants: {
    tooltipBehavior: "visible",
    size: "md",
    showLabels: false,
    isPercentage: false,
  },
});

function SliderLabel({ label }: { label: string }) {
  return <span className={cn("text-label-extra-small text-neutral-mid-high")}>{label}</span>;
}

type SliderProps = React.ComponentProps<typeof SliderPrimitive.Root> &
  VariantProps<typeof thumbVariants> & {
    MinLabel?: typeof SliderLabel;
    MaxLabel?: typeof SliderLabel;
  };

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  size,
  tooltipBehavior,
  showLabels,
  isPercentage,
  MinLabel,
  MaxLabel,
  ...props
}: SliderProps) {
  const [isDragging, setIsDragging] = React.useState(false);

  const _values = React.useMemo(
    () => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]),
    [value, defaultValue, min, max],
  );

  const rootClassName = cn(
    "relative flex w-full touch-none select-none items-center gap-4 data-[orientation=vertical]:h-full",
    "data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto",
    "data-[orientation=vertical]:flex-col data-[disabled]:opacity-50",
    className,
  );

  const trackClassName = cn(
    "bg-neutral-mid-soft relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5",
    "data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full",
    "data-[orientation=vertical]:w-1.5",
  );

  const rangeClassName = cn(
    "bg-brand-primary absolute data-[orientation=horizontal]:h-full",
    "data-[orientation=vertical]:w-full",
  );

  const minLabel = isPercentage ? `${min}%` : `${min}`;
  const maxLabel = isPercentage ? `${max}%` : `${max}`;

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={rootClassName}
      {...props}
    >
      {showLabels && (MinLabel ? <MinLabel label={minLabel} /> : <SliderLabel label={minLabel} />)}
      <SliderPrimitive.Track data-slot="slider-track" className={trackClassName}>
        <SliderPrimitive.Range data-slot="slider-range" className={rangeClassName} />
      </SliderPrimitive.Track>
      {showLabels && (MaxLabel ? <MaxLabel label={maxLabel} /> : <SliderLabel label={maxLabel} />)}
      {Array.from({ length: _values.length }, (_, index) => (
        <Tooltip key={index} open={tooltipBehavior === "onDrag" ? isDragging : true}>
          <TooltipTrigger asChild>
            <SliderPrimitive.Thumb
              onPointerDown={() => setIsDragging(true)}
              onPointerUp={() => setIsDragging(false)}
              data-slot="slider-thumb"
              key={index}
              className={cn(thumbVariants({ size }))}
            />
          </TooltipTrigger>
          <TooltipContent side="bottom" variant="light">
            <p>{isPercentage ? `${_values[index]}%` : _values[index]}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };

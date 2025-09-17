"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { forwardRef } from "react";

const baseClassName = cn([
  "bg-neutral-white focus-visible:outline-hidden block shrink-0 rounded-full",
  "ring-fill-primary shadow-md transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4",
  "h-6 w-[38px] disabled:pointer-events-none disabled:opacity-50",
]);

function SliderLabel({ label }: { label: string }) {
  return <span className={cn("text-label-extra-small text-neutral-mid-high")}>{label}</span>;
}

type SliderProps = React.ComponentProps<typeof SliderPrimitive.Root> & {
  tooltipBehavior?: "visible" | "onDrag";
  containerClassName?: string;
  tooltipSide?: "bottom" | "left" | "right" | "top";
  showLabels?: boolean;
  MinLabel?: typeof SliderLabel;
  MaxLabel?: typeof SliderLabel;
  tooltipFormatter?: (value: number) => string;
  labelFormatter?: (value: number) => string;
};

export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      className,
      containerClassName,
      defaultValue,
      value,
      min = 0,
      max = 100,
      tooltipBehavior,
      tooltipSide = "bottom",
      showLabels = false,
      MinLabel,
      MaxLabel,
      tooltipFormatter = (value) => value.toString(),
      labelFormatter = (value) => value.toString(),
      ...props
    },
    ref,
  ) => {
    const [isDragging, setIsDragging] = React.useState(false);

    const _values = React.useMemo(
      () =>
        Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max],
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

    return (
      <div className={cn("flex flex-col gap-2", containerClassName)}>
        <SliderPrimitive.Root
          data-slot="slider"
          defaultValue={defaultValue}
          value={value}
          min={min}
          max={max}
          className={rootClassName}
          ref={ref}
          {...props}
        >
          <SliderPrimitive.Track data-slot="slider-track" className={trackClassName}>
            <SliderPrimitive.Range data-slot="slider-range" className={rangeClassName} />
          </SliderPrimitive.Track>
          {Array.from({ length: _values.length }, (_, index) => (
            <Tooltip key={index} open={tooltipBehavior === "onDrag" ? isDragging : true}>
              <TooltipTrigger asChild>
                <SliderPrimitive.Thumb
                  onPointerDown={() => setIsDragging(true)}
                  onPointerUp={() => setIsDragging(false)}
                  data-slot="slider-thumb"
                  key={index}
                  className={baseClassName}
                />
              </TooltipTrigger>
              <TooltipContent side={tooltipSide} variant="light">
                <p>{tooltipFormatter(_values[index])}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </SliderPrimitive.Root>
        {showLabels && (
          <div className="flex items-center justify-between gap-2">
            {MinLabel ? (
              <MinLabel label={labelFormatter(min)} />
            ) : (
              <SliderLabel label={labelFormatter(min)} />
            )}
            {MaxLabel ? (
              <MaxLabel label={labelFormatter(max)} />
            ) : (
              <SliderLabel label={labelFormatter(max)} />
            )}
          </div>
        )}
      </div>
    );
  },
);

Slider.displayName = "Slider";

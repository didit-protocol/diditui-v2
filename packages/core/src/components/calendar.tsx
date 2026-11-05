"use client";

import * as React from "react";
import { ArrowLeft1Icon, ArrowDownIcon, ArrowRight1Icon } from "@diditui/icons-react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";
import type { DateRange } from "react-day-picker";

import { cn } from "@/utils";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-neutral-white group/calendar [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit p-3", defaultClassNames.root),
        months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav,
        ),
        button_previous: cn(
          "hover:bg-fill-tertiary flex items-center justify-center rounded-xs",
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          "hover:bg-fill-tertiary flex items-center justify-center rounded-xs",
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          "text-paragraph-small text-neutral-mid-high flex h-(--cell-size) w-full items-center justify-center gap-2",
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          "border-neutral-soft bg-neutral-white has-focus:ring-brand-primary shadow-xs has-focus:ring-[3px]",
          "relative rounded-sm border",
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn("absolute inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "text-paragraph-small text-neutral-mid-high select-none",
          {
            "[&>svg]:text-neutral-mid-high flex h-8 items-center gap-1 rounded-md pr-1 pl-2 [&>svg]:size-3.5":
              captionLayout !== "label",
          },
          defaultClassNames.caption_label,
        ),
        month_grid: cn("w-full border-collapse", defaultClassNames.month_grid),
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-label-extra-small text-neutral-mid flex-1 rounded-md font-normal select-none",
          defaultClassNames.weekday,
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
        week_number: cn(
          "text-label-extra-small text-neutral-mid select-none",
          defaultClassNames.week_number,
        ),
        day: cn(
          "group/day text-neutral-mid-high text-label-mid relative aspect-square h-full w-full p-0 text-center font-normal select-none",
          defaultClassNames.day,
        ),
        range_start: cn("bg-fill-tertiary rounded-l-xs", defaultClassNames.range_start),
        range_middle: cn(
          "bg-fill-tertiary text-neutral-mid-high rounded-none",
          defaultClassNames.range_middle,
        ),
        range_end: cn("bg-fill-tertairy rounded-r-xs", defaultClassNames.range_end),
        today: cn(
          "bg-fill-quaternary rounded-xs data-[selected=true]:rounded-none",
          defaultClassNames.today,
        ),
        outside: cn(
          "text-neutral-mid-soft aria-selected:text-neutral-mid-soft",
          defaultClassNames.outside,
        ),
        disabled: cn("text-neutral-mid-soft opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div data-slot="calendar" ref={rootRef} className={cn("", className)} {...props} />
          );
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return <ArrowLeft1Icon className={cn("size-4", className)} {...props} />;
          }

          if (orientation === "right") {
            return <ArrowRight1Icon className={cn("size-4", className)} {...props} />;
          }

          return <ArrowDownIcon className={cn("size-2", className)} {...props} />;
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  const buttonClassNames = cn(
    "border border-transparent",
    "aria-invalid:ring-error-secondary aria-invalid:border-error-primary inline-flex",
    "shrink-0 items-center justify-center gap-2 rounded-xs transition-all outline-none",
    "focus-visible:ring-fill-primary focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    "hover:bg-fill-tertiary size-9 whitespace-nowrap",
    "data-[selected-single=true]:bg-brand-primary data-[selected-single=true]:text-neutral-white",
    "data-[range-start=true]:bg-brand-primary data-[range-start=true]:text-neutral-white",
    "data-[range-end=true]:bg-brand-primary data-[range-end=true]:text-neutral-white",
    "group-data-[focused=true]/day:border-neutral-ultrasoft group-data-[focused=true]/day:ring-brand-primary",
    "flex aspect-square size-auto min-w-(--cell-size)",
    "group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10",
    "[&>span]:text-label-mid group-data-[focused=true]/day:ring-[3px] [&>span]:opacity-70",
    defaultClassNames.day,
    className,
  );
  return (
    <button
      ref={ref}
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={buttonClassNames}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };

export type { DateRange };

"use client";

import * as React from "react";
import { CalendarIcon } from "@diditui/icons-react";
import {
  Button,
  Calendar,
  Card,
  CardContent,
  cn,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
  type DateRange,
} from "@diditui/core";

export function CalendarWithButtons() {
  const [range, setRange] = React.useState<DateRange | undefined>();
  const [month, setMonth] = React.useState<Date | undefined>(new Date());

  // Quick select functions
  const handleQuickSelect = (type: "week" | "month" | "year") => {
    const today = new Date();
    let from: Date;
    let to: Date;

    switch (type) {
      case "week":
        // Last 7 days
        from = new Date(today);
        from.setDate(today.getDate() - 7);
        to = new Date(today);
        break;
      case "month":
        // Last 30 days
        from = new Date(today);
        from.setDate(today.getDate() - 30);
        to = new Date(today);
        break;
      case "year":
        // Last 365 days
        from = new Date(today);
        from.setDate(today.getDate() - 365);
        to = new Date(today);
        break;
      default:
        return;
    }

    setRange({ from, to });
    // Set month to show the range start
    setMonth(from);
  };

  const buttonClassName = cn(
    "text-paragraph-small text-neutral-mid-high truncate whitespace-nowrap px-1.5 py-0.5 text-start",
    "hover:bg-fill-tertiary rounded-[2px]",
  );

  return (
    <Card padding="none">
      <CardContent className="flex items-stretch">
        <div className="flex flex-col gap-0.5 p-2 pt-4">
          <button className={buttonClassName} onClick={() => handleQuickSelect("week")}>
            Last Week
          </button>
          <button className={buttonClassName} onClick={() => handleQuickSelect("month")}>
            Last Month
          </button>
          <button className={buttonClassName} onClick={() => handleQuickSelect("year")}>
            Last Year
          </button>
          <button className={buttonClassName} onClick={() => handleQuickSelect("year")}>
            Custom
          </button>
        </div>
        <Separator orientation="vertical" className="data-[orientation=vertical]:h-auto" />
        <Calendar
          className="py-2"
          mode="range"
          month={month}
          onMonthChange={setMonth}
          selected={range}
          onSelect={setRange}
        />
      </CardContent>
    </Card>
  );
}

export function CalendarPopover() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        Date of birth
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="tertiary"
            id="date"
            className="bg-neutral-white [&>svg]:text-neutral-high text-paragraph-mid text-neutral-mid-high border-neutral-soft w-48 justify-between p-4 [&>svg]:size-5"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <CalendarIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="end" side="bottom">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";

import { cn } from "@/utils";

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "has-disabled:opacity-50 flex w-full flex-nowrap items-center justify-center gap-2",
        containerClassName,
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  const divClassName = cn(
    "aspect-[49/47] max-h-[47px] w-full max-w-[49px] flex-shrink",
    "headline-small-web sm:text-headline-mid-mobile relative flex",
    "items-center justify-center font-normal",
    "bg-neutral-ultrasoft rounded-[10px] border border-transparent outline-none",
    "data-[active=true]:ring-fill-primary transition-all data-[active=true]:z-10",
    "data-[active=true]:aria-invalid:border-error-primary data-[active=true]:ring-[3px]",
    "data-[active=true]:aria-invalid:ring-surface-error-secondary",
    "aria-invalid:text-error-secondary aria-invalid:border-error-primary",
    className,
  );

  return (
    <div data-slot="input-otp-slot" data-active={isActive} className={divClassName} {...props}>
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-neutral-black h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  );
}

export { InputOTP, InputOTPSlot };

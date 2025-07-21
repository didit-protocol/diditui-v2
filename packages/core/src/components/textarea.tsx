import * as React from "react";

import { cn } from "@/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "text-paragraph-mid w-full min-w-0 rounded-sm bg-transparent p-4",
        "border-neutral-soft hover:border-neutral-high flex items-center border",
        "placeholder:text-neutral-mid-soft outline-none",
        "[&:not(:placeholder-shown)]:hover:bg-neutral-ultrasoft",
        "selection:bg-fill-primary file:text-neutral-high transition-all",
        "file:inline-flex file:border-0 file:bg-transparent file:font-semibold",
        "disabled:pointer-events-none disabled:cursor-not-allowed",
        "disabled:bg-neutral-ultrasoft disabled:text-neutral-mid",
        "focus-visible:ring-neutral-black focus-visible:border-neutral-black",
        "focus-visible:bg-neutral-ultrasoft focus-visible:ring",
        "aria-invalid:focus-visible:ring-error-primary",
        "aria-invalid:border-error-primary aria-invalid:text-error-secondary",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };

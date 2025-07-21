import * as React from "react";

import { cn } from "@/utils";

type CardProps = React.ComponentProps<"div">;

function Card({ className, ...props }: CardProps) {
  const cardClassName = cn(
    "bg-neutral-white border-neutral-soft rounded-xl border-2 px-6 py-8",
    "space-y-6",
    className,
  );
  return <div data-slot="card" className={cardClassName} {...props} />;
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  const cardTitleClassName = cn(
    "text-headline-small text-neutral-mid-high flex items-center gap-2",
    "truncate [&_span]:truncate [&_svg]:size-6 [&_svg]:shrink-0",
    className,
  );
  return <div data-slot="card-title" className={cardTitleClassName} {...props} />;
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("space-y-6", className)} {...props} />;
}

export { Card, CardTitle, CardContent };

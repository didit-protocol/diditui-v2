import * as React from "react";

import { cn } from "@/utils";
import { tv, VariantProps } from "tailwind-variants";

export const cardVariants = tv({
  base: ["bg-white"],
  variants: {
    padding: {
      none: "p-0",
      default: "p-4",
    },
    shadow: {
      none: "shadow-none",
      xs: "shadow-xs",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
    },
    rounded: {
      "none": "rounded-none",
      "2xs": "rounded-2xs",
      "xs": "rounded-xs",
      "sm": "rounded-sm",
      "md": "rounded-md",
      "lg": "rounded-lg",
      "xl": "rounded-xl",
      "2xl": "rounded-2xl",
    },
  },
  defaultVariants: {
    padding: "default",
    shadow: "md",
    rounded: "lg",
  },
});

type CardProps = React.ComponentProps<"div"> & VariantProps<typeof cardVariants>;

function Card({ padding, shadow, rounded, className, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ padding, shadow, rounded, className }))}
      {...props}
    />
  );
}

// function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="card-header"
//       className={cn(
//         "@container/card-header has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6",
//         className,
//       )}
//       {...props}
//     />
//   );
// }

// function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="card-title"
//       className={cn("font-semibold leading-none", className)}
//       {...props}
//     />
//   );
// }

// function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="card-description"
//       className={cn("text-muted-foreground text-sm", className)}
//       {...props}
//     />
//   );
// }

// function CardAction({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="card-action"
//       className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
//       {...props}
//     />
//   );
// }

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={className} {...props} />;
}

// function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="card-footer"
//       className={cn("[.border-t]:pt-6 flex items-center px-6", className)}
//       {...props}
//     />
//   );
// }

export {
  Card,
  // CardHeader, CardFooter, CardTitle, CardAction, CardDescription,
  CardContent,
};

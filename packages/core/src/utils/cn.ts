import clsx, { ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Custom tailwind-merge configuration to handle our custom text classes
const customTwMerge = extendTailwindMerge({
  extend: {
    theme: {
      color: [
        "navy-100",
        "navy-200",
        "navy-300",
        "navy-400",
        "navy-500",
        "navy-600",
        "navy-700",
        "navy-800",
        "navy-900",
        "measurement",
        "measurement-2",
        // Neutral colors
        "neutral",
        "neutral-black",
        "neutral-white",
        "neutral-high",
        "neutral-high-hover",
        "neutral-mid-high",
        "neutral-mid-high-hover",
        "neutral-mid",
        "neutral-mid-hover",
        "neutral-mid-soft",
        "neutral-mid-soft-hover",
        "neutral-soft",
        "neutral-soft-hover",
        "neutral-ultrasoft",
        "neutral-ultrasoft-hover",
        // Brand colors
        "brand-primary",
        "brand-hover",
        "brand-secondary",
        "brand-alt",
        // Success colors
        "success-primary",
        "success-hover",
        "success-secondary",
        // Warning colors
        "warning-primary",
        "warning-hover",
        "warning-secondary",
        // Error colors
        "error-primary",
        "error-hover",
        "error-secondary",
        // Utility colors
        "utility-overlay",
        "utility-measurement",
        "utility-scrim",
        "utility-blanket",
        // Fill colors
        "fill",
        "fill-primary",
        "fill-secondary",
        "fill-tertiary",
        "fill-quaternary",
        // Surface colors
        "surface-brand-secondary",
        "surface-success-secondary",
        "surface-warning-secondary",
        "surface-error-secondary",
        "surface-utility-overlay",
        "surface-utility-measurement",
        // Transparent colors
        "transparent-brand-50",
        "transparent-low-70",
        "transparent-background-10",
      ],
      text: [
        // Display classes
        "display-large",
        "display-mid",
        "display-small",
        // Headline classes
        "headline-large",
        "headline-mid",
        "headline-small",
        // Paragraph classes
        "paragraph-large",
        "paragraph-mid",
        "paragraph-small",
        "paragraph-small-regular",
        // Label classes
        "label-large",
        "label-mid",
        "label-small",
        "label-extra-small",
        "label-styled",
        "label-bold",
        "label-inputs",
        // Link classes
        "link-button",
        "link-mid",
      ],
    },
  },
});

export function cn(...classes: ClassValue[]) {
  return customTwMerge(clsx(classes));
}

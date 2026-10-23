import { MediaQuery } from "@/utils";
import * as React from "react";

export function useMediaQueryMatch(
  mediaQuery: (typeof MediaQuery)[keyof typeof MediaQuery] = MediaQuery.MD,
  type: "min" | "max" = "min",
) {
  const query = type === "min" ? `(min-width: ${mediaQuery}px)` : `(max-width: ${mediaQuery}px)`;

  const subscribe = React.useCallback(
    (onStoreChange: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onStoreChange);
      return () => mql.removeEventListener("change", onStoreChange);
    },
    [query],
  );

  // The server snapshot is false, matching the previous initial state before the effect ran.
  return React.useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}

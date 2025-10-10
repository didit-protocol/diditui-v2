import { MediaQuery } from "@/utils";
import * as React from "react";

export function useMediaQueryMatch(
  mediaQuery: (typeof MediaQuery)[keyof typeof MediaQuery] = MediaQuery.MD,
  type: "min" | "max" = "min",
) {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const query = type === "min" ? `(min-width: ${mediaQuery}px)` : `(max-width: ${mediaQuery}px)`;
    const mql = window.matchMedia(query);
    const onChange = (mql: MediaQueryListEvent) => {
      setIsMobile(mql.matches);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, [mediaQuery, type]);

  return isMobile;
}

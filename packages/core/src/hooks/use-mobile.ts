import { MediaQuery } from "@/utils";
import * as React from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MediaQuery.MD - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MediaQuery.MD);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MediaQuery.MD);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

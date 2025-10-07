import { MediaQuery } from "@/utils";
import { useMediaQueryMatch } from "./use-media-query-match";

export function useIsMobile() {
  return useMediaQueryMatch(MediaQuery.MD, "max");
}

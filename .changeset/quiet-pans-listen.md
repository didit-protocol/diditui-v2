---
"@diditui/core": patch
---

Make `useMediaQueryMatch` read the media query with `useSyncExternalStore` instead of setting state inside an effect, and derive the `SidebarMenuSkeleton` width from the React instance id instead of `Math.random()`, so rendering is pure and server and client markup match.

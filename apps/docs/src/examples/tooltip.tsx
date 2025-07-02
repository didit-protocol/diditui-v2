import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@diditui/core";

export function TooltipExample() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="primary">Hover</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  );
}

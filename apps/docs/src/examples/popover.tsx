import { Button, Label, Popover, PopoverContent, PopoverTrigger } from "@diditui/core";

export function PopoverExample() {
  return (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
}

export function PopoverExampleWithTrigger() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="text-headline-small">Dimensions</h4>
            <p className="text-paragraph-mid">Set the dimensions for the layer.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label variant="small" htmlFor="width">
                Width
              </Label>
              <Button variant="primary">100%</Button>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label variant="small" htmlFor="maxWidth">
                Max. width
              </Label>
              <Button variant="tertiary">300px</Button>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label variant="small" htmlFor="height">
                Height
              </Label>
              <Button variant="success">25px</Button>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label variant="small" htmlFor="maxHeight">
                Max. height
              </Label>
              <Button variant="destructive">none</Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

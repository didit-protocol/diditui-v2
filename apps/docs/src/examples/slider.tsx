import { Slider, cn } from "@diditui/core";
import { IconSun, IconSun2 } from "@diditui/icons-react";

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderExample({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[700px]", className)}
      size="sm"
      MinLabel={() => <IconSun className="text-neutral-mid shrink-0" />}
      MaxLabel={() => <IconSun2 className="text-neutral-mid shrink-0" />}
      {...props}
    />
  );
}

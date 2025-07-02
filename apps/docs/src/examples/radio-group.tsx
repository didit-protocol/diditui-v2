import { Label, RadioGroup, RadioGroupItem } from "@diditui/core";

export function RadioGroupExample() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="default" id="r1" />
        <Label variant="small" htmlFor="r1">
          Default
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label variant="small" htmlFor="r2">
          Comfortable
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="compact" id="r3" />
        <Label variant="small" htmlFor="r3">
          Compact
        </Label>
      </div>
    </RadioGroup>
  );
}

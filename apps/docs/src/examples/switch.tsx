import { Label, Switch } from "@diditui/core";
import { useState } from "react";

export const SwitchExample = ({
  variant = "success",
  labelVariant = "mid",
  withIcons = false,
}: {
  variant?: "success" | "primary" | "error";
  labelVariant?: "large" | "mid" | "small" | "extra-small" | "styled" | "bold" | "input";
  withIcons?: boolean;
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Switch
          withIcons={withIcons}
          id="switch"
          variant={variant}
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Label htmlFor="switch" variant={labelVariant}>
          Airplan Mode
        </Label>
      </div>
    </div>
  );
};

"use client";

import { Checkbox, Label } from "@diditui/core";

export function CheckboxExample() {
  return (
    <div className="font-inter flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Checkbox size="sm" id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="terms-2" defaultChecked />
        <div className="grid gap-2">
          <Label htmlFor="terms-2">Accept terms and conditions</Label>
          <p className="text-muted-foreground text-sm">
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="toggle" disabled size="sm" />
        <Label htmlFor="toggle">Enable notifications</Label>
      </div>
      <Label className="hover:bg-neutral-ultrasoft has-[[aria-checked=true]]:border-brand-primary has-[[aria-checked=true]]:bg-brand-primary/10 border-neutral-mid-soft flex items-start gap-3 rounded-lg border p-3">
        <Checkbox id="toggle-2" defaultChecked />
        <div className="grid gap-1.5 font-normal">
          <p className="text-sm font-medium leading-none">Enable notifications</p>
          <p className="text-muted-foreground text-sm">
            You can enable or disable notifications at any time.
          </p>
        </div>
      </Label>
    </div>
  );
}

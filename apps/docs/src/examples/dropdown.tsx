import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  type DropdownMenuCheckboxItemProps,
} from "@diditui/core";
import { IconAddCircle, IconLogout1 } from "@diditui/icons-react";
import { useState } from "react";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="tertiary">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <div className="px-4 py-2">
          <h4 className="text-paragraph-small">Alberto-R</h4>
          <p className="text-paragraph-small-regular text-neutral-mid-high">
            albertorosas@didit.me
          </p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="text-neutral-mid-high">
              Invite users
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-neutral-mid-high">Account settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-neutral-mid-high">
            Create organization
            <IconAddCircle />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            Log out
            <IconLogout1 />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false);
  const [showPanel, setShowPanel] = useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="tertiary">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="tertiary">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

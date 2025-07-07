import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  cn,
  SidebarMenuButton,
  type SidebarMenuButtonProps,
} from "@diditui/core";
import { ArrowUpDownIcon } from "@diditui/icons-react";

type TeamButtonProps = SidebarMenuButtonProps & {
  name: string;
  logo: string;
  sold?: string;
};

export function TeamButton({ name, logo, sold, className, ...props }: TeamButtonProps) {
  const buttonClassName = cn(
    "justify-between gap-4 p-1",
    "hover:bg-fill-tertiary active:bg-fill-secondary",
    "group-has-data-[sidebar=menu-action]/menu-item:border outline-none",
    "group-has-data-[sidebar=menu-action]/menu-item:border-error-primary",
    "data-[active=true]:bg-fill-secondary data-[state=open]:bg-fill-secondary",
    "group-has-data-[collapsible=icon]:size-11! group-has-data-[collapsible=icon]:p-0!",
    "group-data-[collapsible=icon]:justify-center",
    className,
  );

  return (
    <SidebarMenuButton className={buttonClassName} {...props}>
      <div className="text-neutral-high flex grow items-center gap-3 overflow-hidden group-data-[collapsible=icon]:grow-0">
        <Avatar className="size-12.5 shrink-0 group-data-[collapsible=icon]:size-10">
          <AvatarImage src={logo} alt="app logo" />
          <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div className="text-paragraph-large text-neutral-mid-high flex grow flex-col gap-1 overflow-hidden text-left group-data-[collapsible=icon]:hidden">
          <span className="text-paragraph-large truncate">{name}</span>
          <span className="text-label-mid rounded-2xs bg-fill-quaternary w-fit truncate px-2 py-1">
            {sold}
          </span>
        </div>
      </div>
      <ArrowUpDownIcon className="text-neutral-mid-high size-6 group-data-[collapsible=icon]:hidden" />
    </SidebarMenuButton>
  );
}

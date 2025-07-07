import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  cn,
  SidebarMenuButton,
  type SidebarMenuButtonProps,
} from "@diditui/core";
import { ArrowUpDownIcon } from "@diditui/icons-react";

type AppButtonProps = SidebarMenuButtonProps & {
  name: string;
  logo: string;
  kpi?: string;
};

export function AppButton({ name, logo, kpi, className, ...props }: AppButtonProps) {
  const buttonClassName = cn(
    "min-h-16 justify-between gap-4 px-4 py-2",
    "bg-fill-quaternary hover:bg-fill-tertiary active:bg-fill-secondary",
    "group-has-data-[sidebar=menu-action]/menu-item:border outline-none",
    "group-has-data-[sidebar=menu-action]/menu-item:border-error-primary",
    "data-[active=true]:bg-fill-secondary data-[state=open]:bg-fill-secondary",
    "group-has-data-[collapsible=icon]:size-16! group-has-data-[collapsible=icon]:p-0!",
    "group-data-[collapsible=icon]:justify-center",
    className,
  );

  return (
    <SidebarMenuButton className={buttonClassName} {...props}>
      <div className="text-neutral-high flex grow items-center gap-3 overflow-hidden group-data-[collapsible=icon]:grow-0">
        <Avatar size="md" className="shrink-0">
          <AvatarImage src={logo} alt="app logo" />
          <AvatarFallback className="bg-neutral-white">{name.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div className="text-neutral-high flex grow flex-col gap-1 overflow-hidden text-left group-data-[collapsible=icon]:hidden">
          <span className="text-headline-mid truncate">{name}</span>
          <span className="text-label-extra-small text-neutral-mid truncate">{kpi}</span>
        </div>
      </div>
      <ArrowUpDownIcon className="text-neutral-mid-high size-6 group-data-[collapsible=icon]:hidden" />
    </SidebarMenuButton>
  );
}

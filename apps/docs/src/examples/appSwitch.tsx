"use client";

import * as React from "react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@diditui/core";
import { AddCircleIcon, Edit2Icon } from "@diditui/icons-react";
import { AppButton } from "./appButton";

export function AppSwitcher({
  apps,
}: {
  apps: {
    name: string;
    logo: string;
    kpi: string;
  }[];
}) {
  const { isMobile } = useSidebar();
  const [activeApp, setActiveApp] = React.useState(apps[0]);

  console.log("isMobile", isMobile);

  if (!activeApp) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <AppButton name={activeApp.name} logo={activeApp.logo} kpi={activeApp.kpi} />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[248px]"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuGroup className="flex flex-col gap-1">
              {apps.map((app) => (
                <DropdownMenuItem
                  key={app.name}
                  className="text-neutral-high border-error-primary gap-3 px-2.5 py-2"
                  onClick={() => setActiveApp(app)}
                >
                  <div className="flex grow items-center gap-3 overflow-hidden">
                    <Avatar size="md">
                      <AvatarImage src={app.logo} alt="@shadcn" />
                      <AvatarFallback>{app.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span className="text-headline-mid truncate">{app.name}</span>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>

            <DropdownMenuItem className="text-neutral-high border-error-primary gap-4 px-2.5 py-2">
              <div className="flex grow items-center gap-3 overflow-hidden">
                <div className="flex size-10 items-center justify-center">
                  <Edit2Icon className="size-6" />
                </div>
                <span className="text-headline-mid truncate">Edit app</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-neutral-high border-error-primary gap-4 px-2.5 py-2">
              <div className="flex grow items-center gap-3 overflow-hidden">
                <div className="flex size-10 items-center justify-center">
                  <AddCircleIcon className="size-6" />
                </div>
                <span className="text-headline-mid truncate">Add new app</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

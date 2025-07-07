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
import { TeamButton } from "./teamButton";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: string;
    sold: string;
  }[];
}) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  console.log("isMobile", isMobile);

  if (!activeTeam) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <TeamButton name={activeTeam.name} logo={activeTeam.logo} sold={activeTeam.sold} />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[248px]"
            align="end"
            side={isMobile ? "top" : "right"}
            sideOffset={4}
          >
            <DropdownMenuGroup className="flex flex-col gap-1">
              {teams.map((team) => (
                <DropdownMenuItem
                  key={team.name}
                  className="text-neutral-high border-error-primary gap-3 px-2.5 py-2"
                  onClick={() => setActiveTeam(team)}
                >
                  <div className="flex grow items-center gap-3 overflow-hidden">
                    <Avatar size="md">
                      <AvatarImage src={team.logo} alt="@shadcn" />
                      <AvatarFallback>{team.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span className="text-headline-mid truncate">{team.name}</span>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>

            <DropdownMenuItem className="text-neutral-high border-error-primary gap-4 px-2.5 py-2">
              <div className="flex grow items-center gap-3 overflow-hidden">
                <div className="flex size-10 items-center justify-center">
                  <Edit2Icon className="size-6" />
                </div>
                <span className="text-headline-mid truncate">Team Setting</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-neutral-high border-error-primary gap-4 px-2.5 py-2">
              <div className="flex grow items-center gap-3 overflow-hidden">
                <div className="flex size-10 items-center justify-center">
                  <AddCircleIcon className="size-6" />
                </div>
                <span className="text-headline-mid truncate">Add new team</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

"use client";

import * as React from "react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@diditui/core";
import { AppButton } from "./app-button";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: string;
    plan: string;
  }[];
}) {
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  if (!activeTeam) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <AppButton name={activeTeam.name} logo={activeTeam.logo} plan={activeTeam.plan} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        align="start"
        side={"right"}
        sideOffset={4}
      >
        <DropdownMenuLabel>Apps</DropdownMenuLabel>
        {teams.map((team, index) => (
          <React.Fragment key={team.name}>
            <DropdownMenuItem
              className="text-neutral-high flex grow items-center gap-3 overflow-hidden"
              onClick={() => setActiveTeam(team)}
            >
              <Avatar size="md" className="size-[34px]">
                <AvatarImage src={team.logo} alt="@shadcn" />
                <AvatarFallback className="bg-neutral-white">CN</AvatarFallback>
              </Avatar>
              <span className="text-headline-mid truncate">{team.name}</span>
            </DropdownMenuItem>
            {index < teams.length - 1 && <DropdownMenuSeparator />}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

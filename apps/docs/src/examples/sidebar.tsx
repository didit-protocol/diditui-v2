"use client";

import * as React from "react";
import {
  ColorSwatchIcon,
  Data2Icon,
  GraphIcon,
  PersonalcardIcon,
  Grid7Icon,
  CheckIcon,
  ScrollIcon,
  CodeIcon,
  MessageQuestionIcon,
} from "@diditui/icons-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@diditui/core";
import { AppSwitcher } from "./appSwitch";
import { TeamSwitcher } from "./teamSwitch";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  apps: [
    {
      name: "Didit UI V2 Didit UI V2 Didit UI V2 Didit UI V2",
      logo: "https://s3-eu-west-1.amazonaws.com/tpd/logos/66e410a34358e36e3659a724/0x0.png",
      kpi: "3 members - 19.234 verifications",
    },
    {
      name: "Acme Corp.",
      logo: "https://github.com/shadcn.png",
      kpi: "1 member",
    },
    {
      name: "Evil Corp.",
      logo: "",
      kpi: "",
    },
  ],
  teams: [
    {
      name: "9Labs Organization Organization",
      logo: "https://s3-eu-west-1.amazonaws.com/tpd/logos/66e410a34358e36e3659a724/0x0.png",
      sold: "$4,923,72",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: Grid7Icon,
      isActive: false,
    },
    {
      title: "Verifications",
      url: "#",
      icon: PersonalcardIcon,
      isActive: true,
    },
    {
      title: "Analytics",
      url: "#",
      icon: GraphIcon,
      isActive: false,
    },
    {
      title: "Workflows",
      url: "#",
      icon: Data2Icon,
      isActive: false,
    },
    {
      title: "Customization",
      url: "#",
      icon: ColorSwatchIcon,
      isActive: false,
    },
  ],
  navAdvanced: [
    {
      title: "Manual Checks",
      url: "#",
      icon: CheckIcon,
      isActive: false,
    },
    {
      title: "API & Webhooks",
      url: "#",
      icon: ScrollIcon,
      isActive: false,
    },
  ],
  navRest: [
    {
      title: "Documentation",
      url: "#",
      icon: CodeIcon,
      isActive: false,
    },
    {
      title: "Support",
      url: "#",
      icon: MessageQuestionIcon,
      isActive: false,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AppSwitcher apps={data.apps} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>General</SidebarGroupLabel>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton isActive={item.isActive}>
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Advanced</SidebarGroupLabel>
          <SidebarMenu>
            {data.navAdvanced.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton isActive={item.isActive}>
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-0 group-data-[collapsible=icon]:px-0">
        <SidebarGroup className="px-4 group-data-[collapsible=icon]:px-2">
          <SidebarMenu>
            {data.navRest.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton isActive={item.isActive}>
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup className="px-4 group-data-[collapsible=icon]:px-2">
          <div className="flex items-end justify-between gap-4 transition-all group-data-[collapsible=icon]:flex-col-reverse">
            <TeamSwitcher teams={data.teams} />
            <SidebarTrigger className="shrink-0" />
          </div>
        </SidebarGroup>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

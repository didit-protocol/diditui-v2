"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ComponentPreviewTabs({
  className,
  align = "center",
  hideCode = false,
  component,
  source,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "center" | "start" | "end";
  hideCode?: boolean;
  component: React.ReactNode;
  source: React.ReactNode;
}) {
  const [tab, setTab] = React.useState("preview");

  return (
    <div className={cn("group relative mb-12 mt-4 flex flex-col gap-2", className)} {...props}>
      <Tabs className="relative mr-auto w-full" value={tab} onValueChange={setTab}>
        <div className="flex items-center justify-between">
          {!hideCode && (
            <TabsList className="justify-start gap-4 rounded-none bg-transparent px-2 md:px-0">
              <TabsTrigger
                value="preview"
                className="text-muted-foreground data-[state=active]:text-foreground px-0 text-base data-[state=active]:shadow-none dark:data-[state=active]:border-transparent dark:data-[state=active]:bg-transparent"
              >
                Preview
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="text-muted-foreground data-[state=active]:text-foreground px-0 text-base data-[state=active]:shadow-none dark:data-[state=active]:border-transparent dark:data-[state=active]:bg-transparent"
              >
                Code
              </TabsTrigger>
            </TabsList>
          )}
        </div>
      </Tabs>
      <div
        data-tab={tab}
        className="data-[tab=code]:border-code relative rounded-lg border md:-mx-4"
      >
        <div
          data-slot="preview"
          data-active={tab === "preview"}
          className="invisible data-[active=true]:visible"
        >
          <div
            data-align={align}
            className={cn(
              "preview flex h-[450px] w-full justify-center p-10 data-[align=start]:items-start data-[align=end]:items-end data-[align=center]:items-center",
            )}
          >
            {component}
          </div>
        </div>
        <div
          data-slot="code"
          data-active={tab === "code"}
          className="**:[figure]:!m-0 **:[pre]:h-[450px] absolute inset-0 hidden overflow-hidden data-[active=true]:block"
        >
          {source}
        </div>
      </div>
    </div>
  );
}

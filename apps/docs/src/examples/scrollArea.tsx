import * as React from "react";

import { ScrollArea, Separator } from "@diditui/core";

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export function ScrollAreaDemo() {
  return (
    <ScrollArea fadeBottom={true} className="h-72 w-48">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag, index) => (
          <React.Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            {index !== tags.length - 1 && <Separator className="my-2" />}
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}

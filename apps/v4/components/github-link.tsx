import * as React from "react";
import Link from "next/link";

import { siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function GitHubLink() {
  return (
    <Button asChild size="sm" variant="ghost" className="h-8 shadow-none">
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <Icons.gitHub />
        <span>@diditui</span>
      </Link>
    </Button>
  );
}

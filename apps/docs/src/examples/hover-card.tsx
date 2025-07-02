import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Button,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@diditui/core";

export function HoverCardExample() {
  return (
    <HoverCard>
      <HoverCardTrigger>Hover</HoverCardTrigger>
      <HoverCardContent>The React Framework – created and maintained by @vercel.</HoverCardContent>
    </HoverCard>
  );
}

export function HoverCardAdvanced() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <Avatar rounded={false}>
            <AvatarImage src="https://github.com/vercelss.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h4 className="text-label-bold">@nextjs</h4>
            <p className="text-paragraph-small">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="text-neutral-mid text-paragraph-small-regular">
              Joined December 2021
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

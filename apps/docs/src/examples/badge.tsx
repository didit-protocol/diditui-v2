import { Badge } from "@diditui/core";
import {
  CloseCircleIconBold,
  InfoCircleIconBold,
  SearchStatus1IconBold,
  SpinnerIcon,
  TickCircleIconBold,
} from "@diditui/icons-react";

export function BadgeDemo() {
  return (
    <div className="w-[700px]">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="default">Default</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="primary">Primary</Badge>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Badge rounded="xs" variant="default">
          Default
        </Badge>
        <Badge rounded="xs" variant="success">
          Success
        </Badge>
        <Badge rounded="xs" variant="error">
          Error
        </Badge>
        <Badge rounded="xs" variant="warning">
          Warning
        </Badge>
        <Badge rounded="xs" variant="primary">
          $190
        </Badge>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="default">
          <InfoCircleIconBold />
          Default
        </Badge>
        <Badge variant="default">
          <SpinnerIcon />
          In Progress
        </Badge>
        <Badge variant="success">
          <TickCircleIconBold />
          Success
        </Badge>
        <Badge variant="warning">
          <SearchStatus1IconBold />
          Warning
        </Badge>
        <Badge variant="error">
          <CloseCircleIconBold />
          Error
        </Badge>
        <Badge variant="primary">
          <TickCircleIconBold />
          Primary
        </Badge>
      </div>
    </div>
  );
}

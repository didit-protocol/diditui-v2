import { Avatar, AvatarFallback, AvatarImage, cn } from "@diditui/core";
import { ArrowUpDownIcon } from "@diditui/icons-react";

type AppButtonProps = React.ComponentProps<"button"> & {
  name: string;
  logo: string;
  plan?: string;
};

export function AppButton({ name, logo, plan, ...props }: AppButtonProps) {
  const buttonClassName = cn(
    "bg-fill-quaternary inline-flex min-h-16 w-full items-center justify-between",
    "shrink-0 cursor-pointer gap-6 rounded-sm px-4 py-2 transition-colors duration-200 ease-in-out",
    "hover:bg-fill-tertiary disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:ring-fill-primary focus-visible:ring-[3px]",
    "data-[state=open]:bg-fill-secondary outline-none",
  );

  return (
    <button className={buttonClassName} {...props}>
      <div className="text-neutral-high flex grow items-center gap-3 overflow-hidden">
        <Avatar className="size-lg">
          <AvatarImage src={logo} alt="app logo" />
          <AvatarFallback className="bg-neutral-white">CN</AvatarFallback>
        </Avatar>
        <div className="text-neutral-high flex grow flex-col gap-px overflow-hidden text-left">
          <span className="text-headline-mid truncate">{name}</span>
          <span className="text-label-extra-small text-neutral-mid truncate">{plan}</span>
        </div>
      </div>
      <div className="text-neutral-mid-high flex shrink-0 items-center gap-4">
        <ArrowUpDownIcon className="size-6" />
      </div>
    </button>
  );
}

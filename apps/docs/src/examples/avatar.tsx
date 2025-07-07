import { Avatar, AvatarFallback, AvatarImage } from "@diditui/core";

export function AvatarDemo() {
  return (
    <div className="flex w-[700px] items-center justify-between gap-12">
      <Avatar size="md">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback>cn</AvatarFallback>
      </Avatar>
      <Avatar size="lg" rounded={false}>
        <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <Avatar size="lg" rounded={false}>
        <AvatarImage src="" alt="@evilrabbit" />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <div className="*:data-[slot=avatar]:ring-brand-alt flex -space-x-2 *:data-[slot=avatar]:ring-2">
        <Avatar size="sm">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage src="" alt="@evilrabbit" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
          <AvatarFallback>er</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

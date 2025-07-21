import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@diditui/core";
import { Button } from "@diditui/core";
import { TimerIcon } from "@diditui/icons-react";

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col gap-6">
          <span className="bg-neutral-ultrasoft border-neutral-soft text-label-inputs text-neutral-high mx-auto flex items-center gap-2 rounded-lg border px-2 py-[7px] uppercase">
            <TimerIcon className="size-4" />
            Every 15 minutes
          </span>
          <p className="text-label-small text-neutral-mid text-center">
            This service has a cost of $0.07 per user per year.
          </p>
        </div>
        <AlertDialogFooter>
          <AlertDialogAction>Continue</AlertDialogAction>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

import {
  Button,
  Label,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@diditui/core";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="tertiary">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Username</Label>
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="tertiary">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

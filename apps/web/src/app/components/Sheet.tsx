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

export function SheetDemoRight() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open Right</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 border px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
            {/* <Input id="sheet-demo-name" defaultValue="Pedro Duarte" /> */}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Username</Label>
            {/* <Input id="sheet-demo-username" defaultValue="@peduarte" /> */}
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="secondary">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
export function SheetDemoLeft() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open Left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
            {/* <Input id="sheet-demo-name" defaultValue="Pedro Duarte" /> */}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Username</Label>
            {/* <Input id="sheet-demo-username" defaultValue="@peduarte" /> */}
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="secondary">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
export function SheetDemoTop() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open Top</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
            {/* <Input id="sheet-demo-name" defaultValue="Pedro Duarte" /> */}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Username</Label>
            {/* <Input id="sheet-demo-username" defaultValue="@peduarte" /> */}
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="secondary">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
export function SheetDemoBottom() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open Bottom</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
            {/* <Input id="sheet-demo-name" defaultValue="Pedro Duarte" /> */}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Username</Label>
            {/* <Input id="sheet-demo-username" defaultValue="@peduarte" /> */}
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="secondary">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

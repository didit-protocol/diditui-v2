import { Button, Label, TabButton, Tabs } from "@diditui/core";
import { Card, CardContent, TabsContent, TabsList, TabsTrigger } from "@diditui/core";
import { GlobalIcon, ProfileCircleIcon, TickCircleIconBold } from "@diditui/icons-react";

export function TabsDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">
            <ProfileCircleIcon />
            <span>Account</span>
          </TabsTrigger>
          <TabsTrigger value="password">
            <GlobalIcon />
            <span>MANAGE countries & ID DOCS</span>
            <TickCircleIconBold className="text-brand-primary size-4" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <div>
              <h4>Account</h4>
              <p>Make changes to your account here. Click save when you&apos;re done.</p>
            </div>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Name</Label>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Username</Label>
              </div>
            </CardContent>
            <div>
              <Button>Save changes</Button>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <div>
              <h4>Password</h4>
              <p>Change your password here. After saving, you&apos;ll be logged out.</p>
            </div>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Current password</Label>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">New password</Label>
              </div>
            </CardContent>
            <div>
              <Button>Save password</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export function TabsDemo2() {
  return (
    <div className="flex items-center gap-3">
      <TabButton>
        <ProfileCircleIcon />
        <span>Account</span>
      </TabButton>
      <TabButton>
        <GlobalIcon />
        <span>MANAGE countries & ID DOCS</span>
        <TickCircleIconBold className="text-brand-primary size-4" />
      </TabButton>
    </div>
  );
}

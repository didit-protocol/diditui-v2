import { ButtonPreview } from "./previews/button";

const components = {
  "button": ButtonPreview,
  "button-demo": ButtonPreview,
  "button-secondary": ButtonPreview,
  "button-destructive": ButtonPreview,
  "button-outline": ButtonPreview,
  "button-ghost": ButtonPreview,
  "button-link": ButtonPreview,
  "button-icon": ButtonPreview,
  "button-with-icon": ButtonPreview,
  "button-loading": ButtonPreview,
} as const;

export function ComponentPreview({
  name,
  type,
  className,
  align = "center",
  hideCode = false,
  ...props
}: React.ComponentProps<"div"> & {
  name: string;
  align?: "center" | "start" | "end";
  description?: string;
  hideCode?: boolean;
  type?: "block" | "component" | "example";
}) {
  const Component = components[name as keyof typeof components];

  if (!Component) {
    return (
      <p className="text-muted-foreground text-sm">
        Component{" "}
        <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
          {name}
        </code>{" "}
        not found in registry.
      </p>
    );
  }

  return (
    <Component
      name={name}
      type={type}
      className={className}
      align={align}
      hideCode={hideCode}
      {...props}
    />
  );
}

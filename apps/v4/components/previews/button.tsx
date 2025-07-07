import { ComponentPreviewTabs } from "../component-preview-tabs";
import { ComponentSource } from "../component-source";
import { Button } from "../ui/button";

export function ButtonPreview({
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
  return (
    <ComponentPreviewTabs
      className={className}
      align={align}
      hideCode={hideCode}
      component={<Button variant="default" />}
      source={<ComponentSource code={`<Button variant="default" />`} collapsible={false} />}
      {...props}
    />
  );
}

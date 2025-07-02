import { Spinner } from "@diditui/core";

export function SpinnerExample() {
  return (
    <div className="flex flex-col gap-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  );
}

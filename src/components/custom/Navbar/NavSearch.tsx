import { Input } from "@/components/ui/input";

export default function NavSearch() {
  return (
    <Input
      type="text"
      placeholder="Find a property..."
      className="max-w-xs dark:bg-muted"
    />
  );
}


import ResourceCard from "./resourcecard";
import type { ResourceItem } from "./types";

export default function ResourceGrid({ items }: { items: ResourceItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <ResourceCard key={`${it.category ?? "general"}-${it.title}`} {...it} />
      ))}
    </div>
  );
}

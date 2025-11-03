import ResourceGrid from "./resourcegrid";
import type { ResourceSection } from "./types";

export default function SectionBlock({ section }: { section: ResourceSection }) {
  return (
    <section id={section.id} className="max-w-6xl mx-auto scroll-mt-20">
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">{section.title}</h2>
      <ResourceGrid items={section.items} />
    </section>
  );
}

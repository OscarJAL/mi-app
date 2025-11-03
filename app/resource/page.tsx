
"use client";

import SectionBlock from "@/src/components/sectionblock";
import Toolbar from "@/src/components/toolbar";
import { ResourceSection } from "@/src/components/types";
import { useMemo, useState } from "react";


export default function ResourcesPage() {
  const sections: ResourceSection[] = [
    {
      id: "general",
      title: "General",
      items: [
        { title: "Tudelu Brochure", href: "https://tudelu.com/hubfs/Tudelu_Booklet_May2025_FNL.pdf" },
        { title: "Warranty", href: "#" },
        { title: "Product Care and Cleaning Guide", href: "#" },
        { title: "Spec Sheet", href: "#" },
        { title: "Measure", href: "#" },
        { title: "Operations & Maintenance Manual", href: "#" },
        { title: "Switch Wiring Information", href: "#" },
      ],
    },
    {
      id: "private",
      title: "Private",
      items: [
        { title: "Automation Module", href: "#", category: "Private" },
        { title: "BIM Object", href: "#", category: "Private" },
        { title: "CAD File", href: "#", category: "Private" },
        { title: "Electrical Drawings", href: "#", category: "Private" },
        { title: "Installation Manual", href: "#", category: "Private" },
        { title: "Installation Video", href: "#", category: "Private" },
        { title: "Pre-installation Checklist", href: "#", category: "Private" },
        { title: "Revit File", href: "#", category: "Private" },
        { title: "Shop Drawings", href: "#", category: "Private" },
        { title: "STC Test", href: "#", category: "Private" },
        { title: "Spec Sheet", href: "#", category: "Private" },
      ],
    },
    {
      id: "mute",
      title: "Mute",
      items: [
        { title: "BIM Object", href: "#", category: "Mute" },
        { title: "CAD File", href: "#", category: "Mute" },
        { title: "Electrical Drawings", href: "#", category: "Mute" },
        { title: "Electrical Diagram Main PCB", href: "#", category: "Mute" },
        { title: "Installation Manual", href: "#", category: "Mute" },
        { title: "Multi Options Structure Drawing Concepts", href: "#", category: "Mute" },
        { title: "Revit File", href: "#", category: "Mute" },
        { title: "Shop Drawings", href: "#", category: "Mute" },
        { title: "Side Guide Mounting Options", href: "#", category: "Mute" },
        { title: "Spec Sheet", href: "#", category: "Mute" },
        { title: "STC Test", href: "#", category: "Mute" },
        { title: "Structure Drawings", href: "#", category: "Mute" },
      ],
    },
    {
      id: "canopies",
      title: "Canopies",
      items: [
        { title: "6 In Fascia Building Reference", href: "#", category: "Modulux" },
        { title: "8 In Fascia Building Reference", href: "#", category: "Modulux" },
        { title: "Cut Sheet", href: "#", category: "Modulux" },
        { title: "Technical Specifications", href: "#", category: "Modulux" },
      ],
    },
  ];

  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return sections;
    const q = query.toLowerCase();
    return sections
      .map((sec) => ({
        ...sec,
        items: sec.items.filter(
          (it) =>
            it.title.toLowerCase().includes(q) ||
            (it.category ?? "").toLowerCase().includes(q)
        ),
      }))
      .filter((sec) => sec.items.length > 0);
  }, [query]);

  return (
    <main className="min-h-screen bg-white px-6 py-12 text-gray-900 md:px-20">
      <header className="mx-auto mb-8 max-w-6xl">
        <h1 className="text-4xl font-bold text-[#ff5100] md:text-5xl">
          Links & References
        </h1>
      </header>

      <Toolbar
        query={query}
        setQuery={setQuery}
        sectionsNav={sections.map(({ id, title }) => ({ id, title }))}
      />

      <div className="space-y-12">
        {filtered.map((section, idx) => (
          <div key={section.id}>
            {idx !== 0 && (
              <div className="mx-auto mb-8 max-w-6xl border-t border-gray-200" />
            )}
            <SectionBlock section={section} />
          </div>
        ))}
      </div>
    </main>
  );
}


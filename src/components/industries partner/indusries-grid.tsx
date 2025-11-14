import IndustryCard from "./IndustryCard";
import { INDUSTRIES } from "@/lib/industries.data";

export default function IndustriesGrid() {
  return (
    <section className="py-10">
      <h2 className="text-center text-sm tracking-[0.2em] text-[#f15a29]">
        Industries We Partner With
      </h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {INDUSTRIES.map((i) => (
          <IndustryCard
            key={i.slug}
            title={i.title}
            image={i.cardImage}
            href={`/industries/${i.slug}`}
          />
        ))}
      </div>
    </section>
  );
}

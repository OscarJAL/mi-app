import Image from "next/image";
import { GALLERY_ITEMS } from "../../data/canopiesData";

export function CanopiesInUseSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <h2 className="mb-6 text-center text-xl font-semibold md:text-2xl">
        Canopies in Use
      </h2>

      <div className="flex justify-center gap-4 pb-6">
        {[1, 2, 3, "...", 10].map((page, idx) => (
          <button
            key={idx}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium ${
              page === 2
                ? "bg-[#ff5100] text-white"
                : "bg-white text-neutral-600 ring-1 ring-neutral-200"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-\[32px\] bg-white shadow-sm ring-1 ring-neutral-200/60"
          >
            <div className="relative aspect-\[4\/3\]">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

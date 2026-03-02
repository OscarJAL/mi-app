"use client";

import Image from "next/image";
import { useRef } from "react";

type Item = { image: string; alt: string };

export default function UpcomingCarousel({ items }: { items: Item[] }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: "left" | "right") => {
    if (!ref.current) return;
    const amount = Math.round(ref.current.clientWidth * 0.8);
    ref.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="mt-4">
      {/* Controls show on md+ */}
      <div className="mb-3 hidden items-center justify-end gap-2 md:flex">
        <button
          onClick={() => scrollBy("left")}
          className="rounded-xl bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-black/5 hover:opacity-90"
        >
          ←
        </button>
        <button
          onClick={() => scrollBy("right")}
          className="rounded-xl bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-black/5 hover:opacity-90"
        >
          →
        </button>
      </div>

      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((it) => (
          <div
            key={it.image}
            className="relative w-[85%] flex-none overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 sm:w-[55%] md:w-[40%] lg:w-[32%]"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={it.image}
                alt={it.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 55vw, 32vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
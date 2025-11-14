import Image from "next/image";
import Link from "next/link";

export default function IndustryBody({
  heading,
  paragraphs,
  sideImage,
  sideCtaLabel,
  sideCtaHref,
}: {
  heading: string;
  paragraphs: string[];
  sideImage?: string;
  sideCtaLabel?: string;
  sideCtaHref?: string;
}) {
  return (
    <section className="grid lg:grid-cols-[1fr_360px] gap-8 py-10">
      <div>
        <h2 className="text-[#f15a29] text-xl font-semibold mb-4">{heading}</h2>
        <div className="space-y-5 text-neutral-700 leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      {(sideImage || sideCtaLabel) && (
        <aside className="border rounded-2xl p-4">
          {sideImage && (
            <div className="relative aspect-[4/3] w-full mb-4 rounded-lg overflow-hidden">
              <Image src={sideImage} alt="" fill className="object-cover" />
            </div>
          )}
          {sideCtaLabel && sideCtaHref && (
            <Link
              href={sideCtaHref}
              className="inline-flex w-full justify-center rounded-full bg-[#ff5100] px-4 py-2 text-white font-medium"
            >
              {sideCtaLabel}
            </Link>
          )}
        </aside>
      )}
    </section>
  );
}



// KeyFeature

export default function KeyFeatures({
  items,
  title = "Key Features of Tudelü Systems",
}: {
  items: { label: string; text: string }[];
  title?: string;
}) {
  return (
    <section className="py-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-4">
        {items.map((it, i) => (
          <li key={i}>
            <p className="font-medium">{it.label}</p>
            <p className="text-neutral-700">{it.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}


// Recomendation

import Image from "next/image";
import Link from "next/link";

export default function Recommendations({
  items,
  title = "Our Recommendations",
}: {
  items: {
    series: string;
    image: string;
    estimateHref?: string;
    readMoreHref?: string;
    badges?: string[];
  }[];
  title?: string;
}) {
  return (
    <section className="py-10">
      <h3 className="text-lg font-semibold mb-6">{title}</h3>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((card, i) => (
          <div
            key={i}
            className="rounded-2xl border ring-1 ring-black/5 p-6 hover:shadow-md transition"
          >
            <div className="relative h-40 mb-4">
              <Image src={card.image} alt={card.series} fill className="object-contain" />
            </div>

            {/* badges opcionales */}
            {card.badges && card.badges.length > 0 && (
              <div className="flex items-center gap-3 mb-3">
                {card.badges.map((b, j) => (
                  <div key={j} className="relative h-6 w-6">
                    <Image src={b} alt="" fill />
                  </div>
                ))}
              </div>
            )}

            <h4 className="text-lg font-semibold">{card.series} Series</h4>

            <div className="mt-4 flex items-center gap-3">
              {card.estimateHref && (
                <Link
                  href={card.estimateHref}
                  className="rounded-full bg-[#ff5100] text-white px-4 py-2 text-sm"
                >
                  Estimate
                </Link>
              )}
              {card.readMoreHref && (
                <Link href={card.readMoreHref} className="text-sm underline">
                  Read More
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


// CompletedSystems

"use client";
import Image from "next/image";
import { useState } from "react";

export default function CompletedSystems({
  images,
  title = "Completed Systems",
}: {
  images: string[];
  title?: string;
}) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((p) => (p - 1 + images.length) % images.length);
  const next = () => setIdx((p) => (p + 1) % images.length);

  return (
    <section className="py-10">
      <h3 className="text-lg font-semibold mb-6">{title}</h3>
      <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
        <div className="relative w-full h-[320px]">
          <Image src={images[idx]} alt="" fill className="object-cover" />
        </div>
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 text-sm shadow"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 text-sm shadow"
        >
          ›
        </button>
      </div>
    </section>
  );
}


// KeyAccount

import Image from "next/image";

export default function KeyAccounts({
  accounts,
  title = "Some Key Accounts",
}: {
  accounts: { name: string; logo: string }[];
  title?: string;
}) {
  return (
    <section className="py-10">
      <h3 className="text-lg font-semibold mb-6">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
        {accounts.map((a) => (
          <div key={a.name} className="relative h-16 w-full">
            <Image src={a.logo} alt={a.name} fill className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}

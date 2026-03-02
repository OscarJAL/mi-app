"use client";

import Image from "next/image";
import UpcomingCarousel from "./UpcomingCarousel";

type Card = {
  title: string;
  desc: string;
  image: string;
  tag?: string;
};

const pill =
  "inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur";

export default function NewsPage() {
  const heroCards: Array<{ label: string; image: string }> = [
    { label: "News", image: "https://22465736.fs1.hubspotusercontent-na1.net/hubfs/22465736/home-top-1.webp" },
    { label: "Events", image: "https://22465736.fs1.hubspotusercontent-na1.net/hubfs/22465736/horizontal-thumb.jpeg" },
  ];

  const topNews: Card[] = [
    {
      title: "ARCAT Partnership",
      desc:
        "Tudelü is now officially a featured brand on ARCAT, the premier platform for architects, designers, and construction professionals. This partnership provides streamlined access to CAD drawings, BIM objects, technical specifications, and sustainability reports, making it easier than ever to integrate Tudelü’s innovative partition systems into a wide range of projects. With a commitment to flexibility and functionality, Tudelü offers industry professionals the tools they need to design dynamic, adaptable spaces.\n\nExplore Tudelü’s ARCAT page today and discover how these solutions are transforming modern architecture and design.",
      image: "https://22465736.fs1.hubspotusercontent-na1.net/hubfs/22465736/Videos/ARCATApproved.png",
    },
    {
      title: "Installation MAP",
      desc:
        "Introducing Tudelü’s latest website feature: an interactive installation map that highlights our job partners’ locations across the US and Canada. This dynamic tool reveals how Tudelü’s innovative partition wall systems are transforming diverse environments, from bustling cities to small towns, and showcases their pivotal role in modernizing workspaces nationwide.",
      image: "/installation/map.jpg",
    },
  ];

  const midNews: Card[] = [
    {
      title: "Introducing Secluded",
      desc:
        "Introducing Secluded by Tudelü, a revolutionary electric partition wall system designed to bring tranquility to your busy life. This motorized partition wall is the perfect combination of privacy, comfort, and a new level of soundproofing available exclusively to the Secluded.",
      image: "https://22465736.fs1.hubspotusercontent-na1.net/hub/22465736/hubfs/SECLUDED-BANNER.jpg?upscale=true&amp;width=1120&amp;upscale=true&amp;name=SECLUDED-BANNER.jpg",
    },
    {
      title: "The Mute System: Panel Series Upgrade",
      desc:
        "The Mute System, a game-changer in partition walls known for its soundproofing, has now been upgraded with a sleek, seamless panel design. This new version focuses on our most popular sizes, up to 10 1/2 feet high, eliminating seams and enhancing the overall elegance and functionality of your space.",
      image: "https://22465736.fs1.hubspotusercontent-na1.net/hub/22465736/hubfs/Mute_SinglePannel_Banner%20copy.jpg?upscale=true&amp;width=1120&amp;upscale=true&amp;name=Mute_SinglePannel_Banner%20copy.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f4f0] text-neutral-900">
      {/* Container */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top brand row */}
        <div className="flex items-center gap-3 py-8">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e4543b] text-white font-semibold">
            t
          </div>
          <div className="text-lg font-semibold tracking-wide">Tudelü</div>
        </div>

        {/* HERO */}
        <section className="grid items-center gap-10 pb-14 lg:grid-cols-2">
          {/* Left copy */}
          <div>
            <h1 className="text-5xl font-light leading-[1.05] tracking-tight text-[#e06b55] sm:text-6xl">
              Find Our
              <br />
              News
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-700">
              <span className="font-semibold text-neutral-900">Tudelü</span>{" "}
              walls enable you to transform the size, feel, and purpose of your
              environment so it suits the space you need right now.
            </p>

            <p className="mt-4 text-base leading-7 text-neutral-700">
              And whatever space you’ll need next.
            </p>

            <button className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#e06b55] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#e06b55]/60">
              Explore Tudelü
            </button>
          </div>

          {/* Right cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {heroCards.map((c) => (
              <button
                key={c.label}
                className="group relative overflow-hidden rounded-2xl bg-neutral-200 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={c.image}
                    alt={c.label}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    priority
                  />
                </div>

                <div className="absolute bottom-3 right-3">
                  <span className="rounded-md bg-black/70 px-3 py-1 text-xs font-semibold text-[#f0c66b]">
                    {c.label}
                  </span>
                </div>
              </button>
            ))}

            <p className="sm:col-span-2 -mt-1 text-center text-sm text-neutral-600">
              Choose between News and Events by selecting above.
            </p>
          </div>
        </section>

        {/* NEWS HEADER */}
        <div className="flex items-center justify-end pb-4">
          <span className="text-sm font-medium tracking-wide text-[#e06b55]">
            News
          </span>
        </div>

        {/* BIG 2-COLUMN NEWS */}
        <section className="grid gap-8 pb-12 lg:grid-cols-2">
          {/* Left big card */}
          <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={topNews[0].image}
                alt={topNews[0].title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 sm:p-7">
              <h3 className="text-lg font-semibold">{topNews[0].title}</h3>
              <p className="mt-3 whitespace-pre-line text-sm leading-6 text-neutral-700">
                {topNews[0].desc}
              </p>
            </div>
          </article>

          {/* Right big card (map style) */}
          <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={topNews[1].image}
                alt={topNews[1].title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute left-4 top-4">
                <span className={pill}>Tudelü Installations</span>
              </div>
            </div>
            <div className="p-6 sm:p-7">
              <h3 className="text-lg font-semibold">{topNews[1].title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-700">
                {topNews[1].desc}
              </p>
            </div>
          </article>
        </section>

        {/* MID 2 CARDS */}
        <section className="grid gap-8 pb-14 lg:grid-cols-2">
          {midNews.map((n) => (
            <article
              key={n.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={n.image}
                  alt={n.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="text-lg font-semibold">{n.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-700">
                  {n.desc}
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* UPCOMING NEWS */}
        <section className="pb-12">
          <h2 className="text-sm font-semibold tracking-wide text-[#e06b55]">
            Upcoming News
          </h2>
          <UpcomingCarousel
            items={[
              { image: "/installation/upcoming-1.jpg", alt: "Upcoming 1" },
              { image: "/installation/upcoming-2.jpg", alt: "Upcoming 2" },
              { image: "/installation/upcoming-3.jpg", alt: "Upcoming 3" },
            ]}
          />
        </section>

        {/* CTA BANNER */}
        <section className="pb-16">
          <div className="relative overflow-hidden rounded-3xl bg-[#e06b55] px-6 py-10 shadow-sm ring-1 ring-black/5 sm:px-10">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="text-center sm:text-left">
                <p className="text-4xl font-light tracking-tight text-[#f0c66b] sm:text-5xl">
                  Got 30 seconds?
                </p>
              </div>

              <button className="inline-flex w-full items-center justify-center rounded-xl bg-white px-7 py-3 text-sm font-semibold text-neutral-800 shadow-sm transition hover:opacity-90 sm:w-auto">
                Instant Estimate
              </button>
            </div>
          </div>
        </section>

        {/* Footer-ish quick links row (simple) */}
        <footer className="border-t border-black/5 py-10 text-sm text-neutral-600">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e4543b] text-white font-semibold">
                  t
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">Tudelü</div>
                  <div>Makes The Statement</div>
                </div>
              </div>
            </div>

            <div>
              <div className="font-semibold text-neutral-900">Our Industry</div>
              <ul className="mt-3 space-y-2">
                <li>AIA Certification</li>
                <li>ARCAT Partnership</li>
                <li>News + Events</li>
              </ul>
            </div>

            <div>
              <div className="font-semibold text-neutral-900">Quick Clicks</div>
              <ul className="mt-3 space-y-2">
                <li>Private</li>
                <li>Mute</li>
                <li>About</li>
                <li>Process</li>
              </ul>
            </div>

            <div>
              <div className="font-semibold text-neutral-900">Office</div>
              <div className="mt-3">100 Industrial Avenue</div>
              <div>Little Ferry, NJ 07643</div>

              <div className="mt-5 font-semibold text-neutral-900">Contact</div>
              <div className="mt-2">718.782.7882</div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
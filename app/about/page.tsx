import Image from "next/image";

type IdeaItem = {
  title: string;
  description: string;
  image: string;
};

type UseCase = {
  title: string;
  description: string;
  image: string;
};

const ideaItems: IdeaItem[] = [
  {
    title: "Sometimes you want walls.",
    description:
      "We get it: Life often demands the privacy, peace and quiet, and general usability of a dedicated space.",
    image: "https://22465736.fs1.hubspotusercontent-na1.net/hubfs/22465736/raw_assets/public/Tudelu/images/about-1.png",
  },
  {
    title: "Sometimes you want none.",
    description:
      "Hey, we’re open if you are! Who doesn’t love a big floor plan, great idea room, or an oversized playroom?",
    image: "https://22465736.fs1.hubspotusercontent-na1.net/hubfs/22465736/raw_assets/public/Tudelu/images/about-1.png",
  },
  {
    title: "Sometimes you want options.",
    description:
      "In the olden days, you had to choose a wall, a door, or an open space. Now, there’s Tudelü. The choice is yours.",
    image: "https://22465736.fs1.hubspotusercontent-na1.net/hubfs/22465736/raw_assets/public/Tudelu/images/about-1.png",
  },
];

const useCases: UseCase[] = [
  {
    title: "Residential",
    description:
      "Stop trying to balance life and work. Move from living area to workspace at the flick of a switch on the click of a remote.",
    image: "https://22465736.fs1.hubspotusercontent-na1.net/hubfs/22465736/raw_assets/public/Tudelu/images/img-14.jpg",
  },
  {
    title: "Commercial",
    description:
      "Never again allocate dead space during construction or sacrifice space to part-time use cases. Get the most out of every square foot.",
    image: "https://22465736.fs1.hubspotusercontent-na1.net/hubfs/22465736/raw_assets/public/Tudelu/images/img-15.jpg",
  },
  {
    title: "Industrial",
    description:
      "Seamlessly move between industrial zones and social spaces to give your facilities and your teams more of what they need throughout the day.",
    image: "https://22465736.fs1.hubspotusercontent-na1.net/hubfs/22465736/raw_assets/public/Tudelu/images/img-16.jpg",
  },
];

export default function Page() {
  return (
    <main className="bg-[#F6F3EF] text-[#1f1f1f]">
      {/* HERO */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-12 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* left */}
          <div className="max-w-xl">
            <h1 className="text-[52px] font-medium leading-[0.95] tracking-[-0.03em] text-[#E46B4E] sm:text-[64px] lg:text-[78px]">
              Go big on
              <br />
              go room
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-[#2a2a2a] sm:text-[17px]">
              Tudelü walls enable you to transform the size, feel, and purpose of
              your environment so it suits the space you need right now.
            </p>

            <p className="mt-6 text-base leading-7 text-[#2a2a2a] sm:text-[17px]">
              And whatever space you’ll need next.
            </p>

            <button className="mt-10 rounded-full bg-[#E46B4E] px-8 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90">
              Explore Tudelü
            </button>
          </div>

          {/* right */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative h-[340px] overflow-hidden rounded-2xl shadow-sm sm:h-[420px]">
              <Image
                src="https://22465736.fs1.hubspotusercontent-na1.net/hubfs/22465736/raw_assets/public/Tudelu/images/img-12.jpg"
                alt="Hero image 1"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative h-[340px] overflow-hidden rounded-2xl shadow-sm sm:h-[420px]">
              <Image
                src="https://22465736.fs1.hubspotusercontent-na1.net/hubfs/22465736/raw_assets/public/Tudelu/images/img-13.jpg"
                alt="Hero image 2"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* BIG IDEA */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* left copy */}
          <div className="max-w-xl">
            <p className="text-sm font-medium tracking-wide text-[#E46B4E]">
              The Big Idea
            </p>

            <div className="mt-24 hidden lg:block">
              <p className="text-sm font-medium tracking-wide text-[#E46B4E]">
                We’re committed to solve your commitment issues
              </p>
              <p className="mt-4 max-w-md text-sm leading-7 text-[#2a2a2a]">
                Finally, rooms are no longer permanent. A wall is no longer a
                structural commitment. With Tudelü, you can be in two places—at
                once.
              </p>
            </div>

            {/* mobile version of that bottom paragraph */}
            <div className="mt-8 lg:hidden">
              <p className="text-sm font-medium tracking-wide text-[#E46B4E]">
                We’re committed to solve your commitment issues
              </p>
              <p className="mt-4 max-w-md text-sm leading-7 text-[#2a2a2a]">
                Finally, rooms are no longer permanent. A wall is no longer a
                structural commitment. With Tudelü, you can be in two places—at
                once.
              </p>
            </div>
          </div>

          {/* right list */}
          <div className="space-y-8">
            {ideaItems.map((item, idx) => (
              <div key={item.title} className="relative">
                <div className="flex gap-5">
                  <div className="relative mt-1 h-20 w-20 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="max-w-md">
                    <h3 className="text-[15px] font-semibold text-[#1f1f1f]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#2a2a2a]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* divider */}
                {idx !== ideaItems.length - 1 && (
                  <div className="mt-8 h-px w-full bg-black/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-6">
          <p className="max-w-xs text-sm text-[#2a2a2a]">
            Get more mileage out of <br className="hidden sm:block" />
            the same square footage.
          </p>
          <p className="text-sm font-medium tracking-wide text-[#E46B4E]">
            Use Cases
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {useCases.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-[#E46B4E] px-6 py-8">
                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/90">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACCOLADES */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="max-w-xl">
            <p className="text-sm font-medium tracking-wide text-[#E46B4E]">
              Accolades
            </p>

            <p className="mt-6 text-sm leading-7 text-[#2a2a2a]">
              Invented in New York. Made in the USA. <br />
              Installed worldwide.
            </p>

            <p className="mt-6 text-sm leading-7 text-[#2a2a2a]">
              Patented and awarded, Tudelü is an American invention celebrated
              globally.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-end">
            {[
              { src: "https://22465736.fs1.hubspotusercontent-na1.net/hubfs/22465736/raw_assets/public/Tudelu/images/logo-1.png", alt: "New York" },
              { src: "https://22465736.fs1.hubspotusercontent-na1.net/hubfs/22465736/raw_assets/public/Tudelu/images/logo-2.png", alt: "USA" },
              { src: "https://22465736.fs1.hubspotusercontent-na1.net/hubfs/22465736/raw_assets/public/Tudelu/images/logo-3.png", alt: "Seal" },
              
            ].map((logo) => (
              <div
                key={logo.alt}
                className="relative h-14 w-24 opacity-90 sm:h-16 sm:w-28"
              >
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#E46B4E] px-6 py-10 sm:px-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <h2 className="text-4xl font-semibold tracking-[-0.02em] text-white sm:text-5xl">
              Got 30 seconds?
            </h2>

            <button className="rounded-full bg-white/90 px-8 py-3 text-sm font-medium text-[#E46B4E] shadow-sm transition hover:bg-white">
              Instant Estimate
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
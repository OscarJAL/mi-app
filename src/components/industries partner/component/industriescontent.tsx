"use client"

import Image from "next/image";
import Link from "next/link";
import { features } from "process";
import React from "react";
import { Button } from "@/components/ui/button";

type Props = {
  data: {
    title: string;
    content: string;
    image: string;
    link: string;
    subtitle: string;
    features: string[];
  };
};

export const IndustriesContent = ({ data }: Props) => {
  return (
    <div>
      <div className="flex flex-col w-3/4 mx-auto py-16 ">
        <h2 className=" text-2xl md:text-3xl lg:text-5xl text-start lg:text-end py-8 text-[#ff5100]">
          {data.title}
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-3/4 px-2 lg:px-12 space-y-4">
            <p className="text-xl">{data.content}</p>
            <h5 className="py-4 text-xl">{data.subtitle}</h5>
            <ul className="space-y-4">
              {data.features.map((feature, index) => (
                <li className="text-xl" key={index}>
                  <strong>{feature.split(":")[0]}:</strong>{" "}
                  {feature.split(":")[1]}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="w-full">
              <div className="bg-[#ff5100] w-full py-6 text-center rounded-t-3xl">
                <Link
                  download="Business_Cut_Sheet.pdf"
                  className="text-white text-lg"
                  href={data.link}
                >
                  Download the guide
                </Link>
              </div>
              <Image src={data.image} alt="" width={500} height={500} />

              <Recommendations />
              <CompletedSystems />
              <KeyAccounts />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// DATA
const recommendations = [
{
title: "Closure Series",
image: "/images/recs/closure.png", // 880x520 sugerido // /images/recs/closure.png
features: [
{ alt: "AIA", src: "/images/certs/aia.png" },
{ alt: "ARCAT", src: "/images/certs/arcat.png" },
{ alt: "LEED", src: "/images/certs/leed.png" },
{ alt: "Made in USA", src: "/images/certs/usa.png" },
],
estimateHref: "/estimate/closure",
readMoreHref: "/series/closure",
},
{
title: "Private Series",
image: "/images/recs/closure.png",
features: [
{ alt: "AIA", src: "/images/certs/aia.png" },
{ alt: "ARCAT", src: "/images/certs/arcat.png" },
{ alt: "LEED", src: "/images/certs/leed.png" },
{ alt: "Made in USA", src: "/images/certs/usa.png" },
],
estimateHref: "/estimate/private",
readMoreHref: "/series/private",
},
{
title: "Secluded Series",
image: "/images/recs/closure.png",
features: [
{ alt: "AIA", src: "/images/certs/aia.png" },
{ alt: "ARCAT", src: "/images/certs/arcat.png" },
{ alt: "LEED", src: "/images/certs/leed.png" },
{ alt: "Made in USA", src: "/images/certs/usa.png" },
],
estimateHref: "/estimate/secluded",
readMoreHref: "/series/secluded",
},
];


const completedSlides = [
{ src: "/images/completed/1.jpg", alt: "Studio podcast room" },
{ src: "/images/completed/2.jpg", alt: "Living room with canopy" },
{ src: "/images/completed/3.jpg", alt: "Kitchen acoustic wall" },
{ src: "/images/completed/4.jpg", alt: "Hall partition detail" },
{ src: "/images/completed/5.jpg", alt: "Office breakout zone" },
];


const keyAccounts = [
{ src: "/images/accounts/arizona-dps.png", alt: "Arizona DPS" },
{ src: "/images/accounts/michigan-state.png", alt: "Michigan State University" },
{ src: "/images/accounts/us-army.png", alt: "U.S. Army" },
{ src: "/images/accounts/us-navy.png", alt: "U.S. Navy" },
{ src: "/images/accounts/holiday-inn.png", alt: "Holiday Inn Express" },
];

// Data
function Recommendations() {
return (
<div>
<h2 className="text-xl font-semibold text-black/80">Our Recommendations</h2>


<div className="mt-8 grid gap-10 md:grid-cols-3">
{recommendations.map((card) => (
<article key={card.title} className="group">
<div className="overflow-hidden rounded-xl bg-[#f5f6f7]">
<div className="relative aspect-video-[16/9] w-full">
<Image
src={card.image}
alt={card.title}
fill
sizes="(min-width: 768px) 33vw, 100vw"
className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
/>
</div>


{/* Feature icons */}
<div className="flex items-center justify-center gap-4 py-4">
{card.features.map((f, idx) => (
<Image key={idx} src={f.src} alt={f.alt} width={40} height={40} />
))}
</div>
</div>


<h3 className="mt-4 text-xl font-semibold text-black/80">{card.title}</h3>


<div className="mt-4 flex items-center gap-4">
<Button asChild size="sm" className="rounded-full bg-[#ff5100] hover:bg-[#ff5100]/90 px-5">
<Link href={card.estimateHref}>Estimate</Link>
</Button>
<Link
href={card.readMoreHref}
className="text-sm font-medium text-black/70 underline-offset-4 hover:text-black hover:underline"
>
Read More
</Link>
</div>


{/* Orange underline (decor) */}
<div className="mt-6 h-[3px] w-40 rounded-full bg-[#ff5100] opacity-70" />
</article>
))}
</div>
</div>
);
}

// COMPLETE SYSTEM
function CompletedSystems() {
return (
<div>
<h2 className="text-xl font-semibold text-black/80">Completed Systems</h2>


{/* Carousel */}
<div className="relative mt-6">
{/* Track */}
<div
className="flex snap-x snap-mandatory gap-4 overflow-x-auto rounded-xl border border-black/10 p-4 [scrollbar-width:none] [-ms-overflow-style:none]"
>
{/* hide scrollbar chrome */}
<style jsx>{`
div::-webkit-scrollbar { display: none; }
`}</style>


{completedSlides.map((s, i) => (
<div key={i} className="snap-start shrink-0 basis-[85%] sm:basis-[48%] lg:basis-[31%]">
<div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-[#f5f6f7]">
<Image
src={s.src}
alt={s.alt}
fill
sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw"
className="object-cover"
/>
</div>
</div>
))}
</div>


{/* Dots */}
<Dots count={completedSlides.length} />
</div>
</div>
);
}


function Dots({ count }: { count: number }) {
return (
<div className="mt-4 flex justify-center gap-2">
{Array.from({ length: Math.min(count, 6) }).map((_, i) => (
<span key={i} className="h-2 w-2 rounded-full bg-black/20" />
))}
</div>
);
}

// KEY ACCOUNTS
function KeyAccounts() {
return (
<div>
<h3 className="text-xl font-semibold text-black/80">Some Key Accounts</h3>

<div className="mt-6 grid place-items-center gap-8 sm:grid-cols-3 lg:grid-cols-5">
{keyAccounts.map((k) => (
<div key={k.alt} className="opacity-90 transition-opacity hover:opacity-100">
<Image src={k.src} alt={k.alt} width={180} height={120} className="h-auto w-auto" />
</div>
))}
</div>
</div>
);
}
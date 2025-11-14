// import Image from "next/image";
// import Link from "next/link";

// export function Footer() {
//   const industry = [
//     {
//       label: "Industries We Partner With",
//       href: "/industries-we-partner-with",
//     },
//     { label: "AIA Certification", href: "/aia" },
//     { label: "ARCAT Partnership", href: "/arcat" },
//     { label: "News + Events", href: "/news" },
//   ];
//   const quick = [
//     { label: "Private", href: "/series/private" },
//     { label: "Mute", href: "/series/mute" },
//     { label: "About", href: "/about" },
//     { label: "Process", href: "/process" },
//     { label: "Resources", href: "/resources" },
//     { label: "Installations", href: "/installations" },
//     { label: "Measure", href: "/measure" },
//     { label: "Learn", href: "/learn" },
//     { label: "Contact", href: "/contact" },
//   ];

//   return (
//     <footer className="border-t border-black/10 bg-white">
//       <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1fr,1fr,1fr]">
//         <div className="flex items-center gap-3">
//           <span className="h-8 w-8 rounded-full bg-[#ff5100]"></span>
//           <span className="text-2xl font-semibold">Tudelü</span>
//         </div>
//         <p className="mt-3 max-w-xs text-black/70">Makes The Statement</p>
//         <div className="mt-6 flex gap-4">
//           <Link href="#" className="text-black/60 hover:text-black">
//             f
//           </Link>
//           <Link href="#" className="text-black/60 hover:text-black">
//             i
//           </Link>
//           <Link href="#" className="text-black/60 hover:text-black">
//             x
//           </Link>
//         </div>
//       </div>
//       <div>
//         <h4 className="text-sm font-semibold text-black/70">Our Industry</h4>
//         <ul className="mt-3 space-y-2">
//           {industry.map((i) => (
//             <li key={i.label}>
//               <Link
//                 href={i.href}
//                 className="text-sm text-black/70 hover:text-black"
//               >
//                 {i.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h4 className="text-sm font-semibold text-black/70">Quick Clicks</h4>
//         <ul className="mt-3 grid grid-cols-2 gap-2">
//           {quick.map((i) => (
//             <li key={i.label}>
//               <Link
//                 href={i.href}
//                 className="text-sm text-black/70 hover:text-black"
//               >
//                 {i.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <div className="mt-6 space-y-1 text-sm text-black/70">
//           <p>
//             <strong>Office</strong>
//             <br />
//             100 Industrial Avenue
//             <br />
//             Little Ferry, NJ 07643
//           </p>
//           <p>
//             <strong>Contact</strong>
//             <br />
//             718.782.7882
//             <br />
//             <Link href="mailto:info@tudelu.com" className="underline">
//               info@tudelu.com
//             </Link>
//           </p>
//         </div>
//       </div>

//       <div className="border-t border-black/10 py-6">
//         <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
//           <div className="flex items-center gap-6 opacity-80">
//             <Image
//               src="/images/certs/aia.png"
//               alt="AIA"
//               width={44}
//               height={44}
//             />
//             <Image
//               src="/images/certs/arcat.png"
//               alt="ARCAT"
//               width={64}
//               height={28}
//             />
//             <Image
//               src="/images/certs/leed.png"
//               alt="LEED"
//               width={44}
//               height={44}
//             />
//             <Image
//               src="/images/certs/usa.png"
//               alt="Made in USA"
//               width={44}
//               height={44}
//             />
//           </div>
//           <p className="text-xs text-black/60">
//             Copyright © {new Date().getFullYear()} / Tudelü Holdings, LLC
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// src/components/layout/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  const industry = [
    { label: "Industries We Partner With", href: "/industries-we-partner-with" },
    { label: "AIA Certification", href: "/aia" },
    { label: "ARCAT Partnership", href: "/arcat" },
    { label: "News + Events", href: "/news" },
  ];

  const quick = [
    { label: "Private", href: "/series/private" },
    { label: "Mute", href: "/series/mute" },
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Resources", href: "/resources" },
    { label: "Installations", href: "/installations" },
    { label: "Measure", href: "/measure" },
    { label: "Learn", href: "/learn" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t border-black/10 bg-white">
      {/* TOP GRID */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* BRAND / CLAIM */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              {/* si tienes el logo, coloca /images/logo-tudelu.svg */}
              <Image
                src="/images/logo-tudelu.svg"
                alt="Tudelü"
                width={112}
                height={28}
                className="h-7 w-auto"
              />
              <span className="text-sm font-semibold text-[#ff5100]">Tudelü</span>
            </div>
            <p className="mt-3 max-w-xs text-xl font-semibold text-black/70">
              Makes The Statement
            </p>
          </div>

          {/* OUR INDUSTRY */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-black/70">Our Industry</h4>
            <ul className="mt-3 space-y-2">
              {industry.map((i) => (
                <li key={i.label}>
                  <Link
                    href={i.href}
                    className="text-sm text-black/70 hover:text-black"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK CLICKS */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-black/70">Quick Clicks</h4>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {quick.map((i) => (
                <li key={i.label}>
                  <Link
                    href={i.href}
                    className="text-sm text-black/70 hover:text-black"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OFFICE / CONTACT */}
          <div className="md:col-span-2">
            <div className="space-y-4 text-sm text-black/70">
              <div>
                <p className="font-semibold">Office</p>
                <p className="mt-1">
                  100 Industrial Avenue
                  <br />
                  Little Ferry, NJ 07643
                </p>
              </div>

              <div>
                <p className="font-semibold">Contact</p>
                <p className="mt-1">718.782.7882</p>
                <Link
                  href="mailto:info@tudelu.com"
                  className="underline underline-offset-2 hover:text-black"
                >
                  info@tudelu.com
                </Link>
                <div className="mt-2 flex items-center gap-3">
                  <Link href="https://facebook.com" aria-label="Facebook" className="text-black/70 hover:text-black">
                    <Facebook className="h-4 w-4" />
                  </Link>
                  <Link href="https://instagram.com" aria-label="Instagram" className="text-black/70 hover:text-black">
                    <Instagram className="h-4 w-4" />
                  </Link>
                </div>
                <div className="mt-2 space-y-1">
                  <Link href="/calendar" className="hover:text-black">Calendar</Link>
                  <div>
                    <Link href="/free-swatch-kit" className="font-medium text-[#ff5100] hover:opacity-80">
                      FREE Swatch Kit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-10 border-t border-black/10 py-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            {/* CERTS */}
            <div className="flex items-center gap-6 opacity-80">
              <Image
                src="/images/certs/aia.png"
                alt="AIA"
                width={44}
                height={44}
              />
              <Image
                src="/images/certs/arcat.png"
                alt="ARCAT"
                width={64}
                height={28}
              />
              <Image
                src="/images/certs/leed.png"
                alt="LEED"
                width={44}
                height={44}
              />
              <Image
                src="/images/certs/usa.png"
                alt="Made in USA"
                width={44}
                height={44}
              />
            </div>

            {/* COPYRIGHT */}
            <p className="text-xs text-black/60">
              Copyright © {new Date().getFullYear()} / Tudelü Holdings, LLC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import Image from "next/image";
import Link from "next/link";

export default function IndustryHero({
  title,
  background,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  background: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-3xl">
      <div className="relative h-[44vh] min-h-[360px]">
        <Image src={background} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 sm:px-10">
            <h1 className="max-w-3xl text-4xl sm:text-6xl font-bold text-white/90 leading-tight">
              {title}
            </h1>
            {ctaLabel && ctaHref && (
              <Link
                href={ctaHref}
                className="inline-flex mt-6 rounded-full bg-[#ff5100] px-5 py-2.5 text-white font-medium"
              >
                {ctaLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

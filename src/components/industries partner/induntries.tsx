import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { link } from "fs";

function IndustriesHero() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="max-w-3xl text-lg text-black/70">
          Welcome to Tudelü Applications Page, where we showcase the diverse
          industries we collaborate with to bring innovative solutions to life.
        </p>
        <h1 className="mt-6 text-center text-2xl font-semibold text-black/80">
          Industries We Partner With
        </h1>
      </div>
    </section>
  );
}

function IndustryCard({
  title,
  src,
  link,
}: {
  title: string;
  src: string;
  link?: string;
}) {
  return (
    <Link href={link ?? ""} className="group block">
      <div className="relative aspect-[5/3] w-full overflow-hidden rounded-2xl border border-black/10 bg-gray-50 shadow-sm transition group-hover:shadow-md">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <p className="mt-2 text-center text-sm font-medium text-black/80">
        {title}
      </p>
    </Link>
  );
}

function IndustriesGrid() {
  const items = [
    {
      title: "Business",
      src: "/images/industries/business.jpg",
      link: "/business",
    },
    {
      title: "Education",
      src: "/images/industries/education.jpg",
      link: "/education",
    },
    {
      title: "Healthcare/Medical",
      src: "/images/industries/healthcare.jpg",
      link: "/healthcare-medical",
    },
    {
      title: "Military",
      src: "/images/industries/military.jpg",
      link: "/military",
    },
    {
      title: "Government",
      src: "/images/industries/government.jpg",
      link: "/govermment",
    },
    { title: "Hospitality", src: "/images/industries/hospitality.jpg", link: "/hospitality" },
    { title: "Home Usage", src: "/images/industries/home.jpg", link: "/home-usage" },
    { title: "Kitchens", src: "/images/industries/kitchen.jpg", link: "/kitchens" },
  ];

  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((it) => (
            <IndustryCard key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function IndustriesWePartnerWithPage() {
  return (
    <main className="bg-white text-gray-900">
      <IndustriesHero />
      <IndustriesGrid />
    </main>
  );
}

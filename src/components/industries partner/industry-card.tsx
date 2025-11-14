"use client";
import Image from "next/image";
import Link from "next/link";

export default function IndustryCard({
  title,
  image,
  href,
}: { title: string; image: string; href: string }) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl bg-white ring-1 ring-black/5 shadow-sm overflow-hidden hover:shadow-md transition"
    >
      <div className="relative aspect-[4/3]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-3 text-center text-sm font-medium text-neutral-700 group-hover:text-neutral-900">
        {title}
      </div>
    </Link>
  );
}

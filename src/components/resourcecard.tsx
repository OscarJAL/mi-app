import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ResourceItem } from "./types";

export default function ResourceCard({ title, href, category }: ResourceItem) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-[#ff5100]/70 hover:shadow-md"
    >
      <div className="min-w-0">
        {category && (
          <span className="mb-1 inline-flex items-center gap-1 rounded-full border border-[#ff5100]/30 bg-[#ff5100]/5 px-2 py-0.5 text-xs font-medium text-[#ff5100]">
            {category}:
          </span>
        )}
        <p className="truncate text-lg font-medium group-hover:text-[#ff5100]">
          {title}
        </p>
      </div>
      <ArrowRight
        size={20}
        className="shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-[#ff5100]"
      />
    </Link>
  );
}

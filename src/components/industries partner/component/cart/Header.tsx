"use client";

import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="bg-[#ff5100] text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-[#ff5100] font-bold text-lg">t</span>
          </div>
          <span className="font-semibold tracking-wide">Tudelü</span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <button className="hover:underline">Partition Walls</button>
          <button className="hover:underline">Canopies</button>
          <button className="hover:underline">Pergolas</button>
          <button className="hover:underline">About</button>
          <button className="hover:underline">Resources</button>
          <button className="hover:underline">Contact</button>
        </nav>

        {/* Cart icon + menu */}
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white">
              🛒
            </span>
          </Link>
          <button className="md:hidden">
            <span className="block h-\[2px\] w-5 bg-white mb-[3px]" />
            <span className="block h-\[2px\] w-5 bg-white mb-[3px]" />
            <span className="block h-\[2px\] w-5 bg-white" />
          </button>
        </div>
      </div>
    </header>
  );
};

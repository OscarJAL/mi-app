"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Canopies", href: "#" },
  { label: "Partition Walls", href: "#" },
  { label: "Pergolas", href: "#" },
  { label: "About", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-neutral-100/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-orange-500 text-white font-bold">
            t
          </span>
          <span className="text-xl font-semibold tracking-tight text-orange-600">
            Tudelü.
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm text-neutral-700 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right actions (desktop) */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="#"
            className="rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm text-neutral-800 hover:bg-neutral-50"
          >
            Login
          </Link>
          <Link
            href="#"
            className="rounded-full border border-neutral-300 bg-white px-6 py-2 text-sm text-neutral-800 hover:bg-neutral-50"
          >
            Start Designing
          </Link>
        </div>

        {/* Mobile button */}
        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-neutral-300 bg-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-neutral-200 bg-neutral-100 lg:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <nav className="grid gap-3 text-sm text-neutral-800">
              {nav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 hover:bg-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 flex gap-3">
              <Link
                href="#"
                className="flex-1 rounded-xl border border-neutral-300 bg-white px-4 py-2 text-center text-sm text-neutral-800 hover:bg-neutral-50"
              >
                Login
              </Link>
              <Link
                href="#"
                className="flex-1 rounded-xl border border-neutral-300 bg-white px-4 py-2 text-center text-sm text-neutral-800 hover:bg-neutral-50"
              >
                Start Designing
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
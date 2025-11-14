import Link from "next/link";

const ORANGE = "#ff5100";

export function Navbar() {
  const nav = [
    { label: "Industries-partner", href: "/industries-partner"},
    { label: "Canopies", href: "/canopies" },
    { label: "Partition Walls", href: "/partition-walls" },
    { label: "Pergolas", href: "/pergolas" },
    { label: "About", href: "/about" },
    { label: "Resources", href: "/resource" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="h-7 w-7 rounded-full bg-[#ff5100]"></span>
          <span className="text-xl">Tudelü</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((i) => (
            <Link
              key={i.label}
              href={i.href}
              className="text-sm text-black/70 hover:text-black"
            >
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-xl border border-black/10 px-3 py-1.5 text-sm hover:bg-black/5"
          >
            Log In
          </Link>
          <Link
            href="/start"
            className="rounded-xl bg-[#ff5100] px-4 py-1.5 text-sm font-semibold text-white"
          >
            Start Designing
          </Link>
        </div>
      </div>
    </header>
  );
}

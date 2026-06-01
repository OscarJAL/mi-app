export default function Header() {
  const links = ["The System", "Solutions", "Shop", "Technical", "Contact"];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#fbf7f2]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <div className="flex items-center gap-2 text-sm font-semibold text-[#ef7e57]">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ef7e57]" />
          Tudelu.
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-[#211f1c] transition hover:text-[#ef7e57]"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden text-xl text-[#201d1a] sm:inline-flex">
            🛒
          </button>

          <button className="rounded-full bg-gradient-to-r from-[#ff6f47] to-[#f59a62] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02] sm:px-7">
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="mb-6 text-sm font-extrabold uppercase tracking-wide text-white">
        {title}
      </h3>

      <ul className="space-y-4 text-sm text-[#ded4ca]">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="transition hover:text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const systemLinks = ["The System", "Configurations", "Technical Specs"];

  const companyLinks = [
    "For Contractors",
    "Contact Us",
    "Submit a Project",
    "Architect Spec Center",
  ];

  const resourceLinks = [
    "How It Works",
    "Structure Options",
    "Drainage Solutions",
    "Best Modern Canopy System",
    "Storefront Canopies",
    "Entrance Canopies",
    "Awning vs Canopy",
    "Easiest Canopy to Install",
    "Canopy Cost",
    "Commercial Canopy Systems",
    "Custom Canopy Design",
    "Find an Installer",
    "AIA Course",
  ];

  return (
    <footer className="bg-[#201d1a] px-6 pb-10 pt-16 text-[#e8dfd5] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1.2fr]">
          <div>
            <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-[#f0c7aa]">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#f07c52]" />
              Tudelu.
            </div>

            <p className="max-w-xs text-sm leading-8 text-[#d5cbc1]">
              Patented modular aluminum canopy systems. Speed, flexibility,
              clean design, and predictable execution for contractors,
              architects, and developers.
            </p>
          </div>

          <FooterColumn title="System" items={systemLinks} />
          <FooterColumn title="Company" items={companyLinks} />
          <FooterColumn title="Resources" items={resourceLinks} />
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="text-xs text-[#c7beb6]">
              © 2026 Tudelu Canopy Systems. All rights reserved.
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                📖 Tudelu Canopy Brochure
              </button>

              <button className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                ⬇ Download All Images
              </button>
            </div>

            <div className="text-xs text-[#c7beb6]">
              Made in USA &nbsp;·&nbsp; Patented Technology
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
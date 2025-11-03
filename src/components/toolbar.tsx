type Props = {
  query: string;
  setQuery: (v: string) => void;
  sectionsNav: { id: string; title: string }[];
};

export default function Toolbar({ query, setQuery, sectionsNav }: Props) {
  return (
    <div className="mx-auto mb-8 flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="flex w-full max-w-lg">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          placeholder="Search resources..."
          className="w-full rounded-l-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff5100]"
        />
        <button
          className="rounded-r-lg bg-[#ff5100] px-4 py-2 text-white transition hover:bg-[#e04a00]"
          onClick={(e) => e.preventDefault()}
        >
          Search
        </button>
      </div>

      <nav className="flex flex-wrap gap-2">
        {sectionsNav.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700 hover:border-[#ff5100]/50 hover:text-[#ff5100]"
          >
            {s.title}
          </a>
        ))}
      </nav>
    </div>
  );
}

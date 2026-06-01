export default function ZipSearch() {
  return (
    <section className="bg-[#fbf7f2] px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
          Search by ZIP Code
        </h2>

        <p className="mt-4 text-sm text-[#8e867e] sm:text-base">
          We will check our network for installers in your area.
        </p>

        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <div className="flex h-14 flex-1 items-center rounded-full border border-[#ece3d8] bg-white px-5 shadow-sm">
            <span className="mr-3 text-[#d7b8a1]">📍</span>
            <input
              type="text"
              placeholder="Enter ZIP code"
              className="w-full bg-transparent text-sm outline-none placeholder:text-[#b6afa7]"
            />
          </div>

          <button className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-[#f6b26e] to-[#f37b56] px-8 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02]">
            🔎&nbsp; Find
          </button>
        </div>
      </div>
    </section>
  );
}
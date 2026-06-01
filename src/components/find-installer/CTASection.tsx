export default function CTASection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://tudel-architectural-ikqb.bolt.host/ChatGPT_Image_Mar_22,_2026,_05_15_58_PM.png')",
        }}
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative mx-auto max-w-4xl text-center text-white">
        <h2 className="text-3xl font-black sm:text-5xl">
          Ready to Get Started?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
          Whether you need an installer or want to handle it yourself, we are
          here to help.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-[#f6b26e] to-[#f37b56] px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]">
            Find Installer →
          </button>

          <button className="inline-flex min-w-[200px] items-center justify-center rounded-full border border-white/50 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
            Get Project Help
          </button>
        </div>
      </div>
    </section>
  );
}



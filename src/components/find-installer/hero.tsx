export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://tudel-architectural-ikqb.bolt.host/ChatGPT_Image_Mar_22,_2026,_10_10_02_PM.png')",
        }}
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-center px-6 py-20 sm:px-8 md:min-h-[520px] lg:px-12">
        <div className="max-w-3xl text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#f08d66]">
            Installation
          </p>

          <h1 className="max-w-2xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Find a Local Installer
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
            Enter your ZIP code to find a certified Tudelu installer near you,
            or request one and we will connect you with a qualified
            professional.
          </p>
        </div>
      </div>
    </section>
  );
}
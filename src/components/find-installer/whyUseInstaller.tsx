const features = [
  {
    title: "Certified Professionals",
    description:
      "Every installer in our network is trained on the Tudelu modular system and certified for commercial canopy installation.",
    icon: "🛠️",
  },
  {
    title: "Local Knowledge",
    description:
      "Local installers understand regional building codes, permitting requirements, and weather considerations.",
    icon: "🏢",
  },
  {
    title: "Project Support",
    description:
      "Our team coordinates between you and the installer to ensure smooth communication from quote to completion.",
    icon: "👥",
  },
];

export default function WhyUseInstaller() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#e1936e]">
          Our Network
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
          Why Use a Tudelu Installer
        </h2>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="mx-auto max-w-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fff3eb] text-lg">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">{feature.title}</h3>

              <p className="mt-4 text-sm leading-7 text-[#7d756e]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
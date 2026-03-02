// import Header from "@/components/installs/Header";
// import Legend from "@/components/installs/Legend";
// import Footer from "@/components/installs/Footer";





import Legend from "@/src/components/modules/public/installation/legend";

export default function InstallsPage() {
  return (
    <div className="min-h-screen bg-neutral-100">
     

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top section */}
        <section className="grid gap-10 py-10 lg:grid-cols-2 lg:gap-12 lg:py-14">
          <div>
            <p className="text-sm font-semibold tracking-wide text-orange-500">
              Explore Our
            </p>

            <h1 className="mt-2 font-semibold tracking-tight text-orange-600 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Installs
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-800 sm:mt-8">
              Tudelü&apos;s partition wall systems have become an integral
              component in major businesses across the United States and Canada,
              revolutionizing the way modern workplaces are designed and
              function. The interactive map below vividly illustrates the
              widespread adoption of Tudelü systems, showcasing their presence
              in numerous industries. From sleek office spaces in bustling urban
              centers to cutting-edge manufacturing facilities in industrial
              zones, Tudelü&apos;s partitions seamlessly blend style with
              functionality. Major corporations, tech giants, and healthcare
              institutions alike trust the Tudelü brand for its commitment to
              delivering high-quality, customizable solutions that adapt to the
              unique needs of each sector. This geographical visualization
              offers a glimpse into the extensive reach and versatility of
              Tudelü&apos;s partition wall systems, demonstrating their pivotal
              role in shaping contemporary work environments across North
              America.
            </p>
          </div>

          {/* Legends */}
          <div className="lg:pt-16">
            <Legend />
          </div>
        </section>

        {/* Map section */}
        <section className="pb-10">
          <h2 className="text-sm font-semibold text-orange-600">Map Operation</h2>
          <p className="mt-2 max-w-4xl text-sm text-neutral-800">
            To sort which type of system on kind of installation, residential on
            commercial, please click the toggle button at the top of the map and
            turn on or off the corresponding section.
          </p>

          <div className="mt-6 overflow-hidden rounded-lg border border-neutral-300 bg-white">
            {/* aspect ratio responsive */}
            <div className="relative w-full pb-[56.25%] sm:pb-[45%] lg:pb-[40%]">
              <iframe
                title="Tudelu Installations Map"
                className="absolute inset-0 h-full w-full"
                src="https://www.google.com/maps/@19.5526656,-71.0803456,14z?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

     
    </div>
  );
}


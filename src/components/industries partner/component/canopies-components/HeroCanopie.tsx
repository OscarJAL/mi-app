import Image from "next/image";

export function HeroCanopies() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:pt-16">
      <div className="overflow-hidden rounded-[40px] bg-[#ff5100] .bg-gradient-to-br from-[#ff7b3a] to-[#ff5100] text-white shadow-lg">
        <div className="relative flex flex-col gap-6 px-8 py-10 md:flex-row md:items-center md:px-14 md:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[url('https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10" />
          <div className="relative max-w-xl space-y-4 md:space-y-6">
            <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              Get shelter and shade,
              <br />
              at the touch of a button.
            </h1>
            <p className="max-w-lg text-sm text-orange-50/90 md:text-base">
              When style, durability, and function come together with that
              tried-and-true Tudelü innovation—expect a masterpiece. You know,
              without all the work.
            </p>
            <button className="mt-2 rounded-full bg-white px-7 py-2.5 text-sm font-semibold text-[#ff5100] shadow-md hover:bg-orange-50">
              Order Now!
            </button>
          </div>

          <div className="relative mt-6 flex-1 md:mt-0">
            <div className="aspect-\[4\/3\] w-full overflow-hidden rounded-\[32px\] bg-black/10">
              <Image
                src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Tudelü canopy hero"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

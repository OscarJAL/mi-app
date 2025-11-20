export function TudeluFooter() {
  return (
    <footer className="border-t border-orange-200/60 bg-[#fff5ee] pt-12">
      <div className="mx-auto max-w-6xl px-4 pb-8">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff5100] text-white">
                <span className="text-lg font-bold">T</span>
              </div>
              <span className="text-lg font-semibold text-neutral-900">
                Tudelü
              </span>
            </div>
            <p className="mt-4 text-sm text-neutral-700">
              Tudelü makes
              <br />
              The Statement
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-900">
              Our Industry
            </h4>
            <ul className="mt-3 space-y-1.5 text-sm text-neutral-700">
              <li>Industries We Partner With</li>
              <li>AIA</li>
              <li>Certification</li>
              <li>ARCAT</li>
              <li>Partnership</li>
              <li>News + Events</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-900">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-1.5 text-sm text-neutral-700">
              <li>Partition Walls</li>
              <li>Canopies</li>
              <li>Pergolas</li>
              <li>About</li>
              <li>Process</li>
              <li>Resources</li>
              <li>Installations</li>
              <li>Measure</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Office</h4>
            <p className="mt-3 text-sm text-neutral-700">
              100 Industrial Avenue
              <br />
              Little Ferry, NJ
              <br />
              07643
            </p>

            <div className="mt-4 text-sm text-neutral-700">
              <span className="font-semibold text-neutral-900">Contact</span>
              <p>718.782.7882</p>
              <p>info@tudelu.com</p>
              <p className="mt-1 underline">Service Call?</p>
              <p className="mt-2 underline">Calendar</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-orange-200/60 pt-6 text-xs text-neutral-500 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-neutral-200" />
            <div className="h-8 w-16 rounded-full bg-neutral-200" />
            <div className="h-8 w-16 rounded-full bg-neutral-200" />
          </div>
          <p>© {new Date().getFullYear()} Tudelü Holdings, LLC</p>
        </div>
      </div>
    </footer>
  );
}

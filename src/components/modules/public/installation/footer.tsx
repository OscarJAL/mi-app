import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-14">
      {/* CTA band */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-7 sm:flex-row sm:items-center sm:px-6">
          <p className="text-sm font-semibold tracking-wide text-white/90">
            3 Steps • 2 Get • 1 Custom System
          </p>

          <Link
            href="#"
            className="w-full rounded-xl bg-white px-8 py-3 text-center text-sm font-semibold text-neutral-800 shadow-sm hover:bg-neutral-50 sm:w-auto"
          >
            Let&apos;s Get Started
          </Link>
        </div>
      </div>

      {/* Footer content */}
      <div className="bg-neutral-100/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Left */}
          <div>
            <div className="flex items-start gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-orange-500 text-white font-bold">
                t
              </span>
              <div>
                <p className="text-lg font-semibold text-orange-600">Tudelü</p>
                <p className="text-3xl font-semibold text-neutral-900 leading-none">
                  Makes
                </p>
                <p className="text-3xl font-semibold text-neutral-900 leading-none">
                  The Statement
                </p>
              </div>
            </div>
          </div>

          {/* Column 1 */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-orange-600">
              Our Industry
            </h4>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>Industries We Partner With</li>
              <li>AIA Certification</li>
              <li>ARCAT Partnership</li>
              <li>News + Events</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-orange-600">
              Quick Clicks
            </h4>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>Private</li>
              <li>Mute</li>
              <li>About</li>
              <li>Process</li>
              <li>Resources</li>
              <li>Installations</li>
              <li>Measure</li>
              <li>Learn</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-orange-600">
              Office
            </h4>
            <p className="text-sm text-neutral-700">
              100 Industrial Avenue
              <br />
              Little Ferry, NJ 07643
            </p>

            <h4 className="mt-6 mb-2 text-sm font-semibold text-orange-600">
              Contact
            </h4>
            <p className="text-sm text-neutral-700">
              718.782.7882
              <br />
              info@tudelu.com
              <br />
              Service Call?
            </p>

            <div className="mt-4 text-sm text-neutral-800">
              <p className="font-semibold">Calendar</p>
              <p className="text-xs font-semibold text-neutral-700">
                FREE Swatch Kit
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl border-t border-neutral-300 px-4 py-6 text-sm text-neutral-700 sm:px-6">
          Copyright © 2026 / Tudelü Holdings, LLC
        </div>
      </div>
    </footer>
  );
}


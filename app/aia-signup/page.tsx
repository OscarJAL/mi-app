export default function AiaSignupPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO / VIDEO MOCK */}
      <section className="px-4 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900">
            {/* “video” area */}
            <div className="relative flex h-[220px] items-center justify-center sm:h-[280px] lg:h-[340px]">
              {/* Side bars like the screenshot */}
              <div className="absolute inset-y-0 left-0 w-[14%] bg-neutral-800/80" />
              <div className="absolute inset-y-0 right-0 w-[14%] bg-neutral-800/80" />

              {/* Center content */}
              <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-orange-500/90" />
                  <span className="text-4xl font-semibold tracking-tight text-orange-300 sm:text-5xl">
                    Tudelü
                  </span>
                </div>

                {/* Thumbnails bar mock */}
                <div className="mt-4 w-[92%] max-w-4xl overflow-hidden rounded-xl bg-neutral-950/70 p-2">
                  <div className="flex gap-2 overflow-hidden">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-12 w-20 shrink-0 rounded-lg bg-neutral-800"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Close X */}
              <div className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-neutral-950/60 text-neutral-200">
                ×
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM AREA */}
      <section className="px-4 pb-14 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            {/* LEFT */}
            <aside className="space-y-6">
              <div className="flex items-start gap-4">
                {/* Fake AIA logo circle */}
                <div className="grid h-20 w-20 place-items-center rounded-full bg-orange-600 text-3xl font-bold text-white">
                  AIA
                </div>

                <div>
                  <p className="text-3xl font-semibold leading-none text-orange-600">
                    Proud
                  </p>
                  <p className="text-3xl font-semibold leading-none text-orange-600">
                    Partner
                  </p>
                </div>
              </div>

              <p className="text-lg font-medium text-orange-600">Sign Up</p>
            </aside>

            {/* RIGHT FORM */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-6">
              <form className="space-y-8">
                {/* top row: first/last */}
                <div className="grid gap-6 md:grid-cols-2">
                  <TextField label="First name" name="firstName" />
                  <TextField label="Last name" name="lastName" />
                </div>

                {/* phone / email */}
                <div className="grid gap-6 md:grid-cols-2">
                  <PhoneField label="Phone number" name="phone" />
                  <TextField label="Email" name="email" required />
                </div>

                {/* Type of Customer - radio list (label left, radios aligned right-ish) */}
                <div className="grid gap-4 md:grid-cols-[1fr_280px] md:items-start">
                  <div className="space-y-4">
                    <p className="text-sm font-medium text-neutral-800">
                      Type of Customer
                    </p>

                    <RadioRow name="customerType" label="Choice Architect" />
                    <RadioRow name="customerType" label="Interior Designer" />
                    <RadioRow name="customerType" label="Distributor" />
                    <RadioRow name="customerType" label="Other" />
                  </div>

                  {/* Empty space like the screenshot (big blank area on the right) */}
                  <div className="hidden md:block" />
                </div>

                {/* address / city */}
                <div className="grid gap-6 md:grid-cols-2">
                  <TextField label="Street address" name="street" />
                  <TextField label="City" name="city" />
                </div>

                {/* state / postal */}
                <div className="grid gap-6 md:grid-cols-2">
                  <TextField label="State/Region" name="state" />
                  <TextField label="Postal code" name="postal" />
                </div>

                {/* continuing_education + checkboxes */}
                <div className="grid gap-4 md:grid-cols-[1fr_280px]">
                  <div className="space-y-4">
                    <p className="text-sm font-medium text-neutral-800">
                      continuing_education
                    </p>

                    <CheckboxRow name="allMarketing" label="All Marketing" />
                    <CheckboxRow name="newProduct" label="New Product" />
                    <CheckboxRow name="information" label="Information" />
                    <CheckboxRow name="promotions" label="Promotions" />
                    <CheckboxRow name="optOut" label="Opt Out" />
                  </div>

                  {/* right column reserved space */}
                  <div className="hidden md:block" />
                </div>

                {/* Button bottom right */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-orange-600 px-6 py-4 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:w-[320px]"
                  >
                    Request an AIA <br />
                    Continuing Education <br />
                    Class Session
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ----------------- Reusable components ----------------- */

function TextField({
  label,
  name,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium text-neutral-800">
        {label}
        {required ? <span className="text-orange-600"> *</span> : null}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="h-11 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-900 outline-none ring-orange-500 focus:ring-2"
      />
    </div>
  );
}

function PhoneField({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium text-neutral-800">{label}</label>

      <div className="rounded-xl border border-neutral-200 bg-white p-3">
        {/* This is just visual (like screenshot). Replace with a real phone input if needed */}
        <p className="text-sm text-neutral-700">
          Dominican Republic (República Dominicana)
        </p>
        <div className="mt-2 flex items-center gap-3">
          <span className="text-sm text-neutral-500">+1</span>
          <input
            name={name}
            type="tel"
            className="h-9 w-full rounded-lg border border-neutral-200 px-3 text-sm outline-none ring-orange-500 focus:ring-2"
          />
        </div>
      </div>
    </div>
  );
}

function RadioRow({ name, label }: { name: string; label: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-neutral-100 pb-3">
      <span className="text-sm text-neutral-700">{label}</span>
      <input
        type="radio"
        name={name}
        value={label}
        className="h-4 w-4 text-orange-600 focus:ring-orange-500"
      />
    </div>
  );
}

function CheckboxRow({ name, label }: { name: string; label: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-neutral-100 pb-3">
      <span className="text-sm text-neutral-700">{label}</span>
      <input
        type="checkbox"
        name={name}
        className="h-4 w-4 rounded border-neutral-300 text-orange-600 focus:ring-orange-500"
      />
    </div>
  );
}
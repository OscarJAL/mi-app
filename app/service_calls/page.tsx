import Image from "next/image";

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="w-full">
        <div className="relative mx-auto h-[240px] w-full max-w-6xl overflow-hidden rounded-2xl sm:h-[500px] lg:h-[560px]">
          {/* Cambia el src por tu imagen en /public */}
          <Image
            src="https://22465736.fs1.hubspotusercontent-na1.net/hub/22465736/hubfs/custom-video-thumbnails/Animation_Restaurant-1-thumb.jpeg?length=1920"
            alt="Service hero"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
          {/* LEFT TEXT */}
          <aside className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold tracking-wide text-orange-600">
                Does Your System <br className="hidden sm:block" /> Need Servicing?
              </p>

              <h1 className="text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl">
                We are here to help, no matter how minor the fix!
              </h1>
            </div>

            <p className="max-w-md text-base leading-relaxed text-neutral-700">
              Complete the form, and one of our helpful reps will say Tudelü soon.
            </p>
          </aside>

          {/* FORM */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-6">
            <form className="space-y-6">
              {/* Row 1 */}
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Service_Project_Name" name="serviceProjectName" />

                <div className="grid gap-4 md:grid-cols-2 md:col-span-2">
                  <Field label="First name" name="firstName" required />
                  <Field label="Last name" name="lastName" required />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone number" name="phone" required />
              </div>

              {/* Address */}
              <div className="grid gap-4">
                <Field label="Street address" name="street" />
              </div>

              {/* City/State/Country */}
              <div className="grid gap-4 md:grid-cols-3">
                <Field label="City" name="city" />
                <Field label="State/Region" name="state" required />
                <Field label="Country/Region" name="country" required />
              </div>

              {/* Zip + Date */}
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Billing Zip Code - Contact" name="zip" />
                <Field label="Date Of Installation" name="installDate" type="date" />
              </div>

              {/* Selects */}
              <div className="grid gap-4 md:grid-cols-2">
                <SelectField
                  label="Installed Wall System"
                  name="installedWallSystem"
                  placeholder="Please Select"
                  options={[
                    "Option 1",
                    "Option 2",
                    "Option 3",
                  ]}
                />
                <SelectField
                  label="Requested Date To Be Completed"
                  name="requestedDate"
                  placeholder="Please Select"
                  options={[
                    "ASAP",
                    "Within 1 week",
                    "Within 2 weeks",
                    "This month",
                  ]}
                />
              </div>

              {/* Paragraph under requested date (like your screenshot) */}
              <p className="text-sm leading-relaxed text-neutral-600">
                At our service center, we adhere to a first-in, first-out policy for all
                service calls, ensuring fairness and efficiency in addressing customer needs.
                While we strive to accommodate your preferred service times, our dedicated
                Project Management team will proactively reach out to provide you with
                comprehensive details and work collaboratively to meet your specific requirements.
                Your satisfaction is our priority, and we are committed to delivering exceptional
                service experiences tailored to your preferences.
              </p>

              {/* Reason */}
              <div className="grid gap-2">
                <label className="text-sm font-medium text-neutral-800">
                  Reason For Service Call
                </label>
                <textarea
                  name="reason"
                  rows={5}
                  className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 outline-none ring-orange-500 placeholder:text-neutral-400 focus:ring-2"
                  placeholder=""
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  id="confirm"
                  name="confirm"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-neutral-300 text-orange-600 focus:ring-orange-500"
                />
                <label htmlFor="confirm" className="text-sm leading-relaxed text-neutral-700">
                  I hereby confirm that I agree to the accuracy of all the information provided
                  above, and I understand that providing false information may result in a delay
                  in processing my service call. I acknowledge the importance of providing truthful
                  details to ensure an efficient and timely resolution of my service request.
                </label>
              </div>

              {/* Submit */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:w-[220px]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

/** Reusable field */
function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
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
        className="h-11 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-900 outline-none ring-orange-500 placeholder:text-neutral-400 focus:ring-2"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  placeholder,
  options,
}: {
  label: string;
  name: string;
  placeholder: string;
  options: string[];
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium text-neutral-800">{label}</label>
      <select
        name={name}
        className="h-11 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-900 outline-none ring-orange-500 focus:ring-2"
        defaultValue=""
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
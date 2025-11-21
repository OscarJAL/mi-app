// app/contact/page.tsx

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        action="/thank-you"
        method="GET"
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-semibold text-gray-800">Contact Form</h1>

        <div className="flex flex-col space-y-1">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="border rounded px-3 py-2 text-sm outline-none focus:ring focus:ring-blue-300"
            placeholder="Your name"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="border rounded px-3 py-2 text-sm outline-none focus:ring focus:ring-blue-300"
            placeholder="you@example.com"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

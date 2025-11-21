// app/thank-you/page.tsx

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center space-y-4">
        <h1 className="text-3xl font-bold text-green-600">Thank you!</h1>
        <p className="text-gray-700">
          Your form has been submitted successfully.
        </p>
      </div>
    </main>
  );
}

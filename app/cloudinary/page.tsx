// app/upload/page.tsx

"use client";

import React, { useMemo, useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fileLabel = useMemo(() => {
    if (!file) return "Ningún archivo seleccionado";
    const mb = (file.size / (1024 * 1024)).toFixed(2);
    return `${file.name} • ${mb} MB`;
  }, [file]);

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!file) {
      setError("Selecciona un archivo primero.");
      return;
    }

    try {
      setIsUploading(true);

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Error subiendo archivo");
      }

      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      setError(err?.message ?? "Ocurrió un error");
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-2xl bg-white shadow-sm border p-6">
        <h1 className="text-2xl font-semibold text-gray-900">Subir archivo</h1>
        <p className="mt-1 text-sm text-gray-600">
          Puedes subir PDF, DWG (AutoCAD), DOCX, ZIP, imágenes, etc.
        </p>

        <form onSubmit={handleUpload} className="mt-6 space-y-4">
          <div className="rounded-xl border border-dashed p-4 bg-gray-50">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{fileLabel}</p>
                <p className="text-xs text-gray-600">
                  Tamaño máximo depende del backend (ej: 25MB)
                </p>
              </div>

              <label className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 cursor-pointer">
                Elegir archivo
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={isUploading}
            className="w-full rounded-xl px-4 py-2 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isUploading ? "Subiendo..." : "Subir a Cloudinary"}
          </button>

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {result && (
            <div className="rounded-xl border border-green-200 bg-green-50 p-3 text-sm text-green-800 space-y-2">
              <div><span className="font-semibold">OK:</span> {result.message}</div>
              <div className="break-all">
                <span className="font-semibold">URL:</span> {result.url}
              </div>
              <div className="text-xs text-green-900/70 break-all">
                public_id: {result.public_id}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

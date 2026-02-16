//"use client";

// Función reusable para subir archivos (por si quieres aislarla)
// Si quieres tener una función utilitaria en el frontend:

// src/lib/uploadFile.ts
// export async function uploadFileToBackend(file: File): Promise<string> {
//   const formData = new FormData();
//   formData.append('file', file);

//   const res = await fetch('http://localhost:3000/upload', {
//     method: 'POST',
//     body: formData,
//   });

//   if (!res.ok) throw new Error('Error uploading file');

//   const data = await res.json();
//   return data.url as string; // URL de Cloudinary
// }

// Y en tu componente:
// tsx

//const url = await uploadFileToBackend(file);
// Fotos de los productos: el panel las sube (ya achicadas) y la página las muestra.
import { getStore } from "@netlify/blobs";
import { randomUUID } from "node:crypto";
import { json, revisarClave, sinPermiso } from "../lib/comun.mjs";

const TIPOS = ["image/jpeg", "image/png", "image/webp"];
const ID_VALIDO = /^[a-f0-9-]{36}$/;
const MAXIMO = 4 * 1024 * 1024;

export default async (req, context) => {
  const fotos = getStore({ name: "fotos", consistency: "strong" });
  const id = context?.params?.id || "";

  if (req.method === "GET") {
    if (!ID_VALIDO.test(id)) return new Response("No encontrada", { status: 404 });
    const foto = await fotos.getWithMetadata(id, { type: "arrayBuffer" });
    if (!foto) return new Response("No encontrada", { status: 404 });
    const cache = "public, max-age=31536000, immutable";
    return new Response(foto.data, {
      headers: { "content-type": foto.metadata?.tipo || "image/jpeg", "cache-control": cache, "netlify-cdn-cache-control": cache }
    });
  }

  const estado = revisarClave(req);
  if (estado !== "ok") return sinPermiso(estado);

  if (req.method === "POST") {
    const tipo = (req.headers.get("content-type") || "").split(";")[0].trim().toLowerCase();
    if (!TIPOS.includes(tipo)) return json({ error: "La foto tiene que ser JPG, PNG o WEBP." }, 415);
    const datos = await req.arrayBuffer();
    if (!datos.byteLength) return json({ error: "La foto llegó vacía." }, 400);
    if (datos.byteLength > MAXIMO) return json({ error: "La foto es muy pesada (máximo 4 MB)." }, 413);
    const nuevo = randomUUID();
    await fotos.set(nuevo, datos, { metadata: { tipo } });
    return json({ url: `/api/foto/${nuevo}` }, 201);
  }

  if (req.method === "DELETE") {
    if (ID_VALIDO.test(id)) await fotos.delete(id);
    return json({ ok: true });
  }

  return json({ error: "Método no permitido." }, 405);
};

export const config = { path: ["/api/foto", "/api/foto/:id"] };

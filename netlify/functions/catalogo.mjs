// Catálogo de Cindy Mayorista: lo lee la página de clientes y lo guarda el panel.
import { getStore } from "@netlify/blobs";
import { json, revisarClave, sinPermiso } from "../lib/comun.mjs";

export default async (req) => {
  const tienda = getStore({ name: "cindy", consistency: "strong" });

  if (req.method === "GET") {
    const datos = await tienda.get("catalogo", { type: "json" });
    return datos ? json(datos) : json({ error: "Todavía no hay un catálogo guardado." }, 404);
  }

  if (req.method === "PUT") {
    const estado = revisarClave(req);
    if (estado !== "ok") return sinPermiso(estado);
    let datos;
    try { datos = await req.json(); } catch { return json({ error: "Los datos no son válidos." }, 400); }
    if (!datos || !Array.isArray(datos.secciones)) return json({ error: "Los datos no son válidos." }, 400);
    datos.actualizado = new Date().toISOString();
    await tienda.setJSON("catalogo", datos);
    return json({ ok: true, actualizado: datos.actualizado });
  }

  return json({ error: "Método no permitido." }, 405);
};

export const config = { path: "/api/catalogo" };

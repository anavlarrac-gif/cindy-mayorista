import { createHash, timingSafeEqual } from "node:crypto";

export const json = (datos, status = 200, extra = {}) =>
  new Response(JSON.stringify(datos), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...extra }
  });

// La contraseña del panel se configura en Netlify como variable de entorno ADMIN_PASSWORD
const claveConfigurada = () => globalThis.Netlify?.env?.get?.("ADMIN_PASSWORD") ?? process.env.ADMIN_PASSWORD ?? "";

export function revisarClave(req) {
  const esperada = claveConfigurada();
  if (!esperada) return "falta";
  let dada = req.headers.get("x-clave") || "";
  try { dada = decodeURIComponent(dada); } catch { return "mal"; }
  const a = createHash("sha256").update(dada).digest();
  const b = createHash("sha256").update(esperada).digest();
  return timingSafeEqual(a, b) ? "ok" : "mal";
}

export function sinPermiso(estado) {
  if (estado === "falta") return json({ error: "Falta configurar la contraseña del panel (ADMIN_PASSWORD) en Netlify." }, 503);
  return json({ error: "Contraseña incorrecta." }, 401);
}

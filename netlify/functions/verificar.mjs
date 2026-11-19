// Revisa la contraseña del panel.
import { json, revisarClave, sinPermiso } from "../lib/comun.mjs";

export default async (req) => {
  const estado = revisarClave(req);
  return estado === "ok" ? json({ ok: true }) : sinPermiso(estado);
};

export const config = { path: "/api/verificar" };

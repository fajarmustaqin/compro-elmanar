import { cookies } from "next/headers";

export const ADMIN_COOKIE = "elmanar_admin";

function getSecret() {
  return process.env.ADMIN_SECRET || "elmanar-dev-secret";
}

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "admin123";
}

export function verifyPassword(password: string) {
  return password === getAdminPassword();
}

/** Edge-safe session token (no Node crypto). */
export function createSessionToken() {
  const raw = `elmanar-admin:${getSecret()}`;
  return btoa(raw).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

export function isValidSession(token?: string | null) {
  if (!token) return false;
  return token === createSessionToken();
}

export async function isAdminAuthenticated() {
  const jar = await cookies();
  return isValidSession(jar.get(ADMIN_COOKIE)?.value);
}

export async function requireAdmin() {
  const ok = await isAdminAuthenticated();
  if (!ok) {
    throw new Error("UNAUTHORIZED");
  }
}

import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  createSessionToken,
  isAdminAuthenticated,
  verifyPassword,
} from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json();
  const password = String(body.password ?? "");

  if (!verifyPassword(password)) {
    return NextResponse.json({ error: "Password salah" }, { status: 401 });
  }

  const token = createSessionToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });
  return res;
}

export async function GET() {
  const ok = await isAdminAuthenticated();
  return NextResponse.json({ authenticated: ok });
}

import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

async function guard() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

export async function GET() {
  const denied = await guard();
  if (denied) return denied;

  const setting = await prisma.siteSetting.findUnique({ where: { id: 1 } });
  return NextResponse.json(setting);
}

export async function PUT(request: Request) {
  const denied = await guard();
  if (denied) return denied;

  const body = await request.json();
  const setting = await prisma.siteSetting.upsert({
    where: { id: 1 },
    update: {
      companyName: String(body.companyName ?? ""),
      tagline: String(body.tagline ?? ""),
      about: String(body.about ?? ""),
      vision: String(body.vision ?? ""),
      directorName: String(body.directorName ?? ""),
      directorTitle: String(body.directorTitle ?? ""),
      directorMessage: String(body.directorMessage ?? ""),
      phone: String(body.phone ?? ""),
      email: String(body.email ?? ""),
      website: String(body.website ?? ""),
      address: String(body.address ?? ""),
      whatsapp: String(body.whatsapp ?? ""),
    },
    create: {
      id: 1,
      companyName: String(body.companyName ?? "Elmanar Indonesia Group"),
      tagline: String(body.tagline ?? ""),
      about: String(body.about ?? ""),
      vision: String(body.vision ?? ""),
      directorName: String(body.directorName ?? ""),
      directorTitle: String(body.directorTitle ?? ""),
      directorMessage: String(body.directorMessage ?? ""),
      phone: String(body.phone ?? ""),
      email: String(body.email ?? ""),
      website: String(body.website ?? ""),
      address: String(body.address ?? ""),
      whatsapp: String(body.whatsapp ?? ""),
    },
  });

  return NextResponse.json(setting);
}

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
  const items = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(items);
}

export async function PATCH(request: Request) {
  const denied = await guard();
  if (denied) return denied;
  const body = await request.json();
  const id = Number(body.id);
  if (!id) return NextResponse.json({ error: "ID wajib" }, { status: 400 });

  const item = await prisma.contactMessage.update({
    where: { id },
    data: { isRead: Boolean(body.isRead) },
  });
  return NextResponse.json(item);
}

export async function DELETE(request: Request) {
  const denied = await guard();
  if (denied) return denied;
  const { searchParams } = new URL(request.url);
  const id = Number(searchParams.get("id"));
  if (!id) return NextResponse.json({ error: "ID wajib" }, { status: 400 });
  await prisma.contactMessage.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}

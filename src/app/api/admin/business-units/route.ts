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
  const items = await prisma.businessUnit.findMany({ orderBy: { sortOrder: "asc" } });
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const denied = await guard();
  if (denied) return denied;
  const body = await request.json();
  const item = await prisma.businessUnit.create({
    data: {
      title: String(body.title ?? ""),
      desc: String(body.desc ?? ""),
      image: String(body.image ?? ""),
      sortOrder: Number(body.sortOrder ?? 0),
      isActive: body.isActive !== false,
    },
  });
  return NextResponse.json(item, { status: 201 });
}

export async function PUT(request: Request) {
  const denied = await guard();
  if (denied) return denied;
  const body = await request.json();
  const id = Number(body.id);
  if (!id) return NextResponse.json({ error: "ID wajib" }, { status: 400 });

  const item = await prisma.businessUnit.update({
    where: { id },
    data: {
      title: String(body.title ?? ""),
      desc: String(body.desc ?? ""),
      image: String(body.image ?? ""),
      sortOrder: Number(body.sortOrder ?? 0),
      isActive: Boolean(body.isActive),
    },
  });
  return NextResponse.json(item);
}

export async function DELETE(request: Request) {
  const denied = await guard();
  if (denied) return denied;
  const { searchParams } = new URL(request.url);
  const id = Number(searchParams.get("id"));
  if (!id) return NextResponse.json({ error: "ID wajib" }, { status: 400 });
  await prisma.businessUnit.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}

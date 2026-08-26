import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = body.phone ? String(body.phone).trim() : null;
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nama, email, dan pesan wajib diisi" },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Format email tidak valid" }, { status: 400 });
    }

    const saved = await prisma.contactMessage.create({
      data: { name, email, phone, message },
    });

    return NextResponse.json(
      { ok: true, id: saved.id, message: "Pesan berhasil dikirim" },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gagal menyimpan pesan" }, { status: 500 });
  }
}

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });
    return NextResponse.json(messages);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gagal mengambil pesan" }, { status: 500 });
  }
}

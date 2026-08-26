import { NextResponse } from "next/server";
import { getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const content = await getSiteContent();
    return NextResponse.json(content);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Gagal mengambil konten" },
      { status: 500 },
    );
  }
}

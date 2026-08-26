import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [messages, unread, units, testimonials, partners] = await Promise.all([
    prisma.contactMessage.count(),
    prisma.contactMessage.count({ where: { isRead: false } }),
    prisma.businessUnit.count(),
    prisma.testimonial.count(),
    prisma.partner.count(),
  ]);

  return NextResponse.json({
    messages,
    unread,
    units,
    testimonials,
    partners,
  });
}

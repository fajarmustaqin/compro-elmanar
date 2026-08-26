import { prisma } from "@/lib/prisma";

export async function getSiteContent() {
  const [
    setting,
    history,
    missions,
    values,
    orgUnits,
    businessUnits,
    stats,
    gallery,
    partners,
    roadmap,
    whyUs,
    testimonials,
  ] = await Promise.all([
    prisma.siteSetting.findUnique({ where: { id: 1 } }),
    prisma.historyMilestone.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.mission.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.coreValue.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.orgUnit.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.businessUnit.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: "asc" },
    }),
    prisma.stat.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.galleryItem.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.partner.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.roadmapItem.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.whyUsItem.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.testimonial.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: "asc" },
    }),
  ]);

  return {
    setting,
    history,
    missions: missions.map((m) => m.text),
    values,
    orgUnits: orgUnits.map((o) => o.name),
    businessUnits,
    stats,
    portfolioImages: gallery
      .filter((g) => g.type === "portfolio")
      .map((g) => g.imageUrl),
    dokumentasiImages: gallery
      .filter((g) => g.type === "dokumentasi")
      .map((g) => g.imageUrl),
    partners: partners.map((p) => p.name),
    roadmap,
    whyUs,
    testimonials,
    contact: setting
      ? {
          phone: setting.phone,
          email: setting.email,
          website: setting.website,
          address: setting.address,
          whatsapp: setting.whatsapp,
        }
      : null,
  };
}

export type SiteContent = Awaited<ReturnType<typeof getSiteContent>>;

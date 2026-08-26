import { PrismaClient } from "@prisma/client";

if (!process.env.DATABASE_URL || !process.env.DATABASE_URL.trim()) {
  process.env.DATABASE_URL = "file:/data/prod.db";
}

const prisma = new PrismaClient();

async function main() {
  await prisma.contactMessage.deleteMany();
  await prisma.testimonial.deleteMany();
  await prisma.whyUsItem.deleteMany();
  await prisma.roadmapItem.deleteMany();
  await prisma.partner.deleteMany();
  await prisma.galleryItem.deleteMany();
  await prisma.stat.deleteMany();
  await prisma.businessUnit.deleteMany();
  await prisma.orgUnit.deleteMany();
  await prisma.coreValue.deleteMany();
  await prisma.mission.deleteMany();
  await prisma.historyMilestone.deleteMany();
  await prisma.siteSetting.deleteMany();

  await prisma.siteSetting.create({
    data: {
      id: 1,
      companyName: "Elmanar Indonesia Group",
      tagline: "Melayani dengan Hati, Menginspirasi Negeri",
      about:
        "Elmanar Indonesia Group adalah holding company yang bergerak di bidang layanan ibadah Umrah & Haji, event organizer, training & edukasi, serta media kreatif. Kami berkomitmen menghadirkan layanan yang amanah, profesional, dan berorientasi pada kepuasan mitra serta jemaah.",
      vision:
        "Menjadi holding company terdepan yang menginspirasi negeri melalui layanan ibadah, edukasi, dan kreativitas yang amanah.",
      directorName: "H. Ahmad Elmanar",
      directorTitle: "Direktur Utama",
      directorMessage:
        "Dengan penuh rasa syukur, kami menyambut Anda di Elmanar Indonesia Group. Dedikasi kami adalah melayani dengan hati dan menghadirkan layanan terbaik bagi umat.",
      phone: "+62 812-3456-7890",
      email: "info@elmanarindonesia.com",
      website: "www.elmanarindonesia.com",
      address:
        "Jl. Raya Contoh No. 88, Jakarta Selatan, DKI Jakarta 12345, Indonesia",
      whatsapp: "https://wa.me/6281234567890",
    },
  });

  await prisma.historyMilestone.createMany({
    data: [
      { year: "2015", title: "Berdiri", desc: "Elmanar Indonesia Group didirikan", sortOrder: 1 },
      { year: "2018", title: "Ekspansi", desc: "Membuka unit Event & Training", sortOrder: 2 },
      { year: "2021", title: "Sertifikasi", desc: "Izin resmi travel Umrah & Haji", sortOrder: 3 },
      { year: "2024", title: "Pertumbuhan", desc: "25K+ jemaah & 100+ partner", sortOrder: 4 },
    ],
  });

  await prisma.mission.createMany({
    data: [
      { text: "Menyediakan layanan Umrah & Haji yang amanah dan profesional", sortOrder: 1 },
      { text: "Menghadirkan event berkualitas yang menginspirasi", sortOrder: 2 },
      { text: "Membangun SDM unggul melalui pelatihan dan edukasi", sortOrder: 3 },
      { text: "Mengembangkan konten kreatif yang bermanfaat bagi umat", sortOrder: 4 },
    ],
  });

  await prisma.coreValue.createMany({
    data: [
      { title: "Amanah", icon: "handshake", sortOrder: 1 },
      { title: "Profesional", icon: "briefcase", sortOrder: 2 },
      { title: "Integritas", icon: "shield", sortOrder: 3 },
      { title: "Inovasi", icon: "lightbulb", sortOrder: 4 },
      { title: "Kepedulian", icon: "heart", sortOrder: 5 },
    ],
  });

  await prisma.orgUnit.createMany({
    data: [
      { name: "Umrah & Haji", sortOrder: 1 },
      { name: "Event Organizer", sortOrder: 2 },
      { name: "Training & Edukasi", sortOrder: 3 },
      { name: "Media & Creative", sortOrder: 4 },
    ],
  });

  await prisma.businessUnit.createMany({
    data: [
      {
        title: "Layanan Umrah & Haji",
        desc: "Paket Umrah & Haji yang nyaman, amanah, dan sesuai syariat dengan pendampingan penuh.",
        image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&q=80",
        sortOrder: 1,
      },
      {
        title: "Event Organizer",
        desc: "Menyelenggarakan seminar, gathering, dan acara keagamaan dengan standar profesional.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
        sortOrder: 2,
      },
      {
        title: "Training & Edukasi",
        desc: "Program pelatihan SDM, soft skill, dan edukasi Islam untuk individu maupun institusi.",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
        sortOrder: 3,
      },
      {
        title: "Media & Creative",
        desc: "Produksi konten visual, dokumentasi, dan branding untuk kebutuhan dakwah dan bisnis.",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
        sortOrder: 4,
      },
    ],
  });

  await prisma.stat.createMany({
    data: [
      { value: "10+", label: "Tahun Pengalaman", sortOrder: 1 },
      { value: "25K+", label: "Jemaah Dilayani", sortOrder: 2 },
      { value: "500+", label: "Event Sukses", sortOrder: 3 },
      { value: "100+", label: "Partner & Klien", sortOrder: 4 },
    ],
  });

  const portfolio = [
    "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&q=80",
    "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=600&q=80",
    "https://images.unsplash.com/photo-1580418827634-230dcb733aee?w=600&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
  ];
  const dokumentasi = [
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
  ];

  await prisma.galleryItem.createMany({
    data: [
      ...portfolio.map((imageUrl, i) => ({
        type: "portfolio",
        imageUrl,
        title: `Portofolio ${i + 1}`,
        sortOrder: i + 1,
      })),
      ...dokumentasi.map((imageUrl, i) => ({
        type: "dokumentasi",
        imageUrl,
        title: `Dokumentasi ${i + 1}`,
        sortOrder: i + 1,
      })),
    ],
  });

  await prisma.partner.createMany({
    data: ["Saudia", "Garuda Indonesia", "BSI", "KAN", "Lion Air", "Bank Muamalat"].map(
      (name, i) => ({ name, sortOrder: i + 1 }),
    ),
  });

  await prisma.roadmapItem.createMany({
    data: [
      { year: "2024", title: "Penguatan Brand", desc: "Perluasan jaringan partner & digitalisasi layanan", sortOrder: 1 },
      { year: "2025", title: "Ekspansi Regional", desc: "Membuka cabang di kota-kota besar Indonesia", sortOrder: 2 },
      { year: "2026", title: "Platform Digital", desc: "Aplikasi layanan jemaah & booking terintegrasi", sortOrder: 3 },
      { year: "2027+", title: "Go Global", desc: "Kolaborasi internasional & layanan cross-border", sortOrder: 4 },
    ],
  });

  await prisma.whyUsItem.createMany({
    data: [
      { title: "Berpengalaman", icon: "award", sortOrder: 1 },
      { title: "Layanan Berkualitas", icon: "star", sortOrder: 2 },
      { title: "Harga Kompetitif", icon: "tag", sortOrder: 3 },
      { title: "Tim Profesional", icon: "users", sortOrder: 4 },
      { title: "Legal & Terpercaya", icon: "check", sortOrder: 5 },
      { title: "Pendampingan 24/7", icon: "clock", sortOrder: 6 },
    ],
  });

  await prisma.testimonial.create({
    data: {
      name: "Ahmad Fauzi",
      role: "Jemaah Umrah 2024",
      message:
        "Pelayanan Elmanar sangat memuaskan. Dari persiapan hingga di Tanah Suci, kami merasa aman dan terbimbing.",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      sortOrder: 1,
    },
  });

  console.log("Seed SQLite selesai.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

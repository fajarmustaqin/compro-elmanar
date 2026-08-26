"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Stats = {
  messages: number;
  unread: number;
  units: number;
  testimonials: number;
  partners: number;
};

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((r) => r.json())
      .then(setStats)
      .catch(() => setStats(null));
  }, []);

  const cards = [
    { label: "Pesan Masuk", value: stats?.messages ?? "—", href: "/admin/messages", note: stats ? `${stats.unread} belum dibaca` : "" },
    { label: "Unit Bisnis", value: stats?.units ?? "—", href: "/admin/business-units", note: "Kelola layanan" },
    { label: "Testimoni", value: stats?.testimonials ?? "—", href: "/admin/testimonials", note: "Review klien" },
    { label: "Partner", value: stats?.partners ?? "—", href: "/admin/partners", note: "Logo & nama partner" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#0a3d2e]">Dashboard</h2>
      <p className="mt-1 text-sm text-[#5c6b64]">
        Ringkasan konten website Elmanar Indonesia Group
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-[#c9a24a]">
              {c.label}
            </p>
            <p className="mt-3 text-3xl font-semibold text-[#0a3d2e]">{c.value}</p>
            <p className="mt-1 text-xs text-[#5c6b64]">{c.note}</p>
          </Link>
        ))}
      </div>

      <div className="mt-8 rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <h3 className="font-semibold text-[#0a3d2e]">Quick links</h3>
        <ul className="mt-3 space-y-2 text-sm text-[#5c6b64]">
          <li>
            <Link href="/admin/settings" className="text-[#0a3d2e] hover:underline">
              Edit pengaturan perusahaan & kontak
            </Link>
          </li>
          <li>
            <a href="/" target="_blank" className="text-[#0a3d2e] hover:underline">
              Buka website publik
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";

const nav = [
  { href: "/admin", label: "Dashboard", exact: true },
  { href: "/admin/settings", label: "Pengaturan" },
  { href: "/admin/business-units", label: "Unit Bisnis" },
  { href: "/admin/testimonials", label: "Testimoni" },
  { href: "/admin/partners", label: "Partner" },
  { href: "/admin/messages", label: "Pesan Masuk" },
];

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-[#f3f5f4] text-[#1a2e26]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row">
        <aside className="border-b border-black/5 bg-[#0a3d2e] text-white lg:w-64 lg:shrink-0 lg:border-b-0 lg:border-r">
          <div className="px-5 py-5">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-[#d4b45e]">
              ELMANAR
            </p>
            <p className="mt-1 text-sm font-semibold">Admin Panel</p>
          </div>
          <nav className="flex gap-1 overflow-x-auto px-3 pb-4 lg:flex-col lg:overflow-visible">
            {nav.map((item) => {
              const active = item.exact
                ? pathname === item.href
                : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap rounded-md px-3 py-2 text-sm transition ${
                    active
                      ? "bg-white/15 text-[#e0c87a]"
                      : "text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto hidden space-y-2 px-3 pb-5 lg:block">
            <a
              href="/"
              target="_blank"
              className="block rounded-md px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
            >
              Lihat Website
            </a>
            <button
              type="button"
              onClick={logout}
              className="w-full rounded-md px-3 py-2 text-left text-sm text-red-200 hover:bg-white/10"
            >
              Logout
            </button>
          </div>
        </aside>

        <div className="flex-1">
          <header className="flex items-center justify-between border-b border-black/5 bg-white px-4 py-3 sm:px-6">
            <h1 className="text-sm font-semibold text-green-950">Backend Elmanar</h1>
            <div className="flex items-center gap-3 lg:hidden">
              <a href="/" className="text-xs text-green-900">
                Website
              </a>
              <button
                type="button"
                onClick={logout}
                className="text-xs font-medium text-red-600"
              >
                Logout
              </button>
            </div>
          </header>
          <main className="p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/content";
import { Icon } from "./Icon";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-green-950/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#beranda" className="flex items-center gap-2.5 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/60 bg-green-800/60">
            <Icon name="kaaba" className="h-4 w-4 text-gold-400" />
          </span>
          <span className="leading-tight">
            <span className="block text-[11px] font-semibold tracking-[0.18em] text-gold-300">
              ELMANAR
            </span>
            <span className="block text-xs font-medium tracking-wide text-white/90">
              INDONESIA GROUP
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85 transition hover:text-gold-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#kontak" className="btn-gold hidden text-[11px] uppercase tracking-wider sm:inline-flex">
            Hubungi Kami
          </a>
          <button
            type="button"
            className="inline-flex rounded-md p-2 text-white xl:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-green-950 px-4 py-4 xl:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium uppercase tracking-wide text-white/90"
              >
                {link.label}
              </a>
            ))}
            <a href="#kontak" className="btn-gold mt-2 text-center text-xs uppercase" onClick={() => setOpen(false)}>
              Hubungi Kami
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

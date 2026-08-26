import type { SiteContent } from "@/lib/content";
import { navLinks } from "@/data/content";
import { Icon } from "./Icon";

type Props = {
  contact: NonNullable<SiteContent["contact"]>;
  companyName?: string;
};

export function Footer({ contact, companyName = "Elmanar Indonesia Group" }: Props) {
  return (
    <footer className="bg-green-950 text-white">
      <div className="container-site grid gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <a href="#beranda" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/50">
              <Icon name="kaaba" className="h-4 w-4 text-gold-400" />
            </span>
            <span>
              <span className="block text-[11px] font-semibold tracking-[0.18em] text-gold-300">
                ELMANAR
              </span>
              <span className="block text-xs text-white/80">INDONESIA GROUP</span>
            </span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            {companyName} — holding company yang berkomitmen melayani dengan hati melalui
            layanan Umrah &amp; Haji, event, edukasi, dan media kreatif.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gold-300">Menu</h4>
          <ul className="mt-4 space-y-2">
            {navLinks.slice(0, 4).map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-white/70 hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gold-300">Informasi</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <a href="#tentang" className="hover:text-white">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#partner" className="hover:text-white">
                Partner
              </a>
            </li>
            <li>
              <a href="#dokumentasi" className="hover:text-white">
                Dokumentasi
              </a>
            </li>
            <li>
              <a href="#kontak" className="hover:text-white">
                Legalitas
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gold-300">Kontak</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>{contact.phone}</li>
            <li>{contact.email}</li>
            <li className="leading-relaxed">{contact.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {companyName}. All rights reserved.
      </div>
    </footer>
  );
}

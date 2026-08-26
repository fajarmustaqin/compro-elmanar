import Image from "next/image";
import { partners } from "@/data/content";
import { Icon } from "./Icon";

export function TrustSection() {
  return (
    <section id="partner" className="section-pad bg-sand-50">
      <div className="container-site grid gap-8 lg:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
            Kolaborasi
          </p>
          <h2 className="heading-section mt-2">Partner &amp; Klien</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
            {partners.map((name) => (
              <div
                key={name}
                className="flex h-20 items-center justify-center rounded-xl bg-white px-3 text-center text-xs font-semibold tracking-wide text-green-900/70 shadow-sm ring-1 ring-black/5"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-2xl bg-white px-6 py-10 text-center shadow-sm ring-1 ring-black/5">
          <Icon name="quote" className="h-10 w-10 text-gold-400" />
          <p className="mt-4 font-display text-lg leading-relaxed text-green-900">
            &ldquo;Pelayanan Elmanar sangat memuaskan. Dari persiapan hingga di Tanah
            Suci, kami merasa aman dan terbimbing.&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
                alt="Ahmad Fauzi"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-green-900">Ahmad Fauzi</p>
              <p className="text-xs text-muted">Jemaah Umrah 2024</p>
            </div>
          </div>
          <div className="mt-5 flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${i === 0 ? "bg-gold-500" : "bg-green-800/20"}`}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
            Kepercayaan
          </p>
          <h2 className="heading-section mt-2">Legalitas</h2>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="flex aspect-[3/4] flex-col items-center justify-center gap-2 rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-black/5"
              >
                <Icon name="shield" className="h-8 w-8 text-green-800" />
                <p className="text-[11px] font-semibold text-green-900">
                  Sertifikat / Izin {n}
                </p>
                <p className="text-[10px] text-muted">Dokumen resmi perusahaan</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

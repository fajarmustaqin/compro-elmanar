import Image from "next/image";
import type { SiteContent } from "@/lib/content";
import { Icon } from "./Icon";

type Props = {
  partners: SiteContent["partners"];
  testimonials: SiteContent["testimonials"];
};

export function TrustSection({ partners, testimonials }: Props) {
  const testimonial = testimonials[0];

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
          {testimonial ? (
            <>
              <p className="mt-4 font-display text-lg leading-relaxed text-green-900">
                &ldquo;{testimonial.message}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                {testimonial.avatarUrl && (
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatarUrl}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                )}
                <div className="text-left">
                  <p className="text-sm font-semibold text-green-900">{testimonial.name}</p>
                  <p className="text-xs text-muted">{testimonial.role}</p>
                </div>
              </div>
            </>
          ) : (
            <p className="mt-4 text-sm text-muted">Belum ada testimoni.</p>
          )}
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

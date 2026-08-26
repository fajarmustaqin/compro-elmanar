import Image from "next/image";
import { contact } from "@/data/content";
import { Icon } from "./Icon";

export function Contact() {
  return (
    <section id="kontak" className="section-pad bg-sand-50">
      <div className="container-site grid gap-8 lg:grid-cols-[1fr_1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
            Hubungi
          </p>
          <h2 className="heading-section mt-2">Kontak Kami</h2>
          <ul className="mt-6 space-y-4 text-sm text-muted">
            <li className="flex gap-3">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-green-800" />
              <span>{contact.phone}</span>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-green-800" />
              <span>{contact.email}</span>
            </li>
            <li className="flex gap-3">
              <Icon name="globe" className="mt-0.5 h-4 w-4 shrink-0 text-green-800" />
              <span>{contact.website}</span>
            </li>
            <li className="flex gap-3">
              <Icon name="map" className="mt-0.5 h-4 w-4 shrink-0 text-green-800" />
              <span>{contact.address}</span>
            </li>
          </ul>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-6 inline-flex gap-2 uppercase tracking-wider"
          >
            Hubungi via WhatsApp
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
          <iframe
            title="Lokasi Elmanar Indonesia Group"
            src="https://maps.google.com/maps?q=Jakarta%20Selatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-64 w-full border-0 lg:h-full min-h-[260px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-green-900 p-6 text-white sm:p-8">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-500/15" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            Ikuti Kami
          </p>
          <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            <div className="flex h-28 w-28 items-center justify-center rounded-xl bg-white p-2">
              <div className="grid h-full w-full grid-cols-5 gap-0.5">
                {Array.from({ length: 25 }).map((_, i) => (
                  <span
                    key={i}
                    className={`rounded-[1px] ${
                      [0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23, 24, 6, 8, 12, 16, 18].includes(i)
                        ? "bg-green-950"
                        : "bg-transparent"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-white/80">Scan QR untuk mengikuti media sosial kami.</p>
              <div className="mt-4 flex gap-3">
                {["IG", "YT", "FB", "TT"].map((s) => (
                  <span
                    key={s}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-[10px] font-bold text-gold-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-xl">
            <div className="relative h-36">
              <Image
                src="https://images.unsplash.com/photo-1519817650390-64a93db51149?w=800&q=80"
                alt="Inspirasi"
                fill
                className="object-cover"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-green-950/55" />
              <p className="absolute inset-0 flex items-center justify-center px-4 text-center font-display text-sm italic text-gold-300">
                &ldquo;Melayani dengan hati, menginspirasi negeri.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

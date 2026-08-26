import Image from "next/image";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section id="beranda" className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920&q=80"
        alt="Masjidil Haram"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-950/70 to-green-900/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,74,0.18),transparent_50%)]" />

      <div className="container-site relative flex min-h-[100svh] flex-col justify-center px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-2xl">
            <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.28em] text-gold-400">
              Elmanar Indonesia Group
            </p>
            <h1 className="animate-fade-up animate-delay-1 mt-4 font-display text-4xl leading-[1.15] text-white sm:text-5xl lg:text-6xl">
              Melayani dengan Hati,{" "}
              <span className="italic text-gold-400">Menginspirasi Negeri</span>
            </h1>
            <p className="animate-fade-up animate-delay-2 mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              Kami hadir sebagai mitra terpercaya dalam layanan Umrah &amp; Haji,
              event organizer, pelatihan, serta media kreatif — dengan semangat
              amanah dan profesionalisme.
            </p>
            <div className="animate-fade-up animate-delay-3 mt-8 flex flex-wrap gap-3">
              <a href="#tentang" className="btn-primary uppercase tracking-wider">
                Tentang Kami
              </a>
              <a href="#unit-bisnis" className="btn-outline-light uppercase tracking-wider">
                Unit Bisnis
              </a>
            </div>
          </div>

          <div className="animate-fade-up animate-delay-2 flex justify-start lg:justify-end">
            <a
              href="#dokumentasi"
              className="group flex items-center gap-4 text-white"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/10 transition group-hover:border-gold-400 group-hover:bg-gold-500/20">
                <Icon name="play" className="h-6 w-6 text-gold-300" />
              </span>
              <span>
                <span className="block text-sm font-semibold">Tonton Video Profile</span>
                <span className="text-xs text-white/70">Kenali lebih dekat Elmanar</span>
              </span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60">
          <a href="#tentang" aria-label="Scroll ke tentang kami" className="block animate-bounce">
            <Icon name="chevron" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

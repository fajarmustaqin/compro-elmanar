import Image from "next/image";
import type { SiteContent } from "@/lib/content";
import { Icon } from "./Icon";

function ThumbGrid({
  id,
  title,
  images,
}: {
  id: string;
  title: string;
  images: string[];
}) {
  return (
    <div id={id}>
      <div className="mb-4 flex items-end justify-between gap-3">
        <h3 className="font-display text-xl text-green-900">{title}</h3>
        <a href="#kontak" className="text-xs font-semibold text-gold-500 hover:underline">
          Lihat Semua →
        </a>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {images.map((src, i) => (
          <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={src}
              alt={`${title} ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 20vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

type Props = {
  portfolioImages: SiteContent["portfolioImages"];
  dokumentasiImages: SiteContent["dokumentasiImages"];
  stats: SiteContent["stats"];
};

export function PortfolioStats({
  portfolioImages,
  dokumentasiImages,
  stats,
}: Props) {
  return (
    <section id="portfolio" className="section-pad bg-white">
      <div className="container-site grid gap-8 lg:grid-cols-[1fr_1.1fr_1fr] lg:items-stretch">
        <ThumbGrid id="portfolio-grid" title="Portofolio" images={portfolioImages} />

        <div className="flex flex-col justify-center rounded-2xl bg-green-900 px-6 py-10 text-white shadow-lg sm:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            Pencapaian Kami
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.id} className="text-center">
                <span className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gold-300">
                  <Icon name="award" className="h-5 w-5" />
                </span>
                <p className="font-display text-3xl font-semibold text-gold-300 sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-white/75">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="dokumentasi">
          <ThumbGrid
            title="Dokumentasi Kegiatan"
            images={dokumentasiImages}
            id="dokumentasi-grid"
          />
        </div>
      </div>
    </section>
  );
}

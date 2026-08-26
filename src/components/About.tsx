import Image from "next/image";
import type { SiteContent } from "@/lib/content";

type Props = {
  setting: NonNullable<SiteContent["setting"]>;
  history: SiteContent["history"];
  missions: SiteContent["missions"];
};

export function About({ setting, history, missions }: Props) {
  return (
    <section id="tentang" className="section-pad bg-sand-50">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            <div className="relative h-56 bg-green-900">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt={`Direktur ${setting.companyName}`}
                fill
                className="object-cover object-top opacity-90"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 to-transparent" />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                Sambutan Direktur
              </p>
              <p className="mt-3 font-display text-lg text-green-900">
                Assalamu&apos;alaikum Warahmatullahi Wabarakatuh
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {setting.directorMessage}
              </p>
              <div className="mt-6 border-t border-sand-100 pt-4">
                <p className="font-display text-xl italic text-green-800">
                  {setting.directorName}
                </p>
                <p className="text-xs text-muted">{setting.directorTitle}</p>
              </div>
            </div>
          </article>

          <article className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
              Tentang Kami
            </p>
            <h2 className="heading-section mt-2">{setting.companyName}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">{setting.about}</p>

            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-green-900">
                Sejarah Perusahaan
              </h3>
              <ol className="relative mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
                <span className="absolute left-0 right-0 top-3 hidden h-px bg-gold-300/60 lg:block" />
                {history.map((item) => (
                  <li key={item.id} className="relative">
                    <span className="relative z-10 mb-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-800 text-[10px] font-bold text-white">
                      •
                    </span>
                    <p className="font-display text-lg text-gold-500">{item.year}</p>
                    <p className="mt-1 text-sm font-semibold text-green-900">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{item.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </article>

          <article className="flex flex-col gap-6">
            <div className="rounded-2xl bg-green-900 p-6 text-white shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                Visi
              </p>
              <p className="mt-3 font-display text-xl leading-snug">{setting.vision}</p>
            </div>
            <div className="flex-1 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                Misi
              </p>
              <ul className="mt-4 space-y-3">
                {missions.map((m) => (
                  <li key={m} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

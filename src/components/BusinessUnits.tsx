import Image from "next/image";
import type { SiteContent } from "@/lib/content";
import { Icon } from "./Icon";

type Props = {
  businessUnits: SiteContent["businessUnits"];
};

export function BusinessUnits({ businessUnits }: Props) {
  return (
    <section id="unit-bisnis" className="section-pad bg-sand-50">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
            Layanan Kami
          </p>
          <h2 className="heading-section mt-2">Unit Bisnis Kami</h2>
          <p className="mt-3 text-sm text-muted">
            Empat pilar bisnis yang saling mendukung untuk melayani kebutuhan umat
            dan mitra secara menyeluruh.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {businessUnits.map((unit) => (
            <article
              key={unit.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-44">
                <Image
                  src={unit.image}
                  alt={unit.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <span className="absolute -bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-green-800 text-gold-300 shadow-md ring-4 ring-white">
                  <Icon name="kaaba" className="h-4 w-4" />
                </span>
              </div>
              <div className="px-5 pb-6 pt-8">
                <h3 className="font-display text-lg text-green-900">{unit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{unit.desc}</p>
                <a
                  href="#kontak"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-green-800 transition hover:text-gold-500"
                >
                  Selengkapnya
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

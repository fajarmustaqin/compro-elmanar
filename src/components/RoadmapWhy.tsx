import { roadmap, whyUs } from "@/data/content";
import { Icon } from "./Icon";

type WhyIcon =
  | "award"
  | "star"
  | "tag"
  | "users"
  | "check"
  | "clock";

export function RoadmapWhy() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site grid gap-14 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
            Masa Depan
          </p>
          <h2 className="heading-section mt-2">Roadmap</h2>
          <div className="relative mt-10">
            <div className="absolute left-0 right-0 top-4 hidden h-px bg-gold-300/70 sm:block" />
            <ol className="grid gap-6 sm:grid-cols-4">
              {roadmap.map((item) => (
                <li key={item.year} className="relative">
                  <span className="relative z-10 mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-800 text-[10px] font-bold text-gold-300">
                    {item.year.slice(2)}
                  </span>
                  <p className="font-display text-lg text-gold-500">{item.year}</p>
                  <p className="mt-1 text-sm font-semibold text-green-900">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
            Keunggulan
          </p>
          <h2 className="heading-section mt-2">Mengapa Memilih Elmanar?</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center gap-3 rounded-xl bg-sand-50 px-3 py-5 text-center ring-1 ring-black/5"
              >
                <span className="text-green-800">
                  <Icon name={item.icon as WhyIcon} className="h-7 w-7" />
                </span>
                <span className="text-xs font-semibold text-green-900">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

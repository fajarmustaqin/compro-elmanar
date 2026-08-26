import type { SiteContent } from "@/lib/content";
import { Icon } from "./Icon";

type Props = {
  values: SiteContent["values"];
  orgUnits: SiteContent["orgUnits"];
};

export function ValuesOrg({ values, orgUnits }: Props) {
  return (
    <section className="section-pad bg-white">
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
            Nilai Inti
          </p>
          <h2 className="heading-section mt-2">Core Values</h2>
          <p className="mt-3 max-w-md text-sm text-muted">
            Lima nilai yang menjadi fondasi setiap langkah dan layanan Elmanar.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {values.map((v) => (
              <div
                key={v.id}
                className="flex flex-col items-center gap-3 rounded-xl bg-sand-50 px-3 py-5 text-center ring-1 ring-black/5"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-800 text-gold-300">
                  <Icon name={v.icon as "handshake"} className="h-6 w-6" />
                </span>
                <span className="text-xs font-semibold text-green-900">{v.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
            Organisasi
          </p>
          <h2 className="heading-section mt-2">Struktur Organisasi</h2>
          <div className="mt-8 flex flex-col items-center">
            <div className="rounded-md bg-green-800 px-6 py-3 text-sm font-semibold tracking-wide text-white">
              Direktur Utama
            </div>
            <div className="h-8 w-px bg-gold-400" />
            <div className="h-px w-[min(100%,28rem)] bg-gold-400" />
            <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
              {orgUnits.map((unit) => (
                <div key={unit} className="flex flex-col items-center">
                  <div className="h-6 w-px bg-gold-400" />
                  <div className="w-full rounded-md border border-green-800/20 bg-sand-50 px-2 py-3 text-center text-xs font-semibold text-green-900">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 h-6 w-px bg-gold-400" />
            <div className="rounded-md border border-dashed border-green-700/40 bg-white px-5 py-2.5 text-xs font-semibold text-green-800">
              Supporting Division
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

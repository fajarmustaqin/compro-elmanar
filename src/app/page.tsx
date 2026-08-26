import { About } from "@/components/About";
import { BusinessUnits } from "@/components/BusinessUnits";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PortfolioStats } from "@/components/PortfolioStats";
import { RoadmapWhy } from "@/components/RoadmapWhy";
import { TrustSection } from "@/components/TrustSection";
import { ValuesOrg } from "@/components/ValuesOrg";
import { getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getSiteContent();

  if (!content.setting || !content.contact) {
    return (
      <main className="flex min-h-screen items-center justify-center p-8 text-center">
        <div>
          <h1 className="text-xl font-semibold text-green-900">Database belum siap</h1>
          <p className="mt-2 text-sm text-muted">
            Jalankan <code className="rounded bg-sand-100 px-1">npm run db:push</code> lalu{" "}
            <code className="rounded bg-sand-100 px-1">npm run db:seed</code>
          </p>
        </div>
      </main>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About
          setting={content.setting}
          history={content.history}
          missions={content.missions}
        />
        <ValuesOrg values={content.values} orgUnits={content.orgUnits} />
        <BusinessUnits businessUnits={content.businessUnits} />
        <PortfolioStats
          portfolioImages={content.portfolioImages}
          dokumentasiImages={content.dokumentasiImages}
          stats={content.stats}
        />
        <TrustSection
          partners={content.partners}
          testimonials={content.testimonials}
        />
        <RoadmapWhy roadmap={content.roadmap} whyUs={content.whyUs} />
        <Contact contact={content.contact} />
      </main>
      <Footer
        contact={content.contact}
        companyName={content.setting.companyName}
      />
    </>
  );
}

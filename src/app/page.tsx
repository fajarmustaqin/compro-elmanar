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

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <ValuesOrg />
        <BusinessUnits />
        <PortfolioStats />
        <TrustSection />
        <RoadmapWhy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ScrollShowcase } from "@/components/ScrollShowcase";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { FeaturesTabs } from "@/components/FeaturesTabs";
import { TogetherSection } from "@/components/TogetherSection";
import { PersonalizationSection } from "@/components/PersonalizationSection";
import { ConnectionSection } from "@/components/ConnectionSection";
import { DifferentiatorSection } from "@/components/DifferentiatorSection";
import { AudienceSection } from "@/components/AudienceSection";
import { SecuritySection } from "@/components/SecuritySection";
import { PricingSection } from "@/components/PricingSection";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { InterestForm } from "@/components/InterestForm";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Marquee />
        <ScrollShowcase />
        <ProblemSection />
        <SolutionSection />
        <FeaturesTabs />
        <TogetherSection />
        <PersonalizationSection />
        <ConnectionSection />
        <DifferentiatorSection />
        <AudienceSection />
        <SecuritySection />
        <PricingSection />
        <FAQ />
        <CTA />
        <InterestForm />
      </main>
      <Footer />
    </>
  );
}

export default App;

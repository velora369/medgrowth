import Header from "@/components/header";
import Footer from "@/components/footer";
import LandingHero from "@/components/landing/hero-section";
import CaseCevidaSection from "@/components/landing/case-cevida-section";
import OriginSection from "@/components/landing/origin-section";
import NumbersSection from "@/components/landing/numbers-section";
import BeforeAfterSection from "@/components/landing/before-after-section";
import MethodologySection from "@/components/landing/methodology-section";
import SolutionsSection from "@/components/landing/solutions-section";
import ResultsSection from "@/components/landing/results-section";
import LandingPortfolio from "@/components/landing/portfolio-section";
import LandingTestimonials from "@/components/landing/testimonials-section";
import AudienceSection from "@/components/landing/audience-section";
import FaqSection from "@/components/landing/faq-section";
import LandingFinalCta from "@/components/landing/final-cta-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <LandingHero />
        <CaseCevidaSection />
        <OriginSection />
        <NumbersSection />
        <BeforeAfterSection />
        <MethodologySection />
        <SolutionsSection />
        <ResultsSection />
        <LandingPortfolio />
        <LandingTestimonials />
        <AudienceSection />
        <FaqSection />
        <LandingFinalCta />
      </main>
      <Footer />
    </div>
  );
}

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QuickCategories } from "@/components/QuickCategories";
import { FeaturedPoojas } from "@/components/FeaturedPoojas";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PanditProfiles } from "@/components/PanditProfiles";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FestivalsSection } from "@/components/FestivalsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <QuickCategories />
        <FeaturedPoojas />
        <FeaturesSection />
        <PanditProfiles />
        <HowItWorksSection />
        <TestimonialsSection />
        <FestivalsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

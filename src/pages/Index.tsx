import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <ServicesSection />
        <CaseStudiesSection />
        <WhyChooseSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import AboutSection from "@/components/sections/AboutSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import MidCTA from "@/components/sections/MidCTA";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import VideoSection from "@/components/sections/VideoSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <VideoSection />
        <AboutSection />
        <FeaturesSection />
        <IntegrationsSection />
        <WhyUsSection />
        <MidCTA />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

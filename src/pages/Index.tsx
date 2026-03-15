import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectorsBanner from "@/components/SectorsBanner";
import ServicesOverview from "@/components/ServicesOverview";
import AboutPreview from "@/components/AboutPreview";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SectorsBanner />
        <ServicesOverview />
        <AboutPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProductCarousel } from "@/components/ProductCarousel";
import { AboutSection } from "@/components/AboutSection";
import { MarketSection } from "@/components/MarketSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductCarousel />
      <AboutSection />
      <MarketSection />
      <Footer />
    </div>
  );
};

export default Index;

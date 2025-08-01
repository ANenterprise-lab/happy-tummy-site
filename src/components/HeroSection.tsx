import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-pets.jpg";

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 parallax"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60 z-10" />
        <img
          src={heroImage}
          alt="Happy pets with healthy food"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-left animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Premium
              </span>
              <br />
              <span className="text-foreground">
                Nutrition for
              </span>
              <br />
              <span className="text-foreground">
                Your Best Friend
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Give your pets the love they deserve with our natural, healthy, and delicious food made from the finest ingredients.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-accent/50 px-4 py-2 rounded-full">
                <Heart className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Made with Love</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/50 px-4 py-2 rounded-full">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">100% Safe</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/50 px-4 py-2 rounded-full">
                <Leaf className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Natural Ingredients</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("market")}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-medium px-8 py-3"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("about")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Floating elements */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              {/* Floating cards */}
              <div className="absolute top-10 right-10 bg-card/80 backdrop-blur-sm rounded-xl p-4 shadow-warm animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Happy Pets</p>
                    <p className="text-xs text-muted-foreground">10,000+ satisfied</p>
                  </div>
                </div>
              </div>

              <div 
                className="absolute top-32 left-0 bg-card/80 backdrop-blur-sm rounded-xl p-4 shadow-warm animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Premium Quality</p>
                    <p className="text-xs text-muted-foreground">Vet approved</p>
                  </div>
                </div>
              </div>

              <div 
                className="absolute bottom-10 right-20 bg-card/80 backdrop-blur-sm rounded-xl p-4 shadow-warm animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Natural</p>
                    <p className="text-xs text-muted-foreground">100% organic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
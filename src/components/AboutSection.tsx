import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Leaf, Award, Users, Globe } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every product is crafted with care and attention to your pet's health and happiness.",
  },
  {
    icon: Shield,
    title: "Vet Approved",
    description: "All our formulas are developed and approved by certified veterinary nutritionists.",
  },
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "We use only the finest natural ingredients sourced from trusted local farmers.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized by pet industry experts for excellence in nutrition and quality.",
  },
  {
    icon: Users,
    title: "Trusted by Thousands",
    description: "Over 10,000 happy pet parents trust us with their furry family members.",
  },
  {
    icon: Globe,
    title: "Sustainable",
    description: "Committed to environmentally responsible practices and sustainable packaging.",
  },
];

const stats = [
  { number: "10K+", label: "Happy Pets" },
  { number: "5★", label: "Average Rating" },
  { number: "100%", label: "Natural" },
  { number: "24/7", label: "Support" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-accent/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Why Choose PawFood?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're passionate about providing the highest quality nutrition for your beloved pets. 
            Here's what makes us different and why thousands of pet parents trust us.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-0 shadow-warm">
            <CardContent className="p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                "At PawFood, we believe every pet deserves the best nutrition to live a happy, healthy life. 
                We're committed to creating premium, natural pet food that strengthens the bond between you and your furry family members. 
                Because when your pets thrive, families thrive."
              </p>
              <div className="flex items-center justify-center mt-8 gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Founded with Love</p>
                  <p className="text-sm text-muted-foreground">Since 2020</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
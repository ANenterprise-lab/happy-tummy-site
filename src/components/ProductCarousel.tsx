import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from "lucide-react";
import dogFood from "@/assets/product-dog-food.jpg";
import catFood from "@/assets/product-cat-food.jpg";
import treats from "@/assets/product-treats.jpg";

const products = [
  {
    id: 1,
    name: "Premium Dog Food",
    description: "High-quality nutrition for adult dogs with real meat and vegetables",
    price: "$29.99",
    rating: 4.8,
    reviews: 156,
    image: dogFood,
  },
  {
    id: 2,
    name: "Gourmet Cat Food",
    description: "Delicious wet food for cats with fresh fish and essential nutrients",
    price: "$24.99",
    rating: 4.9,
    reviews: 203,
    image: catFood,
  },
  {
    id: 3,
    name: "Natural Pet Treats",
    description: "Healthy training treats made with natural ingredients",
    price: "$15.99",
    rating: 4.7,
    reviews: 89,
    image: treats,
  },
];

export const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-accent/20 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular products loved by pets and their owners
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main carousel */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0">
                  <Card className="mx-4 shadow-warm border-0 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Product Image */}
                        <div className="relative overflow-hidden rounded-l-2xl">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                            Best Seller
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="p-8 flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(product.rating)
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {product.rating} ({product.reviews} reviews)
                            </span>
                          </div>

                          <h3 className="text-2xl font-bold mb-3 text-foreground">
                            {product.name}
                          </h3>

                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {product.description}
                          </p>

                          <div className="flex items-center justify-between mb-6">
                            <span className="text-3xl font-bold text-primary">
                              {product.price}
                            </span>
                            <span className="text-sm text-muted-foreground line-through">
                              ${(parseFloat(product.price.slice(1)) + 10).toFixed(2)}
                            </span>
                          </div>

                          <div className="flex gap-3">
                            <Button className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              Add to Cart
                            </Button>
                            <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                              <Star className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-warm"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-warm"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-muted hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Star, Search, Filter, Plus, Minus } from "lucide-react";
import { toast } from "sonner";
import dogFood from "@/assets/product-dog-food.jpg";
import catFood from "@/assets/product-cat-food.jpg";
import treats from "@/assets/product-treats.jpg";

const products = [
  {
    id: 1,
    name: "Premium Dog Food",
    description: "High-quality nutrition for adult dogs with real meat and vegetables",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.8,
    reviews: 156,
    image: dogFood,
    category: "Dog Food",
    inStock: true,
  },
  {
    id: 2,
    name: "Gourmet Cat Food",
    description: "Delicious wet food for cats with fresh fish and essential nutrients",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.9,
    reviews: 203,
    image: catFood,
    category: "Cat Food",
    inStock: true,
  },
  {
    id: 3,
    name: "Natural Pet Treats",
    description: "Healthy training treats made with natural ingredients",
    price: 15.99,
    originalPrice: 25.99,
    rating: 4.7,
    reviews: 89,
    image: treats,
    category: "Treats",
    inStock: true,
  },
  {
    id: 4,
    name: "Puppy Growth Formula",
    description: "Specially formulated nutrition for growing puppies",
    price: 32.99,
    originalPrice: 42.99,
    rating: 4.9,
    reviews: 124,
    image: dogFood,
    category: "Dog Food",
    inStock: true,
  },
  {
    id: 5,
    name: "Senior Cat Formula",
    description: "Gentle nutrition designed for senior cats 7+ years",
    price: 27.99,
    originalPrice: 37.99,
    rating: 4.6,
    reviews: 78,
    image: catFood,
    category: "Cat Food",
    inStock: false,
  },
  {
    id: 6,
    name: "Training Rewards",
    description: "Small bite-sized treats perfect for training sessions",
    price: 12.99,
    originalPrice: 19.99,
    rating: 4.8,
    reviews: 156,
    image: treats,
    category: "Treats",
    inStock: true,
  },
];

const categories = ["All", "Dog Food", "Cat Food", "Treats"];

export const MarketSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<Record<number, number>>({});

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
    const product = products.find(p => p.id === productId);
    toast.success(`Added ${product?.name} to cart!`);
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [productId, quantity]) => {
      const product = products.find(p => p.id === parseInt(productId));
      return total + (product?.price || 0) * quantity;
    }, 0);
  };

  const getCartItemCount = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  return (
    <section id="market" className="py-20 bg-gradient-to-br from-accent/10 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Pet Food Market
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Shop our premium selection of natural pet food and treats
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-gradient-to-r from-primary to-secondary text-white" 
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Shopping Cart Summary */}
        {getCartItemCount() > 0 && (
          <Card className="mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Cart Summary</p>
                    <p className="text-sm text-muted-foreground">
                      {getCartItemCount()} items • ${getCartTotal().toFixed(2)}
                    </p>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
                  Checkout
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border-0 bg-card/80 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge variant="secondary" className="bg-destructive text-white">
                        Out of Stock
                      </Badge>
                    </div>
                  )}
                  {product.originalPrice > product.price && (
                    <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
                      Sale
                    </Badge>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
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
                    <span className="text-sm text-muted-foreground ml-1">
                      ({product.reviews})
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {product.name}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-primary">
                        ${product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Badge variant="outline" className="border-primary/50 text-primary">
                      {product.category}
                    </Badge>
                  </div>

                  {/* Cart Controls */}
                  {cart[product.id] ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => removeFromCart(product.id)}
                          className="h-8 w-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">
                          {cart[product.id]}
                        </span>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => addToCart(product.id)}
                          disabled={!product.inStock}
                          className="h-8 w-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <span className="text-sm font-medium text-primary">
                        ${(product.price * cart[product.id]).toFixed(2)}
                      </span>
                    </div>
                  ) : (
                    <Button
                      onClick={() => addToCart(product.id)}
                      disabled={!product.inStock}
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white disabled:opacity-50"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No products found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
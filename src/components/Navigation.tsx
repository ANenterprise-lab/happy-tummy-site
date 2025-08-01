import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { AuthModal } from "./AuthModal";

export const Navigation = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  const openAuthModal = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🐾</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                PawFood
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("market")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Market
              </button>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scrollToSection("market")}
                className="relative"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </Button>
              <Button
                variant="outline"
                onClick={() => openAuthModal("login")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Login
              </Button>
              <Button
                onClick={() => openAuthModal("signup")}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                Sign Up
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-background border-t border-border animate-slide-in">
              <div className="px-4 py-6 space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("market")}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  Market
                </button>
                <div className="flex items-center space-x-4 pt-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => scrollToSection("market")}
                    className="relative"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {cartItems > 0 && (
                      <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cartItems}
                      </span>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => openAuthModal("login")}
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => openAuthModal("signup")}
                    className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onSwitchMode={setAuthMode}
      />
    </>
  );
};
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <img src={logo} alt="Abhyuday Security Services" className="h-16 w-auto" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-foreground hover:text-primary transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:8600338884" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>8600338884</span>
            </a>
            <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90">
              Book Visit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 space-y-4 animate-fade-in">
            <button onClick={() => scrollToSection("home")} className="block w-full text-left text-foreground hover:text-primary transition-colors py-2">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left text-foreground hover:text-primary transition-colors py-2">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="block w-full text-left text-foreground hover:text-primary transition-colors py-2">
              Services
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="block w-full text-left text-foreground hover:text-primary transition-colors py-2">
              Testimonials
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left text-foreground hover:text-primary transition-colors py-2">
              Contact
            </button>
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <a href="tel:8600338884" className="flex items-center gap-2 text-sm text-foreground">
                <Phone className="h-4 w-4" />
                <span>8600338884</span>
              </a>
              <Button onClick={() => scrollToSection("contact")} className="w-full bg-primary hover:bg-primary/90">
                Book Visit
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

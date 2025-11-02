import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="Abhyuday Security Services" className="h-16 w-auto" />
            <p className="text-muted-foreground text-sm">
              Professional security services backed by military expertise. Your protection is our profession.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-primary/10 hover:bg-primary p-2 rounded-lg transition-colors group">
                <Instagram className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-primary/10 hover:bg-primary p-2 rounded-lg transition-colors group">
                <Facebook className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-primary/10 hover:bg-primary p-2 rounded-lg transition-colors group">
                <Linkedin className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-primary/10 hover:bg-primary p-2 rounded-lg transition-colors group">
                <Twitter className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("home")} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("testimonials")} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Corporate Security</li>
              <li>Event Security</li>
              <li>Personal Protection</li>
              <li>CCTV Monitoring</li>
              <li>Armed Security</li>
              <li>Residential Security</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div className="text-sm">
                  <a href="tel:8766970868" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 8766970868
                  </a>
                  <br />
                  <a href="tel:8600338884" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 8600338884
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <a href="mailto:services@abhyudaysecurity.in" className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                  services@abhyudaysecurity.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Abhyuday Security Services. All rights reserved. | Government Approved Security Provider
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

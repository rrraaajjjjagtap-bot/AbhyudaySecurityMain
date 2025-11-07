import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you soon.");
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-sm uppercase tracking-wider text-accent font-semibold">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground">
            Contact Us Today
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to secure your premises? Reach out for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-6 animate-slide-in-left">
            <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-2xl p-8">
              <div>
                <Input placeholder="Your Name" required className="bg-background" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" required className="bg-background" />
              </div>
              <div>
                <Input type="tel" placeholder="Phone Number" required className="bg-background" />
              </div>
              <div>
                <Textarea placeholder="Your Message" rows={5} required className="bg-background" />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg">
                Send Message
              </Button>
            </form>

            {/* Social Media */}
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 hover:bg-primary p-3 rounded-lg transition-colors group"
                >
                  <Instagram className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 hover:bg-primary p-3 rounded-lg transition-colors group"
                >
                  <Facebook className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 hover:bg-primary p-3 rounded-lg transition-colors group"
                >
                  <Linkedin className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 hover:bg-primary p-3 rounded-lg transition-colors group"
                >
                  <Twitter className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-2xl p-6 flex items-start gap-4 hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <a href="tel:9766970868" className="text-muted-foreground hover:text-primary transition-colors">
                    9766970868
                  </a>
                  <br />
                  <a href="https://wa.me/918600330001" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 mt-2">
                    <span>+91 86003 30001 (WhatsApp)</span>
                  </a>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 flex items-start gap-4 hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a href="mailto:services@abhyudaysecurity.in" className="text-muted-foreground hover:text-primary transition-colors break-all">
                    services@abhyudaysecurity.in
                  </a>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 flex items-start gap-4 hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    Rudraksh Residency, Tamjai Nagar, Satara, Maharashtra
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-border h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.8345!2d73.9972!3d17.6854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQxJzA3LjQiTiA3M8KwNTknNTAuMCJF!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin&q=Rudraksh+Residency+Tamjai+Nagar+Satara"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

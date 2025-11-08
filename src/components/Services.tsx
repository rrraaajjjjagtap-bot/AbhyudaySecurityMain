import { Building2, Users, ShieldCheck, Video, Car, Home, Factory, School, Dog, Shield, Flame } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import eventSecurity from "@/assets/event-security.jpg";
import securityTeam from "@/assets/security-team-uniform.jpg";
import bouncerImg from "@/assets/bouncer.jpg";
import executiveSecurity from "@/assets/executive-security.jpg";
import securityDiagram from "@/assets/security-services-diagram.png";
import securityPriority from "@/assets/security-priority.png";
import k9Security from "@/assets/k9-security.jpg";
import vipSecurity from "@/assets/vip-security.jpg";
import escortSecurity from "@/assets/escort-security.jpg";
import fireSecurity from "@/assets/fire-security.jpg";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Corporate Security",
      description: "Comprehensive security solutions for offices, business parks, and corporate campuses with trained professionals.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
    },
    {
      icon: Users,
      title: "Event Security",
      description: "Professional crowd management and security for events, conferences, exhibitions, and private gatherings.",
      image: eventSecurity
    },
    {
      icon: ShieldCheck,
      title: "VIP & Personal Security",
      description: "Elite bodyguard services for VIPs, executives, and high-profile individuals. Professional bodyguards & gunman security.",
      image: vipSecurity
    },
    {
      icon: Dog,
      title: "K-9 Security Services",
      description: "Professional dog patrol and K-9 security units for enhanced protection and threat detection at your premises.",
      image: k9Security
    },
    {
      icon: Shield,
      title: "Escort Security Service",
      description: "Complete escort security with car, driver, and trained guards for safe transportation of VIPs and valuable assets.",
      image: escortSecurity
    },
    {
      icon: Flame,
      title: "Fire Security Services",
      description: "Professional fire safety and emergency response services with trained firefighting personnel and modern equipment.",
      image: fireSecurity
    },
    {
      icon: Video,
      title: "CCTV Monitoring",
      description: "24/7 surveillance monitoring with advanced technology and trained operators ensuring constant vigilance.",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&h=300&fit=crop"
    },
    {
      icon: Car,
      title: "Armed Security",
      description: "Licensed armed guards for high-risk locations, cash transit, and valuable asset protection.",
      image: bouncerImg
    },
    {
      icon: Home,
      title: "Residential Security",
      description: "Gated community and residential complex security with background-verified personnel.",
      image: securityTeam
    },
    {
      icon: Factory,
      title: "Industrial Security",
      description: "Comprehensive security for factories, warehouses, and manufacturing units with access control.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop"
    },
    {
      icon: School,
      title: "Educational Institutions",
      description: "Specialized security for schools, colleges, and universities ensuring student and staff safety.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop"
    },
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img src={securityPriority} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-sm uppercase tracking-wider text-accent font-semibold">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground">
            Comprehensive Security Solutions
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From corporate offices to personal protection, we provide tailored security services that meet the highest standards of professionalism and reliability.
          </p>
        </div>

        {/* Security Services Diagram */}
        <div className="flex justify-center mb-16 animate-scale-in">
          <div className="relative max-w-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl rounded-full opacity-50 animate-pulse" />
            <img 
              src={securityDiagram} 
              alt="Security Services Overview" 
              className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-2xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 bg-primary/90 p-3 rounded-lg">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <CardContent className="p-6 space-y-3">
                <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-card border border-border rounded-2xl p-8 space-y-4">
            <p className="text-lg text-muted-foreground italic">
              "We offer modernized technology-oriented integrated solutions to keep residential or commercial buildings or complexes away from any potential threats."
            </p>
            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Verified Staff</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

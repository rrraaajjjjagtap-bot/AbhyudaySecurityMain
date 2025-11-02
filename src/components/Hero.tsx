import { Button } from "@/components/ui/button";
import { Shield, Award, Users } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDEzNGg4djhoLThWMTM0em0wLTE2aDh2OGgtOHYtOHptMTYgMzJoOHY4aC04di04em0tMTYgMGg4djhoLThWMTUwem0wLTE2aDh2OGgtOHYtOHptMTYgMGg4djhoLThWMTM0em0xNiAzMmg4djhoLTh2LTh6bS0xNiAwaDh2OGgtOHYtOHptMTYtMTZoOHY4aC04VjE1MHptMCAxNmg4djhoLTh2LTh6bTAtMzJoOHY4aC04VjEzNHptMCAxNmg4djhoLThWMTUweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-foreground">Your Protection Is</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Our Profession
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Elite security services backed by 22 years of Indian Army experience and 15 years in private security. Government-approved and trusted across Maharashtra.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                Book Consultation
              </Button>
              <Button onClick={() => window.location.href = "tel:8766970868"} size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg">
                Call Now
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <Shield className="h-8 w-8 mx-auto text-accent" />
                <div className="text-3xl font-bold text-foreground">22+</div>
                <div className="text-sm text-muted-foreground">Years Army Experience</div>
              </div>
              <div className="text-center space-y-2">
                <Award className="h-8 w-8 mx-auto text-accent" />
                <div className="text-3xl font-bold text-foreground">Certified</div>
                <div className="text-sm text-muted-foreground">Govt Approved</div>
              </div>
              <div className="text-center space-y-2">
                <Users className="h-8 w-8 mx-auto text-accent" />
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Trained Personnel</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 mix-blend-overlay" />
              <img
                src="https://images.unsplash.com/photo-1557599443-1c2f0d8f6d8b?w=800&h=600&fit=crop"
                alt="Professional Security Team"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-lg animate-glow">
              <p className="text-sm font-semibold">Since 2012</p>
              <p className="text-2xl font-bold">Trusted Leader</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

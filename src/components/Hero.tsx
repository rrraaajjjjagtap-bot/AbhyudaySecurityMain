import { Button } from "@/components/ui/button";
import { Shield, Award, Users } from "lucide-react";
import vipSecurity from "@/assets/vip-security.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCall = () => {
    window.location.href = "tel:+918600330001";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918600330001?text=Hello, I'm interested in your security services", "_blank");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 md:pb-0">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDEzNGg4djhoLThWMTM0em0wLTE2aDh2OGgtOHYtOHptMTYgMzJoOHY4aC04di04em0tMTYgMGg4djhoLThWMTUwem0wLTE2aDh2OGgtOHYtOHptMTYgMGg4djhoLThWMTM0em0xNiAzMmg4djhoLTh2LTh6bS0xNiAwaDh2OGgtOHYtOHptMTYtMTZoOHY4aC04VjE1MHptMCAxNmg4djhoLTh2LTh6bTAtMzJoOHY4aC04VjEzNHptMCAxNmg4djhoLThWMTUweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Centered Logo with Fancy Effects */}
        <div className="flex justify-center mb-8 md:mb-12 animate-fade-in">
          <div className="relative group">
            {/* Animated glow rings */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary blur-3xl opacity-40 animate-pulse group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-primary/30 blur-2xl animate-glow" style={{ animationDelay: '0.5s' }} />
            
            {/* Multiple shadow layers for depth */}
            <div className="absolute inset-0 shadow-[0_0_60px_rgba(25,211,243,0.5)] rounded-full" />
            <div className="absolute inset-0 shadow-[0_0_100px_rgba(252,211,77,0.3)] rounded-full animate-pulse" />
            
            <img 
              src={logo} 
              alt="Abhyuday Security Services Logo" 
              className="h-40 sm:h-48 md:h-56 lg:h-64 w-auto relative z-10 hover:scale-110 transition-all duration-500"
              style={{ 
                filter: 'drop-shadow(0 10px 40px rgba(252, 211, 77, 0.8)) drop-shadow(0 0 60px rgba(252, 211, 77, 0.5)) drop-shadow(0 0 100px rgba(252, 211, 77, 0.3))'
              }}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 animate-slide-in-left">
            
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Your Protection Is</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Our Profession
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl">
                Elite security services backed by 22 years of Indian Army experience and 15 years in private security. Government-approved and trusted across Maharashtra.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
                Book Consultation
              </Button>
              <Button onClick={handleCall} size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
                Call Now
              </Button>
              <Button onClick={handleWhatsApp} size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
                WhatsApp
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-6 md:pt-8">
              <div className="text-center space-y-1 md:space-y-2">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 mx-auto text-accent" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">22+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Army Experience</div>
              </div>
              <div className="text-center space-y-1 md:space-y-2">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 mx-auto text-accent" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Certified</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Govt Approved</div>
              </div>
              <div className="text-center space-y-1 md:space-y-2">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 mx-auto text-accent" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Trained Personnel</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative animate-slide-in-right mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 mix-blend-overlay" />
              <img
                src={vipSecurity}
                alt="VIP & Personal Security - Professional bodyguards & gunman security"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-accent text-accent-foreground p-4 sm:p-6 rounded-2xl shadow-lg animate-glow">
              <p className="text-xs sm:text-sm font-semibold">Since 2012</p>
              <p className="text-lg sm:text-2xl font-bold">Trusted Leader</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

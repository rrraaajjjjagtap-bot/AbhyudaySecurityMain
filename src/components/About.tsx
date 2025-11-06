import { CheckCircle, Shield, Users, Award, Clock, Target } from "lucide-react";
import founderRef from "@/assets/founder-photo.png";

const About = () => {
  const features = [
    { icon: Shield, title: "Military-Grade Training", description: "Ex-Army personnel with 22 years of experience" },
    { icon: Award, title: "Government Certified", description: "Approved by Maharashtra State Government" },
    { icon: Users, title: "Professional Team", description: "Rigorously screened and trained staff" },
    { icon: Clock, title: "24/7 Service", description: "Round-the-clock protection and support" },
    { icon: Target, title: "Tailored Solutions", description: "Customized security plans for every client" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Trust Message */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 animate-fade-in">
          <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 md:p-8">
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              Customers of ABHYUDAY SECURITY SERVICES can be sure that their infrastructure, offices are being vigorously monitored and supported by experienced company with experts serving the best organization around the country over the years. With us you have the confidence that your company, infrastructure is always protected from malicious attacks and unauthorized access round the clock services.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
          <div className="flex justify-center lg:justify-end animate-slide-in-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl">
                <img 
                  src={founderRef} 
                  alt="Founder - Abhyuday Security Services" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-4 md:space-y-6 animate-slide-in-right">
            <h2 className="text-3xl md:text-4xl font-bold text-accent">About Us</h2>
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground">
              <p>I have a 22 years of experience in Indian Army and 15 years of experience in security services industries.</p>
              <p>I have played role of administration officer and security officer at various levels of organization.</p>
              <p>Now I started ABHYUDAY SECURITY SERVICES in year Sept-2012.</p>
              <p className="font-semibold text-foreground">With approved by state Govt. of Maharashtra.</p>
              <p>We are one of the leading security agencies in the state of maharashtra, we provide all types of security services. you can contact us for reliable and proficient security services.</p>
              <p>Approved by the state government of maharashtra,</p>
              <p className="font-semibold text-accent">ABHYUDAY SECURITY SERVICES is a certifird security service provider in the state of maharashtra</p>
            </div>
          </div>
        </div>

        {/* Excellence Section */}
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-10 mb-16 md:mb-20">
          <div className="text-center space-y-3 md:space-y-4">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Excellence Through Experience
            </h3>
            <p className="text-base md:text-lg text-accent font-semibold">
              We stand as India's one of the famous brand for security services for our excellence, certification, dedication and reliability.
            </p>
          </div>

          <div className="bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 space-y-4 md:space-y-6">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              We offer modernised technology oriented integrated solutions to keep residences or commercial buildings or complexes away from any potential threats.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              If you are searching for a high end reliable and end to end security service provider, we can surely meet your requirements with perfection. We are poised with groundbreaking security technologies as well as devices and dedicated as well as streamlined human resource to meet critical security requirements from clients.
            </p>
          </div>
        </div>

        {/* Process Section */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 md:space-y-8 animate-slide-in-left">
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-xl md:text-2xl font-bold text-foreground">Our Comprehensive Process:</h4>
              <ul className="space-y-3">
                {[
                  "SCREENING",
                  "INTERVIEW BY STAFF CONSULTANT",
                  "SKILL ASSESSMENT AS PER LAID DOWN FORMAT",
                  "CLIENT BASED MATCHING REFERENCE CHECKS",
                  "ORIENTATION",
                  "SHORTLISTING TRAINING",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-muted-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-xl p-4 md:p-6">
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                With well-equipped training institute incorporating rigorous training by our experienced and qualified EXARMY STAFF, our forte lies in delivering high quality services for security & protection to establishments such as government institutions, mncs, hospitality industry, industrial houses, factories, health clubs, construction sites and co-operative housing societies.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-4 md:space-y-6 animate-slide-in-right">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-4 md:p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-primary/10 p-2 md:p-3 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2">{feature.title}</h4>
                    <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-primary to-accent p-6 md:p-8 rounded-xl text-center space-y-2 md:space-y-3">
              <p className="text-lg md:text-2xl font-bold text-primary-foreground">
                "Security isn't just our business—it's our calling"
              </p>
              <p className="text-sm md:text-base text-primary-foreground/80">- Founder, Ex-Indian Army Officer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

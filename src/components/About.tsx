import { CheckCircle, Shield, Users, Award, Clock, Target } from "lucide-react";

const About = () => {
  const features = [
    { icon: Shield, title: "Military-Grade Training", description: "Ex-Army personnel with 22 years of experience" },
    { icon: Award, title: "Government Certified", description: "Approved by Maharashtra State Government" },
    { icon: Users, title: "Professional Team", description: "Rigorously screened and trained staff" },
    { icon: Clock, title: "24/7 Service", description: "Round-the-clock protection and support" },
    { icon: Target, title: "Tailored Solutions", description: "Customized security plans for every client" },
  ];

  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-wider text-accent font-semibold">About Abhyuday Security</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground">
                Excellence Through Experience
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in September 2012 by a distinguished ex-Indian Army officer with 22 years of military service and 15 years in security management, Abhyuday Security Services stands as one of Maharashtra's most trusted security providers.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                We are India's renowned brand for security services, celebrated for our excellence, certification, dedication, and reliability. Our modernized technology-oriented integrated solutions protect residential and commercial buildings from any potential threats.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Our Comprehensive Process:</h4>
              <ul className="space-y-3">
                {[
                  "Rigorous screening and background verification",
                  "Professional interviews by staff consultants",
                  "Skill assessment per government format",
                  "Client-based matching and reference checks",
                  "Intensive orientation and shortlisting",
                  "Specialized training programs",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-6 animate-slide-in-right">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-xl text-center space-y-3">
              <p className="text-2xl font-bold text-primary-foreground">
                "Security isn't just our business—it's our calling"
              </p>
              <p className="text-primary-foreground/80">- Founder, Ex-Indian Army Officer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

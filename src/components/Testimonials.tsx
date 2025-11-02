import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "CEO, Tech Solutions Pvt Ltd",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 5,
      text: "Abhyuday Security has been protecting our corporate office for over 3 years. Their professionalism and military-grade training are evident in every interaction. Highly recommended!",
    },
    {
      name: "Priya Desai",
      role: "Residential Society President",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 5,
      text: "Our gated community feels much safer with their trained personnel. The 24/7 monitoring and quick response to incidents have given all residents peace of mind.",
    },
    {
      name: "Amit Patel",
      role: "Event Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      rating: 5,
      text: "We've used their event security services multiple times for large conferences. Their crowd management skills are exceptional, and they handle everything professionally.",
    },
    {
      name: "Sneha Kulkarni",
      role: "Factory Owner",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
      rating: 5,
      text: "The industrial security solution provided by Abhyuday has been outstanding. Their systematic approach and trained guards have significantly reduced security incidents at our facility.",
    },
    {
      name: "Vikram Singh",
      role: "Business Executive",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      rating: 5,
      text: "I require personal security for my business travels. Their bodyguards are highly professional, discreet, and always alert. I feel completely safe under their protection.",
    },
    {
      name: "Meera Joshi",
      role: "School Principal",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      rating: 5,
      text: "The security staff at our school is wonderful with children while maintaining high security standards. Parents appreciate the safe environment they've created.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-sm uppercase tracking-wider text-accent font-semibold">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by businesses, residential communities, and individuals across Maharashtra
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border bg-background hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <Quote className="h-10 w-10 text-accent opacity-50" />
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 max-w-3xl">
            <p className="text-2xl font-bold text-foreground mb-4">
              "Your infrastructure is always protected from malicious attacks and unauthorized access around the clock"
            </p>
            <p className="text-muted-foreground">
              Experience the confidence of working with Maharashtra's leading security provider, backed by decades of military and security expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

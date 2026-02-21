import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, staggerChild } from "@/components/motion/animations";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Grace Mwangi",
      role: "HR Director",
      company: "TechVentures Kenya",
      content: "FarajaSoft transformed our payroll process completely. What used to take us 3 days now takes 2 hours. The NHIF and NSSF compliance is automatic—no more manual calculations.",
      rating: 5,
    },
    {
      name: "James Ochieng",
      role: "CEO",
      company: "Savanna Logistics",
      content: "The best investment we've made for our HR operations. Employee self-service reduced our HR team's workload by 60%. The support team is incredibly responsive.",
      rating: 5,
    },
    {
      name: "Amina Hassan",
      role: "Finance Manager",
      company: "Coastal Enterprises",
      content: "Statutory compliance was always stressful before FarajaSoft. Now KRA reports are generated in seconds. The dashboard gives us real-time visibility into our entire workforce.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <FadeUp className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary rounded-full" />
            What Our Clients Say
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Loved by{" "}
            <span className="text-gradient">HR Teams Across Africa</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don't just take our word for it—hear from the businesses we've helped transform.
          </p>
        </FadeUp>

        {/* Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerChild}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300 } }}
              className="group relative rounded-2xl border border-border/40 bg-card/80 backdrop-blur-sm p-8"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-lg">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8 text-sm">"{t.content}"</p>

              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TestimonialsSection;

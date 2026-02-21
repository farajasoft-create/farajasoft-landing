import { ArrowRight, TrendingUp, Shield, Clock, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeUp, SlideIn, StaggerContainer, staggerChild } from "@/components/motion/animations";

const WhyUsSection = () => {
  const metricsRef = useRef(null);
  const metricsInView = useInView(metricsRef, { once: true, margin: "-80px" });

  const benefits = [
    { icon: TrendingUp, title: "Automated Payroll & Compliance", description: "PAYE, NHIF, NSSF, HELB—automatically calculated. KRA reports in one click." },
    { icon: Shield, title: "Enterprise-Grade Security", description: "Role-based access, audit trails, data encryption. Scales as you grow." },
    { icon: Clock, title: "Intuitive for Everyone", description: "Minimal training required. Designed for both HR professionals and employees." },
    { icon: HeartHandshake, title: "Local Support & Expertise", description: "Kenya-based team that understands African business challenges." },
  ];

  const metrics = [
    { value: 70, label: "reduction in payroll time", suffix: "%" },
    { value: 95, label: "compliance accuracy", suffix: "%" },
    { value: 4.8, label: "customer satisfaction", suffix: "/5" },
  ];

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-mesh opacity-25" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Content */}
          <SlideIn direction="left">
            <div>
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Why Choose Us
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
                  The Trusted Choice for{" "}
                  <span className="text-gradient">African Businesses</span>
                </h2>
              </FadeUp>

              <FadeUp delay={0.15}>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  We're not just another HR software. We're a partner invested in your success,
                  with solutions tailored to the unique challenges of African business.
                </p>
              </FadeUp>

              <StaggerContainer className="space-y-6 mb-10" staggerDelay={0.1}>
                {benefits.map((benefit) => (
                  <motion.div key={benefit.title} variants={staggerChild} className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg">
                        <benefit.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </StaggerContainer>

              <FadeUp delay={0.4}>
                <a href="#contact">
                  <Button variant="hero" size="lg" className="group shadow-glow">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </FadeUp>
            </div>
          </SlideIn>

          {/* Stats Card */}
          <SlideIn direction="right" className="flex items-center">
            <div
              ref={metricsRef}
              className="w-full rounded-3xl bg-gradient-primary p-8 lg:p-12 text-primary-foreground relative overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 border border-primary-foreground/30 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 border border-primary-foreground/30 rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>

              <div className="relative">
                <h3 className="font-display text-2xl font-bold mb-10">Results Our Clients See</h3>

                <div className="space-y-10">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={metricsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="font-display text-5xl lg:text-6xl font-extrabold">{metric.value}</span>
                        <span className="text-xl text-primary-foreground/80">{metric.suffix}</span>
                      </div>
                      <p className="text-primary-foreground/70 text-sm mb-3">{metric.label}</p>
                      <div className="h-1.5 bg-primary-foreground/15 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary-foreground/80 rounded-full"
                          initial={{ width: 0 }}
                          animate={metricsInView ? { width: `${metric.value <= 5 ? metric.value * 20 : metric.value}%` } : {}}
                          transition={{ delay: index * 0.2 + 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-10 pt-8 border-t border-primary-foreground/15"
                  initial={{ opacity: 0 }}
                  animate={metricsInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className={`text-2xl ${star <= 4 ? "" : "opacity-40"}`}>★</span>
                      ))}
                    </div>
                    <span className="text-primary-foreground/60 text-sm ml-2">Based on 200+ reviews</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

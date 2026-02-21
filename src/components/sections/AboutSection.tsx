import { Target, Users, Zap, Shield, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, SlideIn, StaggerContainer, staggerChild, ParallaxLayer } from "@/components/motion/animations";

const AboutSection = () => {
  const values = [
    { icon: Target, title: "Efficiency First", description: "Reduce administrative burden by up to 70% with smart automation." },
    { icon: Shield, title: "Full Compliance", description: "Stay compliant with NHIF, NSSF, PAYE, and labor regulations." },
    { icon: Zap, title: "Automation", description: "From payroll calculations to leave management—fully automated." },
    { icon: Users, title: "People-First", description: "Intuitive self-service portals built for your employees." },
  ];

  const stats = [
    { value: "500+", label: "Active Clients" },
    { value: "50K+", label: "Employees Managed" },
    { value: "99.9%", label: "Uptime" },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      <ParallaxLayer speed={30} className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-mesh opacity-40"><div /></ParallaxLayer>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <SlideIn direction="left">
            <div>
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  About FarajaSoft
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
                  Empowering African Businesses with{" "}
                  <span className="text-gradient">Modern HR Technology</span>
                </h2>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  FarajaSoft Limited is a Kenyan technology company dedicated to transforming how
                  businesses manage their most valuable asset—their people.
                </p>
              </FadeUp>

              <FadeUp delay={0.25}>
                <p className="text-muted-foreground mb-12 leading-relaxed">
                  From SMEs to large enterprises, we provide scalable solutions that grow with your
                  business. Powerful automation meets intuitive design.
                </p>
              </FadeUp>

              {/* Stats */}
              <StaggerContainer className="grid grid-cols-3 gap-6" staggerDelay={0.12}>
                {stats.map((stat) => (
                  <motion.div key={stat.label} variants={staggerChild}>
                    <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </SlideIn>

          {/* Value Cards */}
          <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.1}>
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={staggerChild}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300 } }}
                className="group bento-item cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  {value.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

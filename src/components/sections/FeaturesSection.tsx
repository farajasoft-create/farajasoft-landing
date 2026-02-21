import {
  Users, UserPlus, Settings2, LayoutDashboard, Smartphone, Calendar,
  Package, Banknote, Briefcase, Fingerprint, FolderKanban, Award,
  Headphones, ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, staggerChild, ParallaxLayer } from "@/components/motion/animations";

const FeaturesSection = () => {
  const features = [
    { icon: Users, title: "Employee Management", description: "Centralize all employee data, documents, and records in one secure location." },
    { icon: Banknote, title: "Payroll Management", description: "Automated payroll with PAYE, NHIF, NSSF, and HELB compliance." },
    { icon: LayoutDashboard, title: "Dashboards & Reports", description: "Real-time insights with customizable dashboards and analytics." },
    { icon: UserPlus, title: "Onboarding", description: "Automated workflows, checklists, and document collection." },
    { icon: Calendar, title: "Leave Management", description: "Automated tracking, approvals, and balance calculations." },
    { icon: Smartphone, title: "Self-Service", description: "Employees manage profiles, payslips, and requests." },
    { icon: Fingerprint, title: "Biometrics", description: "Integrate biometric devices for accurate attendance." },
    { icon: Settings2, title: "User Management", description: "Role-based access control and proper permissions." },
    { icon: Package, title: "Asset Tracking", description: "Track company assets with full audit trails." },
    { icon: Briefcase, title: "Recruitment", description: "End-to-end from job posting to offer management." },
    { icon: FolderKanban, title: "Projects & Tasks", description: "Assign and track projects and team productivity." },
    { icon: Award, title: "Performance", description: "Goals, reviews, and employee performance cycles." },
    { icon: Headphones, title: "Dedicated Support", description: "Local support team for personalized assistance." },
  ];

  return (
    <section id="features" className="py-24 lg:py-32 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <ParallaxLayer speed={40} className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"><div /></ParallaxLayer>
      <ParallaxLayer speed={-30} className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]"><div /></ParallaxLayer>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <FadeUp className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary rounded-full" />
            Features & Modules
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Everything You Need to Manage{" "}
            <span className="text-gradient">Your Workforce</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive HRMS and Payroll modules designed for every aspect of people
            management, from hire to retire.
          </p>
        </FadeUp>

        {/* Featured row */}
        <StaggerContainer className="grid lg:grid-cols-3 gap-4 mb-4" staggerDelay={0.1}>
          {features.slice(0, 3).map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerChild}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300 } }}
              className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/80 backdrop-blur-sm p-8"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-[0.04] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-[0.08] transition-opacity" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Compact grid */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3" staggerDelay={0.06}>
          {features.slice(3).map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerChild}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300 } }}
              className="group bento-item !p-5"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center mb-3 shadow-md group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeUp delay={0.3} className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-full shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105 group"
          >
            Schedule a personalized demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeUp>
      </div>
    </section>
  );
};

export default FeaturesSection;

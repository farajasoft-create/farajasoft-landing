import { Check, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, staggerChild } from "@/components/motion/animations";

const plans = [
  {
    name: "Starter",
    price: "4,999",
    period: "/ month",
    description: "For small businesses getting started with HR automation.",
    employees: "Up to 50 employees",
    features: [
      "Employee Management",
      "Payroll & Compliance (PAYE, NHIF, NSSF)",
      "Leave Management",
      "Employee Self-Service",
      "Basic Reports",
      "Email Support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "9,999",
    period: "/ month",
    description: "For growing teams that need more power and integrations.",
    employees: "Up to 200 employees",
    features: [
      "Everything in Starter",
      "Biometric Integration",
      "Onboarding Workflows",
      "Recruitment Module",
      "Asset Tracking",
      "KRA iTax Reports",
      "Priority Support",
    ],
    cta: "Get Started",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with complex, multi-entity needs.",
    employees: "Unlimited employees",
    features: [
      "Everything in Growth",
      "Performance Management",
      "Projects & Tasks",
      "Multi-entity / Multi-branch",
      "Custom Integrations",
      "Dedicated Account Manager",
      "SLA Guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" aria-label="Pricing Plans" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeUp>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-medium mb-5">
              <Zap className="w-4 h-4 text-primary" />
              Simple Pricing
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 leading-tight">
              Plans that grow{" "}
              <span className="text-gradient">with your business</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              No hidden fees. No long-term lock-in. Cancel anytime.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start" staggerDelay={0.1}>
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={staggerChild}
              className={`relative rounded-3xl p-8 flex flex-col gap-6 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-primary text-primary-foreground shadow-glow scale-105 border-0"
                  : "bg-card border border-border hover:border-primary/30 text-foreground shadow-sm"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-primary font-display font-bold text-xs px-4 py-1.5 rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h3
                  className={`font-display text-lg font-bold mb-1 ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                {plan.price !== "Custom" && (
                  <span className={`text-sm font-medium ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    KES
                  </span>
                )}
                <span className={`font-display text-4xl font-extrabold ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                    {plan.period}
                  </span>
                )}
              </div>

              <p className={`text-xs font-medium ${plan.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                {plan.employees}
              </p>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`}
                    />
                    <span className={plan.highlighted ? "text-primary-foreground/85" : "text-muted-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a href="#contact">
                <Button
                  size="lg"
                  className={`w-full rounded-full group ${
                    plan.highlighted
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default PricingSection;

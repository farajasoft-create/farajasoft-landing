import { motion } from "framer-motion";
import { FadeUp } from "@/components/motion/animations";
import { CheckCircle2 } from "lucide-react";

const integrations = [
  { name: "KRA", description: "iTax Filing" },
  { name: "NHIF", description: "Health Insurance" },
  { name: "NSSF", description: "Social Security" },
  { name: "HELB", description: "Loan Deductions" },
  { name: "NITA", description: "Levy Compliance" },
  { name: "NTSA", description: "Labour Act" },
];

const IntegrationsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeUp>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-medium mb-5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Built-in Compliance
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mb-4 leading-tight">
              Compliant with Every{" "}
              <span className="text-gradient">Kenyan Regulation</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              FarajaSoft natively integrates with all statutory bodies so you never have to worry about compliance again.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {integrations.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:bg-muted/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="font-display text-xs font-extrabold text-primary-foreground">
                  {item.name}
                </span>
              </div>
              <span className="text-xs text-muted-foreground text-center leading-tight">
                {item.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;

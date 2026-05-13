import { motion } from "framer-motion";
import { FadeUp } from "@/components/motion/animations";

const stats = [
  { value: "500+", label: "Companies" },
  { value: "50K+", label: "Employees Managed" },
  { value: "99.9%", label: "Uptime" },
  { value: "70%", label: "Payroll Time Saved" },
  { value: "4.8/5", label: "Customer Rating" },
];

const StatsBar = () => {
  return (
    <section className="py-10 border-y border-white/8 bg-card/60 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeUp>
          <div className="flex flex-wrap justify-center lg:justify-between gap-8 lg:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-1 min-w-[100px]"
              >
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-gradient">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground font-medium tracking-wide">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default StatsBar;

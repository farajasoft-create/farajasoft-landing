import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: background moves slower, content fades out
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 60]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const floatCardY1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const floatCardY2 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const highlights = [
    "Automated Payroll",
    "NHIF & NSSF Compliance",
    "Employee Self-Service",
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen pt-20 lg:pt-0 overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <motion.img
          src={heroBackground}
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ scale: bgScale }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/70" />
      </motion.div>

      {/* Mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60 z-[1]" />

      {/* Parallax orbs */}
      <motion.div
        className="absolute top-20 left-[5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] z-[1]"
        style={{ y: orbY }}
      />
      <motion.div
        className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[130px] z-[1]"
        style={{ y: orbY2 }}
      />

      {/* Decorative geometric elements — left side & top */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {/* Large rotating ring — top left */}
        <motion.div
          className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full border-[2px] border-primary/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -top-10 -left-10 w-[340px] h-[340px] rounded-full border-[1.5px] border-dashed border-secondary/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating dots — left edge */}
        {[
          { top: "15%", left: "3%", size: 6, delay: 0 },
          { top: "30%", left: "1.5%", size: 4, delay: 0.8 },
          { top: "50%", left: "4%", size: 8, delay: 1.2 },
          { top: "65%", left: "2%", size: 5, delay: 0.4 },
          { top: "80%", left: "3.5%", size: 3, delay: 1.6 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size }}
            animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: dot.delay }}
          />
        ))}

        {/* Diagonal accent lines — top right */}
        <motion.svg
          className="absolute top-8 right-[20%] w-40 h-40 text-primary/8"
          viewBox="0 0 160 160"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <line x1="0" y1="0" x2="160" y2="160" stroke="currentColor" strokeWidth="1" />
          <line x1="30" y1="0" x2="160" y2="130" stroke="currentColor" strokeWidth="0.5" />
          <line x1="60" y1="0" x2="160" y2="100" stroke="currentColor" strokeWidth="0.5" />
        </motion.svg>

        {/* Hexagon grid pattern — left side */}
        <motion.svg
          className="absolute top-[25%] -left-4 w-48 h-64 text-primary/[0.06]"
          viewBox="0 0 200 280"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {[
            [50, 40], [110, 40], [20, 100], [80, 100], [140, 100],
            [50, 160], [110, 160], [20, 220], [80, 220], [140, 220],
          ].map(([cx, cy], i) => (
            <motion.polygon
              key={i}
              points={`${cx},${cy - 22} ${cx + 20},${cy - 11} ${cx + 20},${cy + 11} ${cx},${cy + 22} ${cx - 20},${cy + 11} ${cx - 20},${cy - 11}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.08 }}
            />
          ))}
        </motion.svg>

        {/* Small cross marks — scattered top area */}
        {[
          { top: "6%", left: "15%" },
          { top: "12%", left: "40%" },
          { top: "4%", left: "70%" },
        ].map((pos, i) => (
          <motion.div
            key={`cross-${i}`}
            className="absolute w-3 h-3"
            style={pos}
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 0.15, rotate: 45 }}
            transition={{ delay: 1.2 + i * 0.2, duration: 0.6 }}
          >
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary -translate-y-1/2" />
            <div className="absolute left-1/2 top-0 h-full w-[1px] bg-primary -translate-x-1/2" />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-screen">
          {/* Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center py-16 lg:py-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-card/60 backdrop-blur-xl border border-primary/15 rounded-full text-sm font-medium mb-8 shadow-lg">
                <div className="flex -space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center text-[8px] text-primary-foreground font-bold">
                      {["J", "A", "M"][i]}
                    </div>
                  ))}
                </div>
                <span className="text-foreground">Trusted by 500+ African Businesses</span>
                <div className="flex items-center gap-0.5 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-xs font-semibold">4.8</span>
                </div>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-[2.75rem] sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold text-foreground leading-[1.08] tracking-tight mb-6"
            >
              Smart HR & Payroll{" "}
              <br className="hidden sm:block" />
              <span className="text-gradient">Solutions Built</span>{" "}
              for Africa
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
            >
              Simplify people management, automate payroll, and gain real-time insights.
              Your all-in-one HRMS platform for the modern African workplace.
            </motion.p>

            {/* Highlights */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-2 px-4 py-2.5 bg-card/70 backdrop-blur-md rounded-xl border border-border/40 shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button variant="hero" size="xl" className="group shadow-glow w-full sm:w-auto">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#demo-video">
                <Button variant="heroSecondary" size="xl" className="group backdrop-blur-md w-full sm:w-auto">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-2 group-hover:bg-primary/20 transition-colors">
                    <Play className="w-4 h-4 text-primary fill-primary" />
                  </div>
                  Watch Demo
                </Button>
              </a>
            </motion.div>

          </motion.div>

          {/* Hero Visual */}
          <motion.div
            className="lg:col-span-5 relative flex items-center justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-[60px] opacity-20 scale-90" />

              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/30 bg-card/90 backdrop-blur-sm"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-primary px-5 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary-foreground/30" />
                    <div className="w-3 h-3 rounded-full bg-primary-foreground/30" />
                    <div className="w-3 h-3 rounded-full bg-primary-foreground/30" />
                  </div>
                  <span className="text-xs text-primary-foreground/70 font-medium">FarajaSoft Dashboard</span>
                </div>

                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Total Employees</p>
                      <p className="text-3xl font-extrabold text-foreground font-display">1,248</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                      <span className="text-xl">👥</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="bg-muted/40 rounded-xl p-3 border border-border/30">
                      <p className="text-[10px] text-muted-foreground mb-0.5">Payroll</p>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        <p className="text-xs font-semibold text-foreground">Processed</p>
                      </div>
                    </div>
                    <div className="bg-muted/40 rounded-xl p-3 border border-border/30">
                      <p className="text-[10px] text-muted-foreground mb-0.5">Leave</p>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        <p className="text-xs font-semibold text-foreground">12 Pending</p>
                      </div>
                    </div>
                  </div>

                  <div className="h-20 bg-gradient-to-t from-primary/5 to-transparent rounded-xl flex items-end p-2 gap-0.5">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t-sm"
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.8 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating cards */}
              <motion.div
                className="absolute -left-6 top-[30%] glass-card p-3.5 shadow-2xl hidden lg:flex items-center gap-3 border border-border/30"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                style={{ y: floatCardY1 }}
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-primary-foreground shadow-lg text-sm font-bold">✓</div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Payroll Done</p>
                  <p className="text-[10px] text-muted-foreground">1,248 processed</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 bottom-[25%] glass-card p-3.5 shadow-2xl hidden lg:flex items-center gap-3 border border-border/30"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                style={{ y: floatCardY2 }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-lg text-sm">📊</div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Reports Ready</p>
                  <p className="text-[10px] text-muted-foreground">3 new insights</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;

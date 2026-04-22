import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const DashboardMockup = () => (
  <div
    className="rounded-2xl overflow-hidden border border-white/8 shadow-2xl w-full"
    style={{ background: "linear-gradient(160deg, #0e1123 0%, #141728 60%, #0f1220 100%)" }}
  >
    {/* Title bar */}
    <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.07]">
      <div className="flex items-center gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
      </div>
      <span className="text-[11px] text-white/35 font-medium tracking-wide">
        FarajaSoft — Payroll Analytics
      </span>
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
        <span className="text-[10px] text-white/25">Live</span>
      </div>
    </div>

    {/* KPI Stats Row */}
    <div className="grid grid-cols-4 border-b border-white/[0.07]">
      {[
        { label: "GROSS PAYROLL", value: "KSH 7.1M", sub: "6 months grow", arrow: true },
        { label: "NET PAY OUT", value: "KSH 7.5M", sub: "99.4% of gross", arrow: true },
        { label: "MONTHLY AVG", value: "KSH 1.8M", sub: "Avg gross per month", arrow: false },
        { label: "PAY RUNS", value: "5", sub: "All employee records", arrow: false },
      ].map((stat, i) => (
        <div
          key={stat.label}
          className={`px-3 py-2.5 ${i < 3 ? "border-r border-white/[0.07]" : ""}`}
        >
          <p className="text-[8px] text-white/30 uppercase tracking-wider mb-0.5 leading-none">
            {stat.label}
          </p>
          <div className="flex items-center gap-1.5">
            <p className="text-[13px] font-bold text-white leading-tight">{stat.value}</p>
            {stat.arrow && (
              <svg width="10" height="10" viewBox="0 0 10 10" className="text-violet-400 shrink-0">
                <path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            )}
          </div>
          <p className="text-[8px] text-white/25 mt-0.5 leading-none">{stat.sub}</p>
        </div>
      ))}
    </div>

    {/* Charts Row 1 */}
    <div className="grid grid-cols-5 border-b border-white/[0.07]">
      {/* Monthly Payroll Breakdown — bar chart */}
      <div className="col-span-3 p-3 border-r border-white/[0.07]">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] text-white/55 font-semibold">Monthly Payroll Breakdown</p>
          <div className="flex items-center gap-2.5">
            {[
              { color: "#7c3aed", label: "Salary" },
              { color: "#4f46e5", label: "Benefits" },
              { color: "#8b5cf6", label: "Incentives" },
            ].map(({ color, label }) => (
              <div key={label} className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-sm" style={{ background: color }} />
                <span className="text-[7px] text-white/25">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <svg width="100%" height="72" viewBox="0 0 210 72" preserveAspectRatio="xMidYMid meet">
          {[14, 32, 50].map((y) => (
            <line key={y} x1="0" y1={y} x2="210" y2={y} stroke="white" strokeOpacity="0.05" strokeWidth="0.5" />
          ))}
          {[
            { x: 8, bars: [42, 26, 32], label: "Mar" },
            { x: 78, bars: [52, 33, 38], label: "Apr" },
            { x: 148, bars: [58, 36, 44], label: "May" },
          ].map(({ x, bars, label }) => (
            <g key={label}>
              {bars.map((h, i) => (
                <rect
                  key={i}
                  x={x + i * 17}
                  y={62 - h}
                  width="13"
                  height={h}
                  fill={["#7c3aed", "#4f46e5", "#8b5cf6"][i]}
                  rx="2"
                  opacity="0.9"
                />
              ))}
              <text x={x + 22} y="71" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="7">
                {label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Cost Mix — donut chart */}
      <div className="col-span-2 p-3">
        <p className="text-[10px] text-white/55 font-semibold mb-2">Cost Mix</p>
        <div className="flex items-center gap-3">
          <svg width="64" height="64" viewBox="0 0 64 64" className="shrink-0">
            <circle cx="32" cy="32" r="22" fill="none" stroke="#1e2240" strokeWidth="11" />
            {/* Base Salary 70.2% → dasharray = 0.702 * 2π * 22 = 97.0 of 138.2 total */}
            <circle cx="32" cy="32" r="22" fill="none" stroke="#7c3aed" strokeWidth="11"
              strokeDasharray="97.0 41.2" strokeDashoffset="34.6"
              transform="rotate(-90 32 32)" />
            {/* Incentives 8.1% → 11.2 */}
            <circle cx="32" cy="32" r="22" fill="none" stroke="#4f46e5" strokeWidth="11"
              strokeDasharray="11.2 127.0" strokeDashoffset="-62.4"
              transform="rotate(-90 32 32)" />
            {/* Deductions 21.7% → 30.0 */}
            <circle cx="32" cy="32" r="22" fill="none" stroke="#6366f1" strokeWidth="11"
              strokeDasharray="30.0 108.2" strokeDashoffset="-73.6"
              transform="rotate(-90 32 32)" />
            <text x="32" y="29" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="5.5" fontWeight="700">
              KSH
            </text>
            <text x="32" y="37" textAnchor="middle" fill="white" fontSize="7" fontWeight="800">
              10M
            </text>
          </svg>
          <div className="space-y-1.5">
            {[
              { color: "#7c3aed", label: "Base Salary", value: "70.2%" },
              { color: "#4f46e5", label: "Incentives", value: "8.1%" },
              { color: "#6366f1", label: "Deductions", value: "21.7%" },
            ].map(({ color, label, value }) => (
              <div key={label} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
                <span className="text-[8px] text-white/40 flex-1">{label}</span>
                <span className="text-[8px] text-white/70 font-semibold">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Charts Row 2 — trend lines */}
    <div className="grid grid-cols-2">
      {/* Net Pay Trend */}
      <div className="p-3 border-r border-white/[0.07]">
        <div className="flex items-center justify-between mb-1.5">
          <div>
            <p className="text-[10px] text-white/55 font-semibold">Net Pay Trend</p>
            <p className="text-[8px] text-white/25">Employee take home · 2026</p>
          </div>
          <span className="text-[10px] text-emerald-400 font-bold tracking-tight">↗ KSH 7.1M</span>
        </div>
        <svg width="100%" height="44" viewBox="0 0 200 44" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,36 C20,34 35,30 55,26 C75,22 85,28 105,20 C125,12 140,22 160,14 C175,8 188,11 200,8"
            fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"
          />
          <path
            d="M0,36 C20,34 35,30 55,26 C75,22 85,28 105,20 C125,12 140,22 160,14 C175,8 188,11 200,8 L200,44 L0,44 Z"
            fill="url(#g1)"
          />
          {["Mar", "Apr", "May"].map((m, i) => (
            <text key={m} x={i * 90 + 8} y="43" fill="rgba(255,255,255,0.2)" fontSize="6.5">{m}</text>
          ))}
        </svg>
      </div>

      {/* Deductions Trend */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-1.5">
          <div>
            <p className="text-[10px] text-white/55 font-semibold">Deductions Trend</p>
            <p className="text-[8px] text-white/25">Total withheld · 2026</p>
          </div>
          <span className="text-[10px] text-violet-400 font-bold tracking-tight">↗ 308</span>
        </div>
        <svg width="100%" height="44" viewBox="0 0 200 44" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,38 C18,34 30,36 55,30 C80,24 90,28 110,22 C130,16 145,24 165,16 C180,10 190,14 200,12"
            fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round"
          />
          <path
            d="M0,38 C18,34 30,36 55,30 C80,24 90,28 110,22 C130,16 145,24 165,16 C180,10 190,14 200,12 L200,44 L0,44 Z"
            fill="url(#g2)"
          />
          {["Mar", "Apr", "May"].map((m, i) => (
            <text key={m} x={i * 90 + 8} y="43" fill="rgba(255,255,255,0.2)" fontSize="6.5">{m}</text>
          ))}
        </svg>
      </div>
    </div>
  </div>
);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);
  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const highlights = [
    "Automated Payroll",
    "NHIF & NSSF Compliance",
    "Employee Self-Service",
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Dark Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        {/* Base dark navy gradient */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #06091a 0%, #0b0f26 45%, #070a1d 100%)" }}
        />

        {/* Subtle grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Purple glow — top left */}
        <div
          className="absolute rounded-full"
          style={{
            top: "-25%", left: "-15%", width: "900px", height: "900px",
            background: "radial-gradient(circle, rgba(109,40,217,0.22) 0%, transparent 65%)",
          }}
        />

        {/* Indigo glow — bottom right */}
        <div
          className="absolute rounded-full"
          style={{
            bottom: "-25%", right: "-5%", width: "750px", height: "750px",
            background: "radial-gradient(circle, rgba(67,56,202,0.2) 0%, transparent 65%)",
          }}
        />

        {/* Violet accent — center right */}
        <div
          className="absolute rounded-full"
          style={{
            top: "25%", right: "-10%", width: "600px", height: "600px",
            background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 65%)",
          }}
        />

        {/* Top vignette for nav readability */}
        <div
          className="absolute inset-x-0 top-0 h-40"
          style={{ background: "linear-gradient(180deg, rgba(6,9,26,0.5) 0%, transparent 100%)" }}
        />
      </motion.div>

      {/* Ambient orbs */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-1/4 left-[8%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-[5%] w-[380px] h-[380px] bg-secondary/8 rounded-full blur-[130px]" />
      </div>

      {/* Geometric accents */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full border border-primary/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -top-12 -left-12 w-[280px] h-[280px] rounded-full border border-dashed border-secondary/8"
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />

        {[
          { top: "18%", left: "2.5%", size: 5, delay: 0 },
          { top: "35%", left: "1%", size: 3, delay: 0.7 },
          { top: "55%", left: "3.5%", size: 7, delay: 1.1 },
          { top: "70%", left: "1.5%", size: 4, delay: 0.3 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/25"
            style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size }}
            animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.6, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: dot.delay }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-screen">
          {/* Left: Copy */}
          <motion.div
            className="lg:col-span-6 flex flex-col justify-center pt-24 pb-16 lg:py-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Trust badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 backdrop-blur-xl border border-primary/25 rounded-full text-sm font-medium mb-7 shadow-lg">
                <div className="flex -space-x-1.5">
                  {["J", "A", "M"].map((letter, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center text-[8px] text-primary-foreground font-bold"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <span className="text-foreground/90">Trusted by 500+ African Businesses</span>
                <div className="flex items-center gap-0.5 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-xs font-semibold">4.8</span>
                </div>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-[2.6rem] sm:text-5xl lg:text-[3.75rem] xl:text-[4rem] font-extrabold text-white leading-[1.07] tracking-tight mb-5"
            >
              Smart HR & Payroll
              <br />
              <span className="text-gradient">Built for Africa</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white/65 mb-7 max-w-xl leading-relaxed"
            >
              Simplify people management, automate payroll, and gain real-time insights.
              Your all-in-one HRMS platform for the modern African workplace.
            </motion.p>

            {/* Feature chips */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5 mb-9">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-3.5 py-2 bg-white/6 backdrop-blur-md rounded-xl border border-white/12 shadow-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-medium text-white/90">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
              <a href="#contact">
                <Button
                  size="lg"
                  className="group bg-gradient-primary text-primary-foreground rounded-full shadow-glow hover:scale-105 transition-all duration-300 w-full sm:w-auto px-7"
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#demo-video">
                <Button
                  variant="outline"
                  size="lg"
                  className="group rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md w-full sm:w-auto px-6"
                >
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center mr-2 group-hover:bg-white/25 transition-colors">
                    <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                  </div>
                  Watch Demo
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Dashboard */}
          <motion.div
            className="lg:col-span-6 relative flex items-center justify-center pb-8 lg:pb-0"
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: dashboardY }}
          >
            {/* Glow behind dashboard */}
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-[90px] opacity-20 scale-90" />

            <motion.div
              className="relative w-full"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 280 }}
            >
              <DashboardMockup />

              {/* Floating badge — Payroll Done */}
              <motion.div
                className="absolute -left-5 top-[28%] hidden lg:flex items-center gap-2.5 bg-card/90 backdrop-blur-xl border border-border/30 rounded-2xl px-3.5 py-2.5 shadow-xl"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground leading-tight">Payroll Processed</p>
                  <p className="text-[10px] text-muted-foreground">1,248 employees</p>
                </div>
              </motion.div>

              {/* Floating badge — Compliance */}
              <motion.div
                className="absolute -right-5 bottom-[22%] hidden lg:flex items-center gap-2.5 bg-card/90 backdrop-blur-xl border border-border/30 rounded-2xl px-3.5 py-2.5 shadow-xl"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-primary flex items-center justify-center text-white text-xs shadow-md">
                  📊
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground leading-tight">KRA Compliant</p>
                  <p className="text-[10px] text-muted-foreground">Reports ready</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;

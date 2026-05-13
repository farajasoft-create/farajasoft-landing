import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    label: "Dashboard",
    caption: "At-a-glance HR metrics — headcount, pending leaves, and upcoming payroll — all in one view.",
    src: "/screenshots/dashboard.png",
  },
  {
    label: "Payroll Processing",
    caption: "Run a compliant Kenya payroll in minutes. PAYE, NHIF, NSSF, and HELB calculated automatically.",
    src: "/screenshots/payroll.png",
  },
  {
    label: "Employee Directory",
    caption: "Centralise every employee record — contracts, documents, and history — in one searchable place.",
    src: "/screenshots/employees.png",
  },
  {
    label: "Leave Management",
    caption: "Employees apply, managers approve, balances update — the entire leave workflow, paperless.",
    src: "/screenshots/leave.png",
  },
  {
    label: "Reports & Analytics",
    caption: "Export P9 forms, statutory returns, and custom HR reports ready for KRA and management.",
    src: "/screenshots/reports.png",
  },
];

const Placeholder = ({ label }: { label: string }) => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-muted/60 gap-3">
    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
      <div className="w-8 h-8 rounded-lg bg-primary/30" />
    </div>
    <span className="text-sm font-medium text-muted-foreground">{label} screenshot</span>
    <span className="text-xs text-muted-foreground/50">Drop your PNG into /public/screenshots/</span>
  </div>
);

const VideoSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  ]);
  const [selected, setSelected] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section id="demo-video" aria-label="Product Demo" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            See <span className="text-gradient">FarajaSoft</span> in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A real look at the platform your HR and payroll teams will use every day.
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Browser chrome */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/40 bg-card">
            {/* Top bar */}
            <div className="flex items-center gap-3 px-4 py-3 bg-muted/80 border-b border-border/40">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
              </div>
              <div className="flex-1 mx-4">
                <div className="mx-auto max-w-xs h-6 rounded-md bg-background/60 border border-border/30 flex items-center px-3 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="text-[11px] text-muted-foreground/60 truncate">
                    app.farajasoft.com / {slides[selected].label.toLowerCase().replace(" ", "-")}
                  </span>
                </div>
              </div>
              {/* Slide label badge */}
              <span className="hidden sm:inline-flex text-[11px] font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                {slides[selected].label}
              </span>
            </div>

            {/* Carousel viewport */}
            <div className="overflow-hidden aspect-video bg-muted/40" ref={emblaRef}>
              <div className="flex h-full">
                {slides.map((slide, i) => (
                  <div key={slide.label} className="flex-[0_0_100%] min-w-0 h-full">
                    {imgErrors[i] ? (
                      <Placeholder label={slide.label} />
                    ) : (
                      <img
                        src={slide.src}
                        alt={`FarajaSoft ${slide.label} screen – ${slide.caption}`}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                        decoding="async"
                        onError={() => setImgErrors((prev) => ({ ...prev, [i]: true }))}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Prev / Next */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Caption */}
        <motion.div
          key={selected}
          className="text-center mt-6 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm text-muted-foreground">{slides[selected].caption}</p>
        </motion.div>

        {/* Dot navigation */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {slides.map((slide, i) => (
            <button
              key={slide.label}
              onClick={() => scrollTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === selected
                  ? "w-6 h-2 bg-primary"
                  : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Go to ${slide.label}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

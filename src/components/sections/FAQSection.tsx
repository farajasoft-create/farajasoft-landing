import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "@/components/motion/animations";

const faqs = [
  {
    question: "Is my data secure?",
    answer:
      "Yes. FarajaSoft uses enterprise-grade encryption (AES-256 at rest, TLS in transit), role-based access control, and full audit trails. Your data is hosted on secure, redundant servers with 99.9% uptime SLA.",
  },
  {
    question: "Does it handle Kenyan statutory compliance automatically?",
    answer:
      "Absolutely. PAYE, NHIF, NSSF, HELB, and NITA deductions are calculated automatically and updated whenever the government changes rates. KRA iTax-ready reports are generated in one click.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most clients are fully onboarded within 1–2 weeks. Our local support team handles data migration, configuration, and staff training. You don't need an IT department.",
  },
  {
    question: "Can I integrate with our existing tools?",
    answer:
      "FarajaSoft connects with biometric attendance devices, popular accounting software, and has an open API for custom integrations. Enterprise plans include dedicated integration support.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. There are no long-term contracts or lock-in periods. You can cancel your subscription at any time and we'll export your data in full at no charge.",
  },
  {
    question: "Do you support multiple branches or companies?",
    answer:
      "Yes. The Enterprise plan supports multi-entity and multi-branch setups with consolidated reporting across all entities from a single dashboard.",
  },
];

const FAQItem = ({ faq, index }: { faq: (typeof faqs)[0]; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="border border-border rounded-2xl overflow-hidden bg-card"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-muted/60 transition-colors duration-200"
      >
        <span className="font-display font-semibold text-foreground text-sm sm:text-base">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  return (
    <section id="faq" aria-label="Frequently Asked Questions" className="py-24 lg:py-32 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeUp>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-medium mb-5">
              <HelpCircle className="w-4 h-4 text-primary" />
              FAQ
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 leading-tight">
              Questions we get{" "}
              <span className="text-gradient">all the time</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Can't find your answer?{" "}
              <a href="#contact" className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">
                Reach out to us
              </a>{" "}
              and we'll get back to you within the hour.
            </p>
          </div>
        </FadeUp>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { FadeUp, SlideIn, StaggerContainer, staggerChild, ScaleIn } from "@/components/motion/animations";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    const { error } = await supabase.from("demo_requests").insert({
      name: result.data.name,
      email: result.data.email,
      company: result.data.company || null,
      phone: result.data.phone || null,
      message: result.data.message,
    });
    setIsSubmitting(false);

    if (error) {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
      return;
    }

    setIsSubmitted(true);
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "0752772590 / 0753142700", href: "tel:0752772590" },
    { icon: Mail, label: "Email", value: "info@farajasoft.co.ke", href: "mailto:info@farajasoft.co.ke" },
    { icon: MapPin, label: "Location", value: "Nairobi, Kenya", href: null },
  ];

  const socialLinks = [
    { name: "X", href: "https://twitter.com/Farajasoft" },
    { name: "TikTok", href: "https://tiktok.com/@Farajasoft" },
    { name: "Instagram", href: "https://instagram.com/Farajasoft" },
    { name: "Facebook", href: "https://facebook.com/FarajaSoft" },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Content */}
          <SlideIn direction="left">
            <div>
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Get in Touch
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
                  Ready to Transform Your{" "}
                  <span className="text-gradient">HR Operations?</span>
                </h2>
              </FadeUp>

              <FadeUp delay={0.15}>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  Schedule a personalized demo or reach out to our team. We're here to help you find
                  the perfect solution for your business needs.
                </p>
              </FadeUp>

              {/* Contact Info */}
              <StaggerContainer className="space-y-4 mb-10" staggerDelay={0.1}>
                {contactInfo.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={staggerChild}
                    whileHover={{ x: -4, transition: { type: "spring", stiffness: 300 } }}
                    className="glass-card p-4 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-semibold text-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-foreground">{item.value}</p>
                      )}
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto" />
                  </motion.div>
                ))}
              </StaggerContainer>

              {/* Social */}
              <FadeUp delay={0.4}>
                <p className="text-sm text-muted-foreground mb-4">Follow us on social media</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl glass border border-border/50 flex items-center justify-center text-sm font-semibold text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow transition-all duration-300"
                    >
                      {social.name[0]}
                    </a>
                  ))}
                </div>
              </FadeUp>
            </div>
          </SlideIn>

          {/* Form */}
          <SlideIn direction="right">
            <div className="glass-card p-8 lg:p-10 shadow-xl">
              {isSubmitted ? (
                <ScaleIn className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow">
                    <CheckCircle className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your message has been received. Our team will contact you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
                    }}
                  >
                    Send Another Message
                  </Button>
                </ScaleIn>
              ) : (
                <>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Request a Demo</h3>
                  <p className="text-sm text-muted-foreground mb-8">
                    Fill out the form and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className={`h-12 bg-background/50 border-border/50 focus:border-primary ${errors.name ? "border-destructive" : ""}`} />
                        {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Work Email *</label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" className={`h-12 bg-background/50 border-border/50 focus:border-primary ${errors.email ? "border-destructive" : ""}`} />
                        {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                        <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company Ltd" className="h-12 bg-background/50 border-border/50 focus:border-primary" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                        <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+254 7XX XXX XXX" className="h-12 bg-background/50 border-border/50 focus:border-primary" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message *</label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your HR needs..." rows={4} className={`bg-background/50 border-border/50 focus:border-primary resize-none ${errors.message ? "border-destructive" : ""}`} />
                      {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full shadow-glow" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      By submitting, you agree to our{" "}
                      <a href="#" className="underline hover:text-primary">Privacy Policy</a>.
                    </p>
                  </form>
                </>
              )}
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import farajasoftLogo from "@/assets/farajasoft-logo.png";

const Footer = () => {
  const socialLinks = [
    { name: "X", href: "https://twitter.com/Farajasoft" },
    { name: "TikTok", href: "https://tiktok.com/@Farajasoft" },
    { name: "Instagram", href: "https://instagram.com/Farajasoft" },
    { name: "Facebook", href: "https://facebook.com/FarajaSoft" },
  ];

  const footerLinks = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#" },
      { label: "Updates", href: "#" },
    ],
    company: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Press", href: "#" },
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Status", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Background rings */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-primary-foreground rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] border border-primary-foreground rounded-full translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Newsletter / CTA bar */}
        <div className="py-12 border-b border-primary-foreground/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl lg:text-2xl font-bold mb-1">
              Ready to modernize your HR?
            </h3>
            <p className="text-primary-foreground/60 text-sm">
              Join 500+ businesses already using FarajaSoft Digital.
            </p>
          </div>
          <a
            href="https://wa.me/254752772590?text=Hello%20FarajaSoft%2C%20I%20would%20like%20to%20request%20a%20demo."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-primary text-primary-foreground font-semibold rounded-full shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105 group shrink-0"
          >
            Request Demo
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Main grid */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="inline-block mb-6 group">
              <img
                src={farajasoftLogo}
                alt="FarajaSoft Logo"
                className="h-12 w-auto brightness-0 invert group-hover:scale-105 transition-transform"
              />
            </a>
            <p className="text-primary-foreground/50 text-sm mb-8 max-w-xs leading-relaxed">
              Smart HR & Payroll solutions built for growing businesses across Africa.
            </p>

            <div className="space-y-3.5">
              <a
                href="tel:0752772590"
                className="flex items-center gap-3 text-sm text-primary-foreground/50 hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/8 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                0752772590 / 0753142700
              </a>
              <a
                href="mailto:info@farajasoft.com"
                className="flex items-center gap-3 text-sm text-primary-foreground/50 hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/8 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                info@farajasoft.com
              </a>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/50">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/8 flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                Nairobi, Kenya
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-primary-foreground/40 mb-5 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/60 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-primary-foreground/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} FarajaSoft Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/8 flex items-center justify-center text-xs font-semibold text-primary-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={social.name}
              >
                {social.name[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

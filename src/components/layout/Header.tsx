import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import farajasoftLogo from "@/assets/farajasoft-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["about", "features", "why-us", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#", label: "Home", id: "" },
    { href: "#about", label: "About", id: "about" },
    { href: "#features", label: "Solutions", id: "features" },
    { href: "#why-us", label: "Services", id: "why-us" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-card/90 backdrop-blur-xl shadow-2xl border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center group shrink-0">
              <img
                src={farajasoftLogo}
                alt="FarajaSoft Logo"
                className={`h-11 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                  isScrolled ? "" : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                }`}
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href + link.id}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isScrolled
                      ? activeSection === link.id
                        ? "bg-primary/15 text-primary"
                        : "text-foreground/65 hover:text-foreground hover:bg-muted/60"
                      : activeSection === link.id
                        ? "bg-white/15 text-white"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/254752772590?text=Hello%20FarajaSoft%2C%20I%20would%20like%20to%20request%20a%20demo."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  className={`rounded-full px-5 font-semibold transition-all duration-300 ${
                    isScrolled
                      ? "bg-gradient-primary text-primary-foreground shadow-glow hover:scale-105"
                      : "bg-gradient-primary text-primary-foreground shadow-glow hover:scale-105"
                  }`}
                >
                  Request Demo
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-foreground hover:bg-muted"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/97 backdrop-blur-2xl"
          onClick={() => setIsMenuOpen(false)}
        />
        <div className="relative h-full flex flex-col justify-center px-8">
          {/* Mobile Logo */}
          <div className="absolute top-5 left-8">
            <img src={farajasoftLogo} alt="FarajaSoft Logo" className="h-10 w-auto" />
          </div>

          <nav className="space-y-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href + link.id}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between py-4 border-b border-border/20 text-2xl font-display font-bold text-foreground hover:text-primary transition-all duration-500 ${
                  isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: isMenuOpen ? `${i * 70 + 150}ms` : "0ms" }}
              >
                {link.label}
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </a>
            ))}
          </nav>

          <div
            className={`mt-10 transition-all duration-500 ${
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isMenuOpen ? "450ms" : "0ms" }}
          >
            <a
              href="https://wa.me/254752772590?text=Hello%20FarajaSoft%2C%20I%20would%20like%20to%20request%20a%20demo."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button
                size="lg"
                className="w-full bg-gradient-primary text-primary-foreground rounded-full text-base shadow-glow"
              >
                Request Demo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

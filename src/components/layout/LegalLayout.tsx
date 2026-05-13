import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import farajasoftLogo from "@/assets/farajasoft-logo.png";

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const LegalLayout = ({ title, subtitle, lastUpdated, children }: LegalLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="inline-block">
            <img src={farajasoftLogo} alt="FarajaSoft" className="h-9 w-auto" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border/40" style={{ background: "#05070e" }}>
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-white rounded-full -translate-y-1/2 translate-x-1/3" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <p className="text-xs uppercase tracking-widest text-primary/70 font-semibold mb-3">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">{title}</h1>
          <p className="text-white/50 text-sm max-w-xl">{subtitle}</p>
          <p className="mt-4 text-xs text-white/30">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert prose-headings:font-display prose-headings:font-semibold prose-h2:text-xl prose-h3:text-base prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary">
          {children}
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t border-border/40 py-8" style={{ background: "#05070e" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} FarajaSoft Limited. All rights reserved. Registered in Kenya.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-white/40">
            <Link to="/legal/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/legal/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/legal/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
            <Link to="/legal/data-processing-agreement" className="hover:text-primary transition-colors">DPA</Link>
            <Link to="/legal/gdpr" className="hover:text-primary transition-colors">GDPR</Link>
            <Link to="/legal/security" className="hover:text-primary transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalLayout;

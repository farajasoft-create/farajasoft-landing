import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/motion/animations";

const MidCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-95" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              Ready to simplify your HR?
            </h2>
            <p className="text-white/75 text-lg mb-8">
              Join 500+ Kenyan businesses that have cut payroll time by 70% with FarajaSoft.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#contact">
                <Button
                  size="lg"
                  className="group bg-white text-primary hover:bg-white/90 rounded-full px-8 shadow-xl w-full sm:w-auto font-semibold"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#demo-video">
                <Button
                  size="lg"
                  variant="outline"
                  className="group rounded-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm w-full sm:w-auto px-8"
                >
                  Watch Demo
                </Button>
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default MidCTA;

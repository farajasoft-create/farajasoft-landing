import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useRef, useState } from "react";
import promoVideo from "@/assets/farajasoft-promo.mp4";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="demo-video" className="py-20 lg:py-28 bg-muted/30">
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
            Watch how our HR & Payroll platform simplifies people management for African businesses.
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border/30"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <video
            ref={videoRef}
            src={promoVideo}
            className="w-full aspect-video object-cover"
            controls={isPlaying}
            onEnded={() => setIsPlaying(false)}
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            playsInline
          />

          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-background/30 backdrop-blur-sm transition-all hover:bg-background/20 group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground ml-1" />
              </div>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;

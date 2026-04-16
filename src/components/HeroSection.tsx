import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <img
        src="/octofoam-images/Mw4vo4B04MCL0YcVDS5AGINAw.webp"
        alt="Salt Lake City skyline with mountains"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      <motion.div
        className="relative z-10 w-full px-4 pt-12 pb-[calc(3rem+80px)] md:pt-16 md:pb-[calc(4rem+120px)]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 18, delay: 0.2 }}
      >
        <div className="container max-w-5xl mx-auto text-center">
          {/* Main heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 leading-tight font-display drop-shadow-lg uppercase tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 16, delay: 0.5 }}
          >
            OCTOFOAM SPRAY FOAM INSULATION
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl font-bold text-white/95 mb-10 uppercase tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 16, delay: 0.6 }}
          >
            YOUR SPRAY FOAM INSULATION COMPANY OF CHOICE IN GREENFIELD, IN
          </motion.p>

          {/* CTA Buttons - two rows */}
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 16, delay: 0.7 }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2 rounded-xl shadow-elevated bg-[#634390] hover:bg-[#634390]/90 text-white font-bold">
                <Phone size={18} /> (317) 967-0505
              </Button>
              <Button variant="hero" size="lg" className="hidden md:inline-flex gap-2 rounded-xl shadow-elevated">
                <Calendar size={18} /> GET A QUOTE
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Wave bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[80px] md:h-[120px] block"
        >
          <path
            d="M0,34 C180,86 360,-6 540,34 C720,74 900,-6 1080,34 C1260,74 1350,24 1440,34 L1440,120 L0,120 Z"
            fill="#7cbb5a"
          />
          <path
            d="M0,34 C180,86 360,-6 540,34 C720,74 900,-6 1080,34 C1260,74 1350,24 1440,34"
            fill="none"
            stroke="#634390"
            strokeOpacity="1"
            strokeWidth="6"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

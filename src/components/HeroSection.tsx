import { motion } from "framer-motion";
import { Phone, Calendar, Tag, Star } from "lucide-react";
import { SiGoogle, SiYelp, SiFacebook } from "react-icons/si";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-slc.jpg";

const logoColor = "#40DDC2";

const reviewBadges = [
  { name: "Google", Icon: SiGoogle, hiddenOnMobile: false },
  { name: "Yelp", Icon: SiYelp, hiddenOnMobile: true },
  { name: "Facebook", Icon: SiFacebook, hiddenOnMobile: false },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Salt Lake City skyline with mountains"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Character mascot - left side, scales down on smaller screens */}
      <motion.div
        className="absolute left-0 bottom-0 z-10 w-[140px] sm:w-[180px] md:w-[260px] lg:w-[340px] xl:w-[420px] pointer-events-none origin-bottom"
        animate={{ rotate: [-6, 6, -6] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src="/character.png"
          alt="Peak HVAC technician"
          className="w-full h-auto object-contain object-bottom"
        />
      </motion.div>

      <motion.div
        className="relative z-10 w-full px-4 py-12 md:py-16"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 18, delay: 0.2 }}
      >
        <div className="container max-w-5xl mx-auto text-center">
          {/* Rating badges - outline logos, stars, 5.0 RATING */}
          <motion.div
            className="flex flex-wrap justify-center gap-10 md:gap-14 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 16, delay: 0.4 }}
          >
            {reviewBadges.map((badge) => {
              const Icon = badge.Icon;
              return (
              <div key={badge.name} className={`flex items-start gap-3 ${badge.hiddenOnMobile ? "hidden md:flex" : ""}`}>
                <Icon className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0" style={{ color: logoColor }} />
                <div className="flex flex-col items-start gap-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#FFC107] text-[#FFC107]" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-white/90 uppercase tracking-wide">
                    5.0 RATING
                  </span>
                </div>
              </div>
            );
            })}
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 leading-tight font-display drop-shadow-lg uppercase tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 16, delay: 0.5 }}
          >
            PEAK HVAC SERVICES
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl font-bold text-white/95 mb-10 uppercase tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 16, delay: 0.6 }}
          >
            YOUR TRUSTED HVAC COMPANY IN SALT LAKE CITY, UT
          </motion.p>

          {/* CTA Buttons - two rows */}
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 16, delay: 0.7 }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="hidden md:inline-flex gap-2 rounded-xl shadow-elevated">
                <Calendar size={18} /> SCHEDULE SERVICE
              </Button>
              <Button variant="heroPink" size="lg" className="gap-2 rounded-xl shadow-elevated">
                <Phone size={18} /> CALL NOW
              </Button>
              <Button variant="heroWarm" size="lg" className="gap-2 rounded-xl shadow-elevated">
                <Tag size={18} /> COUPONS
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Wave bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20 block"
        >
          <path
            d="M0,40 Q360,0 720,40 T1440,40 L1440,80 L0,80 Z"
            fill="hsl(225, 100%, 22%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactSection from "@/components/ContactSection";
import CurvedDivider from "@/components/CurvedDivider";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-slc.jpg";

const dark = "#5c97d0";
const light = "hsl(170, 40%, 97%)";
const white = "#ffffff";
const mint = "#634390";
const navyBlock = "#5c97d0";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Contact Octofoam | Spray Foam Insulation in Greenfield, IN</title>
      <meta
        name="description"
        content="Call or text Octofoam at (317) 967-0505 or send a message. Free estimates on spray foam insulation, roof coatings, and concrete leveling in Greenfield, IN."
      />
      <link rel="canonical" href="/contact" />
    </Helmet>

    <SiteHeader />

    <main>
      <section className="relative min-h-[42vh] md:min-h-[46vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

        <motion.div
          className="relative z-10 w-full px-4 py-14 md:py-16"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="container max-w-4xl mx-auto text-center">
            <p className="text-white/90 font-bold uppercase tracking-widest text-xs md:text-sm mb-3">Contact us</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight mb-4">
              Let&apos;s insulate your <span className="text-primary">space</span>
            </h1>
            <p className="text-base md:text-lg text-white/95 font-semibold max-w-2xl mx-auto mb-8">
              Call or text for a free estimate—we&apos;ll get back to you quickly.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="heroPink" size="lg" className="rounded-xl shadow-elevated gap-2" asChild>
                <a href="tel:3179670505">
                  <Phone size={18} /> (317) 967-0505
                </a>
              </Button>
              <Button variant="hero" size="lg" className="rounded-xl shadow-elevated gap-2" asChild>
                <a href="#contact-form">
                  <Calendar size={18} /> Message us
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-14 md:h-20 block">
            <path d="M0,40 Q360,0 720,40 T1440,40 L1440,80 L0,80 Z" fill="#5c97d0" />
          <path d="M0,40 Q360,0 720,40 T1440,40" fill="none" stroke="#634390" strokeOpacity="1" strokeWidth="6" />
          </svg>
        </div>
      </section>

      <CurvedDivider
        topColor={navyBlock}
        bottomColor={light}
        accentColor={mint}
        direction="up"
        transparentBottom
        className="relative z-10"
      />

      <ContactSection variant="page" />

      <CurvedDivider topColor={white} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />
    </main>

    <SiteFooter />
  </div>
);

export default Contact;

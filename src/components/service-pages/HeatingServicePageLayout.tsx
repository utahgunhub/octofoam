import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, Calendar, ArrowRight, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CurvedDivider from "@/components/CurvedDivider";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-slc.jpg";

/** Matches Index / ServiceCards / CommitmentSection */
const dark = "hsl(225, 100%, 32%)";
const light = "hsl(170, 40%, 97%)";
const white = "#ffffff";
const mint = "hsl(160, 100%, 50%)";
const skyBlue = "hsl(200, 100%, 50%)";
const navyBlock = "#001c70";

export type HeatingVisualVariant = "furnaceRepair" | "furnaceInstall" | "heatingMaintenance" | "heatingHub";

export interface HeatingFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Props {
  visualVariant: HeatingVisualVariant;
  helmetTitle: string;
  helmetDescription: string;
  canonicalPath: string;
  heroHeading: React.ReactNode;
  heroSubhead: string;
  children: React.ReactNode;
  features: HeatingFeature[];
  featuresHeading: React.ReactNode;
  featuresIntro?: string;
}

const bgSrc = (n: "1" | "2" | "3" | "4") => `/background-${n}.png`;

function FeaturesGrid({
  variant,
  featuresHeading,
  featuresIntro,
  features,
}: {
  variant: HeatingVisualVariant;
  featuresHeading: React.ReactNode;
  featuresIntro?: string;
  features: HeatingFeature[];
}) {
  const grid =
    variant === "heatingMaintenance"
      ? "grid max-w-3xl mx-auto gap-4"
      : variant === "furnaceRepair"
        ? "grid sm:grid-cols-2 gap-5"
        : "grid sm:grid-cols-2 lg:grid-cols-3 gap-5";

  return (
    <section className="py-16 md:py-20 px-4 bg-accent">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 font-display text-accent-foreground">
          {featuresHeading}
        </h2>
        {featuresIntro ? (
          <p className="text-accent-foreground/80 text-center text-lg mb-12 max-w-2xl mx-auto">{featuresIntro}</p>
        ) : null}
        <div className={grid}>
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-4 p-6 rounded-2xl bg-accent-foreground/10 border border-accent-foreground/10"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <f.icon size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-accent-foreground mb-2 font-display">{f.title}</h3>
                <p className="text-accent-foreground/80 text-sm leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MidSection({ variant }: { variant: HeatingVisualVariant }) {
  if (variant === "furnaceRepair") {
    return (
      <section className="bg-[#001c70] py-5 px-4 border-b border-white/10">
        <p className="text-center text-sm md:text-base font-bold text-white max-w-3xl mx-auto">
          <span className="text-primary">Furnace repair</span>
          {" · "}
          Same-day service when available · Salt Lake County &amp; nearby
        </p>
      </section>
    );
  }

  if (variant === "furnaceInstall") {
    return (
      <section className="py-12 px-4 bg-[#001c70]">
        <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/heating.png"
              alt=""
              className="w-full rounded-2xl border-4 border-white/20 shadow-elevated object-cover max-h-[280px]"
            />
            <p className="text-white/80 text-sm mt-3 text-center md:text-left">Equipment &amp; sizing</p>
          </div>
          <div>
            <img
              src="/van2.png"
              alt=""
              className="w-full rounded-2xl border-4 border-white/20 shadow-elevated object-cover max-h-[280px]"
            />
            <p className="text-white/80 text-sm mt-3 text-center md:text-left">Professional installation crew</p>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "heatingMaintenance") {
    return (
      <section className="py-12 px-4 bg-[#001c70]">
        <div className="container max-w-5xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
          <img
            src="/heating.png"
            alt=""
            className="w-full lg:w-1/2 rounded-2xl border-4 border-white/20 shadow-elevated object-cover max-h-[300px]"
          />
          <ul className="text-white space-y-4 lg:flex-1">
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span className="text-white/90">Combustion and safety checks on every tune-up</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span className="text-white/90">Filter, blower, and airflow inspection</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span className="text-white/90">Ideal timing: fall, before Utah’s first hard freeze</span>
            </li>
          </ul>
        </div>
      </section>
    );
  }

  /* hub */
  return (
    <section className="py-10 px-4 bg-[#001c70]">
      <div className="container max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
        <Link
          to="/heating/furnace-repair"
          className="group flex items-center justify-between gap-4 rounded-2xl bg-white/10 border border-white/15 px-6 py-5 text-white hover:bg-white/15 transition-colors"
        >
          <span className="font-bold font-display">Furnace repair</span>
          <ChevronRight className="text-primary shrink-0 group-hover:translate-x-0.5 transition-transform" size={22} />
        </Link>
        <Link
          to="/heating/furnace-installation"
          className="group flex items-center justify-between gap-4 rounded-2xl bg-white/10 border border-white/15 px-6 py-5 text-white hover:bg-white/15 transition-colors"
        >
          <span className="font-bold font-display">Furnace installation</span>
          <ChevronRight className="text-primary shrink-0 group-hover:translate-x-0.5 transition-transform" size={22} />
        </Link>
        <Link
          to="/heating/maintenance"
          className="group flex items-center justify-between gap-4 rounded-2xl bg-white/10 border border-white/15 px-6 py-5 text-white hover:bg-white/15 transition-colors"
        >
          <span className="font-bold font-display">Heating maintenance</span>
          <ChevronRight className="text-primary shrink-0 group-hover:translate-x-0.5 transition-transform" size={22} />
        </Link>
      </div>
    </section>
  );
}

const HeatingServicePageLayout = ({
  visualVariant,
  helmetTitle,
  helmetDescription,
  canonicalPath,
  heroHeading,
  heroSubhead,
  children,
  features,
  featuresHeading,
  featuresIntro,
}: Props) => {
  const contentBg: "1" | "2" | "3" | "4" =
    visualVariant === "furnaceInstall"
      ? "2"
      : visualVariant === "heatingMaintenance"
        ? "3"
        : visualVariant === "furnaceRepair"
          ? "4"
          : "1";
  const contentMax =
    visualVariant === "furnaceInstall" || visualVariant === "heatingHub" ? "max-w-5xl" : "max-w-4xl";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{helmetTitle}</title>
        <meta name="description" content={helmetDescription} />
        <link rel="canonical" href={canonicalPath} />
      </Helmet>

      <SiteHeader />

      {/* Hero — same language as homepage */}
      <section className="relative min-h-[52vh] md:min-h-[56vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

        <motion.div
          className="absolute left-0 bottom-0 z-10 w-[100px] sm:w-[140px] md:w-[200px] lg:w-[260px] pointer-events-none origin-bottom hidden sm:block"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src="/character.png" alt="" className="w-full h-auto object-contain object-bottom" />
        </motion.div>

        <motion.div
          className="relative z-10 w-full px-4 py-14 md:py-16"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight font-display drop-shadow-lg uppercase tracking-tight">
              {heroHeading}
            </h1>
            <p className="text-base md:text-lg font-bold text-white/95 mb-8 uppercase tracking-wide max-w-3xl mx-auto">
              {heroSubhead}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="heroPink" size="lg" className="rounded-xl shadow-elevated gap-2" asChild>
                <a href="tel:8017382275">
                  <Phone size={18} /> (801) 738-2275
                </a>
              </Button>
              <Button variant="hero" size="lg" className="hidden md:inline-flex rounded-xl shadow-elevated gap-2" asChild>
                <Link to="/contact">
                  <Calendar size={18} /> Contact
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-14 md:h-20 block">
            <path d="M0,40 Q360,0 720,40 T1440,40 L1440,80 L0,80 Z" fill="hsl(225, 100%, 22%)" />
          </svg>
        </div>
      </section>

      <MidSection variant={visualVariant} />

      <CurvedDivider
        topColor={navyBlock}
        bottomColor={light}
        accentColor={mint}
        direction="up"
        transparentBottom
        className="relative z-10"
      />

      <section className="relative -mt-[80px] -mb-[80px] md:-mt-[120px] md:-mb-[120px] pt-[120px] pb-[120px] md:pt-[160px] md:pb-[160px] px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgSrc(contentBg)} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 z-[1]" style={{ backgroundColor: "rgba(255,255,255,0.92)" }} />
        </div>
        <div className={`container ${contentMax} mx-auto relative z-10 space-y-6 text-[#001c70]/90 leading-relaxed`}>
          {children}
        </div>
      </section>

      <CurvedDivider
        topColor={light}
        bottomColor={dark}
        accentColor={visualVariant === "heatingHub" ? skyBlue : mint}
        direction="down"
        transparentTop
        className="relative z-10"
      />

      <FeaturesGrid
        variant={visualVariant}
        featuresHeading={featuresHeading}
        featuresIntro={featuresIntro}
        features={features}
      />

      <CurvedDivider topColor={dark} bottomColor={white} accentColor={skyBlue} direction="up" transparentBottom className="relative z-10" />

      <section className="relative -mt-[80px] -mb-[80px] md:-mt-[120px] md:-mb-[120px] pt-[100px] pb-[100px] md:pt-[140px] md:pb-[140px] px-4 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="container max-w-2xl mx-auto relative z-10 text-center">
          <div className="rounded-3xl border border-border bg-card shadow-card px-8 py-10 md:px-10 md:py-12">
            <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground mb-3">Get in touch</h2>
            <p className="text-muted-foreground mb-8">
              Call Peak HVAC Services or send a message through our contact form—we’ll help with repair, install, or
              maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="heroPink" size="lg" className="rounded-xl gap-2" asChild>
                <a href="tel:8017382275">
                  <Phone size={18} /> Call now
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl border-2 border-[#001c70] text-[#001c70] hover:bg-[#001c70]/5 gap-2" asChild>
                <Link to="/contact">
                  Contact form <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CurvedDivider topColor={white} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />

      <SiteFooter />
    </div>
  );
};

export default HeatingServicePageLayout;

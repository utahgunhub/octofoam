import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CurvedDivider from "@/components/CurvedDivider";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import heroImg from "@/assets/hero-slc.jpg";
import type { ServiceAreaRegionContent } from "@/content/serviceAreaRegions";

const dark = "#5c97d0";
const light = "hsl(170, 40%, 97%)";
const white = "#ffffff";
const mint = "#634390";
const skyBlue = "hsl(200, 100%, 50%)";
const navyBlock = "#5c97d0";

const bgSrc = (n: "1" | "2" | "3" | "4") => `/background-${n}.png`;

export interface ServiceAreaFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Props {
  content: ServiceAreaRegionContent;
  heroHeading: React.ReactNode;
  heroSubhead: string;
  features: ServiceAreaFeature[];
  relatedAreas: { label: string; to: string }[];
  contentBackground?: "1" | "2" | "3" | "4";
}

function FeaturesStrip({ features }: { features: ServiceAreaFeature[] }) {
  return (
    <section className="py-16 md:py-20 px-4 bg-accent">
      <div className="container max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

const ServiceAreaPageLayout = ({
  content,
  heroHeading,
  heroSubhead,
  features,
  relatedAreas,
  contentBackground = "1",
}: Props) => {
  const { helmetTitle, helmetDescription, canonicalPath, midStrip, introParagraphs, cities } = content;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{helmetTitle}</title>
        <meta name="description" content={helmetDescription} />
        <link rel="canonical" href={canonicalPath} />
      </Helmet>

      <SiteHeader />

      <section className="relative min-h-[48vh] md:min-h-[52vh] flex items-center overflow-hidden">
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
            <path d="M0,40 Q360,0 720,40 T1440,40 L1440,80 L0,80 Z" fill="#5c97d0" />
          <path d="M0,40 Q360,0 720,40 T1440,40" fill="none" stroke="#634390" strokeOpacity="1" strokeWidth="6" />
          </svg>
        </div>
      </section>

      <section className="bg-[#5c97d0] py-5 px-4 border-b border-white/10">
        <p className="text-center text-sm md:text-base font-bold text-white max-w-4xl mx-auto">{midStrip}</p>
      </section>

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
          <img src={bgSrc(contentBackground)} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 z-[1]" style={{ backgroundColor: "rgba(255,255,255,0.92)" }} />
        </div>
        <div className="container max-w-5xl mx-auto relative z-10 space-y-6 text-[#5c97d0]/90 leading-relaxed">
          {introParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          {relatedAreas.length > 0 ? (
            <p className="text-sm font-semibold text-[#5c97d0]/80">
              Also serving:{" "}
              {relatedAreas.map((r, i) => (
                <span key={r.to}>
                  {i > 0 ? " · " : null}
                  <NavLink to={r.to} className="text-accent underline-offset-2 hover:underline">
                    {r.label}
                  </NavLink>
                </span>
              ))}
            </p>
          ) : null}

          <h2 className="text-2xl md:text-3xl font-extrabold font-display text-[#5c97d0] pt-4">
            Cities &amp; communities we serve
          </h2>
          <p className="text-[#5c97d0]/80 text-sm md:text-base -mt-2">
            Local HVAC service with neighborhood context—call (801) 738-2275 to confirm availability in your area.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-5 pt-2">
            {cities.map((c) => (
              <article
                key={c.name}
                className="rounded-2xl border border-[#5c97d0]/15 bg-white/80 p-5 md:p-6 shadow-sm"
              >
                <h3 className="text-lg font-extrabold font-display text-[#5c97d0] mb-2">{c.name}</h3>
                <p className="text-sm md:text-[15px] text-[#5c97d0]/85 leading-relaxed">{c.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CurvedDivider
        topColor={light}
        bottomColor={dark}
        accentColor={mint}
        direction="down"
        transparentTop
        className="relative z-10"
      />

      <FeaturesStrip features={features} />

      <CurvedDivider topColor={dark} bottomColor={white} accentColor={skyBlue} direction="up" transparentBottom className="relative z-10" />

      <section className="relative -mt-[80px] -mb-[80px] md:-mt-[120px] md:-mb-[120px] pt-[100px] pb-[100px] md:pt-[140px] md:pb-[140px] px-4 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="container max-w-2xl mx-auto relative z-10 text-center">
          <div className="rounded-3xl border border-border bg-card shadow-card px-8 py-10 md:px-10 md:py-12">
            <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground mb-3">Schedule service</h2>
            <p className="text-muted-foreground mb-8">
              Tell us your city and what you need—repair, replacement, or maintenance. We’ll get you on the calendar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="heroPink" size="lg" className="rounded-xl gap-2" asChild>
                <a href="tel:8017382275">
                  <Phone size={18} /> Call now
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl border-2 border-[#5c97d0] text-[#5c97d0] hover:bg-[#5c97d0]/5 gap-2" asChild>
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

export default ServiceAreaPageLayout;

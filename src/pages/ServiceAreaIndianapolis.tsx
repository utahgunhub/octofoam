import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CurvedDivider from "@/components/CurvedDivider";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-slc.jpg";

const dark = "#5c97d0";
const white = "#ffffff";
const mint = "#634390";
const purpleCtaClass = "bg-[#634390] hover:bg-[#52367a] text-white";

const IndianapolisBenefits = [
  "Blocks moisture penetration and helps protect foundation assemblies.",
  "Eliminates cold floors by creating a stronger thermal boundary.",
  "Reduces allergen and contaminant movement into living space.",
  "Protects crawl-space ductwork and mechanical systems.",
  "Helps maintain humidity below mold-growth thresholds.",
];

const ServiceAreaIndianapolis = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Crawl Space Insulation in Indianapolis, IN | Octofoam</title>
      <meta
        name="description"
        content="Professional crawl space spray foam insulation in Indianapolis. Control moisture, improve air quality, and protect your foundation with sealed crawl space systems."
      />
      <link rel="canonical" href="/service-areas/indianapolis" />
    </Helmet>

    <SiteHeader />

    <main>
      <section className="relative min-h-[44vh] md:min-h-[50vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <motion.div
          className="relative z-10 w-full px-4 pt-20 pb-32 md:pt-24 md:pb-36"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="container max-w-4xl mx-auto text-center">
            <p className="text-white/90 font-bold uppercase tracking-widest text-xs md:text-sm mb-3">Indianapolis, IN</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight mb-4">
              Crawl Space Insulation in <span className="text-primary">Indianapolis</span>
            </h1>
            <p className="text-base md:text-lg text-white/95 font-semibold max-w-3xl mx-auto mb-8 uppercase tracking-wide">
              Create a healthier home from the ground up
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="heroPink" size="lg" className={`rounded-xl shadow-elevated gap-2 ${purpleCtaClass}`} asChild>
                <a href="tel:3179670505">
                  <Phone size={18} /> (317) 967-0505
                </a>
              </Button>
              <Button variant="hero" size="lg" className="rounded-xl shadow-elevated gap-2" asChild>
                <Link to="/contact">
                  <Calendar size={18} /> Learn more
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

      <section className="bg-[#5c97d0] pt-8 pb-14 md:pt-10 md:pb-16 px-4">
        <div className="container max-w-5xl mx-auto text-white space-y-6">
          <p className="text-white/92 leading-relaxed">
            Crawl spaces directly impact indoor air quality, energy efficiency, and structural durability. Unsealed crawl
            spaces can pull moisture, allergens, and outdoor pollutants into homes, creating conditions for mold, pests, and
            wood decay.
          </p>
          <p className="text-white/92 leading-relaxed">
            Octofoam provides full crawl space sealing in Indianapolis by applying spray polyurethane foam at foundation walls,
            rim joists, and floor transitions to create continuous air and vapor control layers.
          </p>
          <p className="text-white/92 leading-relaxed">
            Building science research consistently shows conditioned crawl spaces outperform vented designs in moisture control
            and energy performance.
          </p>
        </div>
      </section>

      <CurvedDivider topColor={dark} bottomColor={white} accentColor={mint} direction="up" transparentBottom className="relative z-10" />

      <section className="bg-background py-16 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto space-y-6 text-muted-foreground">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
            Indianapolis climate demands effective moisture control
          </h2>
          <p className="leading-relaxed">
            Indianapolis receives substantial annual precipitation and summer humidity. In vented crawlspaces, humid outdoor air
            often condenses on cooler surfaces and drives mold activity. Spray foam sealing blocks this cycle by reducing outdoor
            air entry and moisture migration from soil.
          </p>
          <p className="leading-relaxed">
            Properly sealed crawlspaces also reduce stack effect, helping prevent contaminated crawlspace air from rising into
            occupied rooms. This supports better comfort and improved whole-home air quality.
          </p>
          <p className="leading-relaxed">Contact us today for crawl space insulation in Indianapolis.</p>
        </div>
      </section>

      <CurvedDivider topColor={white} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />

      <section className="bg-[#5c97d0] py-16 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="rounded-2xl bg-white border border-border p-7 md:p-8 shadow-card">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-[#5c97d0] mb-5">
              Comprehensive protection for Indianapolis homes
            </h2>
            <ul className="space-y-3 mb-8">
              {IndianapolisBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#5c97d0] mt-0.5 shrink-0" size={20} />
                  <span className="text-[#5c97d0]/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="heroPink" size="lg" className={`rounded-xl gap-2 ${purpleCtaClass}`} asChild>
              <Link to="/contact">
                <Calendar size={18} /> Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CurvedDivider topColor={dark} bottomColor={dark} accentColor={mint} direction="up" className="relative z-10" />
    </main>

    <SiteFooter />
  </div>
);

export default ServiceAreaIndianapolis;

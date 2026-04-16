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

const FortvilleBenefits = [
  "Eliminates drafts and seasonal comfort inconsistencies.",
  "Reduces outdoor noise transmission into living spaces.",
  "Helps prevent ice-dam cycles and roof-edge moisture issues.",
  "Improves indoor air quality by sealing pollutant entry routes.",
  "Can increase home value through measurable performance upgrades.",
];

const ServiceAreaFortville = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Attic Insulation in Fortville, IN | Octofoam</title>
      <meta
        name="description"
        content="Attic spray foam insulation in Fortville, Indiana. Stop roof-line air leakage, reduce HVAC load, and improve comfort with closed-cell foam."
      />
      <link rel="canonical" href="/service-areas/fortville" />
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
            <p className="text-white/90 font-bold uppercase tracking-widest text-xs md:text-sm mb-3">Fortville, IN</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight mb-4">
              Attic Insulation in <span className="text-primary">Fortville</span>
            </h1>
            <p className="text-base md:text-lg text-white/95 font-semibold max-w-3xl mx-auto mb-8 uppercase tracking-wide">
              Transform your attic into an energy asset
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="heroPink" size="lg" className={`rounded-xl shadow-elevated gap-2 ${purpleCtaClass}`} asChild>
                <a href="tel:3179670505">
                  <Phone size={18} /> (317) 967-0505
                </a>
              </Button>
              <Button variant="hero" size="lg" className="rounded-xl shadow-elevated gap-2" asChild>
                <Link to="/contact">
                  <Calendar size={18} /> Get in touch
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
            Attics account for a large share of residential energy loss. Without strong insulation and air sealing at the roof
            line, conditioned air escapes and outdoor conditions penetrate living spaces, increasing HVAC load and reducing
            comfort.
          </p>
          <p className="text-white/92 leading-relaxed">
            Octofoam installs closed-cell spray foam directly to roof decking in Fortville homes, where it expands into gaps
            and creates a continuous monolithic barrier against thermal leakage and infiltration.
          </p>
          <p className="text-white/92 leading-relaxed">
            This level of envelope control is difficult to achieve with traditional batt and blown materials that can settle or
            leave unsealed transitions over time.
          </p>
        </div>
      </section>

      <CurvedDivider topColor={dark} bottomColor={white} accentColor={mint} direction="up" transparentBottom className="relative z-10" />

      <section className="bg-background py-16 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto space-y-6 text-muted-foreground">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
            Why Fortville attics need superior insulation
          </h2>
          <p className="leading-relaxed">
            Fortville experiences summer heat, humidity, winter freezes, and severe weather transitions that expose insulation
            weaknesses. Spray foam’s air-impermeable performance and high thermal resistance per inch help reduce this seasonal
            stress on HVAC systems.
          </p>
          <p className="leading-relaxed">
            Closed-cell spray foam also functions as a vapor retarder, helping prevent roof-deck condensation and limiting
            moisture-related issues such as mold and wood degradation.
          </p>
          <p className="leading-relaxed">Get in touch today for attic insulation in Fortville.</p>
        </div>
      </section>

      <CurvedDivider topColor={white} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />

      <section className="bg-[#5c97d0] py-16 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="rounded-2xl bg-white border border-border p-7 md:p-8 shadow-card">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-[#5c97d0] mb-5">
              Why Fortville homeowners choose spray foam
            </h2>
            <ul className="space-y-3 mb-8">
              {FortvilleBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#5c97d0] mt-0.5 shrink-0" size={20} />
                  <span className="text-[#5c97d0]/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="heroPink" size="lg" className={`rounded-xl gap-2 ${purpleCtaClass}`} asChild>
              <Link to="/contact">
                <Calendar size={18} /> Contact us
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

export default ServiceAreaFortville;

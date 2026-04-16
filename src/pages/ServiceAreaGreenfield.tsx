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

const GreenfieldHighlights = [
  "Eliminates air infiltration at roof penetrations and reduces drafts.",
  "Helps prevent moisture accumulation, mold, and attic condensation.",
  "Improves room-to-room comfort and lowers HVAC runtime.",
  "Adds rigidity to roof assemblies and supports long-term home value.",
  "Reduces pollen, dust, and outdoor pollutant entry into living areas.",
];

const ServiceAreaGreenfield = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Attic Insulation in Greenfield, IN | Octofoam</title>
      <meta
        name="description"
        content="Professional spray foam attic insulation in Greenfield, Indiana. Stop roof-line energy loss, improve comfort, and control moisture with closed-cell foam."
      />
      <link rel="canonical" href="/service-areas/greenfield" />
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
            <p className="text-white/90 font-bold uppercase tracking-widest text-xs md:text-sm mb-3">Greenfield, IN</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight mb-4">
              Attic Insulation in <span className="text-primary">Greenfield</span>
            </h1>
            <p className="text-base md:text-lg text-white/95 font-semibold max-w-3xl mx-auto mb-8 uppercase tracking-wide">
              Stop energy loss at the roof line
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
            Your attic is one of the largest sources of residential energy waste. Without effective roof deck sealing,
            conditioned air escapes through penetrations and gaps, forcing HVAC systems to work harder and increasing utility
            costs.
          </p>
          <p className="text-white/92 leading-relaxed">
            Octofoam applies spray polyurethane foam directly to attic roof structures, creating an airtight thermal envelope
            that transforms attics from energy liabilities into high-performance barriers.
          </p>
          <p className="text-white/92 leading-relaxed">
            Greenfield’s humid summers and freezing winters demand insulation that resists seasonal extremes and condensation.
            Unlike fiberglass batts that settle and allow air movement, spray foam adheres to every surface for continuous
            sealing performance.
          </p>
        </div>
      </section>

      <CurvedDivider topColor={dark} bottomColor={white} accentColor={mint} direction="up" transparentBottom className="relative z-10" />

      <section className="bg-background py-16 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto space-y-6 text-muted-foreground">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
            How roof deck sealing works in Greenfield homes
          </h2>
          <p className="leading-relaxed">
            Spray foam expands on contact, filling voids around rafters, ductwork, and penetrations to create a monolithic air
            barrier and vapor retarder. The closed-cell structure helps limit moisture-driven failures such as mold growth,
            wood rot, and structural deterioration.
          </p>
          <p className="leading-relaxed">
            With high thermal resistance per inch, closed-cell spray foam helps reduce attic heat transfer and lowers equipment
            load. Improved sealing can reduce air-leakage-related energy waste and extend HVAC service life.
          </p>
          <p className="leading-relaxed">
            Contact us today for attic insulation in Greenfield.
          </p>
        </div>
      </section>

      <CurvedDivider topColor={white} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />

      <section className="bg-[#5c97d0] py-16 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="rounded-2xl bg-white border border-border p-7 md:p-8 shadow-card">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-[#5c97d0] mb-5">
              Why Greenfield homeowners choose spray foam
            </h2>
            <ul className="space-y-3 mb-8">
              {GreenfieldHighlights.map((item) => (
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

export default ServiceAreaGreenfield;

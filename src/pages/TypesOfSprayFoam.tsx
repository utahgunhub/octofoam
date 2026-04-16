import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Droplets, Gauge, Phone, ShieldCheck, Wind } from "lucide-react";
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

const comparisonRows = [
  {
    label: "Typical density",
    openCell: "0.4 to 0.5 lb./cu. ft. (often called half-pound foam)",
    closedCell: "1.7 to 2.0 lb./cu. ft. for insulation (often called two-pound foam)",
  },
  {
    label: "Typical R-value per inch",
    openCell: "About R-3.7 to R-4.2 per inch",
    closedCell: "About R-6.8 to R-7.9 per inch",
  },
  {
    label: "Vapor behavior",
    openCell: "More vapor-permeable; may require vapor retarder in interior applications",
    closedCell: "Vapor semi-impermeable; often acts as its own vapor retarder",
  },
  {
    label: "Material characteristics",
    openCell: "Softer, lower-density foam with open microscopic cells",
    closedCell: "More rigid, stronger foam with sealed cells and higher resistance",
  },
];

const TypesOfSprayFoam = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Types of Spray Foam | Octofoam Central Indiana</title>
      <meta
        name="description"
        content="Compare open-cell and closed-cell spray foam insulation by density, R-value, vapor control, strength, and application fit for residential and commercial projects."
      />
      <link rel="canonical" href="/types-of-spray-foam" />
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
            <p className="text-white/90 font-bold uppercase tracking-widest text-xs md:text-sm mb-3">Types of spray foam</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight mb-4">
              Closed-Cell vs <span className="text-primary">Open-Cell Foam</span>
            </h1>
            <p className="text-base md:text-lg text-white/95 font-semibold max-w-3xl mx-auto mb-8 uppercase tracking-wide">
              What are the different spray foams to choose from?
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="heroPink" size="lg" className={`rounded-xl shadow-elevated gap-2 ${purpleCtaClass}`} asChild>
                <a href="tel:3179670505">
                  <Phone size={18} /> (317) 967-0505
                </a>
              </Button>
              <Button variant="hero" size="lg" className="rounded-xl shadow-elevated gap-2" asChild>
                <Link to="/contact">
                  <Calendar size={18} /> Contact us
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
          <h2 className="text-3xl md:text-4xl font-extrabold font-display">Choosing between open-cell and closed-cell foam</h2>
          <p className="text-white/92 leading-relaxed">
            Before starting a residential or commercial spray foam project, you should establish whether open-cell (about
            0.5 lb./cu. ft.) or closed-cell (about 2.0 lb./cu. ft.) is the right fit. Performance, application method, and
            cost can differ significantly.
          </p>
          <p className="text-white/92 leading-relaxed">
            Open-cell foam has tiny cells that are not fully closed, making it softer and more vapor-permeable. Closed-cell
            foam has sealed cells that create a more rigid structure with higher resistance and higher R-value per inch.
          </p>
          <div>
            <Button variant="heroPink" size="lg" className={`rounded-xl gap-2 ${purpleCtaClass}`} asChild>
              <Link to="/contact">
                <Calendar size={18} /> Contact us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CurvedDivider topColor={dark} bottomColor={white} accentColor={mint} direction="up" transparentBottom className="relative z-10" />

      <section className="bg-background py-16 md:py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground text-center mb-4">
            In what ways are open-cell and closed-cell foams different?
          </h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            Density, vapor behavior, and performance targets are the core differences that should drive product selection.
          </p>

          <div className="grid gap-4">
            {comparisonRows.map((row) => (
              <article key={row.label} className="rounded-2xl border border-border bg-card shadow-card p-6 md:p-7">
                <h3 className="text-xl font-extrabold font-display text-foreground mb-4">{row.label}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border bg-background p-4">
                    <p className="text-sm uppercase tracking-wide font-bold text-[#5c97d0] mb-2">Open-cell</p>
                    <p className="text-muted-foreground leading-relaxed">{row.openCell}</p>
                  </div>
                  <div className="rounded-xl border border-border bg-background p-4">
                    <p className="text-sm uppercase tracking-wide font-bold text-[#5c97d0] mb-2">Closed-cell</p>
                    <p className="text-muted-foreground leading-relaxed">{row.closedCell}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CurvedDivider topColor={white} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />

      <section className="bg-[#5c97d0] py-16 md:py-20 px-4">
        <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <article className="rounded-2xl bg-white border border-border p-6 md:p-8 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-[#5c97d0]/15 flex items-center justify-center mb-4">
              <Gauge className="text-[#5c97d0]" size={24} />
            </div>
            <h3 className="text-2xl font-extrabold font-display text-[#5c97d0] mb-3">Performance and cost tradeoff</h3>
            <p className="text-[#5c97d0]/90 leading-relaxed mb-4">
              Closed-cell foam generally provides higher R-value per inch, greater strength, and better resistance to vapor and
              air leakage. Because it uses more material density, it typically costs more than open-cell foam.
            </p>
            <p className="text-[#5c97d0]/90 leading-relaxed">
              Open-cell foam can be a practical and economical option where high vapor permeability is acceptable and high
              compressive rigidity is not required.
            </p>
          </article>

          <article className="rounded-2xl bg-white border border-border p-6 md:p-8 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-[#5c97d0]/15 flex items-center justify-center mb-4">
              <Droplets className="text-[#5c97d0]" size={24} />
            </div>
            <h3 className="text-2xl font-extrabold font-display text-[#5c97d0] mb-3">Application fit matters</h3>
            <p className="text-[#5c97d0]/90 leading-relaxed mb-4">
              Open-cell foam should not be used where water absorption risk is high, such as below-grade or flotation
              applications. Water is a poor insulator and can reduce effective thermal performance.
            </p>
            <p className="text-[#5c97d0]/90 leading-relaxed">
              In roofing applications or any assembly where maximum R-value per inch is critical, closed-cell foam is usually
              the preferred option.
            </p>
          </article>
        </div>
      </section>

      <CurvedDivider topColor={dark} bottomColor={white} accentColor={mint} direction="up" transparentBottom className="relative z-10" />

      <section className="bg-background py-16 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto space-y-8">
          <article className="rounded-2xl border border-border bg-card shadow-card p-7 md:p-8">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground mb-4">
              Selection checklist before the job starts
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Before choosing open-cell or closed-cell foam, request application and performance data from the supplier and
              review requirements with your spray foam installer.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Confirm how the assembly needs to handle vapor control, strength, moisture exposure, available cavity depth, and
              thermal targets for your project.
            </p>
          </article>

          <div className="grid md:grid-cols-3 gap-6">
            <article className="rounded-2xl border border-border bg-card shadow-card p-6">
              <div className="w-10 h-10 rounded-lg bg-[#5c97d0]/10 flex items-center justify-center mb-3">
                <Wind className="text-[#5c97d0]" size={20} />
              </div>
              <h3 className="font-extrabold font-display text-foreground mb-2">Air control</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Verify required air-sealing performance for walls, roofs, and transitions.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-card shadow-card p-6">
              <div className="w-10 h-10 rounded-lg bg-[#5c97d0]/10 flex items-center justify-center mb-3">
                <Droplets className="text-[#5c97d0]" size={20} />
              </div>
              <h3 className="font-extrabold font-display text-foreground mb-2">Vapor control</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Match permeability and retarder strategy to climate and assembly location.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-card shadow-card p-6">
              <div className="w-10 h-10 rounded-lg bg-[#5c97d0]/10 flex items-center justify-center mb-3">
                <ShieldCheck className="text-[#5c97d0]" size={20} />
              </div>
              <h3 className="font-extrabold font-display text-foreground mb-2">Strength needs</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Consider whether the application needs added rigidity and compressive resistance.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CurvedDivider topColor={white} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />

      <section className="bg-[#5c97d0] py-16 px-4">
        <div className="container max-w-3xl mx-auto text-center text-white">
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-4">Choose the right foam for the right application</h2>
            <p className="text-white/90 leading-relaxed mb-7">
              Picking the correct spray foam type up front helps prevent underperformance and rework. Octofoam can help you
              evaluate open-cell and closed-cell options for your project goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="heroPink" size="lg" className={`rounded-xl gap-2 ${purpleCtaClass}`} asChild>
                <a href="tel:3179670505">
                  <Phone size={18} /> Call Octofoam
                </a>
              </Button>
              <Button variant="hero" size="lg" className="rounded-xl gap-2" asChild>
                <Link to="/contact">
                  <CheckCircle2 size={18} /> Request an estimate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
);

export default TypesOfSprayFoam;

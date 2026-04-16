import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Phone, ShieldCheck, Waves, Wind } from "lucide-react";
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
const crawlImage = "/octofoam-images/crawl+space+BUTTON+image+-+octofoam-1920w.webp";

const crawlspaceBenefits = [
  "Creates a more consistent and uniform thermal barrier.",
  "Helps control airflow and reduce stack effect movement through the home.",
  "Provides moisture control at critical crawlspace transition points.",
  "Reduces common floor insulation failures caused by gaps and compression.",
];

const CrawlSpaceInsulation = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Crawl Space Insulation | Octofoam Central Indiana</title>
      <meta
        name="description"
        content="Spray foam crawl space insulation for Central Indiana homes and buildings. Improve comfort, control moisture, and reduce infiltration with a sealed crawlspace."
      />
      <link rel="canonical" href="/crawl-space-insulation" />
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
            <p className="text-white/90 font-bold uppercase tracking-widest text-xs md:text-sm mb-3">Crawl space insulation</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight mb-4">
              Insulation for <span className="text-primary">Central Indiana</span> Crawlspaces and Basements
            </h1>
            <p className="text-base md:text-lg text-white/95 font-semibold max-w-3xl mx-auto mb-8 uppercase tracking-wide">
              Crawl Space Insulation
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
          <img
            src={crawlImage}
            alt="Spray foam application in a crawl space"
            className="w-full h-[240px] md:h-[320px] object-cover rounded-2xl border-4 border-white/20 shadow-elevated"
            loading="lazy"
          />
          <p className="text-white/92 leading-relaxed">
            Rectangular penetrations, open vents, and irregular crawlspace geometry are common in homes and can become a
            persistent source of comfort and air-quality problems. Even when batt insulation is installed, it does not create
            a vapor or air barrier, so contaminated warm or cold air can still move into living areas.
          </p>
          <p className="text-white/92 leading-relaxed">
            If the crawl space is not properly sealed, mold spores, earth gases, rodents, and other allergens can infiltrate
            occupied spaces. Spray foam insulation is the only material that can both insulate and seal across complex
            obstructions like plumbing, ductwork, wiring, and inconsistent joist spacing.
          </p>
          <p className="text-white/92 leading-relaxed">
            Closed-cell spray foam also acts as a moisture barrier between the ground and subfloor surface. That helps reduce
            moisture migration and problems driven by the stack effect, where air movement through the building pulls
            crawlspace contaminants upward.
          </p>
        </div>
      </section>

      <CurvedDivider topColor={dark} bottomColor={white} accentColor={mint} direction="up" transparentBottom className="relative z-10" />

      <section className="bg-background py-16 md:py-20 px-4">
        <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
          <article className="rounded-2xl border border-border bg-card shadow-card p-7 md:p-8">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground mb-4">
              Properly insulating and sealing your crawl space
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Crawlspaces can be insulated in two primary ways: insulating the ceiling in a vented crawlspace, or insulating
              the walls in an unvented crawlspace. Spray foam can be used effectively in either approach when the assembly is
              designed and installed correctly.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A properly insulated and sealed crawl space is one of the core elements of a comfortable and healthy home.
              Fiberglass batt has long been used in crawl spaces, but modern building science highlights the limits of porous
              insulation in airflow and moisture control.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ideally, crawlspaces should resist uncontrolled air infiltration to reduce drafts and improve indoor air quality.
              Spray foam provides a more uniform thermal barrier while also helping create air and moisture control layers.
            </p>
          </article>

          <aside className="rounded-2xl border border-border bg-card shadow-card p-7 md:p-8">
            <h3 className="text-2xl font-extrabold font-display text-foreground mb-5">
              Including crawlspace spray foam can help:
            </h3>
            <ul className="space-y-3 mb-8">
              {crawlspaceBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#5c97d0] mt-0.5 shrink-0" size={20} />
                  <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button variant="heroPink" size="lg" className={`rounded-xl gap-2 ${purpleCtaClass}`} asChild>
              <Link to="/contact">
                <Calendar size={18} /> Contact us
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <CurvedDivider topColor={white} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />

      <section className="bg-[#5c97d0] py-16 md:py-20 px-4">
        <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <article className="rounded-2xl bg-white border border-border p-6 md:p-8 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-[#5c97d0]/15 flex items-center justify-center mb-4">
              <Wind className="text-[#5c97d0]" size={24} />
            </div>
            <h3 className="text-2xl font-extrabold font-display text-[#5c97d0] mb-3">Problems with fiberglass</h3>
            <p className="text-[#5c97d0]/90 leading-relaxed mb-4">
              Fiberglass batt insulation is porous, so it does not control air or moisture movement. Even when installed,
              batts can leave pathways for leakage and infiltration between crawl space and living space.
            </p>
            <p className="text-[#5c97d0]/90 leading-relaxed mb-4">
              Batts are often compressed by wire hangers, reducing real-world performance. Open web floor trusses make this
              worse by creating channels where air can move around insulation.
            </p>
            <p className="text-[#5c97d0]/90 leading-relaxed">
              In summer conditions, warm humid air moving through these assemblies can contribute to condensation, mold, and
              long-term floor system decay.
            </p>
          </article>

          <article className="rounded-2xl bg-white border border-border p-6 md:p-8 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-[#5c97d0]/15 flex items-center justify-center mb-4">
              <ShieldCheck className="text-[#5c97d0]" size={24} />
            </div>
            <h3 className="text-2xl font-extrabold font-display text-[#5c97d0] mb-3">The spray foam solution</h3>
            <p className="text-[#5c97d0]/90 leading-relaxed mb-4">
              Spray foam overcomes common insulation failures by filling voids and irregular spaces, resulting in a much more
              complete thermal and air control layer.
            </p>
            <p className="text-[#5c97d0]/90 leading-relaxed mb-4">
              Installed between floor joists, spray foam can address penetrations and obstructions such as wiring, plumbing,
              ductwork, and imperfect joist spacing that are hard to treat with batts.
            </p>
            <p className="text-[#5c97d0]/90 leading-relaxed">
              Closed-cell foam also creates an effective moisture barrier between the ground and subfloor surface, helping
              control moisture conditions that can support mold growth.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#5c97d0] pb-16 md:pb-20 px-4">
        <div className="container max-w-4xl mx-auto text-center text-white">
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 md:p-10">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-4 mx-auto">
              <Waves className="text-white" size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-3">Ready to seal your crawl space correctly?</h2>
            <p className="text-white/90 leading-relaxed mb-7">
              Crawl space insulation has a bigger effect on comfort and energy performance than most homeowners realize.
              Octofoam can recommend the right approach for your structure and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="heroPink" size="lg" className={`rounded-xl gap-2 ${purpleCtaClass}`} asChild>
                <a href="tel:3179670505">
                  <Phone size={18} /> Call Octofoam
                </a>
              </Button>
              <Button variant="hero" size="lg" className="rounded-xl gap-2" asChild>
                <Link to="/contact">
                  <Calendar size={18} /> Request an estimate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CurvedDivider topColor={dark} bottomColor={dark} accentColor={mint} direction="up" className="relative z-10" />
    </main>

    <SiteFooter />
  </div>
);

export default CrawlSpaceInsulation;

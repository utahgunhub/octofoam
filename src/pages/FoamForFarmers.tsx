import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Droplets, Phone, ShieldCheck, Thermometer, Wind } from "lucide-react";
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

const agriculturalUses = [
  "Liquid storage tanks",
  "Cold storage and freezer applications",
  "Metal buildings, pole barns, sheds, and structures",
  "Grain storage and silos",
  "Livestock housing",
  "Poultry houses",
];

const agriculturalBenefits = [
  {
    title: "Saves on energy bills",
    body: "Reduced heat gain/loss lowers operating costs in temperature-sensitive agricultural buildings.",
    icon: Thermometer,
  },
  {
    title: "Creates an air barrier",
    body: "Spray foam helps limit uncontrolled infiltration and exfiltration in barns and enclosed structures.",
    icon: Wind,
  },
  {
    title: "Provides strong thermal value",
    body: "High-performance insulation per inch helps maintain more stable interior conditions.",
    icon: CheckCircle2,
  },
  {
    title: "Controls moisture",
    body: "Closed-cell spray foam can help reduce moisture-related problems in critical building assemblies.",
    icon: Droplets,
  },
  {
    title: "Increases structural strength",
    body: "Adhesion and rigidity benefits can help reinforce certain structural surfaces and transitions.",
    icon: ShieldCheck,
  },
  {
    title: "Supports consistent production conditions",
    body: "More stable temperatures can support better conditions for poultry and livestock operations.",
    icon: Thermometer,
  },
];

const FoamForFarmers = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Foam for Farmers | Octofoam Central Indiana</title>
      <meta
        name="description"
        content="Agricultural spray foam insulation for poultry houses, swine barns, equine facilities, silos, and cold storage in Central Indiana."
      />
      <link rel="canonical" href="/foam-for-farmers" />
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
            <p className="text-white/90 font-bold uppercase tracking-widest text-xs md:text-sm mb-3">Foam for farmers</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight mb-4">
              Spray Foam in the <span className="text-primary">Agricultural Industry</span>
            </h1>
            <p className="text-base md:text-lg text-white/95 font-semibold max-w-3xl mx-auto mb-8 uppercase tracking-wide">
              Agricultural Foam
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
          <h2 className="text-3xl md:text-4xl font-extrabold font-display">
            Lower operating cost while protecting production quality
          </h2>
          <p className="text-white/92 leading-relaxed">
            Agricultural business owners face the same pressures as any operation: reduce operating costs while maintaining
            quality output. Heating and cooling poultry houses, swine barns, farrowing houses, equine barns, and cold storage
            facilities can become a major expense.
          </p>
          <p className="text-white/92 leading-relaxed">
            Spray foam insulation is one of the most effective systems available to improve thermal efficiency, air control,
            and moisture performance across agricultural structures.
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
        <div className="container max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <article className="rounded-2xl border border-border bg-card shadow-card p-7 md:p-8">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground mb-4">
              The many uses of foam in agriculture
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Spray foam can be adapted to a wide range of agricultural building types and operational environments:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {agriculturalUses.map((item) => (
                <li key={item} className="rounded-xl border border-border bg-background px-4 py-3 text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <aside className="rounded-2xl border border-border bg-card shadow-card p-7 md:p-8">
            <h3 className="text-2xl font-extrabold font-display text-foreground mb-4">Field performance example</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A poultry-house study by The University of Georgia Cooperative Extension Service observed major operational
              improvements after one house was fully enclosed with spray foam insulation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Reported outcomes included more uniform temperatures, reduced heater runtime, improved bird distribution, and
              notable reductions in fuel usage and mortality compared with other houses.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Contact Octofoam today to evaluate similar performance opportunities for your operation.
            </p>
          </aside>
        </div>
      </section>

      <CurvedDivider topColor={white} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />

      <section className="bg-[#5c97d0] py-16 md:py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white font-display mb-4">
            Benefits of foam in agriculture
          </h2>
          <p className="text-white/90 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            Spray foam helps agricultural facilities operate more efficiently while improving indoor stability.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agriculturalBenefits.map((item) => (
              <article key={item.title} className="rounded-2xl bg-white border border-border p-6 md:p-7 shadow-card">
                <div className="w-12 h-12 rounded-xl bg-[#5c97d0]/15 flex items-center justify-center mb-4">
                  <item.icon className="text-[#5c97d0]" size={24} />
                </div>
                <h3 className="text-xl font-extrabold font-display text-[#5c97d0] mb-2">{item.title}</h3>
                <p className="text-[#5c97d0]/90 leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CurvedDivider topColor={dark} bottomColor={white} accentColor={mint} direction="up" transparentBottom className="relative z-10" />

      <section className="bg-background py-16 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <div className="rounded-3xl border border-border bg-card shadow-card p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground mb-4">
              Ready to improve your agricultural building performance?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-7">
              Octofoam can help you choose the right spray foam approach for barns, storage, and specialty agricultural
              structures across Central Indiana.
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
    </main>

    <SiteFooter />
  </div>
);

export default FoamForFarmers;

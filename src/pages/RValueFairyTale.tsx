import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { AlertTriangle, BookOpen, Calendar, Droplets, Phone, Thermometer, Wind } from "lucide-react";
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

const urethaneAdvantages = [
  "Its closed-cell structure helps sustain thermal performance over time.",
  "When properly protected, it resists water absorption and keeps conductivity stable.",
  "Spray application reduces seams and joints compared with board systems.",
  "High insulation value per inch can reduce assembly thickness for the same thermal target.",
  "Low moisture permeability helps control vapor-related performance loss.",
];

const RValueFairyTale = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>R-Value Fairy Tale | Octofoam Central Indiana</title>
      <meta
        name="description"
        content="R-value alone does not define real insulation performance. Learn why air movement, moisture, vapor drive, and installation quality matter in real-world buildings."
      />
      <link rel="canonical" href="/r-value-fairy-tale" />
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
            <p className="text-white/90 font-bold uppercase tracking-widest text-xs md:text-sm mb-3">R-value fairy tale</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight mb-4">
              The Myth of <span className="text-primary">Insulation Values</span>
            </h1>
            <p className="text-base md:text-lg text-white/95 font-semibold max-w-3xl mx-auto mb-8 uppercase tracking-wide">
              R-value by itself does not define real-world performance
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
          <h2 className="text-3xl md:text-4xl font-extrabold font-display">Why "R-value only" can be misleading</h2>
          <p className="text-white/92 leading-relaxed">
            One of the biggest insulation myths is that a single R-value number tells the whole story. In real buildings,
            insulation performance also depends on air movement, moisture exposure, vapor drive, and installation quality.
          </p>
          <p className="text-white/92 leading-relaxed">
            If insulation is exposed to wind washing or moisture, lab-rated values may no longer reflect field performance.
            That is why comparing materials by R-value alone can produce misleading conclusions.
          </p>
          <p className="text-white/92 leading-relaxed">
            Contact Octofoam today to discuss insulation systems based on real-world performance, not just chart values.
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
        <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-8">
          <article className="rounded-2xl border border-border bg-card shadow-card p-6 md:p-8">
            <div className="w-12 h-12 rounded-xl bg-[#5c97d0]/10 flex items-center justify-center mb-4">
              <BookOpen className="text-[#5c97d0]" size={24} />
            </div>
            <h3 className="text-2xl font-extrabold font-display text-foreground mb-3">Test to determine R-value</h3>
            <p className="text-muted-foreground leading-relaxed">
              Standardized tests that produce k-values and R-values are useful, but they are performed under controlled
              laboratory conditions. They typically do not fully represent wind-driven air movement or moisture cycling present
              in field assemblies.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card shadow-card p-6 md:p-8">
            <div className="w-12 h-12 rounded-xl bg-[#5c97d0]/10 flex items-center justify-center mb-4">
              <AlertTriangle className="text-[#5c97d0]" size={24} />
            </div>
            <h3 className="text-2xl font-extrabold font-display text-foreground mb-3">Real-world degradation factors</h3>
            <p className="text-muted-foreground leading-relaxed">
              Even small amounts of moisture and uncontrolled airflow can significantly reduce effective thermal performance in
              many fibrous assemblies. Field durability requires air, water, and vapor control in addition to nominal R-value.
            </p>
          </article>
        </div>

        <div className="container max-w-5xl mx-auto space-y-6 text-muted-foreground">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">Vapor barriers and convection losses</h2>
          <p className="leading-relaxed">
            Vapor management is directional and climate-dependent. The "warm side" can change seasonally, so poor vapor-layer
            strategy can trap moisture and drive long-term insulation failure.
          </p>
          <p className="leading-relaxed">
            Convection currents inside low-density fibrous insulation can also carry heat through the assembly during extreme
            temperature differences, reducing effective R-value in cold conditions.
          </p>
          <p className="leading-relaxed">
            This tension between ventilation, air control, and vapor control is one reason single-number insulation comparisons
            are incomplete.
          </p>
        </div>
      </section>

      <CurvedDivider topColor={white} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />

      <section className="bg-[#5c97d0] py-16 md:py-20 px-4">
        <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <article className="rounded-2xl bg-white border border-border p-6 md:p-8 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-[#5c97d0]/15 flex items-center justify-center mb-4">
              <Wind className="text-[#5c97d0]" size={24} />
            </div>
            <h3 className="text-2xl font-extrabold font-display text-[#5c97d0] mb-3">Air penetration matters</h3>
            <p className="text-[#5c97d0]/90 leading-relaxed mb-4">
              Uncontrolled leakage can undermine nominal insulation values. If air moves through or behind insulation layers,
              thickness alone cannot compensate for resulting heat and moisture transport.
            </p>
            <p className="text-[#5c97d0]/90 leading-relaxed">
              Installation quality and continuity of the air barrier are often the deciding factors in actual envelope
              performance.
            </p>
          </article>

          <article className="rounded-2xl bg-white border border-border p-6 md:p-8 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-[#5c97d0]/15 flex items-center justify-center mb-4">
              <Droplets className="text-[#5c97d0]" size={24} />
            </div>
            <h3 className="text-2xl font-extrabold font-display text-[#5c97d0] mb-3">Solid vs fibrous insulation in moisture</h3>
            <p className="text-[#5c97d0]/90 leading-relaxed mb-4">
              Solid insulations can better resist some wind and moisture effects, but board systems still require careful
              detailing to prevent bypass air behind joints and transitions.
            </p>
            <p className="text-[#5c97d0]/90 leading-relaxed">
              Spray-applied polyurethane is often used where complete in-place sealing around irregular framing is required.
            </p>
          </article>
        </div>
      </section>

      <CurvedDivider topColor={dark} bottomColor={white} accentColor={mint} direction="up" transparentBottom className="relative z-10" />

      <section className="bg-background py-16 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto space-y-8">
          <article className="rounded-2xl border border-border bg-card shadow-card p-7 md:p-8">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground mb-4">
              Anecdotes from freezer and residential projects
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The source material highlights multiple field examples where spray polyurethane systems delivered significantly
              lower heating and cooling loads than expected by simplified chart comparison alone.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              While anecdotal data is not a laboratory standard, repeated performance outcomes across many projects reinforce
              the need to evaluate full assembly behavior, not isolated R-values.
            </p>
          </article>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="rounded-2xl border border-border bg-card shadow-card p-6 md:p-7">
              <div className="w-11 h-11 rounded-xl bg-[#5c97d0]/10 flex items-center justify-center mb-4">
                <Thermometer className="text-[#5c97d0]" size={22} />
              </div>
              <h3 className="text-xl font-extrabold font-display text-foreground mb-2">Two purposes of insulation</h3>
              <p className="text-muted-foreground leading-relaxed">
                The content distinguishes between heat-loss control and interior surface temperature control. Additional
                thickness may have diminishing returns for conductance but still help prevent condensation at interior surfaces.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-card shadow-card p-6 md:p-7">
              <div className="w-11 h-11 rounded-xl bg-[#5c97d0]/10 flex items-center justify-center mb-4">
                <Wind className="text-[#5c97d0]" size={22} />
              </div>
              <h3 className="text-xl font-extrabold font-display text-foreground mb-2">Heat sinks and thermal diffusivity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Assemblies with significant thermal mass can buffer temperature cycles. In these systems, performance depends on
                insulation plus mass behavior, not R-value alone.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CurvedDivider topColor={white} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />

      <section className="bg-[#5c97d0] py-16 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto space-y-8">
          <div className="rounded-2xl bg-white border border-border p-7 md:p-8 shadow-card">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-[#5c97d0] mb-4">Urethane conserves energy</h2>
            <ul className="space-y-3">
              {urethaneAdvantages.map((item) => (
                <li key={item} className="text-[#5c97d0]/90 leading-relaxed">
                  - {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 md:p-10 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-extrabold font-display mb-4">Contact Octofoam to evaluate real insulation performance</h3>
            <p className="text-white/90 leading-relaxed mb-7">
              We can help you compare systems by air sealing, moisture resilience, and field performance criteria, not just
              a single nominal R-value.
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

export default RValueFairyTale;

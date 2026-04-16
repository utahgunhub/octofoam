import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Clock3, DollarSign, Drill, Phone, ShieldCheck, Zap } from "lucide-react";
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
const concreteImage = "/octofoam-images/concrete+lifting+BUTTON+image+-+octofoam-1920w.webp";

const advantages = [
  {
    title: "Simple application",
    body: "Foam cures in minutes and can reach high early compressive strength quickly, so large areas can often be lifted and returned to service during the same work period.",
    icon: Zap,
  },
  {
    title: "Lower costs",
    body: "Efficient installation and smaller crews can reduce labor hours and project cost compared to full slab replacement.",
    icon: DollarSign,
  },
  {
    title: "Moisture-tolerant performance",
    body: "High-density closed-cell foam is designed for wet conditions and helps resist water penetration after installation.",
    icon: ShieldCheck,
  },
  {
    title: "Exceptional adhesion and stability",
    body: "Strong inter-layer adhesion and compressive properties help form a stable monolithic support layer that resists settling.",
    icon: CheckCircle2,
  },
];

const ConcreteLeveling = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Concrete Leveling | Octofoam Central Indiana</title>
      <meta
        name="description"
        content="Polyurethane foam concrete lifting and leveling in Central Indiana. Fast cure times, minimal disruption, and cost-effective slab stabilization."
      />
      <link rel="canonical" href="/concrete-leveling" />
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
            <p className="text-white/90 font-bold uppercase tracking-widest text-xs md:text-sm mb-3">Concrete leveling</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight mb-4">
              Polyurethane Foam <span className="text-primary">Concrete Lifting and Leveling</span>
            </h1>
            <p className="text-base md:text-lg text-white/95 font-semibold max-w-3xl mx-auto mb-8 uppercase tracking-wide">
              Concrete Leveling
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
        <div className="container max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-10 items-start">
          <div className="rounded-2xl border-4 border-white/20 bg-white/10 shadow-elevated p-3">
            <img
              src={concreteImage}
              alt="Polyurethane foam concrete lifting and leveling"
              className="w-full h-[280px] md:h-[360px] object-contain rounded-xl"
              loading="lazy"
            />
          </div>

          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display">Fast, economical slab lifting with minimal disruption</h2>
            <p className="text-white/92 leading-relaxed">
              Most polyurethane foam concrete lifting, stabilization, and void-filling projects can be completed quickly and
              economically with minimal disruption, often with one-day turnaround and return to service.
            </p>
            <p className="text-white/92 leading-relaxed">
              Injection holes are strategically drilled into slabs that need lifting. Foam is then injected beneath the
              concrete to fill voids and raise the slab to proper elevation.
            </p>
            <p className="text-white/92 leading-relaxed">
              After injection, holes are patched with polymer concrete or cement. Most concrete repairs are ready quickly, and
              many jobs can be completed in a single day.
            </p>
            <div>
              <Button variant="heroPink" size="lg" className={`rounded-xl gap-2 ${purpleCtaClass}`} asChild>
                <Link to="/contact">
                  <Calendar size={18} /> Contact us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CurvedDivider topColor={dark} bottomColor={white} accentColor={mint} direction="up" transparentBottom className="relative z-10" />

      <section className="bg-background py-16 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto space-y-6 text-muted-foreground">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
            Why polyurethane concrete raising is a strong alternative
          </h2>
          <p className="leading-relaxed">
            Polyurethane concrete raising delivers results similar to mudjacking while using a lightweight material and smaller
            injection holes. Also known as foam lifting, it is one of the most current concrete repair methods available.
          </p>
          <p className="leading-relaxed">
            Concrete raising is often significantly more cost-effective than replacing slabs, frequently coming in at less than
            half the cost once demolition, removal, and landscape restoration are considered.
          </p>
          <p className="leading-relaxed">
            Foam lifting and stabilization avoid disruptive tear-out and can keep surrounding areas in service with minimal
            downtime during the project.
          </p>
        </div>
      </section>

      <CurvedDivider topColor={white} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />

      <section className="bg-[#5c97d0] py-16 md:py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white font-display mb-4">
            Benefits and advantages of concrete lifting with polyurethane foam
          </h2>
          <p className="text-white/90 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            Quick cure times and efficient installation help projects move fast without sacrificing performance.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((item) => (
              <article key={item.title} className="rounded-2xl bg-white border border-border p-6 md:p-7 shadow-card">
                <div className="w-12 h-12 rounded-xl bg-[#5c97d0]/15 flex items-center justify-center mb-4">
                  <item.icon className="text-[#5c97d0]" size={24} />
                </div>
                <h3 className="text-2xl font-extrabold font-display text-[#5c97d0] mb-2">{item.title}</h3>
                <p className="text-[#5c97d0]/90 leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CurvedDivider topColor={dark} bottomColor={white} accentColor={mint} direction="up" transparentBottom className="relative z-10" />

      <section className="bg-background py-16 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <article className="rounded-2xl border border-border bg-card shadow-card p-6 md:p-7">
            <div className="w-12 h-12 rounded-xl bg-[#5c97d0]/10 flex items-center justify-center mb-4">
              <Clock3 className="text-[#5c97d0]" size={24} />
            </div>
            <h3 className="text-2xl font-extrabold font-display text-foreground mb-3">Quick cure time</h3>
            <p className="text-muted-foreground leading-relaxed">
              Polyurethane commonly cures within minutes after injection, allowing areas to be returned to service in minutes
              rather than days.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card shadow-card p-6 md:p-7">
            <div className="w-12 h-12 rounded-xl bg-[#5c97d0]/10 flex items-center justify-center mb-4">
              <Drill className="text-[#5c97d0]" size={24} />
            </div>
            <h3 className="text-2xl font-extrabold font-display text-foreground mb-3">Conformable void filling</h3>
            <p className="text-muted-foreground leading-relaxed">
              During injection, geotechnical foam flows into cracks and voids, then expands to in-place density under load and
              restriction to create stable support.
            </p>
          </article>
        </div>
      </section>

      <CurvedDivider topColor={white} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />

      <section className="bg-[#5c97d0] py-16 px-4">
        <div className="container max-w-3xl mx-auto text-center text-white">
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-4">Cost-effective concrete repair without full replacement</h2>
            <p className="text-white/90 leading-relaxed mb-7">
              Polyurethane foam lifting helps restore slab performance with less disruption, less downtime, and lower total
              project cost than many full tear-out replacements.
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

export default ConcreteLeveling;

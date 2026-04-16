import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Droplets, Phone, Thermometer } from "lucide-react";
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
const metalImage = "/octofoam-images/metal+Building+BUTTON+image+-+octo-1920w.webp";
const rigImage = "/octofoam-images/rigwithbarn1+-+octofoam-1920w.webp";

const benefits = [
  "Creates better temperature regulation",
  "Reduces condensation",
  "Increases structural strength",
];

const MetalBuildingInsulation = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Metal Building Insulation | Octofoam Central Indiana</title>
      <meta
        name="description"
        content="Spray foam insulation for Central Indiana metal buildings. Control condensation, improve energy efficiency, and create a better air and vapor barrier."
      />
      <link rel="canonical" href="/metal-building-insulation" />
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
            <p className="text-white/90 font-bold uppercase tracking-widest text-xs md:text-sm mb-3">Metal building insulation</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight mb-4">
              Insulating Metal Buildings with <span className="text-primary">Spray Foam</span>
            </h1>
            <p className="text-base md:text-lg text-white/95 font-semibold max-w-3xl mx-auto mb-8 uppercase tracking-wide">
              Spray Foam for Central Indiana Metal Buildings
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
          <h2 className="text-3xl md:text-4xl font-extrabold font-display">Spray Foam Insulation in Your Central Indiana Metal Building</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <img
              src={metalImage}
              alt="Insulated metal building interior"
              className="w-full h-[220px] md:h-[280px] object-cover rounded-2xl border-4 border-white/20 shadow-elevated"
              loading="lazy"
            />
            <img
              src={rigImage}
              alt="Metal building spray foam project"
              className="w-full h-[220px] md:h-[280px] object-cover rounded-2xl border-4 border-white/20 shadow-elevated"
              loading="lazy"
            />
          </div>
          <p className="text-white/92 leading-relaxed">
            Tired of condensation and rusty dripping water in your metal building? Spray foam insulation is the solution.
          </p>
          <p className="text-white/92 leading-relaxed">
            Spray foam is by far the most effective way to insulate metal buildings. Traditional fiberglass does not create a
            complete air seal or vapor barrier. In humid weather, metal buildings sweat. That moisture can damage the
            structure and create mold or mildew behind fiberglass insulation.
          </p>
          <p className="text-white/92 leading-relaxed">
            Metal buildings come in many shapes and sizes, and spray foam is uniquely suited to conform to varied framing,
            ribs, and transitions where rigid or batt insulation struggles.
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
        <div className="container max-w-5xl mx-auto space-y-6 text-muted-foreground">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
            Why insulation matters in metal structures
          </h2>
          <p className="leading-relaxed">
            Metal is excellent for industrial and commercial construction because it is economical, durable, and low
            maintenance. It is used in everything from small sheds to large warehouses and modern architectural projects.
          </p>
          <p className="leading-relaxed">
            Without proper insulation, metal transfers heat quickly. Summer sun drives heat inward, while winter conditions
            drive heat outward. This rapid transfer can significantly increase heating and cooling loads.
          </p>
          <p className="leading-relaxed">
            Metal buildings also collect moisture through condensation. Spray foam helps combat both heat transfer and
            moisture-driven issues when installed by experienced technicians in new or existing buildings.
          </p>
        </div>
      </section>

      <CurvedDivider topColor={white} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />

      <section className="bg-[#5c97d0] py-16 md:py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white font-display mb-4">
            Top advantages of spray foam for metal buildings
          </h2>
          <p className="text-white/90 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            Insulating metal buildings with spray foam delivers measurable performance improvements and long-term protection.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <article className="rounded-2xl bg-white border border-border p-6 md:p-7 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-[#5c97d0]/15 flex items-center justify-center mb-4">
                <Thermometer className="text-[#5c97d0]" size={24} />
              </div>
              <h3 className="text-xl font-extrabold font-display text-[#5c97d0] mb-2">{benefits[0]}</h3>
              <p className="text-[#5c97d0]/90 leading-relaxed">
                Reduces rapid heat gain and loss through metal skin so interior temperatures are easier to manage year-round.
              </p>
            </article>

            <article className="rounded-2xl bg-white border border-border p-6 md:p-7 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-[#5c97d0]/15 flex items-center justify-center mb-4">
                <Droplets className="text-[#5c97d0]" size={24} />
              </div>
              <h3 className="text-xl font-extrabold font-display text-[#5c97d0] mb-2">{benefits[1]}</h3>
              <p className="text-[#5c97d0]/90 leading-relaxed">
                Creates an effective barrier that helps control sweating metal panels and moisture accumulation.
              </p>
            </article>

            <article className="rounded-2xl bg-white border border-border p-6 md:p-7 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-[#5c97d0]/15 flex items-center justify-center mb-4">
                <CheckCircle2 className="text-[#5c97d0]" size={24} />
              </div>
              <h3 className="text-xl font-extrabold font-display text-[#5c97d0] mb-2">{benefits[2]}</h3>
              <p className="text-[#5c97d0]/90 leading-relaxed">
                Adds rigidity by adhering directly to metal surfaces and bridging irregular transitions.
              </p>
            </article>
          </div>

          <div className="max-w-3xl mx-auto rounded-3xl border border-white/20 bg-white/10 p-8 md:p-10 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-extrabold font-display mb-3">Contact Octofoam today to learn more</h3>
            <p className="text-white/90 leading-relaxed mb-7">
              We can evaluate your building and recommend a spray foam strategy for comfort, moisture control, and long-term
              performance.
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

export default MetalBuildingInsulation;

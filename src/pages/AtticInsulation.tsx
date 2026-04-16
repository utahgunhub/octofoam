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
const light = "hsl(170, 40%, 97%)";
const white = "#ffffff";
const mint = "#634390";
const navyBlock = "#5c97d0";
const purpleCtaClass = "bg-[#634390] hover:bg-[#52367a] text-white";
const atticImage = "/octofoam-images/attic+insulation+BUTTON+image+-+octofoam-1920w.webp";
const atticRoofImage = "/octofoam-images/bigstock-Roof-Insulation-In-Attic-With--469350977-1920w.webp";

const methodCards = [
  {
    title: "Building Science (Traditional Way)",
    subtitle: "Attic floor spray foam application through a vented attic",
    body: "Foam is applied between floor joists to insulate the ceiling plane while the attic remains vented through soffit, ridge, and gable vents. This is common across the U.S., even though it is not typically the most efficient setup.",
  },
  {
    title: "Conditioned Attic (Unvented Roof Deck)",
    subtitle: "Foam applied to the underside of the roof deck",
    body: "Foam is applied between rafters, across gable ends, and around rim and soffit transitions to create an air barrier and insulate the full attic space. This keeps attic temperatures closer to the rest of the home.",
  },
];

const atticBenefits = [
  "Heat gain/loss from ducts and duct leakage is substantially reduced.",
  "Sealing the roof from air infiltration is often more feasible than sealing the ceiling plane.",
  "Living space stays cleaner with less loose insulation and dust intrusion.",
  "When attics are sealed and insulated correctly, testing often shows reduced energy costs.",
];

const AtticInsulation = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Attic Insulation | Spray Foam for Central Indiana Attics | Octofoam</title>
      <meta
        name="description"
        content="Learn attic spray foam options for Central Indiana homes, including vented attic floor insulation and conditioned attic roof deck applications."
      />
      <link rel="canonical" href="/attic-insulation" />
    </Helmet>

    <SiteHeader />

    <main>
      <section className="relative min-h-[46vh] md:min-h-[52vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

        <motion.div
          className="relative z-10 w-full px-4 pt-20 pb-32 md:pt-24 md:pb-36"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="container max-w-4xl mx-auto text-center">
            <p className="text-white/90 font-bold uppercase tracking-widest text-xs md:text-sm mb-3">Attic insulation</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight mb-4">
              Spray Foam for <span className="text-primary">Central Indiana</span> Attic Spaces
            </h1>
            <p className="text-base md:text-lg text-white/95 font-semibold max-w-3xl mx-auto mb-8 uppercase tracking-wide">
              Attic insulation in your Central Indiana home.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="heroPink" size="lg" className={`rounded-xl shadow-elevated gap-2 ${purpleCtaClass}`} asChild>
                <a href="tel:3179670505">
                  <Phone size={18} /> (317) 967-0505
                </a>
              </Button>
              <Button variant="hero" size="lg" className="rounded-xl shadow-elevated gap-2" asChild>
                <Link to="/contact">
                  <Calendar size={18} /> Get a quote
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

      <section className="bg-accent pt-14 pb-8 md:pt-18 md:pb-10 px-4" id="attic-methods">
        <div className="container max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-accent-foreground mb-4">
            Two common ways to insulate an attic with spray polyurethane foam
          </h2>
          <p className="text-accent-foreground/85 text-lg">
            Both approaches can improve comfort and moisture control, but performance varies based on the design goal for
            the attic.
          </p>
        </div>

        <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-8">
          <img
            src={atticImage}
            alt="Spray foam insulation in an attic space"
            className="w-full h-[220px] md:h-[260px] object-cover rounded-2xl border-4 border-white/35 shadow-elevated"
            loading="lazy"
          />
          <img
            src={atticRoofImage}
            alt="Insulating the underside of an attic roof deck"
            className="w-full h-[220px] md:h-[260px] object-cover rounded-2xl border-4 border-white/35 shadow-elevated"
            loading="lazy"
          />
        </div>

        <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {methodCards.map((card) => (
            <article key={card.title} className="rounded-2xl bg-white border border-border p-6 md:p-8 shadow-card">
              <h3 className="text-2xl font-extrabold font-display text-[#5c97d0] mb-2">{card.title}</h3>
              <p className="text-sm uppercase tracking-wide font-bold text-[#5c97d0]/80 mb-4">{card.subtitle}</p>
              <p className="text-[#5c97d0]/90 leading-relaxed">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#5c97d0] pt-3 pb-16 md:pt-4 md:pb-20 px-4">
        <div className="container max-w-5xl mx-auto space-y-10 text-white">
          <article className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display">Why conditioned attic systems are often preferred</h2>
            <p className="text-white/90 leading-relaxed">
              Many spray foam professionals consider a conditioned attic the most effective application because it seals and
              insulates the entire attic envelope from infiltration. Foam is installed at the roof deck and critical transition
              points so the attic behaves more like interior space.
            </p>
            <p className="text-white/90 leading-relaxed">
              In a vented attic, summer temperatures can climb to around 130F. That means air-conditioning equipment and
              ductwork must operate in severe heat, which can increase energy use and create conditions for condensation-related
              moisture issues.
            </p>
            <p className="text-white/90 leading-relaxed">
              Applying spray foam directly to the underside of the roof deck helps block extreme roof-driven heat, bringing
              attic temperatures much closer to the comfort level of the home.
            </p>
          </article>

          <article className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-extrabold font-display">About the shingle and "breathing wood" debate</h3>
            <p className="text-white/90 leading-relaxed">
              Traditional design standards often call for attic ventilation to reduce moisture and summertime heat buildup.
              Some argue that unvented roof decks can overheat shingles or that wood must "breathe."
            </p>
            <p className="text-white/90 leading-relaxed">
              In practice, wood products are frequently manufactured and protected in ways that prioritize moisture control and
              sealing. The better long-term strategy is usually proper enclosure, finishing, and maintenance rather than relying
              on uncontrolled airflow through the attic assembly.
            </p>
            <p className="text-white/90 leading-relaxed">
              Shingle manufacturers and project-specific roof specifications should always be reviewed during design. Octofoam
              can help you evaluate the right attic strategy for your home and roof system.
            </p>
          </article>

          <div className="pt-2">
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
        <div className="container max-w-5xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <article className="rounded-2xl border border-border bg-card p-7 md:p-8 shadow-card">
            <h2 className="text-3xl font-extrabold font-display text-foreground mb-4">
              How spray foam lowers attic-driven energy load
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              During summer, attic roof surfaces can exceed 140F. Heat moves from shingles and sheathing into the attic through
              convection and conduction, then into living areas through the ceiling and duct systems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Insulating at the roof surface can reduce the effective attic-side temperature driving heat transfer by roughly
              40F in many conditions. Because heat transfer tracks with temperature difference, reducing that gap can
              significantly reduce heat flow into the home.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With tighter control of infiltration and exfiltration, less outdoor moisture is pulled into attic space and HVAC
              equipment operates in less extreme conditions.
            </p>
          </article>

          <aside className="rounded-2xl border border-border bg-card p-7 md:p-8 shadow-card">
            <h3 className="text-2xl font-extrabold font-display text-foreground mb-4">Including the attic inside the insulated envelope can:</h3>
            <ul className="space-y-3">
              {atticBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#5c97d0] mt-0.5 shrink-0" size={20} />
                  <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <CurvedDivider topColor={white} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />

      <section className="bg-[#5c97d0] py-16 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white mb-4">Need help choosing the right attic approach?</h2>
            <p className="text-white/90 leading-relaxed mb-6">
              Further technical information is available from ASHRAE in the publication "Vented and Sealed Attics in Hot
              Climates." Octofoam can translate that building science into a practical recommendation for your home.
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

export default AtticInsulation;

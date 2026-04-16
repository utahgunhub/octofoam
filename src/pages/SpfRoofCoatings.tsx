import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Calendar, PaintBucket, Phone, ShieldCheck, Sun, Wrench } from "lucide-react";
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

const SpfRoofCoatings = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>SPF Roof Coatings | Octofoam Central Indiana</title>
      <meta
        name="description"
        content="Learn about protective roof coatings over spray foam roofing systems, including elastomeric options, maintenance cycles, and climate performance factors."
      />
      <link rel="canonical" href="/spf-roof-coatings" />
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
            <p className="text-white/90 font-bold uppercase tracking-widest text-xs md:text-sm mb-3">SPF roof coatings</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight mb-4">
              Coatings Over <span className="text-primary">Spray Foam Roofs</span>
            </h1>
            <p className="text-base md:text-lg text-white/95 font-semibold max-w-3xl mx-auto mb-8 uppercase tracking-wide">
              Protective Roof Coatings Over SPF
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
          <h2 className="text-3xl md:text-4xl font-extrabold font-display">Protection is required over SPF</h2>
          <p className="text-white/92 leading-relaxed">
            To protect spray polyurethane foam from moisture, foot traffic, and ultraviolet exposure, a protective layer must
            be installed. Proper coating systems seal the foam and help prevent damage from environmental wear.
          </p>
          <p className="text-white/92 leading-relaxed">
            After SPF is applied to the required thickness and finish, the system is commonly protected with gravel or
            elastomeric coatings. This creates a weather-resistant surface and improves walkability for routine maintenance.
          </p>
          <p className="text-white/92 leading-relaxed">
            White or light-colored cool roof coatings are frequently used over SPF and other roof decks. Common chemistries
            include polyurea, acrylic, silicone, and urethane systems.
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
              <PaintBucket className="text-[#5c97d0]" size={24} />
            </div>
            <h3 className="text-2xl font-extrabold font-display text-foreground mb-3">Coating options and selection</h3>
            <p className="text-muted-foreground leading-relaxed">
              Some contractors use a gravel broadcast system, while many use elastomeric coatings as single- or
              double-component spray-applied systems. Material options vary in cost and physical properties, so supplier
              guidance is important before final selection.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card shadow-card p-6 md:p-8">
            <div className="w-12 h-12 rounded-xl bg-[#5c97d0]/10 flex items-center justify-center mb-4">
              <ShieldCheck className="text-[#5c97d0]" size={24} />
            </div>
            <h3 className="text-2xl font-extrabold font-display text-foreground mb-3">Typical installation approach</h3>
            <p className="text-muted-foreground leading-relaxed">
              A base coat followed by a top coat is standard for many systems. Granules are often embedded in the final layer
              to improve mechanical and UV protection.
            </p>
          </article>
        </div>

        <div className="container max-w-5xl mx-auto space-y-6 text-muted-foreground">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
            Long-term performance depends on maintenance
          </h2>
          <p className="leading-relaxed">
            Coatings are maintainable layers and should be inspected and renewed over time to keep SPF systems performing for
            decades. Like exterior paint systems, coating layers can be removed, refreshed, and re-applied as needed.
          </p>
          <p className="leading-relaxed">
            SPF roofs expand and contract with climate conditions, so coatings must accommodate that movement. The property
            that describes this movement capability is elongation, and matching elongation characteristics to the roof system
            and climate is critical to avoid cracking and damage.
          </p>
        </div>
      </section>

      <CurvedDivider topColor={white} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />

      <section className="bg-[#5c97d0] py-16 px-4">
        <div className="container max-w-3xl mx-auto text-center text-white">
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 md:p-10">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-4 mx-auto">
              <Sun className="text-white" size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-4">Keep your SPF roof protected</h2>
            <p className="text-white/90 leading-relaxed mb-7">
              Choosing the right coating chemistry, thickness, and maintenance cycle protects your spray foam roof investment
              and preserves long-term energy and weather performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="heroPink" size="lg" className={`rounded-xl gap-2 ${purpleCtaClass}`} asChild>
                <a href="tel:3179670505">
                  <Phone size={18} /> Call Octofoam
                </a>
              </Button>
              <Button variant="hero" size="lg" className="rounded-xl gap-2" asChild>
                <Link to="/contact">
                  <Wrench size={18} /> Request an estimate
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

export default SpfRoofCoatings;

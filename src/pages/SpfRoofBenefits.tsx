import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Calendar, Gauge, Layers, Phone, ShieldCheck, Sun, Wrench } from "lucide-react";
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

const SpfRoofBenefits = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>SPF Roof Benefits | Octofoam Central Indiana</title>
      <meta
        name="description"
        content="Learn the benefits of spray polyurethane foam roofing systems in Central Indiana, including seamless waterproofing, insulation value, durability, and long service life."
      />
      <link rel="canonical" href="/spf-roof-benefits" />
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
            <p className="text-white/90 font-bold uppercase tracking-widest text-xs md:text-sm mb-3">SPF roof benefits</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight mb-4">
              Spray Foam <span className="text-primary">Roofing Benefits</span>
            </h1>
            <p className="text-base md:text-lg text-white/95 font-semibold max-w-3xl mx-auto mb-8 uppercase tracking-wide">
              Central Indiana SPF Roofing Systems
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
          <h2 className="text-3xl md:text-4xl font-extrabold font-display">Spray foam is versatile and roofing-ready</h2>
          <p className="text-white/92 leading-relaxed">
            Spray polyurethane foam can adhere to concrete, wood, steel, and most existing roofing materials. This versatility
            gives SPF a major edge in repairs and replacements because many projects can avoid full tear-off and landfill costs
            by applying SPF over the existing roof assembly.
          </p>
          <p className="text-white/92 leading-relaxed">
            SPF is also highly effective for tapered roofing systems. Installers can create slope with one material and spray
            directly to cants and vertical wall terminations, reducing supplemental material needs and simplifying details.
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
            A protective, monolithic solid roof shell derived from liquid foam
          </h2>
          <p className="leading-relaxed">
            Using plural-component equipment, SPF is spray-applied as a liquid and expands to approximately 30 times its
            original volume, forming a hard closed-cell monolithic roof surface that fills cracks and crevices.
          </p>
          <p className="leading-relaxed">
            SPF cures quickly and fully adheres to the substrate, creating a weather-tight membrane with low added weight.
            After final thickness is achieved, a protective elastomeric coating or gravel surface is applied for durability and
            normal maintenance traffic.
          </p>
          <p className="leading-relaxed">
            With a long track record as a maintainable roofing medium, SPF systems provide substantial insulation value that can
            show up in lower utility costs.
          </p>

          <h3 className="text-2xl md:text-3xl font-extrabold font-display text-foreground pt-4">Durability</h3>
          <p className="leading-relaxed">
            SPF roofs are not soft cushion foam. They are durable roofing systems capable of handling normal construction and
            maintenance traffic. If damage occurs, localized repairs with compatible materials are straightforward.
          </p>
        </div>
      </section>

      <CurvedDivider topColor={white} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />

      <section className="bg-[#5c97d0] py-16 md:py-20 px-4">
        <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <article className="rounded-2xl bg-white border border-border p-6 md:p-8 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-[#5c97d0]/15 flex items-center justify-center mb-4">
              <Gauge className="text-[#5c97d0]" size={24} />
            </div>
            <h3 className="text-2xl font-extrabold font-display text-[#5c97d0] mb-3">R-value from density</h3>
            <p className="text-[#5c97d0]/90 leading-relaxed mb-4">
              Higher density SPF generally yields higher R-value and increased strength. Typical SPF roofing is installed in
              the 2.5 to 3 lb. density range, delivering strong thermal resistance and compressive performance.
            </p>
            <p className="text-[#5c97d0]/90 leading-relaxed">
              Real-world project examples show meaningful HVAC runtime reductions when SPF is installed with proper thickness
              and protective coating.
            </p>
          </article>

          <article className="rounded-2xl bg-white border border-border p-6 md:p-8 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-[#5c97d0]/15 flex items-center justify-center mb-4">
              <ShieldCheck className="text-[#5c97d0]" size={24} />
            </div>
            <h3 className="text-2xl font-extrabold font-display text-[#5c97d0] mb-3">Lifespan</h3>
            <p className="text-[#5c97d0]/90 leading-relaxed mb-4">
              SPF roof lifespan can be very long when the protective coating is maintained. Depending on coating thickness and
              exposure, cleaning, priming, and recoating may be needed about every 10 to 15 years.
            </p>
            <p className="text-[#5c97d0]/90 leading-relaxed">
              With maintenance, quality SPF roofing can remain serviceable for decades, often 50 years or more.
            </p>
          </article>

          <article className="rounded-2xl bg-white border border-border p-6 md:p-8 shadow-card md:col-span-2">
            <div className="w-12 h-12 rounded-xl bg-[#5c97d0]/15 flex items-center justify-center mb-4">
              <Layers className="text-[#5c97d0]" size={24} />
            </div>
            <h3 className="text-2xl font-extrabold font-display text-[#5c97d0] mb-3">No seams and self-flashing performance</h3>
            <p className="text-[#5c97d0]/90 leading-relaxed mb-4">
              Applied SPF creates a seamless system that closes common pathways for air and water infiltration. Seamless
              coverage helps address ice damming concerns and can reduce ponding by building slope and smoothing transitions.
            </p>
            <p className="text-[#5c97d0]/90 leading-relaxed">
              SPF conforms to roof substrates and flashes around penetrations, skylights, parapet walls, and equipment where
              leak risk is often highest with traditional systems.
            </p>
          </article>
        </div>
      </section>

      <CurvedDivider topColor={dark} bottomColor={white} accentColor={mint} direction="up" transparentBottom className="relative z-10" />

      <section className="bg-background py-16 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto space-y-8">
          <article className="rounded-2xl border border-border bg-card shadow-card p-7 md:p-8">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground mb-4">SPF roof cost factors</h2>
            <p className="text-muted-foreground leading-relaxed">
              SPF roof cost varies based on location, project complexity, accessibility, foam thickness, and protective coating
              system selection.
            </p>
          </article>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="rounded-2xl border border-border bg-card shadow-card p-6 md:p-7">
              <div className="w-11 h-11 rounded-xl bg-[#5c97d0]/10 flex items-center justify-center mb-4">
                <Sun className="text-[#5c97d0]" size={22} />
              </div>
              <h3 className="text-xl font-extrabold font-display text-foreground mb-2">Protective coatings and cool roof value</h3>
              <p className="text-muted-foreground leading-relaxed">
                Elastomeric or aggregate protection creates a durable weather-resistant maintenance surface. Reflective coating
                systems can significantly lower roof temperatures and support energy-saving performance goals.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-card shadow-card p-6 md:p-7">
              <div className="w-11 h-11 rounded-xl bg-[#5c97d0]/10 flex items-center justify-center mb-4">
                <Wrench className="text-[#5c97d0]" size={22} />
              </div>
              <h3 className="text-xl font-extrabold font-display text-foreground mb-2">Lightweight and versatile installation</h3>
              <p className="text-muted-foreground leading-relaxed">
                SPF is lightweight compared with many conventional built-up systems, and can be used on flat, domed, pitched,
                saw-tooth, and sloped roofs in both re-roof and new construction projects.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CurvedDivider topColor={white} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />

      <section className="bg-[#5c97d0] py-16 px-4">
        <div className="container max-w-3xl mx-auto text-center text-white">
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-4">Installing an SPF roof the right way matters</h2>
            <p className="text-white/90 leading-relaxed mb-7">
              SPF roof installation includes essential procedures based on existing roof conditions. Proper materials, code
              compliance, and experienced application are critical to long-term system performance.
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

export default SpfRoofBenefits;

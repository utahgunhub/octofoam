import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CurvedDivider from "@/components/CurvedDivider";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/hero-slc.jpg";

const dark = "#5c97d0";
const white = "#ffffff";
const mint = "#634390";
const purpleCtaClass = "bg-[#634390] hover:bg-[#52367a] text-white";

const faqs = [
  {
    q: "How does spray foam attic insulation reduce energy costs?",
    a: "Spray polyurethane foam seals the roof deck to prevent air infiltration, stopping conditioned air from escaping and outdoor air from entering. This creates a continuous thermal barrier that can significantly reduce heating and cooling demand. At Octofoam, we regularly see homeowners in Greenfield reduce energy use by sealing these critical leak points.",
  },
  {
    q: "What's the difference between attic and crawl space insulation?",
    a: "Attic insulation focuses on sealing the roof deck to control heat transfer and air leakage from above. Crawl space insulation focuses on controlling moisture, vapor, and air movement from below. Both use spray foam, but they solve different parts of the building envelope.",
  },
  {
    q: "Can spray foam prevent mold in crawl spaces?",
    a: "Yes. Spray foam creates an effective air and vapor control layer that helps prevent moisture infiltration and condensation, which are primary drivers of mold growth. By removing those moisture conditions, spray foam helps make crawl spaces less favorable to mold.",
  },
  {
    q: "How long does polyurethane foam concrete leveling take?",
    a: "Polyurethane concrete lifting cures quickly, often in about 15 to 30 minutes, so surfaces can usually return to service much faster than mudjacking or replacement approaches. At Octofoam, many stabilization and void-filling jobs are completed with minimal downtime.",
  },
  {
    q: "What are the benefits of spray foam roofing for commercial buildings?",
    a: "SPF roofing creates a seamless, weather-tight membrane that helps reduce leaks, improves insulation, and supports lower operating costs. It also adds relatively low weight and can often be applied over existing roofing systems, reducing tear-off costs.",
  },
  {
    q: "Does spray foam insulation work well in Indiana's climate?",
    a: "Yes. Spray foam performs well in Indiana's hot, humid summers and cold winters by reducing year-round infiltration and helping control moisture movement. This improves temperature consistency while helping address humidity-related issues common in attics, basements, and crawl spaces.",
  },
  {
    q: "Why insulate metal buildings with spray foam?",
    a: "Spray foam helps metal buildings by providing air sealing, vapor control, and better temperature regulation while reducing condensation that can cause rust and deterioration. It also adds rigidity to assemblies and helps reduce drafts common in metal structures.",
  },
  {
    q: "What roof coatings protect spray foam roofs best?",
    a: "Polyurea, acrylic, silicone, and urethane coatings are all used to protect SPF roofs from UV, moisture, and foot traffic. The best choice depends on roof exposure, maintenance strategy, and climate. Octofoam selects coating systems based on those project conditions.",
  },
  {
    q: "How does basement spray foam prevent moisture problems?",
    a: "Spray foam on basement walls and rim joists creates an airtight seal that limits moisture infiltration and condensation on cold surfaces. This helps reduce mold and mildew risk while improving whole-home energy efficiency.",
  },
  {
    q: "What's the biggest mistake people make with attic insulation?",
    a: "A common mistake is insulating only the attic floor while leaving major air leakage pathways and temperature extremes unaddressed at the roof line. Roof-deck spray foam creates a conditioned attic that can significantly reduce this energy loss.",
  },
  {
    q: "Can spray foam insulation reduce allergens indoors?",
    a: "Yes. Spray foam forms an airtight barrier that helps reduce dust, pollen, and outdoor pollutant infiltration through cracks and gaps in the envelope. This can improve indoor air quality when combined with proper ventilation and filtration.",
  },
  {
    q: "When should you schedule crawl space insulation?",
    a: "Ideally before major moisture or mold issues develop. Dry seasons are convenient for inspection and prep, but spray foam can often be installed year-round. If you notice musty odors, humidity, or unexplained energy spikes, it's a good time to schedule an evaluation.",
  },
];

const Faq = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>FAQ | Octofoam Central Indiana</title>
      <meta
        name="description"
        content="Frequently asked questions about spray foam insulation, crawl space sealing, concrete leveling, and SPF roofing in Central Indiana."
      />
      <link rel="canonical" href="/faq" />
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
            <p className="text-white/90 font-bold uppercase tracking-widest text-xs md:text-sm mb-3">FAQ</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-base md:text-lg text-white/95 font-semibold max-w-3xl mx-auto mb-8 uppercase tracking-wide">
              Spray foam, roofing, crawlspace and concrete leveling answers
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
        <div className="container max-w-5xl mx-auto rounded-2xl bg-white border border-border shadow-card p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, idx) => (
              <AccordionItem key={item.q} value={`item-${idx}`} className="border-border">
                <AccordionTrigger className="text-left text-[#5c97d0] font-extrabold font-display text-lg md:text-xl hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CurvedDivider topColor={dark} bottomColor={dark} accentColor={mint} direction="up" className="relative z-10" />
    </main>

    <SiteFooter />
  </div>
);

export default Faq;

import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Phone } from "lucide-react";
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

const cityCards = [
  { name: "Greenfield, IN", path: "/service-areas/greenfield", service: "Attic Insulation in Greenfield" },
  { name: "Indianapolis, IN", path: "/service-areas/indianapolis", service: "Crawl Space Insulation in Indianapolis" },
  { name: "New Palestine, IN", path: "/service-areas/new-palestine", service: "Attic Insulation in New Palestine" },
  { name: "Knightstown, IN", path: "/service-areas/knightstown", service: "Crawl Space Insulation in Knightstown" },
  { name: "Fortville, IN", path: "/service-areas/fortville", service: "Attic Insulation in Fortville" },
];

const ServiceAreas = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Areas We Serve | Octofoam Central Indiana</title>
      <meta
        name="description"
        content="Service areas for Octofoam in Central Indiana. Explore insulation services in Greenfield, Indianapolis, New Palestine, Knightstown, and Fortville."
      />
      <link rel="canonical" href="/service-areas" />
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
            <p className="text-white/90 font-bold uppercase tracking-widest text-xs md:text-sm mb-3">Service areas</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight mb-4">
              Areas We <span className="text-primary">Serve</span>
            </h1>
            <p className="text-base md:text-lg text-white/95 font-semibold max-w-3xl mx-auto mb-8 uppercase tracking-wide">
              Central Indiana insulation specialists
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
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityCards.map((city) => (
              <article key={city.path} className="rounded-2xl bg-white border border-border p-6 shadow-card flex flex-col gap-4">
                <div>
                  <h2 className="text-2xl font-extrabold font-display text-[#5c97d0]">{city.name}</h2>
                  <p className="text-[#5c97d0]/85 mt-2">{city.service}</p>
                </div>
                <Button variant="heroPink" size="lg" className={`rounded-xl gap-2 w-full ${purpleCtaClass}`} asChild>
                  <Link to={city.path}>
                    Learn More <ArrowRight size={18} />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CurvedDivider topColor={dark} bottomColor={dark} accentColor={mint} direction="up" className="relative z-10" />
    </main>

    <SiteFooter />
  </div>
);

export default ServiceAreas;

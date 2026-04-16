import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CurvedDivider from "@/components/CurvedDivider";
import { Button } from "@/components/ui/button";
import { resourcePosts } from "@/content/resourcesPosts";
import heroImg from "@/assets/hero-slc.jpg";

const dark = "#5c97d0";
const white = "#ffffff";
const mint = "#634390";
const purpleCtaClass = "bg-[#634390] hover:bg-[#52367a] text-white";

const Resources = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Resources | Octofoam Central Indiana</title>
      <meta
        name="description"
        content="Octofoam resources and blog articles covering concrete leveling, metal building insulation, SPF roofing systems, and vented vs non-vented spray foam applications."
      />
      <link rel="canonical" href="/resources" />
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
            <p className="text-white/90 font-bold uppercase tracking-widest text-xs md:text-sm mb-3">Resources</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight mb-4">
              Insights from <span className="text-primary">Octofoam</span>
            </h1>
            <p className="text-base md:text-lg text-white/95 font-semibold max-w-3xl mx-auto mb-8 uppercase tracking-wide">
              Concrete, insulation, roofing, and building performance
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
        <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {resourcePosts.map((post) => (
            <article key={post.slug} className="rounded-2xl bg-white border border-border shadow-card p-6 md:p-7 flex flex-col h-full">
              <p className="text-sm text-[#5c97d0]/75 font-semibold mb-2">
                By {post.author} • {post.date}
              </p>
              <h2 className="text-2xl font-extrabold font-display text-[#5c97d0] leading-tight mb-3">{post.title}</h2>
              <p className="text-[#5c97d0]/90 leading-relaxed mb-5 flex-1">{post.excerpt}</p>
              <Button variant="heroPink" size="lg" className={`rounded-xl gap-2 mt-auto ${purpleCtaClass}`} asChild>
                <Link to={`/resources/${post.slug}`}>
                  Read article <ArrowRight size={18} />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <CurvedDivider topColor={dark} bottomColor={dark} accentColor={mint} direction="up" className="relative z-10" />
    </main>

    <SiteFooter />
  </div>
);

export default Resources;

import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Phone } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CurvedDivider from "@/components/CurvedDivider";
import { Button } from "@/components/ui/button";
import { getResourcePost } from "@/content/resourcesPosts";
import NotFound from "@/pages/NotFound";
import heroImg from "@/assets/hero-slc.jpg";

const dark = "#5c97d0";
const white = "#ffffff";
const mint = "#634390";
const light = "hsl(170, 40%, 97%)";
const purpleCtaClass = "bg-[#634390] hover:bg-[#52367a] text-white";

const ResourcePost = () => {
  const { slug } = useParams();
  const post = slug ? getResourcePost(slug) : undefined;

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title} | Octofoam Resources</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`/resources/${post.slug}`} />
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
              <p className="text-white/90 font-bold uppercase tracking-widest text-xs md:text-sm mb-3">
                By {post.author} • {post.date}
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight mb-8">
                {post.title}
              </h1>
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
              <path d="M0,40 Q360,0 720,40 T1440,40 L1440,80 L0,80 Z" fill={light} />
              <path d="M0,40 Q360,0 720,40 T1440,40" fill="none" stroke="#634390" strokeOpacity="1" strokeWidth="6" />
            </svg>
          </div>
        </section>

        <section className="bg-background py-16 md:py-20 px-4">
          <div className="container max-w-4xl mx-auto space-y-10">
            <div>
              <Button variant="heroPink" size="lg" className={`rounded-xl gap-2 ${purpleCtaClass}`} asChild>
                <Link to="/resources">
                  <ArrowLeft size={18} /> Back to resources
                </Link>
              </Button>
            </div>
            {post.sections.map((section) => (
              <article key={section.heading} className="rounded-2xl border border-border bg-card shadow-card p-7 md:p-8">
                <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground mb-4">{section.heading}</h2>
                <div className="space-y-4">
                  {section.paragraphs.map((p) => (
                    <p key={p} className="text-muted-foreground leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <CurvedDivider topColor={white} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />

        <section className="bg-[#5c97d0] py-16 px-4">
          <div className="container max-w-3xl mx-auto text-center text-white">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-4">Need project guidance?</h2>
              <p className="text-white/90 leading-relaxed mb-7">
                Octofoam can help you evaluate the right insulation, roofing, or stabilization approach for your property.
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

        <CurvedDivider topColor={dark} bottomColor={dark} accentColor={mint} direction="up" className="relative z-10" />
      </main>

      <SiteFooter />
    </div>
  );
};

export default ResourcePost;

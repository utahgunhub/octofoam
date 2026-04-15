import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Check,
  Droplets,
  Flame,
  Phone,
  Shield,
  Snowflake,
  Star,
  Users,
  Wrench,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CurvedDivider from "@/components/CurvedDivider";
import { Button } from "@/components/ui/button";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "@/components/ScrollReveal";
import heroImg from "@/assets/hero-slc.jpg";

const dark = "hsl(225, 100%, 32%)";
const light = "hsl(170, 40%, 97%)";
const white = "#ffffff";
const mint = "hsl(160, 100%, 50%)";
const skyBlue = "hsl(200, 100%, 50%)";
const navyBlock = "#001c70";

const stats = [
  { value: "15+", label: "Years serving Utah" },
  { value: "53+", label: "Projects completed" },
  { value: "2", label: "Dedicated team members" },
  { value: "5", label: "Counties served" },
];

const serviceBlocks = [
  {
    title: "HVAC installation & AC repair",
    icon: Wrench,
    bullets: [
      "Professional HVAC installation and air conditioning repair",
      "Full system replacement typically $5,000–$16,000 depending on home size and equipment",
      "24/7 emergency HVAC repair when you need help fast",
      "Serving Salt Lake City, Provo, Ogden, and surrounding communities",
    ],
  },
  {
    title: "Air conditioning",
    icon: Snowflake,
    bullets: [
      "Central air installation and replacement",
      "AC system repair and diagnostics",
      "Ductless / mini-split installation",
      "Seasonal AC maintenance and tune-ups",
    ],
  },
  {
    title: "Heating repair & installation",
    icon: Flame,
    bullets: [
      "Furnace repair and safety checks",
      "Heating system installation",
      "Heating maintenance before winter",
      "Emergency heating service",
    ],
  },
  {
    title: "Water heaters",
    icon: Droplets,
    bullets: [
      "Tank and tankless water heater installation",
      "Gas and electric units",
      "Repairs and replacements with proper venting and connections",
      "Professional installation and code-conscious workmanship",
    ],
  },
];

const portfolio = [
  {
    tag: "HVAC",
    title: "Residential air conditioning",
    copy: "High-efficiency residential cooling system installed for reliable comfort and strong energy performance in a Utah home.",
    img: "/cooling.png",
  },
  {
    tag: "HVAC",
    title: "Furnace installation & ductwork",
    copy: "Energy-efficient furnace with ductwork planned for even heat distribution through the whole home.",
    img: "/heating.png",
  },
  {
    tag: "HVAC",
    title: "On-site installation crew",
    copy: "Equipped service vehicles and experienced technicians ready for installs, changeouts, and emergency calls.",
    img: "/van2.png",
  },
  {
    tag: "HVAC",
    title: "Residential heating & cooling",
    copy: "Complete comfort solutions tailored to Utah’s hot summers and cold snaps—sizing and options explained clearly.",
    img: "/van.png",
  },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>About Peak HVAC Services | Utah HVAC & AC Company</title>
      <meta
        name="description"
        content="Meet Peak HVAC Services—Utah HVAC installation, AC repair, heating, and water heaters. Licensed technicians, emergency service, and honest pricing along the Wasatch Front."
      />
      <link rel="canonical" href="/about" />
    </Helmet>

    <SiteHeader />

    <main>
      <section className="relative min-h-[52vh] md:min-h-[56vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

        <motion.div
          className="absolute left-0 bottom-0 z-10 w-[100px] sm:w-[140px] md:w-[200px] lg:w-[260px] pointer-events-none origin-bottom hidden sm:block"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src="/character.png" alt="" className="w-full h-auto object-contain object-bottom" />
        </motion.div>

        <div className="relative z-10 w-full px-4 py-16 md:py-20">
          <div className="container max-w-4xl mx-auto text-center">
            <p className="text-white/90 font-bold uppercase tracking-widest text-xs md:text-sm mb-4">About our team</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight mb-4">
              Utah&apos;s trusted <span className="text-primary">HVAC &amp; AC</span> team
            </h1>
            <p className="text-base md:text-lg text-white/95 font-semibold max-w-2xl mx-auto mb-8">
              Professional HVAC installation, AC repair, and heating services throughout Utah—quality solutions you can
              count on.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <Button variant="heroPink" size="lg" className="rounded-xl gap-2 shadow-elevated" asChild>
                <a href="tel:8017382275">
                  <Phone size={18} /> (801) 738-2275
                </a>
              </Button>
              <Button variant="hero" size="lg" className="rounded-xl gap-2 shadow-elevated" asChild>
                <Link to="/contact">
                  <Calendar size={18} /> Get in touch
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-14 md:h-20 block">
            <path d="M0,40 Q360,0 720,40 T1440,40 L1440,80 L0,80 Z" fill="hsl(225, 100%, 22%)" />
          </svg>
        </div>
      </section>

      <section className="bg-[#001c70] py-5 px-4 border-b border-white/10">
        <p className="text-center text-sm md:text-base font-bold text-white max-w-3xl mx-auto">
          Licensed Utah HVAC · Emergency service when you need it · Greater Wasatch Front
        </p>
      </section>

      <CurvedDivider
        topColor={navyBlock}
        bottomColor={light}
        accentColor={mint}
        direction="up"
        transparentBottom
        className="relative z-10"
      />

      <section className="relative -mt-[80px] -mb-[80px] md:-mt-[120px] md:-mb-[120px] pt-[120px] pb-[100px] md:pt-[160px] md:pb-[120px] px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/background-1.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 z-[1]" style={{ backgroundColor: "rgba(255,255,255,0.92)" }} />
        </div>
        <div className="container max-w-6xl mx-auto relative z-10">
          <ScrollReveal>
            <p className="text-accent font-bold uppercase tracking-wide text-sm text-center mb-3">Who we are</p>
            <p className="text-center text-lg md:text-xl text-[#001c70]/90 max-w-3xl mx-auto leading-relaxed mb-12">
              Peak HVAC Services is a Utah HVAC company serving the greater Wasatch Front with heating, cooling, and
              water heater work backed by clear communication and careful installs. From same-day repairs when slots allow
              to full system replacements, we focus on work that lasts—not quick patches that fail next season.
            </p>
          </ScrollReveal>

          <ScrollRevealStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((s) => (
              <ScrollRevealItem key={s.label}>
                <div className="rounded-2xl border border-[#001c70]/12 bg-white/90 p-6 text-center shadow-sm">
                  <div className="text-3xl md:text-4xl font-extrabold text-[#001c70] font-display mb-1">{s.value}</div>
                  <div className="text-sm font-semibold text-[#001c70]/75">{s.label}</div>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealStagger>
        </div>
      </section>

      <CurvedDivider topColor={light} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />

      <section className="py-16 md:py-24 px-4 bg-accent text-accent-foreground">
        <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="w-28 h-28 rounded-2xl bg-primary/20 flex items-center justify-center text-primary font-display font-extrabold text-4xl shrink-0 border border-primary/30">
                M
              </div>
              <div>
                <p className="text-primary font-bold uppercase tracking-wide text-sm mb-1">Leadership</p>
                <h2 className="text-2xl md:text-3xl font-extrabold font-display mb-3">Mishon — Founder &amp; owner</h2>
                <p className="text-accent-foreground/85 leading-relaxed">
                  With 15 years of experience in HVAC installation, home improvement, and construction, Mishon built Peak
                  HVAC Services around straightforward service and quality craftsmanship for Utah families—whether you
                  need a tune-up, a repair, or a full equipment changeout.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="rounded-2xl bg-accent-foreground/10 border border-accent-foreground/15 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-primary shrink-0" size={28} />
                <h3 className="text-xl font-extrabold font-display">Our commitment</h3>
              </div>
              <p className="text-accent-foreground/85 leading-relaxed mb-6">
                Our technicians are licensed, insured, and background-checked. We offer emergency service when you need
                it, professional installation, and honest recommendations—with pricing explained before major work
                begins.
              </p>
              <ul className="space-y-3">
                {[
                  "Licensed & insured HVAC work",
                  "Background-checked team",
                  "24/7 emergency service available",
                  "Upfront options on repairs and replacements",
                ].map((t) => (
                  <li key={t} className="flex gap-2 text-sm font-semibold">
                    <Check className="text-primary shrink-0 mt-0.5" size={18} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CurvedDivider topColor={dark} bottomColor={white} accentColor={skyBlue} direction="up" transparentBottom className="relative z-10" />

      <section className="relative -mt-[80px] -mb-[80px] md:-mt-[120px] md:-mb-[120px] pt-[120px] pb-[100px] md:pt-[160px] md:pb-[120px] px-4 overflow-hidden bg-background">
        <div className="container max-w-6xl mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground text-center mb-3">
              What we <span className="text-primary">do</span>
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Professional HVAC and water heater services across Utah—clear scope, dependable workmanship, and respect
              for your home.
            </p>
          </ScrollReveal>

          <ScrollRevealStagger className="grid md:grid-cols-2 gap-6">
            {serviceBlocks.map((block) => (
              <ScrollRevealItem key={block.title}>
                <div className="h-full rounded-2xl border border-border bg-card shadow-card p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                      <block.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-lg md:text-xl font-extrabold font-display text-foreground">{block.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {block.bullets.map((b) => (
                      <li key={b} className="text-sm text-muted-foreground flex gap-2">
                        <Check className="text-primary shrink-0 mt-0.5" size={16} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealStagger>
        </div>
      </section>

      <CurvedDivider topColor={white} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />

      <section className="py-16 md:py-24 px-4 bg-accent text-accent-foreground">
        <div className="container max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-center mb-3">Our work</h2>
            <p className="text-center text-accent-foreground/80 max-w-2xl mx-auto mb-12">
              A sample of the installs and service work we deliver—clean workmanship and attention to detail on every job.
            </p>
          </ScrollReveal>

          <ScrollRevealStagger className="grid sm:grid-cols-2 gap-6">
            {portfolio.map((item) => (
              <ScrollRevealItem key={item.title}>
                <article className="rounded-2xl overflow-hidden border border-accent-foreground/15 bg-accent-foreground/5 shadow-sm">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={item.img} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{item.tag}</span>
                    <h3 className="text-lg font-extrabold font-display mt-1 mb-2">{item.title}</h3>
                    <p className="text-sm text-accent-foreground/80 leading-relaxed">{item.copy}</p>
                  </div>
                </article>
              </ScrollRevealItem>
            ))}
          </ScrollRevealStagger>
        </div>
      </section>

      <CurvedDivider topColor={dark} bottomColor={light} accentColor={skyBlue} direction="up" transparentBottom className="relative z-10" />

      <section className="relative -mt-[80px] md:-mt-[120px] -mb-[80px] md:-mb-[120px] pt-[120px] pb-[100px] md:pt-[160px] md:pb-[140px] px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/background-2.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 z-[1]" style={{ backgroundColor: "rgba(255,255,255,0.92)" }} />
        </div>
        <div className="container max-w-3xl mx-auto relative z-10 space-y-14 md:space-y-16">
          <ScrollReveal>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#FFC107] text-[#FFC107]" />
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold font-display text-center text-[#001c70] mb-8">
              Loved by homeowners
            </h2>
            <blockquote className="rounded-3xl border border-[#001c70]/12 bg-white/95 p-8 md:p-10 shadow-card text-center">
              <p className="text-lg md:text-xl text-[#001c70]/90 leading-relaxed font-medium">
                &ldquo;Very professional and 100% would recommend Mischon to anyone!! I&apos;ve used him many times.
                He&apos;s very experienced and does a fantastic job!!&rdquo;
              </p>
              <footer className="mt-6 text-sm font-bold text-[#001c70]">— Vera Bee</footer>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-extrabold font-display text-[#001c70] mb-3">Get your estimate</h2>
              <p className="text-[#001c70]/80 mb-8 max-w-2xl mx-auto">
                Ready for repair, maintenance, or a new system? Call us or send a message—we&apos;ll walk through options
                and scheduling.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="heroPink" size="lg" className="rounded-xl gap-2" asChild>
                  <a href="tel:8017382275">
                    <Phone size={18} /> (801) 738-2275
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-xl border-2 border-[#001c70] text-[#001c70] hover:bg-[#001c70]/5 gap-2" asChild>
<Link to="/contact">
                  Contact form <ArrowRight size={18} />
                </Link>
                </Button>
              </div>
              <p className="mt-8 text-sm text-[#001c70]/75">
                <span className="font-semibold text-[#001c70]">Service area:</span> Greater Wasatch Front — Weber, Davis,
                Utah, Salt Lake, and Summit counties.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CurvedDivider topColor={white} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />
    </main>

    <SiteFooter />
  </div>
);

export default About;

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowRight, BadgePercent, Phone } from "lucide-react";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "@/components/ScrollReveal";

const coupons = [
  { amount: "$50 Off", description: "Any Project Over $500" },
  { amount: "$150 Off", description: "Full Attic or Crawl Space Insulation" },
  { amount: "Free Estimate", description: "On Any Spray Foam Project" },
];

const faqs = [
  {
    q: "Do you offer free estimates in Greenfield, IN?",
    a: "Yes. We offer free on-site estimates for all spray foam insulation, roofing, and concrete leveling projects throughout central Indiana.",
  },
  {
    q: "Can I use a coupon for crawl space or attic insulation?",
    a: "Most coupons apply to residential insulation projects including attics, crawl spaces, and walls. Restrictions will be listed on the offer.",
  },
  {
    q: "Do coupons apply to metal building insulation?",
    a: "Yes — agricultural and commercial building insulation projects are eligible. Call us to confirm current offers.",
  },
  {
    q: "How do I redeem a coupon?",
    a: "Mention the offer when you call or text (317) 967-0505. We'll confirm eligibility and apply it to your invoice.",
  },
];

const serviceAreas = [
  "Greenfield",
  "Indianapolis",
  "Shelbyville",
  "Anderson",
  "Pendleton",
  "New Palestine",
  "Fortville",
  "McCordsville",
  "Fishers",
  "Noblesville",
];

const Coupons = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Spray Foam Insulation Coupons | Octofoam Greenfield, IN</title>
      <meta
        name="description"
        content="Save on spray foam insulation in Indiana. Octofoam offers coupons for attic insulation, crawl space insulation, metal building foam, and free estimates."
      />
      <link rel="canonical" href="/coupons" />
    </Helmet>

    <SiteHeader />

    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/coupons.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.45)" }} />
        </div>

        <div className="relative z-10 px-4 py-20 md:py-28">
          <div className="container max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-white/95 font-bold uppercase tracking-wider text-xs">
                <BadgePercent size={16} />
                Octofoam Specials
              </div>
              <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-display leading-tight">
                Insulation Coupons in <span className="text-primary">Greenfield, IN</span>
              </h1>
              <p className="mt-4 text-white/90 text-lg md:text-xl max-w-2xl">
                Save on attic insulation, crawl space sealing, metal building foam, and more across central Indiana.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" variant="hero" className="rounded-xl gap-2">
                  <a href="tel:3179670505">
                    <Phone size={18} /> Call (317) 967-0505
                  </a>
                </Button>
                <Button asChild size="lg" variant="heroWarm" className="rounded-xl gap-2">
                  <a href="#offers">
                    View Offers <ArrowRight size={18} />
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="offers" className="px-4 py-16 md:py-20">
        <div className="container max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground font-display">
              Current <span className="text-gradient">Coupons & Specials</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Mention the offer when you call. We'll confirm eligibility and apply it at checkout.
            </p>
          </ScrollReveal>

          <ScrollRevealStagger className="mt-10 grid md:grid-cols-3 gap-6 items-stretch">
            {coupons.map((c) => (
              <ScrollRevealItem key={c.amount} className="h-full">
                <div className="h-full rounded-3xl border border-border bg-card shadow-card p-8 flex flex-col">
                  <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center mb-5">
                    <BadgePercent className="text-primary" />
                  </div>
                  <div className="text-4xl font-extrabold text-foreground font-display">{c.amount}</div>
                  <div className="mt-2 text-lg font-semibold text-foreground/90">{c.description}</div>
                  <div className="mt-6 flex-1" />
                  <Button asChild variant="default" className="rounded-xl font-bold">
                    <a href="tel:3179670505">Redeem by Phone</a>
                  </Button>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealStagger>
        </div>
      </section>

      <section className="px-4 pb-16 md:pb-20">
        <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <ScrollReveal variant="slideLeft">
            <div className="rounded-3xl border border-border bg-card shadow-card p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground font-display">
                Why Indiana Homeowners Use Insulation Coupons
              </h2>
              <ul className="mt-5 space-y-3 text-muted-foreground">
                <li>Save on spray foam for attics, crawl spaces, and walls.</li>
                <li>Lower the cost of agricultural and metal building insulation.</li>
                <li>Get help budgeting for SPF roof coatings and concrete leveling.</li>
              </ul>
              <div className="mt-7">
                <Button asChild variant="link" className="p-0 text-[#5c97d0] hover:text-[#5c97d0]/80 font-bold">
                  <a href="/contact">Get a Free Estimate <ArrowRight size={16} /></a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slideRight">
            <div className="rounded-3xl border border-border bg-muted shadow-card p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground font-display">
                Insulation Coupon FAQ
              </h2>
              <div className="mt-6 space-y-4">
                {faqs.map((f) => (
                  <details key={f.q} className="group rounded-2xl bg-white border border-border px-5 py-4">
                    <summary className="cursor-pointer list-none font-bold text-foreground flex items-center justify-between gap-4">
                      {f.q}
                      <span className="text-muted-foreground group-open:rotate-180 transition-transform">▾</span>
                    </summary>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="container max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="rounded-3xl bg-accent text-accent-foreground p-10 md:p-12 shadow-elevated overflow-hidden relative">
              <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-blue)" }} />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold font-display">
                  Serving Greenfield, IN &amp; Surrounding Areas
                </h2>
                <p className="mt-3 text-accent-foreground/85 max-w-2xl">
                  We provide spray foam insulation and honor coupons across central Indiana including:
                </p>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {serviceAreas.map((a) => (
                    <div key={a} className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 font-semibold">
                      {a}
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button asChild variant="hero" size="lg" className="rounded-xl gap-2">
                    <a href="tel:3179670505">
                      Get Today's Price <ArrowRight size={18} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
);

export default Coupons;

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowRight, BadgePercent, Phone } from "lucide-react";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "@/components/ScrollReveal";

const coupons = [
  { amount: "$50 Off", description: "Any Repair Over $300" },
  { amount: "$250 Off", description: "Any New Installation" },
  { amount: "Free Estimate", description: "On New HVAC System Replacements" },
];

const faqs = [
  {
    q: "Do you offer HVAC coupons in Salt Lake City, UT?",
    a: "Yes. We offer seasonal HVAC coupons for residents throughout Salt Lake City and surrounding areas in Utah. Availability can change, so check back often.",
  },
  {
    q: "Can I use a coupon for AC repair or furnace repair?",
    a: "Most coupons apply to common services like AC repair, furnace repair, maintenance visits, and new installations. If a coupon has restrictions, they’ll be listed on the offer.",
  },
  {
    q: "Do coupons work for HVAC installation in Utah?",
    a: "Yes—installation discounts are common. They’re especially helpful for new furnace installs, AC installs, and full HVAC replacements.",
  },
  {
    q: "How do I redeem a coupon?",
    a: "Call us and mention the coupon, or bring the offer with you. We’ll confirm eligibility and apply it to your invoice when the service is completed.",
  },
];

const serviceAreas = [
  "Salt Lake City",
  "Sandy",
  "West Jordan",
  "South Jordan",
  "Draper",
  "Murray",
  "Cottonwood Heights",
  "Riverton",
  "Herriman",
  "Millcreek",
];

const Coupons = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>HVAC Coupons in Utah | Discounts on AC & Heating Service</title>
      <meta
        name="description"
        content="Save on HVAC services in Utah. Explore coupons for AC repair, furnace repair, HVAC maintenance, and new installations in Salt Lake County."
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
                Utah HVAC Specials
              </div>
              <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-display leading-tight">
                HVAC Coupons in <span className="text-primary">Utah</span>
              </h1>
              <p className="mt-4 text-white/90 text-lg md:text-xl max-w-2xl">
                Save on AC repair, heating service, maintenance, and new installations across Salt Lake County.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" variant="hero" className="rounded-xl gap-2">
                  <a href="tel:8017382275">
                    <Phone size={18} /> Call (801) 738-2275
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
              Mention the offer when you call. We’ll confirm eligibility and apply it at checkout.
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
                    <a href="tel:8017382275">Redeem by Phone</a>
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
                Why Utah Homeowners Use HVAC Coupons
              </h2>
              <ul className="mt-5 space-y-3 text-muted-foreground">
                <li>Save on common repairs like AC issues, furnace problems, and airflow concerns.</li>
                <li>Lower the cost of preventive maintenance and tune-ups.</li>
                <li>Get help budgeting for new HVAC installations and replacements.</li>
              </ul>
              <div className="mt-7">
                <Button asChild variant="link" className="p-0 text-[#001c70] hover:text-[#001c70]/80 font-bold">
                  <a href="/air-conditioning">Explore AC Services <ArrowRight size={16} /></a>
                </Button>
                <div className="mt-2" />
                <Button asChild variant="link" className="p-0 text-[#001c70] hover:text-[#001c70]/80 font-bold">
                  <a href="/heating">Explore Heating Services <ArrowRight size={16} /></a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slideRight">
            <div className="rounded-3xl border border-border bg-muted shadow-card p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground font-display">
                HVAC Coupon FAQ
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
                  Serving Salt Lake County & Nearby Areas
                </h2>
                <p className="mt-3 text-accent-foreground/85 max-w-2xl">
                  We provide HVAC service and honor coupons across Utah communities including:
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
                    <a href="tel:8017382275">
                      Get Today’s Price <ArrowRight size={18} />
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


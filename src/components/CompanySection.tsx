import { CheckCircle, Calendar, Zap, DollarSign, CalendarCheck, ShieldCheck, ThumbsUp } from "lucide-react";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "@/components/ScrollReveal";

const benefits = [
  "Spray Foam Insulation for Residential & Commercial",
  "Agricultural & Metal Building Insulation Specialists",
  "SPF Roof Coating Services Available",
  "Serving Greenfield, IN and Surrounding Areas",
];

const features = [
  { icon: Zap, title: "FREE\nESTIMATES" },
  { icon: DollarSign, title: "COMPETITIVE PRICING" },
  { icon: CalendarCheck, title: "FAST & EASY SCHEDULING" },
  { icon: ShieldCheck, title: "LICENSED & FULLY INSURED" },
  { icon: ThumbsUp, title: "SATISFACTION GUARANTEE" },
];

const CompanySection = () => (
  <section className="relative -mt-[80px] -mb-[80px] md:-mt-[120px] md:-mb-[120px] pt-[120px] pb-[120px] md:pt-[160px] md:pb-[160px] px-4 overflow-hidden">
    <div className="absolute inset-0">
      <img src="/octofoam-images/bigstock-Roof-Insulation-In-Attic-With--469350977-1920w.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 z-[1]" style={{ backgroundColor: "rgba(255,255,255,0.92)" }} />
    </div>
    <div className="container max-w-6xl mx-auto relative z-10">
      {/* Top: Two columns - content left, image right */}
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 mb-8">
        {/* Left content */}
        <ScrollReveal className="flex-1 order-2 lg:order-1">
          <p className="text-accent font-bold uppercase tracking-wide mb-3">
            Professional Spray Foam Insulation Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 font-display text-foreground uppercase">
            Octofoam — Your Insulation Company in{" "}
            <span className="text-accent">Greenfield, IN</span>
          </h2>
          <ul className="space-y-3 mb-8">
            {benefits.map((b) => (
              <li key={b}>
                <div className="flex items-center gap-3 bg-accent rounded-xl px-4 py-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={18} className="text-accent" />
                  </div>
                  <span className="text-accent-foreground font-semibold">{b}</span>
                </div>
              </li>
            ))}
          </ul>
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors">
            <Calendar size={20} />
            GET A FREE ESTIMATE
          </button>
        </ScrollReveal>

        {/* Right image - taller with background accent frame */}
        <ScrollReveal variant="slideRight" className="flex-1 order-1 lg:order-2 w-full lg:max-w-lg">
          <div className="relative p-4 rounded-2xl border-4 border-[#634390] bg-primary/5">
            {/* Corner foliage accents - top left */}
            <div className="absolute top-2 left-2 w-20 h-20 opacity-25 pointer-events-none">
              <svg viewBox="0 0 80 80" fill="none" className="w-full h-full text-primary">
                <path d="M10 40 Q30 20 50 40 Q40 50 30 35 Q20 45 10 40" fill="currentColor" opacity="0.6" />
                <path d="M15 35 Q35 15 55 35 Q45 48 35 32" fill="currentColor" opacity="0.4" />
              </svg>
            </div>
            {/* Corner foliage accents - top right */}
            <div className="absolute top-2 right-2 w-20 h-20 opacity-25 pointer-events-none scale-x-[-1]">
              <svg viewBox="0 0 80 80" fill="none" className="w-full h-full text-primary">
                <path d="M10 40 Q30 20 50 40 Q40 50 30 35 Q20 45 10 40" fill="currentColor" opacity="0.6" />
                <path d="M15 35 Q35 15 55 35 Q45 48 35 32" fill="currentColor" opacity="0.4" />
              </svg>
            </div>
            <img
              src="/octofoam-images/rigwithbarn1+-+octofoam-1920w.webp"
              alt="Octofoam spray foam insulation"
              className="relative z-10 w-full min-h-[420px] md:min-h-[520px] object-cover object-center rounded-xl"
            />
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom: 5 feature cards */}
      <ScrollRevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {features.map((f) => (
          <ScrollRevealItem key={f.title}>
            <div className="bg-primary rounded-2xl p-6 text-center flex flex-col items-center gap-4">
              <f.icon size={32} className="text-primary-foreground" />
              <h3 className="font-bold text-sm text-primary-foreground uppercase tracking-wide whitespace-pre-line">
                {f.title}
              </h3>
            </div>
          </ScrollRevealItem>
        ))}
      </ScrollRevealStagger>
    </div>
  </section>
);

export default CompanySection;

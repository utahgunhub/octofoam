import {
  Home,
  Building2,
  Layers,
  Droplets,
  ShieldCheck,
  MoveVertical,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "@/components/ScrollReveal";

const services = [
  {
    icon: Home,
    title: "Attic Insulation",
    description: "Keep your attic at a stable temperature throughout the year with professional spray foam.",
  },
  {
    icon: Layers,
    title: "Crawl Space Insulation",
    description: "Don't leave your crawl space uninsulated. We seal and protect it from moisture and air intrusion.",
  },
  {
    icon: Building2,
    title: "Metal Building Insulation",
    description: "Protect your metal building with spray foam insulation that lasts longer than traditional options.",
  },
  {
    icon: MoveVertical,
    title: "Concrete Leveling",
    description: "We can level out your concrete quickly and professionally.",
  },
  {
    icon: ShieldCheck,
    title: "SPF Roof Coatings",
    description: "Give your roof extra protection with spray polyurethane foam roof coating services.",
  },
  {
    icon: Droplets,
    title: "Agricultural Foam",
    description: "Spray foam built for farms — barns, grain bins, and metal ag buildings insulated right.",
  },
];

const CommitmentSection = () => (
  <section id="services" className="py-20 px-4 bg-accent">
    <div className="container max-w-6xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 font-display text-accent-foreground">
          Our Insulation Services
        </h2>
        <p className="text-accent-foreground/80 text-center text-lg mb-12 max-w-2xl mx-auto">
          From attic insulation to SPF roof coatings, Octofoam handles it all for agricultural, commercial, and residential clients.
        </p>
      </ScrollReveal>
      <ScrollRevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <ScrollRevealItem key={s.title} className="h-full">
          <div
            className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-white hover:bg-white/90 transition-colors h-full"
          >
            <div className="w-12 h-12 rounded-xl bg-[#634390]/15 flex items-center justify-center flex-shrink-0">
              <s.icon size={24} className="text-[#634390]" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground mb-2 font-display">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          </div>
          </ScrollRevealItem>
        ))}
      </ScrollRevealStagger>
      <ScrollReveal>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
        <Button variant="hero" size="lg" className="gap-2 rounded-xl shadow-elevated" asChild>
          <a href="/contact">
            Get a Free Quote
            <ArrowRight size={18} />
          </a>
        </Button>
        <Button size="lg" className="gap-2 rounded-xl shadow-elevated bg-[#634390] hover:bg-[#634390]/90 text-white font-bold" asChild>
          <a href="tel:3179670505">
            Call (317) 967-0505
            <ArrowRight size={18} />
          </a>
        </Button>
      </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CommitmentSection;

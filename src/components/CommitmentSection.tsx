import {
  Wrench,
  Flame,
  Snowflake,
  Thermometer,
  ShieldCheck,
  Wind,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "@/components/ScrollReveal";

const services = [
  {
    icon: Wrench,
    title: "Furnace Repair",
    description: "Fast, reliable furnace repairs to get your heat back on.",
  },
  {
    icon: Flame,
    title: "Furnace Installation",
    description: "New furnace installations for residential and commercial.",
  },
  {
    icon: Snowflake,
    title: "AC Repair",
    description: "Expert air conditioning repair when you need it most.",
  },
  {
    icon: Thermometer,
    title: "AC Installation",
    description: "Professional AC installation for lasting comfort.",
  },
  {
    icon: ShieldCheck,
    title: "HVAC Maintenance",
    description: "Preventative tune-ups to extend equipment life.",
  },
  {
    icon: Wind,
    title: "Duct Cleaning",
    description: "Improve airflow and air quality with professional duct cleaning.",
  },
];

const CommitmentSection = () => (
  <section id="services" className="py-20 px-4 bg-accent">
    <div className="container max-w-6xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 font-display text-accent-foreground">
          Our <span className="text-primary">HVAC Services</span>
        </h2>
        <p className="text-accent-foreground/80 text-center text-lg mb-12 max-w-2xl mx-auto">
          From furnace repair to AC installation, we handle it all. Same-day service available.
        </p>
      </ScrollReveal>
      <ScrollRevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <ScrollRevealItem key={s.title}>
          <div
            className="flex items-start gap-4 p-6 rounded-2xl bg-accent-foreground/10 border border-accent-foreground/10 hover:bg-accent-foreground/15 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <s.icon size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-accent-foreground mb-2 font-display">
                {s.title}
              </h3>
              <p className="text-accent-foreground/80 text-sm leading-relaxed">
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
          <a href="/air-conditioning">
            Air Conditioning Services
            <ArrowRight size={18} />
          </a>
        </Button>
        <Button variant="heroPink" size="lg" className="gap-2 rounded-xl shadow-elevated" asChild>
          <a href="/heating">
            Heating Services
            <ArrowRight size={18} />
          </a>
        </Button>
      </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CommitmentSection;

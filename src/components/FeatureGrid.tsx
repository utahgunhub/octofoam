import { Zap, DollarSign, CalendarCheck, ShieldCheck, ThumbsUp } from "lucide-react";

const features = [
  { icon: Zap, title: "Same Day Installations" },
  { icon: DollarSign, title: "Price Match Guarantee" },
  { icon: CalendarCheck, title: "Fast & Easy Scheduling" },
  { icon: ShieldCheck, title: "Licensed & Fully Insured" },
  { icon: ThumbsUp, title: "Satisfaction Guarantee" },
];

const FeatureGrid = () => (
  <section className="py-20 px-4 bg-accent">
    <div className="container max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 font-display text-accent-foreground uppercase tracking-wide">
        Why Choose Peak HVAC?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-accent-foreground/10 backdrop-blur-sm rounded-2xl p-6 shadow-card text-center hover:bg-accent-foreground/20 transition-colors group"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/20 text-secondary mb-4 group-hover:scale-110 transition-transform">
              <f.icon size={28} />
            </div>
            <h3 className="font-bold text-sm text-accent-foreground font-display">{f.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureGrid;

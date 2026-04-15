import { CheckCircle } from "lucide-react";
import truckImg from "@/assets/truck-commercial.jpg";

const benefits = [
  "Affordable HVAC Services",
  "Wide Range of Heating & Cooling Solutions",
  "Fast and Reliable Repairs",
  "Serving Salt Lake City Since 1987",
];

const ExpertsSection = () => (
  <section className="py-20 px-4 bg-background">
    <div className="container max-w-6xl mx-auto">
      <p className="text-secondary font-bold uppercase tracking-wide mb-2">Expert Heating & Air Conditioning Services</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 font-display text-foreground">
        Your Local <span className="text-gradient">HVAC Experts</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-5">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-4">
              <CheckCircle size={28} className="text-primary flex-shrink-0" />
              <span className="text-lg font-semibold text-foreground">{b}</span>
            </div>
          ))}
        </div>
        <div className="flex-1">
          <img
            src={truckImg}
            alt="HVAC service truck at commercial building"
            className="rounded-2xl shadow-elevated w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ExpertsSection;

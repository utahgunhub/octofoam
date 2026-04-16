import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

const advantages = [
  "Prevents moisture and air intrusion",
  "Insulates more effectively than fiberglass",
  "Protects against allergens, mold and pollutants",
  "Adds structural stability to your property",
  "Lasts longer than traditional insulation",
];

const CouponCards = () => (
  <section id="advantages" className="relative -mt-[80px] -mb-[80px] md:-mt-[120px] md:-mb-[120px] pt-[104px] pb-[104px] md:pt-[144px] md:pb-[144px] px-4 overflow-hidden">
    <div className="absolute inset-0">
      <img src="/octofoam-images/rigwithbarn1+-+octofoam-1920w.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 z-[1]" style={{ backgroundColor: "rgba(255,255,255,0.92)" }} />
    </div>
    <div className="container max-w-5xl mx-auto relative z-10">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 font-display text-foreground uppercase tracking-wide">
          Learn About the Advantages of Spray Foam
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          You'll want to schedule our professional spray foam insulation services for several reasons. Spray foam is great because it:
        </p>
      </ScrollReveal>

      <ScrollRevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {advantages.map((a) => (
          <ScrollRevealItem key={a}>
            <div className="flex items-start gap-3 bg-white rounded-2xl border border-border shadow-card p-5">
              <div className="w-8 h-8 rounded-full bg-[#634390] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={16} className="text-white" />
              </div>
              <p className="text-foreground font-semibold leading-snug">{a}</p>
            </div>
          </ScrollRevealItem>
        ))}
      </ScrollRevealStagger>

      <ScrollReveal>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          If you want to save money in the future, invest in our professional spray foam insulation services today.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg" className="gap-2 rounded-xl bg-[#634390] hover:bg-[#634390]/90 text-white font-bold" asChild>
            <Link to="/contact">
              Get a Free Quote <ArrowRight size={18} />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 rounded-xl border-2 border-[#634390] text-[#634390] hover:bg-[#634390]/5 font-bold" asChild>
            <a href="tel:3179670505">
              Call (317) 967-0505
            </a>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CouponCards;

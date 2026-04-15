import { Star } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Peak HVAC saved us during a freezing winter night. Their technician arrived within an hour and had our furnace running in no time. Mike and the rest of the team were so great to work with. Incredible service!",
    rating: 5,
  },
  {
    name: "James R.",
    text: "We've used Peak HVAC for our maintenance plan for 3 years now. Always professional, always on time. The technician was very friendly and took time to explain the work. Our AC has never run better. Highly recommend!",
    rating: 5,
  },
  {
    name: "Linda K.",
    text: "The team was fast. They removed the old AC and installed the new units in around 6 hours. Every team member was friendly and courteous. The $250 off coupon was a great bonus! Thank you Peak HVAC!",
    rating: 5,
  },
  {
    name: "David T.",
    text: "Best HVAC company in the valley. They fixed our furnace in under an hour and the price was fair. Will definitely use them again for our AC tune-up this spring.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    text: "Professional from start to finish. The new AC installation was seamless and our home has never been more comfortable. Peak HVAC is our go-to for all heating and cooling needs.",
    rating: 5,
  },
  {
    name: "Robert H.",
    text: "Called for an emergency repair on a Saturday. They came out same day and had our heat back on before dinner. Outstanding customer service and fair pricing.",
    rating: 5,
  },
];

const TestimonialCard = ({ t }: { t: (typeof testimonials)[0] }) => (
  <div className="flex-shrink-0 w-[340px] md:w-[400px] flex flex-col items-center">
    <div className="bg-card rounded-2xl p-6 shadow-elevated relative mb-6">
      <p className="text-muted-foreground leading-relaxed italic text-sm">
        {t.text}
      </p>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-card" />
    </div>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center text-secondary font-bold font-display">
        {t.name[0]}
      </div>
      <span className="font-bold text-accent-foreground font-display">{t.name}</span>
    </div>
    <div className="flex gap-0.5 mt-2">
      {[...Array(t.rating)].map((_, i) => (
        <Star key={i} size={14} className="fill-[#FFC107] text-[#FFC107]" />
      ))}
    </div>
  </div>
);

const Testimonials = () => (
  <section className="relative py-20 bg-accent overflow-hidden">
    <ScrollReveal>
    <div className="container max-w-6xl mx-auto mb-12 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 font-display text-accent-foreground uppercase tracking-wide">
        Customer Testimonials
      </h2>
      <p className="text-center text-secondary font-bold text-xl uppercase tracking-wide">
        See What Our Customers Are Saying!
      </p>
    </div>
    </ScrollReveal>
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-8"
        style={{
          animation: "testimonial-marquee 80s linear infinite",
          width: "max-content",
        }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

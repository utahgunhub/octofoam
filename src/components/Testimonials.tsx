import { Star } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Vera B.",
    text: "Very professional and 100% would recommend Octofoam to anyone!! I've used them many times. They're very experienced and do a fantastic job every time!!",
    rating: 5,
  },
  {
    name: "Tom H.",
    text: "Octofoam insulated our metal barn and the difference in temperature is remarkable. The crew was fast, clean, and professional. Couldn't be happier with the results.",
    rating: 5,
  },
  {
    name: "Karen M.",
    text: "Had our attic done last fall and our heating bills have dropped significantly. Great team to work with — they explained everything and finished on time.",
    rating: 5,
  },
  {
    name: "Dave R.",
    text: "We hired Octofoam for our crawl space. They were on time, reasonably priced, and did excellent work. The crawl space is completely sealed now. Highly recommend.",
    rating: 5,
  },
  {
    name: "Jessica L.",
    text: "Professional from start to finish. The spray foam insulation in our new construction home has made a huge difference. Octofoam is our go-to for insulation needs.",
    rating: 5,
  },
  {
    name: "Mark S.",
    text: "Used Octofoam for our commercial building. The SPF roof coating has held up great and our energy costs are down. Fair pricing and outstanding workmanship.",
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
      <div className="w-10 h-10 rounded-full bg-[#7cbb5a] flex items-center justify-center text-white font-bold font-display">
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
      <p className="text-center font-bold text-xl uppercase tracking-wide" style={{ color: "#634390" }}>
        See What Our Clients Are Saying!
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

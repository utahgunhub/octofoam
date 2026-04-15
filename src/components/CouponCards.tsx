import { Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "@/components/ScrollReveal";

const coupons = [
  {
    amount: "$50 Off",
    description: "Any Repair Over $300",
  },
  {
    amount: "$250 Off",
    description: "Any New Installation",
  },
];

const CouponCard = ({ c, i }: { c: (typeof coupons)[0]; i: number }) => (
  <div className="relative rounded-3xl p-[4px] overflow-visible">
    {/* Animated dotted border - matches rounded-3xl (24px / 400px ≈ 6% of width) */}
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {/* Path matching rounded-3xl (24px radius ≈ 6% of card width) */}
      <path
        d="M 7,1 L 93,1 A 6,6 0 0 1 99,7 L 99,93 A 6,6 0 0 1 93,99 L 7,99 A 6,6 0 0 1 1,93 L 1,7 A 6,6 0 0 1 7,1"
        fill="none"
        stroke="#000"
        strokeWidth="0.75"
        strokeDasharray="5 5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          animation: "coupon-dash 6s linear infinite",
        }}
      />
    </svg>
    <div
      className={`relative z-10 ${i === 0 ? "bg-primary" : "bg-secondary"} rounded-3xl p-8 text-center shadow-elevated min-h-[200px] flex flex-col items-center justify-center`}
    >
      <Tag size={40} className="mx-auto mb-4 text-primary-foreground/80" />
      <h3 className="text-4xl font-extrabold text-primary-foreground mb-2 font-display">
        {c.amount}
      </h3>
      <p className="text-xl text-primary-foreground/90 mb-6 font-semibold">
        {c.description}
      </p>
      <Button variant="heroWarm" size="lg" className="rounded-xl">
        Redeem Now
      </Button>
    </div>
  </div>
);

const CouponCards = () => (
  <section id="coupons" className="relative -mt-[80px] -mb-[80px] md:-mt-[120px] md:-mb-[120px] pt-[104px] pb-[104px] md:pt-[144px] md:pb-[144px] px-4 overflow-hidden">
    <div className="absolute inset-0">
      <img src="/background-2.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 z-[1]" style={{ backgroundColor: "rgba(255,255,255,0.92)" }} />
    </div>
    <div className="container max-w-4xl mx-auto relative z-10">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 font-display text-foreground uppercase tracking-wide">
          Exclusive Coupons
        </h2>
      </ScrollReveal>
      <ScrollRevealStagger className="grid md:grid-cols-2 gap-8">
        {coupons.map((c, i) => (
          <ScrollRevealItem key={c.amount}>
            <CouponCard c={c} i={i} />
          </ScrollRevealItem>
        ))}
      </ScrollRevealStagger>
    </div>
  </section>
);

export default CouponCards;

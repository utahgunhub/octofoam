import { Snowflake, Flame, Tag } from "lucide-react";
import { ScrollRevealStagger, ScrollRevealItem } from "@/components/ScrollReveal";

const services = [
  {
    icon: Snowflake,
    title: "Cooling",
    description:
      "AC repair, installation, and maintenance. Stay comfortable all summer with expert air conditioning service from Salt Lake County's trusted HVAC team.",
    image: "/cooling.png",
  },
  {
    icon: Flame,
    title: "Heating",
    description:
      "Furnace repair, installation, and maintenance. Keep your home warm all winter with reliable heating service from our certified technicians.",
    image: "/heating.png",
  },
  {
    icon: Tag,
    title: "Coupons",
    description:
      "Save on HVAC services with our exclusive coupons. Discounts on air conditioning repairs, heating installations, and more.",
    image: "/coupons.png",
  },
];

const ServiceCards = () => (
  <section className="py-20 px-4 bg-[#001c70]">
    <div className="container max-w-6xl mx-auto">
      <ScrollRevealStagger className="grid md:grid-cols-3 gap-8 items-stretch">
        {services.map((s) => (
          <ScrollRevealItem key={s.title} className="h-full">
            <div
              className="relative bg-[#001c70] rounded-3xl shadow-elevated flex flex-col h-full min-h-[420px]"
            >
            {/* Image - top third */}
            <div className="h-48 md:h-56 overflow-hidden rounded-t-3xl flex-shrink-0">
              <img
                src={s.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {/* Icon - positioned between image and content, outside overflow containers */}
            <div className="absolute left-1/2 -translate-x-1/2 z-10 top-[calc(12rem-1.75rem)] md:top-[calc(14rem-1.75rem)]">
              <div className="w-16 h-16 rounded-xl bg-primary border-2 border-white flex items-center justify-center shadow-lg p-2">
                <s.icon size={28} className="text-primary-foreground shrink-0" />
              </div>
            </div>
            {/* Content - bottom two thirds, text in #001c70 */}
            <div className="flex-1 bg-white pt-10 pb-8 px-6 rounded-b-3xl flex flex-col min-h-0">
              <h3 className="text-xl font-bold mb-3 font-display text-[#001c70]">
                {s.title}
              </h3>
              <p className="text-[#001c70]/90 text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
            </div>
          </ScrollRevealItem>
        ))}
      </ScrollRevealStagger>
    </div>
  </section>
);

export default ServiceCards;

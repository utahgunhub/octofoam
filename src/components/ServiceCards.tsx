import { Home, Layers, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollRevealStagger, ScrollRevealItem } from "@/components/ScrollReveal";

const services = [
  {
    icon: Home,
    title: "Attic Insulation",
    description: "Keep your attic at a stable temperature throughout the year.",
    image: "/octofoam-images/attic+insulation+BUTTON+image+-+octofoam-1920w.webp",
    href: "/attic-insulation",
  },
  {
    icon: Layers,
    title: "Crawl Space Insulation",
    description: "Don't leave your crawl space without insulation.",
    image: "/octofoam-images/crawl+space+BUTTON+image+-+octofoam-1920w.webp",
    href: "/crawl-space-insulation",
  },
  {
    icon: Building2,
    title: "Metal Building Insulation",
    description: "Protect your metal building with spray foam insulation.",
    image: "/octofoam-images/metal+Building+BUTTON+image+-+octo-1920w.webp",
    href: "/metal-building-insulation",
  },
];

const ServiceCards = () => (
  <section className="py-8 px-4 bg-[#7cbb5a]">
    <div className="container max-w-6xl mx-auto">
      <ScrollRevealStagger className="grid md:grid-cols-3 gap-8 items-stretch">
        {services.map((s) => (
          <ScrollRevealItem key={s.title} className="h-full">
            <div
              className="relative bg-[#7cbb5a] rounded-3xl flex flex-col h-full min-h-[420px]"
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
              <div className="w-16 h-16 rounded-xl bg-[#634390] border-2 border-white flex items-center justify-center shadow-lg p-2">
                <s.icon size={28} className="text-white shrink-0" />
              </div>
            </div>
            {/* Content - bottom two thirds */}
            <div className="flex-1 bg-white pt-10 pb-8 px-6 rounded-b-3xl flex flex-col min-h-0">
              <h3 className="text-xl font-bold mb-3 font-display text-[#5c97d0]">
                {s.title}
              </h3>
              <p className="text-[#5c97d0]/90 text-sm leading-relaxed mb-4">
                {s.description}
              </p>
              <div className="mt-auto">
                <Link
                  to={s.href}
                  className="inline-flex items-center gap-1 text-sm font-bold text-[#634390] hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            </div>
          </ScrollRevealItem>
        ))}
      </ScrollRevealStagger>
    </div>
  </section>
);

export default ServiceCards;

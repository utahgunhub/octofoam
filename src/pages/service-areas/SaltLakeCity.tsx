import { MapPin, ShieldCheck, Wrench } from "lucide-react";
import ServiceAreaPageLayout from "@/components/service-pages/ServiceAreaPageLayout";
import { saltLakeCityAreaContent } from "@/content/serviceAreaRegions";

const features = [
  {
    icon: MapPin,
    title: "Salt Lake County routes",
    description:
      "We plan dispatch across the valley so SLC, Sandy, Draper, and west-side cities get timely arrivals—not all-day windows that waste your day.",
  },
  {
    icon: Wrench,
    title: "Everyday HVAC, done right",
    description:
      "Furnace repair, AC repair, installs, and tune-ups from techs who document findings and stand behind their workmanship.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & upfront",
    description:
      "Utah-licensed work with clear options before major repairs or replacements—no scare tactics, just honest recommendations.",
  },
];

const SaltLakeCity = () => (
  <ServiceAreaPageLayout
    content={saltLakeCityAreaContent}
    heroHeading={
      <>
        HVAC in <span className="text-primary">Salt Lake City</span> &amp; county
      </>
    }
    heroSubhead="AC repair, furnace service & installation across Salt Lake County, Utah"
    features={features}
    relatedAreas={[
      { label: "Utah County", to: "/service-areas/utah-county" },
      { label: "Davis County", to: "/service-areas/davis-county" },
    ]}
    contentBackground="2"
  />
);

export default SaltLakeCity;

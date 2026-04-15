import { MapPin, ShieldCheck, Wrench } from "lucide-react";
import ServiceAreaPageLayout from "@/components/service-pages/ServiceAreaPageLayout";
import { utahCountyAreaContent } from "@/content/serviceAreaRegions";

const features = [
  {
    icon: MapPin,
    title: "Utah County coverage",
    description:
      "From Provo and Orem to Lehi and Spanish Fork, we structure service runs along I-15 and the bench so help reaches you faster.",
  },
  {
    icon: Wrench,
    title: "Heat pumps to furnaces",
    description:
      "Newer high-efficiency gear and legacy systems alike—diagnostics, repairs, replacements, and seasonal maintenance under one team.",
  },
  {
    icon: ShieldCheck,
    title: "Straight answers",
    description:
      "We explain what failed, what it costs to fix, and when replacement saves money—so Utah County homeowners can decide with confidence.",
  },
];

const UtahCounty = () => (
  <ServiceAreaPageLayout
    content={utahCountyAreaContent}
    heroHeading={
      <>
        HVAC in <span className="text-primary">Utah County</span>
      </>
    }
    heroSubhead="Provo, Orem, Lehi & surrounding cities—repair, install & maintenance"
    features={features}
    relatedAreas={[
      { label: "Salt Lake City area", to: "/service-areas/salt-lake-city" },
      { label: "Davis County", to: "/service-areas/davis-county" },
    ]}
    contentBackground="3"
  />
);

export default UtahCounty;

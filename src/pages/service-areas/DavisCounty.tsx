import { MapPin, ShieldCheck, Wrench } from "lucide-react";
import ServiceAreaPageLayout from "@/components/service-pages/ServiceAreaPageLayout";
import { davisCountyAreaContent } from "@/content/serviceAreaRegions";

const features = [
  {
    icon: MapPin,
    title: "Bench to I-15",
    description:
      "Bountiful bench down through Layton, Clearfield, and Syracuse—we know Davis County’s mix of older ranches and new construction.",
  },
  {
    icon: Wrench,
    title: "Full-service HVAC",
    description:
      "Emergency repairs, planned replacements, and maintenance that keeps filters, coils, and burners in shape through Utah’s seasons.",
  },
  {
    icon: ShieldCheck,
    title: "Respect for your home",
    description:
      "Floor protection, tidy work areas, and invoices that match what we said on the phone—standard for every Davis County visit.",
  },
];

const DavisCounty = () => (
  <ServiceAreaPageLayout
    content={davisCountyAreaContent}
    heroHeading={
      <>
        HVAC in <span className="text-primary">Davis County</span>
      </>
    }
    heroSubhead="Layton, Bountiful, Farmington & more—trusted heating & cooling"
    features={features}
    relatedAreas={[
      { label: "Salt Lake City area", to: "/service-areas/salt-lake-city" },
      { label: "Utah County", to: "/service-areas/utah-county" },
    ]}
    contentBackground="4"
  />
);

export default DavisCounty;

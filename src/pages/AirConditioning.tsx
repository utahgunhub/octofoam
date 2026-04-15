import { Link } from "react-router-dom";
import AcServicePageLayout from "@/components/service-pages/AcServicePageLayout";
import { Snowflake, Thermometer, Wind, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Snowflake,
    title: "AC repair",
    description:
      "Diagnose refrigerant issues, electrical faults, and airflow problems so your Salt Lake County home cools reliably all summer.",
  },
  {
    icon: Thermometer,
    title: "AC installation",
    description:
      "Right-sized equipment, clean installs, and options that fit Utah’s climate—from central air to heat pumps.",
  },
  {
    icon: Wind,
    title: "AC maintenance",
    description:
      "Tune-ups that cut breakdown risk, protect warranties, and keep efficiency strong through Wasatch Front heat.",
  },
  {
    icon: MapPin,
    title: "Local Utah team",
    description:
      "We serve Salt Lake City, Sandy, West Jordan, Murray, Draper, and communities throughout the valley.",
  },
  {
    icon: Phone,
    title: "Clear communication",
    description:
      "Upfront explanations and honest recommendations—no pressure, just professional HVAC guidance.",
  },
];

const AirConditioning = () => (
  <AcServicePageLayout
    visualVariant="hub"
    helmetTitle="Air Conditioning Services Utah | AC Repair & Install Salt Lake County"
    helmetDescription="Peak HVAC Services: AC repair, installation, and maintenance in Salt Lake City & Salt Lake County, Utah. Licensed technicians, same-day when possible. Call (801) 738-2275."
    canonicalPath="/air-conditioning"
    heroHeading={
      <>
        Air Conditioning in <span className="text-primary">Utah</span>
      </>
    }
    heroSubhead="Repair, installation, and tune-ups for homes and businesses along the Wasatch Front."
    featuresHeading={
      <>
        Complete <span className="text-primary">cooling</span> for your home
      </>
    }
    featuresIntro="Local team, clear options, and service tuned for Utah summers."
    features={features}
  >
    <p className="text-accent font-bold uppercase tracking-wide text-sm">Salt Lake County · Utah HVAC</p>
    <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground">
      Air conditioning services built for Utah’s climate
    </h2>
    <p>
      Hot, dry summers and cold winters mean your HVAC system works hard year-round. Peak HVAC Services provides{" "}
      <strong>air conditioning service in Salt Lake City</strong> and throughout <strong>Salt Lake County</strong>—from
      emergency <strong>AC repair</strong> to new <strong>central air installation</strong> and spring{" "}
      <strong>AC tune-ups</strong> that keep efficiency high.
    </p>
    <p className="text-sm text-muted-foreground">
      Open repair, installation, or maintenance from the navy bar under the hero for full Utah-focused details on each
      service.
    </p>
    <div className="flex flex-wrap gap-3 pt-4">
      <Button variant="hero" size="lg" className="rounded-xl" asChild>
        <a href="tel:8017382275">Call (801) 738-2275</a>
      </Button>
      <Button variant="outline" size="lg" className="rounded-xl border-2" asChild>
        <Link to="/coupons">View coupons</Link>
      </Button>
    </div>
  </AcServicePageLayout>
);

export default AirConditioning;

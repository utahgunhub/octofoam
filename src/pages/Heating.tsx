import { Link } from "react-router-dom";
import HeatingServicePageLayout from "@/components/service-pages/HeatingServicePageLayout";
import { Flame, Wrench, Home, Wind, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Wrench,
    title: "Furnace repair",
    description:
      "No heat, odd smells, or noisy burners—we diagnose gas and electric systems and repair with safety first.",
  },
  {
    icon: Home,
    title: "Furnace installation",
    description:
      "Right-sized replacements, clean changeouts, and code-compliant gas work for Utah homes.",
  },
  {
    icon: Wind,
    title: "Heating maintenance",
    description:
      "Fall tune-ups, combustion checks, and airflow testing before the coldest weeks hit the Wasatch Front.",
  },
  {
    icon: MapPin,
    title: "Local crews",
    description:
      "Salt Lake City to the south valley—we’re on the road in the communities you live in.",
  },
  {
    icon: Phone,
    title: "Clear communication",
    description:
      "You’ll understand options, pricing, and timeline before we turn a wrench or swap equipment.",
  },
  {
    icon: Flame,
    title: "Winter-ready",
    description:
      "We know Utah cold snaps. Urgent calls get triaged fairly when demand spikes.",
  },
];

const Heating = () => (
  <HeatingServicePageLayout
    visualVariant="heatingHub"
    helmetTitle="Heating Services Utah | Furnace Repair & Install Salt Lake County"
    helmetDescription="Peak HVAC: furnace repair, installation, and heating maintenance in Salt Lake City & Salt Lake County, Utah. Licensed team, same-day when possible. (801) 738-2275."
    canonicalPath="/heating"
    heroHeading={
      <>
        Heating services in <span className="text-primary">Utah</span>
      </>
    }
    heroSubhead="Furnace repair, installation, and tune-ups for Salt Lake County and the Wasatch Front."
    featuresHeading={<>Why homeowners call Peak for heat</>}
    featuresIntro="One team for emergency fixes, planned replacements, and seasonal maintenance."
    features={features}
  >
    <p className="text-accent font-bold uppercase tracking-wide text-sm">Utah furnace & heating</p>
    <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground">
      Furnace and heating help built for Salt Lake winters
    </h2>
    <p>
      When the inversion settles and nights freeze, you need a <strong>heating company in Utah</strong> that answers the phone.
      Peak HVAC Services repairs and installs furnaces throughout <strong>Salt Lake County</strong>, with maintenance plans and
      tune-ups that keep efficiency and warranties on track.
    </p>
    <p className="text-sm text-muted-foreground">
      Use the links above to open repair, installation, or maintenance—each page has more detail and Utah-specific
      information.
    </p>
    <div className="flex flex-wrap gap-3 pt-4">
      <Button variant="heroPink" size="lg" className="rounded-xl" asChild>
        <a href="tel:8017382275">Call (801) 738-2275</a>
      </Button>
      <Button variant="outline" size="lg" className="rounded-xl border-2" asChild>
        <Link to="/coupons">Coupons</Link>
      </Button>
    </div>
  </HeatingServicePageLayout>
);

export default Heating;

import { Link } from "react-router-dom";
import AcServicePageLayout from "@/components/service-pages/AcServicePageLayout";
import { ClipboardCheck, Filter, Gauge, Droplets, CalendarDays, AlertTriangle } from "lucide-react";

const features = [
  {
    icon: ClipboardCheck,
    title: "Full tune-up checklist",
    description:
      "Inspect electrical connections, refrigerant charge, coils, drain lines, blower components, and safety controls on every visit.",
  },
  {
    icon: Filter,
    title: "Filter & airflow",
    description:
      "We check static pressure and filter fit so your Utah home gets maximum airflow without straining the blower motor.",
  },
  {
    icon: Gauge,
    title: "Performance testing",
    description:
      "Temperature split and operating pressures help catch small issues before they become mid-summer emergencies.",
  },
  {
    icon: Droplets,
    title: "Condensate & drains",
    description:
      "Clear algae and debris from drain lines to protect ceilings and floors—especially important before humid monsoon patterns.",
  },
  {
    icon: CalendarDays,
    title: "Seasonal scheduling",
    description:
      "Spring AC tune-ups prepare your system before peak heat; we’ll help you pick a time that works for Salt Lake County schedules.",
  },
  {
    icon: AlertTriangle,
    title: "Honest recommendations",
    description:
      "If we spot wear that could lead to a breakdown, we explain options clearly—repair now vs. plan for replacement.",
  },
];

const AcMaintenance = () => (
  <AcServicePageLayout
    visualVariant="maintenance"
    helmetTitle="AC Maintenance Utah | AC Tune-Up Salt Lake City & County"
    helmetDescription="Professional AC maintenance and tune-ups in Salt Lake County, Utah. Spring AC service, coil cleaning, refrigerant checks. Extend equipment life & lower bills. (801) 738-2275."
    canonicalPath="/air-conditioning/maintenance"
    heroHeading={
      <>
        AC Maintenance & <span className="text-primary">Tune-Ups</span>
      </>
    }
    heroSubhead="Seasonal air conditioning maintenance for Salt Lake City, Utah County, Davis County, and the greater Wasatch Front."
    featuresHeading={
      <>
        What’s included in <span className="text-primary">AC maintenance</span>
      </>
    }
    featuresIntro="A tuned AC runs cooler, quieter, and more efficiently—exactly what you want before Utah summer hits."
    features={features}
  >
    <p className="text-accent font-bold uppercase tracking-wide text-sm">Preventive AC service · Utah</p>
    <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground">
      Air conditioning maintenance in Salt Lake County and beyond
    </h2>
    <p>
      Regular <strong>AC maintenance in Utah</strong> is one of the easiest ways to avoid surprise breakdowns and keep
      utility bills in check. Dust from the Great Salt Lake desert and local construction can clog coils and filters faster
      than in wetter climates. Peak HVAC Services offers thorough <strong>AC tune-ups</strong> for homes in{" "}
      <strong>Salt Lake City</strong>, West Valley City, Bountiful, Draper, Park City-area homes at lower elevations, and
      nearby communities.
    </p>
    <h3 className="text-xl font-bold font-display text-foreground">Why schedule AC maintenance every spring</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Restore cooling capacity before the hottest weeks</li>
      <li>Reduce wear on the compressor and fan motors</li>
      <li>Improve indoor air quality with clean coils and proper drainage</li>
      <li>Catch refrigerant leaks or weak capacitors early</li>
    </ul>
    <p>
      Many manufacturers require documented <strong>annual HVAC maintenance</strong> to keep warranty coverage valid. We
      provide clear notes on what was serviced so you have records for your <strong>Utah home</strong> or rental property.
    </p>
    <h3 className="text-xl font-bold font-display text-foreground">Pair maintenance with heating service</h3>
    <p>
      Ask about scheduling your furnace check in fall and your <strong>air conditioning service</strong> in spring so both
      systems are ready for Utah’s wide seasonal swings. Consistent care means fewer emergency calls and more predictable
      comfort year-round.
    </p>
    <p className="pt-2">
      <Link to="/air-conditioning" className="font-bold text-accent hover:underline">
        ← All air conditioning services
      </Link>
    </p>
  </AcServicePageLayout>
);

export default AcMaintenance;

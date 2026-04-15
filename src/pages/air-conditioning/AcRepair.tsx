import { Link } from "react-router-dom";
import AcServicePageLayout from "@/components/service-pages/AcServicePageLayout";
import { Wrench, ThermometerSnowflake, Clock, ShieldCheck, Truck, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Diagnosis you can trust",
    description:
      "We find the real cause of weak cooling, strange noises, and short cycling—not just a quick patch—so your AC keeps working through Utah summers.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Refrigerant & electrical",
    description:
      "Safe handling of refrigerant, capacitor and contactor issues, frozen coils, and airflow problems common in Salt Lake County homes.",
  },
  {
    icon: Clock,
    title: "Same-day when possible",
    description:
      "When the Wasatch Front heats up, you need relief fast. We prioritize urgent AC repair calls across the Salt Lake Valley.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed HVAC work",
    description:
      "Professional repairs that meet code and manufacturer expectations, with clear pricing before we start major work.",
  },
  {
    icon: Truck,
    title: "Local Utah team",
    description:
      "We’re your neighbors—serving Salt Lake City, Sandy, West Jordan, Draper, and nearby communities with dependable service.",
  },
  {
    icon: BadgeCheck,
    title: "Warranty-friendly service",
    description:
      "We document repairs properly and use quality parts so you stay protected when equipment is still under warranty.",
  },
];

const AcRepair = () => (
  <AcServicePageLayout
    visualVariant="repair"
    helmetTitle="AC Repair Salt Lake City & Utah | Same-Day Air Conditioning Repair"
    helmetDescription="Expert AC repair in Salt Lake County, Utah. Fix weak cooling, leaks, noisy units & breakdowns. Licensed HVAC technicians serving the Wasatch Front. Call (801) 738-2275."
    canonicalPath="/air-conditioning/repair"
    heroHeading={
      <>
        AC Repair in <span className="text-primary">Utah</span>
      </>
    }
    heroSubhead="Fast, reliable air conditioning repair for Salt Lake City, Sandy, West Valley, and the greater Salt Lake County area."
    featuresHeading={
      <>
        Why homeowners choose us for <span className="text-primary">AC repair</span>
      </>
    }
    featuresIntro="From central air to heat pumps, we repair cooling systems the right way—so you stay comfortable when Utah temperatures climb."
    features={features}
  >
    <p className="text-accent font-bold uppercase tracking-wide text-sm">Air conditioning repair · Salt Lake County</p>
    <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground">
      Air conditioning repair in Salt Lake City and across Utah’s Wasatch Front
    </h2>
    <p>
      When your central air quits on a July afternoon or your home never feels cool enough, you need an{" "}
      <strong>HVAC company in Utah</strong> that shows up prepared. Peak HVAC Services provides{" "}
      <strong>AC repair in Salt Lake County</strong> for homeowners and businesses dealing with breakdowns, poor airflow,
      refrigerant issues, frozen coils, thermostat problems, and more.
    </p>
    <h3 className="text-xl font-bold font-display text-foreground">Signs you need professional AC repair</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Warm air from vents or weak airflow upstairs</li>
      <li>Water pooling near the indoor unit or ice on the refrigerant line</li>
      <li>Loud grinding, squealing, or clicking from the outdoor condenser</li>
      <li>AC runs constantly but never reaches the thermostat set point</li>
      <li>Musty smells or humidity that won’t drop inside your Utah home</li>
    </ul>
    <p>
      Ignoring these symptoms can lead to compressor failure and higher energy bills. Our technicians service{" "}
      <strong>residential air conditioning</strong> systems throughout <strong>Salt Lake City</strong>, Murray, Taylorsville,
      Herriman, Riverton, and neighboring cities—often with <strong>same-day AC service</strong> when scheduling allows.
    </p>
    <h3 className="text-xl font-bold font-display text-foreground">Utah climate and your cooling system</h3>
    <p>
      Dry air, dust, and big temperature swings from day to night stress HVAC equipment. We tune and repair systems for
      local conditions so you get reliable cooling without overpaying on utilities. Whether you live near the{" "}
      <strong>Salt Lake Valley</strong> or a higher-elevation community, we’ll help your AC perform its best.
    </p>
    <p className="pt-2">
      <Link to="/air-conditioning" className="font-bold text-accent hover:underline">
        ← All air conditioning services
      </Link>
    </p>
  </AcServicePageLayout>
);

export default AcRepair;

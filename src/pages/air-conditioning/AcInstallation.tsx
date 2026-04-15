import { Link } from "react-router-dom";
import AcServicePageLayout from "@/components/service-pages/AcServicePageLayout";
import { Ruler, Zap, Leaf, Home, FileCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: Ruler,
    title: "Proper system sizing",
    description:
      "Load calculations and duct assessment so your new AC isn’t oversized or undersized—critical for comfort and efficiency in Utah homes.",
  },
  {
    icon: Zap,
    title: "Efficiency options",
    description:
      "We explain SEER ratings and equipment choices so you can balance upfront cost with long-term savings on Rocky Mountain Power bills.",
  },
  {
    icon: Leaf,
    title: "Heat pumps & central air",
    description:
      "Installations for traditional split systems, heat pumps, and replacements that pair with your existing furnace or air handler.",
  },
  {
    icon: Home,
    title: "Respect for your property",
    description:
      "Clean worksite practices, floor protection, and careful refrigerant handling throughout your Salt Lake County installation.",
  },
  {
    icon: FileCheck,
    title: "Code-compliant installs",
    description:
      "Permits and inspections handled correctly so your new cooling system meets Utah building and safety requirements.",
  },
  {
    icon: Headphones,
    title: "Support after startup",
    description:
      "Walkthrough on thermostat settings, filter schedules, and warranty registration so you’re confident from day one.",
  },
];

const AcInstallation = () => (
  <AcServicePageLayout
    visualVariant="installation"
    helmetTitle="AC Installation Utah | New Air Conditioner Install Salt Lake County"
    helmetDescription="Professional AC installation in Salt Lake City & Salt Lake County, Utah. New central air, heat pumps, replacements. Licensed HVAC installers. Free quotes. (801) 738-2275."
    canonicalPath="/air-conditioning/installation"
    heroHeading={
      <>
        AC Installation in <span className="text-primary">Salt Lake County</span>
      </>
    }
    heroSubhead="New air conditioner installation and full system replacements sized for Utah homes and businesses."
    featuresHeading={
      <>
        What you get with a professional <span className="text-primary">AC install</span>
      </>
    }
    featuresIntro="Replacing an old unit is a big decision. We make the process clear—from estimate to final inspection."
    features={features}
  >
    <p className="text-accent font-bold uppercase tracking-wide text-sm">New AC installation · Utah HVAC</p>
    <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground">
      New air conditioning installation for Utah homeowners
    </h2>
    <p>
      If your air conditioner is over 12–15 years old, needs expensive repairs, or uses outdated refrigerant,{" "}
      <strong>AC installation in Utah</strong> may save money and improve comfort. Peak HVAC Services installs{" "}
      <strong>central air conditioning</strong>, heat pumps, and complete cooling replacements for properties in{" "}
      <strong>Salt Lake City</strong>, South Jordan, Cottonwood Heights, Millcreek, and surrounding areas.
    </p>
    <h3 className="text-xl font-bold font-display text-foreground">When to consider a new AC install</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Repeated breakdowns or rising repair costs each season</li>
      <li>Uneven cooling between floors or rooms that duct fixes can’t solve</li>
      <li>High summer electric bills despite maintenance</li>
      <li>Renovations or additions that changed your home’s cooling load</li>
    </ul>
    <p>
      We evaluate your ductwork, insulation, and thermostat setup—not just the outdoor unit—so your{" "}
      <strong>new air conditioner</strong> delivers even temperatures. Ask about current{" "}
      <Link to="/coupons" className="font-bold text-accent hover:underline">
        HVAC coupons and installation specials
      </Link>{" "}
      for <strong>Salt Lake County</strong> customers.
    </p>
    <h3 className="text-xl font-bold font-display text-foreground">Serving the Wasatch Front</h3>
    <p>
      From downtown <strong>Salt Lake City</strong> to growing suburbs along the <strong>Wasatch Front</strong>, we install
      equipment built for dry summers and cold winters when paired with heating. Whether you need a straight AC replacement
      or a heat pump for year-round efficiency, we’ll recommend options that fit your budget and rebate opportunities when
      available.
    </p>
    <p className="pt-2">
      <Link to="/air-conditioning" className="font-bold text-accent hover:underline">
        ← All air conditioning services
      </Link>
    </p>
  </AcServicePageLayout>
);

export default AcInstallation;

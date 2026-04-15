import { Link } from "react-router-dom";
import HeatingServicePageLayout from "@/components/service-pages/HeatingServicePageLayout";
import { Ruler, Zap, Home, FileCheck, Wind, Wallet } from "lucide-react";

const features = [
  {
    icon: Ruler,
    title: "Load & duct match",
    description:
      "We size replacement furnaces for your home’s heat loss—not rule-of-thumb charts—so you get steady warmth without wasted fuel.",
  },
  {
    icon: Zap,
    title: "Efficiency choices",
    description:
      "Compare AFUE ratings and blower types (PSC vs. ECM) so your new furnace fits Utah gas prices and rebate programs when available.",
  },
  {
    icon: Home,
    title: "Clean changeouts",
    description:
      "Old equipment removal, pad and vent checks, and startup testing so the first night with new heat feels boring—in a good way.",
  },
  {
    icon: FileCheck,
    title: "Permits & inspections",
    description:
      "Gas appliance installs follow Utah code. We coordinate what your jurisdiction requires so you’re covered at resale.",
  },
  {
    icon: Wind,
    title: "Whole-system thinking",
    description:
      "If ducts leak or the AC coil needs attention, we’ll flag it so your new furnace doesn’t fight the rest of the HVAC system.",
  },
  {
    icon: Wallet,
    title: "Financing conversations",
    description:
      "Big-ticket installs are easier with a clear quote and payment options—ask what’s available for your project.",
  },
];

const FurnaceInstallation = () => (
  <HeatingServicePageLayout
    visualVariant="furnaceInstall"
    helmetTitle="Furnace Installation Utah | New Furnace Salt Lake County"
    helmetDescription="New furnace installation in Salt Lake City & Salt Lake County, Utah. High-efficiency replacements, code-compliant gas installs, free estimates. Peak HVAC (801) 738-2275."
    canonicalPath="/heating/furnace-installation"
    heroHeading={<>New furnace installation for Utah homes</>}
    heroSubhead="Replacements and new heating systems sized for Salt Lake winters—with clean workmanship and honest recommendations."
    featuresHeading={<>Installation built around your home—not a catalog page</>}
    featuresIntro="From estimate to inspection, we keep you informed at every step."
    features={features}
  >
    <p className="text-accent font-bold uppercase tracking-wide text-sm">Furnace replacement · Utah HVAC</p>
    <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground">
      Furnace installation in Salt Lake County and the Wasatch Front
    </h2>
    <p>
      Replacing a furnace is a long-term decision. Peak HVAC Services handles <strong>furnace installation in Utah</strong>{" "}
      for older units that are unsafe, inefficient, or too costly to keep repairing. We install equipment matched to your
      ductwork and insulation reality—not just the label on the box—so <strong>Salt Lake City</strong> and valley homes get
      even heat without noisy oversizing.
    </p>
    <h3 className="text-xl font-bold font-display text-foreground">When a new furnace makes sense</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Cracked heat exchanger or repeated safety lockouts</li>
      <li>AFUE below modern standards and rising gas bills</li>
      <li>Uneven heating that duct upgrades alone won’t fix</li>
      <li>Remodels that added square footage your old furnace can’t carry</li>
    </ul>
    <p>
      Ask about <Link to="/coupons" className="font-bold text-accent hover:underline">current heating specials</Link> and
      bundled visits if you’re also updating <Link to="/air-conditioning" className="font-bold text-accent hover:underline">air conditioning</Link>. We serve{" "}
      <strong>Murray</strong>, <strong>Taylorsville</strong>, <strong>Draper</strong>, <strong>Riverton</strong>, and nearby
      areas with full <strong>gas furnace installation</strong> support.
    </p>
    <p className="pt-2">
      <Link to="/heating" className="font-bold text-accent hover:underline">
        ← All heating services
      </Link>
    </p>
  </HeatingServicePageLayout>
);

export default FurnaceInstallation;

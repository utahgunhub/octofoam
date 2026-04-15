import { Link } from "react-router-dom";
import HeatingServicePageLayout from "@/components/service-pages/HeatingServicePageLayout";
import { ClipboardCheck, Filter, Gauge, ShieldAlert, CalendarDays, Sparkles } from "lucide-react";

const features = [
  {
    icon: ClipboardCheck,
    title: "Combustion check",
    description:
      "Inspect burners, flame pattern, and venting so fuel burns cleanly—critical for Utah homes that run heat hard for months.",
  },
  {
    icon: Filter,
    title: "Filter & airflow",
    description:
      "Right filter fit and blower performance reduce wear and help every room get airflow without whistling ducts.",
  },
  {
    icon: Gauge,
    title: "Safety controls",
    description:
      "Test limit switches, rollout sensors, and gas connections so small faults don’t become emergency shutdowns.",
  },
  {
    icon: ShieldAlert,
    title: "CO awareness",
    description:
      "We’ll note anything that should trigger a CO monitor check or further inspection—your family’s safety comes first.",
  },
  {
    icon: CalendarDays,
    title: "Fall scheduling",
    description:
      "Beat the rush: early-season tune-ups mean your furnace is ready before the first deep freeze in the valley.",
  },
  {
    icon: Sparkles,
    title: "Cleaner startup",
    description:
      "A tuned furnace runs quieter, smells less on first fire, and keeps efficiency closer to factory specs.",
  },
];

const HeatingMaintenance = () => (
  <HeatingServicePageLayout
    visualVariant="heatingMaintenance"
    helmetTitle="Furnace Tune-Up Utah | Heating Maintenance Salt Lake City"
    helmetDescription="Furnace maintenance & tune-ups in Salt Lake County, Utah. Fall heating service, safety checks, efficiency. Extend furnace life. Peak HVAC (801) 738-2275."
    canonicalPath="/heating/maintenance"
    heroHeading={<>Furnace tune-ups & heating maintenance</>}
    heroSubhead="Seasonal service for gas and electric heating systems across Salt Lake County—before winter demand peaks."
    featuresHeading={<>What we cover on a heating maintenance visit</>}
    featuresIntro="Preventive care keeps warranties valid and catches wear while fixes are still small."
    features={features}
  >
    <p className="text-accent font-bold uppercase tracking-wide text-sm">Preventive heating service · Utah</p>
    <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground">
      Heating maintenance for Utah homeowners
    </h2>
    <p>
      Annual <strong>furnace maintenance in Utah</strong> is the best insurance against a 2 a.m. no-heat call. Dust, pet hair,
      and desert dryness affect filters and blower wheels faster than many homeowners expect. Peak HVAC Services performs{" "}
      <strong>heating tune-ups</strong> in <strong>Salt Lake City</strong>, <strong>South Jordan</strong>,{" "}
      <strong>Holladay</strong>, and neighboring communities so your system is ready when temperatures drop below freezing.
    </p>
    <h3 className="text-xl font-bold font-display text-foreground">Why fall furnace service matters</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Restore efficiency before months of continuous runtime</li>
      <li>Reduce risk of mid-winter failures during holiday weeks</li>
      <li>Keep manufacturer warranty language satisfied with documented service</li>
      <li>Improve indoor air quality with clean components and proper airflow</li>
    </ul>
    <p>
      Pair your <strong>furnace tune-up</strong> with spring{" "}
      <Link to="/air-conditioning/maintenance" className="font-bold text-accent hover:underline">
        AC maintenance
      </Link>{" "}
      for year-round coverage. Ask about maintenance plans if you want priority scheduling when{" "}
      <strong>Salt Lake County</strong> weather turns extreme.
    </p>
    <p className="pt-2">
      <Link to="/heating" className="font-bold text-accent hover:underline">
        ← All heating services
      </Link>
    </p>
  </HeatingServicePageLayout>
);

export default HeatingMaintenance;

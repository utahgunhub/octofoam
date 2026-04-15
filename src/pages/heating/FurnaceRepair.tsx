import { Link } from "react-router-dom";
import HeatingServicePageLayout from "@/components/service-pages/HeatingServicePageLayout";
import { Wrench, Flame, Clock, ShieldCheck, Thermometer, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Clear diagnosis",
    description:
      "We trace no-heat, short cycling, and strange smells to the real fault—ignitor, flame sensor, heat exchanger concerns, or thermostat wiring.",
  },
  {
    icon: Flame,
    title: "Gas & electric furnaces",
    description:
      "Safe work on gas valves, burners, and venting; plus electric heat strips and sequencers where those systems heat your Utah home.",
  },
  {
    icon: Clock,
    title: "Priority cold-weather calls",
    description:
      "When Salt Lake County freezes, we treat heat outages seriously and schedule urgent furnace repair as soon as we can.",
  },
  {
    icon: ShieldCheck,
    title: "Code-safe repairs",
    description:
      "Carbon monoxide and combustion safety matter. We test and document critical checks so your family stays protected.",
  },
  {
    icon: Thermometer,
    title: "Even comfort",
    description:
      "Weak airflow and duct issues get addressed—not just the furnace—so rooms stop staying cold while the stat says satisfied.",
  },
  {
    icon: BadgeCheck,
    title: "Straightforward pricing",
    description:
      "You’ll know the plan before major parts are ordered. No mystery fees on typical furnace repair visits.",
  },
];

const FurnaceRepair = () => (
  <HeatingServicePageLayout
    visualVariant="furnaceRepair"
    helmetTitle="Furnace Repair Salt Lake City & Utah | Emergency Heating Repair"
    helmetDescription="Furnace repair in Salt Lake County, Utah. Fix no heat, weak heat, noisy furnace & ignition problems. Licensed heating technicians. Call (801) 738-2275."
    canonicalPath="/heating/furnace-repair"
    heroHeading={
      <>
        Furnace repair in <span className="text-primary">Utah</span>
      </>
    }
    heroSubhead="Fast heating repair for Salt Lake City, West Valley, Sandy, and the Wasatch Front when winter hits hard."
    featuresHeading={<>When your furnace quits, you need answers—not guesswork</>}
    featuresIntro="Peak HVAC Services repairs furnaces across Utah with safety and comfort first."
    features={features}
  >
    <p className="text-accent font-bold uppercase tracking-wide text-sm">Furnace repair · Salt Lake County</p>
    <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground">
      Furnace repair in Salt Lake City and surrounding Utah communities
    </h2>
    <p>
      A cold house isn’t just uncomfortable—it’s stressful. Our team provides <strong>furnace repair in Utah</strong> for
      homeowners dealing with <strong>no heat</strong>, blowing cold air, frequent cycling, or carbon monoxide detector
      alerts tied to the heating system. We work on major brands common in <strong>Salt Lake County</strong> and explain
      what failed and why.
    </p>
    <h3 className="text-xl font-bold font-display text-foreground">Common furnace problems in Utah winters</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Ignitor or pilot issues preventing the burners from lighting</li>
      <li>Clogged filters and weak airflow causing limit switches to trip</li>
      <li>Blower motor noise, vibration, or failure</li>
      <li>Thermostat or wiring problems after power bumps</li>
      <li>Short cycling from overheating or oversized equipment</li>
    </ul>
    <p>
      Dry air and temperature swings along the <strong>Wasatch Front</strong> stress heating equipment. If your{" "}
      <strong>furnace repair</strong> need is urgent, call—we’ll help you understand timeline and options, including when
      replacement may be smarter than another band-aid.
    </p>
    <p className="pt-2">
      <Link to="/heating" className="font-bold text-accent hover:underline">
        ← All heating services
      </Link>
    </p>
  </HeatingServicePageLayout>
);

export default FurnaceRepair;

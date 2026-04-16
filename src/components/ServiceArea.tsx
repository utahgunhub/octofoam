import { MapPin } from "lucide-react";

const cities = [
  "Greenfield", "Indianapolis", "Shelbyville", "Anderson",
  "Pendleton", "New Palestine", "Fortville", "McCordsville",
];

const ServiceArea = () => (
  <section className="py-20 px-4 bg-accent text-accent-foreground">
    <div className="container max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 font-display">
        Serving Greenfield, IN &amp; Surrounding Areas
      </h2>
      <p className="text-accent-foreground/80 mb-12 text-lg">
        Proudly providing spray foam insulation services throughout central Indiana
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {cities.map((city) => (
          <div
            key={city}
            className="bg-accent-foreground/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2 hover:bg-accent-foreground/20 transition-colors"
          >
            <MapPin size={18} className="text-secondary" />
            <span className="font-semibold">{city}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceArea;

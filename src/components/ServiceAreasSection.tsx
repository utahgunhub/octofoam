import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const cities = [
  "Greenfield",
  "Indianapolis",
  "Shelbyville",
  "Anderson",
  "Pendleton",
  "New Palestine",
  "Fortville",
  "McCordsville",
  "Fishers",
  "Noblesville",
  "Hancock County",
  "Madison County",
  "Hamilton County",
  "Shelby County",
  "Henry County",
  "Rush County",
];

const ServiceAreasSection = () => (
  <section className="py-16 px-4 bg-accent">
    <div className="container max-w-7xl mx-auto">
      <div className="rounded-3xl overflow-hidden shadow-elevated bg-accent-foreground/10">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          {/* Map - left */}
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
            <img
              src="/indiana-map.png"
              alt="Central Indiana service area map"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          {/* Content - right */}
          <div className="p-8 lg:p-10 flex flex-col justify-center bg-accent-foreground/5">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-foreground/70 mb-2">
              Our Service Areas
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-accent-foreground mb-6 font-display uppercase tracking-tight">
              Serving Greenfield, IN &amp; Surrounding Areas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
              {cities.map((city) => (
                <div key={city} className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#634390] flex-shrink-0" />
                  <span className="text-sm font-semibold text-accent-foreground">{city}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center lg:justify-start">
              <Button size="lg" className="rounded-xl font-bold gap-2 bg-white border-2 border-[#634390] text-[#634390] hover:bg-[#634390]/5" asChild>
                <Link to="/service-areas/salt-lake-city">
                  <MapPin size={18} />
                  View service areas
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceAreasSection;

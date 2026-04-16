import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const SiteFooter = () => (
  <footer className="bg-accent text-accent-foreground pt-8 pb-8 px-4">
    <div className="container max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Helpful Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 font-display">Our Services</h3>
          <ul className="space-y-2 text-accent-foreground/80">
            {["Attic Insulation", "Crawl Space Insulation", "Metal Building Insulation", "Concrete Leveling", "SPF Roof Coatings"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-secondary transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="font-bold text-lg mb-4 font-display">Octofoam, LLC</h3>
          <p className="text-accent-foreground/80 mb-4">
            Your spray foam insulation company of choice in Greenfield, IN. Proudly serving agricultural, commercial, and residential clients.
          </p>
          <div className="flex flex-col gap-2">
            <a href="tel:3179670505" className="flex items-center gap-2 text-white font-bold hover:underline">
              <Phone size={18} />
              <span>(317) 967-0505</span>
            </a>
            <a href="mailto:info@octofoam.com" className="flex items-center gap-2 text-accent-foreground/80 hover:text-secondary transition-colors">
              <Mail size={18} />
              <span>info@octofoam.com</span>
            </a>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-bold text-lg mb-4 font-display">Find Us</h3>
          <div className="flex items-start gap-2 text-accent-foreground/80 mb-2">
            <MapPin size={18} className="mt-1 flex-shrink-0" />
            <span>3581 W US Hwy 40<br />Greenfield, IN 46140</span>
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/octofoam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Octofoam on Facebook"
              className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/octofoam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Octofoam on Instagram"
              className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-accent-foreground/10 pt-6 text-center text-sm text-accent-foreground/50">
        © 2026 Octofoam, LLC. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default SiteFooter;

import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const SiteFooter = () => (
  <footer className="bg-accent text-accent-foreground pt-16 pb-8 px-4">
    <div className="container max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Helpful Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 font-display">Helpful Links</h3>
          <ul className="space-y-2 text-accent-foreground/80">
            {["Services", "Maintenance Plans", "Coupons", "Financing", "Contact"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-secondary transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="font-bold text-lg mb-4 font-display">Peak HVAC Services</h3>
          <p className="text-accent-foreground/80 mb-4">
            Your trusted HVAC company in Salt Lake City, UT. Serving the community since 1987.
          </p>
          <div className="flex flex-col gap-2">
            <a href="tel:8017382275" className="flex items-center gap-2 text-secondary font-bold hover:underline">
              <Phone size={18} />
              <span>(801) 738-2275</span>
            </a>
            <a href="mailto:Hummingbirdhomes22@gmail.com" className="flex items-center gap-2 text-accent-foreground/80 hover:text-secondary transition-colors">
              <Mail size={18} />
              <span>Hummingbirdhomes22@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-bold text-lg mb-4 font-display">Find Us</h3>
          <div className="flex items-start gap-2 text-accent-foreground/80 mb-4">
            <MapPin size={18} className="mt-1 flex-shrink-0" />
            <span>Salt Lake City, UT</span>
          </div>
          <div className="flex gap-4 mt-4">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-accent-foreground/10 pt-6 text-center text-sm text-accent-foreground/50">
        © 2026 Peak HVAC Services Utah. All rights reserved.
      </div>
    </div>
  </footer>
);

export default SiteFooter;

import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ServiceCards from "@/components/ServiceCards";
import CurvedDivider from "@/components/CurvedDivider";
import CompanySection from "@/components/CompanySection";
import CommitmentSection from "@/components/CommitmentSection";
import CouponCards from "@/components/CouponCards";
import Testimonials from "@/components/Testimonials";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import BlogPreview from "@/components/BlogPreview";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

const dark = "hsl(225, 100%, 32%)";
const light = "hsl(170, 40%, 97%)";
const white = "#ffffff";
const mint = "hsl(160, 100%, 50%)";
const skyBlue = "hsl(200, 100%, 50%)";

const Index = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />
    {/* 1. HERO (dark) */}
    <HeroSection />

    {/* 2. SERVICES */}
    <ServiceCards />
    {/* dark (services) → light (company) */}
    <CurvedDivider topColor="#001c70" bottomColor={light} accentColor={mint} direction="up" transparentBottom className="relative z-10" />
    {/* 3. COMPANY (light) */}
    <CompanySection />

    {/* light on top → dark below */}
    <CurvedDivider topColor={light} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />
    {/* 4. COMMITMENT (dark) */}
    <CommitmentSection />
    {/* dark (commitment) → white (coupons) - curve extends from blue over white */}
    <CurvedDivider topColor={dark} bottomColor={white} accentColor={mint} direction="up" transparentBottom className="relative z-10" />
    {/* 5. COUPONS (white) */}
    <CouponCards />
    {/* white (coupons) → dark (testimonials) - curve extends from white over blue */}
    <CurvedDivider topColor={white} bottomColor={dark} accentColor={skyBlue} direction="down" transparentTop className="relative z-10" />

    {/* 6. TESTIMONIALS (dark) */}
    <Testimonials />
    {/* dark (testimonials) → light (blog) - curve extends from blue over white */}
    <CurvedDivider topColor={dark} bottomColor={light} accentColor={mint} direction="up" transparentBottom className="relative z-10" />
    {/* 7. BLOG (light) */}
    <BlogPreview />
    {/* light (blog) → dark (service areas) - curve extends from white over blue */}
    <CurvedDivider topColor={light} bottomColor={dark} accentColor={skyBlue} direction="down" transparentTop className="relative z-10" />

    {/* 8. SERVICE AREAS (dark) */}
    <ServiceAreasSection />
    {/* dark (service areas) → white (contact) - curve extends from blue over white */}
    <CurvedDivider topColor={dark} bottomColor={white} accentColor={skyBlue} direction="up" transparentBottom className="relative z-10" />
    {/* 9. CONTACT (white) */}
    <ContactSection />
    {/* white (contact) → dark (footer) - curve extends from white over blue */}
    <CurvedDivider topColor={white} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />

    {/* 10. FOOTER (dark) */}
    <SiteFooter />
  </div>
);

export default Index;

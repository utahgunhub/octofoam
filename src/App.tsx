import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import AtticInsulation from "./pages/AtticInsulation";
import CrawlSpaceInsulation from "./pages/CrawlSpaceInsulation";
import MetalBuildingInsulation from "./pages/MetalBuildingInsulation";
import SpfRoofBenefits from "./pages/SpfRoofBenefits";
import SpfRoofCoatings from "./pages/SpfRoofCoatings";
import ConcreteLeveling from "./pages/ConcreteLeveling";
import RValueFairyTale from "./pages/RValueFairyTale";
import TypesOfSprayFoam from "./pages/TypesOfSprayFoam";
import FoamForFarmers from "./pages/FoamForFarmers";
import Faq from "./pages/Faq";
import Gallery from "./pages/Gallery";
import Resources from "./pages/Resources";
import ResourcePost from "./pages/ResourcePost";
import ServiceAreas from "./pages/ServiceAreas";
import ServiceAreaGreenfield from "./pages/ServiceAreaGreenfield";
import ServiceAreaIndianapolis from "./pages/ServiceAreaIndianapolis";
import ServiceAreaNewPalestine from "./pages/ServiceAreaNewPalestine";
import ServiceAreaKnightstown from "./pages/ServiceAreaKnightstown";
import ServiceAreaFortville from "./pages/ServiceAreaFortville";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/attic-insulation" element={<AtticInsulation />} />
          <Route path="/crawl-space-insulation" element={<CrawlSpaceInsulation />} />
          <Route path="/metal-building-insulation" element={<MetalBuildingInsulation />} />
          <Route path="/spf-roof-benefits" element={<SpfRoofBenefits />} />
          <Route path="/spf-roof-coatings" element={<SpfRoofCoatings />} />
          <Route path="/concrete-leveling" element={<ConcreteLeveling />} />
          <Route path="/r-value-fairy-tale" element={<RValueFairyTale />} />
          <Route path="/types-of-spray-foam" element={<TypesOfSprayFoam />} />
          <Route path="/foam-for-farmers" element={<FoamForFarmers />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ResourcePost />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/service-areas/greenfield" element={<ServiceAreaGreenfield />} />
          <Route path="/service-areas/indianapolis" element={<ServiceAreaIndianapolis />} />
          <Route path="/service-areas/new-palestine" element={<ServiceAreaNewPalestine />} />
          <Route path="/service-areas/knightstown" element={<ServiceAreaKnightstown />} />
          <Route path="/service-areas/fortville" element={<ServiceAreaFortville />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

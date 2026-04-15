import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AirConditioning from "./pages/AirConditioning";
import AcRepair from "./pages/air-conditioning/AcRepair";
import AcInstallation from "./pages/air-conditioning/AcInstallation";
import AcMaintenance from "./pages/air-conditioning/AcMaintenance";
import Heating from "./pages/Heating";
import FurnaceRepair from "./pages/heating/FurnaceRepair";
import FurnaceInstallation from "./pages/heating/FurnaceInstallation";
import HeatingMaintenance from "./pages/heating/HeatingMaintenance";
import Blog from "./pages/Blog";
import BlogPost from "./pages/blog/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Coupons from "./pages/Coupons";
import SaltLakeCity from "./pages/service-areas/SaltLakeCity";
import UtahCounty from "./pages/service-areas/UtahCounty";
import DavisCounty from "./pages/service-areas/DavisCounty";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/air-conditioning" element={<AirConditioning />} />
          <Route path="/air-conditioning/repair" element={<AcRepair />} />
          <Route path="/air-conditioning/installation" element={<AcInstallation />} />
          <Route path="/air-conditioning/maintenance" element={<AcMaintenance />} />
          <Route path="/heating" element={<Heating />} />
          <Route path="/heating/furnace-repair" element={<FurnaceRepair />} />
          <Route path="/heating/furnace-installation" element={<FurnaceInstallation />} />
          <Route path="/heating/maintenance" element={<HeatingMaintenance />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/service-areas/salt-lake-city" element={<SaltLakeCity />} />
          <Route path="/service-areas/utah-county" element={<UtahCounty />} />
          <Route path="/service-areas/davis-county" element={<DavisCounty />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

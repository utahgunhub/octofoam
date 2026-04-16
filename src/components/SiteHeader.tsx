import { useState } from "react";
import { Phone, Calendar, Facebook, Instagram, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { NavLink } from "@/components/NavLink";

const navItemsLeft = [
  {
    label: "INSULATION",
    items: [
      { label: "Attic Insulation", href: "/attic-insulation" },
      { label: "Crawl Space Insulation", href: "/crawl-space-insulation" },
      { label: "Metal Building Insulation", href: "/metal-building-insulation" },
    ],
  },
  {
    label: "ROOFING",
    items: [
      { label: "SPF Roof Benefits", href: "/spf-roof-benefits" },
      { label: "SPF Roof Coatings", href: "/spf-roof-coatings" },
    ],
  },
  { label: "CONCRETE LEVELING", to: "/concrete-leveling" },
];

const navItemsRight = [
  { label: "GALLERY", to: "/gallery" },
  { label: "RESOURCES", to: "/resources" },
  { label: "CONTACT", to: "/contact" },
  {
    label: "INFO",
    items: [
      { label: "R-Value Fairy Tale", href: "/r-value-fairy-tale" },
      { label: "Types of Spray Foam", href: "/types-of-spray-foam" },
      { label: "Foam for Farmers", href: "/foam-for-farmers" },
      { label: "Areas We Serve", href: "/service-areas" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

const allNavLinks = [
  ...navItemsLeft.map((i) => ("to" in i ? { ...i, type: "link" as const } : { ...i, type: "dropdown" as const })),
  ...navItemsRight.map((i) => ("to" in i ? { ...i, type: "link" as const } : { ...i, type: "dropdown" as const })),
];

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
  <header className="sticky top-0 z-50 w-full overflow-visible relative">
    {/* Logo - absolutely positioned to overlap both bars */}
    <NavLink
      to="/"
      className="absolute left-1/2 top-[72%] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-auto"
    >
      <img
        src="/octofoam-images/octofoam-logo.png"
        alt="Octofoam Spray Foam Insulation"
        className="h-20 md:h-28 lg:h-36 w-auto object-contain drop-shadow-lg"
      />
    </NavLink>

    {/* Pre-header bar */}
    <div className="bg-[#5c97d0] text-white px-3 md:px-4 py-1.5 md:py-2 relative z-0">
      <div className="container max-w-7xl mx-auto flex flex-nowrap items-center justify-between gap-2 md:gap-4">
        <div className="flex items-center gap-2 md:gap-4 min-w-0">
          <span className="hidden md:inline text-sm font-semibold whitespace-nowrap text-white">
            STAY CONNECTED WITH US:
          </span>
          <div className="flex items-center gap-1.5 md:gap-2">
            <a
              href="#"
              className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors text-primary-foreground flex-shrink-0"
            >
              <Facebook className="w-3 h-3 md:w-4 md:h-4" />
            </a>
            <a
              href="#"
              className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors text-primary-foreground flex-shrink-0"
            >
              <Instagram className="w-3 h-3 md:w-4 md:h-4" />
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0 flex-1 md:flex-initial justify-end">
          <a
            href="tel:3179670505"
            className="flex items-center justify-center gap-1.5 md:gap-2 font-bold text-xs md:text-base flex-shrink-0 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 md:bg-transparent md:text-white md:hover:underline h-6 px-2.5 md:h-auto md:px-0"
          >
            <Phone className="hidden md:block w-[18px] h-[18px] flex-shrink-0" />
            <span className="whitespace-nowrap">(317) 967-0505</span>
          </a>
          <Button
            variant="default"
            size="sm"
            className="hidden md:inline-flex rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold gap-2 text-sm h-9 px-4"
          >
            <Calendar className="w-4 h-4" /> GET A QUOTE
          </Button>
        </div>
      </div>
    </div>

    {/* Main navigation */}
    <div className="bg-background border-b border-primary/20 overflow-visible relative z-0">
      <div className="container max-w-7xl mx-auto px-4 overflow-visible">
        <nav className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 md:gap-4 py-3">
          {/* Left nav items - hidden on mobile */}
          <NavigationMenu className="max-w-none justify-start hidden lg:flex">
            <NavigationMenuList className="gap-1">
              {navItemsLeft.map((item) =>
                "to" in item ? (
                  <NavigationMenuItem key={item.label}>
                    <NavLink
                      to={item.to}
                      className="px-3 py-2 text-sm font-bold text-foreground hover:bg-accent hover:text-white transition-colors rounded-md"
                    >
                      {item.label}
                    </NavLink>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.label} className="relative">
                    <NavigationMenuTrigger className="bg-transparent text-foreground font-bold hover:bg-accent hover:text-white data-[state=open]:bg-accent data-[state=open]:text-white rounded-md">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-1 p-2">
                        {item.items.map((sub) => (
                          <li key={sub.label}>
                            <NavigationMenuLink asChild>
                              {sub.href.startsWith("/") ? (
                                <NavLink
                                  to={sub.href}
                                  className="block select-none rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-white"
                                >
                                  {sub.label}
                                </NavLink>
                              ) : (
                                <a
                                  href={sub.href}
                                  className="block select-none rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-white"
                                >
                                  {sub.label}
                                </a>
                              )}
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Center - spacer for logo + mobile menu */}
          <div className="flex items-center justify-center w-20 md:w-28 lg:w-36">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-2 mt-6">
                  {allNavLinks.map((item) =>
                    item.type === "link" ? (
                      <NavLink
                        key={item.label}
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className="px-4 py-3 font-bold text-foreground hover:bg-accent hover:text-white rounded-lg"
                      >
                        {item.label}
                      </NavLink>
                    ) : (
                      <div key={item.label} className="border-b pb-2">
                        <span className="block px-4 py-2 font-bold text-foreground">{item.label}</span>
                        {item.items.map((sub) =>
                          sub.href.startsWith("/") ? (
                            <NavLink
                              key={sub.label}
                              to={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-6 py-2 text-sm text-muted-foreground hover:text-foreground"
                            >
                              {sub.label}
                            </NavLink>
                          ) : (
                            <a
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-6 py-2 text-sm text-muted-foreground hover:text-foreground"
                            >
                              {sub.label}
                            </a>
                          )
                        )}
                      </div>
                    )
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Right nav items - hidden on mobile */}
          <NavigationMenu className="max-w-none justify-end hidden lg:flex">
            <NavigationMenuList className="gap-1">
              {navItemsRight.map((item) =>
                "to" in item ? (
                  <NavigationMenuItem key={item.label}>
                    <NavLink
                      to={item.to}
                      className="px-3 py-2 text-sm font-bold text-foreground hover:bg-accent hover:text-white transition-colors rounded-md"
                    >
                      {item.label}
                    </NavLink>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.label} className="relative">
                    <NavigationMenuTrigger className="bg-transparent text-foreground font-bold hover:bg-accent hover:text-white data-[state=open]:bg-accent data-[state=open]:text-white rounded-md">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-1 p-2">
                        {item.items.map((sub) => (
                          <li key={sub.label}>
                            <NavigationMenuLink asChild>
                              {sub.href.startsWith("/") ? (
                                <NavLink
                                  to={sub.href}
                                  className="block select-none rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-white"
                                >
                                  {sub.label}
                                </NavLink>
                              ) : (
                                <a
                                  href={sub.href}
                                  className="block select-none rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-white"
                                >
                                  {sub.label}
                                </a>
                              )}
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </div>
  </header>
  );
};

export default SiteHeader;

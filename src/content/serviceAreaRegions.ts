export type ServiceAreaCity = {
  name: string;
  blurb: string;
};

export type ServiceAreaRegionContent = {
  helmetTitle: string;
  helmetDescription: string;
  canonicalPath: string;
  midStrip: string;
  introParagraphs: string[];
  cities: ServiceAreaCity[];
};

export const saltLakeCityAreaContent: ServiceAreaRegionContent = {
  helmetTitle: "HVAC Service Salt Lake City & Salt Lake County | Peak HVAC Utah",
  helmetDescription:
    "Licensed HVAC repair, installation, and maintenance in Salt Lake City and Salt Lake County, Utah. Same-day service when available. Call Peak HVAC at (801) 738-2275.",
  canonicalPath: "/service-areas/salt-lake-city",
  midStrip:
    "Salt Lake City & Salt Lake County · AC, furnace repair & install · Same-day when available",
  introParagraphs: [
    "Peak HVAC Services dispatches experienced technicians across Salt Lake County—from the capital to the south valley—for air conditioning repair, furnace repair, new equipment installation, and seasonal tune-ups. We know Utah’s dry summers, cold snaps, and inversion season, and we size recommendations for real local weather—not generic national checklists.",
    "Whether you need emergency furnace service before a freeze, a quiet high-efficiency AC replacement, or a maintenance visit that protects your warranty, we explain options clearly and document our work. Homeowners in Sandy, West Jordan, Draper, and nearby cities count on us for honest diagnostics and workmanship built to last.",
    "Browse the cities below for neighborhood-focused HVAC service. When you’re ready, call (801) 738-2275 or reach out through our contact form—we’re happy to confirm coverage and schedule your visit.",
  ],
  cities: [
    {
      name: "Salt Lake City",
      blurb:
        "Downtown, Capitol Hill, and the Avenues to the east bench—we handle tight mechanical rooms, older ductwork, and high-efficiency upgrades across SLC proper.",
    },
    {
      name: "Sandy",
      blurb:
        "South valley homes often need reliable AC for hot afternoons and dependable heat for canyon winds; we service split systems, furnaces, and heat pumps throughout Sandy.",
    },
    {
      name: "West Jordan",
      blurb:
        "From established neighborhoods to newer builds, we repair blower and refrigerant issues, replace aging furnaces, and tune systems for even airflow and lower utility bills.",
    },
    {
      name: "South Jordan",
      blurb:
        "Daybreak and Riverton-bordering areas get fast help for no-cool calls, smart thermostat integration, and full-system replacements with clean, code-compliant installs.",
    },
    {
      name: "Draper",
      blurb:
        "Bench and hillside properties can stress equipment harder—we diagnose airflow and zoning problems and keep furnaces and AC reliable through steep temperature swings.",
    },
    {
      name: "Murray",
      blurb:
        "Central valley service for emergency repairs, mid-season tune-ups, and equipment changes when you’re ready to improve comfort and efficiency in Murray.",
    },
    {
      name: "Midvale",
      blurb:
        "Compact lots and mixed housing stock mean we’re used to creative access, tight clearances, and clear quotes before we start furnace or AC work in Midvale.",
    },
    {
      name: "Cottonwood Heights",
      blurb:
        "Canyon-adjacent cooling and heating demands responsive service; we address short-cycling, uneven rooms, and aging equipment along the Wasatch foothills.",
    },
    {
      name: "Holladay",
      blurb:
        "Mature trees and older homes often mean legacy furnaces and updated AC—we match repairs and replacements to your home’s layout and your comfort goals.",
    },
    {
      name: "Millcreek",
      blurb:
        "East-bench and Millcreek-area residents get thorough combustion checks, filter and coil care, and honest guidance when repair vs. replace is on the table.",
    },
    {
      name: "Taylorsville",
      blurb:
        "We serve rambler and multi-level homes with duct balancing, thermostat troubleshooting, and seasonal maintenance that fits busy family schedules.",
    },
    {
      name: "West Valley City",
      blurb:
        "Large geographic spread, same consistent Peak standard: clear pricing, respectful crews, and repairs and installs backed by licensed Utah HVAC work.",
    },
    {
      name: "Riverton",
      blurb:
        "Growing communities need scalable HVAC care—from first-year warranty checks to full replacements as systems age; we’re a short drive away for Riverton homeowners.",
    },
    {
      name: "Herriman",
      blurb:
        "Newer construction and open-floor plans benefit from proper airflow design; we verify charge, static pressure, and safety controls on every Herriman service call.",
    },
    {
      name: "Bluffdale",
      blurb:
        "South end of the valley sees hot, dry days; we keep AC blowing cold and furnaces ready for winter nights with maintenance tuned to local run hours.",
    },
    {
      name: "Magna",
      blurb:
        "West-side Salt Lake County homeowners get the same emergency and scheduled service for furnaces, AC, and indoor air quality add-ons when it makes sense.",
    },
  ],
};

export const utahCountyAreaContent: ServiceAreaRegionContent = {
  helmetTitle: "HVAC Service Utah County | AC & Furnace Provo, Orem, Lehi | Peak HVAC",
  helmetDescription:
    "Peak HVAC Services in Utah County: AC repair, furnace repair, installation, and maintenance in Provo, Orem, Lehi, and surrounding cities. Call (801) 738-2275.",
  canonicalPath: "/service-areas/utah-county",
  midStrip: "Utah County · From Provo to Lehi · Residential HVAC you can trust",
  introParagraphs: [
    "Utah County grows fast—and furnaces and air conditioners work hard through baking summers and cold mountain-valley winters. Peak HVAC Services brings the same licensed, customer-first approach you expect in Salt Lake County to Provo, Orem, Lehi, and the string of cities along I-15 and the bench.",
    "We repair refrigerant leaks, failed ignitors, noisy blowers, and miswired thermostats; we install right-sized equipment with attention to duct connections and code; we maintain systems so warranties stay valid and efficiency doesn’t quietly drop year after year.",
    "If your city is listed below, we’re structuring our routes to serve you. Call (801) 738-2275 to confirm timing and book repair, replacement, or a seasonal tune-up.",
  ],
  cities: [
    {
      name: "Provo",
      blurb:
        "BYU-area rentals to east-bench homes—we troubleshoot uneven cooling, furnace lockouts, and aging package units with clear next steps for Provo properties.",
    },
    {
      name: "Orem",
      blurb:
        "Dense neighborhoods and busy families need flexible scheduling; we offer AC and furnace service that respects your time and leaves work areas tidy.",
    },
    {
      name: "Lehi",
      blurb:
        "Tech corridor growth means lots of newer systems—and we’re equipped for warranty-adjacent issues, commissioning checks, and full replacements in Lehi.",
    },
    {
      name: "American Fork",
      blurb:
        "Bench winds and temperature drops make reliable heat a must; we service heat pumps, dual-fuel setups, and traditional gas furnaces across American Fork.",
    },
    {
      name: "Pleasant Grove",
      blurb:
        "From starter homes to larger footprints, we balance airflow, verify safeties, and help you plan upgrades before failure hits on the hottest or coldest day.",
    },
    {
      name: "Spanish Fork",
      blurb:
        "South county homeowners get honest load conversations for new installs and fast diagnosis when the AC won’t keep up or the furnace short-cycles.",
    },
    {
      name: "Springville",
      blurb:
        "Art City and nearby areas benefit from maintenance before peak seasons—coils, burners, and electrical checks tailored to how your equipment actually runs.",
    },
    {
      name: "Payson",
      blurb:
        "Further south along the valley, we still bring Peak’s standard: licensed techs, explained invoices, and repairs meant to last—not quick patches.",
    },
    {
      name: "Saratoga Springs",
      blurb:
        "Lakeside microclimate can mean heavy AC use; we focus on refrigerant health, drain lines, and efficiency so your system survives the summer workload.",
    },
    {
      name: "Eagle Mountain",
      blurb:
        "Newer communities and longer drive times make reliable scheduling important—we communicate arrival windows and options when Eagle Mountain systems need help.",
    },
    {
      name: "Highland",
      blurb:
        "Larger homes often need zoning and airflow attention; we measure performance and recommend fixes that improve comfort without overselling equipment.",
    },
    {
      name: "Lindon",
      blurb:
        "Tucked between Orem and Pleasant Grove, Lindon properties get full HVAC service from tune-ups to emergency no-heat and no-cool calls.",
    },
    {
      name: "Vineyard",
      blurb:
        "Waterfront-adjacent growth means mixed housing types; we’re experienced with tight utility closets, rooftop linesets, and modern high-efficiency gear.",
    },
    {
      name: "Mapleton",
      blurb:
        "South bench exposure can stress outdoor units and furnaces alike—we inspect heat exchangers, capacitors, and condenser coils with safety first.",
    },
    {
      name: "Santaquin",
      blurb:
        "Southern Utah County calls for dependable winter heat and summer relief; we service splits, packaged units, and add-ons like filtration when it helps.",
    },
  ],
};

export const davisCountyAreaContent: ServiceAreaRegionContent = {
  helmetTitle: "HVAC Service Davis County UT | Bountiful, Layton, Farmington | Peak HVAC",
  helmetDescription:
    "HVAC repair, installation, and maintenance in Davis County, Utah—Layton, Bountiful, Farmington, and more. Peak HVAC Services. Call (801) 738-2275.",
  canonicalPath: "/service-areas/davis-county",
  midStrip: "Davis County · Bench to I-15 corridor · Licensed Utah HVAC",
  introParagraphs: [
    "Davis County stretches from the Bountiful bench down toward the Great Salt Lake and along I-15 through Layton, Clearfield, and Syracuse—each pocket with its own mix of older ranches, split-levels, and new construction. Peak HVAC Services provides furnace repair, AC repair, replacements, and seasonal maintenance with the same transparent process we use valley-wide.",
    "Bench communities catch cold air drainage in winter and sun load in summer; lakeside-adjacent areas deal with humidity quirks in shoulder seasons. We don’t guess—we test, measure, and explain what your system needs before we quote major work.",
    "Review the Davis County cities below for localized context, then call (801) 738-2275 to book. We’ll confirm we can reach you on the day and window that work best.",
  ],
  cities: [
    {
      name: "Layton",
      blurb:
        "Central Davis County’s largest city sees heavy demand for AC in July and furnace work in January—we keep Layton homes comfortable with timely repairs and installs.",
    },
    {
      name: "Bountiful",
      blurb:
        "Bench elevation and mature neighborhoods mean legacy furnaces and upgraded cooling; we respect older homes while meeting modern efficiency expectations.",
    },
    {
      name: "Clearfield",
      blurb:
        "Close to Hill AFB traffic patterns, many Clearfield homes need reliable systems on tight schedules—we offer clear communication and flexible booking.",
    },
    {
      name: "Syracuse",
      blurb:
        "West Davis growth includes newer heat pumps and high-efficiency gas furnaces; we service both and help you understand rebates-friendly options when you replace.",
    },
    {
      name: "Farmington",
      blurb:
        "Station Park area to east bench, Farmington homeowners trust us for maintenance that catches small issues before they become emergency weekend calls.",
    },
    {
      name: "Kaysville",
      blurb:
        "Family-oriented blocks and good schools mean busy households—we work efficiently on tune-ups, capacitor swaps, and full system changeouts in Kaysville.",
    },
    {
      name: "Centerville",
      blurb:
        "Smaller footprint, high expectations: we bring careful workmanship to tight utility spaces and pride ourselves on leaving Centerville jobs cleaner than we found them.",
    },
    {
      name: "North Salt Lake",
      blurb:
        "Industrial-adjacent and residential mix—we handle odor investigations when HVAC-related, combustion safety, and cooling for south-facing lots that bake in summer.",
    },
    {
      name: "Woods Cross",
      blurb:
        "Compact city, quick access for our teams; Woods Cross residents get responsive help for pilot and ignition problems, frozen coils, and thermostat faults.",
    },
    {
      name: "Clinton",
      blurb:
        "West Davis wind and dust can load filters and coils faster—we recommend maintenance intervals matched to how hard your Clinton system actually runs.",
    },
    {
      name: "West Point",
      blurb:
        "Newer homes with tight envelopes need proper ventilation balance; we verify airflow and humidity so comfort stays steady through four seasons.",
    },
    {
      name: "Sunset",
      blurb:
        "Sunset properties along the corridor get full Peak coverage for gas furnace service, electric air handlers, and central AC performance checks.",
    },
    {
      name: "Fruit Heights",
      blurb:
        "Cherry Hill and bench-adjacent lots—we address temperature stratification, duct leakage, and equipment sizing when fruit trees and shade change your load profile.",
    },
    {
      name: "West Bountiful",
      blurb:
        "Between Bountiful and Centerville, we’re a natural fit for same-week tune-ups, capacitor replacements, and honest second opinions on major repairs.",
    },
  ],
};

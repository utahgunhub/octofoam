export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogTestimonial {
  quote: string;
  author: string;
  context: string;
}

export interface BlogPostData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  metaDescription: string;
  sections: BlogSection[];
  faqs: BlogFaq[];
  testimonials: BlogTestimonial[];
}

export const blogPosts: BlogPostData[] = [
  {
    slug: "furnace-repair-signs-before-winter-utah",
    title: "5 Signs Your Furnace Needs Repair Before Winter",
    date: "Feb 15, 2026",
    excerpt:
      "Don't get caught in the cold. Learn the warning signs that your furnace is struggling and when to call a professional.",
    metaDescription:
      "Spot furnace problems before Utah’s first hard freeze. Peak HVAC covers five warning signs for Salt Lake County homeowners, when to call for repair, and FAQs.",
    sections: [
      {
        heading: "Why a weak furnace shows up first when the Wasatch Front turns cold",
        paragraphs: [
          "Along the Wasatch Front, furnaces idle through mild shoulder seasons, then get hammered when overnight lows dive toward the teens. That first sustained cold snap is when bearings, heat exchangers, and ignition parts that were “fine in October” suddenly fail under load. If you wait until the house won’t warm past sixty degrees, you’re competing with every other household in Draper, Murray, and West Valley City for same-day service.",
          "Scheduling a furnace check in late fall—before the inversion layer traps cold air in the Salt Lake Valley—gives you time to fix small issues without an emergency premium. Below are five signs we see most often on Utah service calls, from bench communities in Cottonwood Heights to newer builds in Herriman.",
        ],
      },
      {
        heading: "1. Rooms that heat unevenly or never quite feel right",
        paragraphs: [
          "If upstairs bedrooms stay chilly while the main floor roasts, people blame duct design—and sometimes that’s fair—but we also see weak blower motors, dirty flame sensors, and clogged filters exaggerating airflow problems. Utah’s dust, pet hair, and dry winter air load filters faster than many homeowners expect.",
          "When one zone never catches up even after you replace the filter, it’s worth a professional look before you assume you need all-new ductwork.",
        ],
      },
      {
        heading: "2. Short cycling: the furnace keeps turning on and off",
        paragraphs: [
          "Rapid on-off cycles wear out components and usually mean something is wrong with airflow, thermostat placement, or a safety switch doing its job. In older Salt Lake City bungalows with retrofitted thermostats, we sometimes find the device in a sunny hallway that confuses the system all winter.",
          "Persistent short cycling is not a quirk; it’s a countdown to a no-heat call on the coldest night of January.",
        ],
      },
      {
        heading: "3. New rattles, bangs, or high-pitched whines",
        paragraphs: [
          "A brief click at startup is normal; a metallic shriek that gets worse each week often points to a blower or inducer motor on its way out. Utah’s low humidity doesn’t cause those sounds, but it does make people run furnaces longer, which accelerates wear on already tired parts.",
          "If you hear a boom on ignition, shut the system off and call for service—delayed ignition and cracked heat exchangers are not DIY diagnostics.",
        ],
      },
      {
        heading: "4. Rising gas bills without a change in thermostat habits",
        paragraphs: [
          "Rocky Mountain winters already push monthly gas usage up. When your bill jumps higher than neighbors with similar-sized homes, inefficient combustion, duct leakage, or an aging heat exchanger may be wasting fuel. We compare temperature rise, static pressure, and combustion readings to show whether you’re dealing with maintenance, repair, or replacement math.",
        ],
      },
      {
        heading: "5. Yellow or flickering burner flame, or any hint of exhaust in the house",
        paragraphs: [
          "A healthy gas flame should burn steady and blue. Yellow tips, soot, or shaking flames can signal dirty burners or venting problems. If anyone notices headaches, nausea, or a sharp odor near the equipment, treat it as urgent: open windows, leave the area, and call your utility or HVAC professional per manufacturer guidance.",
          "Carbon monoxide is colorless and odorless; we recommend working CO detectors on every level in Utah homes, especially those with attached garages and tight envelopes.",
        ],
      },
      {
        heading: "When repair makes sense versus when to plan a replacement",
        paragraphs: [
          "A single ignitor or pressure switch on a middle-aged furnace is usually worth fixing. Repeated failures, a cracked heat exchanger, or equipment past fifteen to twenty years often tips the balance toward a high-efficiency replacement—especially with Utah’s incentives and winter reliability on the line.",
          "Peak HVAC Services walks Salt Lake County and nearby homeowners through honest options, documented findings, and pricing before any major work begins.",
        ],
      },
    ],
    faqs: [
      {
        question: "How soon should I schedule furnace service before winter in Utah?",
        answer:
          "Aim for September through early November. You beat the rush, catch parts while suppliers are stocked, and verify safe operation before the first valley-wide cold spell.",
      },
      {
        question: "Can I run my furnace if it’s short cycling?",
        answer:
          "Briefly to keep pipes from freezing, yes—but treat it as a priority service call. Continuous short cycling can overheat internal components and trip safeties.",
      },
      {
        question: "Do Utah’s inversions affect my furnace?",
        answer:
          "Inversions worsen outdoor air quality; they don’t directly break furnaces, but they coincide with the heaviest heating season, which is when neglected systems fail under load.",
      },
      {
        question: "Is a higher thermostat setting bad for an aging furnace?",
        answer:
          "Cranking the thermostat won’t heat the home faster; it only makes the system run longer. If the house can’t reach setpoint, there’s a capacity or airflow issue to diagnose.",
      },
      {
        question: "Do you service furnaces in Sandy and South Jordan the same week?",
        answer:
          "We route technicians across the valley daily. Call (801) 738-2275 with your address and symptoms—we’ll confirm the earliest opening that fits your schedule.",
      },
    ],
    testimonials: [
      {
        quote:
          "Our furnace started clicking nonstop before Thanksgiving. They found a bad ignitor the same day and didn’t try to sell us a new unit when a repair was enough. House in Rose Park has been quiet and warm since.",
        author: "Elena V.",
        context: "Rose Park, Salt Lake City",
      },
      {
        quote:
          "I was sure we needed all new ducts because the upstairs never warmed up. Turns out the blower was weak and the filter was the wrong size. Honest diagnosis saved us thousands.",
        author: "Marcus T.",
        context: "Daybreak, South Jordan",
      },
      {
        quote:
          "They walked me through the flame color photos I sent, told me what was normal, and still came out to clean burners before the January freeze. That’s the kind of calm you want with kids at home.",
        author: "Priya S.",
        context: "Millcreek area",
      },
    ],
  },
  {
    slug: "when-to-replace-furnace-utah",
    title: "When Should You Replace Your Furnace?",
    date: "Jan 28, 2026",
    excerpt:
      "Is your furnace over 15 years old? Find out when repair costs outweigh the benefits and a new installation makes sense.",
    metaDescription:
      "Deciding to replace your furnace in Utah? Learn age benchmarks, repair-vs-replace math for Wasatch Front winters, efficiency gains, and local FAQs.",
    sections: [
      {
        heading: "Age is a clue—not the whole story",
        paragraphs: [
          "Fifteen years is a common benchmark because heat exchanger warranties shrink, parts get scarce, and efficiency standards have moved forward. We’ve seen thirty-year-old beasts in Capitol Hill basements that still pass combustion tests, and eight-year-old units in new West Jordan subdivisions fail from poor installation.",
          "In Utah, run hours pile up fast: cold nights, dry air, and families who keep homes at steady seventy-two through February. That usage matters more than the birthday on the nameplate.",
        ],
      },
      {
        heading: "Repairs that repeat are a financial red flag",
        paragraphs: [
          "If you’ve replaced the same class of part twice—think inducer motors, control boards, or pressure switches—or you’re facing a four-figure heat exchanger job on old equipment, stack those invoices against the installed cost of a modern condensing furnace.",
          "We show homeowners a simple break-even: projected repair spend over three winters versus payment on a higher-efficiency system with lower gas use.",
        ],
      },
      {
        heading: "Comfort complaints that won’t go away",
        paragraphs: [
          "Oversized furnaces from the building boom years short-cycle, dry out the air, and leave bedrooms cold in two-story plans common from Lehi to Layton. Sometimes zoning and duct fixes help; sometimes right-sizing replacement is the durable answer.",
          "If you’ve already addressed obvious duct issues and the system still can’t hold setpoint on single-digit nights, capacity or duct design may be wrong for the home.",
        ],
      },
      {
        heading: "Efficiency: what Utah homeowners actually save",
        paragraphs: [
          "Jumping from an older 80% AFUE furnace to a 90+ condensing model recovers more heat from combustion gases—meaning fewer therms for the same comfort. Exact savings depend on insulation, thermostat habits, and gas rates, but many valley households see noticeable winter bill relief once commissioning is done correctly.",
          "Poor condensate drainage or incorrect venting can erase those gains; professional installation matters as much as the efficiency sticker.",
        ],
      },
      {
        heading: "Safety and peace of mind",
        paragraphs: [
          "Heat exchanger cracks, rusted flues, and backdrafting are non-negotiable conversations. We document findings with photos and clear language so you can decide on repair limits or replacement without pressure.",
          "If you’re staging a home sale in Davis or Utah County, a documented furnace inspection can prevent last-minute repair credits.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is it cheaper to replace a furnace in spring in Utah?",
        answer:
          "Shoulder seasons can mean more flexible scheduling, but pricing depends on equipment and labor, not magic months. If your furnace is unsafe or unreliable, winter replacement is still common—we stock common sizes for valley homes.",
      },
      {
        question: "Will a bigger furnace heat my home faster?",
        answer:
          "Oversizing causes short cycling, uneven temps, and extra wear. Manual J load calculations—or careful field sizing for existing homes—prevent that mistake.",
      },
      {
        question: "Can I keep my old thermostat with a new furnace?",
        answer:
          "Often yes, but Wi-Fi and two-stage systems may need compatible controls. We’ll confirm wiring and features before installation day.",
      },
      {
        question: "How long does a furnace swap take in a typical Utah rancher?",
        answer:
          "Many replacements finish in a day. Complicated venting, crawlspace access, or pad upgrades can add time—we’ll spell that out in the quote.",
      },
      {
        question: "Do you haul away the old furnace?",
        answer:
          "Yes. We dispose of equipment per local requirements and leave the utility closet or basement work area broom-clean.",
      },
    ],
    testimonials: [
      {
        quote:
          "Our 1998 furnace finally gave up during a cold snap. They had options quoted the same morning and installed two days later. Gas bill this January was lower than last year even with colder weather.",
        author: "Heather L.",
        context: "Bountiful bench",
      },
      {
        quote:
          "I appreciated that they showed me the heat exchanger photo instead of just saying ‘replace.’ We still chose a new unit, but I understood why.",
        author: "Jon K.",
        context: "Provo",
      },
      {
        quote:
          "Two-story home in Herriman finally heats evenly. They didn’t just drop in the biggest furnace—they actually talked duct static with us.",
        author: "Alyssa R.",
        context: "Herriman",
      },
    ],
  },
  {
    slug: "hvac-maintenance-tips-utah-homeowners",
    title: "HVAC Maintenance Tips for Utah Homeowners",
    date: "Jan 10, 2026",
    excerpt:
      "Simple maintenance steps you can take to keep your heating and cooling system running efficiently all year long.",
    metaDescription:
      "Utah-specific HVAC maintenance: filter schedules, condenser care for hot summers, furnace prep for inversions, and when to book professional tune-ups along the Wasatch Front.",
    sections: [
      {
        heading: "Why Utah’s climate is hard on HVAC equipment",
        paragraphs: [
          "Dry air, wide temperature swings, wind-blown dust, and summer UV at mile-high elevation stress outdoor condensers and indoor blowers alike. Your system might idle gently in May, then sprint through July afternoons near 100°F and January nights below 20°F.",
          "Maintenance isn’t about perfection—it’s about catching drift before it becomes a weekend emergency when half the valley is calling for service.",
        ],
      },
      {
        heading: "Filters: the boring task that prevents expensive drama",
        paragraphs: [
          "Check filters monthly during heavy heating and cooling months. MERV 11–13 pleats catch fine dust common along I-15 corridors but can load quickly; washable filters need honest drying time before reinstall.",
          "Write the install date on the frame—future you (and the next homeowner) will thank you.",
        ],
      },
      {
        heading: "Outdoor unit hygiene after windstorms",
        paragraphs: [
          "After a south wind kicks cottonwood fuzz, weed debris, or bark into the coil, airflow drops and head pressure climbs. Gently rinse the coil from the inside out with a hose on a wide spray—never pressure-wash fins flat.",
          "Keep two feet of clearance around the condenser; decorative rocks and shrubs look nice but often choke intake.",
        ],
      },
      {
        heading: "Condensate lines and humidifier pads",
        paragraphs: [
          "Utah’s dryness drives many homeowners to bypass humidifiers or steam units. Algae and mineral sludge still plug traps and hoses, especially if the AC runs wet in summer. Annual cleaning prevents pan overflows that stain ceilings.",
        ],
      },
      {
        heading: "What belongs on a professional tune-up checklist",
        paragraphs: [
          "Homeowner tasks handle hygiene; technicians measure refrigerant charge, test capacitors, verify temperature rise, inspect heat exchangers, and document electrical draws. We also confirm CO safety and thermostat calibration—small errors that add up on utility bills.",
          "Booking spring AC and fall furnace visits spreads technician availability and keeps warranties happy with documented service.",
        ],
      },
    ],
    faqs: [
      {
        question: "How often should Utah homeowners service HVAC systems?",
        answer:
          "At minimum, annual heating and annual cooling visits. Homes with pets, allergies, or new construction dust may benefit from mid-season filter checks you can DIY.",
      },
      {
        question: "Can I cover my AC condenser in winter?",
        answer:
          "Most manufacturers discourage airtight covers that trap moisture. If you use a breathable top cap against falling ice, remove it before first spring run.",
      },
      {
        question: "Does a smart thermostat replace maintenance?",
        answer:
          "No. Alerts help, but they can’t clean coils, verify gas pressure, or test safeties. Pair smart controls with yearly pro service.",
      },
      {
        question: "Why does my AC freeze up in Utah?",
        answer:
          "Low airflow, low refrigerant, or stuck metering devices are common culprits. Turn the system off, let ice melt, change the filter, then call if it refreezes.",
      },
      {
        question: "Do you offer maintenance plans in Salt Lake County?",
        answer:
          "Call (801) 738-2275 to ask about seasonal scheduling and priority service—we’ll match a plan to how hard your system runs.",
      },
    ],
    testimonials: [
      {
        quote:
          "They showed me how caked my coil was after one dusty summer near the gravel pit. Night-and-day difference in airflow after cleaning.",
        author: "Diego M.",
        context: "West Jordan",
      },
      {
        quote:
          "I’m picky about filters because of asthma. They didn’t upsell the highest MERV blindly—they checked static pressure first.",
        author: "Nora J.",
        context: "Sugar House",
      },
      {
        quote:
          "Fall furnace visit caught a cracked hose clamp on the humidifier before it soaked the closet. Small thing, big headache avoided.",
        author: "Chris P.",
        context: "Farmington",
      },
    ],
  },
  {
    slug: "improve-indoor-air-quality-utah-homes",
    title: "How to Improve Your Home's Air Quality",
    date: "Dec 22, 2025",
    excerpt:
      "From air filters to duct cleaning, discover ways to breathe easier and keep your indoor air fresh and clean.",
    metaDescription:
      "Improve indoor air quality in Utah homes: filtration, humidity balance during dry winters, ventilation during inversions, duct considerations, and when to call Peak HVAC.",
    sections: [
      {
        heading: "Outdoor smoke and inversion days vs. what happens indoors",
        paragraphs: [
          "When PM2.5 climbs along the Wasatch Front, tightening the envelope keeps pollutants out—but also traps VOCs from cleaners, cooking, and new flooring. Balanced strategies pair good filtration with controlled ventilation or portable air cleaners in key rooms.",
          "Your HVAC system can be an ally if ducts are tight, filters are right-sized, and blowers move enough air without bypassing the media.",
        ],
      },
      {
        heading: "Filtration that matches your duct system",
        paragraphs: [
          "Thicker isn’t always better. High-MERV filters on undersized returns choke airflow, freeze coils, and crack heat exchangers from overheating. We measure static pressure before recommending upgrades like media cabinets or HEPA-adjacent solutions.",
        ],
      },
      {
        heading: "Humidity: Utah’s winter scratchy-throat season",
        paragraphs: [
          "Relative humidity in the low teens feels normal here, but it aggravates sinuses and static. Steam humidifiers, bypass units, and disciplined water-panel changes keep moisture predictable without growing mold in wrong places.",
          "Summer is the opposite—short bursts of monsoon moisture can spike indoor RH if AC isn’t dehumidifying effectively.",
        ],
      },
      {
        heading: "Duct cleaning: helpful sometimes, oversold other times",
        paragraphs: [
          "After major remodels, rodent issues, or visible debris blowing from registers, professional duct cleaning makes sense. If ducts are basically clean, the money may go further on sealing leaks and upgrading filtration.",
          "We’ll tell you honestly if cameras show a problem worth addressing.",
        ],
      },
      {
        heading: "Kitchen and bath fans actually matter",
        paragraphs: [
          "Exhausting grease and moisture at the source keeps particulates and mold drivers out of the HVAC airstream. Make sure bath fans vent outside—not into the attic where Utah cold can condense moisture into sheathing damage.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do plants indoors help Utah air quality?",
        answer:
          "They brighten rooms but remove pollutants slowly compared to filtration. Use them for joy, not as your primary IAQ strategy.",
      },
      {
        question: "Are ionizers a good idea?",
        answer:
          "Opinions vary by device and maintenance. We focus on proven steps—sealed ducts, correct filters, humidity control, and source removal—before exotic gadgets.",
      },
      {
        question: "Should I run my fan “On” during bad air days?",
        answer:
          "Continuous fan can improve mixing but may also drive more particles if filters are weak. Upgrade filtration first, then discuss circulation settings with a technician.",
      },
      {
        question: "Can HVAC help with wildfire smoke?",
        answer:
          "Tight windows plus high-quality filtration reduces indoor levels. On orange-sky days, avoid opening doors unnecessarily and consider supplemental HEPA units in bedrooms.",
      },
      {
        question: "Where do you test air quality issues in Utah homes?",
        answer:
          "We start with interviews, visual duct inspection, humidity readings, and combustion safety. Lab-grade IAQ testing can be arranged when symptoms persist after HVAC basics are solid.",
      },
    ],
    testimonials: [
      {
        quote:
          "Kids’ allergies were brutal every February. Better filter housing plus a steam humidifier at sane humidity stopped the morning nosebleeds.",
        author: "Kim W.",
        context: "Cottonwood Heights",
      },
      {
        quote:
          "Another company quoted duct cleaning sight unseen. Peak looked first and said our ducts were fine—seal the return boot instead. Rare honesty.",
        author: "Omar H.",
        context: "Murray",
      },
      {
        quote:
          "We work from home near Redwood Road. Upgraded media filter cut the dusty smell whenever trucks roll by.",
        author: "Taylor B.",
        context: "Taylorsville",
      },
    ],
  },
  {
    slug: "heat-pump-vs-furnace-utah",
    title: "Heat Pump vs Furnace: Which Is Right for Utah?",
    date: "Dec 5, 2025",
    excerpt:
      "Compare heat pumps and furnaces for Salt Lake Valley's climate. We break down efficiency, cost, and comfort.",
    metaDescription:
      "Heat pump or furnace for Utah’s climate? Compare cold-weather performance, backup heat, gas vs electric costs along the Wasatch Front, and practical FAQs.",
    sections: [
      {
        heading: "Utah’s winters are cold—but not impossible for modern heat pumps",
        paragraphs: [
          "Cold-climate heat pumps today use inverter compressors and intelligent defrost to pull heat from outdoor air well below freezing. That doesn’t mean every home should rip out gas furnaces tomorrow; it means the conversation changed from “heat pumps don’t work here” to “which application fits this house and this utility rate structure.”",
        ],
      },
      {
        heading: "Where furnaces still shine",
        paragraphs: [
          "High-output gas heat recovers quickly after you’ve aired out the house, handles extreme cold snaps with minimal fuss, and pairs naturally with existing flues in many older Salt Lake neighborhoods. If you love toasty supply air in minutes, furnaces deliver that sensation cheaply in therms.",
        ],
      },
      {
        heading: "Heat pump advantages: cooling efficiency and electrification path",
        paragraphs: [
          "A heat pump is an air conditioner that reverses refrigerant flow for heat. One cabinet covers summer peaks and winter shoulder loads with strong SEER2 cooling performance. For homeowners planning solar or wanting to reduce gas usage, heat pumps offer a flexible bridge—especially with a planned backup heat source for sub-zero nights.",
        ],
      },
      {
        heading: "Dual-fuel and hybrid layouts common in the valley",
        paragraphs: [
          "Pairing a heat pump with a furnace gives efficient mild-weather heat and gas-fired backup when Orem or Logan hits single digits for a week straight. Controls decide which stage runs, ideally without you micromanaging thermostats.",
        ],
      },
      {
        heading: "Cost questions that actually decide the winner",
        paragraphs: [
          "Upfront install, available rebates, insulation quality, duct leakage, and whether you need electrical service upgrades all swing total cost. We model a few winters of operating estimates using your tariff class—not generic national averages—so the decision fits Utah reality.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will a heat pump work in Park City or Heber?",
        answer:
          "Often yes with proper sizing and backup heat, but design matters more at elevation and in wind-exposed homes. Site visit data beats internet rules of thumb.",
      },
      {
        question: "Are heat pumps louder than furnaces?",
        answer:
          "Outdoor units make fan noise; indoor heads or air handlers are usually quieter than legacy belt-drive blowers. Placement and sound blankets can address neighbor concerns.",
      },
      {
        question: "Do I need new ducts for a heat pump?",
        answer:
          "Sometimes larger ducts help airflow for heat mode; sometimes existing systems are fine after testing. We verify before quoting.",
      },
      {
        question: "Can I keep my gas furnace as backup?",
        answer:
          "Yes—dual-fuel setups are popular in Utah for peace of mind during arctic fronts.",
      },
      {
        question: "How do I compare quotes between contractors?",
        answer:
          "Ask for AHRI-matched equipment numbers, line-set length assumptions, warranty terms, and whether commissioning includes refrigerant weigh-in and auxiliary heat staging tests.",
      },
    ],
    testimonials: [
      {
        quote:
          "We went dual-fuel in Lehi. Heat pump carried the house until that freak week in January; furnace kicked in seamlessly. Bills stayed predictable.",
        author: "Spencer C.",
        context: "Lehi",
      },
      {
        quote:
          "I wanted off gas eventually but wasn’t ready for all-electric. They mapped a phased plan instead of pushing one box.",
        author: "Renee D.",
        context: "9th & 9th, SLC",
      },
      {
        quote:
          "Honest talk about panel capacity saved us a surprise upgrade mid-project. That’s local experience showing.",
        author: "Vikram N.",
        context: "Sandy",
      },
    ],
  },
  {
    slug: "annual-ac-tune-up-saves-money-utah",
    title: "Why Annual AC Tune-Ups Save You Money",
    date: "Nov 18, 2025",
    excerpt:
      "A yearly AC maintenance visit can prevent costly breakdowns and extend the life of your cooling system.",
    metaDescription:
      "Annual AC tune-ups in Utah prevent summer breakdowns, protect warranty coverage, cut electric waste before July peaks, and keep Salt Lake area homes comfortable.",
    sections: [
      {
        heading: "July in the valley is a stress test for compressors",
        paragraphs: [
          "When afternoon highs sit in the high nineties and overnight lows barely dip, air conditioners run marathon hours. Weak capacitors, dirty coils, and a few ounces low on refrigerant become the difference between steady seventy-five indoors and a sticky Sunday waiting for emergency service.",
          "A spring tune-up moves you ahead of that queue.",
        ],
      },
      {
        heading: "Efficiency losses you can feel on the power bill",
        paragraphs: [
          "Each degree of superheat or subcool drift, each dusty coil fin, and each dragging blower amp shows up in kWh—especially on Rocky Mountain Power’s summer tiers. Cleaning coils and verifying charge restores designed performance instead of compensating with longer run times.",
        ],
      },
      {
        heading: "Warranty paperwork loves documentation",
        paragraphs: [
          "Manufacturers increasingly ask for proof of maintenance when major components fail within the coverage window. A dated invoice with checklist items can be the line between a covered compressor and a five-figure surprise.",
        ],
      },
      {
        heading: "Small parts fail loudly—and cheaply if caught early",
        paragraphs: [
          "Contactors pit, capacitors bulge, and condensate switches gum up with algae. These are inexpensive fixes during maintenance that prevent collateral damage to compressors and control boards.",
        ],
      },
      {
        heading: "Utah wind, dust, and cottonwood fluff",
        paragraphs: [
          "Local environmental factors clog outdoor coils faster than coastal climates. Maintenance includes inspecting electrical compartments for rodent nesting after winter—yes, it happens in shed-mounted units from Tooele to Heber.",
        ],
      },
      {
        heading: "Pair AC service with a quick furnace once-over",
        paragraphs: [
          "Many homeowners bundle a cooling visit with a furnace safety check in late spring. One truck roll, coordinated filters, and a single conversation about the whole system’s health.",
        ],
      },
    ],
    faqs: [
      {
        question: "When should I schedule AC maintenance in Utah?",
        answer:
          "April through early June is ideal—before the first sustained heat wave and after nights stay above freezing for outdoor coil washing.",
      },
      {
        question: "How long does a tune-up take?",
        answer:
          "Plan sixty to ninety minutes for a thorough residential system, longer for multi-zone or commercial equipment.",
      },
      {
        question: "Will you top off refrigerant if it’s low?",
        answer:
          "Only after leak checking and explaining why levels dropped. Refrigerant isn’t a consumable like oil; low charge means a problem to fix.",
      },
      {
        question: "Can maintenance prevent water damage?",
        answer:
          "Clearing drains and testing overflow switches stops many ceiling stains before they start.",
      },
      {
        question: "Do you service mini-splits?",
        answer:
          "Yes—filter deep-clean, coil inspection, and drain testing differ by brand; we follow manufacturer procedures.",
      },
    ],
    testimonials: [
      {
        quote:
          "Capacitor was on its last legs in May. They swapped it for almost nothing compared to what a July compressor call would’ve cost.",
        author: "Lydia F.",
        context: "Riverton",
      },
      {
        quote:
          "Our upstairs unit runs nonstop every August. After the tune-up it actually cycles normally—first time in three years.",
        author: "Greg A.",
        context: "Draper",
      },
      {
        quote:
          "They texted photos of the dirty coil versus after rinse. I get why my bill dropped the next month.",
        author: "Sofia M.",
        context: "Ogden area",
      },
    ],
  },
];

export const blogPostsBySlug = Object.fromEntries(blogPosts.map((p) => [p.slug, p]));

export function getBlogPost(slug: string): BlogPostData | undefined {
  return blogPostsBySlug[slug];
}

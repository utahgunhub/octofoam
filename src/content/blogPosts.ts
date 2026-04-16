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
    slug: "open-vs-closed-cell-spray-foam",
    title: "Open Cell vs Closed Cell Spray Foam: Which Do You Need?",
    date: "Mar 10, 2026",
    excerpt:
      "Not all spray foam is the same. Learn the key differences between open cell and closed cell foam and when to use each.",
    metaDescription:
      "Open cell vs closed cell spray foam insulation explained. Octofoam covers R-value, moisture resistance, cost, and best applications for Indiana homes and buildings.",
    sections: [
      {
        heading: "The basics: what makes them different",
        paragraphs: [
          "Open cell foam expands more during application, creating a soft, spongy texture with a lower R-value per inch (around R-3.5). Closed cell foam is denser, more rigid, and delivers roughly R-6 to R-7 per inch.",
          "Both seal air effectively — the primary reason spray foam outperforms traditional insulation. The choice comes down to your specific application, budget, and moisture exposure.",
        ],
      },
      {
        heading: "When open cell foam is the right call",
        paragraphs: [
          "Open cell is ideal for interior walls, interior attic applications, and areas where you want sound dampening. It's also more affordable per square foot, making it a practical choice for large interior areas.",
          "In central Indiana, open cell is commonly used in residential attics where moisture is managed and budget is a factor.",
        ],
      },
      {
        heading: "When closed cell foam is worth the extra cost",
        paragraphs: [
          "Closed cell is the go-to for crawl spaces, metal buildings, exterior walls, and any application with moisture exposure. Its vapor barrier properties and higher R-value per inch make it ideal for tighter spaces and extreme conditions.",
          "For agricultural buildings, barns, and metal structures in Indiana, closed cell holds up far better over time.",
        ],
      },
      {
        heading: "Structural benefits of closed cell foam",
        paragraphs: [
          "One underappreciated benefit of closed cell foam is the structural rigidity it adds to walls and rooflines. Applied to metal building panels, it significantly stiffens the structure and reduces noise from rain and wind.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which foam type is better for an Indiana crawl space?",
        answer:
          "Closed cell is almost always the right choice for crawl spaces due to its moisture resistance and higher R-value in tight spaces.",
      },
      {
        question: "Can I use open cell foam in a metal building?",
        answer:
          "We typically recommend closed cell for metal buildings due to condensation risk. Open cell can absorb moisture if not properly vapor-managed.",
      },
      {
        question: "Is closed cell foam worth the higher cost?",
        answer:
          "In most exterior and moisture-prone applications, yes. The energy savings and long-term performance justify the upfront difference.",
      },
      {
        question: "How thick does spray foam need to be?",
        answer:
          "It depends on the application and target R-value. We'll recommend thickness during your free estimate based on your building and goals.",
      },
      {
        question: "Does Octofoam install both types?",
        answer:
          "Yes — we install open cell, closed cell, and roofing SPF depending on the project needs.",
      },
    ],
    testimonials: [
      {
        quote:
          "They explained the difference clearly and didn't just default to the more expensive option. We went with open cell for the attic and it's been great.",
        author: "Tom H.",
        context: "Greenfield, IN",
      },
      {
        quote:
          "Our crawl space had a moisture problem every spring. Closed cell foam from Octofoam sealed it completely.",
        author: "Karen M.",
        context: "New Palestine, IN",
      },
      {
        quote:
          "Professional crew, clean work, and they answered every question without rushing us.",
        author: "Dave R.",
        context: "Anderson, IN",
      },
    ],
  },
  {
    slug: "benefits-of-spray-foam-insulation",
    title: "5 Real Benefits of Spray Foam Insulation",
    date: "Feb 20, 2026",
    excerpt:
      "Spray foam does more than just insulate. Discover why more Indiana homeowners and businesses are switching from traditional insulation.",
    metaDescription:
      "Spray foam insulation benefits explained: air sealing, moisture control, structural support, allergen reduction, and long-term savings for Indiana properties.",
    sections: [
      {
        heading: "1. Superior air sealing",
        paragraphs: [
          "Unlike fiberglass batts that simply fill a cavity, spray foam expands into every crack and gap, creating a continuous air barrier. Studies show that air leakage accounts for up to 40% of a building's energy loss.",
          "A well-sealed building is a comfortable building — fewer drafts, more consistent temperatures, and less strain on your heating and cooling system.",
        ],
      },
      {
        heading: "2. Moisture and mold resistance",
        paragraphs: [
          "Closed cell spray foam acts as a vapor barrier, blocking moisture intrusion that leads to mold, rot, and structural damage. This is especially important in Indiana's humid summers.",
          "Traditional insulation absorbs moisture and loses R-value when wet. Spray foam maintains performance.",
        ],
      },
      {
        heading: "3. Allergen and pollutant reduction",
        paragraphs: [
          "By sealing gaps and cracks, spray foam limits the pathways for pollen, dust, and outdoor pollutants to enter your home. For households with allergies or asthma, this is a meaningful improvement.",
        ],
      },
      {
        heading: "4. Structural stability",
        paragraphs: [
          "Closed cell foam adds rigidity to walls and roof decks. On metal buildings, this reduces noise and stiffens panels. It's one of the few insulation materials that also contributes to structural strength.",
        ],
      },
      {
        heading: "5. Long-lasting performance",
        paragraphs: [
          "Spray foam doesn't sag, settle, or deteriorate over time the way fiberglass can. Once installed, it maintains its R-value and air sealing properties for the life of the building.",
          "Most homeowners never need to replace or supplement their spray foam insulation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is spray foam better than fiberglass?",
        answer:
          "For most applications, yes. Spray foam outperforms fiberglass on air sealing, moisture resistance, and long-term R-value retention.",
      },
      {
        question: "How long does spray foam last?",
        answer:
          "Properly installed spray foam can last the lifetime of the building — 50+ years — without replacement.",
      },
      {
        question: "Is spray foam safe after it cures?",
        answer:
          "Yes. Once cured, spray foam is inert and safe. The curing process typically takes 24 hours after application.",
      },
      {
        question: "Can spray foam help with noise reduction?",
        answer:
          "Open cell foam in particular provides good sound dampening. It won't fully soundproof a room, but it noticeably reduces sound transmission.",
      },
      {
        question: "How do I get a quote from Octofoam?",
        answer:
          "Call or text (317) 967-0505 or use our contact form. We offer free estimates on all projects.",
      },
    ],
    testimonials: [
      {
        quote:
          "Energy bills dropped noticeably after our attic was done. The house holds temperature so much better now.",
        author: "Jessica L.",
        context: "Fishers, IN",
      },
      {
        quote:
          "We had a dusty smell in the house for years. After the crawl space was sealed it completely went away.",
        author: "Mark S.",
        context: "Pendleton, IN",
      },
      {
        quote:
          "Our metal barn was freezing in winter and boiling in summer. Spray foam changed everything.",
        author: "Vera B.",
        context: "Greenfield, IN",
      },
    ],
  },
  {
    slug: "insulating-metal-buildings-indiana",
    title: "Why Metal Buildings Need Spray Foam Insulation",
    date: "Jan 15, 2026",
    excerpt:
      "Metal buildings present unique insulation challenges. Spray foam is the most effective solution — here's why.",
    metaDescription:
      "Metal building spray foam insulation in Indiana. Octofoam explains condensation, R-value needs, and why spray foam outperforms blanket insulation for barns, shops, and commercial buildings.",
    sections: [
      {
        heading: "The condensation problem in metal buildings",
        paragraphs: [
          "Metal conducts temperature rapidly. Without insulation, warm interior air hits cold metal surfaces and condenses — creating moisture, rust, and mold. This is the single biggest enemy of uninsulated metal buildings in Indiana.",
          "Spray foam applied directly to the metal panels creates a thermal break, eliminating the temperature differential that causes condensation.",
        ],
      },
      {
        heading: "Why blanket insulation often fails in metal buildings",
        paragraphs: [
          "Fiberglass blanket insulation is common in metal buildings, but it has a major flaw: it allows air to move through it. That air movement carries moisture and allows condensation to continue behind the insulation.",
          "Spray foam fills every gap and bonds directly to the metal surface, providing both insulation and air sealing in one application.",
        ],
      },
      {
        heading: "Agricultural applications: barns, grain bins, and equipment sheds",
        paragraphs: [
          "Indiana farmers deal with wide temperature swings that stress equipment and animals. Spray foam in livestock barns maintains more stable temperatures, reduces moisture-related animal health issues, and protects stored equipment from corrosion.",
          "For grain bins, foam can prevent moisture cycling that leads to grain spoilage.",
        ],
      },
      {
        heading: "Commercial and industrial metal buildings",
        paragraphs: [
          "Warehouses, shops, and manufacturing facilities in Indiana benefit from lower energy costs and more comfortable working conditions year-round. Spray foam's high R-value per inch is especially valuable when headroom is limited.",
        ],
      },
    ],
    faqs: [
      {
        question: "What R-value do I need for a metal building in Indiana?",
        answer:
          "For most Indiana applications, R-13 to R-19 in walls and R-25 to R-38 in the roof is typical. We'll recommend the right thickness during your estimate.",
      },
      {
        question: "Can spray foam be applied to an existing metal building?",
        answer:
          "Yes — we can retrofit spray foam into existing structures. We'll assess access and recommend the best approach.",
      },
      {
        question: "Does spray foam stop rust on metal buildings?",
        answer:
          "By eliminating condensation, spray foam significantly slows rust formation on interior surfaces.",
      },
      {
        question: "How much does metal building insulation cost?",
        answer:
          "Cost depends on building size, foam type, and thickness. Call (317) 967-0505 for a free on-site estimate.",
      },
      {
        question: "Do you insulate pole barns?",
        answer:
          "Yes — pole barns, post-frame buildings, and steel structures are among our most common agricultural projects.",
      },
    ],
    testimonials: [
      {
        quote:
          "Our shop used to get condensation dripping from the ceiling in winter. After spray foam it's completely dry.",
        author: "Randy J.",
        context: "Hancock County, IN",
      },
      {
        quote:
          "We insulated our new grain storage building with Octofoam. Professional job, done on schedule.",
        author: "Bill T.",
        context: "Rush County, IN",
      },
      {
        quote:
          "The crew was efficient and the results speak for themselves. Our equipment building stays at a usable temperature now.",
        author: "Scott M.",
        context: "Madison County, IN",
      },
    ],
  },
];

export const blogPostsBySlug = Object.fromEntries(blogPosts.map((p) => [p.slug, p]));

export function getBlogPost(slug: string): BlogPostData | undefined {
  return blogPostsBySlug[slug];
}

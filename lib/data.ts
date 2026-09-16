export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  colSpan: string; // "md:col-span-7" or "md:col-span-5"
  image: string;
  modalImage?: string;
  description: string;
  deliverables?: string;
  detailedDescription?: string;
  tags: string[];
  client: string;
  role: string;
}

export interface JournalEntry {
  id: string;
  title: string;
  category: string;
  readTime?: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  scope: string;
  timeline?: string;
  image: string;
  description: string;
  deliverables: string[];
  tags: string[];
}

export interface ExplorationItem {
  id: string;
  title: string;
  medium: string;
  image: string;
  rotation: string; // e.g. "-rotate-3", "rotate-2"
  aspect: string;
}

export const PROJECTS: Project[] = [
  {
    id: "automotive-motion",
    title: "Automotive Motion",
    subtitle: "Scroll-driven 3D showcase with cinematic motion and premium automotive styling.",
    category: "Interactive 3D / Web",
    year: "2025",
    colSpan: "md:col-span-7",
    image: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/portfolio/images/car%20concept.gif",
    modalImage: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/portfolio/images/car%20concept.gif",
    description: "An immersive 3D web experience for the iconic 911 Turbo, blending cinematic scroll motion, realistic lighting, and premium automotive storytelling.",
    deliverables: "Interactive responsive car website concept featuring a scroll-driven 3D Porsche model, hero banner, feature sections, animated model transitions, realistic material lighting, and final call-to-action section.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Three.js",
      "GLB 3D Model",
      "Custom WebGL Lighting",
      "Responsive Layout",
      "Node.js Static Dev Server"
    ],
    client: "Porsche 911 Turbo Digital Concept",
    role: "Creative Technologist & 3D Web Developer"
  },
  {
    id: "urban-architecture",
    title: "The Artisan Butcher",
    subtitle: "Shopify storefront overhaul & bespoke category experience",
    category: "Shopify / E-Com",
    year: "2026",
    colSpan: "md:col-span-5",
    image: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/portfolio/images/card_image.jpeg",
    modalImage: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/portfolio/images/inside_card.png",
    description: "A comprehensive Shopify e-commerce transformation and digital storefront overhaul for an artisanal butchery. Restructured product categories, created an interactive 'Shop by Category' section, redesigned the hero banner, elevated the About & heritage storytelling, and updated the contact & wholesale ordering experience.",
    detailedDescription: "Key deliverables and storefront enhancements:\n• Shop by Category Section: Engineered a visual cuts browser allowing customers to quickly navigate prime selections including Dry-Aged Beef, Hand-Trimmed Steaks, Free-Range Poultry, and Artisan Charcuterie.\n• Hero Redesign: Built a high-impact, cinematic header spotlighting seasonal butcher cuts, provenance standards, and local delivery assurances.\n• Product Categories: Restructured catalog taxonomy, pricing tiers, cut weights, and culinary preparation guides.\n• About Section: Elevated brand heritage, humane farm sourcing philosophy, and generations of artisanal butcher craft.\n• Contact & Inquiries: Streamlined custom cut inquiries, catering requests, and customer support channels.",
    tags: ["Shopify", "E-Commerce", "Shop By Category", "Hero Redesign", "About & Heritage", "Contact Portal"],
    client: "Artisan Butcher & Provisions",
    role: "Shopify Architect & UI/UX"
  },
  {
    id: "human-perspective",
    title: "SAIIIW Wellness",
    subtitle: "A responsive mental-health and wellness platform for Islamically integrated counselling services.",
    category: "Web Platform & UI/UX",
    year: "2026",
    colSpan: "md:col-span-5",
    image: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/portfolio/images/insta%207.jpeg",
    modalImage: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/portfolio/images/heroo.JPG",
    description: "A compassionate, responsive digital platform connecting individuals with Islamically integrated counselling, faith-aligned therapy modalities, and holistic mental wellness care.",
    deliverables: "Responsive interactive web platform for an Islamic mental health practice, including:\n• Streamlined client booking and consultation inquiry flow\n• Specialized service pathways (individual, couples, youth counselling)\n• Clinical team profiles, credentials, and practice philosophy\n• Faith-grounded mental health psychoeducation & articles\n• Accessible, calming aesthetic with responsive mobile-first design",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide React"],
    client: "SAIIIW Counselling & Therapy",
    role: "Full-Stack Developer & UI/UX"
  },
  {
    id: "brand-identity",
    title: "The Golf Club",
    subtitle: "Premium golf club website with cinematic scroll animation.",
    category: "Interactive Web / Motion",
    year: "2026",
    colSpan: "md:col-span-7",
    image: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/portfolio/images/golf%20cover_.gif",
    modalImage: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/portfolio/images/golf%20cover_.gif",
    description: "A cinematic golf club website with scroll-driven motion, premium membership flows, coaching sections, and an immersive course experience.",
    deliverables: "Responsive interactive marketing website for a premium golf club, including:\n• Scroll-animated 70-frame hero sequence\n• Membership pricing and plan selection\n• Coaching and golf improvement sections\n• Pro gallery and testimonials\n• Contact / booking modal\n• Smooth scrolling and polished motion interactions\n• Optimized golf imagery and video footer",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "Lenis Smooth Scroll",
      "Lucide React",
      "HTML5 Canvas"
    ],
    client: "The Reserve Golf Club",
    role: "Creative Developer & UI/UX"
  }
];

export const ALL_PROJECTS: Project[] = [
  ...PROJECTS,
  {
    id: "atelier-vaucanson",
    title: "Atelier Vaucanson",
    subtitle: "Precision luxury identity & interactive mechanical movement visualizer for haute horlogerie.",
    category: "Luxury & Brand Systems",
    year: "2025",
    colSpan: "md:col-span-7",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=85",
    modalImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=85",
    description: "Complete digital identity re-architecture, bespoke variable typography, and an interactive 3D tour of hand-finished tourbillon escapements for a Swiss independent micro-manufacture.",
    deliverables: "Interactive 3D mechanical movement explorer with exploded component inspection, bespoke typography system, private client allocation portal, and tactile packaging finish guidelines.",
    tags: ["Next.js", "Three.js", "WebGL Shaders", "Variable Typography", "Tailwind CSS"],
    client: "Atelier Vaucanson Geneva",
    role: "Lead Digital Architect & Brand Designer"
  },
  {
    id: "monolith-audio",
    title: "Monolith Soundscapes",
    subtitle: "Algorithmic sound synthesis platform & reactive web ambient soundboard.",
    category: "Creative Code & Audio",
    year: "2025",
    colSpan: "md:col-span-5",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=85",
    modalImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=85",
    description: "An experimental audio-visual soundboard running entirely on the Web Audio API with real-time FFT frequency mapping, harmonic node routing, and generative canvas waveforms.",
    deliverables: "Polyphonic synthesizer engine, real-time node graph editor, spatial binaural panning, dynamic waveform visualizer, and preset sharing via encrypted URL hash.",
    tags: ["Web Audio API", "HTML5 Canvas", "TypeScript", "Tailwind CSS", "DSP Processing"],
    client: "Acoustic Explorations Lab",
    role: "Sound Architect & Full-Stack Developer"
  },
  {
    id: "kryptos-telemetry",
    title: "Kryptos Telemetry",
    subtitle: "Sub-millisecond market execution dashboard & real-time order book visualizer.",
    category: "Fintech & Data Systems",
    year: "2024",
    colSpan: "md:col-span-5",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1600&q=85",
    modalImage: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1600&q=85",
    description: "Engineered a low-latency dark cockpit telemetry interface for quantitative institutional desks. Processes live depth-of-market feeds with zero frame drops.",
    deliverables: "WebSocket streaming pipeline handling 5,000+ ticks/sec, high-density order book canvas, liquidity heatmap visualizer, customizable multi-window workspace layout.",
    tags: ["React", "TypeScript", "WebSockets", "D3.js", "Canvas 2D", "Tailwind CSS"],
    client: "Kryptos Quantitative Capital",
    role: "Lead UI/UX Engineer"
  },
  {
    id: "venice-biennale",
    title: "Pavilion 404",
    subtitle: "Virtual architectural exhibition with spatial navigation and volumetric photogrammetry.",
    category: "Spatial Computing / 3D",
    year: "2024",
    colSpan: "md:col-span-7",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
    modalImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
    description: "A collaborative digital twin pavilion for the Venice Biennale collateral, allowing remote visitors to explore physical architectural installations with binaural spatial audio.",
    deliverables: "Interactive 3D architectural walk-through, progressive level-of-detail model streaming, curatorial audio narration zones, and mobile WebXR inspection mode.",
    tags: ["Three.js", "WebXR", "GLSL Shaders", "Spatial Audio", "React"],
    client: "Venice Biennale Collateral",
    role: "Creative Technologist"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "website-development",
    number: "01",
    title: "Website Development",
    category: "Architecture & Engineering",
    scope: "Next.js, Three.js & Motion",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85",
    description: "Bespoke high-performance digital flagships, responsive web platforms, and interactive 3D/WebGL experiences engineered with sub-second latency and cinematic scroll-driven choreographies.",
    deliverables: [
      "Custom Next.js & React App Router full-stack architecture",
      "Interactive 3D Three.js model integration & custom WebGL shaders",
      "Precision scroll-driven physics, Lenis motion & micro-interactions",
      "Mobile-first responsive fidelity with fluid typographic scaling",
      "Search Engine Optimization (SEO) & structured schema markup",
      "Ongoing website maintenance, routine updates & performance monitoring"
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js", "SEO", "Maintenance"]
  },
  {
    id: "platform-web-development",
    number: "02",
    title: "Platform-Based Web Development",
    category: "CMS & Platform Solutions",
    scope: "Shopify, WordPress, Wix & Webflow",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    description: "Tailored websites and scalable digital storefronts powered by industry-leading platforms including Shopify, WordPress, Elementor, WooCommerce, and Wix. Combining rapid deployment with customized visual themes, responsive design, and intuitive client content control.",
    deliverables: [
      "Custom Shopify storefront setup, theme customization & app integration",
      "Bespoke WordPress & WooCommerce online store development and checkout flows",
      "Pixel-perfect Elementor custom templates, landing pages & dynamic widgets",
      "Modern Wix & Wix Studio website design with interactive animations & mobile fidelity",
      "Search Engine Optimization (SEO), page speed tuning & technical metadata",
      "Platform maintenance, theme & plugin updates, security backups & monitoring"
    ],
    tags: ["Shopify", "WordPress", "Elementor", "WooCommerce", "Wix", "SEO", "Maintenance"]
  },
  {
    id: "ecommerce",
    number: "03",
    title: "Ecommerce",
    category: "Commerce Systems",
    scope: "Shopify Plus & Headless",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
    description: "High-converting bespoke storefronts and frictionless purchase journeys designed for luxury, direct-to-consumer, and high-volume retail brands scaling global revenue.",
    deliverables: [
      "Custom Shopify Liquid theme development & Headless storefronts",
      "Conversion Rate Optimization (CRO) audit and checkout friction reduction",
      "Optimized sliding cart drawers, tiered bundles & dynamic cross-sells",
      "Seamless integrations with ERP, Klaviyo, inventory & payment gateways",
      "Ecommerce Search Engine Optimization (SEO) & rich product structured data",
      "Ongoing store maintenance, app & theme updates, backups & security audits"
    ],
    tags: ["Shopify Plus", "Liquid", "Headless Commerce", "Stripe API", "CRO", "SEO", "Maintenance"]
  },
  {
    id: "app-development",
    number: "04",
    title: "App Development",
    category: "Product & Cloud",
    scope: "Cross-Platform & Web Apps",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85",
    description: "End-to-end full-stack web platforms and native mobile applications crafted with intuitive UI/UX, scalable cloud backends, real-time data streaming, and bulletproof security.",
    deliverables: [
      "Cross-platform iOS & Android mobile applications (React Native)",
      "Progressive Web Apps (PWA) with offline caching and service workers",
      "Scalable cloud database schemas, REST & GraphQL API infrastructure",
      "Secure authentication flows, multi-role RBAC & session management",
      "Automated CI/CD deployment pipelines & App Store submission"
    ],
    tags: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Cloud Architecture", "REST APIs"]
  }
];

// Fallback alias for backward compatibility
export const JOURNAL_ENTRIES: JournalEntry[] = SERVICES.map((s) => ({
  id: s.id,
  title: s.title,
  category: s.category,
  readTime: s.timeline,
  date: s.scope,
  image: s.image,
  excerpt: s.description
}));

export const EXPLORATIONS: ExplorationItem[] = [
  {
    id: "exp-1",
    title: "Obsidian Shard 01",
    medium: "WebGL / Glass Displacement",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    rotation: "-rotate-3",
    aspect: "aspect-square"
  },
  {
    id: "exp-2",
    title: "Kinetic Monolith",
    medium: "Octane / Cinema 4D",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
    rotation: "rotate-2",
    aspect: "aspect-square"
  },
  {
    id: "exp-3",
    title: "Fluid Dynamics II",
    medium: "Generative GLSL",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    rotation: "-rotate-2",
    aspect: "aspect-square"
  },
  {
    id: "exp-4",
    title: "Brutalist Grid 09",
    medium: "Bespoke Typography & Spatial Layout",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
    rotation: "rotate-3",
    aspect: "aspect-square"
  },
  {
    id: "exp-5",
    title: "Spectral Refraction",
    medium: "Raymarching & Volumetrics",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
    rotation: "-rotate-1",
    aspect: "aspect-square"
  },
  {
    id: "exp-6",
    title: "Synthetic Grain",
    medium: "Film Emulsion Simulation",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80",
    rotation: "rotate-2",
    aspect: "aspect-square"
  }
];

export const STATS = [
  {
    value: "20+",
    label: "Years Experience",
    subtext: "Shaping digital narratives from early web standards to spatial computing."
  },
  {
    value: "95+",
    label: "Projects Done",
    subtext: "Delivered internationally across automotive, luxury, fintech & culture."
  },
  {
    value: "200%",
    label: "Satisfied Clients",
    subtext: "Average measured increase in user engagement & organic retention."
  }
];

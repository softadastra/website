import { ROUTES } from "./routes.js";

export const SITE = {
  name: "Softadastra",
  tagline: "Offline-first · Local-first · Resilient Web Runtime",
  description:
    "Softadastra is a foundational runtime built around a robust sync engine (WAL/outbox), secure P2P transport, and edge nodes for caching and store-and-forward. Cloud optional.",
  logoUrl: "/images/logo.png",
};

export const LINKS = {
  github: "https://github.com/softadastra/softadastra",
  x: "https://x.com/softadastra",
  youtube: "https://youtube.com/@softadastra",

  // Vix.cpp
  vixGithub: "https://github.com/vixcpp/vix",
  vixSite: "https://vixcpp.com",

  // Contact
  engineersEmail:
    "mailto:softadastra@gmail.com?subject=Vix.cpp%20-%20Talk%20to%20engineers",
};

export const SEO = {
  siteUrl: "https://softadastra.com",
  ogImage:
    "https://res.cloudinary.com/dwjbed2xb/image/upload/v1762624310/logo-softadastra_ksv72b.png",
  twitter: "@softadastra",
};

/* Top navbar (website) */
export const NAV = [
  {
    label: "Stacks",
    href: ROUTES.products,
    items: [
      {
        label: "Vix.cpp Runtime",
        href: ROUTES.productVix,
        description:
          "High-performance offline-first C++ runtime with sync and P2P core",
      },
      {
        label: "Ivi.php Framework",
        href: ROUTES.productIvi,
        description:
          "Minimal, expressive PHP framework for modern APIs and apps",
      },
      {
        label: "Rix",
        href: ROUTES.productRix,
        description:
          "Modern C++ utility and foundation library for Vix ecosystem",
      },
    ],
  },
  { label: "Customers", href: ROUTES.customers },
  {
    label: "Company",
    href: ROUTES.company,
    items: [
      {
        label: "About",
        href: ROUTES.companyAbout,
        description: "Make the web work everywhere.",
      },
      {
        label: "Careers",
        href: ROUTES.companyCareers,
        description: "We’re currently hiring!",
      },
      {
        label: "Culture",
        href: ROUTES.companyCulture,
        description: "What we believe",
      },
      {
        label: "Contact us",
        href: ROUTES.companyContact,
        description: "Request a demo",
      },
    ],
  },
  { label: "Docs", href: ROUTES.docs },
];

/* Docs sidebar only */
export const NAV_DOCS = [
  {
    label: "Foundation",
    href: ROUTES.foundation,
    items: [
      { label: "What is Softadastra", href: ROUTES.foundationWhat },
      { label: "Principles", href: ROUTES.foundationPrinciples },
      { label: "Non-goals", href: ROUTES.foundationNonGoals },
      { label: "Vision", href: ROUTES.foundationVision },
    ],
  },
  {
    label: "Architecture",
    href: ROUTES.architecture,
    items: [
      { label: "Overview", href: ROUTES.architectureOverview },
      { label: "Sync Engine", href: ROUTES.architectureSync },
      { label: "Network (P2P)", href: ROUTES.architectureNetwork },
      { label: "Edge Nodes", href: ROUTES.architectureEdge },
      { label: "Runtime", href: ROUTES.architectureRuntime },
    ],
  },
  {
    label: "Ecosystem",
    href: ROUTES.ecosystem,
    items: [
      { label: "Stacks", href: ROUTES.ecosystemStacks },
      { label: "Products", href: ROUTES.ecosystemProducts },
    ],
  },
  {
    label: "Governance",
    href: ROUTES.governance,
    items: [
      { label: "Roadmap", href: ROUTES.governanceRoadmap },
      { label: "Contribution", href: ROUTES.governanceContribution },
    ],
  },
  {
    label: "Community",
    href: ROUTES.community,
    items: [
      { label: "Communication", href: ROUTES.communityCommunication },
      { label: "Events", href: ROUTES.communityEvents },
    ],
  },
];

import { createRouter, createWebHistory } from "vue-router";
import { ROUTES } from "./routes.js";

import Home from "../pages/Home.vue";
import Docs from "../pages/Docs.vue";
import { SITE, SEO } from "./config.js";

/* Website: Products */
import Products from "../pages/products/Products.vue";
import ProductVix from "../pages/products/Vix.vue";
import ProductIvi from "../pages/products/Ivi.vue";
import ProductRix from "../pages/products/Rix.vue";
import ProductCnerium from "../pages/products/Cnerium.vue";

/* Website: Customers */
import Customers from "../pages/customers/Customers.vue";

/* Website: Company */
import Company from "../pages/company/Company.vue";
import CompanyAbout from "../pages/company/About.vue";
import CompanyCareers from "../pages/company/Careers.vue";
import CompanyCulture from "../pages/company/Culture.vue";
import CompanyContact from "../pages/company/Contact.vue";

/* Docs: Foundation */
import Foundation from "../pages/docs/foundation/Foundation.vue";
import FoundationWhat from "../pages/docs/foundation/WhatIs.vue";
import FoundationPrinciples from "../pages/docs/foundation/Principles.vue";
import FoundationNonGoals from "../pages/docs/foundation/NonGoals.vue";
import FoundationVision from "../pages/docs/foundation/Vision.vue";

/* Docs: Architecture */
import Architecture from "../pages/docs/architecture/Architecture.vue";
import ArchitectureOverview from "../pages/docs/architecture/Overview.vue";
import ArchitectureSync from "../pages/docs/architecture/Sync.vue";
import ArchitectureNetwork from "../pages/docs/architecture/Network.vue";
import ArchitectureEdge from "../pages/docs/architecture/Edge.vue";
import ArchitectureRuntime from "../pages/docs/architecture/Runtime.vue";

/* Docs: Ecosystem */
import Ecosystem from "../pages/docs/ecosystem/Ecosystem.vue";
import EcosystemStacks from "../pages/docs/ecosystem/Stacks.vue";
import EcosystemProducts from "../pages/docs/ecosystem/Products.vue";

/* Docs: Governance */
import Governance from "../pages/docs/governance/Governance.vue";
import GovernanceRoadmap from "../pages/docs/governance/Roadmap.vue";
import GovernanceContribution from "../pages/docs/governance/Contribution.vue";

/* Docs: Community */
import Community from "../pages/docs/community/Community.vue";
import CommunityCommunication from "../pages/docs/community/Communication.vue";
import CommunityEvents from "../pages/docs/community/Events.vue";

import NotFound from "../pages/NotFound.vue";

const routes = [
  {
    path: ROUTES.home,
    component: Home,
    meta: {
      title: "Softadastra",
      description:
        "Softadastra is an offline-first, local-first web runtime built around a robust sync engine (WAL/outbox), secure P2P transport, and edge nodes. Cloud optional.",
      canonical: ROUTES.home,
    },
  },

  {
    path: ROUTES.products,
    component: Products,
    meta: {
      title: "Products",
      description:
        "Explore the Softadastra ecosystem: Vix.cpp Runtime, Ivi.php Framework, Rix library, and more.",
      canonical: ROUTES.products,
    },
  },
  {
    path: ROUTES.productVix,
    component: ProductVix,
    meta: {
      title: "Vix.cpp Runtime",
      description:
        "High-performance offline-first C++ runtime with a robust sync engine (WAL/outbox) and secure P2P transport.",
      canonical: ROUTES.productVix,
    },
  },
  {
    path: ROUTES.productIvi,
    component: ProductIvi,
    meta: {
      title: "Ivi.php Framework",
      description:
        "Minimal, expressive PHP framework for modern APIs and modular applications.",
      canonical: ROUTES.productIvi,
    },
  },
  {
    path: ROUTES.productRix,
    component: ProductRix,
    meta: {
      title: "Rix",
      description:
        "Modern C++ utility and foundation library powering the Vix ecosystem.",
      canonical: ROUTES.productRix,
    },
  },
  {
    path: ROUTES.productCnerium,
    component: ProductCnerium,
    meta: {
      title: "Cnerium",
      description:
        "Cnerium: experimental product in the Softadastra ecosystem (runtime, systems, and developer tools).",
      canonical: ROUTES.productCnerium,
    },
  },

  {
    path: ROUTES.customers,
    component: Customers,
    meta: {
      title: "Customers",
      description:
        "Teams building resilient, offline-first systems with Softadastra and the Vix ecosystem.",
      canonical: ROUTES.customers,
    },
  },

  {
    path: ROUTES.company,
    component: Company,
    meta: {
      title: "Company",
      description:
        "Learn about Softadastra’s mission, culture, careers, and how to contact us.",
      canonical: ROUTES.company,
    },
  },
  {
    path: ROUTES.companyAbout,
    component: CompanyAbout,
    meta: {
      title: "About",
      description:
        "Softadastra exists to make the web work everywhere — even on unstable networks.",
      canonical: ROUTES.companyAbout,
    },
  },
  {
    path: ROUTES.companyCareers,
    component: CompanyCareers,
    meta: {
      title: "Careers",
      description:
        "Join Softadastra to build offline-first runtimes, sync engines, and resilient web infrastructure.",
      canonical: ROUTES.companyCareers,
    },
  },
  {
    path: ROUTES.companyCulture,
    component: CompanyCulture,
    meta: {
      title: "Culture",
      description:
        "What we believe: resilient systems, clarity, performance, and community-driven engineering.",
      canonical: ROUTES.companyCulture,
    },
  },
  {
    path: ROUTES.companyContact,
    component: CompanyContact,
    meta: {
      title: "Contact",
      description:
        "Request a demo or talk to engineers. Get in touch with the Softadastra team.",
      canonical: ROUTES.companyContact,
    },
  },

  {
    path: ROUTES.docs,
    component: Docs,
    meta: {
      title: "Docs",
      description:
        "Softadastra documentation: foundations, architecture, sync engine, P2P networking, and edge nodes.",
      canonical: ROUTES.docs,
    },
  },

  // Foundation
  {
    path: ROUTES.foundation,
    component: Foundation,
    meta: {
      title: "Foundation",
      description:
        "Core foundations of Softadastra: why it exists, what it solves, and the key principles.",
      canonical: ROUTES.foundation,
    },
  },
  {
    path: ROUTES.foundationWhat,
    component: FoundationWhat,
    meta: {
      title: "What is Softadastra",
      description:
        "Softadastra is a foundational runtime designed for offline-first and resilient web experiences.",
      canonical: ROUTES.foundationWhat,
    },
  },
  {
    path: ROUTES.foundationPrinciples,
    component: FoundationPrinciples,
    meta: {
      title: "Principles",
      description:
        "Offline-first, local-first, correctness-first sync, and resilience under real-world networks.",
      canonical: ROUTES.foundationPrinciples,
    },
  },
  {
    path: ROUTES.foundationNonGoals,
    component: FoundationNonGoals,
    meta: {
      title: "Non-goals",
      description:
        "What Softadastra deliberately does not aim to be — to stay focused and reliable.",
      canonical: ROUTES.foundationNonGoals,
    },
  },
  {
    path: ROUTES.foundationVision,
    component: FoundationVision,
    meta: {
      title: "Vision",
      description:
        "A web runtime that works everywhere: optional cloud, edge nodes, and P2P-first primitives.",
      canonical: ROUTES.foundationVision,
    },
  },

  // Architecture
  {
    path: ROUTES.architecture,
    component: Architecture,
    meta: {
      title: "Architecture",
      description:
        "Architecture overview: sync engine (WAL/outbox), transport (P2P), edge nodes, runtime layers.",
      canonical: ROUTES.architecture,
    },
  },
  {
    path: ROUTES.architectureOverview,
    component: ArchitectureOverview,
    meta: {
      title: "Overview",
      description:
        "How Softadastra fits together: storage, sync, transport, and runtime APIs.",
      canonical: ROUTES.architectureOverview,
    },
  },
  {
    path: ROUTES.architectureSync,
    component: ArchitectureSync,
    meta: {
      title: "Sync Engine",
      description:
        "The WAL/outbox sync engine: retries, conflict handling, durability, and offline-first semantics.",
      canonical: ROUTES.architectureSync,
    },
  },
  {
    path: ROUTES.architectureNetwork,
    component: ArchitectureNetwork,
    meta: {
      title: "Network (P2P)",
      description:
        "Secure P2P transport for discovery, peer channels, message routing, and store-and-forward.",
      canonical: ROUTES.architectureNetwork,
    },
  },
  {
    path: ROUTES.architectureEdge,
    component: ArchitectureEdge,
    meta: {
      title: "Edge Nodes",
      description:
        "Edge caching and relays: reduce latency, improve availability, and bridge unstable networks.",
      canonical: ROUTES.architectureEdge,
    },
  },
  {
    path: ROUTES.architectureRuntime,
    component: ArchitectureRuntime,
    meta: {
      title: "Runtime",
      description:
        "Runtime layer: APIs and execution model that make offline-first apps predictable and fast.",
      canonical: ROUTES.architectureRuntime,
    },
  },

  // Ecosystem
  {
    path: ROUTES.ecosystem,
    component: Ecosystem,
    meta: {
      title: "Ecosystem",
      description:
        "Ecosystem overview: products, stacks, and how teams build on Softadastra.",
      canonical: ROUTES.ecosystem,
    },
  },
  {
    path: ROUTES.ecosystemStacks,
    component: EcosystemStacks,
    meta: {
      title: "Stacks",
      description:
        "Recommended stacks for building offline-first apps and resilient backends on Softadastra.",
      canonical: ROUTES.ecosystemStacks,
    },
  },
  {
    path: ROUTES.ecosystemProducts,
    component: EcosystemProducts,
    meta: {
      title: "Products",
      description:
        "Softadastra ecosystem products: runtime, frameworks, libraries, and developer tools.",
      canonical: ROUTES.ecosystemProducts,
    },
  },

  // Governance
  {
    path: ROUTES.governance,
    component: Governance,
    meta: {
      title: "Governance",
      description:
        "Governance: roadmap, contribution process, and how the project evolves.",
      canonical: ROUTES.governance,
    },
  },
  {
    path: ROUTES.governanceRoadmap,
    component: GovernanceRoadmap,
    meta: {
      title: "Roadmap",
      description:
        "Softadastra roadmap: milestones for sync, P2P transport, edge nodes, and developer SDKs.",
      canonical: ROUTES.governanceRoadmap,
    },
  },
  {
    path: ROUTES.governanceContribution,
    component: GovernanceContribution,
    meta: {
      title: "Contribution",
      description:
        "How to contribute: workflow, code standards, issues, and community guidelines.",
      canonical: ROUTES.governanceContribution,
    },
  },

  // Community
  {
    path: ROUTES.community,
    component: Community,
    meta: {
      title: "Community",
      description:
        "Community: communication channels, events, and how to connect with the ecosystem.",
      canonical: ROUTES.community,
    },
  },
  {
    path: ROUTES.communityCommunication,
    component: CommunityCommunication,
    meta: {
      title: "Communication",
      description:
        "Where we discuss: GitHub, X, YouTube, and community updates.",
      canonical: ROUTES.communityCommunication,
    },
  },
  {
    path: ROUTES.communityEvents,
    component: CommunityEvents,
    meta: {
      title: "Events",
      description:
        "Community events, talks, and milestones around Softadastra and Vix.cpp.",
      canonical: ROUTES.communityEvents,
    },
  },

  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    meta: { title: "404", robots: "noindex,nofollow" },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

/* -------- SEO helpers -------- */
function upsertMetaByName(name, content) {
  if (!content) return;
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertMetaByProperty(property, content) {
  if (!content) return;
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function absUrl(path) {
  const base = (SEO?.siteUrl || "https://softadastra.com").replace(/\/$/, "");
  if (!path) return base + "/";
  return base + (path.startsWith("/") ? path : `/${path}`);
}

/* -------- Apply SEO on navigation -------- */
router.afterEach((to) => {
  const siteName = SITE.name || "Softadastra";

  // Title
  const rawTitle = to.meta?.title || siteName;
  const title = rawTitle === siteName ? siteName : `${rawTitle} · ${siteName}`;
  document.title = title;

  // Description
  const description = to.meta?.description || SITE.description;

  // Canonical URL
  const canonicalPath = to.meta?.canonical || to.fullPath;
  const canonicalUrl = absUrl(canonicalPath);

  // OG/Twitter image
  const ogImage = to.meta?.ogImage || SEO?.ogImage;

  // Robots (optional per route)
  const robots = to.meta?.robots || "index,follow";

  // Standard
  upsertMetaByName("description", description);
  upsertMetaByName("robots", robots);

  // Canonical
  upsertLink("canonical", canonicalUrl);

  // Open Graph
  upsertMetaByProperty("og:site_name", siteName);
  upsertMetaByProperty("og:type", "website");
  upsertMetaByProperty("og:title", title);
  upsertMetaByProperty("og:description", description);
  upsertMetaByProperty("og:url", canonicalUrl);
  if (ogImage) upsertMetaByProperty("og:image", ogImage);

  // Twitter
  upsertMetaByName("twitter:card", "summary_large_image");
  if (SEO?.twitter) upsertMetaByName("twitter:site", SEO.twitter);
  upsertMetaByName("twitter:title", title);
  upsertMetaByName("twitter:description", description);
  if (ogImage) upsertMetaByName("twitter:image", ogImage);
});

import { createRouter, createWebHistory } from "vue-router";
import { ROUTES } from "./routes.js";

import Home from "../pages/Home.vue";
import Docs from "../pages/Docs.vue";
import { SITE } from "./config.js";

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

const routes = [
  { path: ROUTES.home, component: Home, meta: { title: "Home" } },

  { path: ROUTES.products, component: Products, meta: { title: "Products" } },
  {
    path: ROUTES.productVix,
    component: ProductVix,
    meta: { title: "Vix.cpp Runtime" },
  },
  {
    path: ROUTES.productIvi,
    component: ProductIvi,
    meta: { title: "Ivi.php Framework" },
  },
  { path: ROUTES.productRix, component: ProductRix, meta: { title: "Rix" } },
  {
    path: ROUTES.productCnerium,
    component: ProductCnerium,
    meta: { title: "Cnerium" },
  },

  {
    path: ROUTES.customers,
    component: Customers,
    meta: { title: "Customers" },
  },

  { path: ROUTES.company, component: Company, meta: { title: "Company" } },
  {
    path: ROUTES.companyAbout,
    component: CompanyAbout,
    meta: { title: "About" },
  },
  {
    path: ROUTES.companyCareers,
    component: CompanyCareers,
    meta: { title: "Careers" },
  },
  {
    path: ROUTES.companyCulture,
    component: CompanyCulture,
    meta: { title: "Culture" },
  },
  {
    path: ROUTES.companyContact,
    component: CompanyContact,
    meta: { title: "Contact" },
  },

  { path: ROUTES.docs, component: Docs, meta: { title: "Docs" } },

  {
    path: ROUTES.foundation,
    component: Foundation,
    meta: { title: "Foundation" },
  },
  {
    path: ROUTES.foundationWhat,
    component: FoundationWhat,
    meta: { title: "What is Softadastra" },
  },
  {
    path: ROUTES.foundationPrinciples,
    component: FoundationPrinciples,
    meta: { title: "Principles" },
  },
  {
    path: ROUTES.foundationNonGoals,
    component: FoundationNonGoals,
    meta: { title: "Non-goals" },
  },
  {
    path: ROUTES.foundationVision,
    component: FoundationVision,
    meta: { title: "Vision" },
  },

  {
    path: ROUTES.architecture,
    component: Architecture,
    meta: { title: "Architecture" },
  },
  {
    path: ROUTES.architectureOverview,
    component: ArchitectureOverview,
    meta: { title: "Overview" },
  },
  {
    path: ROUTES.architectureSync,
    component: ArchitectureSync,
    meta: { title: "Sync Engine" },
  },
  {
    path: ROUTES.architectureNetwork,
    component: ArchitectureNetwork,
    meta: { title: "Network (P2P)" },
  },
  {
    path: ROUTES.architectureEdge,
    component: ArchitectureEdge,
    meta: { title: "Edge Nodes" },
  },
  {
    path: ROUTES.architectureRuntime,
    component: ArchitectureRuntime,
    meta: { title: "Runtime" },
  },

  {
    path: ROUTES.ecosystem,
    component: Ecosystem,
    meta: { title: "Ecosystem" },
  },
  {
    path: ROUTES.ecosystemStacks,
    component: EcosystemStacks,
    meta: { title: "Stacks" },
  },
  {
    path: ROUTES.ecosystemProducts,
    component: EcosystemProducts,
    meta: { title: "Products" },
  },

  {
    path: ROUTES.governance,
    component: Governance,
    meta: { title: "Governance" },
  },
  {
    path: ROUTES.governanceRoadmap,
    component: GovernanceRoadmap,
    meta: { title: "Roadmap" },
  },
  {
    path: ROUTES.governanceContribution,
    component: GovernanceContribution,
    meta: { title: "Contribution" },
  },

  {
    path: ROUTES.community,
    component: Community,
    meta: { title: "Community" },
  },
  {
    path: ROUTES.communityCommunication,
    component: CommunityCommunication,
    meta: { title: "Communication" },
  },
  {
    path: ROUTES.communityEvents,
    component: CommunityEvents,
    meta: { title: "Events" },
  },

  { path: "/:pathMatch(.*)*", redirect: ROUTES.home },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

function setMetaTag(name, content) {
  if (!content) return;

  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

router.afterEach((to) => {
  const pageTitle = to.meta?.title
    ? `${to.meta.title} · ${SITE.name}`
    : SITE.name;
  document.title = pageTitle;

  const desc = to.meta?.description || SITE.description;
  setMetaTag("description", desc);
});

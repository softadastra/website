import { createRouter, createWebHistory } from "vue-router";
import { ROUTES } from "./routes.js";

import Home from "../pages/Home.vue";
import Docs from "../pages/Docs.vue";

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
  { path: ROUTES.home, component: Home },

  /* Website */
  { path: ROUTES.docs, component: Docs },

  { path: ROUTES.products, component: Products },
  { path: ROUTES.productVix, component: ProductVix },
  { path: ROUTES.productIvi, component: ProductIvi },
  { path: ROUTES.productRix, component: ProductRix },
  { path: ROUTES.productCnerium, component: ProductCnerium },

  { path: ROUTES.customers, component: Customers },

  { path: ROUTES.company, component: Company },
  { path: ROUTES.companyAbout, component: CompanyAbout },
  { path: ROUTES.companyCareers, component: CompanyCareers },
  { path: ROUTES.companyCulture, component: CompanyCulture },
  { path: ROUTES.companyContact, component: CompanyContact },

  /* Docs */
  { path: ROUTES.foundation, component: Foundation },
  { path: ROUTES.foundationWhat, component: FoundationWhat },
  { path: ROUTES.foundationPrinciples, component: FoundationPrinciples },
  { path: ROUTES.foundationNonGoals, component: FoundationNonGoals },
  { path: ROUTES.foundationVision, component: FoundationVision },

  { path: ROUTES.architecture, component: Architecture },
  { path: ROUTES.architectureOverview, component: ArchitectureOverview },
  { path: ROUTES.architectureSync, component: ArchitectureSync },
  { path: ROUTES.architectureNetwork, component: ArchitectureNetwork },
  { path: ROUTES.architectureEdge, component: ArchitectureEdge },
  { path: ROUTES.architectureRuntime, component: ArchitectureRuntime },

  { path: ROUTES.ecosystem, component: Ecosystem },
  { path: ROUTES.ecosystemStacks, component: EcosystemStacks },
  { path: ROUTES.ecosystemProducts, component: EcosystemProducts },

  { path: ROUTES.governance, component: Governance },
  { path: ROUTES.governanceRoadmap, component: GovernanceRoadmap },
  { path: ROUTES.governanceContribution, component: GovernanceContribution },

  { path: ROUTES.community, component: Community },
  { path: ROUTES.communityCommunication, component: CommunityCommunication },
  { path: ROUTES.communityEvents, component: CommunityEvents },

  /* fallback */
  { path: "/:pathMatch(.*)*", redirect: ROUTES.home },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

import { createRouter, createWebHistory } from "vue-router";
import { ROUTES } from "./routes.js";

import Home from "../pages/Home.vue";

// Foundation
import Foundation from "../pages/foundation/Foundation.vue";
import FoundationWhat from "../pages/foundation/WhatIs.vue";
import FoundationPrinciples from "../pages/foundation/Principles.vue";
import FoundationNonGoals from "../pages/foundation/NonGoals.vue";
import FoundationVision from "../pages/foundation/Vision.vue";

// Architecture
import Architecture from "../pages/architecture/Architecture.vue";
import ArchitectureOverview from "../pages/architecture/Overview.vue";
import ArchitectureSync from "../pages/architecture/Sync.vue";
import ArchitectureNetwork from "../pages/architecture/Network.vue";
import ArchitectureEdge from "../pages/architecture/Edge.vue";
import ArchitectureRuntime from "../pages/architecture/Runtime.vue";

// Ecosystem
import Ecosystem from "../pages/ecosystem/Ecosystem.vue";
import EcosystemStacks from "../pages/ecosystem/Stacks.vue";
import EcosystemProducts from "../pages/ecosystem/Products.vue";

// Governance
import Governance from "../pages/governance/Governance.vue";
import GovernanceRoadmap from "../pages/governance/Roadmap.vue";
import GovernanceContribution from "../pages/governance/Contribution.vue";

// Community
import Community from "../pages/community/Community.vue";
import CommunityCommunication from "../pages/community/Communication.vue";
import CommunityEvents from "../pages/community/Events.vue";

const routes = [
  { path: ROUTES.home, component: Home },

  // Foundation
  { path: ROUTES.foundation, component: Foundation },
  { path: ROUTES.foundationWhat, component: FoundationWhat },
  { path: ROUTES.foundationPrinciples, component: FoundationPrinciples },
  { path: ROUTES.foundationNonGoals, component: FoundationNonGoals },
  { path: ROUTES.foundationVision, component: FoundationVision },

  // Architecture
  { path: ROUTES.architecture, component: Architecture },
  { path: ROUTES.architectureOverview, component: ArchitectureOverview },
  { path: ROUTES.architectureSync, component: ArchitectureSync },
  { path: ROUTES.architectureNetwork, component: ArchitectureNetwork },
  { path: ROUTES.architectureEdge, component: ArchitectureEdge },
  { path: ROUTES.architectureRuntime, component: ArchitectureRuntime },

  // Ecosystem
  { path: ROUTES.ecosystem, component: Ecosystem },
  { path: ROUTES.ecosystemStacks, component: EcosystemStacks },
  { path: ROUTES.ecosystemProducts, component: EcosystemProducts },

  // Governance
  { path: ROUTES.governance, component: Governance },
  { path: ROUTES.governanceRoadmap, component: GovernanceRoadmap },
  { path: ROUTES.governanceContribution, component: GovernanceContribution },

  // Community
  { path: ROUTES.community, component: Community },
  { path: ROUTES.communityCommunication, component: CommunityCommunication },
  { path: ROUTES.communityEvents, component: CommunityEvents },

  // fallback
  { path: "/:pathMatch(.*)*", redirect: ROUTES.home },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

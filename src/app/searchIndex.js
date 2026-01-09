import { ROUTES } from "./routes.js";

// docs markdown (raw)
import foundationWhat from "../content/FOUNDATION.md?raw";
import principles from "../content/foundation/principles.md?raw";
import nonGoals from "../content/foundation/non-goals.md?raw";
import vision from "../content/foundation/vision.md?raw";

import archOverview from "../content/architecture/overview.md?raw";
import archSync from "../content/architecture/sync.md?raw";
import archNet from "../content/architecture/net.md?raw";
import archRuntime from "../content/architecture/runtime.md?raw";

import ecoStacks from "../content/ecosystem/stacks.md?raw";
import ecoProducts from "../content/ecosystem/products.md?raw";

import govRoadmap from "../content/governance/roadmap.md?raw";
import govContribution from "../content/governance/contribution.md?raw";

import comCommunication from "../content/community/communication.md?raw";
import comEvents from "../content/community/events.md?raw";

export const DOCS_PAGES = [
  {
    title: "Foundation · Principles",
    route: ROUTES.foundationPrinciples,
    body: principles,
  },
  {
    title: "Foundation · Non-goals",
    route: ROUTES.foundationNonGoals,
    body: nonGoals,
  },
  {
    title: "Foundation · Vision",
    route: ROUTES.foundationVision,
    body: vision,
  },

  {
    title: "Architecture · Overview",
    route: ROUTES.architectureOverview,
    body: archOverview,
  },
  {
    title: "Architecture · Sync Engine",
    route: ROUTES.architectureSync,
    body: archSync,
  },
  {
    title: "Architecture · Network (P2P)",
    route: ROUTES.architectureNetwork,
    body: archNet,
  },
  {
    title: "Architecture · Runtime",
    route: ROUTES.architectureRuntime,
    body: archRuntime,
  },

  {
    title: "Ecosystem · Stacks",
    route: ROUTES.ecosystemStacks,
    body: ecoStacks,
  },
  {
    title: "Ecosystem · Products",
    route: ROUTES.ecosystemProducts,
    body: ecoProducts,
  },

  {
    title: "Governance · Roadmap",
    route: ROUTES.governanceRoadmap,
    body: govRoadmap,
  },
  {
    title: "Governance · Contribution",
    route: ROUTES.governanceContribution,
    body: govContribution,
  },

  {
    title: "Community · Communication",
    route: ROUTES.communityCommunication,
    body: comCommunication,
  },
  {
    title: "Community · Events",
    route: ROUTES.communityEvents,
    body: comEvents,
  },
];

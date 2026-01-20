<script setup>
import SitePage from "../../components/layout/SitePage.vue";
import { onMounted, onBeforeUnmount, ref, computed, nextTick } from "vue";
import { LINKS } from "../../app/config.js";

let io = null;

onMounted(async () => {
  await nextTick();
  const els = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.14 }
  );

  els.forEach((el) => io.observe(el));
});

onBeforeUnmount(() => {
  if (io) io.disconnect();
});

const stats = [
  {
    value: "0",
    label: "Lost writes",
    hint: "durable intent via WAL + outbox",
  },
  {
    value: "↓ 60–90%",
    label: "Network-driven failures",
    hint: "offline-first flows, no blocked UX",
  },
  {
    value: "Hours → Seconds",
    label: "Recovery time",
    hint: "fast replay, deterministic convergence",
  },
];


const cards = [
  {
    type: "Customers",
    company: "Confidential Customer",
    service: "Field operations & intermittent connectivity",
    logo: "/images/customer-confidential.png",
    title: "Zero data loss during multi-hour outages",
    desc: "Durable local writes with safe convergence once connectivity returns—without operator intervention.",
    href: "#",
    cta: "Read case study",
  },
  {
    type: "Customers",
    company: "Confidential Customer",
    service: "Multi-site retail & inventory consistency",
    logo: "/images/customer-confidential.png",
    title: "Fewer incidents caused by flaky networks",
    desc: "Edge store-and-forward keeps critical workflows running even when WAN links degrade or disappear.",
    href: "#",
    cta: "Read case study",
  },
  {
    type: "Partners",
    company: "Design Partner",
    service: "Edge infrastructure & store-and-forward",
    logo: "/images/partner-edge.png",
    title: "Portable edge nodes across environments",
    desc: "A consistent runtime surface for on-prem, constrained edge, and hybrid deployments.",
    href: "#",
    cta: "Read announcement",
  },
  {
    type: "Partners",
    company: "Ecosystem Partner",
    service: "Cloud/on-prem interoperability",
    logo: "/images/partner-ecosystem.png",
    title: "Cloud optional, management available",
    desc: "Runs without cloud dependencies while preserving a path to enterprise governance and visibility.",
    href: "#",
    cta: "Read announcement",
  },
  {
    type: "Partners",
    company: "Hardware Partner",
    service: "Heterogeneous devices & constrained compute",
    logo: "/images/partner-hardware.png",
    title: "Same sync model across heterogeneous fleets",
    desc: "Deterministic behavior across devices reduces operational surprises and simplifies rollouts.",
    href: "#",
    cta: "Read announcement",
  },
  {
    type: "Partners",
    company: "Transport Partner",
    service: "Secure routing, relays & unreliable networks",
    logo: "/images/partner-transport.png",
    title: "Secure transport under unreliable networks",
    desc: "Designed for partitions, delays, duplication, and churn—failure is the default case.",
    href: "#",
    cta: "Read announcement",
  },
];

const tabs = ["All", "Customers", "Partners"];
const activeTab = ref("All");

const filteredCards = computed(() => {
  if (activeTab.value === "All") return cards;
  return cards.filter((c) => c.type === activeTab.value);
});

const mailtoDemo = computed(() => {
  const email = "softadastra@gmail.com";
  const subject = encodeURIComponent("Vix.cpp Request a demo");
  const body = encodeURIComponent(
    [
      "Hi Vix team,",
      "",
      "We'd like to request a demo.",
      "",
      "Context:",
      "- Company:",
      "- Use case:",
      "- Current stack:",
      "- Scale (QPS/throughput):",
      "- Timeline:",
      "",
      "Thanks!",
    ].join("\n")
  );
  return `mailto:${email}?subject=${subject}&body=${body}`;
});

const mailtoEngineers = computed(() => LINKS.engineersEmail);
</script>

<template>
  <SitePage
    kicker="Customers"
    title="Teams building for reliability"
    description="Softadastra is early. If you’re building local-first or offline-first systems, we’d love to talk."
  >
    <main class="customersPage">
      <section class="hero">
        <div class="container heroGrid">
          <div class="heroLeft reveal">
            <div class="kicker">
              <span class="dot" />
              <span>Customers</span>
              <span class="sep">•</span>
              <span class="muted">Enterprise-ready runtime foundations</span>
            </div>

            <h1>
            Systems that stay correct under failure,
            <span class="grad">offline-first by design</span>
            </h1>

            <p class="sub">
              Softadastra is a foundational web runtime for local-first systems: durable
              local writes, safe synchronization, secure transport, and edge
              store-and-forward—cloud optional.
            </p>

          </div>

          <div class="heroRight reveal">
            <div class="heroPanel">
              <div class="panelHeader">
                <span class="b1" />
                <span class="b2" />
                <span class="b3" />
                <div class="panelTitle">Enterprise snapshot</div>
              </div>

              <div class="panelBody">
                <div class="statsGrid">
                  <div v-for="s in stats" :key="s.label" class="statCard">
                    <div class="statValue">{{ s.value }}</div>
                    <div class="statLabel">{{ s.label }}</div>
                    <div class="statHint">{{ s.hint }}</div>
                  </div>
                </div>

                <div class="panelNote">
                  Metrics shown are representative positioning replace with your
                  measured baselines.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="heroGlow" aria-hidden="true" />
      </section>

      <section id="case-studies" class="caseStudies">
        <div class="container">
          <div class="sectionHead reveal">
            <h2>Case Studies</h2>
            <p class="muted">
              Stories from customers and partners adopting high-performance
              foundations with predictable scaling.
            </p>
          </div>

          <div class="tabs reveal">
            <button
              v-for="t in tabs"
              :key="t"
              class="tab"
              :class="{ active: activeTab === t }"
              @click="activeTab = t"
              type="button"
            >
              {{ t }}
            </button>
          </div>

          <div class="cardsGrid">
            <a
              v-for="c in filteredCards"
              :key="c.company + c.title"
              class="caseCard reveal"
              :href="c.href"
            >
              <div class="caseTop">
                <span class="badge">{{ c.type }}</span>

                <div class="brand">
                  <div class="logoWrap">
                    <img
                      class="caseLogo"
                      :src="c.logo"
                      :alt="c.company + ' logo'"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div class="brandMeta">
                    <div class="brandName">{{ c.company }}</div>
                    <div class="brandService">{{ c.service }}</div>
                  </div>
                </div>
              </div>

              <div class="caseTitle">{{ c.title }}</div>
              <div class="caseDesc">{{ c.desc }}</div>

              <div class="caseCtaRow">
                <span class="caseCta">{{ c.cta }}</span>
                <span class="arrow">→</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section class="enterprise">
        <div class="container">
          <div class="sectionHead reveal">
            <h2>Scales for enterprises</h2>
            <p class="muted">
              Deploy confidently across environments with support,
              accountability, and a runtime designed to stay predictable under
              load.
            </p>
          </div>

          <div class="enterpriseGrid">
            <div class="entCard reveal">
              <div class="entTitle">Dedicated enterprise support</div>
              <p class="entDesc">
                Real engineers. Real response times. Clear escalation paths and
                practical guidance for production deployments.
              </p>
            </div>

            <div class="entCard reveal">
              <div class="entTitle">Portability across environments</div>
              <p class="entDesc">
                Minimize rewrites by keeping a consistent runtime surface across
                cloud, on-prem, and constrained edge deployments.
              </p>
            </div>

            <div class="entCard reveal">
              <div class="entTitle">SLA-minded reliability</div>
              <p class="entDesc">
                Stability, accountability, and measurable behavior because
                performance without reliability is just a demo.
              </p>
            </div>
          </div>

          <div class="finalCta reveal">
            <div class="finalText">
              <div class="finalTitle">Let’s talk about your workload</div>
              <div class="finalDesc">
                Share your constraints, targets, and environment we’ll help you
                design the fastest path to production.
              </div>
            </div>

            <div class="finalActions">
              <a class="btn primary" :href="mailtoDemo">Request a demo</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </SitePage>
</template>

<style scoped>
/* Root */
.customersPage {
  min-height: 100vh;
  color: var(--text);
  background: var(--bg);
}

/* Add a subtle marketing backdrop that adapts to theme */
.customersPage::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
      900px 520px at 18% 8%,
      rgba(213, 122, 42, 0.1),
      transparent 60%
    ),
    radial-gradient(
      760px 520px at 82% 20%,
      rgba(16, 59, 47, 0.16),
      transparent 62%
    ),
    radial-gradient(
      900px 520px at 50% 92%,
      rgba(16, 59, 47, 0.1),
      transparent 65%
    );
  opacity: 0.9;
}

.customersPage {
  position: relative;
  isolation: isolate;
}

/* Layout */
.container {
  max-width: var(--max);
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Reveal
   IMPORTANT: base state is VISIBLE.
   We only animate when JS adds .reveal-ready on .customersPage */
.reveal {
  opacity: 1;
  transform: none;
}

.customersPage.reveal-ready .reveal {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 520ms ease, transform 520ms ease;
  will-change: opacity, transform;
}

.customersPage.reveal-ready .reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.65rem 1.05rem;
  border-radius: 999px;
  font-size: 0.92rem;
  font-weight: 800;
  border: 1px solid transparent;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: transform 140ms ease, box-shadow 140ms ease,
    border-color 140ms ease, background 140ms ease, opacity 140ms ease;
}

.btn:active {
  transform: translateY(1px);
}

.btn.primary {
  background: var(--sa-orange);
  color: #111;
  box-shadow: 0 14px 34px rgba(2, 6, 23, 0.16);
}

html[data-theme="dark"] .btn.primary {
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.45);
}

.btn.primary:hover {
  transform: translateY(-1px);
  opacity: 0.95;
}

.btn.secondary {
  background: var(--panel);
  border-color: var(--border);
  color: var(--text);
}

.btn.secondary:hover {
  transform: translateY(-1px);
  border-color: rgba(213, 122, 42, 0.35);
  box-shadow: 0 14px 34px rgba(2, 6, 23, 0.12);
}

.btn.ghost {
  background: transparent;
  border-color: var(--border);
  color: var(--text);
}

.btn.ghost:hover {
  background: rgba(2, 6, 23, 0.04);
}

html[data-theme="dark"] .btn.ghost:hover {
  background: rgba(255, 255, 255, 0.06);
}

/* Hero */
.hero {
  position: relative;
  overflow: hidden;
  padding: clamp(44px, 6vw, 92px) 0 clamp(28px, 4vw, 56px);
}

.heroGrid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: 2.2rem;
  align-items: center;
}

.kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--panel);
  color: var(--text-muted);
  font-size: 0.82rem;
  box-shadow: 0 12px 26px rgba(2, 6, 23, 0.08);
}

html[data-theme="dark"] .kicker {
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.35);
}

.kicker .dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--sa-orange);
  box-shadow: 0 0 0 4px rgba(213, 122, 42, 0.15);
}

.kicker .sep {
  opacity: 0.5;
}

.muted {
  color: var(--text-muted);
}

.hero h1 {
  margin: 0.95rem 0 0.9rem;
  font-size: clamp(2.2rem, 3.2vw, 3.1rem);
  line-height: 1.06;
  letter-spacing: -0.3px;
}

.grad {
  background: linear-gradient(135deg, var(--sa-orange), var(--sa-orange-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.sub {
  margin: 0 0 1.25rem;
  max-width: 46rem;
  color: var(--text-muted);
  line-height: 1.55;
  font-size: clamp(1rem, 1.2vw, 1.08rem);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}

.miniMeta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.pill {
  display: inline-flex;
  align-items: center;
  padding: 0.22rem 0.6rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--panel);
  color: var(--text);
  font-size: 0.78rem;
  white-space: nowrap;
}

/* Hero panel */
.heroPanel {
  background: var(--panel);
  border-radius: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 18px 40px rgba(2, 6, 23, 0.12);
  overflow: hidden;
}

html[data-theme="dark"] .heroPanel {
  box-shadow: 0 22px 52px rgba(0, 0, 0, 0.55);
}

.panelHeader {
  display: flex;
  align-items: center;
  gap: 0.38rem;
  padding: 0.55rem 0.85rem;
  background: rgba(2, 6, 23, 0.03);
  border-bottom: 1px solid var(--border);
}

html[data-theme="dark"] .panelHeader {
  background: rgba(255, 255, 255, 0.04);
}

.panelHeader .b1,
.panelHeader .b2,
.panelHeader .b3 {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: rgba(2, 6, 23, 0.2);
}

html[data-theme="dark"] .panelHeader .b1,
html[data-theme="dark"] .panelHeader .b2,
html[data-theme="dark"] .panelHeader .b3 {
  background: rgba(255, 255, 255, 0.18);
}

.panelTitle {
  margin-left: auto;
  font-size: 0.78rem;
  color: var(--text-muted);
}

.panelBody {
  padding: 1rem;
}

.statsGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
}

.statCard {
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(2, 6, 23, 0.02);
  padding: 0.85rem 0.9rem;
}

html[data-theme="dark"] .statCard {
  background: rgba(255, 255, 255, 0.04);
}

.statValue {
  font-size: 1.25rem;
  font-weight: 950;
  letter-spacing: -0.2px;
}

.statLabel {
  margin-top: 0.1rem;
  font-weight: 900;
  color: var(--text);
}

.statHint {
  margin-top: 0.35rem;
  color: var(--text-muted);
  font-size: 0.85rem;
  line-height: 1.35;
}

.panelNote {
  margin-top: 0.85rem;
  color: var(--text-muted);
  font-size: 0.85rem;
}

/* Glow (token-based, subtle) */
.heroGlow {
  position: absolute;
  inset: auto -18% -55% auto;
  width: min(92vw, 1200px);
  height: 560px;
  background: radial-gradient(
    closest-side,
    rgba(213, 122, 42, 0.18),
    transparent 70%
  );
  filter: blur(54px);
  pointer-events: none;
  opacity: 0.75;
}

/* Logos */
.logosSection {
  padding: 0.8rem 0 2.2rem;
}

.logosTitle {
  color: var(--text-muted);
  font-size: 0.92rem;
  margin-bottom: 0.75rem;
}

.logosRow {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.logoChip {
  border: 1px solid var(--border);
  background: var(--panel);
  padding: 0.42rem 0.7rem;
  border-radius: 999px;
  font-size: 0.85rem;
  color: var(--text);
}

/* Sections */
.sectionHead {
  margin-bottom: 1.35rem;
}

.sectionHead h2 {
  margin: 0 0 0.5rem;
  font-size: 1.65rem;
  letter-spacing: -0.01em;
}

.sectionHead p {
  margin: 0;
  max-width: 42rem;
  line-height: 1.55;
  color: var(--text-muted);
}

/* Quotes */
.quotes {
  padding: 2.6rem 0 2.8rem;
}

.quotesGrid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
}

.quoteCard {
  grid-column: span 4;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: var(--panel);
  box-shadow: 0 14px 34px rgba(2, 6, 23, 0.1);
  padding: 1.1rem 1.1rem 1rem;
  transition: transform 160ms ease, border-color 160ms ease,
    box-shadow 160ms ease;
}

html[data-theme="dark"] .quoteCard {
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.45);
}

.quoteCard:hover {
  transform: translateY(-2px);
  border-color: rgba(213, 122, 42, 0.35);
  box-shadow: 0 18px 44px rgba(2, 6, 23, 0.16);
}

.quoteHeadline {
  font-weight: 950;
  margin-bottom: 0.6rem;
}

.quoteBody {
  margin: 0 0 0.9rem;
  color: var(--text-muted);
  line-height: 1.55;
}

.quoteFooter {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
}

.name {
  font-weight: 950;
}

.title {
  color: var(--text-muted);
  font-size: 0.88rem;
  margin-top: 0.15rem;
}

.link {
  color: var(--sa-orange);
  text-decoration: none;
  font-weight: 900;
}

.link:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* Case studies */
.caseStudies {
  padding: 2.8rem 0 3.1rem;
  background: rgba(2, 6, 23, 0.02);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

html[data-theme="dark"] .caseStudies {
  background: rgba(255, 255, 255, 0.03);
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin: 1rem 0 1.2rem;
}

.tab {
  border: 1px solid var(--border);
  background: var(--panel);
  color: var(--text);
  padding: 0.42rem 0.85rem;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 900;
  transition: transform 140ms ease, border-color 140ms ease,
    background 140ms ease, box-shadow 140ms ease;
}

.tab:hover {
  transform: translateY(-1px);
  border-color: rgba(213, 122, 42, 0.35);
  box-shadow: 0 12px 26px rgba(2, 6, 23, 0.1);
}

.tab.active {
  border-color: rgba(213, 122, 42, 0.55);
  background: rgba(213, 122, 42, 0.1);
}

.cardsGrid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
}

.caseCard {
  grid-column: span 4;
  display: block;
  text-decoration: none;
  color: inherit;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: var(--panel);
  box-shadow: 0 14px 34px rgba(2, 6, 23, 0.1);
  padding: 1.15rem 1.15rem 1.05rem;
  transition: transform 160ms ease, border-color 160ms ease,
    box-shadow 160ms ease;
  overflow: hidden;
  position: relative;
}

html[data-theme="dark"] .caseCard {
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.45);
}

.caseCard:hover {
  transform: translateY(-2px);
  border-color: rgba(213, 122, 42, 0.35);
  box-shadow: 0 18px 44px rgba(2, 6, 23, 0.16);
}

.caseTop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.18rem 0.55rem;
  border-radius: 999px;
  background: rgba(213, 122, 42, 0.12);
  border: 1px solid rgba(213, 122, 42, 0.28);
  font-size: 0.75rem;
  font-weight: 950;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text);
}

.caseTitle {
  font-weight: 950;
  margin-bottom: 0.45rem;
  line-height: 1.2;
}

.caseDesc {
  color: var(--text-muted);
  line-height: 1.55;
  margin-bottom: 0.8rem;
}

.caseCta {
  color: var(--sa-orange);
  font-weight: 950;
}

/* Enterprise */
.enterprise {
  padding: 3.1rem 0 3.2rem;
}

.enterpriseGrid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
}

.entCard {
  grid-column: span 4;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: var(--panel);
  box-shadow: 0 14px 34px rgba(2, 6, 23, 0.1);
  padding: 1.15rem 1.15rem 1.1rem;
  transition: transform 160ms ease, border-color 160ms ease,
    box-shadow 160ms ease;
}

html[data-theme="dark"] .entCard {
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.45);
}

.entCard:hover {
  transform: translateY(-2px);
  border-color: rgba(213, 122, 42, 0.35);
  box-shadow: 0 18px 44px rgba(2, 6, 23, 0.16);
}

.entTitle {
  font-weight: 950;
  margin-bottom: 0.45rem;
}

.entDesc {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.55;
}

.finalCta {
  margin-top: 1.4rem;
  border-radius: 18px;
  border: 1px solid var(--border);
  background: var(--panel);
  box-shadow: 0 18px 44px rgba(2, 6, 23, 0.12);
  padding: 1.15rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

html[data-theme="dark"] .finalCta {
  box-shadow: 0 22px 52px rgba(0, 0, 0, 0.55);
}

.finalTitle {
  font-weight: 950;
  font-size: 1.1rem;
}

.finalDesc {
  color: var(--text-muted);
  margin-top: 0.2rem;
  line-height: 1.45;
}

.finalActions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.logosRow {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

.logoChip {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.5rem 0.7rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--panel);
}

.logoImg {
  width: 18px;
  height: 18px;
  object-fit: contain;
  display: block;
  filter: grayscale(1);
  opacity: 0.9;
}
/* Case studies */
.caseStudies {
  padding: 2.8rem 0 3.1rem;
  background: radial-gradient(
      circle at top,
      rgba(16, 185, 129, 0.08) 0,
      transparent 55%
    ),
    radial-gradient(circle at top, #033632 0, #021817 60%);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.cardsGrid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
}

.caseCard {
  grid-column: span 4;
  display: block;
  text-decoration: none;
  color: inherit;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.6);
  padding: 1.15rem 1.15rem 1.05rem;
  transition: transform 160ms ease, border-color 160ms ease,
    box-shadow 160ms ease, background 160ms ease;
  overflow: hidden;
  position: relative;
}

.caseCard:hover {
  transform: translateY(-2px);
  border-color: rgba(45, 212, 191, 0.35);
  background: rgba(255, 255, 255, 0.045);
  box-shadow: 0 22px 46px rgba(0, 0, 0, 0.72);
}

.caseTop {
  display: grid;
  gap: 0.85rem;
  margin-bottom: 0.9rem;
}

.badge {
  width: fit-content;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.18rem 0.55rem;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(45, 212, 191, 0.35);
  font-size: 0.74rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(167, 243, 208, 0.95);
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.logoWrap {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.18);
  display: grid;
  place-items: center;
  overflow: hidden;
}

.caseLogo {
  width: 76%;
  height: 76%;
  object-fit: contain;
  display: block;
  filter: saturate(1.05) contrast(1.05);
}

.brandMeta {
  min-width: 0;
}

.brandName {
  font-weight: 950;
  letter-spacing: -0.2px;
  line-height: 1.1;
}

.brandService {
  margin-top: 0.15rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.25;
}

.caseTitle {
  font-weight: 950;
  margin-bottom: 0.45rem;
  line-height: 1.2;
  letter-spacing: -0.2px;
}

.caseDesc {
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.55;
  margin-bottom: 0.95rem;
}

.caseCtaRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding-top: 0.9rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.caseCta {
  font-weight: 900;
  color: rgba(165, 180, 252, 0.95);
}

.arrow {
  color: rgba(45, 212, 191, 0.85);
  font-weight: 900;
}

/* Responsive */
@media (max-width: 980px) {
  .caseCard {
    grid-column: span 6;
  }

  .container {
    max-width: var(--max);
    margin: 0 auto;
    padding: 0 0.1rem;
  }
}
@media (max-width: 640px) {
  .caseCard {
    grid-column: span 12;
  }
  .logoWrap {
    width: 48px;
    height: 48px;
  }
}

/* En dark, les logos noirs deviennent invisibles => on remonte le contraste */
html[data-theme="dark"] .logoImg {
  filter: grayscale(1) brightness(1.35) contrast(1.05);
  opacity: 0.95;
}

.logoName {
  font-size: 0.88rem;
  color: var(--text);
  opacity: 0.92;
  white-space: nowrap;
}

/* Mobile: on peut cacher les noms si tu veux juste les icônes */
@media (max-width: 520px) {
  .logoName {
    display: none;
  }
  .logoChip {
    padding: 0.45rem 0.55rem;
  }
  .logoImg {
    width: 20px;
    height: 20px;
  }
}

/* Responsive */
@media (max-width: 980px) {
  .heroGrid {
    grid-template-columns: minmax(0, 1fr);
  }
  .statsGrid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .quoteCard,
  .caseCard,
  .entCard {
    grid-column: span 6;
  }
  .finalCta {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .statsGrid {
    grid-template-columns: 1fr;
  }
  .quoteCard,
  .caseCard,
  .entCard {
    grid-column: span 12;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .customersPage.reveal-ready .reveal {
    transition: none;
    transform: none;
  }
  .btn,
  .quoteCard,
  .caseCard,
  .entCard,
  .tab {
    transition: none;
  }
}
</style>

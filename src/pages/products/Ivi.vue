<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import Container from "../../components/ui/Container.vue";
import { LINKS } from "../../app/config.js";

/**
 * Ivi.php marketing page:
 * - No bootstrap/CDN classes
 * - Premium animations (reveal on scroll)
 * - Install command copy
 * - Strong "Simple. Modern. Expressive." positioning
 */

const installCmd = "composer create-project iviphp/ivi myapp";
const copied = ref(false);

async function copyInstall() {
  try {
    await navigator.clipboard.writeText(installCmd);
    copied.value = true;
    window.setTimeout(() => (copied.value = false), 1200);
  } catch {
    // fallback: do nothing (clipboard blocked)
    copied.value = false;
  }
}

// small reveal animation (IntersectionObserver)
let io = null;
onMounted(() => {
  io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) e.target.classList.add("is-visible");
      }
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
});

onBeforeUnmount(() => {
  if (io) io.disconnect();
});
</script>

<template>
  <main class="ivi">
    <!-- HERO -->
    <section class="hero">
      <Container>
        <div class="heroGrid">
          <div class="heroText">
            <div class="kicker reveal">
              <span class="kBadge"> <span class="dot" /> Product </span>
              <span class="kSep">•</span>
              <span class="kText">PHP framework</span>
            </div>

            <div class="badges reveal">
              <span class="pill">Simple</span>
              <span class="sepDot" aria-hidden="true" />
              <span class="pill">Modern</span>
              <span class="sepDot" aria-hidden="true" />
              <span class="pill">Expressive</span>
            </div>

            <h1 class="title reveal">
              Build delightful PHP apps with
              <span class="accent">clarity</span> and
              <span class="accent2">speed</span>.
            </h1>

            <p class="subtitle reveal">
              Ivi.php is a lightweight, production-ready framework designed for
              clean APIs and modular systems without the bloat. A pragmatic
              foundation that stays readable as your codebase grows.
            </p>

            <div class="actions reveal">
              <a class="btn primary" href="/docs" data-spa>Get started</a>
              <a
                class="btn ghost"
                :href="LINKS.iviGithub || 'https://github.com/iviphp/ivi'"
                target="_blank"
                rel="noopener"
              >
                View on GitHub
              </a>
            </div>

            <div
              class="install reveal"
              role="group"
              aria-label="Install command"
            >
              <div class="installLeft">
                <div class="installLabel">Quick install</div>
                <code class="installCode">{{ installCmd }}</code>
              </div>
              <button class="copyBtn" type="button" @click="copyInstall">
                <span v-if="!copied">Copy</span>
                <span v-else>Copied ✓</span>
              </button>
            </div>

            <div class="heroMeta reveal">
              <span class="metaPill">Minimal core</span>
              <span class="metaPill">Middleware</span>
              <span class="metaPill">Routing</span>
              <span class="metaPill">Modular systems</span>
            </div>
          </div>

          <!-- HERO PANEL -->
          <div class="heroPanel reveal">
            <div class="panel">
              <div class="panelTop">
                <div class="lights" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div class="panelTitle">ivi.php — example</div>
              </div>

              <pre><code><span class="c">  # routes.php</span>

  <span class="k">$router</span><span class="t">-></span><span class="f">get</span><span class="t">(</span><span class="s">"/"</span><span class="t">,</span> <span class="t">[</span><span class="n">HomeController</span><span class="t">::</span><span class="k">class</span><span class="t">,</span> <span class="s">"home"</span><span class="t">]</span><span class="t">)</span><span class="t">;</span>
  <span class="k">$router</span><span class="t">-></span><span class="f">get</span><span class="t">(</span><span class="s">"/docs"</span><span class="t">,</span> <span class="t">[</span><span class="n">DocsController</span><span class="t">::</span><span class="k">class</span><span class="t">,</span> <span class="s">"index"</span><span class="t">]</span><span class="t">)</span><span class="t">;</span>

  <span class="c"># API</span>
  <span class="k">$router</span><span class="t">-></span><span class="f">get</span><span class="t">(</span><span class="s">"/api/ping"</span><span class="t">,</span> <span class="k">fn</span><span class="t">(</span><span class="t">)</span> <span class="k">=&gt;</span> <span class="k">new</span> <span class="n">JsonResponse</span><span class="t">(</span><span class="t">[</span>
    <span class="s">"status"</span> <span class="t">=&gt;</span> <span class="s">"ok"</span><span class="t">,</span>
    <span class="s">"framework"</span> <span class="t">=&gt;</span> <span class="s">"ivi.php"</span>
  <span class="t">]</span><span class="t">)</span><span class="t">)</span><span class="t">;</span>

  <span class="c"># Users (CRUD)</span>
  <span class="k">$router</span><span class="t">-></span><span class="f">get</span><span class="t">(</span><span class="s">"/users/:id"</span><span class="t">,</span> <span class="t">[</span><span class="n">UserController</span><span class="t">::</span><span class="k">class</span><span class="t">,</span> <span class="s">"show"</span><span class="t">]</span><span class="t">)</span>
    <span class="t">-></span><span class="f">where</span><span class="t">(</span><span class="s">"id"</span><span class="t">,</span> <span class="s">"\\d+"</span><span class="t">)</span><span class="t">;</span>

  <span class="c"># Start server</span>
  <span class="k">$app</span><span class="t">-></span><span class="f">run</span><span class="t">(</span><span class="n">8000</span><span class="t">)</span><span class="t">;</span></code></pre>
            </div>
          </div>
        </div>
      </Container>

      <div class="blob" aria-hidden="true" />
      <div class="gridOverlay" aria-hidden="true" />
    </section>

    <!-- WHY -->
    <section class="section">
      <Container>
        <div class="sectionHead reveal">
          <h2>Why developers choose Ivi.php</h2>
          <p>
            A framework that keeps the surface area small while still letting
            you build real systems APIs, dashboards, and modular backends.
          </p>
        </div>

        <div class="cards">
          <article class="card reveal">
            <div class="cardTop">
              <span class="icon">⚙️</span>
              <h3>Minimal Core</h3>
            </div>
            <p>
              Clear primitives: App, Router, Request, Response, Middleware.
              Learn it once, scale it everywhere.
            </p>
            <div class="tags">
              <span class="tag">Small surface</span>
              <span class="tag">Readable</span>
              <span class="tag">Stable</span>
            </div>
          </article>

          <article class="card reveal">
            <div class="cardTop">
              <span class="icon">✨</span>
              <h3>Expressive by Design</h3>
            </div>
            <p>
              APIs that read like intent. Fewer layers. Less ceremony. More
              shipping.
            </p>
            <div class="tags">
              <span class="tag">DX-first</span>
              <span class="tag">Clean APIs</span>
              <span class="tag">Modular</span>
            </div>
          </article>

          <article class="card reveal">
            <div class="cardTop">
              <span class="icon">⚡</span>
              <h3>Production-minded</h3>
            </div>
            <p>
              Practical defaults for performance, error handling, and
              maintainable architecture without turning everything into magic.
            </p>
            <div class="tags">
              <span class="tag">Fast startup</span>
              <span class="tag">No bloat</span>
              <span class="tag">Predictable</span>
            </div>
          </article>
        </div>
      </Container>
    </section>

    <!-- ECOSYSTEM -->
    <section class="section alt">
      <Container>
        <div class="sectionHead reveal">
          <h2>Ecosystem</h2>
          <p>
            A growing toolkit that feels consistent so you can move faster
            without losing clarity.
          </p>
        </div>

        <div class="ecoGrid">
          <a class="ecoCard reveal" href="/docs" data-spa>
            <div class="ecoTitle">Router</div>
            <div class="ecoDesc">Elegant routes & middleware composition.</div>
          </a>

          <a class="ecoCard reveal" href="/docs" data-spa>
            <div class="ecoTitle">ORM</div>
            <div class="ecoDesc">Clean models, query builder, pagination.</div>
          </a>

          <a class="ecoCard reveal" href="/docs" data-spa>
            <div class="ecoTitle">CLI</div>
            <div class="ecoDesc">
              Migrations & dev tooling that feels right.
            </div>
          </a>
        </div>

        <div class="cta reveal">
          <div class="ctaLeft">
            <div class="ctaTitle">Ready to build with Ivi.php?</div>
            <div class="ctaText">
              Start small, keep it simple, and scale without rewriting your
              architecture.
            </div>
          </div>
          <div class="ctaActions">
            <a class="btn primary" href="/docs" data-spa>Get started</a>
            <a
              class="btn ghost"
              :href="LINKS.iviGithub || 'https://github.com/iviphp/ivi'"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </section>
  </main>
</template>

<style scoped>
/* ===========================
   Ivi.php — Product Page
   Unique look (no Bootstrap)
   =========================== */

.ivi {
  /* local palette (works on top of site tokens) */
  --ivi-bg: #060a12;
  --ivi-bg2: #070f1d;
  --ivi-panel: rgba(255, 255, 255, 0.04);
  --ivi-border: rgba(148, 163, 184, 0.16);
  --ivi-text: rgba(255, 255, 255, 0.92);
  --ivi-muted: rgba(203, 213, 225, 0.78);

  --ivi-accent: #00c37a;
  --ivi-accent2: #a7f3d0;
  --ivi-accentSoft: rgba(0, 195, 122, 0.14);

  color: var(--ivi-text);
}

.hero {
  position: relative;
  overflow: hidden;
  padding: clamp(42px, 6vw, 88px) 0 clamp(30px, 5vw, 64px);
  background: radial-gradient(
      circle at 20% 0%,
      rgba(0, 195, 122, 0.16),
      transparent 55%
    ),
    radial-gradient(
      circle at 70% 20%,
      rgba(56, 189, 248, 0.12),
      transparent 60%
    ),
    linear-gradient(180deg, var(--ivi-bg2), var(--ivi-bg));
  border-bottom: 1px solid var(--ivi-border);
}

.gridOverlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      to right,
      rgba(148, 163, 184, 0.08) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: radial-gradient(
    circle at 30% 10%,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0) 65%
  );
  pointer-events: none;
  opacity: 0.35;
}

.blob {
  position: absolute;
  right: -20%;
  bottom: -55%;
  width: min(92vw, 1100px);
  height: 520px;
  background: radial-gradient(
    closest-side,
    rgba(0, 195, 122, 0.22),
    transparent 70%
  );
  filter: blur(55px);
  pointer-events: none;
  opacity: 0.85;
}

.heroGrid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: 28px;
  align-items: center;
}

.kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
  color: var(--ivi-muted);
  font-size: 13px;
}

.kBadge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(2, 6, 23, 0.55);
  border: 1px solid var(--ivi-border);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--ivi-accent);
  box-shadow: 0 0 18px rgba(0, 195, 122, 0.55);
}

.kSep {
  opacity: 0.6;
}

.badges {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.pill {
  display: inline-flex;
  align-items: center;
  padding: 6px 11px;
  border-radius: 999px;
  background: var(--ivi-accentSoft);
  border: 1px solid rgba(0, 195, 122, 0.25);
  color: rgba(231, 255, 246, 0.92);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.sepDot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: rgba(231, 255, 246, 0.55);
}

.title {
  font-size: clamp(30px, 4.7vw, 52px);
  line-height: 1.06;
  margin: 0 0 12px;
  font-weight: 900;
  letter-spacing: -0.02em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
}

.accent {
  color: var(--ivi-accent2);
}
.accent2 {
  color: #7dd3fc;
}

.subtitle {
  margin: 0 0 18px;
  color: var(--ivi-muted);
  max-width: 52rem;
  font-size: clamp(15px, 2vw, 18px);
  line-height: 1.6;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 12px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid transparent;
  font-weight: 800;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: transform 160ms ease, box-shadow 160ms ease,
    border-color 160ms ease, background 160ms ease, color 160ms ease;
  text-decoration: none;
  user-select: none;
}

.btn.primary {
  background: linear-gradient(135deg, var(--ivi-accent), #0ea5e9);
  color: #06121a;
  box-shadow: 0 22px 46px rgba(0, 195, 122, 0.24);
}
.btn.primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 28px 54px rgba(0, 195, 122, 0.34);
}

.btn.ghost {
  background: rgba(2, 6, 23, 0.35);
  border-color: var(--ivi-border);
  color: rgba(231, 255, 246, 0.9);
}
.btn.ghost:hover {
  transform: translateY(-1px);
  border-color: rgba(0, 195, 122, 0.35);
  background: rgba(2, 6, 23, 0.55);
}

.install {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;

  background: rgba(2, 6, 23, 0.55);
  border: 1px solid var(--ivi-border);
  border-radius: 16px;
  padding: 12px 12px;
}

.installLeft {
  min-width: 0;
  display: grid;
  gap: 4px;
}

.installLabel {
  font-size: 12px;
  color: rgba(203, 213, 225, 0.72);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.installCode {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "JetBrains Mono",
    monospace;
  color: rgba(231, 255, 246, 0.92);
  font-size: 13.5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.copyBtn {
  border: 1px solid rgba(0, 195, 122, 0.35);
  background: rgba(0, 195, 122, 0.12);
  color: rgba(231, 255, 246, 0.92);
  padding: 10px 12px;
  border-radius: 12px;
  font-weight: 900;
  cursor: pointer;
  transition: transform 160ms ease, background 160ms ease,
    border-color 160ms ease;
}
.copyBtn:hover {
  transform: translateY(-1px);
  background: rgba(0, 195, 122, 0.18);
  border-color: rgba(0, 195, 122, 0.55);
}

.heroMeta {
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.metaPill {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--ivi-border);
  background: rgba(2, 6, 23, 0.35);
  color: rgba(231, 255, 246, 0.88);
  font-size: 12px;
}

.heroPanel {
  display: flex;
  justify-content: flex-end;
}

.panel {
  width: 100%;
  max-width: 520px;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(2, 6, 23, 0.62);
  border: 1px solid rgba(0, 195, 122, 0.28);
  box-shadow: 0 26px 60px rgba(0, 0, 0, 0.55);
}

.panelTop {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  background: linear-gradient(
    to right,
    rgba(2, 6, 23, 0.9),
    rgba(4, 26, 32, 0.9)
  );
  border-bottom: 1px solid rgba(148, 163, 184, 0.14);
}

.lights {
  display: inline-flex;
  gap: 6px;
}
.lights span {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.55);
}
.lights span:nth-child(1) {
  background: #f97316;
}
.lights span:nth-child(2) {
  background: #eab308;
}
.lights span:nth-child(3) {
  background: #22c55e;
}

.panelTitle {
  margin-left: auto;
  font-size: 12px;
  color: rgba(203, 213, 225, 0.76);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.panelBody {
  padding: 14px 14px 12px;
  background: radial-gradient(
    circle at top,
    rgba(6, 95, 70, 0.18),
    rgba(2, 6, 23, 0.92) 55%
  );
}

.panelBody pre {
  margin: 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "JetBrains Mono",
    monospace;
  font-size: 13px;
  line-height: 1.6;
  color: rgba(226, 232, 240, 0.95);
}

.panelHint {
  margin-top: 10px;
  color: rgba(203, 213, 225, 0.74);
  font-size: 13px;
  line-height: 1.55;
}

/* tiny pseudo highlighting */
.c {
  color: rgba(148, 163, 184, 0.72);
  font-style: italic;
}
.k {
  color: #7dd3fc;
  font-weight: 700;
}
.t {
  color: rgba(226, 232, 240, 0.75);
}
.f {
  color: #a7f3d0;
  font-weight: 700;
}
.s {
  color: #86efac;
}
.n {
  color: #fbbf24;
  font-weight: 700;
}

.section {
  padding: 44px 0;
  background: linear-gradient(180deg, rgba(2, 6, 23, 0), rgba(2, 6, 23, 0.22));
}

.section.alt {
  background: radial-gradient(
    circle at top,
    rgba(0, 195, 122, 0.1),
    rgba(2, 6, 23, 0.78) 55%
  );
  border-top: 1px solid var(--ivi-border);
  border-bottom: 1px solid var(--ivi-border);
}

.sectionHead h2 {
  margin: 0 0 8px;
  font-size: 22px;
  letter-spacing: -0.01em;
}
.sectionHead p {
  margin: 0;
  color: var(--ivi-muted);
  max-width: 52rem;
  line-height: 1.6;
}

.cards {
  margin-top: 18px;
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(12, 1fr);
}

.card {
  grid-column: span 4;
  border-radius: 18px;
  background: var(--ivi-panel);
  border: 1px solid var(--ivi-border);
  padding: 16px 16px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
  overflow: hidden;
}

.cardTop {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}
.icon {
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(0, 195, 122, 0.1);
  border: 1px solid rgba(0, 195, 122, 0.22);
}

.card h3 {
  margin: 0;
  font-size: 16px;
}

.card p {
  margin: 0;
  color: var(--ivi-muted);
  line-height: 1.6;
}

.tags {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.tag {
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(2, 6, 23, 0.28);
  color: rgba(231, 255, 246, 0.85);
}

.ecoGrid {
  margin-top: 18px;
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(12, 1fr);
}

.ecoCard {
  grid-column: span 4;
  border-radius: 16px;
  background: rgba(2, 6, 23, 0.45);
  border: 1px solid var(--ivi-border);
  padding: 14px 16px;
  text-decoration: none;
  color: var(--ivi-text);
  transition: transform 160ms ease, border-color 160ms ease,
    box-shadow 160ms ease, background 160ms ease;
}

.ecoCard:hover {
  transform: translateY(-2px);
  border-color: rgba(0, 195, 122, 0.35);
  box-shadow: 0 20px 44px rgba(0, 0, 0, 0.42);
  background: rgba(2, 6, 23, 0.62);
}

.ecoTitle {
  font-weight: 900;
  margin-bottom: 4px;
}
.ecoDesc {
  color: var(--ivi-muted);
  line-height: 1.55;
  font-size: 14px;
}

.cta {
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;

  border-radius: 18px;
  background: rgba(2, 6, 23, 0.55);
  border: 1px solid rgba(0, 195, 122, 0.18);
  padding: 16px 16px;
}

.ctaTitle {
  font-weight: 950;
}
.ctaText {
  color: var(--ivi-muted);
  margin-top: 4px;
  max-width: 44rem;
  line-height: 1.55;
}
.ctaActions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

/* reveal animation */
.reveal {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 520ms ease, transform 520ms ease;
  will-change: opacity, transform;
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* responsive */
@media (max-width: 900px) {
  .heroGrid {
    grid-template-columns: minmax(0, 1fr);
  }

  .heroPanel {
    justify-content: flex-start;
  }

  .card {
    grid-column: span 12;
  }
  .ecoCard {
    grid-column: span 12;
  }

  .installCode {
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
  }
}
</style>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import Container from "../../components/ui/Container.vue";
import { LINKS } from "../../app/config.js";

const root = ref(null);
let io = null;

function mountRevealObserver() {
  const el = root.value;
  if (!el) return;

  const items = el.querySelectorAll("[data-reveal]");
  io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) e.target.classList.add("is-visible");
      }
    },
    { threshold: 0.12 }
  );

  items.forEach((n) => io.observe(n));
}

onMounted(() => mountRevealObserver());
onBeforeUnmount(() => io && io.disconnect());

const THEME_ATTR = "data-theme";
const DARK_VALUE = "dark";
let previousTheme = null;

onMounted(() => {
  // force dark on this page
  previousTheme = document.documentElement.getAttribute(THEME_ATTR);
  document.documentElement.setAttribute(THEME_ATTR, DARK_VALUE);

  mountRevealObserver();
});

onBeforeUnmount(() => {
  // restore previous theme when leaving
  if (previousTheme === null)
    document.documentElement.removeAttribute(THEME_ATTR);
  else document.documentElement.setAttribute(THEME_ATTR, previousTheme);

  if (io) io.disconnect();
});
</script>

<template>
  <section ref="root" class="vix">
    <!-- ambient / gradients -->
    <div class="bg" aria-hidden="true">
      <div class="glow g1"></div>
      <div class="glow g2"></div>
      <div class="gridNoise"></div>
    </div>

    <!-- HERO -->
    <div class="hero">
      <Container>
        <div class="heroInner">
          <div class="heroText" data-reveal>
            <div class="kicker">
              <span class="dot"></span>
              <span>Vix.cpp Runtime</span>
              <span class="sep">·</span>
              <span class="muted">Offline-first native runtime</span>
            </div>

            <h1 class="h1">
              Ultra-fast C++ runtime for<br />
              offline-first and peer-to-peer apps.
            </h1>

            <p class="sub">
              Build distributed systems that stay responsive under real-world
              network conditions — with native performance, no GC pauses, and a
              Node-like developer experience.
            </p>

            <div class="cta">
              <a
                class="btn primary"
                :href="LINKS.vixSite + '/quickstart'"
                target="_blank"
                rel="noreferrer"
              >
                Quickstart
                <span class="arrow">→</span>
              </a>

              <a
                class="btn ghost"
                :href="LINKS.vixGithub"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <span class="arrow">↗</span>
              </a>

              <a class="btn outline" :href="LINKS.engineersEmail">
                Talk to our engineers
              </a>
            </div>

            <div class="meta">
              <span class="pill">C++20</span>
              <span class="pill">Offline-first</span>
              <span class="pill">P2P-ready</span>
              <span class="pill">Portable</span>
            </div>

            <div class="micro" data-reveal>
              <div class="microTitle">Why Vix exists</div>
              <div class="microText">
                Most runtimes assume stable internet and cloud-first
                infrastructure. Vix is engineered for unstable networks, edge
                environments, and local-first systems.
              </div>
            </div>
          </div>

          <!-- Terminal card -->
          <div class="heroCard" data-reveal>
            <div class="term">
              <div class="termHead">
                <span class="c red"></span><span class="c yellow"></span
                ><span class="c green"></span>
                <span class="termTitle">vix — runtime</span>
              </div>

              <div class="termBody">
                <pre><code><span class="p">~/demo</span><span class="prompt">$</span> <span class="cmd">vix new</span> <span class="arg">hello</span>
<span class="muted">✔ project generated</span>

<span class="p">~/demo/hello</span><span class="prompt">$</span> <span class="cmd">vix dev</span>
<span class="muted">• hot reload</span>
<span class="muted">• native build cache</span>
<span class="ok">✔ listening</span> <span class="muted">http://localhost:8080</span>

<span class="p">~/demo/hello</span><span class="prompt">$</span> <span class="cmd">wrk</span> <span class="arg">-t8 -c256 -d10s</span> <span class="muted">http://127.0.0.1:8080</span>
<span class="ok">~99k req/s</span> <span class="muted">(pinned CPU — reference)</span></code></pre>
              </div>
            </div>

            <div class="cardFoot">
              <div class="footLine">
                <span class="spark"></span>
                <span>Performance is a requirement, not a feature.</span>
              </div>
              <div class="footLinks">
                <a
                  class="miniLink"
                  :href="LINKS.vixSite"
                  target="_blank"
                  rel="noreferrer"
                  >vixcpp.com</a
                >
                <span class="miniSep">·</span>
                <a
                  class="miniLink"
                  :href="LINKS.vixGithub"
                  target="_blank"
                  rel="noreferrer"
                  >github.com/vixcpp/vix</a
                >
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>

    <!-- WHY developers use Vix (Modular-style 3 columns) -->
    <div class="section">
      <Container>
        <div class="sectionHead" data-reveal>
          <h2 class="h2">Why developers choose Vix</h2>
          <p class="lead">
            A runtime designed for real conditions: performance, portability,
            and full control.
          </p>
        </div>

        <div class="cards">
          <article class="card" data-reveal>
            <div class="icon">⚡</div>
            <h3>Incredible Performance</h3>
            <p>
              Native throughput with predictable latency — no garbage collection
              pauses, no runtime overhead you can’t explain.
            </p>
            <div class="cardMeta">
              <span class="tag">C++ native</span>
              <span class="tag">Low latency</span>
              <span class="tag">No GC</span>
            </div>
          </article>

          <article class="card" data-reveal>
            <div class="icon">🌍</div>
            <h3>Hardware & Platform Portability</h3>
            <p>
              Build once, run across Linux servers, edge nodes, and constrained
              environments. Vix targets portability without sacrificing
              performance.
            </p>
            <div class="cardMeta">
              <span class="tag">Edge-ready</span>
              <span class="tag">Linux-first</span>
              <span class="tag">Portable builds</span>
            </div>
          </article>

          <article class="card" data-reveal>
            <div class="icon">🧠</div>
            <h3>Complete Control</h3>
            <p>
              Own every layer: networking, concurrency, memory, protocols, and
              optimization. Customize the stack instead of fighting it.
            </p>
            <div class="cardMeta">
              <span class="tag">Full stack control</span>
              <span class="tag">Custom ops</span>
              <span class="tag">Tunable</span>
            </div>
          </article>
        </div>
      </Container>
    </div>

    <!-- Modules / capabilities (short, marketing) -->
    <div class="section alt">
      <Container>
        <div class="split">
          <div class="left" data-reveal>
            <h2 class="h2">A runtime, not “just a framework”.</h2>
            <p class="lead">
              Vix is a foundation for serious distributed systems: HTTP,
              WebSocket, P2P, offline-first primitives — engineered as a
              coherent runtime.
            </p>

            <div class="bullets">
              <div class="b">
                <div class="bDot"></div>
                <div>
                  <div class="bTitle">Offline-first core</div>
                  <div class="bText">
                    Designed to keep apps responsive offline and converge safely
                    when the network returns.
                  </div>
                </div>
              </div>

              <div class="b">
                <div class="bDot"></div>
                <div>
                  <div class="bTitle">Peer-to-peer transport</div>
                  <div class="bText">
                    Secure peer connections and message routing for local-first
                    and edge systems.
                  </div>
                </div>
              </div>

              <div class="b">
                <div class="bDot"></div>
                <div>
                  <div class="bTitle">Node-like DX</div>
                  <div class="bText">
                    CLI, dev mode, fast builds — modern ergonomics without
                    leaving C++.
                  </div>
                </div>
              </div>
            </div>

            <div class="miniCta">
              <a
                class="btn primary"
                :href="LINKS.vixSite + '/quickstart'"
                target="_blank"
                rel="noreferrer"
              >
                Start with Quickstart <span class="arrow">→</span>
              </a>
              <a
                class="btn ghost"
                :href="LINKS.vixGithub"
                target="_blank"
                rel="noreferrer"
              >
                Browse the repo <span class="arrow">↗</span>
              </a>
            </div>
          </div>

          <!-- code sample (short) -->
          <div class="right" data-reveal>
            <div class="codeCard">
              <div class="codeHead">
                <span class="c red"></span><span class="c yellow"></span
                ><span class="c green"></span>
                <span class="codeTitle">hello.cpp</span>
              </div>

              <div class="codeBody">
                <pre><code><span class="kw">#include</span> <span class="str">&lt;vix.hpp&gt;</span>

<span class="kw">int</span> main() {
  Vix::App app;

  app.get(<span class="str">"/"</span>, [](auto&, auto& res) {
    res.send(<span class="str">"Hello from Vix.cpp"</span>);
  });

  app.run(<span class="num">8080</span>);
}</code></pre>
              </div>

              <div class="codeFoot">
                <span class="soft">Run like a script:</span>
                <span class="cmdLine"
                  ><span class="prompt">$</span> vix dev main.cpp</span
                >
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>

    <!-- FINAL CTA -->
    <div class="final">
      <Container>
        <div class="finalInner" data-reveal>
          <h2 class="h2">Build with Vix.cpp</h2>
          <p class="lead">
            If you’re building offline-first, edge, or high-performance systems
            in modern C++ — Vix is built for you.
          </p>

          <div class="cta">
            <a
              class="btn primary"
              :href="LINKS.vixSite + '/quickstart'"
              target="_blank"
              rel="noreferrer"
            >
              Quickstart <span class="arrow">→</span>
            </a>
            <a class="btn outline" :href="LINKS.engineersEmail">
              Talk to our engineers
            </a>
            <a
              class="btn ghost"
              :href="LINKS.vixGithub"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span class="arrow">↗</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  </section>
</template>

<style scoped>
.vix {
  position: relative;
  overflow: hidden;
  color: var(--text, #fff);

  --bg: #011e1c;
  --bg-alt: #022724;
  --bg-elevated: #03312d;

  --accent: #1ee6a3;
  --accent-dark: #0ca377;
  --accent-soft: rgba(30, 230, 163, 0.16);

  --text: #ffffff;
  --muted: #cbd5e1;
  --border: #09433f;

  background: radial-gradient(
    circle at top,
    #064e3b 0,
    var(--bg) 50%,
    #011716 100%
  );
  color: var(--text);
}

/* Background layer */
.bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: radial-gradient(
    circle at top,
    #064e3b 0,
    #011e1c 50%,
    #011716 100%
  );
}

.glow {
  position: absolute;
  width: 680px;
  height: 680px;
  border-radius: 999px;
  filter: blur(50px);
  opacity: 0.55;
  transform: translateZ(0);
  animation: float 7.5s ease-in-out infinite;
}

.g1 {
  left: -220px;
  top: -260px;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(30, 230, 163, 0.22),
    transparent 60%
  );
}

.g2 {
  right: -260px;
  top: 40px;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(30, 230, 163, 0.16),
    transparent 62%
  );
  animation-delay: 1.2s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(14px);
  }
}

.gridNoise {
  position: absolute;
  inset: 0;
  background: radial-gradient(
      circle at 30% 20%,
      rgba(30, 230, 163, 0.1),
      transparent 55%
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.35));
  opacity: 0.9;
}

/* Ensure content above bg */
.hero,
.section,
.final {
  position: relative;
  z-index: 1;
}

/* Reveal animations */
[data-reveal] {
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 560ms ease, transform 560ms ease;
  will-change: opacity, transform;
}

[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* HERO */
.hero {
  padding: 3.9rem 0 2.8rem;
}

.heroInner {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: 2.4rem;
  align-items: center;
}

@media (max-width: 980px) {
  .heroInner {
    grid-template-columns: 1fr;
    gap: 1.4rem;
  }
}

.kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: rgba(2, 44, 34, 0.78);
  border: 1px solid rgba(45, 212, 191, 0.3);
  box-shadow: 0 16px 28px rgba(0, 0, 0, 0.35);
  color: #d1fae5;
  font-size: 0.82rem;
  font-weight: 650;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #1ee6a3;
  box-shadow: 0 0 14px rgba(30, 230, 163, 0.55);
}

.sep {
  opacity: 0.55;
}
.muted {
  color: #cbd5e1;
  opacity: 0.9;
}

.h1 {
  margin: 0.95rem 0 0;
  font-size: clamp(2.25rem, 3.1vw, 3.25rem);
  line-height: 1.06;
  letter-spacing: -0.02em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}

.sub {
  margin: 1rem 0 0;
  color: #cbd5e1;
  max-width: 44rem;
  line-height: 1.65;
  font-size: 1.02rem;
}

.cta {
  margin-top: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.62rem 1.15rem;
  border-radius: 999px;
  font-size: 0.92rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease,
    border-color 160ms ease;
  text-decoration: none;
}

.btn:hover {
  transform: translateY(-1px);
}

.primary {
  background: linear-gradient(135deg, #1ee6a3, #0ca377);
  color: #01201f;
  box-shadow: 0 20px 38px rgba(12, 148, 136, 0.55);
  font-weight: 700;
}

.primary:hover {
  box-shadow: 0 24px 46px rgba(12, 148, 136, 0.75);
}

.ghost {
  border: 1px solid rgba(45, 212, 191, 0.35);
  background: rgba(2, 44, 34, 0.75);
  color: #e5f9f6;
}

.ghost:hover {
  background: rgba(3, 68, 54, 0.92);
  border-color: rgba(34, 197, 154, 0.85);
}

.outline {
  border: 1px solid rgba(45, 212, 191, 0.38);
  background: transparent;
  color: #e5f9f6;
}

.outline:hover {
  background: rgba(2, 44, 34, 0.45);
  border-color: rgba(34, 197, 154, 0.85);
}

.arrow {
  opacity: 0.92;
}

.meta {
  margin-top: 1.05rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.pill {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  border: 1px solid rgba(45, 212, 191, 0.25);
  background: rgba(2, 44, 34, 0.55);
  color: #e5f9f6;
  font-size: 0.8rem;
  white-space: nowrap;
}

.micro {
  margin-top: 1.1rem;
  border-radius: 16px;
  border: 1px solid rgba(9, 67, 63, 0.9);
  background: rgba(1, 24, 22, 0.55);
  padding: 0.9rem 1rem;
}

.microTitle {
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #a7f3d0;
  margin-bottom: 0.35rem;
  font-weight: 800;
}

.microText {
  color: #cbd5e1;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Hero terminal card */
.heroCard {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.term {
  width: 100%;
  background: radial-gradient(circle at top left, #064e3b, #011716);
  border-radius: 20px;
  box-shadow: 0 22px 45px rgba(0, 0, 0, 0.65);
  border: 1px solid rgba(15, 118, 110, 0.65);
  overflow: hidden;
  transform: translateZ(0);
}

.termHead {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.58rem 0.75rem;
  background: linear-gradient(to right, #011716, #022c22);
  border-bottom: 1px solid rgba(15, 118, 110, 0.55);
}

.c {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: #4b5563;
}
.red {
  background: #f97316;
}
.yellow {
  background: #eab308;
}
.green {
  background: #22c55e;
}

.termTitle {
  margin-left: auto;
  font-size: 0.78rem;
  color: #cbd5e1;
  opacity: 0.9;
  font-weight: 650;
}

.termBody {
  padding: 0.95rem 1rem 1.1rem;
  font-size: 0.82rem;
  color: #e5f9f6;
  background: radial-gradient(circle at top, #052e26 0, #011716 60%);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.termBody pre {
  margin: 0;
  white-space: pre;
  min-width: 520px;
  line-height: 1.6;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "JetBrains Mono", "Liberation Mono", "Courier New", monospace;
  color: #e2e8f0;
}

.termBody::-webkit-scrollbar {
  height: 7px;
}
.termBody::-webkit-scrollbar-thumb {
  background: rgba(45, 212, 191, 0.72);
  border-radius: 10px;
}
.termBody::-webkit-scrollbar-track {
  background: rgba(1, 20, 20, 0.8);
}

.prompt {
  color: #22c55e;
  font-weight: 700;
}
.p {
  color: #a5b4fc;
  font-weight: 650;
}
.cmd {
  color: #38bdf8;
  font-weight: 650;
}
.arg {
  color: #facc15;
  font-weight: 650;
}
.ok {
  color: #22c55e;
  font-weight: 800;
}
.muted {
  color: #cbd5e1;
  opacity: 0.85;
}

.cardFoot {
  border-radius: 16px;
  border: 1px solid rgba(9, 67, 63, 0.9);
  background: rgba(1, 24, 22, 0.52);
  padding: 0.85rem 0.95rem;
}

.footLine {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  color: #e5f9f6;
  font-weight: 700;
}

.spark {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(30, 230, 163, 0.95);
  box-shadow: 0 0 16px rgba(30, 230, 163, 0.55);
}

.footLinks {
  margin-top: 0.4rem;
  color: #cbd5e1;
  font-size: 0.85rem;
}

.miniLink {
  color: #a7f3d0;
  text-decoration: none;
}
.miniLink:hover {
  text-decoration: underline;
  text-underline-offset: 2px;
}
.miniSep {
  opacity: 0.55;
  margin: 0 0.45rem;
}

/* Sections */
.section {
  padding: 3.2rem 0;
}

.sectionHead {
  margin-bottom: 1.6rem;
}

.h2 {
  margin: 0;
  font-size: 1.65rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}

.lead {
  margin: 0.65rem 0 0;
  color: #cbd5e1;
  max-width: 46rem;
  line-height: 1.6;
}

.cards {
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (max-width: 980px) {
  .cards {
    grid-template-columns: 1fr;
  }
}

.card {
  background: rgba(1, 24, 22, 0.96);
  border-radius: 14px;
  border: 1px solid rgba(15, 118, 110, 0.5);
  padding: 1.25rem 1.35rem;
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.65);
  position: relative;
  overflow: hidden;
  transition: transform 160ms ease, box-shadow 160ms ease,
    border-color 160ms ease;
}

.card::before {
  content: "";
  position: absolute;
  inset: -30%;
  background: radial-gradient(
    circle at 30% 20%,
    rgba(30, 230, 163, 0.14),
    transparent 55%
  );
  opacity: 0;
  transition: opacity 180ms ease;
}

.card:hover {
  transform: translateY(-2px);
  border-color: rgba(34, 197, 154, 0.85);
  box-shadow: 0 22px 46px rgba(0, 0, 0, 0.75);
}

.card:hover::before {
  opacity: 1;
}

.icon {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(30, 230, 163, 0.1);
  border: 1px solid rgba(45, 212, 191, 0.35);
  margin-bottom: 0.75rem;
  font-size: 1.05rem;
}

.card h3 {
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
}
.card p {
  margin: 0;
  color: #cbd5e1;
  line-height: 1.55;
}

.cardMeta {
  margin-top: 0.9rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.22rem 0.55rem;
  border-radius: 999px;
  background: rgba(2, 44, 34, 0.78);
  border: 1px solid rgba(45, 212, 191, 0.25);
  color: #e5f9f6;
  font-size: 0.78rem;
}

/* Alt section split */
.section.alt {
  background: radial-gradient(circle at top, #033632 0, #021817 60%);
  border-top: 1px solid rgba(9, 67, 63, 0.55);
  border-bottom: 1px solid rgba(9, 67, 63, 0.55);
}

.split {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: 2rem;
  align-items: center;
}

@media (max-width: 980px) {
  .split {
    grid-template-columns: 1fr;
  }
}

.bullets {
  margin-top: 1.15rem;
  display: grid;
  gap: 0.9rem;
}

.b {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  padding: 0.85rem 0.9rem;
  border-radius: 16px;
  border: 1px solid rgba(9, 67, 63, 0.85);
  background: rgba(1, 24, 22, 0.55);
}

.bDot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  margin-top: 7px;
  background: rgba(30, 230, 163, 0.95);
  box-shadow: 0 0 16px rgba(30, 230, 163, 0.35);
  flex: 0 0 auto;
}

.bTitle {
  font-weight: 800;
  margin-bottom: 2px;
}
.bText {
  color: #cbd5e1;
  line-height: 1.55;
}

.miniCta {
  margin-top: 1.1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

/* Code card */
.codeCard {
  background: #020617;
  border-radius: 20px;
  border: 1px solid rgba(15, 118, 110, 0.7);
  box-shadow: 0 22px 45px rgba(0, 0, 0, 0.65);
  overflow: hidden;
}

.codeHead {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.58rem 0.75rem;
  background: linear-gradient(to right, #011716, #022c22);
  border-bottom: 1px solid rgba(15, 118, 110, 0.55);
}

.codeTitle {
  margin-left: auto;
  font-size: 0.78rem;
  color: #cbd5e1;
  opacity: 0.9;
  font-weight: 650;
}

.codeBody {
  padding: 0.95rem 1rem 1.05rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.codeBody pre {
  margin: 0;
  white-space: pre;
  min-width: 520px;
  line-height: 1.6;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "JetBrains Mono", "Liberation Mono", "Courier New", monospace;
  color: #e2e8f0;
  font-size: 0.88rem;
}

.codeFoot {
  padding: 0.7rem 1rem;
  border-top: 1px solid rgba(15, 118, 110, 0.45);
  background: rgba(1, 24, 22, 0.35);
  display: flex;
  gap: 0.6rem;
  align-items: baseline;
  flex-wrap: wrap;
}

.soft {
  color: #cbd5e1;
  opacity: 0.85;
  font-size: 0.85rem;
}
.cmdLine {
  color: #e5f9f6;
  font-weight: 700;
}
.codeFoot .prompt {
  color: #22c55e;
  font-weight: 900;
}

/* Minimal syntax tint */
.kw {
  color: #60a5fa;
}
.str {
  color: #22c55e;
}
.num {
  color: #f97316;
}

/* Final CTA */
.final {
  padding: 3.1rem 0 3.6rem;
}

.finalInner {
  border-radius: 20px;
  border: 1px solid rgba(9, 67, 63, 0.85);
  background: radial-gradient(
      800px 240px at 25% 35%,
      rgba(30, 230, 163, 0.12),
      transparent 60%
    ),
    rgba(1, 24, 22, 0.55);
  padding: 1.35rem 1.4rem;
  box-shadow: 0 22px 45px rgba(0, 0, 0, 0.55);
}
</style>

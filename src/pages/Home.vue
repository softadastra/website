<script setup>
import Container from "../components/ui/Container.vue";
import { SITE, LINKS } from "../app/config.js";

const heroImg =
  "https://res.cloudinary.com/dwjbed2xb/image/upload/v1767987652/slide_mjoawy.png";
const archImg =
  "https://res.cloudinary.com/dwjbed2xb/image/upload/v1767987652/architecture_mhrlu6.png";
</script>

<template>
  <div class="home">
    <!-- HERO -->
    <section class="hero">
      <Container>
        <div class="heroGrid">
          <div class="heroLeft">
            <div class="kicker">
              <span class="dot" aria-hidden="true"></span>
              <span>{{ SITE.tagline }}</span>
            </div>

            <h1 class="title">
              Make the web work <span class="accent">everywhere</span>.
            </h1>

            <p class="subtitle">
              {{ SITE.description }}
            </p>

            <div class="ctaRow">
              <RouterLink class="btn primary" to="/company/contact">
                Request a demo
              </RouterLink>
              <RouterLink class="btn ghost" to="/docs">Read docs</RouterLink>
            </div>

            <div class="miniStats" aria-label="Highlights">
              <div class="stat">
                <div class="statTop">Offline-first</div>
                <div class="statDesc">Local writes always accepted</div>
              </div>
              <div class="stat">
                <div class="statTop">Sync engine</div>
                <div class="statDesc">WAL · Outbox · Retries · Conflicts</div>
              </div>
              <div class="stat">
                <div class="statTop">Cloud optional</div>
                <div class="statDesc">Correctness never depends on it</div>
              </div>
            </div>
          </div>

          <div class="heroRight" aria-label="Softadastra banner">
            <div class="heroFrame">
              <img class="heroImage" :src="heroImg" alt="Softadastra banner" />
            </div>
          </div>
        </div>
      </Container>

      <!-- waves like your visuals -->
      <div class="waves" aria-hidden="true">
        <div class="w w1"></div>
        <div class="w w2"></div>
        <div class="w w3"></div>
      </div>
    </section>

    <!-- EARLY ACCESS -->
    <section class="section">
      <Container>
        <div class="sectionHead">
          <h2>Teams building for reliability</h2>
          <p>
            Softadastra is early. If you’re building local-first or
            offline-first systems, we’d love to talk.
          </p>
        </div>

        <div class="earlyCard">
          <div class="earlyTop">
            <div class="earlyTitle">Early access</div>
            <div class="earlyPill">Foundation draft</div>
          </div>
          <p class="earlyDesc">
            We’re currently working with early adopters and partners.
          </p>
        </div>
      </Container>
    </section>

    <!-- ARCHITECTURE -->
    <section class="section">
      <Container>
        <div class="sectionHead">
          <h2>Architecture at a glance</h2>
          <p>
            Softadastra is organized around a clear architectural center:
            <b>the sync engine</b>.
          </p>
        </div>

        <div class="archGrid">
          <!-- Poster -->
          <div class="archPoster">
            <div class="posterFrame">
              <img
                class="posterImg"
                :src="archImg"
                alt="Softadastra architecture overview"
              />
            </div>
          </div>

          <!-- Text + Layers -->
          <div class="archText">
            <div class="layers">
              <div class="layer app">
                <div class="layerTitle">APP</div>
                <div class="layerDesc">Your product layer</div>
              </div>

              <div class="layer runtime">
                <div class="layerTitle">RUNTIME</div>
                <div class="layerDesc">Local execution environment</div>
              </div>

              <div class="layer sync">
                <div class="layerTitle">SYNC ENGINE</div>
                <div class="layerDesc">WAL · Outbox · Retries · Conflicts</div>
              </div>

              <div class="layer network">
                <div class="layerTitle">NETWORK</div>
                <div class="layerDesc">
                  Secure P2P transport · Routing · Relays
                </div>
              </div>

              <div class="layer edge">
                <div class="layerTitle">EDGE</div>
                <div class="layerDesc">Caching · Store-and-forward nodes</div>
              </div>

              <div class="layer cloud">
                <div class="layerTitle">CLOUD (Optional)</div>
                <div class="layerDesc">Never required for correctness</div>
              </div>
            </div>

            <div class="archActions">
              <RouterLink class="btn ghost" to="/docs/architecture/overview">
                Start: Overview
              </RouterLink>
              <RouterLink class="btn ghost" to="/docs/architecture/sync">
                Sync engine
              </RouterLink>
              <RouterLink class="btn ghost" to="/docs/architecture/network">
                Network
              </RouterLink>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- WHY -->
    <section class="section">
      <Container>
        <div class="whyGrid">
          <div class="whyCard">
            <h3>Why it exists</h3>
            <p>
              The modern web assumes permanent connectivity, low latency, and
              centralized cloud availability. Reality breaks these assumptions.
            </p>
          </div>

          <div class="whyCard">
            <h3>Design premise</h3>
            <p>
              Networks are unreliable. Failures are normal. Local execution is
              mandatory. Softadastra makes resilience the default.
            </p>
          </div>

          <div class="whyCard">
            <h3>Convergence</h3>
            <p>
              Apps continue offline, accept local writes, and converge safely
              once connectivity returns.
            </p>
          </div>
        </div>
      </Container>
    </section>

    <!-- FOOT NOTE -->
    <section class="section foot">
      <Container>
        <div class="footInner">
          <div class="footTitle">Cloud optional. Offline guaranteed.</div>
          <div class="footLinks">
            <RouterLink to="/docs">Docs</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
            <a :href="LINKS.x" target="_blank" rel="noreferrer">X</a>
            <a :href="LINKS.youtube" target="_blank" rel="noreferrer"
              >YouTube</a
            >
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<style scoped>
/* ====== IMPORTANT: palette close to your images ======
   Deep green + sand + orange, with paper-like highlights.
*/
.home {
  min-height: 100%;
  background: radial-gradient(
      1200px 500px at 50% 0%,
      rgba(213, 122, 42, 0.16),
      transparent 60%
    ),
    radial-gradient(
      900px 520px at 15% 20%,
      rgba(255, 240, 210, 0.08),
      transparent 55%
    ),
    radial-gradient(
      1100px 620px at 80% 30%,
      rgba(16, 59, 47, 0.32),
      transparent 60%
    ),
    var(--bg);
}

/* ===== HERO ===== */
.hero {
  position: relative;
  padding: 34px 0 0 0;
  overflow: hidden;
}

.heroGrid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(16px, 3vw, 28px);
  align-items: center;
}

.heroLeft {
  padding: 6px 0 18px 0;
  animation: rise 520ms ease both;
}

.kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(10px);
}

html[data-theme="light"] .kicker {
  border-color: rgba(15, 23, 42, 0.12);
  background: rgba(15, 23, 42, 0.03);
  color: rgba(15, 23, 42, 0.85);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: linear-gradient(180deg, #e7a35a, #d57a2a);
  box-shadow: 0 0 0 3px rgba(213, 122, 42, 0.15);
}

.title {
  margin: 14px 0 0 0;
  font-size: clamp(34px, 4.2vw, 56px);
  line-height: 1.03;
  letter-spacing: -0.6px;
  color: rgba(255, 255, 255, 0.94);
}

html[data-theme="light"] .title {
  color: rgba(15, 23, 42, 0.92);
}

.accent {
  color: #d57a2a;
  text-shadow: 0 10px 30px rgba(213, 122, 42, 0.18);
}

.subtitle {
  margin: 12px 0 0 0;
  max-width: 62ch;
  font-size: 15px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.76);
}

html[data-theme="light"] .subtitle {
  color: rgba(15, 23, 42, 0.72);
}

.ctaRow {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 14px;
  font-weight: 800;
  border: 1px solid transparent;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  transition: transform 140ms ease, background 140ms ease,
    border-color 140ms ease;
}

.btn:active {
  transform: translateY(1px);
}

.btn.primary {
  background: linear-gradient(180deg, #e29a55, #d57a2a);
  color: #151515;
  box-shadow: 0 18px 44px rgba(213, 122, 42, 0.22);
}

.btn.primary:hover {
  box-shadow: 0 22px 54px rgba(213, 122, 42, 0.28);
}

.btn.ghost {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.9);
}

html[data-theme="light"] .btn.ghost {
  background: rgba(15, 23, 42, 0.03);
  border-color: rgba(15, 23, 42, 0.12);
  color: rgba(15, 23, 42, 0.9);
}

.btn.ghost:hover {
  background: rgba(255, 255, 255, 0.09);
}

html[data-theme="light"] .btn.ghost:hover {
  background: rgba(15, 23, 42, 0.06);
}

.btn.icon {
  background: transparent;
  border-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.86);
}

html[data-theme="light"] .btn.icon {
  border-color: rgba(15, 23, 42, 0.14);
  color: rgba(15, 23, 42, 0.82);
}

.btn.icon:hover {
  background: rgba(255, 255, 255, 0.06);
}

.iconDot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.85);
  opacity: 0.55;
}

.miniStats {
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.stat {
  padding: 12px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  animation: fade 520ms ease both;
}

html[data-theme="light"] .stat {
  border-color: rgba(15, 23, 42, 0.12);
  background: rgba(15, 23, 42, 0.03);
}

.statTop {
  font-weight: 900;
  color: rgba(255, 255, 255, 0.92);
  font-size: 13px;
}

html[data-theme="light"] .statTop {
  color: rgba(15, 23, 42, 0.92);
}

.statDesc {
  margin-top: 6px;
  font-size: 12.5px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
}

html[data-theme="light"] .statDesc {
  color: rgba(15, 23, 42, 0.7);
}

.heroRight {
  animation: rise2 620ms ease both;
}

.heroFrame {
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.35);
}

html[data-theme="light"] .heroFrame {
  border-color: rgba(15, 23, 42, 0.12);
  box-shadow: 0 20px 70px rgba(2, 6, 23, 0.12);
}

.heroImage {
  width: 100%;
  height: auto;
  display: block;
  transform: scale(1.01);
}

/* waves like your banner */
.waves {
  position: relative;
  margin-top: 26px;
  height: 120px;
}

.w {
  position: absolute;
  inset: auto 0 0 0;
  height: 120px;
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  filter: blur(0px);
  opacity: 0.95;
}

.w1 {
  background: linear-gradient(
    90deg,
    rgba(16, 59, 47, 0.95),
    rgba(16, 59, 47, 0.7)
  );
  transform: translateY(52px);
}
.w2 {
  background: linear-gradient(
    90deg,
    rgba(213, 122, 42, 0.92),
    rgba(213, 122, 42, 0.55)
  );
  transform: translateY(72px);
}
.w3 {
  background: linear-gradient(
    90deg,
    rgba(11, 43, 34, 1),
    rgba(11, 43, 34, 0.72)
  );
  transform: translateY(92px);
}

/* ===== SECTIONS ===== */
.section {
  padding: 34px 0;
}

.sectionHead {
  display: grid;
  gap: 8px;
  margin-bottom: 14px;
}

.sectionHead h2 {
  margin: 0;
  font-size: 18px;
  letter-spacing: -0.2px;
  color: rgba(255, 255, 255, 0.92);
}

html[data-theme="light"] .sectionHead h2 {
  color: rgba(15, 23, 42, 0.92);
}

.sectionHead p {
  margin: 0;
  max-width: 85ch;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.7;
  font-size: 14px;
}

html[data-theme="light"] .sectionHead p {
  color: rgba(15, 23, 42, 0.72);
}

/* EARLY CARD */
.earlyCard {
  margin-top: 10px;
  border-radius: 22px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: radial-gradient(
      900px 240px at 10% 0%,
      rgba(255, 240, 210, 0.08),
      transparent 55%
    ),
    rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22);
  animation: fade 520ms ease both;
}

html[data-theme="light"] .earlyCard {
  border-color: rgba(15, 23, 42, 0.12);
  background: rgba(15, 23, 42, 0.03);
  box-shadow: 0 18px 60px rgba(2, 6, 23, 0.1);
}

.earlyTop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.earlyTitle {
  font-weight: 950;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.92);
}

html[data-theme="light"] .earlyTitle {
  color: rgba(15, 23, 42, 0.92);
}

.earlyPill {
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.8);
}

html[data-theme="light"] .earlyPill {
  border-color: rgba(15, 23, 42, 0.12);
  background: rgba(15, 23, 42, 0.03);
  color: rgba(15, 23, 42, 0.72);
}

.earlyDesc {
  margin: 10px 0 0 0;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.7;
}

html[data-theme="light"] .earlyDesc {
  color: rgba(15, 23, 42, 0.72);
}

.earlyActions {
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

/* ARCH */
.archGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(14px, 3vw, 22px);
  align-items: start;
}

.posterFrame {
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.35);
}

html[data-theme="light"] .posterFrame {
  border-color: rgba(15, 23, 42, 0.12);
  box-shadow: 0 18px 65px rgba(2, 6, 23, 0.12);
}

.posterImg {
  width: 100%;
  height: auto;
  display: block;
}

.layers {
  display: grid;
  gap: 10px;
  padding: 14px;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

html[data-theme="light"] .layers {
  border-color: rgba(15, 23, 42, 0.12);
  background: rgba(15, 23, 42, 0.03);
}

.layer {
  padding: 12px 14px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.18);
}

html[data-theme="light"] .layer {
  border-color: rgba(15, 23, 42, 0.12);
  background: rgba(255, 255, 255, 0.78);
}

.layerTitle {
  font-weight: 950;
  letter-spacing: 0.3px;
  color: rgba(255, 255, 255, 0.92);
  font-size: 13px;
}

html[data-theme="light"] .layerTitle {
  color: rgba(15, 23, 42, 0.92);
}

.layerDesc {
  margin-top: 4px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.55;
}

html[data-theme="light"] .layerDesc {
  color: rgba(15, 23, 42, 0.7);
}

/* The two key tones from your poster */
.layer.sync {
  border-color: rgba(213, 122, 42, 0.34);
  background: rgba(213, 122, 42, 0.14);
}

.layer.edge {
  border-color: rgba(213, 122, 42, 0.28);
  background: rgba(213, 122, 42, 0.1);
}

.archActions {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

/* WHY GRID */
.whyGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.whyCard {
  border-radius: 22px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

html[data-theme="light"] .whyCard {
  border-color: rgba(15, 23, 42, 0.12);
  background: rgba(15, 23, 42, 0.03);
}

.whyCard h3 {
  margin: 0;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.92);
}

html[data-theme="light"] .whyCard h3 {
  color: rgba(15, 23, 42, 0.92);
}

.whyCard p {
  margin: 8px 0 0 0;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.7;
  font-size: 13.5px;
}

html[data-theme="light"] .whyCard p {
  color: rgba(15, 23, 42, 0.72);
}

/* FOOT */
.foot {
  padding-bottom: 50px;
}
.footInner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

html[data-theme="light"] .footInner {
  border-color: rgba(15, 23, 42, 0.12);
  background: rgba(15, 23, 42, 0.03);
}

.footTitle {
  font-weight: 950;
  color: rgba(255, 255, 255, 0.92);
}

html[data-theme="light"] .footTitle {
  color: rgba(15, 23, 42, 0.92);
}

.footLinks {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.footLinks a {
  color: rgba(255, 255, 255, 0.75);
}
html[data-theme="light"] .footLinks a {
  color: rgba(15, 23, 42, 0.7);
}
.footLinks a:hover {
  text-decoration: underline;
  color: #d57a2a;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 980px) {
  .heroGrid {
    grid-template-columns: 1fr;
  }
  .heroRight {
    order: -1;
  }
  .miniStats {
    grid-template-columns: 1fr;
  }
  .archGrid {
    grid-template-columns: 1fr;
  }
  .whyGrid {
    grid-template-columns: 1fr;
  }
  .footInner {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* ===== ANIMS ===== */
@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes rise2 {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

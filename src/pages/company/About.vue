<script setup>
import SitePage from "../../components/layout/SitePage.vue";
import { LINKS } from "../../app/config.js";
</script>

<template>
  <SitePage
    kicker="Company"
    title="About"
    description="Softadastra is a foundational runtime for systems that must remain correct when networks fail."
  >
    <main class="aboutDoc">
      <!-- Minimal animated hero -->
      <section class="heroMini" aria-label="Softadastra animation">
        <div class="heroMiniInner">
          <div class="heroTitle">
            <div class="heroEyebrow">Softadastra</div>
            <h1>Make the web work everywhere.</h1>
            <p>
              We build a foundational web runtime designed for the real world:
              intermittent connectivity, offline periods, constrained devices,
              edge deployments, and environments where the cloud cannot be a
              single point of truth.
            </p>
            <p>
              Our premise is strict: <b>local execution is mandatory</b>, <b>durable
              intent comes first</b>, and <b>systems must converge safely</b> when
              connectivity returns.
            </p>
          </div>

          <div class="heroAnim" aria-hidden="true">
            <div class="lane">
              <div class="wifi">
                <span class="arc a1"></span>
                <span class="arc a2"></span>
                <span class="arc a3"></span>
                <span class="dot"></span>
              </div>

              <div class="offlineTag">
                <span class="oDot"></span>
                <span>OFFLINE</span>
              </div>

              <div class="robots">
                <div class="bot b1">
                  <span class="face"></span>
                </div>
                <div class="bot b2">
                  <span class="face"></span>
                </div>
                <div class="bot b3">
                  <span class="face"></span>
                </div>
              </div>

              <div class="trail t1"></div>
              <div class="trail t2"></div>
            </div>
          </div>
        </div>

        <div class="heroLinks">
          <RouterLink class="link" to="/docs">Read docs →</RouterLink>
          <RouterLink class="link" to="/customers">Customers →</RouterLink>
          <RouterLink class="link" to="/contact">Contact →</RouterLink>
        </div>
      </section>

      <!-- Mission -->
      <section class="docSection">
        <h2>Mission</h2>
        <p>
          Softadastra exists to rebuild the web so it remains usable and correct
          under non-ideal conditions. Modern systems often assume permanent
          connectivity and centralized cloud availability. In production, those
          assumptions routinely break.
        </p>
        <p>
          Our mission is to make resilience a default property of the runtime:
          <b>offline-first behavior</b>, <b>local-first correctness</b>, and
          <b>safe convergence</b>—without requiring a cloud service for
          correctness.
        </p>
      </section>

      <!-- Problem -->
      <section class="docSection">
        <h2>The problem we solve</h2>
        <p>
          When connectivity fails, most systems either reject writes, degrade
          into fragile “best effort” modes, or rely on ad-hoc retries that
          amplify outages. The result is predictable:
          retry storms, inconsistent state, manual conflict cleanup, and lost
          trust from users.
        </p>
        <p>
          These are not edge cases. They are normal operating conditions for
          global software—especially across mobile networks, edge deployments,
          multi-region environments, and any scenario where latency and
          availability are not guaranteed.
        </p>
      </section>

      <!-- Approach -->
      <section class="docSection">
        <h2>How Softadastra works</h2>
        <p>
          Softadastra is organized around a clear architectural center:
          <b>the synchronization engine</b>.
        </p>

        <ul>
          <li>
            <b>Durable intent (WAL)</b> : every meaningful action is recorded
            locally so progress is never lost.
          </li>
          <li>
            <b>Outbox delivery</b> : changes are queued, replayed, and delivered
            with predictable guarantees.
          </li>
          <li>
            <b>Retry by design</b> : retries are explicit, observable, and
            designed for unstable networks (not optimistic assumptions).
          </li>
          <li>
            <b>Conflict handling</b> : convergence is a first-class primitive,
            not a post-incident cleanup task.
          </li>
          <li>
            <b>Secure networking</b> : peer-to-peer transport, routing, relays,
            and edge nodes for store-and-forward and caching.
          </li>
        </ul>

        <p>
          The goal is straightforward: applications continue offline, accept
          local writes immediately, and converge safely later. The cloud can
          accelerate synchronization and reach, but it must never be required
          for correctness.
        </p>
      </section>

      <!-- What this means for enterprises -->
      <section class="docSection">
        <h2>What enterprises gain</h2>
        <p>
          Softadastra is built for teams that cannot afford “works most of the
          time.” It provides a foundation to ship systems that remain predictable
          under sustained concurrency and real-world failure modes.
        </p>

        <ul>
          <li>
            <b>Reliability without heroics</b> : resilience is architectural, not
            a late-stage patchwork of retries and incident runbooks.
          </li>
          <li>
            <b>Correctness under failure</b> : durable local writes and explicit
            synchronization semantics reduce data loss and surprise states.
          </li>
          <li>
            <b>Portability across environments</b> : consistent runtime behavior
            across cloud, on-prem, and constrained edge deployments.
          </li>
          <li>
            <b>Operational clarity</b> : explicit state transitions, replayable
            logs, and observable delivery pipelines.
          </li>
        </ul>
      </section>

      <!-- Origin -->
      <section class="docSection">
        <h2>Why we started</h2>
        <p>
          Softadastra began from a simple observation: the web has grown
          powerful, but its foundations still assume ideal conditions. As systems
          expand across regions, devices, and networks, those assumptions become
          liabilities.
        </p>
        <p>
          We are building Softadastra as a long-term foundation effort—optimized
          for correctness under failure, architectural coherence, and predictable
          behavior in production.
        </p>
      </section>

      <!-- Long-term vision -->
      <section class="visionSection">
        <div class="visionGrid">
          <div class="visionText">
            <div class="visionKicker">
              <span class="visionDot" aria-hidden="true"></span>
              <span>LONG-TERM VISION</span>
            </div>

            <h2>A foundation that outlives trends</h2>

            <p class="visionLead">
              Softadastra is designed as a multi-year foundation effort. We are
              not building a single product—we are building primitives that
              enable entire categories of resilient systems.
            </p>

            <p>
              The measure of success is not a demo. It is software that remains
              correct after crashes, restarts, long disconnections, and changing
              environments—software that users can trust.
            </p>

            <p>
              We collaborate with teams who care about deep infrastructure:
              engineers and partners building systems that must operate
              everywhere, not only in ideal cloud conditions.
            </p>

            <p class="visionFoot">
              Foundation first. Correctness under failure. Safe convergence.
            </p>
          </div>

          <div class="visionPhoto">
            <img
              src="/leadership/gaspard.jpeg"
              alt="Gaspard Kirira — Founder & CEO of Softadastra"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <!-- Work with us -->
      <section class="docSection">
        <h2>Work with us</h2>
        <p>
          If your systems operate across unreliable networks, edge environments,
          or latency-sensitive workloads and you want a foundation that stays
          predictable under real conditions we should talk.
        </p>

        <div class="ctaRow">
          <RouterLink class="btn" to="/contact">Request a demo</RouterLink>
          <RouterLink class="btn ghost" to="/docs">Read docs</RouterLink>
        </div>
      </section>
    </main>
  </SitePage>
</template>


<style scoped>
/* ======================================================
   Minimal "document" style (like your screenshot)
====================================================== */
.aboutDoc {
  max-width: 860px;
  margin: 0 auto;
  padding: 40px 18px 70px;
  color: var(--text);
}

/* Keep it very simple */
.docSection {
  margin-top: 34px;
}
.docSection h2 {
  margin: 0 0 10px 0;
  font-size: 26px;
  letter-spacing: -0.2px;
}
.docSection p {
  margin: 0 0 14px 0;
  font-size: 16px;
  line-height: 1.85;
  color: var(--text);
  opacity: 0.92;
}
.docSection ul {
  margin: 10px 0 14px 18px;
  padding: 0;
}
.docSection li {
  margin: 8px 0;
  line-height: 1.7;
  color: var(--text);
  opacity: 0.92;
}

/* Links row under hero */
.heroLinks {
  margin-top: 14px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.link {
  text-decoration: none;
  color: rgba(125, 125, 125, 0.95);
  font-weight: 700;
}
.link:hover {
  color: var(--sa-orange);
  text-decoration: underline;
}

/* CTA buttons (minimal) */
.ctaRow {
  margin-top: 14px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  border-radius: 12px;
  font-weight: 900;
  border: 1px solid var(--border);
  background: var(--sa-orange);
  color: #111;
  text-decoration: none;
}
.btn.ghost {
  background: transparent;
  color: var(--text);
}

/* ======================================================
   Minimal animated hero (robots -> offline)
====================================================== */
.heroMini {
  padding-bottom: 18px;
  border-bottom: 1px solid var(--border);
}
.heroMiniInner {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 18px;
  align-items: start;
}
.heroEyebrow {
  font-weight: 900;
  letter-spacing: 0.2px;
  color: rgba(120, 120, 120, 0.95);
  margin-bottom: 6px;
}
.heroTitle h1 {
  margin: 0;
  font-size: 44px;
  line-height: 1.05;
  letter-spacing: -0.6px;
}
.heroTitle p {
  margin: 12px 0 0 0;
  font-size: 16px;
  line-height: 1.85;
  color: rgba(120, 120, 120, 0.95);
}

/* Animation container */
.heroAnim {
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 14px;
  background: rgba(255, 255, 255, 0.02);
  overflow: hidden;
}
html[data-theme="light"] .heroAnim {
  background: rgba(15, 23, 42, 0.02);
}

.lane {
  position: relative;
  height: 150px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.03),
    rgba(255, 255, 255, 0.01)
  );
  overflow: hidden;
}

/* WiFi symbol that fades out */
.wifi {
  position: absolute;
  left: 16px;
  top: 16px;
  width: 54px;
  height: 54px;
  opacity: 0.85;
  animation: wifiFade 2.6s infinite ease-in-out;
}
.arc {
  position: absolute;
  left: 50%;
  top: 50%;
  border: 2px solid rgba(120, 120, 120, 0.85);
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-radius: 999px;
  transform: translate(-50%, -50%);
}
.a1 {
  width: 18px;
  height: 18px;
}
.a2 {
  width: 32px;
  height: 32px;
}
.a3 {
  width: 46px;
  height: 46px;
}
.wifi .dot {
  position: absolute;
  left: 50%;
  top: 56%;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(120, 120, 120, 0.85);
  transform: translate(-50%, -50%);
}

/* Offline tag */
.offlineTag {
  position: absolute;
  right: 12px;
  top: 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  font-weight: 950;
  font-size: 12px;
  letter-spacing: 0.5px;
  background: rgba(255, 255, 255, 0.03);
}
.oDot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--sa-orange);
  box-shadow: 0 0 0 3px rgba(213, 122, 42, 0.12);
}

/* Robots moving to the right */
.robots {
  position: absolute;
  left: 10px;
  bottom: 18px;
  height: 50px;
  width: 100%;
}
.bot {
  position: absolute;
  bottom: 0;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: rgba(120, 120, 120, 0.1);
  animation: walk 2.6s infinite ease-in-out;
}
.bot .face {
  position: absolute;
  inset: 8px;
  border-radius: 8px;
  border: 1px solid rgba(120, 120, 120, 0.35);
}
.b1 {
  left: 6px;
  animation-delay: 0s;
}
.b2 {
  left: 46px;
  animation-delay: 0.2s;
  opacity: 0.9;
}
.b3 {
  left: 86px;
  animation-delay: 0.4s;
  opacity: 0.85;
}

/* Trails (subtle) */
.trail {
  position: absolute;
  left: 0;
  bottom: 24px;
  height: 2px;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(213, 122, 42, 0),
    rgba(213, 122, 42, 0.25),
    rgba(213, 122, 42, 0)
  );
  opacity: 0.7;
}
.t1 {
  animation: trail 2.6s infinite ease-in-out;
}
.t2 {
  bottom: 14px;
  opacity: 0.45;
  animation: trail 2.6s infinite ease-in-out 0.2s;
}

/* Keyframes */
@keyframes walk {
  0% {
    transform: translateX(0px);
    opacity: 0.75;
  }
  35% {
    transform: translateX(90px);
    opacity: 0.95;
  }
  60% {
    transform: translateX(165px);
    opacity: 1;
  }
  100% {
    transform: translateX(260px);
    opacity: 0.85;
  }
}

@keyframes wifiFade {
  0%,
  30% {
    opacity: 0.95;
    filter: grayscale(0);
  }
  60% {
    opacity: 0.25;
    filter: grayscale(1);
  }
  100% {
    opacity: 0.95;
    filter: grayscale(0);
  }
}

@keyframes trail {
  0% {
    transform: translateX(-30%);
    opacity: 0.1;
  }
  50% {
    transform: translateX(0%);
    opacity: 0.7;
  }
  100% {
    transform: translateX(30%);
    opacity: 0.1;
  }
}

.docSection {
  max-width: 980px;
  margin: 0 auto;
  padding: 22px 0 6px;
}

.docSection h2 {
  margin: 0 0 10px;
  font-size: 22px;
  letter-spacing: -0.2px;
  color: var(--text);
}

.docSection > p {
  margin: 0 0 18px;
  max-width: 72ch;
  color: var(--text-muted);
  line-height: 1.7;
}

/* ============================
   Vision – long-term company
============================ */

.visionSection {
  padding: 28px 0 10px;
}

.visionGrid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 22px;
  align-items: center;
}

.visionKicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 900;
  letter-spacing: 0.06em;
  font-size: 12px;
  color: var(--text-muted);
  text-transform: uppercase;
  margin-bottom: 6px;
}

.visionDot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--sa-orange);
  box-shadow: 0 0 0 4px rgba(213, 122, 42, 0.12);
}

.visionText h2 {
  margin: 6px 0 10px;
  font-size: 20px;
  font-weight: 900;
  color: var(--text);
}

.visionLead {
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 8px;
}

.visionText p {
  margin: 8px 0;
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-muted);
}

.visionFoot {
  margin-top: 12px;
  font-weight: 700;
  color: var(--text);
}

/* Photo */
.visionPhoto {
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(15, 23, 42, 0.04);
  border: 1px solid rgba(15, 23, 42, 0.1);
}

html[data-theme="dark"] .visionPhoto {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.1);
}

.visionPhoto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Responsive */
@media (max-width: 980px) {
  .visionGrid {
    grid-template-columns: 1fr;
  }
  .visionPhoto {
    aspect-ratio: 16 / 9;
  }
}

/* Responsive */
@media (max-width: 980px) {
  .leaderGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 520px) {
  .leaderGrid {
    grid-template-columns: 1fr;
  }
  .leaderPhoto {
    aspect-ratio: 16 / 9;
  }
}

/* Responsive */
@media (max-width: 980px) {
  .leaderCard {
    grid-column: span 6;
  }
}

@media (max-width: 640px) {
  .docSection {
    padding-top: 16px;
  }
  .leaderCard {
    grid-column: span 12;
  }
  .leaderLinks {
    gap: 8px;
  }
}

/* Responsive: single column */
@media (max-width: 900px) {
  .heroMiniInner {
    grid-template-columns: 1fr;
  }
  .heroTitle h1 {
    font-size: 36px;
  }
}
</style>

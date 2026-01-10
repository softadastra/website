<script setup>
import SitePage from "../../components/layout/SitePage.vue";
</script>

<template>
  <SitePage kicker="Company" title="Culture" description="What we believe.">
    <main class="cultureDoc">
      <!-- INTRO -->
      <section class="docSection">
        <h2>Culture, by design</h2>
        <p class="lead">
          Softadastra is built around one idea: the real world is unreliable —
          networks fail, devices sleep, and assumptions break. Our culture is
          the way we keep building anyway: with correctness, resilience, and
          calm execution.
        </p>
      </section>

      <!-- PRINCIPLES -->
      <section class="docSection">
        <h2>Principles</h2>

        <div class="principles">
          <article class="p">
            <div class="pTitle">Correctness first</div>
            <p class="pText">
              Reliability is a feature, not a “later” task. If it’s not correct
              under failure, it’s not done.
            </p>
          </article>

          <article class="p">
            <div class="pTitle">Offline-first is the premise</div>
            <p class="pText">
              We don’t treat offline as an edge case. Local writes should be
              accepted. Sync is how systems converge — not how they function.
            </p>
          </article>

          <article class="p">
            <div class="pTitle">Simple APIs, hard to misuse</div>
            <p class="pText">
              We prefer designs that reduce foot-guns. If the “wrong” usage is
              easy, we haven’t finished the API.
            </p>
          </article>

          <article class="p">
            <div class="pTitle">Measure reality</div>
            <p class="pText">
              Benchmarks, tests, and production behavior matter more than
              opinions. We validate with experiments.
            </p>
          </article>

          <article class="p">
            <div class="pTitle">Engineering taste</div>
            <p class="pText">
              Clean architecture, clear naming, and boring reliability. We ship
              systems that are easy to reason about.
            </p>
          </article>

          <article class="p">
            <div class="pTitle">Long-term thinking</div>
            <p class="pText">
              We avoid hype-driven choices that increase future complexity. We
              build foundations meant to last years.
            </p>
          </article>
        </div>
      </section>

      <!-- HOW WE WORK -->
      <section class="docSection">
        <h2>How we work</h2>
        <ul class="list">
          <li>
            <b>Write it down:</b> decisions live in docs (tradeoffs, risks,
            constraints).
          </li>
          <li>
            <b>Small steps:</b> ship in thin slices; keep feedback loops short.
          </li>
          <li>
            <b>Failure-friendly:</b> design for timeouts, retries, backpressure,
            and reconnection.
          </li>
          <li>
            <b>Ownership:</b> whoever touches a module owns its reliability.
          </li>
          <li>
            <b>No ego:</b> ideas win, not titles. We’re allergic to unnecessary
            complexity.
          </li>
        </ul>
      </section>

      <!-- WHAT WE VALUE IN PEOPLE -->
      <section class="docSection">
        <h2>What we value in people</h2>
        <p>
          We love engineers who can be both precise and pragmatic — who care
          about correctness, can reason under constraints, and can keep systems
          simple.
        </p>
        <ul class="list">
          <li><b>Clarity:</b> communicate tradeoffs and write useful docs.</li>
          <li>
            <b>Judgment:</b> choose simple solutions; avoid fragile hacks.
          </li>
          <li>
            <b>Discipline:</b> tests, benchmarks, and regression prevention.
          </li>
          <li><b>Bias to shipping:</b> deliver small, real improvements.</li>
        </ul>
      </section>

      <!-- CTA -->
      <section class="docSection">
        <h2>Work with us</h2>
        <p>
          If these values resonate, the best way to start is to collaborate on a
          real piece of the system.
        </p>
        <div class="ctaRow">
          <RouterLink class="btn primary" to="/careers">
            View open roles
          </RouterLink>
          <RouterLink class="btn ghost" to="/contact"> Contact </RouterLink>
          <RouterLink class="btn ghost" to="/docs">Read docs</RouterLink>
        </div>
      </section>
    </main>
  </SitePage>
</template>

<style scoped>
/* Same minimal doc style as About/Careers */
.cultureDoc {
  max-width: 860px;
  margin: 0 auto;
  padding: 40px 18px 70px;
  color: var(--text);
}

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

.lead {
  font-size: 16px;
  line-height: 1.85;
  color: var(--text);
  opacity: 0.92;
}

/* Principles grid: minimal, readable */
.principles {
  margin-top: 10px;
  display: grid;
  gap: 12px;
}

.p {
  padding: 14px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
}

html[data-theme="light"] .p {
  background: rgba(15, 23, 42, 0.02);
}

.pTitle {
  font-weight: 950;
  font-size: 15px;
  margin-bottom: 6px;
}

.pText {
  margin: 0;
  font-size: 15px;
  line-height: 1.75;
  opacity: 0.9;
}

/* Lists */
.list {
  margin: 10px 0 0 18px;
  padding: 0;
}

.list li {
  margin: 8px 0;
  line-height: 1.7;
  color: var(--text);
  opacity: 0.92;
}

/* CTA */
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
  text-decoration: none;
  user-select: none;
}

.btn.primary {
  background: var(--sa-orange);
  color: #111;
  border-color: transparent;
}

.btn.ghost {
  background: transparent;
  color: var(--text);
}
</style>

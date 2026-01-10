<script setup>
import SitePage from "../../components/layout/SitePage.vue";
import { LINKS } from "../../app/config.js";

const roles = [
  {
    title: "Founding Engineer — C++ Systems",
    type: "Founding / Core",
    location: "Remote",
    commitment: "Part-time → Full-time",
    tags: ["C++20/23", "Networking", "Performance", "Offline-first"],
    intro:
      "Work on the runtime foundations: sync engine primitives, transport, storage reliability, and performance.",
    youWill: [
      "Build and refine core runtime modules (sync / WAL / outbox / retries)",
      "Improve reliability under unstable networks (timeouts, backpressure, reconnection)",
      "Write clean benchmarks + tests (correctness first, speed second)",
      "Design APIs that are simple and hard to misuse",
    ],
    nice: [
      "Distributed systems basics (eventual consistency, conflict handling)",
      "CMake, CI, packaging, or perf profiling experience",
      "Security basics (encryption, key management, threat modeling)",
    ],
  },
  {
    title: "Founding Engineer — Web / Frontend",
    type: "Founding / Product",
    location: "Remote",
    commitment: "Part-time",
    tags: ["Vue", "UX polish", "Docs", "Product UI"],
    intro:
      "Help ship the website/docs and product surfaces with crisp UX and fast iterations.",
    youWill: [
      "Build clean marketing + docs pages (Vue)",
      "Create simple interactive demos (offline-first concepts)",
      "Polish UX details (perf, accessibility, mobile)",
    ],
    nice: ["Design taste, motion/animation basics", "Writing good docs"],
  },
];

const mailto = () => {
  const email = "softadastra@gmail.com";
  const subject = encodeURIComponent("Softadastra — Careers");
  const body = encodeURIComponent(
    [
      "Hi Softadastra,",
      "",
      "I’m interested in collaborating on Softadastra.",
      "",
      "Role I’m interested in:",
      "-",
      "",
      "Links:",
      "- GitHub:",
      "- LinkedIn (optional):",
      "- Portfolio (optional):",
      "",
      "A few lines about me:",
      "-",
      "",
      "Timezone / availability:",
      "-",
      "",
      "Thanks!",
    ].join("\n")
  );
  return `mailto:${email}?subject=${subject}&body=${body}`;
};
</script>

<template>
  <SitePage
    kicker="Company"
    title="Careers"
    description="Build the web runtime that works everywhere."
  >
    <main class="careersPage">
      <section class="docSection">
        <h2>Hiring status</h2>
        <p class="lead">
          Softadastra is early-stage. We’re actively looking for contributors
          and founding engineers who want to build long-term infrastructure.
        </p>

        <div class="note">
          <div class="noteTitle">Compensation (honest)</div>
          <p class="noteText">
            We are not running a large payroll yet. Initial collaboration is
            contributor-first (equity / future paid work once funding lands). If
            you’re comfortable building early with clear ownership and real
            technical work, we’d love to talk.
          </p>
        </div>

        <div class="ctaRow">
          <a class="btn primary" :href="mailto()">Email to apply</a>
          <a class="btn ghost" :href="LINKS.x" target="_blank" rel="noreferrer">
            X
          </a>
        </div>
      </section>

      <section class="docSection">
        <h2>What we value</h2>
        <div class="valuesGrid">
          <div class="valueCard">
            <div class="valueTitle">Correctness first</div>
            <p class="valueText">
              We ship systems that remain correct under failure.
            </p>
          </div>
          <div class="valueCard">
            <div class="valueTitle">Resilience by default</div>
            <p class="valueText">
              Offline-first isn’t a feature — it’s the premise.
            </p>
          </div>
          <div class="valueCard">
            <div class="valueTitle">Engineering taste</div>
            <p class="valueText">
              Simple APIs, clean architecture, measurable behavior.
            </p>
          </div>
        </div>
      </section>

      <section class="docSection">
        <h2>Open roles</h2>

        <div class="rolesGrid">
          <article v-for="r in roles" :key="r.title" class="roleCard">
            <div class="roleTop">
              <div>
                <div class="roleTitle">{{ r.title }}</div>
                <div class="roleMeta">
                  <span class="pill">{{ r.type }}</span>
                  <span class="pill">{{ r.location }}</span>
                  <span class="pill">{{ r.commitment }}</span>
                </div>
              </div>

              <a class="roleApply" :href="mailto()">Apply →</a>
            </div>

            <p class="roleIntro">{{ r.intro }}</p>

            <div class="tagRow">
              <span v-for="t in r.tags" :key="t" class="tag">{{ t }}</span>
            </div>

            <div class="roleCols">
              <div class="col">
                <div class="colTitle">You will</div>
                <ul class="list">
                  <li v-for="x in r.youWill" :key="x">{{ x }}</li>
                </ul>
              </div>

              <div class="col">
                <div class="colTitle">Nice to have</div>
                <ul class="list">
                  <li v-for="x in r.nice" :key="x">{{ x }}</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="docSection">
        <h2>How to apply</h2>
        <ol class="steps">
          <li>Send an email with links (GitHub is enough).</li>
          <li>Tell us your availability + timezone.</li>
          <li>We’ll reply with a small, real technical task (not a puzzle).</li>
        </ol>

        <div class="finalBox">
          <div class="finalTitle">Prefer async?</div>
          <p class="finalText">
            You can also open an issue / discussion on GitHub and introduce
            yourself. If your work matches the direction, we’ll propose
            ownership on a module.
          </p>
        </div>
      </section>
    </main>
  </SitePage>
</template>
<style scoped>
.careersPage {
  max-width: 860px;
  margin: 0 auto;
  padding: 40px 18px 70px;
  color: var(--text);
}

/* Sections */
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

/* ======================================================
   Simple note box (honest compensation)
====================================================== */
.note {
  margin-top: 14px;
  padding: 14px 14px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
}

html[data-theme="light"] .note {
  background: rgba(15, 23, 42, 0.02);
}

.noteTitle {
  font-weight: 950;
  margin-bottom: 6px;
  font-size: 14px;
}

.noteText {
  margin: 0;
  font-size: 15px;
  line-height: 1.75;
  color: var(--text);
  opacity: 0.9;
}

/* ======================================================
   Minimal buttons (same spirit as About.vue)
====================================================== */
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

/* ======================================================
   Values: keep it simple (not too "home page")
====================================================== */
.valuesGrid {
  margin-top: 10px;
  display: grid;
  gap: 12px;
}

.valueCard {
  padding: 14px 14px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
}

html[data-theme="light"] .valueCard {
  background: rgba(15, 23, 42, 0.02);
}

.valueTitle {
  font-weight: 950;
  margin-bottom: 6px;
  font-size: 15px;
}

.valueText {
  margin: 0;
  font-size: 15px;
  line-height: 1.75;
  color: var(--text);
  opacity: 0.9;
}

/* ======================================================
   Roles: very readable + minimal
====================================================== */
.rolesGrid {
  margin-top: 10px;
  display: grid;
  gap: 16px;
}

.roleCard {
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 14px;
  background: rgba(255, 255, 255, 0.02);
}

html[data-theme="light"] .roleCard {
  background: rgba(15, 23, 42, 0.02);
}

.roleTop {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.roleTitle {
  font-weight: 950;
  font-size: 16px;
  margin-bottom: 8px;
}

.roleMeta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.pill {
  border: 1px solid var(--border);
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
  color: var(--text);
  opacity: 0.85;
}

.roleApply {
  text-decoration: none;
  font-weight: 900;
  color: rgba(125, 125, 125, 0.95);
}

.roleApply:hover {
  color: var(--sa-orange);
  text-decoration: underline;
}

.roleIntro {
  margin-top: 12px;
  font-size: 15px;
  line-height: 1.75;
  color: var(--text);
  opacity: 0.9;
}

/* tags */
.tagRow {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  font-size: 12px;
  font-weight: 800;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--text);
  opacity: 0.85;
}

/* columns */
.roleCols {
  margin-top: 14px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.colTitle {
  font-weight: 950;
  font-size: 13px;
  margin-bottom: 8px;
  opacity: 0.9;
}

.list {
  margin: 0;
  padding-left: 18px;
}

.list li {
  margin: 8px 0;
  line-height: 1.7;
  color: var(--text);
  opacity: 0.9;
}

/* ======================================================
   Steps + final box
====================================================== */
.steps {
  margin: 10px 0 0 18px;
}

.steps li {
  margin: 8px 0;
  line-height: 1.7;
  opacity: 0.92;
}

.finalBox {
  margin-top: 14px;
  padding: 14px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
}

html[data-theme="light"] .finalBox {
  background: rgba(15, 23, 42, 0.02);
}

.finalTitle {
  font-weight: 950;
  margin-bottom: 6px;
}

.finalText {
  margin: 0 0 12px 0;
  font-size: 15px;
  line-height: 1.75;
  opacity: 0.9;
}

/* ======================================================
   Responsive
====================================================== */
@media (max-width: 900px) {
  .roleCols {
    grid-template-columns: 1fr;
  }
}
</style>

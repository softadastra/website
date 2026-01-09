<script setup>
import SitePage from "../../components/layout/SitePage.vue";
import { LINKS } from "../../app/config.js";

const email = "gaspardkirira9@gmail.com";

const mailto = () => {
  const subject = encodeURIComponent("Softadastra — Contact");
  const body = encodeURIComponent(
    [
      "Hi Gaspard,",
      "",
      "I’d like to get in touch about Softadastra.",
      "",
      "Context:",
      "- Who I am / company:",
      "- What I’m building:",
      "- Why I’m reaching out:",
      "",
      "Thanks,",
    ].join("\n")
  );
  return `mailto:${email}?subject=${subject}&body=${body}`;
};
</script>

<template>
  <SitePage
    kicker="Company"
    title="Contact"
    description="Get in touch with the founder."
  >
    <main class="contactDoc">
      <!-- Intro -->
      <section class="docSection">
        <h2>Get in touch</h2>
        <p class="lead">
          Softadastra is early and founder-led. The best way to reach us is
          directly.
        </p>
        <p>
          Whether you’re interested in the architecture, collaboration,
          partnerships, or just want to discuss offline-first systems — feel
          free to reach out.
        </p>
      </section>

      <!-- Contact methods -->
      <section class="docSection">
        <h2>Contact</h2>

        <ul class="contactList">
          <li>
            <b>Email</b><br />
            <a :href="mailto()">{{ email }}</a>
          </li>

          <li>
            <b>GitHub</b><br />
            <a :href="LINKS.github" target="_blank" rel="noreferrer">
              {{ LINKS.github }}
            </a>
          </li>

          <li>
            <b>X / Twitter</b><br />
            <a :href="LINKS.x" target="_blank" rel="noreferrer">
              {{ LINKS.x }}
            </a>
          </li>
        </ul>
      </section>

      <!-- What to reach out about -->
      <section class="docSection">
        <h2>What to reach out about</h2>
        <ul class="list">
          <li>Offline-first / local-first architecture</li>
          <li>Sync engines, WAL, reliability under failure</li>
          <li>Early partnerships or technical collaboration</li>
          <li>Founding engineer discussions</li>
          <li>Feedback on Softadastra’s direction</li>
        </ul>
      </section>

      <!-- CTA -->
      <section class="docSection">
        <h2>Next steps</h2>
        <p>
          A short, thoughtful message is more than enough. If there’s a fit,
          we’ll continue the conversation asynchronously.
        </p>

        <div class="ctaRow">
          <a class="btn primary" :href="mailto()">Send an email</a>
          <a
            class="btn ghost"
            :href="LINKS.github"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  </SitePage>
</template>

<style scoped>
/* ======================================================
   Same minimal doc style as About / Careers / Culture
====================================================== */

.contactDoc {
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

/* Contact list */
.contactList {
  margin: 10px 0 0 0;
  padding: 0;
  list-style: none;
}

.contactList li {
  margin: 14px 0;
  line-height: 1.7;
}

.contactList a {
  text-decoration: none;
  font-weight: 700;
  color: rgba(125, 125, 125, 0.95);
}

.contactList a:hover {
  color: var(--sa-orange);
  text-decoration: underline;
}

/* Lists */
.list {
  margin: 10px 0 0 18px;
}

.list li {
  margin: 8px 0;
  line-height: 1.7;
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

<script setup>
import Container from "../ui/Container.vue";
import { LINKS } from "../../app/config.js";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <Container>
      <div class="top">
        <!-- Brand -->
        <div class="brandCol">
          <div class="brandRow">
            <div class="brand">Softadastra</div>
            <span class="status">Early access</span>
          </div>

          <p class="desc">
            Offline-first · Local-first · Resilient web runtime foundations.
            Built to stay correct under real-world conditions.
          </p>

          <div class="meta">
            <span>© {{ year }} Softadastra</span>
            <span class="dot">•</span>
            <span>Apache-2.0</span>
          </div>
        </div>

        <!-- Links -->
        <nav class="linksCol" aria-label="Footer">
          <div class="col">
            <div class="colTitle">Product</div>
            <a class="link" href="/docs">Docs</a>
            <a class="link" href="/docs/architecture/overview">Architecture</a>
            <a class="link" href="/customers">Customers</a>
          </div>

          <div class="col">
            <div class="colTitle">Company</div>
            <a class="link" href="/company/about">About</a>
            <a class="link" href="/company/careers">Careers</a>
            <a class="link" href="/company/contact">Contact</a>
          </div>

          <div class="col">
            <div class="colTitle">Community</div>
            <a
              class="link"
              :href="LINKS.github"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a class="link" :href="LINKS.x" target="_blank" rel="noreferrer"
              >X</a
            >
            <a
              class="link"
              :href="LINKS.youtube"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
          </div>
        </nav>
      </div>

      <!-- Bottom -->
      <div class="bottom">
        <span class="muted">Cloud optional. Offline guaranteed.</span>
        <a class="cta" href="/company/contact">Request a demo →</a>
      </div>
    </Container>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 34px 0 18px;
  background: var(--bg);
}

/* ===== TOP ===== */
.top {
  display: grid;
  grid-template-columns: minmax(0, 520px) minmax(0, 1fr);
  gap: 32px;
  align-items: start;
}

/* Brand */
.brandCol {
  min-width: 0;
}

.brandRow {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.brand {
  font-weight: 950;
  letter-spacing: 0.2px;
  font-size: 14px;
  color: var(--text);
}

.status {
  font-size: 12px;
  font-weight: 900;
  padding: 5px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.02);
}
html[data-theme="light"] .status {
  background: rgba(15, 23, 42, 0.02);
}

.desc {
  margin: 10px 0 12px;
  font-size: 13px;
  line-height: 1.7;
  color: var(--text-muted);
  max-width: 64ch;
}

.meta {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--muted);
}
.dot {
  opacity: 0.65;
}

/* Links area */
.linksCol {
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 22px;
  padding-left: 22px;
  border-left: 1px solid var(--border);
}

.col {
  min-width: 0;
}

.colTitle {
  font-size: 12px;
  font-weight: 950;
  letter-spacing: 0.08em;
  color: var(--text);
  text-transform: uppercase;
  margin-bottom: 10px;
}

.link {
  display: block;
  font-size: 13px;
  color: var(--text-muted);
  text-decoration: none;
  padding: 6px 0;
  line-height: 1.35;
  overflow-wrap: anywhere;
}

.link:hover {
  color: var(--sa-orange);
  text-decoration: underline;
}

/* ===== BOTTOM ===== */
.bottom {
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.muted {
  font-size: 12px;
  color: var(--muted);
}

/* CTA (pro + stable sizing) */
.cta {
  font-size: 12px;
  font-weight: 900;
  color: var(--text);
  text-decoration: none;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
  white-space: nowrap;
}
html[data-theme="light"] .cta {
  background: rgba(15, 23, 42, 0.02);
}
.cta:hover {
  border-color: rgba(213, 122, 42, 0.35);
  color: var(--sa-orange);
}

/* ===== RESPONSIVE ===== */
/* Passe en 1 colonne plus tôt, et supprime le border-left */
@media (max-width: 920px) {
  .top {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .linksCol {
    border-left: 0;
    padding-left: 0;
    padding-top: 14px;
    border-top: 1px solid var(--border);
  }
}

/* Compact grid for small phones */
@media (max-width: 520px) {
  .linksCol {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }
}

/* Ultra small: stack into 1 column, CTA full width */
@media (max-width: 380px) {
  .linksCol {
    grid-template-columns: 1fr;
  }

  .bottom {
    flex-direction: column;
    align-items: stretch;
  }

  .cta {
    width: 100%;
    text-align: center;
  }
}
</style>

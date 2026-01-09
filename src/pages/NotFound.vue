<script setup>
import { RouterLink } from "vue-router";
import Container from "../components/ui/Container.vue";
import { ROUTES } from "../app/routes.js";
import { SITE, LINKS } from "../app/config.js";

const links = [
  { label: "Go Home", to: ROUTES.home, primary: true },
  { label: "Read Docs", to: ROUTES.docs },
  { label: "Products", to: ROUTES.products },
];
</script>

<template>
  <main class="notfound">
    <Container class="wrap">
      <div class="card">
        <div class="badge">404</div>

        <h1 class="title">Page not found</h1>
        <p class="desc">
          The page you’re looking for doesn’t exist (or was moved). Try one of
          the links below.
        </p>

        <div class="actions">
          <RouterLink
            v-for="(item, i) in links"
            :key="i"
            class="btn"
            :class="{ primary: item.primary }"
            :to="item.to"
          >
            {{ item.label }}
          </RouterLink>

          <a
            class="btn ghost"
            :href="LINKS.github"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

        <div class="hint">
          <span class="muted">{{ SITE.tagline }}</span>
        </div>
      </div>
    </Container>
  </main>
</template>

<style scoped>
.notfound {
  padding: 72px 0;
}
.wrap {
  display: flex;
  justify-content: center;
}
.card {
  width: 100%;
  max-width: 720px;
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 28px;
  background: var(--panel, transparent);
}
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--muted);
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 14px;
}
.title {
  margin: 0;
  font-size: 34px;
  line-height: 1.15;
}
.desc {
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.7;
  max-width: 60ch;
}
.actions {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 14px;
  border-radius: 12px;
  border: 1px solid var(--border);
  text-decoration: none;
  color: inherit;
  font-size: 14px;
  background: transparent;
  transition: transform 0.08s ease, background 0.15s ease;
}
.btn:hover {
  transform: translateY(-1px);
  background: rgba(127, 127, 127, 0.08);
}
.primary {
  border-color: transparent;
  background: var(--accent, #ff9900);
  color: #0b0f14;
}
.primary:hover {
  background: var(--accent, #ff9900);
}
.ghost {
  color: var(--muted);
}
.hint {
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid var(--border);
}
.muted {
  color: var(--muted);
  font-size: 13px;
}

/* mobile */
@media (max-width: 520px) {
  .notfound {
    padding: 44px 0;
  }
  .card {
    padding: 20px;
    border-radius: 16px;
  }
  .title {
    font-size: 28px;
  }
  .btn {
    width: 100%;
  }
}
</style>

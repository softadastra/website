<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Icon from "../icons/Icons.vue";
import NavLinkGroup from "./NavLinkGroup.vue";
import { SITE, NAV, LINKS } from "../../app/config.js";
import ThemeToggle from "../ui/ThemeToggle.vue";

const mobileOpen = ref(false);
</script>

<template>
  <header class="topbar">
    <div class="wrap">
      <!-- Left -->
      <div class="left">
        <RouterLink class="brand" to="/">
          <img class="logo" :src="SITE.logoUrl" :alt="SITE.name" />
          <span class="name">{{ SITE.name }}</span>
        </RouterLink>

        <!-- Search pill (UI only) -->
        <button class="search" type="button" aria-label="Search">
          <span class="searchIcon">⌕</span>
          <span class="searchText">Search</span>
          <span class="kbd">Ctrl K</span>
        </button>
      </div>

      <!-- Center -->
      <nav class="center" aria-label="Primary">
        <NavLinkGroup v-for="(group, idx) in NAV" :key="idx" :group="group" />
      </nav>

      <!-- Right -->
      <div class="right">
        <ThemeToggle class="iconBtnLike" />

        <a
          class="iconBtn"
          :href="LINKS.github"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Icon name="github" />
        </a>

        <button
          class="burger"
          type="button"
          @click="mobileOpen = true"
          aria-label="Open menu"
        >
          <Icon name="menu" />
        </button>
      </div>
    </div>

    <!-- Mobile drawer (simple) -->
    <div v-if="mobileOpen" class="overlay" @click.self="mobileOpen = false">
      <div class="drawer" role="dialog" aria-modal="true">
        <div class="drawerTop">
          <strong>{{ SITE.name }}</strong>
          <button
            class="iconBtn"
            type="button"
            @click="mobileOpen = false"
            aria-label="Close"
          >
            <Icon name="close" />
          </button>
        </div>

        <div class="drawerNav">
          <div v-for="(group, idx) in NAV" :key="idx" class="drawerGroup">
            <RouterLink
              class="drawerTitle"
              :to="group.href"
              @click="mobileOpen = false"
            >
              {{ group.label }}
            </RouterLink>

            <div v-if="group.items?.length" class="drawerItems">
              <RouterLink
                v-for="(it, i) in group.items"
                :key="i"
                class="drawerItem"
                :to="it.href"
                @click="mobileOpen = false"
              >
                {{ it.label }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Vuejs-like top bar */
.topbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--nav-bg);
  border-bottom: 1px solid var(--nav-border);
  box-shadow: var(--nav-shadow);
}

.wrap {
  width: min(100% - 32px, var(--nav-max));
  margin: 0 auto;
  height: 56px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 16px;
}

/* Left */
.left {
  display: inline-flex;
  align-items: center;
  gap: 14px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--nav-text);
}

.logo {
  width: 26px;
  height: 26px;
  border-radius: 8px;
  object-fit: contain;
}

.name {
  font-weight: 700;
  letter-spacing: 0.2px;
}

/* Search pill like Vue */
.search {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 10px;
  background: var(--nav-pill);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--nav-muted);
  cursor: pointer;
}
.search:hover {
  background: var(--nav-pill-hover);
  color: var(--nav-text);
}
.searchIcon {
  opacity: 0.9;
}
.searchText {
  font-size: 13px;
}
.kbd {
  margin-left: 10px;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 7px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(0, 0, 0, 0.25);
  color: rgba(255, 255, 255, 0.75);
}

/* Center (nav like Vue docs) */
.center {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
}
.center :deep(a),
.center :deep(button) {
  color: var(--nav-muted);
}
.center :deep(a:hover),
.center :deep(button:hover) {
  color: var(--nav-text);
}

/* Right icons */
.right {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}

.iconBtn {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--nav-muted);
  cursor: pointer;
  text-decoration: none;
}
.iconBtn:hover {
  color: var(--nav-text);
  background: rgba(255, 255, 255, 0.06);
}
.iconBtn :deep(svg) {
  width: 18px;
  height: 18px;
}

.burger {
  display: none;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--nav-text);
  cursor: pointer;
}
.burger:hover {
  background: rgba(255, 255, 255, 0.06);
}
.burger :deep(svg) {
  width: 18px;
  height: 18px;
}

/* Mobile */
@media (max-width: 980px) {
  .center {
    display: none;
  }
  .search {
    display: none;
  }
  .burger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .wrap {
    grid-template-columns: 1fr auto;
  }
}

/* Drawer */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: flex-end;
  z-index: 1200;
}
.drawer {
  width: min(92vw, 420px);
  height: 100%;
  background: #0b1220;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  padding: 14px;
  overflow: auto;
}
.drawerTop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 12px;
  color: rgba(255, 255, 255, 0.92);
}
.drawerNav {
  display: grid;
  gap: 14px;
}
.drawerTitle {
  display: inline-flex;
  padding: 10px;
  border-radius: 12px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.92);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.drawerItems {
  display: grid;
  gap: 8px;
  padding: 10px 6px 0 10px;
}
.drawerItem {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.78);
  padding: 8px;
  border-radius: 10px;
}
.drawerItem:hover {
  color: rgba(255, 255, 255, 0.92);
  background: rgba(255, 255, 255, 0.06);
}
.iconBtnLike :deep(.toggle) {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  border: 1px solid var(--nav-border);
  background: var(--nav-pill);
  color: var(--nav-text);
}
.iconBtnLike :deep(.toggle:hover) {
  background: var(--nav-pill-hover);
}
</style>

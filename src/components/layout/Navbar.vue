<script setup>
import { ref, watch, onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";

import Icon from "../icons/Icons.vue";
import NavLinkGroup from "./NavLinkGroup.vue";
import { SITE, NAV, LINKS } from "../../app/config.js";
import ThemeToggle from "../ui/ThemeToggle.vue";

defineProps({
  onOpenSearch: { type: Function, required: true },
});

const mobileOpen = ref(false);

function onKeydown(e) {
  if (!mobileOpen.value) return;
  if (e.key === "Escape") {
    e.preventDefault();
    closeMobile();
  }
}

watch(mobileOpen, (v) => {
  document.body.style.overflow = v ? "hidden" : "";
  if (v) window.addEventListener("keydown", onKeydown);
  else window.removeEventListener("keydown", onKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
  document.body.style.overflow = "";
});

function closeMobile() {
  mobileOpen.value = false;
}

function openMobileSearch(onOpenSearch) {
  mobileOpen.value = false;
  requestAnimationFrame(() => requestAnimationFrame(() => onOpenSearch()));
}
</script>

<template>
  <header class="topbar">
    <div class="wrap">
      <!-- Left -->
      <div class="left">
        <RouterLink class="brand" to="/" aria-label="Home">
          <img class="logo" :src="SITE.logoUrl" :alt="SITE.name" />
          <span class="name">{{ SITE.name }}</span>
        </RouterLink>
      </div>

      <!-- Middle (centered area) -->
      <div class="middle" aria-label="Primary navigation">
        <nav class="nav" aria-label="Primary">
          <NavLinkGroup v-for="(group, idx) in NAV" :key="idx" :group="group" />
        </nav>

        <!-- Desktop Search (centered, NOT on mobile) -->
        <button
          class="search"
          type="button"
          aria-label="Search"
          @click="onOpenSearch"
        >
          <span class="searchIcon">⌕</span>
          <span class="searchText">Search</span>
          <span class="kbd">Ctrl</span>
          <span class="kbd">K</span>
        </button>
      </div>

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
          @click="mobileOpen = !mobileOpen"
          :aria-expanded="mobileOpen ? 'true' : 'false'"
          aria-label="Open menu"
        >
          <Icon name="menu" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <Transition name="drawer">
      <sition v-if="mobileOpen" class="overlay" @click.self="closeMobile">
        <div class="drawer" role="dialog" aria-modal="true" aria-label="Menu">
          <div class="drawerTop">
            <div class="drawerBrand">
              <img class="drawerLogo" :src="SITE.logoUrl" :alt="SITE.name" />
              <strong class="drawerName">{{ SITE.name }}</strong>
            </div>

            <div class="drawerTopActions">
              <!-- Theme toggle also inside drawer (mobile) -->
              <ThemeToggle class="drawerTheme" />

              <button
                class="iconBtn"
                type="button"
                @click="closeMobile"
                aria-label="Close"
              >
                <Icon name="close" />
              </button>
            </div>
          </div>

          <!-- Mobile Search (INSIDE drawer) -->
          <div class="drawerActions">
            <button
              class="drawerSearch"
              type="button"
              aria-label="Search"
              @click="openMobileSearch(onOpenSearch)"
            >
              <span class="drawerSearchLeft">
                <span class="drawerSearchIcon">⌕</span>
                <span>Search</span>
              </span>
              <span class="drawerKbdGroup">
                <span class="drawerKbd">Ctrl</span>
                <span class="drawerKbd">K</span>
              </span>
            </button>
          </div>

          <div class="drawerNav">
            <div v-for="(group, idx) in NAV" :key="idx" class="drawerGroup">
              <RouterLink
                class="drawerTitle"
                :to="group.href"
                @click="closeMobile"
              >
                <span class="drawerTitleLabel">{{ group.label }}</span>
                <span class="chev">›</span>
              </RouterLink>

              <div v-if="group.items?.length" class="drawerItems">
                <RouterLink
                  v-for="(it, i) in group.items"
                  :key="i"
                  class="drawerItem"
                  :to="it.href"
                  @click="closeMobile"
                >
                  <span class="dot"></span>
                  <span class="drawerItemLabel">{{ it.label }}</span>
                </RouterLink>
              </div>
            </div>
          </div>

          <div class="drawerFooter">
            <a
              class="drawerLink"
              :href="LINKS.github"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="github" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </sition>
    </Transition>
  </header>
</template>

<style scoped>
/* ========= Topbar ========= */
.topbar {
  position: sticky;
  top: 0;
  z-index: 1000;

  background: var(--nav-bg);
  border-bottom: 1px solid var(--nav-border);
  box-shadow: var(--nav-shadow);
  backdrop-filter: blur(10px);
}

.wrap {
  width: min(100% - 24px, var(--max));
  margin: 0 auto;
  height: 62px;

  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 14px;
}

/* Left */
.left {
  display: inline-flex;
  align-items: center;
  min-width: 0;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--nav-text);
  text-decoration: none;
  min-width: 0;
}

.logo {
  width: 28px;
  height: 28px;
  border-radius: 10px;
  object-fit: contain;
}

.name {
  font-weight: 800;
  letter-spacing: 0.2px;
  white-space: nowrap;
}

/* Middle (nav + search centered) */
.middle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  min-width: 0;
}

/* Nav */
.nav {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  min-width: 0;
}

.nav :deep(a),
.nav :deep(button) {
  color: var(--nav-muted);
}
.nav :deep(a:hover),
.nav :deep(button:hover) {
  color: var(--nav-text);
}

/* Search (Desktop) */
.search {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 40px;
  padding: 0 12px;
  border-radius: 14px;

  border: 1px solid var(--nav-border);
  background: var(--nav-pill);
  color: var(--nav-muted);
  cursor: pointer;
  white-space: nowrap;
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
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 10px;
  border: 1px solid var(--nav-border);
  color: var(--nav-muted);
}

/* Right */
.right {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}

.iconBtn {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: 1px solid var(--nav-border);
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

/* Burger only on mobile */
.burger {
  display: none;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: transparent;
  border: 1px solid var(--nav-border);
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

/* ========= Responsive rules ========= */
@media (max-width: 980px) {
  .nav {
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
    height: 58px;
  }
}

/* ========= Drawer (theme-aware) ========= */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.62);
  display: flex;
  justify-content: flex-end;
  z-index: 1300;

  height: 100dvh;
}

.drawer {
  width: min(92vw, 420px);
  height: 100dvh;
  overflow: auto;

  padding: 14px;
  padding-top: calc(14px + env(safe-area-inset-top));
  padding-bottom: calc(14px + env(safe-area-inset-bottom));

  background: var(--menu-bg);
  border-left: 1px solid var(--menu-border);
  box-shadow: var(--menu-shadow);
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
}

.drawerTop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--menu-border);
  margin-bottom: 12px;
}

.drawerBrand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.drawerLogo {
  width: 26px;
  height: 26px;
  border-radius: 10px;
  object-fit: contain;
}

.drawerName {
  color: var(--text);
  font-weight: 800;
  letter-spacing: 0.2px;
  white-space: nowrap;
}

.drawerTopActions {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.drawerTheme :deep(.toggle) {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  border: 1px solid var(--menu-border);
  background: transparent;
  color: var(--text);
}

/* Mobile search inside drawer */
.drawerActions {
  padding: 10px 0 6px 0;
}

.drawerSearch {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 12px 12px;
  border-radius: 14px;

  border: 1px solid var(--menu-border);
  background: var(--nav-pill);
  color: var(--text);
  cursor: pointer;
}

.drawerSearch:hover {
  background: var(--nav-pill-hover);
}

.drawerSearchLeft {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.drawerSearchIcon {
  opacity: 0.9;
}

.drawerKbdGroup {
  display: inline-flex;
  gap: 6px;
}

.drawerKbd {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 10px;
  border: 1px solid var(--menu-border);
  color: var(--text-muted);
}

/* Drawer nav */
.drawerNav {
  display: grid;
  gap: 14px;
  padding-top: 8px;
}

.drawerTitle {
  display: inline-flex;
  padding: 12px 12px;
  border-radius: 14px;
  text-decoration: none;

  color: var(--text);
  background: var(--menu-item-hover-bg);
  border: 1px solid var(--menu-border);
}

.drawerItems {
  display: grid;
  gap: 8px;
  padding: 10px 6px 0 10px;
}

.drawerItem {
  text-decoration: none;
  color: var(--text-muted);
  padding: 10px 10px;
  border-radius: 12px;
}

.drawerItem:hover {
  color: var(--text);
  background: var(--menu-item-hover-bg);
}

.drawerFooter {
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid var(--menu-border);
}

.drawerLink {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border-radius: 14px;
  border: 1px solid var(--menu-border);
  background: transparent;
  color: var(--text);
  text-decoration: none;
}
.drawerLink:hover {
  background: var(--menu-item-hover-bg);
}
.drawerLink :deep(svg) {
  width: 18px;
  height: 18px;
}
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 180ms ease;
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-active .drawer,
.drawer-leave-active .drawer {
  transition: transform 220ms ease, opacity 220ms ease;
}
.drawer-enter-from .drawer,
.drawer-leave-to .drawer {
  transform: translateX(18px);
  opacity: 0;
}
/* ========= Drawer nav (Tree style) ========= */
.drawerNav {
  display: grid;
  gap: 14px;
  padding-top: 10px;
}

/* Group container */
.drawerGroup {
  border-radius: 16px;
  border: 1px solid var(--menu-border);
  background: rgba(255, 255, 255, 0.02);
  overflow: hidden;
}

html[data-theme="light"] .drawerGroup {
  background: rgba(15, 23, 42, 0.02);
}

/* Group title (root node) */
.drawerTitle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  padding: 12px 12px;
  text-decoration: none;

  color: var(--text);
  background: transparent;
}

.drawerTitle:hover {
  background: var(--menu-item-hover-bg);
}

.drawerTitleLabel {
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 0.2px;
}

.chev {
  opacity: 0.55;
  font-size: 18px;
  line-height: 1;
}

/* Children container with vertical "tree" line */
.drawerItems {
  position: relative;
  display: grid;
  gap: 6px;

  padding: 10px 10px 12px 34px; /* indent */
  border-top: 1px solid var(--menu-border);
}

.drawerItems::before {
  content: "";
  position: absolute;
  left: 20px; /* line position */
  top: 10px;
  bottom: 12px;
  width: 1px;
  background: var(--menu-border);
  opacity: 0.9;
}

/* Child node (leaf) */
.drawerItem {
  position: relative;
  display: grid;
  grid-template-columns: 12px 1fr;
  align-items: center;
  gap: 10px;

  padding: 10px 10px;
  border-radius: 12px;

  text-decoration: none;
  color: var(--text-muted);
}

.drawerItem:hover {
  color: var(--text);
  background: var(--menu-item-hover-bg);
}

/* Tree dot + short branch line */
.dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  border: 2px solid var(--menu-border);
  background: var(--menu-bg);
  display: inline-block;
  position: relative;
}

.dot::before {
  content: "";
  position: absolute;
  right: 100%;
  top: 50%;
  width: 12px;
  height: 1px;
  background: var(--menu-border);
  transform: translateY(-50%);
  opacity: 0.9;
}

.drawerItemLabel {
  font-size: 14px;
  line-height: 1.2;
}

/* Active state (router-link-active) */
.drawerTitle.router-link-active,
.drawerItem.router-link-active {
  color: var(--text);
}

.drawerItem.router-link-active {
  background: var(--menu-item-hover-bg);
  border: 1px solid var(--menu-border);
}

.drawerItem.router-link-active .dot {
  border-color: var(--sa-orange);
}

/* Subtle focus for accessibility */
.drawerTitle:focus-visible,
.drawerItem:focus-visible,
.drawerSearch:focus-visible {
  outline: 2px solid rgba(213, 122, 42, 0.5);
  outline-offset: 2px;
}
</style>

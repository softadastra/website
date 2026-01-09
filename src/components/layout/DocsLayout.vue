<script setup>
import { ref, watch, onBeforeUnmount } from "vue";
import DocsSidebar from "./DocsSidebar.vue";

const props = defineProps({
  title: { type: String, default: "" },
  description: { type: String, default: "" },
});

const mobileOpen = ref(false);

function open() {
  mobileOpen.value = true;
}
function close() {
  mobileOpen.value = false;
}

function onKeydown(e) {
  if (!mobileOpen.value) return;
  if (e.key === "Escape") {
    e.preventDefault();
    close();
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
</script>

<template>
  <div class="docs">
    <aside class="left" aria-label="Docs navigation">
      <DocsSidebar />
    </aside>

    <main class="center">
      <div class="mobileTop">
        <button
          class="mobileBtn"
          type="button"
          @click="open"
          aria-label="Open docs menu"
        >
          <span class="burger">☰</span>
          <span>Menu</span>
        </button>
      </div>

      <header v-if="title || description" class="pageHead">
        <h1 v-if="title">{{ title }}</h1>
        <p v-if="description">{{ description }}</p>
      </header>

      <section class="content">
        <slot />
      </section>
    </main>

    <aside class="right" aria-label="On this page">
      <div class="tocCard">
        <slot name="right" />
      </div>
    </aside>

    <Transition name="drawer">
      <div v-if="mobileOpen" class="overlay" @click.self="close">
        <div
          class="drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Docs menu"
        >
          <div class="drawerTop">
            <strong>Docs</strong>
            <button
              class="closeBtn"
              type="button"
              @click="close"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div class="drawerBody">
            <DocsSidebar @click="close" />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.docs {
  width: min(100% - 32px, var(--max));
  margin: 0 auto;
  padding: 22px 0 56px;
  display: grid;
  grid-template-columns: 270px minmax(0, 1fr) 260px;
  gap: 22px;
  align-items: start;
}

.left,
.right {
  position: sticky;
  top: 84px;
  max-height: calc(100vh - 110px);
  overflow: auto;
  scrollbar-gutter: stable both-edges;
}

.center {
  min-width: 0;
}

.mobileTop {
  display: none;
  position: sticky;
  top: 64px;
  z-index: 5;
  padding: 10px 0 12px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), transparent);
  backdrop-filter: blur(10px);
}

.mobileBtn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 40px;
  padding: 0 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--panel);
  color: var(--text);
  cursor: pointer;
}
.mobileBtn:hover {
  background: rgba(255, 255, 255, 0.06);
}
.burger {
  opacity: 0.9;
}

.pageHead {
  padding: 6px 0 14px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 18px;
}

.pageHead h1 {
  margin: 0;
  font-size: clamp(26px, 3vw, 34px);
  letter-spacing: -0.02em;
  line-height: 1.12;
}

.pageHead p {
  margin: 8px 0 0;
  color: var(--muted);
  line-height: 1.6;
  max-width: 68ch;
}

.content {
  min-width: 0;
}

.tocCard {
  border: 1px solid var(--border);
  background: var(--panel);
  border-radius: 14px;
  padding: 12px 12px;
}

@media (max-width: 1100px) {
  .docs {
    grid-template-columns: 270px minmax(0, 1fr);
  }
  .right {
    display: none;
  }
}

@media (max-width: 860px) {
  .docs {
    grid-template-columns: 1fr;
    gap: 14px;
    padding-top: 12px;
  }
  .left {
    display: none;
  }
  .mobileTop {
    display: block;
  }
  .left,
  .right {
    position: static;
    max-height: none;
    overflow: visible;
  }
  .pageHead {
    margin-top: 6px;
  }
}
/* Drawer overlay */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.72);
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  z-index: 1400;
  backdrop-filter: blur(10px);
}

/* Drawer should be solid (NOT var(--panel) which is too transparent) */
.drawer {
  width: min(92vw, 380px);
  height: 100dvh;

  background: rgba(7, 12, 22, 0.96);
  border-right: 1px solid rgba(148, 163, 184, 0.22);

  padding: 14px;
  padding-top: calc(14px + env(safe-area-inset-top));
  padding-bottom: calc(14px + env(safe-area-inset-bottom));
  overflow: auto;

  opacity: 1 !important;
}

/* Top */
.drawerTop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.18);
  margin-bottom: 12px;
}

.drawerTop strong {
  color: rgba(255, 255, 255, 0.92);
  letter-spacing: 0.2px;
}

.closeBtn {
  border: 1px solid rgba(148, 163, 184, 0.22);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
}
.closeBtn:hover {
  background: rgba(255, 255, 255, 0.07);
}

/* Drawer body spacing */
.drawerBody {
  padding-top: 4px;
}

/* ✅ Force DocsSidebar contrast inside drawer */
.drawer :deep(a) {
  color: rgba(255, 255, 255, 0.84);
}
.drawer :deep(a:hover) {
  color: rgba(255, 255, 255, 0.96);
  background: rgba(255, 255, 255, 0.06);
}
.drawer :deep(a.active) {
  color: rgba(255, 255, 255, 0.98);
  background: rgba(255, 255, 255, 0.09);
  border: 1px solid rgba(148, 163, 184, 0.18);
}

/* Optional: make lists clearer */
.drawer :deep(ul) {
  margin: 10px 0 14px 0;
  padding-left: 14px;
}
.drawer :deep(li) {
  margin: 6px 0;
}

/* Overlay fades */
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 180ms ease;
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

/* Drawer slides only */
.drawer-enter-active .drawer,
.drawer-leave-active .drawer {
  transition: transform 220ms ease;
  will-change: transform;
}
.drawer-enter-from .drawer,
.drawer-leave-to .drawer {
  transform: translateX(-16px);
}
</style>

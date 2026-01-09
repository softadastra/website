<script setup>
import { ref } from "vue";
import DocsSidebar from "./DocsSidebar.vue";

const mobileOpen = ref(false);
function open() {
  mobileOpen.value = true;
}
function close() {
  mobileOpen.value = false;
}
</script>

<template>
  <div class="docs">
    <aside class="left" aria-label="Docs navigation">
      <DocsSidebar />
    </aside>

    <main class="center">
      <button class="mobileBtn" type="button" @click="open">☰ Menu</button>

      <slot />
    </main>

    <aside class="right" aria-label="On this page">
      <slot name="right" />
    </aside>

    <div v-if="mobileOpen" class="overlay" @click.self="close">
      <div class="drawer" role="dialog" aria-modal="true">
        <div class="drawerTop">
          <strong>Docs</strong>
          <button type="button" @click="close">✕</button>
        </div>
        <DocsSidebar />
      </div>
    </div>
  </div>
</template>

<style scoped>
.docs {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr) 260px;
  gap: 24px;
  align-items: start;
}

.left,
.right {
  position: sticky;
  top: 16px;
  max-height: calc(100vh - 32px);
  overflow: auto;
}

.mobileBtn {
  display: none;
  margin-bottom: 12px;
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  cursor: pointer;
}

@media (max-width: 1100px) {
  .docs {
    grid-template-columns: 260px minmax(0, 1fr);
  }
  .right {
    display: none;
  }
}

@media (max-width: 860px) {
  .docs {
    grid-template-columns: 1fr;
  }
  .left {
    display: none;
  }
  .mobileBtn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
}

/* Drawer */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  z-index: 999;
}

.drawer {
  width: 86%;
  max-width: 360px;
  background: var(--panel);
  border-right: 1px solid var(--border);
  padding: 14px;
  overflow: auto;
}

.drawerTop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.drawerTop button {
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
}
</style>

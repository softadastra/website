<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  label: { type: String, required: true },
  items: { type: Array, default: () => [] },
  active: { type: Boolean, default: false },
});

const open = ref(false);
const rootEl = ref(null);

function close() {
  open.value = false;
}
function toggle() {
  open.value = !open.value;
}

function onDocClick(e) {
  if (!rootEl.value) return;
  if (!rootEl.value.contains(e.target)) close();
}

onMounted(() => document.addEventListener("click", onDocClick));
onBeforeUnmount(() => document.removeEventListener("click", onDocClick));
</script>

<template>
  <div ref="rootEl">
    <button
      type="button"
      @click="toggle"
      :aria-expanded="open"
      :class="{ active }"
    >
      <span>{{ label }}</span>
      <span aria-hidden="true">▾</span>
    </button>

    <div v-if="open" role="menu">
      <RouterLink
        v-for="(it, idx) in items"
        :key="idx"
        :to="it.href"
        role="menuitem"
        @click="close"
        class="menuItem"
      >
        <div class="miTop">{{ it.label }}</div>
        <div v-if="it.description" class="miDesc">{{ it.description }}</div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
div {
  position: relative;
}

button {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 10px;
  border-radius: 10px;

  border: 1px solid transparent;
  background: transparent;
  color: var(--nav-muted);
  cursor: pointer;
}

button:hover {
  color: var(--nav-text);
  background: var(--nav-pill-hover);
}

button::after {
  content: "";
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 5px;
  height: 2px;
  border-radius: 99px;
  background: transparent;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 160ms ease, background 160ms ease;
}

button:hover::after {
  background: rgba(16, 185, 129, 0.55);
  transform: scaleX(1);
}

button.active {
  color: var(--nav-text);
}

button.active::after {
  background: var(--sa-orange);
  transform: scaleX(1);
}

/* menu follows theme via tokens */
[role="menu"] {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  min-width: 220px;
  padding: 8px;
  border-radius: 12px;

  background: var(--menu-bg);
  border: 1px solid var(--menu-border);
  box-shadow: var(--menu-shadow);

  z-index: 1001;
}

a[role="menuitem"] {
  display: flex;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  color: var(--menu-item);
}

a[role="menuitem"]:hover {
  color: var(--menu-item-hover);
  background: var(--menu-item-hover-bg);
}
.menuItem {
  display: grid;
  gap: 2px;
  padding: 10px;
  border-radius: 10px;
}

.miTop {
  font-weight: 600;
}
.miDesc {
  font-size: 12px;
  color: var(--text-muted);
}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";

const props = defineProps({
  label: { type: String, required: true },
  items: { type: Array, default: () => [] },
  active: { type: Boolean, default: false },
});

const route = useRoute();

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

function normalize(path) {
  if (!path) return "/";
  return path.length > 1 ? path.replace(/\/+$/, "") : path;
}

const currentPath = computed(() => normalize(route.path));

function isActive(href) {
  const a = normalize(href);
  const p = currentPath.value;
  return p === a || (a !== "/" && p.startsWith(a + "/"));
}

function itemActive(it) {
  return isActive(it?.href);
}

// ✅ ferme le dropdown quand la route change
watch(
  () => route.fullPath,
  () => close()
);

onMounted(() => document.addEventListener("click", onDocClick));
onBeforeUnmount(() => document.removeEventListener("click", onDocClick));
</script>

<template>
  <div ref="rootEl" class="dd">
    <button
      type="button"
      @click="toggle"
      :aria-expanded="open ? 'true' : 'false'"
      :class="{ active }"
    >
      <span>{{ label }}</span>
      <span class="chev" aria-hidden="true">▾</span>
    </button>

    <div v-if="open" class="menu" role="menu" aria-label="Menu">
      <RouterLink
        v-for="(it, idx) in items"
        :key="idx"
        :to="it.href"
        role="menuitem"
        class="menuItem"
        :class="{ active: itemActive(it) }"
        @click="close"
      >
        <div class="miTop">{{ it.label }}</div>
        <div v-if="it.description" class="miDesc">{{ it.description }}</div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.dd {
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

.chev {
  opacity: 0.75;
  font-size: 12px;
  transform: translateY(1px);
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
.menu {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  min-width: 240px;
  padding: 8px;
  border-radius: 12px;

  background: var(--menu-bg);
  border: 1px solid var(--menu-border);
  box-shadow: var(--menu-shadow);

  z-index: 1001;
}

.menuItem {
  display: grid;
  gap: 2px;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;

  color: var(--menu-item);
  border: 1px solid transparent;
}

.menuItem:hover {
  color: var(--menu-item-hover);
  background: var(--menu-item-hover-bg);
}

/* ✅ active item (works for our class + router default classes) */
.menuItem.active,
.menuItem.router-link-active,
.menuItem.router-link-exact-active {
  color: var(--menu-item-hover);
  background: var(--menu-item-hover-bg);
  border-color: var(--menu-border);
}

.miTop {
  font-weight: 700;
}
.miDesc {
  font-size: 12px;
  color: var(--text-muted);
}
</style>

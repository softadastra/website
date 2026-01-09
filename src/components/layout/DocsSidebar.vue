<script setup>
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { NAV_DOCS } from "../../app/config.js";

defineEmits(["click"]);

const route = useRoute();

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
</script>

<template>
  <aside class="side" aria-label="Documentation sidebar">
    <nav class="nav">
      <div v-for="(group, gi) in NAV_DOCS" :key="gi" class="group">
        <RouterLink
          class="groupLink"
          :to="group.href"
          :class="{ active: isActive(group.href) }"
          @click="$emit('click')"
        >
          <span class="label">{{ group.label }}</span>
          <span class="chev">›</span>
        </RouterLink>

        <div v-if="group.items?.length" class="items">
          <RouterLink
            v-for="(it, ii) in group.items"
            :key="ii"
            class="itemLink"
            :to="it.href"
            :class="{ active: isActive(it.href) }"
            @click="$emit('click')"
          >
            <span class="dot" />
            <span class="itemLabel">{{ it.label }}</span>
          </RouterLink>
        </div>
      </div>
    </nav>
  </aside>
</template>

<style scoped>
.side {
  border: 1px solid var(--border);
  background: var(--panel);
  border-radius: 14px;
  padding: 12px;
}

.nav {
  display: grid;
  gap: 12px;
}

.group {
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  overflow: hidden;
}

.groupLink {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 10px;
  text-decoration: none;
  color: var(--muted);
}

.groupLink:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.04);
}

.groupLink.active {
  color: var(--text);
  background: rgba(255, 255, 255, 0.06);
}

.label {
  font-weight: 750;
  letter-spacing: 0.2px;
}

.chev {
  opacity: 0.6;
  font-size: 18px;
  line-height: 1;
}

.items {
  display: grid;
  gap: 6px;
  padding: 10px 10px 12px 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.itemLink {
  display: grid;
  grid-template-columns: 12px 1fr;
  align-items: center;
  gap: 10px;

  padding: 8px 10px;
  border-radius: 10px;

  text-decoration: none;
  color: var(--muted);
}

.itemLink:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.04);
}

.itemLink.active {
  color: var(--text);
  background: rgba(255, 255, 255, 0.06);
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  border: 2px solid rgba(255, 255, 255, 0.14);
  background: transparent;
}

.itemLink.active .dot {
  border-color: rgba(255, 153, 0, 0.65);
}

.itemLabel {
  min-width: 0;
}
</style>

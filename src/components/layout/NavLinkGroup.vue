<script setup>
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import Dropdown from "../ui/Dropdown.vue";

const props = defineProps({
  group: { type: Object, required: true },
});

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

const groupActive = computed(() => isActive(props.group.href));
</script>

<template>
  <Dropdown
    v-if="Array.isArray(group.items) && group.items.length > 0"
    :label="group.label"
    :items="group.items"
    :active="groupActive"
  />
  <RouterLink v-else :to="group.href" :class="{ active: isActive(group.href) }">
    {{ group.label }}
  </RouterLink>
</template>

<style scoped>
a {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 8px 10px;
  border-radius: 10px;

  border: 1px solid transparent;
  background: transparent;
  color: var(--nav-muted);
  text-decoration: none;
}

a:hover {
  background: var(--nav-pill-hover);
  color: var(--nav-text);
}

a::after {
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

a:hover::after {
  background: rgba(16, 185, 129, 0.55);
  transform: scaleX(1);
}

a.active {
  color: var(--nav-text);
}

a.active::after {
  background: var(--sa-orange);
  transform: scaleX(1);
}
</style>

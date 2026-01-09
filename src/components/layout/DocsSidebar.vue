<script setup>
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { NAV } from "../../app/config.js";

const route = useRoute();

function normalize(path) {
  // garde simple : remove trailing slash
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
  <aside aria-label="Documentation sidebar">
    <nav>
      <div v-for="(group, gi) in NAV" :key="gi">
        <div>
          <RouterLink
            :to="group.href"
            :aria-current="isActive(group.href) ? 'page' : null"
          >
            {{ group.label }}
          </RouterLink>
        </div>

        <ul v-if="group.items && group.items.length">
          <li v-for="(it, ii) in group.items" :key="ii">
            <RouterLink
              :to="it.href"
              :aria-current="isActive(it.href) ? 'page' : null"
            >
              {{ it.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

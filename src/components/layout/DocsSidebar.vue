<script setup>
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { NAV } from "../../app/config.js";

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
  <aside aria-label="Documentation sidebar">
    <nav>
      <div v-for="(group, gi) in NAV" :key="gi">
        <div>
          <RouterLink
            :to="group.href"
            :class="{ active: isActive(group.href) }"
          >
            {{ group.label }}
          </RouterLink>
        </div>

        <ul v-if="group.items && group.items.length">
          <li v-for="(it, ii) in group.items" :key="ii">
            <RouterLink :to="it.href" :class="{ active: isActive(it.href) }">
              {{ it.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>
<style scoped>
a {
  display: inline-flex;
  padding: 6px 8px;
  border-radius: 10px;
  text-decoration: none;
  color: var(--muted);
}
a:hover {
  color: var(--text);
}
a.active {
  color: var(--text);
  background: rgba(255, 255, 255, 0.06);
}
ul {
  margin: 8px 0 16px 0;
  padding-left: 14px;
}
li {
  list-style: none;
  margin: 4px 0;
}
</style>

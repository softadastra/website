<script setup>
import { computed, onMounted, ref } from "vue";

const STORAGE_KEY = "sa-theme"; // "light" | "dark"
const theme = ref("light");

function apply(next) {
  theme.value = next;
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem(STORAGE_KEY, next);
}

function toggle() {
  apply(theme.value === "dark" ? "light" : "dark");
}

const label = computed(() =>
  theme.value === "dark" ? "Switch to light mode" : "Switch to dark mode"
);

onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") {
    apply(saved);
    return;
  }

  // default = system preference (like vuejs)
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  apply(prefersDark ? "dark" : "light");
});
</script>

<template>
  <button class="toggle" type="button" :aria-label="label" @click="toggle">
    <!-- moon -->
    <svg
      v-if="theme !== 'dark'"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M21 14.6A8.5 8.5 0 0 1 9.4 3a7 7 0 1 0 11.6 11.6Z"
      />
    </svg>

    <!-- sun -->
    <svg v-else viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-16h1v3h-1V2Zm0 19h1v3h-1v-3ZM2 11h3v1H2v-1Zm19 0h3v1h-3v-1ZM4.2 4.9l2.1 2.1-.7.7-2.1-2.1.7-.7Zm14.5 14.5 2.1 2.1-.7.7-2.1-2.1.7-.7ZM19.8 4.9l.7.7-2.1 2.1-.7-.7 2.1-2.1ZM4.2 19.4l.7-.7 2.1 2.1-.7.7-2.1-2.1Z"
      />
    </svg>
  </button>
</template>

<style scoped>
.toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;
  border-radius: 12px;

  border: 1px solid var(--nav-border);
  background: var(--nav-pill);
  color: var(--nav-text);
  cursor: pointer;
}

.toggle:hover {
  background: var(--nav-pill-hover);
}
</style>

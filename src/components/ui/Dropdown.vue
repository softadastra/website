<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  label: { type: String, required: true },
  items: { type: Array, default: () => [] },
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
    <button type="button" @click="toggle" :aria-expanded="open">
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
      >
        {{ it.label }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

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
  // ferme si click en dehors de CE dropdown
  if (!rootEl.value.contains(e.target)) close();
}

onMounted(() => {
  document.addEventListener("click", onDocClick);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", onDocClick);
});
</script>

<template>
  <div ref="rootEl" class="root">
    <button type="button" @click="toggle" :aria-expanded="open">
      <span>{{ label }}</span>
      <span aria-hidden="true">▾</span>
    </button>

    <div v-if="open" role="menu">
      <a
        v-for="(it, idx) in items"
        :key="idx"
        :href="it.href"
        role="menuitem"
        @click="close"
      >
        {{ it.label }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { ICONS } from "./icons.js";

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 18 },
  alt: { type: String, default: "" },
});

const svg = computed(() => ICONS[props.name] || "");
const px = computed(() =>
  typeof props.size === "number" ? `${props.size}px` : props.size
);
</script>

<template>
  <span
    v-if="svg"
    class="icon"
    :style="{ '--icon-size': px }"
    v-html="svg"
    :aria-label="alt || undefined"
    :role="alt ? 'img' : undefined"
    :aria-hidden="alt ? undefined : 'true'"
  />
</template>

<style scoped>
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--icon-size);
  height: var(--icon-size);
  color: currentColor;
}

.icon :deep(svg) {
  width: 100%;
  height: 100%;
  display: block;
}

.icon :deep(svg *[stroke]) {
  stroke: currentColor;
}

.icon :deep(svg *[fill]:not([fill="none"])) {
  fill: currentColor;
}
</style>

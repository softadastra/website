<script setup>
import { computed } from "vue";
import { ICONS } from "./icons.js";

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 18 },
  alt: { type: String, default: "" },
});

const src = computed(() => ICONS[props.name]);
</script>

<template>
  <img
    v-if="src"
    :src="src"
    :width="size"
    :height="size"
    :alt="alt"
    aria-hidden="true"
  />
</template>

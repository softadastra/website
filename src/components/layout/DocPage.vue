<script setup>
import DocsLayout from "./DocsLayout.vue";

defineProps({
  title: { type: String, required: true },
  description: { type: String, default: "" },
});
</script>

<template>
  <DocsLayout :title="title" :description="description">
    <slot />
  </DocsLayout>
</template>

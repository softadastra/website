<script setup>
import DocsLayout from "./DocsLayout.vue";
import MarkdownView from "../ui/MarkdownView.vue";

defineProps({
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  source: { type: String, required: true },
});
</script>

<template>
  <DocsLayout>
    <section>
      <header v-if="title || description">
        <h1 v-if="title">{{ title }}</h1>
        <p v-if="description">{{ description }}</p>
      </header>

      <MarkdownView :source="source" />
    </section>
  </DocsLayout>
</template>

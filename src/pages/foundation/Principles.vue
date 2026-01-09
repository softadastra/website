<script setup>
import MarkdownDocPage from "../../components/layout/MarkdownDocPage.vue";
import md from "../../content/foundation/principles.md?raw";
</script>

<template>
  <MarkdownDocPage title="Principles" :source="md" />
</template>

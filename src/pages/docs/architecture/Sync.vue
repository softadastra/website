<script setup>
import MarkdownDocPage from "../../../components/layout/MarkdownDocPage.vue";
import md from "../../../content/architecture/sync.md?raw";
</script>

<template>
  <MarkdownDocPage title="Sync Engine" :source="md" />
</template>

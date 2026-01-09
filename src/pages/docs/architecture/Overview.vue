<script setup>
import MarkdownDocPage from "../../../components/layout/MarkdownDocPage.vue";
import md from "../../../content/architecture/overview.md?raw";
</script>

<template>
  <MarkdownDocPage title="Architecture Overview" :source="md" />
</template>

<script setup>
import MarkdownDocPage from "../../../components/layout/MarkdownDocPage.vue";
import md from "../../../content/architecture/edge.md?raw";
</script>

<template>
  <MarkdownDocPage title="Edge Nodes" :source="md" />
</template>

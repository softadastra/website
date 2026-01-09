<script setup>
import MarkdownDocPage from "../../components/layout/MarkdownDocPage.vue";
import md from "../../content/foundation/vision.md?raw";
</script>

<template>
  <MarkdownDocPage title="Vision" :source="md" />
</template>

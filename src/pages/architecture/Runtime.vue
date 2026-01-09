<script setup>
import MarkdownDocPage from "../../components/layout/MarkdownDocPage.vue";
import md from "../../content/architecture/runtime.md?raw";
</script>

<template>
  <MarkdownDocPage title="Runtime" :source="md" />
</template>

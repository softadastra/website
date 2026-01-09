<script setup>
import MarkdownDocPage from "../components/layout/MarkdownDocPage.vue";
import md from "../content/docs.md?raw";
</script>

<template>
  <MarkdownDocPage title="Docs" :source="md" />
</template>

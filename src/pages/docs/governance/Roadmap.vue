<script setup>
import MarkdownDocPage from "../../../components/layout/MarkdownDocPage.vue";
import md from "../../../content/governance/roadmap.md?raw";
</script>

<template>
  <MarkdownDocPage title="Roadmap" :source="md" />
</template>

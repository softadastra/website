<script setup>
import MarkdownDocPage from "../../components/layout/MarkdownDocPage.vue";
import md from "../../content/company/about.md?raw";
</script>

<template>
  <MarkdownDocPage title="About" :source="md" />
</template>

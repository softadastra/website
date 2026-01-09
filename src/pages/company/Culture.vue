<script setup>
import MarkdownDocPage from "../../components/layout/MarkdownDocPage.vue";
import md from "../../content/company/culture.md?raw";
</script>

<template>
  <MarkdownDocPage title="Culture" :source="md" />
</template>

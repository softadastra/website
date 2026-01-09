<script setup>
import MarkdownDocPage from "../../components/layout/MarkdownDocPage.vue";
import md from "../../content/company/careers.md?raw";
</script>

<template>
  <MarkdownDocPage title="Careers" :source="md" />
</template>

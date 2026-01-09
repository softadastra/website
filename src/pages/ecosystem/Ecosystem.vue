<script setup>
import MarkdownDocPage from "../../components/layout/MarkdownDocPage.vue";
import md from "../../content/ecosystem/overview.md?raw";
</script>

<template>
  <MarkdownDocPage title="Ecosystem" :source="md" />
</template>

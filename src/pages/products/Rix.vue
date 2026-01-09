<script setup>
import MarkdownDocPage from "../../components/layout/MarkdownDocPage.vue";
import md from "../../content/products/rix.md?raw";
</script>

<template>
  <MarkdownDocPage title="Rix" :source="md" />
</template>

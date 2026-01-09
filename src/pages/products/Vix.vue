<script setup>
import MarkdownDocPage from "../../components/layout/MarkdownDocPage.vue";
import md from "../../content/products/vix.md?raw";
</script>

<template>
  <MarkdownDocPage title="Vix.cpp Runtime" :source="md" />
</template>

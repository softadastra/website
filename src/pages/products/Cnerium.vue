<script setup>
import MarkdownDocPage from "../../components/layout/MarkdownDocPage.vue";
import md from "../../content/products/cnerium.md?raw";
</script>

<template>
  <MarkdownDocPage title="Cnerium" :source="md" />
</template>

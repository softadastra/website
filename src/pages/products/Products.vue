<script setup>
import MarkdownDocPage from "../../components/layout/MarkdownDocPage.vue";
import md from "../../content/ecosystem/products.md?raw";
</script>

<template>
  <MarkdownDocPage title="Products" :source="md" />
</template>

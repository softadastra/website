<script setup>
import MarkdownDocPage from "../../components/layout/MarkdownDocPage.vue";
import md from "../../content/architecture/net.md?raw";
</script>

<template>
  <MarkdownDocPage title="Network (P2P)" :source="md" />
</template>

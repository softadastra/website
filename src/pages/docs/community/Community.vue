<script setup>
import MarkdownDocPage from "../../../components/layout/MarkdownDocPage.vue";
import md from "../../../content/community/overview.md?raw";
</script>

<template>
  <MarkdownDocPage title="Community" :source="md" />
</template>

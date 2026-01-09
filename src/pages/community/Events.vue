<script setup>
import MarkdownDocPage from "../../components/layout/MarkdownDocPage.vue";
import md from "../../content/community/events.md?raw";
</script>

<template>
  <MarkdownDocPage title="Events" :source="md" />
</template>

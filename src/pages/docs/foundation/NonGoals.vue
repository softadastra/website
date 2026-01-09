<script setup>
import MarkdownDocPage from "../../../components/layout/MarkdownDocPage.vue";
import md from "../../../content/foundation/non-goals.md?raw";
</script>

<template>
  <MarkdownDocPage title="Non-goals" :source="md" />
</template>

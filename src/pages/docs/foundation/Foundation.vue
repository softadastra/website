<script setup>
import MarkdownDocPage from "../../../components/layout/MarkdownDocPage.vue";
import md from "../../../content/FOUNDATION.md?raw";
</script>

<template>
  <MarkdownDocPage title="Foundation" :source="md" />
</template>

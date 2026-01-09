<script setup>
import MarkdownDocPage from "../../../components/layout/MarkdownDocPage.vue";
import md from "../../../content/ecosystem/stacks.md?raw";
</script>

<template>
  <MarkdownDocPage title="Stacks" :source="md" />
</template>

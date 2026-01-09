<script setup>
import MarkdownDocPage from "../../../components/layout/MarkdownDocPage.vue";
import md from "../../../content/governance/contribution.md?raw";
</script>

<template>
  <MarkdownDocPage title="Contribution" :source="md" />
</template>

<script setup>
import MarkdownDocPage from "../../../components/layout/MarkdownDocPage.vue";
import md from "../../../content/governance/overview.md?raw";
</script>

<template>
  <MarkdownDocPage title="Governance" :source="md" />
</template>

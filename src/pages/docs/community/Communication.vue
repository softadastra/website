<script setup>
import MarkdownDocPage from "../../../components/layout/MarkdownDocPage.vue";
import md from "../../../content/community/communication.md?raw";
</script>

<template>
  <MarkdownDocPage title="Communication" :source="md" />
</template>

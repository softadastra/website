<script setup>
import MarkdownDocPage from "../../components/layout/MarkdownDocPage.vue";
import md from "../../content/company/contact.md?raw";
</script>

<template>
  <MarkdownDocPage title="Contact us" :source="md" />
</template>

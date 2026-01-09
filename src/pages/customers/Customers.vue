<script setup>
import MarkdownDocPage from "../../components/layout/MarkdownDocPage.vue";
import md from "../../content/customers.md?raw";
</script>

<template>
  <MarkdownDocPage title="Customers" :source="md" />
</template>

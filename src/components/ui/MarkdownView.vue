<script setup>
import { computed } from "vue";
import MarkdownIt from "markdown-it";
import DOMPurify from "dompurify";

const props = defineProps({
  source: { type: String, required: true },
});

const md = new MarkdownIt({
  html: false, // on désactive HTML brut dans le markdown
  linkify: true,
  typographer: true,
});

const html = computed(() => {
  const rendered = md.render(props.source || "");
  // sanitize pour éviter injection (même si tes md sont “trusted”)
  return DOMPurify.sanitize(rendered);
});
</script>

<template>
  <article class="markdown" v-html="html"></article>
</template>

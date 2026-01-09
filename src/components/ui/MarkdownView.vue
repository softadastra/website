<script setup>
import { computed } from "vue";
import MarkdownIt from "markdown-it";
import DOMPurify from "dompurify";

const props = defineProps({
  source: { type: String, required: true },
});

function slugify(input) {
  return (input || "")
    .toLowerCase()
    .trim()
    .replace(/[`"'“”‘’]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
});

const defaultHeadingOpen =
  md.renderer.rules.heading_open ||
  function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
  const next = tokens[idx + 1];
  const title = next && next.type === "inline" ? next.content : "";

  env.__slugCounts ||= {};
  let slug = slugify(title);

  if (!slug) slug = "section";

  const count = env.__slugCounts[slug] || 0;
  env.__slugCounts[slug] = count + 1;
  if (count > 0) slug = `${slug}-${count + 1}`;

  tokens[idx].attrSet("id", slug);
  return defaultHeadingOpen(tokens, idx, options, env, self);
};

const html = computed(() => {
  const rendered = md.render(props.source || "", { __slugCounts: {} });
  return DOMPurify.sanitize(rendered);
});
</script>

<template>
  <article class="markdown" data-md-root v-html="html"></article>
</template>

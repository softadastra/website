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

<style scoped>
.markdown {
  min-width: 0;
  line-height: 1.75;
  color: var(--text);
}

.markdown :deep(h2),
.markdown :deep(h3) {
  scroll-margin-top: 92px;
}

.markdown :deep(h1) {
  font-size: 2rem;
  margin: 0.4rem 0 0.8rem;
}
.markdown :deep(h2) {
  font-size: 1.35rem;
  margin: 1.6rem 0 0.7rem;
}
.markdown :deep(h3) {
  font-size: 1.1rem;
  margin: 1.2rem 0 0.5rem;
}

.markdown :deep(p) {
  margin: 0.7rem 0;
  color: var(--muted);
}

.markdown :deep(a) {
  color: var(--text);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: rgba(255, 255, 255, 0.22);
}
.markdown :deep(a:hover) {
  text-decoration-color: rgba(255, 153, 0, 0.65);
}

.markdown :deep(code) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "JetBrains Mono",
    monospace;
  font-size: 0.95em;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0.15em 0.45em;
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.92);
}

.markdown :deep(pre) {
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 12px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.markdown :deep(pre code) {
  background: transparent;
  border: none;
  padding: 0;
}

.markdown :deep(ul),
.markdown :deep(ol) {
  margin: 0.7rem 0;
  padding-left: 1.1rem;
  color: var(--muted);
}

.markdown :deep(blockquote) {
  margin: 0.9rem 0;
  padding: 0.75rem 0.9rem;
  border-left: 3px solid rgba(255, 153, 0, 0.65);
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  color: var(--muted);
}

.markdown :deep(hr) {
  border: none;
  border-top: 1px solid var(--border);
  margin: 1.4rem 0;
}
</style>

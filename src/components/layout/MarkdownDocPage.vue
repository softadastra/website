<script setup>
import { computed, ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import DocsLayout from "./DocsLayout.vue";
import MarkdownView from "../ui/MarkdownView.vue";

const activeId = ref("");
let observer = null;

const props = defineProps({
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  source: { type: String, required: true },
  showToc: { type: Boolean, default: true },
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

function extractHeadings(mdSource) {
  const lines = (mdSource || "").split("\n");
  const counts = {};
  const out = [];

  for (const line of lines) {
    const m = /^(#{2,3})\s+(.+?)\s*$/.exec(line);
    if (!m) continue;

    const level = m[1].length;
    const text = m[2].replace(/\s+#.*$/, "").trim();

    let id = slugify(text) || "section";
    const c = counts[id] || 0;
    counts[id] = c + 1;
    if (c > 0) id = `${id}-${c + 1}`;

    out.push({ level, text, id });
  }

  return out;
}

const toc = computed(() =>
  props.showToc ? extractHeadings(props.source) : []
);

function setupSpy() {
  if (observer) observer.disconnect();

  const root = document.querySelector("[data-md-root]");
  if (!root) return;

  const headings = root.querySelectorAll("h2[id], h3[id]");
  if (!headings.length) return;

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length) activeId.value = visible[0].target.id;
    },
    {
      root: null,
      rootMargin: "-20px 0px -70% 0px",
      threshold: [0.1, 0.25, 0.5, 0.75],
    }
  );

  headings.forEach((h) => observer.observe(h));
}

onMounted(async () => {
  await nextTick();
  setupSpy();
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <DocsLayout :title="title" :description="description">
    <MarkdownView :source="source" />

    <template #right>
      <nav v-if="toc.length" class="toc" aria-label="Table of contents">
        <div class="tocTitle">On this page</div>
        <a
          v-for="(h, i) in toc"
          :key="i"
          class="tocLink"
          :class="{ active: activeId === h.id, sub: h.level === 3 }"
          :href="`#${h.id}`"
        >
          {{ h.text }}
        </a>
      </nav>
    </template>
  </DocsLayout>
</template>

<style scoped>
.toc {
  display: grid;
  gap: 8px;
}

.tocTitle {
  font-weight: 850;
  color: var(--text);
  margin-bottom: 4px;
}

.tocLink {
  text-decoration: none;
  color: var(--muted);
  padding: 6px 8px;
  border-radius: 10px;
  line-height: 1.25;
}

.tocLink:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.04);
}

.tocLink.active {
  color: var(--text);
  background: rgba(255, 255, 255, 0.06);
  font-weight: 650;
}

.tocLink.sub {
  margin-left: 10px;
}
</style>

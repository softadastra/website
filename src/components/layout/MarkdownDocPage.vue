<script setup>
import { computed } from "vue";
import DocsLayout from "./DocsLayout.vue";
import MarkdownView from "../ui/MarkdownView.vue";
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

const activeId = ref("");

let observer = null;

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

      if (visible.length) {
        activeId.value = visible[0].target.id;
      }
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

    const level = m[1].length; // 2 or 3
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
</script>

<template>
  <DocsLayout>
    <section>
      <header v-if="title || description">
        <h1 v-if="title">{{ title }}</h1>
        <p v-if="description">{{ description }}</p>
      </header>

      <MarkdownView :source="source" />
    </section>

    <template #right>
      <nav v-if="toc.length" aria-label="Table of contents">
        <p><strong>On this page</strong></p>
        <ul>
          <li
            v-for="(h, i) in toc"
            :key="i"
            :style="{ marginLeft: h.level === 3 ? '14px' : '0px' }"
          >
            <a :href="`#${h.id}`" :class="{ active: activeId === h.id }">
              {{ h.text }}
            </a>
          </li>
        </ul>
      </nav>
    </template>
  </DocsLayout>
</template>

<style scoped>
a {
  text-decoration: none;
  color: var(--muted);
}
a:hover {
  color: var(--text);
}
a.active {
  color: var(--text);
  font-weight: 600;
}
ul {
  padding-left: 0;
}
li {
  list-style: none;
  margin: 6px 0;
}
</style>

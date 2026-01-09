<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { DOCS_PAGES } from "../../app/searchIndex.js";

const props = defineProps({
  open: { type: Boolean, default: false },
});

const emit = defineEmits(["close"]);

const router = useRouter();
const q = ref("");
const inputEl = ref(null);
const active = ref(0);

function close() {
  emit("close");
}

function normalize(s) {
  return (s || "").toLowerCase();
}

function snippet(text, query, max = 120) {
  const t = (text || "").replace(/\s+/g, " ").trim();
  const qi = normalize(query);
  if (!qi) return t.slice(0, max) + (t.length > max ? "…" : "");

  const idx = normalize(t).indexOf(qi);
  if (idx < 0) return t.slice(0, max) + (t.length > max ? "…" : "");

  const start = Math.max(0, idx - 30);
  const end = Math.min(t.length, idx + max);
  const out = t.slice(start, end);
  return (start > 0 ? "…" : "") + out + (end < t.length ? "…" : "");
}

const results = computed(() => {
  const query = q.value.trim();
  if (!query) return [];

  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
  const scored = [];

  for (const p of DOCS_PAGES) {
    const hay = (p.title + "\n" + (p.body || "")).toLowerCase();

    let score = 0;
    for (const t of tokens) {
      const hit = hay.indexOf(t);
      if (hit >= 0) score += 10;
    }
    if (score > 0) {
      scored.push({
        title: p.title,
        route: p.route,
        desc: snippet(p.body, query),
        score,
      });
    }
  }

  return scored.sort((a, b) => b.score - a.score).slice(0, 10);
});

function go(item) {
  if (!item) return;
  close();
  router.push(item.route);
}

function onKeydown(e) {
  if (!props.open) return;

  if (e.key === "Escape") {
    e.preventDefault();
    close();
    return;
  }

  if (e.key === "ArrowDown") {
    e.preventDefault();
    active.value = Math.min(active.value + 1, results.value.length - 1);
    return;
  }
  if (e.key === "ArrowUp") {
    e.preventDefault();
    active.value = Math.max(active.value - 1, 0);
    return;
  }
  if (e.key === "Enter") {
    e.preventDefault();
    go(results.value[active.value]);
  }
}

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
});
onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
});

onMounted(async () => {
  // focus when opened later
});

async function focusInput() {
  await nextTick();
  inputEl.value?.focus();
}

defineExpose({ focusInput });
</script>

<template>
  <div v-if="open" class="overlay" @click.self="close">
    <div class="panel" role="dialog" aria-modal="true" aria-label="Search">
      <div class="top">
        <span class="icon">⌕</span>
        <input
          ref="inputEl"
          v-model="q"
          type="text"
          class="input"
          placeholder="Search docs…"
          autocomplete="off"
        />
        <span class="kbd">Esc</span>
      </div>

      <div v-if="results.length" class="list" role="listbox">
        <button
          v-for="(r, i) in results"
          :key="r.route"
          class="item"
          type="button"
          :class="{ active: i === active }"
          @click="go(r)"
        >
          <div class="title">{{ r.title }}</div>
          <div class="desc">{{ r.desc }}</div>
        </button>
      </div>

      <div v-else class="empty">
        <p v-if="q.trim()">No results.</p>
        <p v-else>Type to search documentation.</p>
        <div class="hint">
          <span class="kbd">↑</span><span class="kbd">↓</span> to navigate ·
          <span class="kbd">Enter</span> to open
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;

  background: rgba(2, 6, 23, 0.55);
  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding-top: min(18vh, 160px);
  padding-left: 16px;
  padding-right: 16px;

  z-index: 2000;
}

.panel {
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  width: min(760px, 100%);
  border-radius: 16px;
  border: 1px solid var(--border);
  background: var(--menu-bg);
  box-shadow: var(--menu-shadow);
  overflow: hidden;
}

.top {
  display: grid;
  grid-template-columns: 28px 1fr auto;
  gap: 10px;
  align-items: center;
  padding: 12px 14px;
  border-bottom: 1px solid var(--menu-border);
}

.icon {
  color: var(--text-muted);
  font-size: 16px;
}

.input {
  border: 0;
  outline: none;
  background: transparent;
  color: var(--text);
  font-size: 14px;
}

.kbd {
  font-size: 12px;
  color: var(--text-muted);
  border: 1px solid var(--menu-border);
  background: transparent;
  border-radius: 10px;
  padding: 4px 8px;
}

.list {
  max-height: 420px;
  overflow: auto;
}

.item {
  width: 100%;
  text-align: left;
  border: 0;
  background: transparent;
  color: var(--text);
  padding: 12px 14px;
  border-bottom: 1px solid var(--menu-border);
  cursor: pointer;
}

.item:hover {
  background: var(--menu-item-hover-bg);
}

.item.active {
  background: var(--menu-item-hover-bg);
}

.title {
  font-weight: 700;
  font-size: 13px;
}

.desc {
  margin-top: 4px;
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.45;
}

.empty {
  padding: 16px 14px;
  color: var(--text-muted);
}

.hint {
  margin-top: 10px;
}
</style>

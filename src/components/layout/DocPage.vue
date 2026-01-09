<script setup>
import DocsLayout from "./DocsLayout.vue";

defineProps({
  title: { type: String, required: true },
  description: { type: String, default: "" },
});
</script>

<template>
  <DocsLayout>
    <section>
      <header>
        <h1>{{ title }}</h1>
        <p v-if="description">{{ description }}</p>
      </header>

      <main>
        <slot />
      </main>
    </section>
  </DocsLayout>
</template>

<script setup>
import Container from "../ui/Container.vue";

defineProps({
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  kicker: { type: String, default: "" },
});
</script>

<template>
  <Container>
    <section style="padding: 42px 0 80px">
      <header v-if="title || description || kicker" style="margin-bottom: 22px">
        <div v-if="kicker" class="sa-kicker">{{ kicker }}</div>
        <h1
          v-if="title"
          style="margin: 14px 0 10px; font-size: 42px; letter-spacing: -0.02em"
        >
          {{ title }}
        </h1>
        <p
          v-if="description"
          style="
            margin: 0;
            max-width: 70ch;
            color: var(--text-muted);
            line-height: 1.6;
          "
        >
          {{ description }}
        </p>
      </header>

      <main>
        <slot />
      </main>
    </section>
  </Container>
</template>

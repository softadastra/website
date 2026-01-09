<script setup>
import Container from "../components/ui/Container.vue";
import { SITE } from "../app/config.js";
</script>

<template>
  <section>
    <Container>
      <p>{{ SITE.tagline }}</p>
      <h1>Make the web work everywhere.</h1>
      <p>{{ SITE.description }}</p>
    </Container>
  </section>
</template>

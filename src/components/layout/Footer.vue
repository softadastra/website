<script setup>
import Container from "../ui/Container.vue";
</script>

<template>
  <footer class="footer">
    <Container class="inner">
      <p class="muted">
        © {{ new Date().getFullYear() }} Softadastra — Offline-first ·
        Local-first · Resilient Web Runtime
      </p>
      <p class="muted">Apache-2.0</p>
    </Container>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 28px 0;
}
.inner {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
.muted {
  color: var(--muted);
  font-size: 13px;
  margin: 0;
}
</style>

<script setup>
import SitePage from "../../components/layout/SitePage.vue";
</script>

<template>
  <SitePage
    kicker="Company"
    title="About"
    description="Softadastra is rebuilding the web runtime to be resilient, offline-first, and local-first by default."
  >
    <div class="sa-card">
      <h3>Mission</h3>
      <p>
        Make web software reliable everywhere — with optional cloud, not
        required cloud.
      </p>
    </div>

    <h2 class="sa-sectionTitle">Focus</h2>
    <div class="sa-card">
      <ul class="sa-list">
        <li>Robust sync engine (WAL / outbox / retries)</li>
        <li>Secure P2P transport</li>
        <li>Edge caching + store-and-forward</li>
      </ul>
    </div>
  </SitePage>
</template>

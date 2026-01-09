<script setup>
import SitePage from "../../components/layout/SitePage.vue";
</script>

<template>
  <SitePage
    kicker="Product"
    title="Cnerium"
    description="Edge-friendly components designed for local-first systems and constrained environments."
  >
    <div class="sa-card">
      <h3>What it is</h3>
      <p>
        Cnerium focuses on building blocks for environments where latency,
        bandwidth, and stability are not guaranteed — optimized for edge nodes,
        cache layers, and store-and-forward workflows.
      </p>
    </div>

    <h2 class="sa-sectionTitle">Highlights</h2>
    <div class="sa-card">
      <ul class="sa-list">
        <li>Designed for edge & constrained networks</li>
        <li>Store-and-forward patterns</li>
        <li>Local-first caching and transport primitives</li>
        <li>Integrates naturally with Softadastra’s resilience model</li>
      </ul>

      <div class="sa-actions">
        <a class="sa-btn" href="/docs">Read docs</a>
        <a
          class="sa-btn ghost"
          href="https://github.com/softadastra"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  </SitePage>
</template>

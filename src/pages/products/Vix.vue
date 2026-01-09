<script setup>
import SitePage from "../../components/layout/SitePage.vue";
</script>

<template>
  <SitePage
    kicker="Product"
    title="Vix.cpp Runtime"
    description="Performance-first C++ runtime for resilient backends: HTTP/WebSocket, secure P2P transport, and offline-first sync building blocks."
  >
    <div class="sa-card">
      <h3>What it is</h3>
      <p>
        A modern C++ runtime designed to be fast, modular, and
        production-oriented.
      </p>
    </div>

    <h2 class="sa-sectionTitle">Highlights</h2>
    <div class="sa-card">
      <ul class="sa-list">
        <li>High-performance HTTP + WebSocket</li>
        <li>P2P transport layer (discovery, secure channels)</li>
        <li>Offline-first sync primitives (WAL / outbox)</li>
        <li>Designed for unstable networks</li>
      </ul>

      <div class="sa-actions">
        <a class="sa-btn" href="/docs">Read docs</a>
        <a
          class="sa-btn ghost"
          href="https://github.com/softadastra/softadastra"
          target="_blank"
          rel="noreferrer"
          >GitHub</a
        >
      </div>
    </div>
  </SitePage>
</template>

<script setup>
import SitePage from "../../components/layout/SitePage.vue";
</script>

<template>
  <SitePage
    kicker="Product"
    title="Ivi.php Framework"
    description="Simple. Modern. Expressive. A clean PHP framework for fast APIs and modular systems."
  >
    <div class="sa-card">
      <h3>What it is</h3>
      <p>
        Ivi.php is a modern PHP framework focused on clarity, speed, and
        developer joy. Minimal core, expressive routing, and modular
        architecture.
      </p>
    </div>

    <h2 class="sa-sectionTitle">Highlights</h2>
    <div class="sa-card">
      <ul class="sa-list">
        <li>Minimal core with clean structure</li>
        <li>Expressive routing and middleware</li>
        <li>API-first & modular apps</li>
        <li>Performance-oriented defaults</li>
      </ul>

      <div class="sa-actions">
        <a class="sa-btn" href="/docs">Read docs</a>
        <a
          class="sa-btn ghost"
          href="https://github.com/iviphp"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  </SitePage>
</template>

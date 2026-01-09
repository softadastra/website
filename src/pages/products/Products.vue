<script setup>
import SitePage from "../../components/layout/SitePage.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <SitePage
    kicker="Products"
    title="Built for resilient software"
    description="A minimal suite of runtimes, frameworks, and libraries optimized for performance and unstable networks."
  >
    <div class="sa-grid">
      <div class="sa-card">
        <h3>Vix.cpp Runtime</h3>
        <p>
          High-performance C++ runtime (HTTP/WebSocket) with P2P and
          offline-first primitives.
        </p>
        <RouterLink class="sa-link" to="/products/vix">Learn more →</RouterLink>
      </div>

      <div class="sa-card">
        <h3>Ivi.php Framework</h3>
        <p>
          Simple. Modern. Expressive. A clean PHP framework for APIs and modular
          systems.
        </p>
        <RouterLink class="sa-link" to="/products/ivi">Learn more →</RouterLink>
      </div>

      <div class="sa-card">
        <h3>Rix</h3>
        <p>
          Minimal modular header-only utilities to build modern C++ software
          faster.
        </p>
        <RouterLink class="sa-link" to="/products/rix">Learn more →</RouterLink>
      </div>

      <div class="sa-card">
        <h3>Cnerium</h3>
        <p>
          Edge-friendly components designed for local-first systems and
          constrained environments.
        </p>
        <RouterLink class="sa-link" to="/products/cnerium"
          >Learn more →</RouterLink
        >
      </div>
    </div>
  </SitePage>
</template>

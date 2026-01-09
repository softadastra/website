<script setup>
import SitePage from "../../components/layout/SitePage.vue";
</script>

<template>
  <SitePage
    kicker="Product"
    title="Rix"
    description="A minimal modular header-only C++ utility suite for lightweight modern development."
  >
    <div class="sa-card">
      <h3>What it is</h3>
      <p>
        Rix is a small “mini-std umbrella” of header-only building blocks (io,
        json, async, fs, net, log, etc.) designed to keep projects clean, fast,
        and easy to scale without heavy dependencies.
      </p>
    </div>

    <h2 class="sa-sectionTitle">Highlights</h2>
    <div class="sa-card">
      <ul class="sa-list">
        <li>Header-only, modular and lightweight</li>
        <li>Utilities for modern C++ projects (io/json/log/async/etc.)</li>
        <li>Designed to pair with Vix.cpp and Softadastra</li>
        <li>Clarity and ergonomics over complexity</li>
      </ul>

      <div class="sa-actions">
        <a class="sa-btn" href="/docs">Read docs</a>
        <a
          class="sa-btn ghost"
          href="https://github.com/vixcpp"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  </SitePage>
</template>

<script setup>
import SitePage from "../../components/layout/SitePage.vue";
</script>

<template>
  <SitePage
    title="Rix"
    description="Minimal, modular, header-only C++ utilities for modern lightweight development."
  >
    <!-- HERO -->
    <section class="rix-hero">
      <div class="rix-hero-inner">
        <img
          src="https://res.cloudinary.com/dwjbed2xb/image/upload/v1766830420/banniere_qfghep.png"
          alt="Rix — Minimal C++ Standard Library"
          class="rix-hero-image"
        />

        <div class="rix-hero-text">
          <h1>Rix</h1>
          <p class="rix-hero-subtitle">
            A minimal C++ standard library alternative designed for clarity,
            modularity, and performance.
          </p>

          <div class="sa-actions">
            <a
              class="sa-btn"
              href="https://github.com/rixcpp/rix"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
            <a class="sa-btn ghost" href="/docs"> Read documentation </a>
          </div>
        </div>
      </div>
    </section>

    <!-- WHAT IS -->
    <div class="sa-card">
      <h3>What is Rix?</h3>
      <p>
        <strong>Rix</strong> is a lightweight collection of essential C++20
        utilities designed as a clean and modern alternative to heavy standard
        abstractions.
      </p>
      <p>
        It acts as a <em>mini standard-library umbrella</em>, providing
        carefully designed building blocks that stay predictable, fast, and easy
        to integrate.
      </p>
    </div>

    <!-- WHY -->
    <h2 class="sa-sectionTitle">Why Rix exists</h2>
    <div class="sa-card">
      <p>
        Modern C++ projects often suffer from unnecessary complexity,
        overengineering, and fragmented utilities.
      </p>
      <p>
        Rix takes a different approach:
        <strong>clarity, modularity, and control</strong> come first.
      </p>

      <ul class="sa-list">
        <li>No heavy dependencies</li>
        <li>No runtime magic</li>
        <li>No monolithic design</li>
      </ul>
    </div>

    <!-- HIGHLIGHTS -->
    <h2 class="sa-sectionTitle">Core highlights</h2>
    <div class="sa-grid">
      <div class="sa-card">
        <h4>Header-only & modular</h4>
        <p>
          Each module can be used independently, with zero build friction and
          instant integration.
        </p>
      </div>

      <div class="sa-card">
        <h4>Modern C++20</h4>
        <p>
          Designed for C++20 and beyond, embracing modern language features
          without overengineering.
        </p>
      </div>

      <div class="sa-card">
        <h4>Lightweight by design</h4>
        <p>
          Ideal for embedded systems, high-performance runtimes, and
          resource-sensitive environments.
        </p>
      </div>

      <div class="sa-card">
        <h4>Ecosystem-friendly</h4>
        <p>
          Built to pair naturally with <strong>Vix.cpp</strong>
          and the Softadastra ecosystem.
        </p>
      </div>
    </div>

    <!-- CTA -->
    <h2 class="sa-sectionTitle">Get started</h2>
    <div class="sa-card">
      <p>
        Rix is open-source and designed to be adopted incrementally. Use only
        what you need — nothing more.
      </p>

      <div class="sa-actions">
        <a
          class="sa-btn"
          href="https://github.com/rixcpp/rix"
          target="_blank"
          rel="noreferrer"
        >
          GitHub repository
        </a>
      </div>
    </div>
  </SitePage>
</template>

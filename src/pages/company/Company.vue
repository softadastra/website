<script setup>
import SitePage from "../../components/layout/SitePage.vue";
</script>

<template>
  <SitePage
    kicker="Company"
    title="Softadastra"
    description="We build foundational runtime technology for the web to work everywhere — even without ideal conditions."
  >
    <div class="sa-grid">
      <div class="sa-card">
        <h3>About</h3>
        <p>What Softadastra is building and why it matters.</p>
        <a class="sa-link" href="/about">Learn more →</a>
      </div>

      <div class="sa-card">
        <h3>Careers</h3>
        <p>We’re currently hiring!</p>
        <a class="sa-link" href="/careers">View roles →</a>
      </div>

      <div class="sa-card">
        <h3>Culture</h3>
        <p>What we believe.</p>
        <a class="sa-link" href="/culture">Our values →</a>
      </div>

      <div class="sa-card">
        <h3>Contact us</h3>
        <p>Request a demo.</p>
        <a class="sa-link" href="/contact">Get in touch →</a>
      </div>
    </div>
  </SitePage>
</template>

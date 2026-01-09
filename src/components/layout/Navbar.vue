<script setup>
import Container from "../ui/Container.vue";
import NavLinkGroup from "./NavLinkGroup.vue";
import Icon from "../icons/Icons.vue";
import { SITE, NAV, LINKS } from "../../app/config.js";
</script>

<template>
  <header class="nav">
    <Container class="inner">
      <div class="left">
        <img class="logo" :src="SITE.logoUrl" :alt="SITE.name" />
        <span class="brand">{{ SITE.name }}</span>
      </div>

      <nav class="links">
        <NavLinkGroup v-for="(group, idx) in NAV" :key="idx" :group="group" />

        <a class="cta" :href="LINKS.github" target="_blank" rel="noreferrer">
          <Icon name="github" />
          <span>GitHub</span>
        </a>
      </nav>
    </Container>
  </header>
</template>

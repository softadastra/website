<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterView } from "vue-router";

import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";
import SearchPalette from "./components/ui/SearchPalette.vue";

const searchOpen = ref(false);
const searchRef = ref(null);

function openSearch() {
  searchOpen.value = true;
  requestAnimationFrame(() => searchRef.value?.focusInput?.());
}

function closeSearch() {
  searchOpen.value = false;
}

function onGlobalKey(e) {
  const isK = (e.key || "").toLowerCase() === "k";
  if ((e.metaKey || e.ctrlKey) && isK) {
    e.preventDefault();
    openSearch();
  }
}

onMounted(() => window.addEventListener("keydown", onGlobalKey));
onBeforeUnmount(() => window.removeEventListener("keydown", onGlobalKey));
</script>

<template>
  <Navbar :onOpenSearch="openSearch" />

  <main>
    <RouterView />
  </main>

  <Footer />

  <SearchPalette ref="searchRef" :open="searchOpen" @close="closeSearch" />
</template>

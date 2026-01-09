<script setup>
import Dropdown from "../ui/Dropdown.vue";
import { RouterLink } from "vue-router";

defineProps({
  group: { type: Object, required: true },
});
</script>

<template>
  <Dropdown
    v-if="Array.isArray(group.items) && group.items.length > 0"
    :label="group.label"
    :items="group.items"
  />
  <RouterLink v-else :to="group.href">
    {{ group.label }}
  </RouterLink>
</template>

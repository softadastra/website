<script setup>
import Dropdown from "../ui/Dropdown.vue";

const props = defineProps({
  group: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <!-- Si le groupe a des items => dropdown -->
  <Dropdown
    v-if="Array.isArray(group.items) && group.items.length > 0"
    :label="group.label"
    :items="group.items"
  />

  <!-- Sinon => lien direct -->
  <a v-else :href="group.href || '#'">
    {{ group.label }}
  </a>
</template>

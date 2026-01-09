<template>
  <div class="container"><slot /></div>
</template>

<style scoped>
.container {
  width: min(100% - 32px, var(--max));
  margin: 0 auto;
}
</style>

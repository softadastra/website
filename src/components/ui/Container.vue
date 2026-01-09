<template>
  <div class="container"><slot /></div>
</template>

<style scoped>
.container {
  width: min(100% - 32px, var(--max));
  margin: 0 auto;
}

@media (max-width: 520px) {
  .container {
    width: min(100% - 20px, var(--max));
  }
}
</style>

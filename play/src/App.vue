<script setup lang="ts"></script>

<template>
  <header>element simple</header>

  <main>
    hello world!
    <es-icon>111</es-icon>
    <es-text> default</es-text>
    <es-text type="primary" truncated> Self element set width 100px</es-text>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

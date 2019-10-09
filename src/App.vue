<template>
  <div class="px-4">
    <nav class="py-4">
      <router-link class="px-4" to="/">Principal</router-link>
      <router-link class="px-4" to="/products">Produtos</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style src="./assets/main.css"></style>

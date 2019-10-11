<template>
  <div class="px-4">
    <nav v-if="logged" class="py-4">
      <router-link class="px-4" to="/">
        Principal
      </router-link>
      <router-link class="px-4" to="/products">
        Produtos
      </router-link>
    </nav>
    <main class="mt-4">
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["logged"])
  }
};
</script>

<style src="./assets/main.css"></style>

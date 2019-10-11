<template>
  <div class="nes-container with-title">
    <p class="title">
      Bem-vindo ao seu Inventário!
    </p>
    <button v-if="!loaded" @click="showChart()" class="nes-btn is-primary">
      Mostrar
    </button>
    <button v-else @click="hideChart()" class="nes-btn is-warning">
      Esconder
    </button>

    <chart-bar
      v-if="loaded"
      :chart-data="chartData"
      :options="options"
      :height="100"
      :width="300"
    />
  </div>
</template>

<script>
import store from "@/store";
import { mapActions, mapGetters } from "vuex";
import Bar from "@/components/Charts/Bar";

export default {
  name: "home",

  beforeRouteEnter(to, from, next) {
    if (!store.getters.logged) next("/login");
    else next();
  },

  beforeRouteLeave(to, from, next) {
    store.dispatch("setLoaded", false);
    next();
  },

  components: {
    "chart-bar": Bar
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters(["loaded", "options", "chartData", "logged"])
  },

  created() {
    this.fetchProducts();
  },

  methods: {
    ...mapActions(["fetchProducts", "setLoaded"]),

    showChart() {
      this.setLoaded(true);
    },

    hideChart() {
      this.setLoaded(false);
    }
  }
};
</script>

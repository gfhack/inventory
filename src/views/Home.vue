<template>
  <div class="nes-container with-title">
    <p class="title">
      Bem-vindo ao seu Inventário!
    </p>
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
import { mapActions, mapGetters } from "vuex";
import Bar from "@/components/Charts/Bar";

export default {
  name: "home",

  components: {
    "chart-bar": Bar
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters(["loaded", "options", "chartData"])
  },

  created() {
    this.fetchProducts();
  },

  activated() {
    this.setLoaded(true);
  },

  methods: {
    ...mapActions(["fetchProducts", "setLoaded"])
  }
};
</script>

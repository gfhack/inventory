<template>
  <v-row justify="center"></v-row>
</template>

<script>
import store from "@/store";
import { mapActions, mapGetters } from "vuex";

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

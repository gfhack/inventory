<template>
  <v-row justify="center">
    <ProductTable />
    <ProductForm />
    <ProductChart />
  </v-row>
</template>

<script>
import store from "@/store";
import { mapActions, mapGetters } from "vuex";

import ProductForm from "@/components/Product/Form";
import ProductChart from "@/components/Product/Chart";
import ProductTable from "@/components/Product/Table";

export default {
  name: "product",

  components: {
    ProductForm,
    ProductChart,
    ProductTable
  },

  beforeRouteEnter(to, from, next) {
    if (!store.getters.logged) next("/");
    else next();
  },

  computed: {
    ...mapGetters(["logged"])
  },

  mounted() {
    this.fetchProducts();
  },

  methods: {
    ...mapActions(["fetchProducts"])
  }
};
</script>

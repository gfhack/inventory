<template>
  <v-row justify="center">
    <ProductForm />

    <ProductTable />
  </v-row>
</template>

<script>
import store from "@/store";
import { mapActions, mapGetters } from "vuex";

import ProductForm from "@/components/Product/Form";
import ProductTable from "@/components/Product/Table";

export default {
  name: "product",

  components: {
    ProductForm,
    ProductTable
  },

  beforeRouteEnter(to, from, next) {
    if (!store.getters.logged) next("/login");
    else next();
  },

  data() {
    return {
      title: "",
      amount: null
    };
  },

  computed: {
    ...mapGetters(["logged", "products"])
  },

  mounted() {
    this.fetchProducts();
  },

  methods: {
    ...mapActions(["fetchProducts", "storeProduct", "setLoaded"]),

    saveProduct() {
      this.storeProduct({
        title: this.title,
        amount: this.amount
      });
    }
  }
};
</script>

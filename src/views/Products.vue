<template>
  <div class="nes-container with-title">
    <p class="title">
      Produtos!
    </p>

    <div class="nes-container mb-4">
      <div class="nes-field">
        <input
          v-model="title"
          id="name_field"
          type="text"
          class="nes-input"
          placeholder="Nome do produto"
        />
      </div>

      <div class="mt-4">
        <input
          v-model="amount"
          id="name_field"
          type="number"
          class="nes-input"
          placeholder="Quantidade"
        />
      </div>

      <div class="mt-4">
        <button @click="saveProduct()" type="button" class="nes-btn is-success">
          Comprar!
        </button>
      </div>
    </div>

    <product-list />
  </div>
</template>

<script>
import store from "@/store";
import { mapActions, mapGetters } from "vuex";
import List from "@/components/List/List";

export default {
  name: "product",

  beforeRouteEnter(to, from, next) {
    if (!store.getters.logged) next("/login");
    else next();
  },

  components: {
    "product-list": List
  },

  data() {
    return {
      title: "",
      amount: null
    };
  },

  computed: {
    ...mapGetters(["logged"])
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

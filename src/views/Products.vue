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
import axios from "axios";
import { mapActions } from "vuex";
import List from "@/components/List/List";

export default {
  name: "product",

  components: {
    "product-list": List
  },

  data() {
    return {
      title: "",
      amount: null
    };
  },

  methods: {
    ...mapActions(["fetchProducts", "setLoaded"]),

    saveProduct() {
      axios
        .post("http://localhost:3000/products", {
          title: this.title,
          amount: this.amount
        })
        .then(() => {
          this.setLoaded(false);
          this.fetchProducts();
        });
    }
  }
};
</script>

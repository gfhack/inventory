<template lang="html">
  <li class="flex items-stretch h-16">
    <div class="flex-1 px-4 py-2 m-2">
      {{ product.title }}
    </div>

    <div class="m-2">
      <button @click="add()" class="nes-btn float-right">
        {{ product.amount }}
      </button>
    </div>
    <div class="m-2">
      <button @click="destroy()" class="nes-btn is-error float-right">
        X
      </button>
    </div>
  </li>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "products-list-tem",

  props: {
    product: {
      type: Object,
      required: true
    }
  },

  methods: {
    ...mapActions(["destroyProduct"]),

    add() {
      this.product.amount++;
      axios.put(`http://localhost:3000/products/${this.product.id}`, {
        ...this.product
      });
    },

    destroy() {
      this.destroyProduct(this.product);
    }
  }
};
</script>

<style lang="css" scoped></style>

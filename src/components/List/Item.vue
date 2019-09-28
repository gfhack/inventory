<template lang="html">
  <li>
    {{ product.title }}
    <button @click="add()" class="nes-btn">
      {{ product.amount }}
    </button>
  </li>
</template>

<script>
import axios from "axios";

export default {
  name: "products-list-tem",

  props: {
    product: {
      type: Object,
      required: true
    }
  },

  methods: {
    add() {
      this.product.amount++;
      axios.put(`http://localhost:3000/products/${this.product.id}`, {
        ...this.product
      });
    }
  }
};
</script>

<style lang="css" scoped></style>

<template lang="html">
  <li class="flex items-stretch h-16">
    <div class="flex-1 px-4 py-2 m-2">
      {{ product.title }}
    </div>

    <div class="flex-1 m-2">
      <button @click="add()" class="nes-btn float-right">
        {{ product.amount }}
      </button>
    </div>
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

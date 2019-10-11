<template lang="html">
  <div class="nes-container with-title">
    <ul class="nes-list is-disc">
      <product-list-tem
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      >
      </product-list-tem>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Item from "@/components/List/Item";

export default {
  name: "products-list",

  components: {
    "product-list-tem": Item
  },

  computed: {
    ...mapGetters(["products"])
  }
};
</script>

<style lang="css" scoped></style>

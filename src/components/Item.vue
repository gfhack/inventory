<template lang="html">
  <li>
    {{ product.title }}
  </li>
</template>

<script>
export default {
  name: "products-list-tem",

  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="css" scoped></style>

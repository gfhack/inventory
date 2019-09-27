<template>
  <div class="nes-container with-title">
    <p class="title">
      Bem-vindo ao seu Inventário!
    </p>
    <p>
      Veja abaixo seus itens...
    </p>
    <product-list />
  </div>
</template>

<script>
import List from "@/components/List";

export default {
  name: "home",

  components: {
    "product-list": List
  }
};
</script>

<template>
  <div class="nes-container with-title">
    <p class="title">
      Produtos!
    </p>

    <div class="nes-container mb-4">
      <div class="nes-field">
        <input
          id="name_field"
          type="text"
          class="nes-input"
          placeholder="Nome do produto"
        />
      </div>

      <div class="mt-4">
        <input
          id="name_field"
          type="number"
          class="nes-input"
          placeholder="Quantidade"
        />
      </div>

      <div class="mt-4">
        <button type="button" class="nes-btn is-success">
          Comprar!
        </button>
      </div>
    </div>

    <product-list />
  </div>
</template>

<script>
import List from "@/components/List/List";

export default {
  name: "product",

  components: {
    "product-list": List
  }
};
</script>

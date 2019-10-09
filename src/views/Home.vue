<template>
  <div class="nes-container with-title">
    <p class="title">
      Bem-vindo ao seu Inventário!
    </p>
    <chart-bar
      v-if="loaded"
      :chart-data="chartData"
      :options="options"
      :height="100"
      :width="300"
    />
  </div>
</template>

<script>
import axios from "axios";
import Bar from "@/components/Charts/Bar";

export default {
  name: "home",

  components: {
    "chart-bar": Bar
  },

  data() {
    return {
      loaded: false,
      options: {},
      chartData: {}
    };
  },

  created() {
    axios
      .get("http://localhost:3000/products")
      .then(response => {
        this.chartData.labels = response.data.map(product => {
          return product.title;
        });

        this.chartData.datasets = [
          {
            data: response.data.map(product => product.amount),
            label: "Produtos",
            backgroundColor: "#f87979"
          }
        ];
      })
      .finally(() => {
        this.loaded = true;
      });
  }
};
</script>

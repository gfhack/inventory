<template>
  <v-col cols="12" sm="10">
    <v-card class="elevation-12" shaped>
      <v-card-text>
        <apexchart
          height="200"
          type="bar"
          :options="options"
          :series="series"
        ></apexchart>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["products"]),

    options() {
      return {
        chart: {
          id: "vuechart-products"
        },
        xaxis: {
          categories: this.products.map(product => product.title)
        }
      };
    },

    series() {
      return [
        {
          name: "Quantidade de produtos comprados",
          data: this.products.map(product => product.amount)
        }
      ];
    }
  }
};
</script>

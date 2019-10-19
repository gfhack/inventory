<template>
  <v-col cols="12" sm="6" md="8">
    <v-card class="elevation-12" shaped>
      <v-card-text>
        <v-expansion-panels>
          <v-expansion-panel v-for="(product, i) in products" :key="i">
            <v-expansion-panel-header>
              {{ product.title }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              Quantidade comprada: {{ product.amount }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
      <v-card-actions></v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "user-details",

  computed: {
    ...mapGetters(["products"])
  }
};
</script>

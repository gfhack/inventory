<template>
  <v-col cols="12" sm="8" md="6">
    <v-card class="elevation-12" shaped>
      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th></th>
                <th class="text-left">
                  Nome
                </th>
                <th class="text-left">
                  Quantidade
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in products" :key="item.id">
                <td>
                  <v-icon>mdi-basket</v-icon>
                </td>
                <td>
                  {{ item.title }}
                </td>
                <td>
                  {{ item.amount }}
                </td>
                <td>
                  <v-btn
                    @click="destroyProduct(item)"
                    rounded
                    color="error"
                    dark
                  >
                    <v-icon>mdi-trash-can-outline</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["products"])
  },

  methods: {
    ...mapActions(["destroyProduct"])
  }
};
</script>

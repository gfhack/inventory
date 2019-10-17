<template>
  <v-col cols="12" sm="8" md="4">
    <v-card class="elevation-12">
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="title"
            label="Título"
            name="title"
            type="text"
          ></v-text-field>

          <v-text-field
            v-model="amount"
            label="Quantidade"
            name="number"
            type="number"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="saveProduct()" color="primary">
          Cadastrar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      title: "",
      amount: null
    };
  },

  methods: {
    ...mapActions(["storeProduct"]),

    saveProduct() {
      this.storeProduct({
        title: this.title,
        amount: this.amount
      });
    }
  }
};
</script>

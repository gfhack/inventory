<template>
  <v-col cols="12" sm="8" md="4">
    <v-card class="elevation-12" shaped>
      <v-card-text>
        <v-form v-model="valid">
          <v-text-field
            v-model="title"
            label="Título"
            name="title"
            :rules="ruleText"
            type="text"
          ></v-text-field>

          <v-text-field
            v-model="amount"
            label="Quantidade"
            name="number"
            type="number"
            :rules="ruleNumber"
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
      amount: null,
      valid: true,
      ruleText: [v => !!v || "Preenchimento obrigatório"],
      ruleNumber: [
        v => !!v || "Preenchimento obrigatório",
        value => {
          const pattern = /[1-9]+/;
          return pattern.test(value) || "Deve ser maior que zero";
        }
      ]
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

<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>
            Acesso
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="name"
              label="Usuário"
              name="login"
              type="text"
            ></v-text-field>

            <v-text-field
              v-model="password"
              id="password"
              label="Senha"
              name="password"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="login({ name, password })" color="primary">
            Entrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "login",

  beforeRouteEnter(to, from, next) {
    if (to.logged) next("/");
    else next();
  },

  data() {
    return {
      name: "",
      password: ""
    };
  },

  methods: {
    ...mapActions(["login"])
  }
};
</script>

<template>
  <div class="nes-container with-title">
    <p class="title">
      Login
    </p>

    <div class="">
      <div class="nes-field">
        <label for="user">
          Usuário
        </label>
        <input v-model="name" type="text" id="user" class="nes-input" />
      </div>

      <div class="nes-field">
        <label for="name_field">
          Senha
        </label>
        <input
          v-model="password"
          type="password"
          id="password"
          class="nes-input"
        />
      </div>

      <div class="mt-3">
        <button
          @click="login({ name, password })"
          type="button"
          class="nes-btn is-success"
        >
          Entrar
        </button>
      </div>
    </div>
  </div>
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

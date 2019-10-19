<template>
  <v-app>
    <v-navigation-drawer v-if="logged" v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item :to="{ name: 'profile' }" link>
          <v-list-item-action>
            <v-icon>
              mdi-face
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Perfil
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{ name: 'products' }" link>
          <v-list-item-action>
            <v-icon>
              mdi-shopping
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Produtos
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{ name: 'about' }" link>
          <v-list-item-action>
            <v-icon>
              mdi-information-outline
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Sobre
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="logout()">
          <v-list-item-action>
            <v-icon>
              mdi-logout-variant
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Sair
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left dense>
      <v-app-bar-nav-icon
        v-if="logged"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">
          INVENTORY
        </span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-img
        src="@/assets/1920-640.jpg"
        gradient="rgba(255, 255, 255, .0), rgba(255, 255, 255, 1)"
      >
        <v-container fluid>
          <router-view />
        </v-container>
      </v-img>
    </v-content>

    <v-footer app>
      <span>&copy;2019 <strong>HACK</strong>, Guilherme F.</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",

  computed: {
    ...mapGetters(["logged"])
  },

  data: () => ({
    drawer: false
  }),

  methods: {
    ...mapActions(["logout"])
  }
};
</script>

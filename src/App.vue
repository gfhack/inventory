<template>
  <v-app>
    <v-navigation-drawer v-if="logged" v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item @click="">
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
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon v-if="logged" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">
          INVENTORY
        </span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Login from './views/Login';

export default {
  name: 'App',

  components: {
    Login,
  },

  computed: {
    ...mapGetters(["logged"])
  },

  data: () => ({
    drawer: false,
  }),
};
</script>

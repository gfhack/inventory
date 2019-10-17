<template>
  <v-row justify="center">
    <user-picture />
    <user-details />
  </v-row>
</template>

<script>
import store from "@/store";
import UserDetails from "@/components/Profile/Details";
import UserPicture from "@/components/Profile/Picture";

export default {
  name: "profile",

  components: {
    UserPicture,
    UserDetails
  },

  beforeRouteEnter(to, from, next) {
    if (!store.getters.logged) next("/");
    else next();
  }
};
</script>

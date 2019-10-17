<template>
  <v-col cols="12" sm="6" md="4">
    <v-card class="elevation-12">
      <v-card-text>
        <v-img
          src="@/assets/crews.png"
          aspect-ratio="1"
          class="grey lighten-2"
          max-width="500"
          max-height="300"
        >
          <v-row align="end" class="lightbox white--text pa-2 fill-height">
            <v-col>
              <div class="body-1">{{ user.name }}</div>
            </v-col>
          </v-row>
        </v-img>
      </v-card-text>
      <v-card-actions></v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "user-picture",

  computed: {
    ...mapGetters(["user"])
  }
};
</script>

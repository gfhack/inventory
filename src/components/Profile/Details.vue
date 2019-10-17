<template>
  <v-col cols="12" sm="6" md="8">
    <v-card class="elevation-12">
      <v-card-text>
        <v-expansion-panels>
          <v-expansion-panel v-for="(item, i) in 5" :key="i">
            <v-expansion-panel-header>Item</v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
      <v-card-actions></v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "user-details"
};
</script>

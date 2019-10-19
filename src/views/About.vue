<template>
  <v-row justify="center">
    <v-col cols="12" sm="6" md="8">
      <v-card class="elevation-12" shaped>
        <v-card-text>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Sobre
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                Insira os produtos que anda comprando, veja e compare onde seu
                dinheiro está sendo gasto.
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>
                Vantagens
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list-item-content>
                  <v-list-item-title>
                    Fácil de usar, basta cadastrar o produto e a quantidade.
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                  <v-list-item-title>
                    Fácil de visualizar, gráfico permite comparar os produtos
                    comprados.
                  </v-list-item-title>
                </v-list-item-content>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>
                Desvantagens
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list-item-content>
                  <v-list-item-title>
                    Poucas funcionalidades.
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                  <v-list-item-title>
                    Não é integrado com cartões de crédito.
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                  <v-list-item-title>
                    Preços não são considerados.
                  </v-list-item-title>
                </v-list-item-content>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>
                Concorrentes
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <a href="/Concorrentes.pdf" download target="_blank">
                  Compare com os concorrentes
                </a>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import store from "@/store";

export default {
  name: "about",

  beforeRouteEnter(to, from, next) {
    if (!store.getters.logged) next("/");
    else next();
  }
};
</script>

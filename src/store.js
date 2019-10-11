import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loaded: false,
    options: {},
    products: [],
    chartData: {
      labels: [],
      datasets: []
    }
  },

  getters: {
    loaded: state => state.loaded,
    options: state => state.options,
    products: state => state.products,
    chartData: state => state.chartData
  },

  mutations: {
    setLoaded(state, loaded) {
      state.loaded = loaded;
    },

    setProducts(state, products) {
      state.products = products;
    },

    setChartData(state, products) {
      state.chartData.labels = products.map(product => {
        return product.title;
      });

      state.chartData.datasets = [
        {
          data: products.map(product => product.amount),
          label: "Produtos",
          backgroundColor: "#f87979"
        }
      ];
    }
  },

  actions: {
    setLoaded(context, loaded) {
      context.commit("setLoaded", loaded);
    },

    fetchProducts(context) {
      axios.get("http://localhost:3000/products").then(response => {
        context.commit("setProducts", response.data);
        context.commit("setChartData", response.data);
      });
    }
  }
});

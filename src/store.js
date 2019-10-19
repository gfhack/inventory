import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loaded: false,
    user: null,
    options: {},
    products: [],
    chartData: {
      labels: [],
      datasets: []
    }
  },

  getters: {
    user: state => state.user,
    logged: state => !!state.user,
    loaded: state => state.loaded,
    options: state => state.options,
    products: state => state.products,
    chartData: state => state.chartData
  },

  mutations: {
    login(state, user) {
      state.user = user;
    },

    logout(state) {
      state.user = null;
    },

    setLoaded(state, loaded) {
      state.loaded = loaded;
    },

    setProducts(state, products) {
      state.products = products;
    },

    destroyProduct(state, destroyed) {
      state.products = state.products.filter(
        product => product.id !== destroyed.id
      );
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
    logout(context) {
      context.commit("logout");
      router.push("/");
    },

    login(context, payload) {
      axios.get("http://localhost:3000/users").then(response => {
        const user = response.data.find(
          user =>
            user.name === payload.name && user.password === payload.password
        );

        if (user) {
          context.commit("login", user);
          router.push("/products");
        }
      });
    },

    storeProduct(context, product) {
      axios.post("http://localhost:3000/products", product).then(() => {
        context.commit("setLoaded", false);
        context.dispatch("fetchProducts");
      });
    },

    destroyProduct(context, product) {
      context.commit("destroyProduct", product);
      axios.delete(`http://localhost:3000/products/${product.id}`);
    },

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

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, robot) {
      state.cart.push(robot);
    },
  },
});

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogs: [
      { name: "lucky", breed: "poodle", age: 1 },
      { name: "pochy", breed: "dalmatian", age: 2 },
      { name: "blackie", breed: "poodle", age: 4 },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});

import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    newUser: [],
  },
  mutations: {
    ADDUSERS(state, payload) {
      state.newUser = payload;
    },
    USERS(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    getUsers(context) {
      axios
        .get("https://61b8f28f38f69a0017ce5e38.mockapi.io/form_users")
        .then((data) => {
          context.commit("USERS", data.data);
        });
    },
    addUser(context, payload) {
      axios
        .post("https://61b8f28f38f69a0017ce5e38.mockapi.io/form_users", payload)
        .then((result) => {
          context.commit("ADDUSERS", result.data);

          console.log(payload);
          context.dispatch("getUsers");
        });
    },
  },
  getters: {
    users: (state) => state.users,
  },
  modules: {},
});

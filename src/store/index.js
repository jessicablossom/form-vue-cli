import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    newUser: {
      inputName: "",
      inputEmail: "",
      inputAge: "",
      inputCountry: "",
      inputGender: "",
    },
  },
  mutations: {
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
    addUser() {
      axios
        .post(
          "https://61b8f28f38f69a0017ce5e38.mockapi.io/form_users",
          this.newUser
        )
        .then((data) => {
          return this.getUsers(data);
        });
    },
  },
  getters: {
    users: (state) => state.users,
  },
  modules: {},
});

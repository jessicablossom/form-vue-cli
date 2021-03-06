import Vue from "vue";
import App from "./App.vue";
import VueForm from "vue-form";
import vuetify from "./plugins/vuetify";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import store from './store'

Vue.use(VueForm);
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  render: (h) => h(App)
}).$mount("#app");

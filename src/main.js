import Vue from "vue";
import App from "./App.vue";
import VueForm from "vue-form";

Vue.use(VueForm);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

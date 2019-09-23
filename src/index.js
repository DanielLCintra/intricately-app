import "Styles/main.scss";
import "Styles/header.scss";
import Vue from "vue";
import store from "./store/index";
import router from "./router/index";
import Home from "Pages/Home/HomeIndex.vue";

new Vue({
  router,
  store,
  render: h => h(Home)
}).$mount("#app");

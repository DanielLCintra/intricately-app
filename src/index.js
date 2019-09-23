import "Styles/main.scss";
import "Styles/header.scss";
import "Styles/sidebar.scss";
import "Styles/footer.scss";
import "Styles/breadcrumb.scss";
import "Styles/company-page.scss";
import "Styles/company-data.scss";
import Vue from "vue";
import Home from "Pages/Home/HomeIndex.vue";
import Vuelidate from "vuelidate";
import VueMask from "v-mask";
import router from "./router/index";
import store from "./store/index";

Vue.use(VueMask);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(Home)
}).$mount("#app");

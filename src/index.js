import "Styles/main.scss";
import "Styles/header.scss";
import "Styles/sidebar.scss";
import "Styles/footer.scss";
import "Styles/breadcrumb.scss";
import "Styles/company-page.scss";
import "Styles/company-data.scss";
import Vue from "vue";
import store from "./store/index";
import router from "./router/index";
import Home from "Pages/Home/HomeIndex.vue";

new Vue({
  router,
  store,
  render: h => h(Home)
}).$mount("#app");

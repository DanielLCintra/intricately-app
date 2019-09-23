import Vue from "vue";
import Router from "vue-router";
import CompanyPage from "../pages/CompanyPage/CompanyPageIndex.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "company-page.index",
      component: CompanyPage
    }
  ]
});

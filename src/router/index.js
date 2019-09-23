import Vue from "vue";
import Router from "vue-router";
import CompanyPage from "../pages/CompanyPage/CompanyPageIndex.vue";
import CompanyTable from "../pages/CompanyTable/CompanyTableIndex.vue";
import CompanyData from "../pages/CompanyData/CompanyDataIndex.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "company-page.index",
      component: CompanyPage
    },
    {
      path: "/company-table",
      name: "company-table.index",
      component: CompanyTable
    },
    {
      path: "/company-data",
      name: "company-data.index",
      component: CompanyData
    }
  ]
});

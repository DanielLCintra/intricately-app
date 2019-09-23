import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
    currentPage: {
      title: "Company Page",
      link: "company-page"
    }
  },

  mutations: {
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page;
    }
  },

  actions: {
    setCurrentPage({ commit }, page) {
      commit("SET_CURRENT_PAGE", page);
    }
  }
});

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
    currentPage: {
      title: "Company Page",
      link: "company-page"
    },
    modal: false,
    notes: []
  },

  mutations: {
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page;
    },

    TOGGLE_MODAL(state) {
      state.modal = !state.modal;
    },

    ADD_NOTE(state, note) {
      state.notes.push(note);
    }
  },

  actions: {
    setCurrentPage({ commit }, page) {
      commit("SET_CURRENT_PAGE", page);
    },

    toggleModal({ commit }, status) {
      commit("TOGGLE_MODAL");
    },

    addNote({ commit }, note) {
      commit("ADD_NOTE", note);
    }
  }
});

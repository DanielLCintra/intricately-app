<template>
  <div>
    <CompanyDataModal
      :show="modal"
      @close-modal="toggleModal"
    />

    <Header />

    <div class="main-warpper">
      <Breadcrumb />

      <div class="wrapper">
        <Sidebar />

        <router-view />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Footer from 'Components/Footer.vue'
import Header from 'Components/Header.vue'
import Sidebar from 'Components/Sidebar.vue'
import Breadcrumb from 'Components/Breadcrumb.vue'
import CompanyDataModal from 'Pages/CompanyData/CompanyDataModal.vue'

export default {
  name: 'Home',

  components: {
    Footer,
    Header,
    Sidebar,
    Breadcrumb,
    CompanyDataModal
  },

  computed: {
    ...mapState(['modal'])
  },

  methods: {
    ...mapActions(['toggleModal'])
  }
}
</script>

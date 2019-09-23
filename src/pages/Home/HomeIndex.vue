<template>
  <div>
    <Header />

    <div class="breadcrumb">
      Breadcrumb
    </div>

    <div class="wrapper">
      <sidebar />

      <section class="dashboard">
        <h1>Microsoft</h1>
      </section>
    </div>

    <Footer />

  </div>
</template>

<script>
import Footer from "Components/Footer.vue";
import Header from "Components/Header.vue";
import Sidebar from "Components/Sidebar.vue";

export default {
  name: "Home",

  components: {
    Footer,
    Header,
    Sidebar
  }
};
</script>

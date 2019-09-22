<template>
  <div>
    <header />

    <div class="breadcrumb">
      Breadcrumb
    </div>

    <div class="warpper">
      <sidebar />

      <section class="dashboard">
        <h1>Microsoft</h1>
      </section>
    </div>

    <footer />

  </div>
</template>

<script>
import Footer from "../../components/Footer.vue";
import Header from "../../components/Header.vue";
import Sidebar from "../../components/Sidebar.vue";

export default {
  name: "Home",

  components: {
    Footer,
    Header,
    Sidebar
  }
};
</script>

<template>
  <div class="breadcrumb">
    <ul>
      <li>Home</li>
      <li>/</li>
      <li>{{ currentPage.title }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Breadcrumb',

  computed: {
    ...mapState(['currentPage'])
  }
}
</script>

<style>
</style>

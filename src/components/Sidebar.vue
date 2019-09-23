<template>
  <menu class="menu-sidebar">
    <ul>
      <li
        v-for="(item, key) in items"
        :key="key"
        :class="{'active' : currentPage.title === item.title}"
        @click="navigate(item)"
      >
        {{ item.title }}
      </li>
    </ul>
  </menu>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  Name: 'Sidebar',

  data: () => ({
    items: [
      {
        title: 'Company Data',
        link: 'company-data'
      },
      {
        title: 'Company Table',
        link: 'company-table'
      },
      {
        title: 'Company Page',
        link: 'company-page'
      }
    ]
  }),

  computed: {
    ...mapState(['currentPage'])
  },

  methods: {
    ...mapActions(['setCurrentPage']),

    navigate(page) {
      if (page.link === 'company-page') {
        this.$router.push('/')
      } else {
        this.$router.push(`/${page.link}`)
      }
      this.setCurrentPage(page)
    }
  }
}
</script>

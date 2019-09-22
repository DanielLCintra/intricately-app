<template>
  <menu>
    <ul>
      <li
        v-for="(item, key) in items"
        :key="key"
      >
        {{ item.title }}
      </li>
    </ul>
  </menu>
</template>

<script>
export default {
  Name: "Sidebar",

  data: () => ({
    items: [
      {
        title: "Company Data",
        link: ""
      },
      {
        title: "Company Table",
        link: ""
      },
      {
        title: "Company Page",
        link: ""
      }
    ]
  })
};
</script>

<style>
</style>
<template>
  <header>
    <div class="logo">
      <img
        src="../assets/logo-pink.png"
        alt="Logo"
      >
    </div>

    <div class="tools-container">
      <div class="search">
        <input
          type="text"
          placeholder="Search Companies"
        >

        <img
          class="search__icon"
          src="src/assets/search@2x.png"
        >
      </div>

      <p class="divider-text">
        OR
      </p>

      <div class="smart-list">
        <button>NEW SMARTLIST</button>
      </div>
    </div>

    <menu>
      <ul>
        <li>PROSPECTS <img src="src/assets/arrow-down.png"></li>
        <li>ALERT <img src="src/assets/arrow-down.png"></li>
        <li>LEARN <img src="src/assets/arrow-down.png"></li>
      </ul>
    </menu>

    <div class="avatars">
      <div>
        <img
          src="src/assets/default.png"
          alt="avatar"
        >
      </div>

      <div>
        <img
          src="src/assets/group.png"
          alt="avatar"
        >
        <img src="src/assets/arrow-down.png">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
</style>

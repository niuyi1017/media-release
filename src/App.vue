<template>
  <div id="app">
    <div class="layout">
      <div class="top-nav"></div>
      <div class="bottom-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    // HelloWorld,
  },
}
</script>

<style lang="stylus" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .layout{
    height 100vh
    width 100vw
    background #ccc
  }
}
</style>

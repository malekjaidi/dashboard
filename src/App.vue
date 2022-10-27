<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="col-md-2">
    <side-bar/>
  </div>
  <div class="col-md-10">
    <dash-board/>
  </div>
  <!-- <Dashboard /> -->
</template>

<script>
// import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    // Dashboard
    // Sidebar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
}
</style>

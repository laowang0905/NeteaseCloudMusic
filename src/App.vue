<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
  },
  mounted() {
    this.$store.dispatch('login/getUserInfo')
  }
}
</script>

<style>

</style>

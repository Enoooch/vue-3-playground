<template lang="pug">
img(alt="Vue logo" src="./assets/logo.png")
nav
  router-link(to="/ElementPlus") ElementPlus
  router-link(to="/PrimeVue") PrimeVue
  router-link(to="/OrugaUI") OrugaUI
  router-link(to="/LifeCycle") LifeCycle
  router-link(to="/CompositionAPI") CompositionAPI
  router-link(to="/TodoList") TodoList
router-view
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup () {},
  components: {}
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav a {
  padding: 5px 10px;
}
</style>
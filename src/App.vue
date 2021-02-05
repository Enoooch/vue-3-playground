<template lang="pug">
img(alt="Vue logo" src="./assets/logo.png")
LifeCycle
CompositionAPI(msg="Hello Vue 3 + TypeScript + Vite" title="" @login="login")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LifeCycle from './components/LifeCycle.vue'
import CompositionAPI from './components/CompositionAPI.vue'

export default defineComponent({
  name: 'App',
  setup () {
    const login = (res: any) => {
      console.log(res)
    }

    return {
      login
    }
  },
  components: {
    LifeCycle,
    CompositionAPI
  }
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
</style>
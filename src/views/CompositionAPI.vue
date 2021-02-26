<template lang="pug">
h1 {{ msg }}
button(@click="count++") count is: {{ count }}
button(@click="testFunction") testFunction

h2 {{ state.title }}
input(type='text' v-model='state.lowerCaseUsername' placeholder='Username')
input(type='password' v-model='state.password' placeholder='Password')
button(@click='login') Submit
p Values: {{ state.username + ' ' + state.password }}
</template>

<script lang="ts">
import { ref, unref, toRef, toRefs, defineComponent, reactive, onMounted, computed } from 'vue'

export default defineComponent({
  name: 'CompositionAPI',
  props: {
    msg: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    }
  },
  data() {
    return {

    }
  },
  setup: (props, { attrs, slots, emit }) => {
    const state: any = reactive({
      username: '',
      password: '',
      lowerCaseUsername: computed(() => state.username.toLowerCase())
    })
    const count = ref(0)

    const testFunction = () => {
      count.value ++
      console.log(count)
    }

    const login = () => {
      emit('login', {
        username: state.username,
        password: state.password
      })
    }

    onMounted(() => {
      state.username = 'ADMIN'
    })

    return { count, state, testFunction, login }
  }
})
</script>

<style scoped>

</style>
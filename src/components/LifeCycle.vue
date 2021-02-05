<template lang="pug">
.LifeCycle LifeCycle: {{ count }}
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTriggered,
  onRenderTracked
} from 'vue'

export default defineComponent({
  data() {
    return {
      count: 0
    }
  },
  beforeCreated () {
    console.log('onBeforeCreate')
  },
  created () {
    console.log('onCreated')
  },
  mounted () {
    ++ this.count
  },
  setup () {
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    onErrorCaptured(() => {
      console.log('onErrorCaptured')
    })
    onRenderTracked(({ key, target, type }) => {
      console.log('onRenderTracked: ', key, target, type)
    })
    onRenderTriggered(() => {
      console.log('onRenderTriggered')
    })

    return {}
  }
})
</script>

<style scoped>

</style>
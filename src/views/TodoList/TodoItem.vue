<template>
  <li>
    <span>{{ todo.text }}</span>
    <button @click.prevent="$emit('remove', todo)">Remove</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      required: true,
      type: Object
    }
  }
}
</script>


<style scoped>
li {
  display: flex;
  margin: 5px 0;
}

li span {
  flex: 1;
}

li button {
  border: 1px solid orange;
  background: orange;
  color: white;
  font-size: 0.8rem;
  padding: 2px 4px;
  cursor: pointer;
}

li button:hover {
  border-color: #ff8100;
  background: #ff8100;
}
</style>
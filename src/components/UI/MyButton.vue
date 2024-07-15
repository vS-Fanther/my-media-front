<template>
  <button class="btns">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btns {
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>
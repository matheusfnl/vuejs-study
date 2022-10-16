<template>
  <div class="header">
    header
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default  defineComponent({
    name: 'MainHeader',
  })
</script>

<style scoped>
  .header {
    background-color: rgb(234, 192, 192);
    top: 0;
    left: 0;
    height: 100%;
  }
</style>
<template>
  <div class="header-card">
    <div class="header-card-body">
      <div class="menu">
        <div class="logo">
          MUSIC LOL
        </div>

        <div class="item">
          <a href="#">Discover</a>
        </div>

        <div class="item">
          <a href="#">Library</a>
        </div>
      </div>

      <div class="track-list">
        Track-list
      </div>

      <div class="actual-track">
        Actual-track
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default  defineComponent({
    name: 'MainHeader',
  })
</script>

<style scoped>
  .header-card { height: 100%; }
  .header-card-body {
    display: flex;
    flex-flow: column;
    height: 100%;
  }

  .menu {
    background-color: rgb(192, 234, 201);
    flex: 0 1 auto;
    padding: 20px 10px;
  }

  .track-list {
    background-color: rgb(232, 234, 192);
    flex: 1 1 auto;
    padding: 20px 10px;
  }

  .actual-track {
    background-color: rgb(192, 232, 234);
    flex: 0 1 355px;
  }
</style>
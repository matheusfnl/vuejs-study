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
        <div class="actual-track-image">
          <div class="title">
            <span class="text-truncate">
              Track name
            </span>

            <span class="text-truncate">
              Artist
            </span>
          </div>
        </div>

        <div class="player">
          {{ '<    ||    >' }}
        </div>
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
    padding: 20px 10px 10px;
  }

  .menu .item { margin-bottom: 10px; }
  .menu .item a:hover { color: rgb(74, 74, 74); }
  .menu .item a {
    font-size: 20px;
    text-decoration: none;
    color: black;
  }

  .logo {
    font-size: 28px;
    margin-bottom: 20px;
    font-weight: bold;
  }

  .track-list {
    background-color: rgb(232, 234, 192);
    flex: 1 1 auto;
    padding: 20px 10px;
  }

  .actual-track {
    background-color: rgb(192, 232, 234);
    flex: 0 1 auto;
  }

  .actual-track-image {
    width: 255px;
    height: 255px;
    background-color: rgb(255, 127, 127);
  }

  .actual-track-image .title { padding: 10px; }
  .actual-track-image .title span {
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px 6px rgb(82, 82, 82);
  }

  .actual-track-image .title span:first-child { font-size: 26px; }
  .actual-track-image .title span:last-child { font-size: 16px; }
  .actual-track-image .title span { display: block; }

  .player {
    height: 120px;
    padding: 10px;
    display: flex;
    justify-content: center;
  }

  .text-truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
  }
</style>
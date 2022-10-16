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
        <ul>
          <li 
            @click="changeTrackListType('playlist')"
            :class="{'type-selected' : track_list_type === 'playlist'}"
          >
            <font-awesome-icon icon="fa-solid fa-music" />

            <span>Playlist</span>
          </li>

          <li
            @click="changeTrackListType('recently')"
            :class="{'type-selected' : track_list_type === 'recently'}"
          >
           <font-awesome-icon icon="fa-solid fa-clock" />

            <span>Recently played</span>
          </li>
        </ul>
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
          <div class="track-controler">
            <ul>
              <li>
                <font-awesome-icon icon="fa-solid fa-backward-step" />
              </li>

              <li>
                <font-awesome-icon icon="fa-solid fa-circle-pause" />
              </li>

              <li>
                <font-awesome-icon icon="fa-solid fa-forward-step" />
              </li>

              <li>
                <font-awesome-icon icon="fa-solid fa-volume-low" />
              </li>
            </ul>
          </div>

          <div class="track-config">
            <span class="timer">
              0:00
            </span>

            <input type="range" id="seek-slider" max="100" value="0">

            <span class="timer">
              2:42
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default  defineComponent({
    name: 'MainHeader',
    data() {
      return {
        track_list_type: 'playlist', 
      }
    },

    methods: {
      changeTrackListType(type) {
        this.track_list_type = type;
      }
    }
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
    padding: 20px 5px;
  }

  .track-list ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
  }

  .track-list ul li {
    margin: 0 10px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
  }

  .track-list ul li:hover { color: rgb(228, 86, 86); }
  .track-list ul li span {
    padding-left: 6px;
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
    height: 90px;
    padding: 10px;
  }

  .track-controler, .track-config {
    display: flex;
    justify-content: center;
  }
  
  .track-controler ul {
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .track-controler ul li {
    margin: 0 10px;
    cursor: pointer;
  }

  .track-controler ul li:last-child {
    position: absolute;
    left: 205px;
    font-size: 20px;
  }

  .track-config input {
    margin: 0 10px;
    width: 100%;
  }

  .track-config span {
    font-size: 14px;
    font-weight: bold;
  }

  .track-controler li:hover { color: #4e4e4e; }
  .track-controler > * {
    font-size: 36px;
    padding: 10px;
  }

  .type-selected { color: rgb(255, 127, 127); }
  .text-truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
  }
</style>
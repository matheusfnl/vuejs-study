<template>
  <Header />

  <div>
    <a v-if="!token" :href="`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`">Login</a>
    <button v-else @click="logOut">Logout</button>
  </div>

  <div v-if="token" style="margin-top: 10px; ">
    <p style="font-size: 22px;">Search</p>
    <input placeholder="Search" type="text" @change="setSearch">
    <button style="margin-left: 10px; " @click="searchArtists">Submit</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Header from '@/components/Header.vue';

import { fetchArtists, fetchTracks } from '@/api/index';

type Spotify = {
  Player;
}

export default defineComponent({
  data() {
    return {
      CLIENT_ID: '687c2de7f616448fa9b6c033d7dd6766',
      REDIRECT_URI: 'http://localhost:8080',
      AUTH_ENDPOINT: 'https://accounts.spotify.com/authorize',
      RESPONSE_TYPE: 'token',
      hash: '',
      token: '' as string | null | undefined,
      search_key: '',
    }
  },

  components: {
    Header,
  },

  created() {
    this.hash = window.location.hash;
    this.token = window.localStorage.getItem('token');

    window.onSpotifyWebPlaybackSDKReady = () => undefined

    if(!this.token && this.hash) {
      this.token = this.hash.substring(1).split('&').find(elem => elem.startsWith('access_token'))?.split('=')[1];

      window.location.hash = '';
      localStorage.setItem('token', this.token ? this.token : '');
    }
  },

  mounted() {
    this.initiatePlayer();
  },

  methods: {
    logOut() {
      this.token = '';
      localStorage.removeItem('token');
    },

    async searchArtists() {
      if(this.search_key) {
        let response = await fetchArtists(this.search_key);
        console.log(response);
        response = await fetchTracks(this.search_key);
        console.log(response)

      }
    },
    
    setSearch(e) {
      this.search_key = e.target.value;
    },

    async waitForSpotifyWebPlaybackSDKToLoad(): Promise<Spotify> {
      return new Promise(resolve => {
        if (window.Spotify) {
          resolve(window.Spotify)
        } else {
          window.onSpotifyWebPlaybackSDKReady = () => {
              resolve(window.Spotify)
          }
        }
      })
    },

    async initiatePlayer() {
      const { Player } = await this.waitForSpotifyWebPlaybackSDKToLoad()

      const sdk = new Player({
        name: 'Test Web Playback SDK',
        volume: 1.0,
        getOAuthToken: callback => { callback(this.token) }
      })

      // Error handling
      sdk.addListener('initialization_error', ({ message }) => { console.log('Initialization_error: ' + message) })
      sdk.addListener('authentication_error', ({ message }) => { console.log('Authentication_error: ' + message) })
      sdk.addListener('account_error', ({ message }) => { console.log('Account_error: ' + message) })
      sdk.addListener('playback_error', ({ message }) => { console.log('Playback_error: ' + message) })

      // Playback status updates
      sdk.addListener('player_state_changed', state => { console.log('Playback status updated', state) })

      // Ready
      sdk.addListener('ready', ({ device_id }) => {console.log('Ready with Device Id: ', device_id) })

      // Not Ready
      sdk.addListener('not_ready', ({ device_id }) => { console.log('Not ready with device Id: ', device_id) })
      sdk.connect()
    }
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

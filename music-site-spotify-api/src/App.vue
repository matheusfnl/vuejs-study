<template>
  <Header class="header" />

  <div class="app">
    <SecondaryHeader />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Header from '@/components/Header.vue';
import SecondaryHeader from '@/components/SecondaryHeader.vue'

import { mapActions } from 'vuex'

type Spotify = { Player }

export default defineComponent({
  data() {
    return {
      hash: '',
      token: '' as string | null | undefined,
      search_key: '',
    }
  },

  components: {
    Header,
    SecondaryHeader,
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
    this.setToken(this.token);
  },

  methods: {
    ...mapActions(['setToken']),
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
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #3c3c3c;
    height: 100%;
    overflow: hidden;
  }

  .header, .app { float: left; }
  .header { width: 255px; }
  .app { width: calc(100% - 255px); }
</style>

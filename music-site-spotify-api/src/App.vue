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
type SDK = {
  addListener,
  connect,
}

export default defineComponent({
  data() {
    return {
      hash: '',
      token: '' as string | null | undefined,
      search_key: '',
      sdk: {} as SDK,
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
    ...mapActions([
      'setToken',
      'setSDKPlayer',
    ]),

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

      this.sdk = new Player({
        name: 'Test Web Playback SDK',
        volume: 0.5,
        getOAuthToken: callback => { callback('BQAx1zcBi8qliyh7wcHfLlNzn588zYEzjQi7Z5HMuKc9O2h4OfA3ZCiXiNVilWrYiiVMqZou9uxfVguXBpF8y1CgqW4awpkqfiGJdT2Dw9_h8LckLGaxAdsnxQtBrUGCs_4Jcsje3VCbiyHpbsx_6R4ZS2OwP2mwduUxJ3Hi2qOa_qn0Pf_Jm55V4e_w7e5OrYHXNQ_emnBWAmYv6X232m4') }
      })

      this.setSDKPlayer(this.sdk)

      // Error handling
      this.sdk.addListener('initialization_error', ({ message }) => { console.log('Initialization_error: ' + message) })
      this.sdk.addListener('authentication_error', ({ message }) => { console.log('Authentication_error: ' + message) })
      this.sdk.addListener('account_error', ({ message }) => { console.log('Account_error: ' + message) })
      this.sdk.addListener('playback_error', ({ message }) => { console.log('Playback_error: ' + message) })

      // Playback status updates
      this.sdk.addListener('player_state_changed', state => { console.log('Playback status updated', state) })

      // Ready
      this.sdk.addListener('ready', ({ device_id }) => {console.log('Ready with Device Id: ', device_id) })

      // Not Ready
      this.sdk.addListener('not_ready', ({ device_id }) => { console.log('Not ready with device Id: ', device_id) })
      this.sdk.connect()
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
  .header {
    width: 255px;
    max-width: 255px;
  }

  .app { width: calc(100% - 255px); }
</style>

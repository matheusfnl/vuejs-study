<template>
  <div class="top-header">
      <a v-if="!getToken" :href="`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`">Login</a>

      <button v-else @click="logOut">Logout</button>

      <div v-if="getToken" style="margin-top: 10px; ">
        <p style="font-size: 22px;">Search</p>

        <input placeholder="Search" type="text" @change="setSearch">

        <button style="margin-left: 10px; " @click="searchArtists">Submit</button>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { mapActions, mapGetters } from 'vuex'

import { fetchArtists, fetchTracks } from '@/api/index';

export default defineComponent({
  name: 'SecondaryHeader',
  data() {
    return {
      CLIENT_ID: '687c2de7f616448fa9b6c033d7dd6766',
      REDIRECT_URI: 'http://localhost:8080',
      AUTH_ENDPOINT: 'https://accounts.spotify.com/authorize',
      RESPONSE_TYPE: 'token',
    }
  },

  computed: {
    ...mapGetters([
      'getToken',
      'getSearchKey',
    ])
  },

  methods: {
    ...mapActions([
      'setToken',
      'setSearchKey',
    ]),

    logOut() {
      this.setToken('');
      localStorage.removeItem('token');
    },

    async searchArtists() {
      if(this.getSearchKey) {
        let response = await fetchArtists(this.getSearchKey);
        console.log(response);
        response = await fetchTracks(this.getSearchKey);
        console.log(response)

      }
    },
    
    setSearch(e) {
      this.setSearchKey(e.target.value);
    },
  }
})
</script>

<style scoped>
  .top-header {
    height: 60px;
    background-color: rgb(178, 178, 229);
  }
</style>
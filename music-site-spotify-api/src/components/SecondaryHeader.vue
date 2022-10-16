<template>
  <nav class="top-header">
    <ul>
      <li>
        <input 
          placeholder="Search"
          type="text"
          @change="setSearch"
        >
      </li>

      <li>
        <button @click="searchArtists">Submit</button>
      </li>

      <li>
        <a
          v-if="!getToken"
          :href="`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`"
        >
          Login
        </a>

        <button
          v-else
          @click="logOut"
        >
          Logout
        </button>
      </li>
    </ul>
  </nav>
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
  .top-header { background-color: rgb(178, 178, 229); }
  .top-header ul {
    margin: 0;
    padding: 20px;
    list-style: none;
    display: flex;
    justify-content: center;
  }

  .top-header ul li:last-child {
    position: absolute;
    right: 0;
    margin-right: 20px;
  }
</style>
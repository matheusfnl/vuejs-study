import { createStore } from 'vuex'

//types
export type State = {
  token: string,
  search_key: string,
  sdk: object,
};

//set states
const state: State = {
  token: '',
  search_key: '',
  sdk: {},
}

//getters
const getters = {
  getToken: state => state.token,
  getSearchKey: state => state.search_key,
  getSDKPlayer: state => state.sdk,
}

//actions
const actions = {
  setToken: ({commit}, token: string) => commit('newToken', token),
  setSearchKey: ({commit}, serach_key: string) => commit('newSearchKey', serach_key),
  setSDKPlayer: ({commit}, sdk: object) => commit('newSDKPlayer', sdk),
}

//mutations
const mutations = {
  newToken: (state, token) => state.token = token,
  newSearchKey: (state, search_key) => state.search_key = search_key,
  newSDKPlayer: (state, sdk) => state.sdk = sdk,
}

export default createStore({
  state,
  getters,
  actions,
  mutations,
})

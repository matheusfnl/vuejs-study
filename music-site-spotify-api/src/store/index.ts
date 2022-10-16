import { createStore } from 'vuex'

//types
export type State = {
  token: string,
  search_key: string,
};

//set states
const state: State = {
  token: '',
  search_key: '',
}

//getters
const getters = {
  getToken: state => state.token,
  getSearchKey: state => state.search_key,
}

//actions
const actions = {
  setToken: ({commit}, token: string) => commit('newToken', token),
  setSearchKey: ({commit}, serach_key: string) => commit('newSearchKey', serach_key),
}

//mutations
const mutations = {
  newToken: (state, token) => state.token = token,
  newSearchKey: (state, search_key) => state.search_key = search_key,
}

export default createStore({
  state,
  getters,
  actions,
  mutations,
})

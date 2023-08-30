import { createStore } from 'vuex'
import axios from 'axios'

const url = 'https://bmxworld.onrender.com/'

export default createStore({
  state: {
    bmxBikes: null
  },
  getters: {
  },
  mutations: {
    setBike(state, bikes){
      state.bmxBikes = bikes
    }
  },
  actions: {
    async fetchBikes({commit}){
      const response = await axios.get(`${url}products`)
      commit('setBike', response.data.results)
    }
  },
  modules: {
  }
})

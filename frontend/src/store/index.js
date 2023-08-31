import { createStore } from 'vuex'
import axios from 'axios'

const url = 'https://bmxworld.onrender.com/'

export default createStore({
  state: {
    bmxBikes: [],
    selectedBike: []
  },
  getters: {
    getProduct: state => state.selectedBike
  },
  mutations: {
    setBike(state, bikes){
      state.bmxBikes = bikes
    },
    setSelectedBike(state, bike){
      state.selectedBike = bike
    }
  },
  actions: {
    async fetchBikes({commit}){
      const response = await axios.get(`${url}products`)
      commit('setBike', response.data.results)
    },

    async fetchBike({commit}, bmxID){
      try {
        const {data} = await axios.get(`${url}product/${bmxID}`)
        commit('setSelectedBike', data.result[0])
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})

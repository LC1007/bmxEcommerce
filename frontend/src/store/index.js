import { createStore } from 'vuex'
import axios from 'axios'

const url = 'https://bmxworld.onrender.com/'

export default createStore({
  state: {
    bikes: [],
    selectedBike: null
  },
  mutations: {
    setBikes(state, bikes){
      state.bikes = bikes
    },
    setSelectedBike(state, bike){
      state.selectedBike = bike
    }
  },
  actions: {
    async fetchBikes({commit}){
      const {data} = await axios.get(`${url}products`)
      commit('setBikes', data.results)
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

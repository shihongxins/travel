import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentCity: '北京'
  },
  mutations: {
    changeCurrentCity (state, payload) {
      state.currentCity = payload
      localStorage.setItem('currentCity', payload)
    }
  }
})

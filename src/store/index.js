import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    moduleMenu: 'testModule',
    featureNav: ''
  },
  mutations: {
    setModuleMenu(state, param) {
      console.log('ok')
      state.moduleMenu = param
    },
    setFeatureNav(state, param) {
      state.featureNav = param
    }
  }
})
export default store

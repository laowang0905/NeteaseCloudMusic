import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/loginStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login
  }
})

export default store
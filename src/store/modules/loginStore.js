import {
  reqUserInfo
} from '@/network/loginApi.js'
export default {
  namespaced: true,
  state: {
    token: '',
    userInfo: '',
  },
  mutations: {
    login(state, token) {
      state.token = token
      localStorage.token = token
    },
    logout(state) {
      state.token = ''
      localStorage.token = ''
    },
    getToken(state) {
      console.log('gettoken')
      localStorage.token && (state.token = localStorage.token)
    },
    initUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async getUserInfo({
      commit
    }) {
      const res = await reqUserInfo({
        uid: localStorage.uid
      })
      commit('initUserInfo', res)
    }
  }
}
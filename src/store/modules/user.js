import { login } from '@/api/login'
export default {
  namespaced: true,
  state: {
    data: null
  },
  mutations: {
    setToken(state, data) {
      state.data = data
    },
    removeToken(state, data) {
      state.data.token = null
    }
  },
  actions: {
    async getToken({ commit }, data) {
      const res = await login(data)
      commit('setToken', res.data)
    },
    getUserInfo() {

    }
  }
}

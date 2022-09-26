import { login } from '@/api/login'
export default {
  namespaced: true,
  state: {
    data: null
  },
  mutations: {
    setToken(state, data) {
      state.data = data
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

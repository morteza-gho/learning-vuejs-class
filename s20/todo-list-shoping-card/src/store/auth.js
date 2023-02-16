
const auth = {
  namespaced: true,

  state: {
    token: null
  },

  getters: {
    isAuthanticated() {
      return !!localStorage.getItem('token');
    },
    getToken(state) {
      return state.token;
    }
  },

  mutations: {

    login(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    logout() {
      localStorage.removeItem('token');
    }

  },

  actions: {

    async login({ commit }, token) {
      await commit('login', token);
    },

    async logout({commit}) {
      if (window.confirm('Are you sure to exit?')) {
        await commit('logout');
      }
    }

  }

}

export default auth;
const fooModule = {
  state: {
    foo: {
      bar: {
        tar: {
          info: 42
        }
      }
    }
  },
  getters: {
    info (state) {
      return state.foo.bar.tar.info
    }
  },
  mutations: {
    setInfo (state, payload) {
      state.foo.bar.tar.info = payload
    }
  },
  actions: {
    getInfo ({commit}, payload) {
      commit('setInfo', payload)
    }
  }
}

export default fooModule
import { createStore } from 'vuex'

export default createStore({
  state: {
    questionList: [],
  },
  getters: {
  },
  mutations: {
    setQuestion({state}, data){
      state.poll.push('data')
    }
  },
  actions: {
    setQuestion({commit}, data){
      commit('setQuestion', data)
    }
  },
  modules: {
  }
})

// import Vue from 'vue'
// import Vuex from 'vuex'

// import fooModule from './list.js'

// Vue.use(Vuex)

// const store = new Vuex.Store({
//   modules: {
//     fooModule
//   }
// })

// export default store
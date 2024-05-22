import { createStore } from 'vuex'
import list from './list'

export default createStore({
  state: {
    sendObj: {
      id: "",
      name: 'Отзыв',
      type: 'object',
      colors: [
        {
          name: 'main',
          color: '#e27d60',
          mode: 'hexa',
        },
        {
          name: 'secondary',
          color: '#84cdca',
          mode: 'hexa',
        },
        {
          name: 'third',
          color: '#e8a87c',
          mode: 'hexa',
        },
        {
          name: 'fourth',
          color: '#c38d9e',
          mode: 'hexa',
        },
        {
          name: 'fifth',
          color: '#41b3a3',
          mode: 'hexa',
        },
      ],
      services: [],
      data: [],
    },

    polls: [],

    items: [{
      name: 'Service 1',
      discribtion: 'Описание сервиса 1',
      children: [{
          name: 'Service 1.1',
          discribtion: 'Описание сервиса 1.1',
          children: [{
            name: 'Service 1.1.1',
            discribtion: 'Описание сервиса 1.1.1',
          },{
            name: 'Service 1.1.2',
            discribtion: 'Описание сервиса 1.1.2',
          }]
        }
      ],
    },{
      name: 'Service 2',
      discribtion: 'Описание сервиса 2',
      children: [{
          name: 'Service 2.1',
          discribtion: 'Описание сервиса 2.1',
          children: [{
            name: 'Service 2.1.1',
            discribtion: 'Описание сервиса 2.1.1',
          },{
            name: 'Service 2.1.2',
            discribtion: 'Описание сервиса 2.1.2',
          }]
        }
      ],
    }]
  },

  getters: {
    getItems(state){
      return state.items
    }
  },

  mutations: {
    setQuestion(state, data){
      state.sendObj.data.push(JSON.parse(JSON.stringify(data)))
    },
    setPoll(state, data){
      state.polls.push(JSON.parse(JSON.stringify(data)))
    },
    deleteQuestion(state, data){
      state.sendObj.data.splice(data, 1)
    },
    setId(state){
      console.log('setId state', state);
      for(let f in state.sendObj.data){
        f = {
          label: f.label,
        }
      }
    }
  },

  actions: {
    // for questions poll
    setQuestion({commit}, data){
      commit('setQuestion', data)
      commit('setId')
    },
    deleteQuestion({commit}, data){
      console.log('data', data)
      commit('deleteQuestion', data)
    },
    setId({commit}){
      commit('setId')
    },

    // for  poll
    setPoll({commit}, data){
      commit('setPoll', data)
    },
  },

  modules: {
  }

})
import { createStore } from 'vuex'

export default createStore({

  state: {
    questionList: [],
    polls: [
      {name: '1'},
      {name: '1'},
      {name: '1'},
      {name: '1'},
      {name: '1'},
      {name: '1'},
      {name: '1'},
      {name: '1'},

    ],
  },

  getters: {
  },

  mutations: {
    setQuestion(state, data){
      state.questionList.push(JSON.parse(JSON.stringify(data)))
    },
    setPoll(state, data){
      state.polls.push(JSON.parse(JSON.stringify(data)))
    },
    deleteQuestopn(state, data){
      state.questionList.splice(data, 1)
    },
    setId(state){
      for(let f in state.questionList){
        console.log(';f', f);
        f = {
          label: f.label,
        }
      
      }
      // state.questionList.forEach((f, i)=>{

      // })

      console.log(' state.questionList',  state.questionList);
    }
  },

  actions: {
    // for questions poll
    setQuestion({commit}, data){
      commit('setQuestion', data)
      commit('setId')
    },
    deleteQuestopn({commit}, data){
      commit('deleteQuestopn', data)
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
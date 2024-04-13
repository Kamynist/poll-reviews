import { createStore } from 'vuex'

export default createStore({

  state: {
    questionList: [],
  },

  getters: {
  },

  mutations: {
    setQuestion(state, data){
      state.questionList.push(JSON.parse(JSON.stringify(data)))
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
    setQuestion({commit}, data){
      commit('setQuestion', data)
      commit('setId')
    },
    deleteQuestopn({commit}, data){
      commit('deleteQuestopn', data)
    },

    setId({commit}){
      commit('setId')
    }
  },

  modules: {
  }

})
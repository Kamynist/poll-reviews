<template>
  <v-sheet @click="showQuest(question)">
    question {{ question }}
    <div style="display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;">
      <h3 class="text-h5 mb-2 mr-2"> Тип: {{ question.label }}</h3>
      <v-btn icon size="small" @click="$emit('someEvent', question)"> 
        <v-icon size="small" color="red"> mdi-delete </v-icon>
        <v-tooltip activator="parent" location="bottom"> 
          Удалить
        </v-tooltip>
      </v-btn>
    </div>

    <div style="margin:0px" v-for="qu in question.data" :key="qu">
      <v-text-field label="заголовок" :v-model="qu.label" ></v-text-field>
      <div>
        <div style="display: flex; align-items: center;">
          <!-- <v-checkbox label="Разрешить оценку" v-model="qu.mark" style="padding-right: 15px;"/> -->
        </div>
        <v-checkbox label="Разрешить комментировать" v-model="qu.input"/>
      </div>
    </div>

    <div>
      <v-btn v-if="question.data.length > 1" icon size="small" @click="removeComment(question.data)"> 
        <v-icon size="small" color="red"> mdi-delete </v-icon>
        <v-tooltip activator="parent" location="bottom"> 
          Удалить комментарий
        </v-tooltip>
      </v-btn>
      <v-btn icon @click="addComment(question.data)"> 
        <v-icon> mdi-plus </v-icon>
        <v-tooltip activator="parent" location="bottom"> 
          Добавить комментарий
        </v-tooltip>
      </v-btn>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: 'Select',
  props: {
    question: Object,
  },
  data() {
    return {
    };
  },
  computed(){
  },
  methods: {
    showQuest(question){

      let arr = [
        {id: null},
        {id: null},
        {id: null},
        {id: null},
        {id: null},
        {id: null},
      ]
      arr.forEach((f, i)=>{
        f.id = i
      })
      console.log(arr, this.$store.state.sendObj)
    },
    addComment(list){
      list.push({
        label: 'заголовок',
        mark: false,
        markValue: [1, 5],
        input: false,
      })
    },
    removeComment(list){
      list.pop()
    },
    deleteQuestion(quest){
      this.$store.dispatch('deleteQuestion', quest)
    },
  },
}
</script>

<style  scoped>
</style>

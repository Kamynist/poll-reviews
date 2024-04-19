<template>
  <div>
    <v-card style="width: 600px;">
      <v-toolbar
        color="blue-grey"
        dark
        flat
      >
        <v-toolbar-title>Форма обратной</v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <!-- $store.state.questionList {{ $store.state.questionList }} -->
        <template v-for="(question, id) in $store.state.questionList" :key="id">
          <!-- {{ question }} -->
          <v-sheet @click="showQuest(question)">
            <Comment v-if="question.type == 'comment'" :question="question"/>
            <Select v-if="question.type == 'select'" :question="question" />
          </v-sheet>
          <v-divider class="my-2"></v-divider>

        </template>

      </v-card-text>

      <v-card-tex>
        <v-table>
          thead
        </v-table>
      </v-card-tex>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="success"
        >
          Сохранить
        </v-btn>
      </v-card-actions>
    </v-card>


  <!-- $store.state.questionList{{$store.state.questionList}} -->
  </div>
</template>

<script>
import Comment from './Comment.vue'
import Select from './Select.vue'

export default {
  name: 'List',
  data() {
    return {
      items: ["Item 1", "Item 2", "Item 3"],
    };
  },
  components: {
    Comment, Select,
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
      console.log(arr, this.$store.state.questionList)
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
      this.$store.dispatch('deleteQuestopn', quest)
      // setId(list)
    },
  },
}
</script>

<style  scoped>
</style>

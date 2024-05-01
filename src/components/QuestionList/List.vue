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
        <template v-for="(question, id) in $store.state.sendObj.data" :key="id">
          <!-- {{ question }} -->
          <v-sheet >
            <Comment @someEvent="deleteQuestion" v-if="question.type == 'comment'" :question="question"/>
            <Select @someEvent="deleteQuestion" v-if="question.type == 'select'" :question="question"/>
          </v-sheet>
          <v-divider class="my-2"></v-divider>

        </template>

      </v-card-text>
      <!-- <v-card-tex>
        <v-table>
          thead
        </v-table>
      </v-card-tex> -->

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="setData"
          color="success"
        >
          Сохранить
        </v-btn>
      </v-card-actions>
    </v-card>


  <!-- $store.state.sendObj.data{{$store.state.sendObj.data}} -->
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
    setData(){
      let items = JSON.parse(localStorage.getItem('polls'));
      if(items == null){
        items = []
        items.push(this.$store.state.sendObj)
        localStorage.setItem('polls', JSON.stringify(items))
        return
      }
      items.push(this.$store.state.sendObj)
      localStorage.setItem('polls', JSON.stringify(items))
      console.log('getItem', items);
    },
  },
}
</script>

<style  scoped>
</style>

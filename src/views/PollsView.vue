<template>
  <div>
    <div>
      Опросы 
    </div>
    <div style="display: flex; margin: 20px;">
      <v-select style="margin-right: 20px;" label="Название">  </v-select>
      <v-select label="Сервис" :items="services"> </v-select>  
    </div>
    <v-card v-for="poll in polls" :key="poll" to="/poll"
      style=" margin: 20px;">
      <v-card-title>
        {{poll.name}}

        <v-btn icon size="small" @click="showQuest(poll)"> 
          <v-icon size="small"> mdi-pencil </v-icon>
          <v-tooltip activator="parent" location="bottom"> 
            Редактировать
          </v-tooltip>
        </v-btn>
  
        <v-btn icon size="small" @click="deleteQuestion(question.id)"> 
          <v-icon size="small" color="red"> mdi-delete </v-icon>
          <v-tooltip activator="parent" location="bottom"> 
            Удалить
          </v-tooltip>
        </v-btn>

      </v-card-title>

      <v-card-item>
        <div style="display: flex;">

        </div>
      </v-card-item>
      <!-- polls -->
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'PollsView',
  components: {
  },
  data() {
    return {
      polls: [],
      filters: {
      },
      services: [
        'test1',
        'test2',
        'test3',
        'test4',
      ],

    };
  },
  created(){
    this.getData()
  },
  methods: {
    getData(){
      this.polls = JSON.parse(localStorage.getItem('polls'));
    },
    showQuest(poll){
      this.$store.state.sendObj = poll
    },
  }
}
</script>

<style scoped>
.padding-r{
  padding-right: 20px;
}
</style>
<template>
  <v-sheet @click="showQuest(question)">
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
      <v-text-field class="pa-0 ma-0" label="заголовок" :v-model="qu.label" ></v-text-field>
      <div class="max-height" style="display: flex; align-items: center;">
        <v-checkbox  label="Оценка" v-model="qu.mark" style="padding-right: 15px;">
          <v-tooltip activator="parent" location="bottom"> 
            Пользователи смогут ставить оценку
          </v-tooltip>
        </v-checkbox>
        <v-range-slider v-if="qu.mark"
          v-model="qu.markValue"
          :max="10"
          :min="1"
          step="1"
          thumb-label="always"
        >
          <template v-slot:thumb-label="{ modelValue }">
            <v-row>
              <v-td>
                {{ modelValue }}
              </v-td>
              <v-td>
                <v-icon icon="mdi-star" theme="dark"></v-icon>
              </v-td>
            </v-row>
          </template>
        </v-range-slider>
      </div>
      <v-checkbox class="max-height" label="Комментарий" v-model="qu.input">
        <v-tooltip activator="parent" location="bottom"> 
          Пользователи смогут оставлять комментарии
        </v-tooltip>
      </v-checkbox>

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
  name: 'Comment',
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

  },
}
</script>

<style  scoped>
.max-height {
  height: 50px;
}
</style>

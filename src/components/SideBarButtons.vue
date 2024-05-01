<template>
  <div>
    <v-card fixed title="Добавить в форму">
      <div v-for="(button, i) in buttonsList" :key="i">
        <util-button @click="addQuestion(button)"
          style="min-width: 200px; margin-bottom: 20px;" :icon="button.icon">
          {{ button.label }}
          <v-tooltip activator="parent" location="bottom"> 
            {{ tooltipList[i] }}
          </v-tooltip>
        </util-button>
      </div> 
      <!-- <v-btn @click="this.$store.dispatch('setId')">
        обновить
      </v-btn> -->
    </v-card>
  </div>
</template>

<script> 
import UtilButton from "@/components/UI/UtilButton.vue";

export default {
  name: 'si-buttons',
  data() {
    return {
      buttonsList: [
        // С оценкой, с кастомным названием
        // oneline: true,
        // textArea: false,
        {
          id: null,
          label: 'Комментарий',
          type: 'comment',
          icon: 'mdi-comment-outline',
          data: [{
            label: 'заголовок',
            mark: false,
            markValue: [1, 5],
            input: true,
          }],
        },
        // Выбор из.
        {
          id: null,
          label: 'Выбор из..',
          type: 'select',
          icon:'mdi-text-box-multiple-outline',
          data: [{
            label: 'заголовок',
            mark: false,
            markValue: [1, 5],
            input: true,
          }],
        },
        {
          id: null,
          label: 'Файл',
          type: 'file',
          icon:'mdi-file-export-outline',
        },

      ],
      tooltipList: [
        'Отзыв с комментарием и/или оценкой.',
        'Отзыв с выбором/мультивыбором. Возможностью прокомментировать выбор',
        'Отзыв с файлом и комментарием'
      ],
    }
  },
  components:{ 
    UtilButton,
  },
  created() {
    console.log(this.$store.state)
  },
  methods: {
    addQuestion(quest){
      this.$store.dispatch('setQuestion', quest)
    },
  },
}

</script>

<style scoped>
</style>

<template>
  <div>
    <v-card fixed title="Добавить в форму">
      <div v-for="button in buttonsList" :key="button">
        <v-btn :prepend-icon="button.icon" @click="$store.state.questionList.push(button)"
          style="min-width: 165px; margin-bottom: 20px;"
          >
            {{ button.label }}
          </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script> 

export default {
  name: 'ButtonsList',
  data() {
    return {
      buttonsList: [
        // С оценкой, с кастомным названием
        // oneline: true,
        // textArea: false,
        {
          label: 'Коментарий',
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
          label: 'Выбор из..',
          type: 'select',
          icon:'mdi-text-box-multiple-outline',
        },
        {
          label: 'Файл',
          type: 'file',
          icon:'mdi-file-export-outline',
        },

      ],
    }
  },
  created() {
    console.log(this.$store.state)
  },
}

</script>

<style scoped>
.v-card {
  margin-top: 20px; 
  width: 230px;
}
</style>

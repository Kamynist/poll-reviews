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
        <template v-for="question in $store.state.questionList" :key="question">
          <v-sheet color="grey-lighten-3">
            <div>
              <h3 class="text-h5 mb-6"> Тип: {{question.label}}</h3>
            </div>

            <div style="margin:0px" v-for="qu in question.data" :key="qu">
              <v-text-field label="заголовок" :v-model="qu.label" ></v-text-field>
              <div>
                <div style="display: flex; align-items: center;">
                  <v-checkbox label="Разрешить оценку" v-model="qu.mark" style="padding-right: 15px;"/>
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
                <v-checkbox label="Разрешить комментировать" v-model="qu.input"/>
              </div>
            </div>

            <div>
              <v-btn icon @click="addComment(question.data)"> 
                <v-icon> mdi-plus </v-icon>
                <v-tooltip activator="parent" location="bottom"> 
                  Добавить комментарий
                </v-tooltip>
              </v-btn>
            </div>

          </v-sheet>
          <v-divider class="my-2"></v-divider>

        </template>

      </v-card-text>

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
export default {
  name: 'List',
  data() {
    return {
      items: ["Item 1", "Item 2", "Item 3"],
    };
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
    }
  },
}
</script>

<style  scoped>
</style>

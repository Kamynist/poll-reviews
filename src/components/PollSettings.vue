<template>
  <div>
    <v-card class="text-center" style="position: sticky;" title="Настройки формы">
      <v-card-text>
        <v-text-field variant="underlined" class="pb" label="Название окна" v-model="sendObj.name"></v-text-field>
        <div :style="enableInput ? 'border: solid 2px #f0f0f0; border-radius: 4px' : ''">
          <v-checkbox v-model="enableInput" label="Входящие данные">
            <v-tooltip activator="parent" location="bottom"> 
              Название будет также включать названия товара/услуги
            </v-tooltip>
          </v-checkbox>
          <div v-if="enableInput" style="padding: 5px">
            <v-select 
              class="pb" 
              label="Тип переменной" 
              variant="underlined" 
              v-model="sendObj.type"
              item-title="name" 
              item-value="value" 
              :items="selOpt"></v-select>
          </div>
        </div>

        <div>
          <div>
            Цветовая палитра
          </div>
          <div style="display: flex;">
            <div v-for="col in sendObj.colors" :key="col" @click="selectColor(col)" class="color-balls"
              :style="'background-color:' + col.color">
            </div>
          </div>
          <div>
            <v-color-picker style="width: 100%;"
              v-model="curColor.color"
              v-model:mode="curColor.mode"
            ></v-color-picker>
            <v-select
              type="underlined"
              v-model="curColor.mode"
              :items="['hexa', 'hsla', 'rgba']"
              style="margin-top: 5px; width: 100%;"
            ></v-select>
          </div>
        </div>
        <!-- sendObj {{ sendObj }} -->
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'PollSettings',
  data() {
    return {
      enableInput: false,
      sendObj: {
        name: '',
        type: 'object',
        colors: [
          {
            name: 'main',
            color: '#e27d60',
            mode: 'hexa',
          },
          {
            name: 'secondary',
            color: '#84cdca',
            mode: 'hexa',
          },
          {
            name: 'third',
            color: '#e8a87c',
            mode: 'hexa',
          },
          {
            name: 'fourth',
            color: '#c38d9e',
            mode: 'hexa',
          },
          {
            name: 'fifth',
            color: '#41b3a3',
            mode: 'hexa',
          },
        ]
      },
      selOpt: [
        { name: 'Объект', value: 'object' },
        { name: 'Строка', value: 'string' },
        { name: 'Массив', value: 'array' },
      ],
      curColor: {
        name: 'main',
        color: '#607d8b',
        mode: 'hexa',
      }
    }
  },
  watch: {
    
  },
  methods: {
    selectColor(item){
      this.curColor = JSON.parse(JSON.stringify(item))
    }
  },
}
</script>


<style scoped>
.pb {
  margin-bottom: 15px;
  height: 40px;
}

.color-balls {
  width: 30px; 
  height: 30px;
  margin: 5px;
  border-radius: 15px;
}
</style>
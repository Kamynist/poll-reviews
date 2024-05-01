# poll-reviews

Вообще я пока не знаю что из этого выйдет, но по задумке это админка для опросов (коментарии, отзывы) для сервиса. 
Тип есть несколько сервисов и туда впихивается эта админская часть, в ней будут производиться манипуляции с опросами в сервисах. 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Что сделать
добавить настройки для анкеты, структура формирования данные в анкете

poll: {
  // настройки для отображения (цвет, форма окна. название)
  settings: {
    label: '',
    width: '', //добавить динамическое разрешение
    height: '', //добавить динамическое разрешение
    colors: {
      header: '',
      box: '', 
      row: '',
      row_item: '',
      submit: '',
      delete: '',
      close: ''
    },
    // Возможно сделаю. Для шрифтов форм, кнопок, заголовка
    // fonts: {},
    // align: '',

  },
  // Вспомогательные кнопки (закр, удалить, сохранить)
  setup: [],

  data:[] // сами строки вопросов
}

<template>
  <div>
    <h1>fdsdfsdf</h1>
  </div>
</template>

<script>
export default {
  name: 'File',
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
.max-height {
  height: 50px;
}
</style>
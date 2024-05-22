<template>
  <div class="container">
    <h1>
      asdasd
    </h1>
  </div>
</template>

<script>
export default {
  name: 'PollTree',
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
      let obj = this.$store.dispatch('getItems')
      console.log('Poll tree', obj)
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
.container{
  
}
</style>
<template>
  <v-card>
    <v-list :items="$store.state.polls"
      item-title="name"
      item-value="id"
    >

    </v-list>
    bvnvbfg
  </v-card>
</template>

<script>
// @ is an alias to /src
// import List from '@/components/QuestionList/List.vue'
// import RowEdit from '@/components/RowEdit.vue'


export default {
  name: 'PollsView',
  components: {
    // Buttons, List, PollSettings
  },
  data() {
    return {
      items: ["Item 1", "Item 2", "Item 3"],
    };
  },
}
</script>

<style scoped>
.padding-r{
  padding-right: 20px;
}
</style>
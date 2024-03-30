<template>
  <v-container style="position: relative;">
    <div style="position: fixed; top: 7%">
      <Buttons class="padding-r"/>
      <PollSettings class="padding-r"/>
    </div>
    <div style="margin-left: 300px">
      <List class="padding-r"/>
      <!-- <RowEdit/> -->
    </div>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Buttons from '@/components/Buttons.vue'
import List from '@/components/List.vue'
// import RowEdit from '@/components/RowEdit.vue'
import PollSettings from '@/components/PollSettings.vue'


export default {
  name: 'HomeView',
  components: {
    Buttons, List, PollSettings
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
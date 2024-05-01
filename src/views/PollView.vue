<template>
  <v-container>
    <div style="position: fixed; top: 7%">
      <si-buttons class="padding-r" style="padding-bottom: 30px; width: 300px;"/>
      <PollSettings style="width: 300px;" class="padding-r"/>
    </div>
    <div style="margin-left: 300px">
      <List class="padding-r"/>
    </div>
  </v-container>
</template>

<script>
// @ is an alias to /src
import SiButtons from '@/components/SideBarButtons.vue'
import List from '@/components/QuestionList/List.vue'
import PollSettings from '@/components/PollSettings.vue'


export default {
  name: 'PollView',
  components: {
    SiButtons, List, PollSettings
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
<template>
    <div class="flex items-center justify-center" v-for="task in filteredList" :key="task.id">
      <Task @delete-task="$emit('delete-task', task.id)" :task="task" /> 
  </div>
</template>
<script>
import Task from "./Task.vue"

export default {
    name: "Tasks",
    props: {
        tasks: Array,
        searchInput: String
    },
    components: {
      Task
    },
    emits: ['delete-task'],
    computed: {
      filteredList() {
        if (this.searchInput == "") {
          return this.tasks
        } else {
          return this.tasks.filter(t => t.title.toUpperCase().includes(this.searchInput.toUpperCase()))
        }
      }  
    } 
}
</script>
<style>
    
</style>
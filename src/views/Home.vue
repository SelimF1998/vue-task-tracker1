<template>
  <div class="p-12 space-y-5">
    <AddTask :showAddTask="showAddTask" @add-task="addTask" />
    <Tasks @delete-task="deleteTask" :tasks="tasks" :searchInput="searchInput" />
  </div>
</template>
<script>
import Tasks from "../components/Tasks.vue"
import AddTask from "../components/AddTask.vue"
import { mapGetters, mapActions } from "vuex";

export default {
    name: "home",
    props: {
        showAddTask: Boolean,
        searchInput: String
    },
    components: {
        Tasks,
        AddTask,
    },
    data() {
        return {
            tasks: []
        }
    },
    methods: {
    deleteTask(id) {
      if (confirm("Are you sure?")) {
        this.tasks = this.tasks.filter(task => task.id !== id)
      } 
    },
    addTask(newTask) {
      console.log(newTask)
      this.tasks.push(newTask)
    },
  },
  computed: mapGetters(["allTasks"]),
  created() {
    this.tasks = this.allTasks
    console.log(this.tasks)
  },
};
</script>
<style></style>

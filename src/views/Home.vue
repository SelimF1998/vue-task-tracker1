<template>
  <div class="p-12 space-y-5">
    <AddTask :showAddTask="showAddTask" @add-task="addTask" />
    <Tasks @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>
<script>
import Tasks from "../components/Tasks.vue"
import AddTask from "../components/AddTask.vue"

export default {
    name: "home",
    props: {
        showAddTask: Boolean
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
  created() {
    this.tasks = [
      {
        id: 1,
        title: "Doctor Appointment",
        description: "Description 1",
        day: "March 1st at 2:30 PM",
        reminder: true
      },
      {
        id: 2,
        title: "Feed The Dog",
        description: "Description 2",
        day: "February 2nd at 9:00 AM",
        reminder: true
      },
      {
        id: 3,
        title: "Do Some School Homeworks",
        description: "Description 3",
        day: "July 11th at 8:00 PM",
        reminder: false
      },
      {
        id: 4,
        title: "Fuck A Girl",
        description: "Description 4",
        day: "Everyday",
        reminder: true
      }
    ] 
  },
};
</script>
<style></style>

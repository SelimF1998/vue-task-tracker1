
<template>
  <div class="p-12 space-y-5">
    <div class="font-extrabold text-3xl text-red-500 text-center">App</div>
    <Header :showAddTask="showAddTask" @show-form="showForm" title="Task Tracker" />
    <AddTask :showAddTask="showAddTask" @add-task="addTask" />
    <Tasks @delete-task="deleteTask" :tasks="tasks" /> 
  </div>
</template>

<script>
import Card from "./components/Card.vue"
import Header from "./components/Header.vue"
import Tasks from "./components/Tasks.vue"
import AddTask from "./components/AddTask.vue"

export default {
  name: "app",
  components: {
    Card,
    Header,
    Tasks,
    AddTask,
  },
  emits: ['add-task', 'show-form'],
  data() {
    return {
      tasks: [],
      showAddTask: false
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
    showForm() {
      console.log("clicked")
      this.showAddTask = !this.showAddTask
    }
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
}
</script>
<template>
  <div class="p-12 space-y-5">
    <div class="font-extrabold text-3xl text-red-500 text-center">App</div>
    <Header :showAddTask="showAddTask" @show-form="showForm" @search-input="search" title="Task Tracker" />
    <router-view :showAddTask="showAddTask" :searchInput="searchInput"></router-view>
    <Footer />
  </div>
</template>
<script>
import Card from "./components/Card.vue"
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  name: "app",
  components: {
    Card,
    Header,
    Footer,
  },
  emits: ['show-form', ],
  data() {
    return {
      showAddTask: false,
      searchInput: ""
    }
  }, 
  methods: {
    showForm() {
      console.log("clicked")
      this.showAddTask = !this.showAddTask
    },
    search(searchInput) {
      this.searchInput = searchInput
    }
  },  
}
</script>
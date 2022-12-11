
<template>
  <div class="flex flex-col items-center p-12 space-y-5">
    <div class="font-extrabold text-3xl text-red-500">App</div>
    <Card />
    
  </div>
</template>

<script>
import Card from "./components/Card.vue"
export default {
  name: "app",
  components: {
    Card,
  },


  
}
</script>
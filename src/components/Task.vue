<template>
    <div class="card rounded overflow-hidden shadow-lg w-96">
        <div class="px-6 py-4">
          <div class="flex justify-between">
            <div class="font-bold text-xl mb-2 text-gray-50">{{task.title}} </div>
            <i @click="onDelete(task.id)" class="fas fa-times mt-2 ml-5 stroke-red-600 cursor-pointer"></i>
          </div>
          
          <div class="text-gray-300 text-base">
           {{task.description}}
          </div>
          <div class="text-sm text-gray-400 opacity-50">
            {{task.day}}
          </div>
        </div>
      </div>
</template>
<script>
export default {
    name: "Task",
    props: {
        task: Object
    },
    methods: {
        onDelete(id) {
            this.$emit('delete-task', id)
        }
    }
    
}
</script>
<style>
.fas {
    color: rgb(238, 68, 68);
    font-size: 1.3rem;
    
}
.card {
  background-color: #161b22;
}
    
</style>
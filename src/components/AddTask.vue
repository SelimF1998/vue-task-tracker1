<template>
  <div v-if="showAddTask" class="flex items-center justify-center ">
    <form @submit="onSubmit" class=" bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="title"
        >
          Title
        </label>
        <input 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Title"
          v-model="title"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="description"
        >
          Description
        </label>
        <textarea
          class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          type="description"
          placeholder="Description"
          v-model="description"
        ></textarea>
        <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="day"
        >
          Day
        </label>
        <input 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="day"
          type="text"
          placeholder="Day"
          v-model="day"
        />
      </div>
        
      </div>
      <div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-80 cursor-pointer"
          type="submit"
        >
          Save Task
        </button> 
      </div>
    </form>
  </div>
</template>
<script>
export default {
    name: "AddTask",
    props: {
      showAddTask: Boolean
    },
    data() {
        return {
            title: '',
            description: '',
            day: '',
            reminder: ''
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            
            if (!this.title) {
                alert("Please add a task")
                return
            }

            const newTask = {
                id: Math.floor(Math.random() * 100),
                title: this.title,
                description: this.description,
                day: this.day
            }

            this.title = '',
            this.description = '',
            this.day = ''

            

            this.$emit('add-task', newTask)    
        }
    }

};
</script>
<style></style>

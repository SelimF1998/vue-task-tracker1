<template lang="">
  <div>
    <button 
      class="bg-indigo-600 p-2 rounded shadow-sm text-white hover:bg-indigo-600/80"
      @click="deleteLastTask()"
    >
      Delete Last Task
    </button>
    
  </div>
  <input placeholder="Search" class="bg-stone-600 focus:bg-stone-500 text-stone-200 p-2 outline-none rounded w-60"
     @input="log()" v-model="input"
   />
  <div class="flex items-center justify-center" v-for="task in filteredList" :key="task.id">
    <div>
      <div class="rounded overflow-hidden shadow-lg w-96 bg-slate-200  ">
        <div class="px-6 py-4">
          <div class="flex justify-between">
            <div class="font-bold text-xl mb-2">{{task.title}} </div>
            <button
             @click="deleteTask(task.id)"
             class="bg-red-600 p-2 rounded shadow-sm text-white hover:bg-red-600/80">Delete</button>
          </div>
          
          <div class="text-gray-700 text-base">
           {{task.description}}
          </div>
          <div class="text-sm opacity-50">
            {{task.time}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

const Tasks = [
    {
        id: 1,
        title: 'Task 1',
        description: 'Description 1',
        time: '11:00 AM'
    },
    {
        id: 2,
        title: 'Task 2',
        description: 'Description 2',
        time: '9:00 PM'
    },
    {
        id: 3,
        title: 'Task 3',
        description: 'Description 3',
        time: '12:00 PM'
    }
]

export default {
  methods: {
    deleteLastTask() {
      this.tasks.pop() 
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter( t => t.id != id)
    },
    onChange(event) {
      this.tasks = this.tasks.filter(e => e.title == event.target.value)
      
    },
    log() {
      console.log(this.input);
      if (this.input == "") {
        
      }
    }
    
  },
  computed: {
    filteredList() {
      if (this.input == "") {
        return this.tasks
      }
      return this.tasks.filter(t => t.title.toUpperCase().includes(this.input.toUpperCase()))
    }

  },
  
  data() {
    return {
      tasks: Tasks,
      input: ''
    };
  },
  created() {
    console.log(this.tasks);
  },
};
</script>

<style lang=""></style>

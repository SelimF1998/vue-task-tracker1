<template>
    <div v-if="!showAddTask" >
        <button
         @click="onClick"
         class="bg-green-400 text-gray-200 font-bold rounded h-10 w-32">{{text}}</button>  
    </div>
    <div v-if="showAddTask" >
        <button
         @click="onClick"
         class="bg-red-400 text-gray-200 font-bold rounded h-10 w-32">{{text}}</button>  
    </div>
</template>
<script>
export default {
    name: "Button",
    props: {
        text: String,
        showAddTask : Boolean,
    },
    data() {
        return {
        }
    },
    methods: {
        onClick() {
            this.$emit('show-form')
        }   
    }, 
    
}
</script>
<style>
   
</style>
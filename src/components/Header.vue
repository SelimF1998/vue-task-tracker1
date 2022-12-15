<template>
    <div class="flex justify-between">
        <h1 class="text-gray-500 font-bold text-3xl text-start">{{title}}</h1>
        <Button :showAddTask="showAddTask" @show-form="$emit('show-form')" :text="showAddTask ? 'Close' : 'Add Task'" />   
    </div>
</template>
<script>
import Button from "./Button.vue"

export default {
    name: "Header",
    props: {
        title: String,
        showAddTask: Boolean,
    },
    emits: ['show-form'],
    components: {
        Button,
    },
    methods: {
        
    }
}
</script>
<style lang="">
    
</style>
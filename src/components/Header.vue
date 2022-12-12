<template>
    <div class="flex justify-between">
        <h1 class="text-gray-500 font-bold text-3xl text-start">{{title}}</h1>
        <Button text="Add Task" />   
    </div>
</template>
<script>
import Button from "./Button.vue"

export default {
    name: "Header",
    props: {
        title: String,
    },
    components: {
        Button,

    }

    

}
</script>
<style lang="">
    
</style>